import { defineConfig } from 'vite';

export default defineConfig({
  // Root directory for your project
  root: './',
  base: './',
  server: {
    // Open on your local network so you can test on your phone
    host: true,
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensures your map and hero images stay sharp
    minify: 'terser',
  },
});
