import { existsSync } from "node:fs";
import { join } from "node:path";

const distDir = join(import.meta.dir, "dist");
const port = Number(process.env.PORT);

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

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = decodeURIComponent(url.pathname);
    const rel = pathname === "/" ? "/index.html" : pathname;
    const filePath = join(distDir, rel.replace(/^\//, ""));

    // Serve the file if it exists, otherwise fall back to SPA index.html.
    const finalPath = existsSync(filePath) ? filePath : join(distDir, "index.html");
    const file = Bun.file(finalPath);

    return new Response(file, {
      headers: {
        ...(contentType(finalPath) ? { "Content-Type": contentType(finalPath)! } : {}),
      },
    });
  },
});

console.log(`Serving ${distDir} on :${port}`);

