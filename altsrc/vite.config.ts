import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  server: {
    watch: {
      usePolling: true
    },
    open: false,
    host: '0.0.0.0'
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      }
      // Enable esbuild polyfill plugins
    }
  }
});
