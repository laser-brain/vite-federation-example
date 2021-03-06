import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    cors: true,
  },
  preview: {
    port: 3000,
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
      name: 'router-host',
      filename: 'federation-host.js',
      remotes: {
        button: {
          external: 'http://localhost:3001/assets/remoteButton.js',
          externalType: 'url',
          format: 'esm',
          from: 'vite',
        },
        settings: {
          external: 'http://localhost:3002/assets/remoteSettings.js',
          externalType: 'url',
          format: 'esm',
          from: 'vite',
        },
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
    }),
  ],
});
