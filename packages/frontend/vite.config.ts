import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 3001,
    strictPort: true,
   },
   server: {
    port: 3001,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
   },
})
