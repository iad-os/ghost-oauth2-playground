import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 3100,
  },
  define: {
    'process.env': {},
  },
});
