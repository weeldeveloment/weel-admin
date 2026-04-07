import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://dev.weel.uz',
        changeOrigin: true,
      },
      '/ws': {
        target: process.env.VITE_WS_URL || 'wss://dev.weel.uz',
        ws: true,
        changeOrigin: true,
      },
    },
  },
})
