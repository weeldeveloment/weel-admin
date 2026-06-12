import { existsSync, statSync } from "node:fs";
import { join } from "node:path";

const distDir = join(import.meta.dir, "dist");
const port = Number(process.env.PORT || 3000);

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
  // Treat index.html (SPA shell) as no-cache so shell updates immediately after deploy
  if (pathname === "/" || pathname === "/index.html") {
    return {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    };
  }

  // Long-term cache for static hashed assets (Vite outputs hashed filenames)
  if (pathname.match(/\.[a-f0-9]{6,}\./) || pathname.match(/\.(?:css|js|mjs|json|jpg|jpeg|png|gif|ico|svg|webp|woff2?|ttf|eot)$/)) {
    return {
      "Cache-Control": "public, max-age=31536000, immutable",
    };
  }

  // Default: no-cache for unknown routes (SPA fallback will serve index.html)
  return {
    "Cache-Control": "no-cache, no-store, must-revalidate",
  };
}

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = decodeURIComponent(url.pathname);
    const rel = pathname === "/" ? "/index.html" : pathname;
    const filePath = join(distDir, rel.replace(/^\//, ""));

    const finalPath = existsSync(filePath) ? filePath : join(distDir, "index.html");

    // Prepare file response and add cache headers + basic validators
    const file = Bun.file(finalPath);
    const headers: Record<string, string> = {};

    const ct = contentType(finalPath);
    if (ct) headers["Content-Type"] = ct;

    // Add Cache-Control / ETag / Last-Modified where possible
    const relPathForHeaders = rel;
    const ch = cacheHeadersFor(relPathForHeaders);
    Object.assign(headers, ch);

    try {
      const st = statSync(finalPath);
      headers["Last-Modified"] = new Date(st.mtimeMs).toUTCString();
      headers["ETag"] = `W/"${st.size}-${Math.floor(st.mtimeMs)}"`;
    } catch (e) {
      // ignore
    }

    return new Response(file, { headers });
  },
});

console.log(`Serving ${distDir} on :${port}`);

