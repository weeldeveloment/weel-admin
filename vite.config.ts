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
          manualChunks(id) {
            if (!id.includes("node_modules")) return
            if (id.includes("@fullcalendar")) return "vendor-fullcalendar"
            if (id.includes("@radix-ui")) return "vendor-radix"
            if (id.includes("@tanstack")) return "vendor-query"
            if (id.includes("date-fns")) return "vendor-date"
            return "vendor"
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
