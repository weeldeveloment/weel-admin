import { existsSync, readFileSync, statSync } from "node:fs";
import { join, resolve, sep } from "node:path";

const distDir = resolve(join(import.meta.dir, "dist"));
const port = Number(process.env.PORT || 3000);

const deployVersion =
  process.env.DEPLOY_VERSION ||
  (() => {
    try {
      return readFileSync(join(distDir, "..", ".deploy-version"), "utf-8").trim();
    } catch {
      return String(Date.now());
    }
  })();

function contentType(pathname: string): string | undefined {
  if (pathname.endsWith(".html")) return "text/html; charset=utf-8";
  if (pathname.endsWith(".css")) return "text/css; charset=utf-8";
  if (pathname.endsWith(".js") || pathname.endsWith(".mjs")) return "text/javascript; charset=utf-8";
  if (pathname.endsWith(".json")) return "application/json; charset=utf-8";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) return "image/jpeg";
  if (pathname.endsWith(".webp")) return "image/webp";
  if (pathname.endsWith(".ico")) return "image/x-icon";
  if (pathname.endsWith(".woff")) return "font/woff";
  if (pathname.endsWith(".woff2")) return "font/woff2";
  if (pathname.endsWith(".ttf")) return "font/ttf";
  if (pathname.endsWith(".eot")) return "application/vnd.ms-fontobject";
  return undefined;
}

function cacheHeadersFor(pathname: string) {
  const isHtml = pathname === "/" || pathname === "/index.html" || pathname.endsWith(".html");
  if (isHtml) {
    return {
      "Cache-Control": "private, no-cache, no-store, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
      "Surrogate-Control": "no-store",
      "CDN-Cache-Control": "private, no-store",
    };
  }

  if (pathname.match(/\.[a-f0-9]{6,}\./) || pathname.match(/\.(?:css|js|mjs|json|jpg|jpeg|png|gif|ico|svg|webp|woff2?|ttf|eot)$/)) {
    return {
      "Cache-Control": "public, max-age=31536000, immutable",
    };
  }

  return {
    "Cache-Control": "no-cache, no-store, must-revalidate",
  };
}

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);

    let pathname: string;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      // Malformed percent-encoding.
      return new Response("Bad Request", { status: 400 });
    }

    const rel = pathname === "/" ? "/index.html" : pathname;
    const filePath = resolve(join(distDir, rel.replace(/^\//, "")));

    // `new URL()` collapses literal `../`, but not the percent-encoded form,
    // so `/%2e%2e%2f...` survived decodeURIComponent as `../` and `join()`
    // happily walked out of distDir — turning this static server into an
    // arbitrary file read. Confine every resolved path to distDir.
    const isInsideDist = filePath === distDir || filePath.startsWith(distDir + sep);
    if (!isInsideDist) {
      return new Response("Forbidden", { status: 403 });
    }

    const finalPath = existsSync(filePath) ? filePath : join(distDir, "index.html");

    const file = Bun.file(finalPath);
    const headers: Record<string, string> = {};

    const ct = contentType(finalPath);
    if (ct) headers["Content-Type"] = ct;

    const ch = cacheHeadersFor(rel);
    Object.assign(headers, ch);

    headers["X-Deploy-Version"] = deployVersion;

    // The unused nginx.conf carried these; this server serves the app, so
    // they belong here.
    headers["X-Content-Type-Options"] = "nosniff";
    headers["X-Frame-Options"] = "SAMEORIGIN";
    headers["Referrer-Policy"] = "strict-origin-when-cross-origin";

    const isHtml = rel === "/" || rel === "/index.html" || rel.endsWith(".html");
    if (!isHtml) {
      try {
        const st = statSync(finalPath);
        headers["Last-Modified"] = new Date(st.mtimeMs).toUTCString();
        headers["ETag"] = `W/"${st.size}-${Math.floor(st.mtimeMs)}"`;
      } catch {
        // stat failed — skip validators
      }
    }

    return new Response(file, { headers });
  },
});

console.log(`Serving ${distDir} on :${port} [version=${deployVersion}]`);

