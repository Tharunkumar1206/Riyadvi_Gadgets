import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // Spring Boot backend
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: {
      overlay: false,  // ✅ disables red error overlay in the browser
    },
  },
})
