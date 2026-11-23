import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'kksi-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/kksi.html';
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    open: '/kksi.html'
  },
  build: {
    rollupOptions: {
      input: 'kksi.html'
    }
  }
});
