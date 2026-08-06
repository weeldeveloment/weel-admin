interface Fallbacks {
  /** Used when VITE_API_URL is unset in a dev build. */
  dev: string
  /**
   * Used when VITE_API_URL is unset in a production build. Omit it to make
   * the variable mandatory — the app then fails loudly at startup instead of
   * quietly talking to the wrong backend.
   */
  prod?: string
}

/**
 * Resolves the API base URL from the build environment.
 *
 * A plain `|| "https://dev.weel.uz/api"` fallback meant that forgetting to
 * pass VITE_API_URL to a production build produced a bundle that quietly
 * talked to the dev backend — no error, no warning, just the wrong data.
 */
export function resolveApiBaseUrl(
  configured: string | undefined,
  fallbacks: Fallbacks,
): string {
  const value = (configured ?? "").trim()
  if (value) return value.replace(/\/+$/, "")

  if (import.meta.env.PROD) {
    if (fallbacks.prod) return fallbacks.prod
    throw new Error(
      "VITE_API_URL is not set. A production build must be given the API URL " +
        "explicitly — refusing to fall back to the dev backend.",
    )
  }

  return fallbacks.dev
}
