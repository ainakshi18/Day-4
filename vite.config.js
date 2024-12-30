import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    global: 'window', // Use 'window' instead of Node.js' global
  },
  plugins: [react()],

})
