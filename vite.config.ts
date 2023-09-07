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
      components: '/src/components',
      pages: '/src/pages',
      types: '/src/types',
      data: '/src/data',
    },
  },
});
