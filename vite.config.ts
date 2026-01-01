import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { theme } from './src/theme'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: theme.port,
  },
})
