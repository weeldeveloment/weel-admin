import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
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
});