/**
 * Brauzer xatolarini backend orqali Loki/Grafana'ga yuborish.
 *
 * Nima ushlanadi: window "error", "unhandledrejection", console.error,
 * console.warn (faqat warn/error — info/log yuborilmaydi).
 * Qayerga: POST ${VITE_FRONTEND_LOG_URL}  (default: ${VITE_API_URL}/api/frontend/)
 *          header X-Frontend-Log-Token: ${VITE_FRONTEND_LOG_TOKEN}
 * Backend: apps/shared/views.py FrontendLogView -> logger "frontend" ->
 *          stdout JSON -> Alloy -> Loki  ({service="weel-backend", logger="frontend", app="weel-admin"})
 *
 * Himoya: bir xil xabar 60s ichida bir marta; daqiqasiga eng ko'pi 20 ta;
 * xabar 2000 belgidan qisqartiriladi; token yo'q bo'lsa hech narsa yuborilmaydi.
 * Token sir emas (bundle ichida) — u faqat tasodifiy floodni to'xtatadi;
 * asl limit backend throttle'ida (frontend_log: 2000/soat/IP).
 */

const APP_NAME = "weel-admin"
const MAX_PER_MINUTE = 20
const DEDUPE_WINDOW_MS = 60_000
const MAX_MESSAGE_LENGTH = 2000

type Level = "warning" | "error"

const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env ?? {}
const API_URL = (env.VITE_API_URL ?? "").replace(/\/+$/, "")
const INGEST_URL = env.VITE_FRONTEND_LOG_URL ?? (API_URL ? `${API_URL}/api/frontend/` : "")
const TOKEN = env.VITE_FRONTEND_LOG_TOKEN ?? ""
const RELEASE = env.VITE_APP_VERSION ?? env.VITE_GIT_SHA ?? ""

const originalConsole = {
  error: console.error.bind(console),
  warn: console.warn.bind(console),
}

let installed = false
let windowStart = Date.now()
let sentInWindow = 0
const recent = new Map<string, number>()

function serialize(value: unknown): unknown {
  if (value instanceof Error) {
    return { name: value.name, message: value.message, stack: value.stack }
  }
  if (typeof value === "bigint") return value.toString()
  if (typeof value === "function") return `[Function ${value.name || "anonymous"}]`
  if (typeof value === "object" && value !== null) {
    try {
      return JSON.parse(
        JSON.stringify(value, (_k, v) =>
          v instanceof Error ? { name: v.name, message: v.message, stack: v.stack } : typeof v === "bigint" ? v.toString() : v,
        ),
      )
    } catch {
      return Object.prototype.toString.call(value)
    }
  }
  return value
}

function toMessage(args: unknown[]): string {
  return args
    .map((a) => {
      if (typeof a === "string") return a
      if (a instanceof Error) return `${a.name}: ${a.message}`
      try {
        return JSON.stringify(serialize(a))
      } catch {
        return String(a)
      }
    })
    .join(" ")
    .slice(0, MAX_MESSAGE_LENGTH)
}

function allowed(key: string): boolean {
  const now = Date.now()
  if (now - windowStart > 60_000) {
    windowStart = now
    sentInWindow = 0
  }
  if (sentInWindow >= MAX_PER_MINUTE) return false
  const last = recent.get(key)
  if (last && now - last < DEDUPE_WINDOW_MS) return false
  recent.set(key, now)
  if (recent.size > 200) {
    for (const [k, t] of recent) if (now - t > DEDUPE_WINDOW_MS) recent.delete(k)
  }
  sentInWindow += 1
  return true
}

function currentUserId(): string | undefined {
  try {
    const raw = localStorage.getItem("user") ?? localStorage.getItem("auth_user")
    if (!raw) return undefined
    const parsed = JSON.parse(raw) as { id?: string | number; guid?: string }
    return parsed?.id != null ? String(parsed.id) : parsed?.guid
  } catch {
    return undefined
  }
}

function ship(level: Level, message: string, extra: Record<string, unknown>) {
  if (!INGEST_URL || !TOKEN || typeof window === "undefined") return
  if (!allowed(`${level}:${message.slice(0, 200)}`)) return
  const body = JSON.stringify({
    level,
    message,
    url: window.location.href,
    user_id: currentUserId(),
    extra: {
      app: APP_NAME,
      release: RELEASE || undefined,
      userAgent: navigator.userAgent,
      pathname: window.location.pathname,
      language: navigator.language,
      online: navigator.onLine,
      ...extra,
    },
  })
  try {
    // keepalive: sahifa yopilayotganda ham yetib boradi (sendBeacon header qo'ya olmaydi).
    void fetch(INGEST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Frontend-Log-Token": TOKEN },
      body,
      keepalive: true,
      credentials: "omit",
    }).catch(() => undefined)
  } catch {
    // hech qachon ilovani yiqitmaymiz
  }
}

/** Ilova kodidan qo'lda yuborish uchun (masalan API xatosi ushlanganda). */
export function reportError(message: string, extra: Record<string, unknown> = {}) {
  ship("error", message.slice(0, MAX_MESSAGE_LENGTH), { scope: "manual", ...extra })
}

export function reportWarning(message: string, extra: Record<string, unknown> = {}) {
  ship("warning", message.slice(0, MAX_MESSAGE_LENGTH), { scope: "manual", ...extra })
}

export function installObservabilityHooks() {
  if (installed || typeof window === "undefined") return
  installed = true

  console.error = (...args: unknown[]) => {
    originalConsole.error(...args)
    ship("error", toMessage(args), { scope: "console" })
  }
  console.warn = (...args: unknown[]) => {
    originalConsole.warn(...args)
    ship("warning", toMessage(args), { scope: "console" })
  }

  window.addEventListener("error", (event: Event) => {
    if (event instanceof ErrorEvent) {
      ship("error", event.message || "window.error", {
        scope: "runtime",
        filename: event.filename || undefined,
        lineno: event.lineno || undefined,
        colno: event.colno || undefined,
        stack: event.error instanceof Error ? event.error.stack : undefined,
      })
      return
    }
    // Resurs yuklanmadi (script/img/css) — target'dan URL olamiz.
    const target = event.target as { src?: string; href?: string; tagName?: string } | null
    const src = target?.src || target?.href
    if (src) ship("warning", `resource failed: ${target?.tagName ?? "?"} ${src}`.slice(0, 500), { scope: "resource" })
  }, true)

  window.addEventListener("unhandledrejection", (event) => {
    const reason = (event as PromiseRejectionEvent).reason
    const message = reason instanceof Error ? `${reason.name}: ${reason.message}` : toMessage([reason])
    ship("error", message || "unhandledrejection", {
      scope: "runtime",
      event: "unhandledrejection",
      stack: reason instanceof Error ? reason.stack : undefined,
    })
  })
}
