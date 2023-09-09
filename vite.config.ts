import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/',
  },
  resolve: {
    alias: {
      app: '/src/app',
      widgets: '/src/widgets',
      feature: '/src/feature',
      shared: '/src/shared',
      pages: '/src/pages',
      types: '/src/types',
    },
  },
});
