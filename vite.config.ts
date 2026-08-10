import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import versionPlugin from "./vite-plugin-version";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), versionPlugin(env.DEPLOY_VERSION)],
    build: {
      modulePreload: {
        polyfill: false,
      },
      rollupOptions: {
        output: {
          // Group the libraries that are genuinely on every screen, and leave
          // the rest to Rollup.
          //
          // The old catch-all `return "vendor"` swept *all* of node_modules
          // into one eagerly-loaded chunk, which quietly cancelled the route
          // splitting: a library imported only by a lazy page still had to be
          // downloaded before the first screen could render.
          manualChunks(id) {
            if (!id.includes("node_modules")) return
            if (id.includes("@fullcalendar")) return "vendor-fullcalendar"
            if (id.includes("@radix-ui")) return "vendor-radix"
            if (id.includes("@tanstack")) return "vendor-query"
            if (id.includes("date-fns")) return "vendor-date"
            if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) {
              return "vendor-react"
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "https://dev.weel.uz",
          changeOrigin: true,
        },
        "/ws": {
          target: "wss://dev.weel.uz",
          ws: true,
          changeOrigin: true,
        },
      },
    },
  };
});
