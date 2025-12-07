import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,              // listen on 0.0.0.0 (needed in remote envs)
    port: 5173,
    allowedHosts: true       // allow Diploi dev host
    // or: allowedHosts: ['dev-my-dev-react-vite-cfi4.code.diploi.me']
  }
})
