import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    cors: true,
  },
  preview: {
    port: 3001,
    cors: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: 'button',
      filename: 'remoteButton.js',
      exposes: {
        './Button': './src/components/Button.tsx',
      },
      shared: { react: { singleton: true } },
    }),
  ],
});
