import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const serverHost = env.VITE_SERVER_HOST;

  return {
    plugins: [
      tanstackRouter({ target: 'react', autoCodeSplitting: true }),
      react(),
      checker({
        typescript: true,
      }),
    ],
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: [
        'host.docker.internal',
        '.dev1l.click',
        '.trycloudflare.com',
      ],
      proxy: {
        '/api': {
          target: `${serverHost}`,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    define: {
      'process.env': {},
    },
    optimizeDeps: {
      force: true,
    },
  };
});
