import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // можно любой свободный порт
    host: true, // чтобы Vite слушал все интерфейсы (localhost + VPN)
  },


    base: './',  // ← относительные пути
  build: {
    outDir: 'dist'
  }
});
