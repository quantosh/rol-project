import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth']
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url))
      }
    ]
  }
})
