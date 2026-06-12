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