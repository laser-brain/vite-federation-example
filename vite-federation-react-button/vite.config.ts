import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'button',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.tsx',
      },
    }),
  ],
  server: {
    port: 5001,
    cors: true,
  },
});
