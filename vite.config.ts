import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://dimitrispax.github.io/echoes-of-greece/',
  server: {
    proxy: {
      '/api': {
        target: 'https://greek-writers-quotes-api.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
