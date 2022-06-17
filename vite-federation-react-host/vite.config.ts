import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "router-host",
      filename: "remoteEntry.js",
      remotes: {
        button: {
          external: "http://localhost:5001/assets/remoteEntry.js",
          externalType: "url",
          format: "esm",
          from: "vite",
        }
      },
      shared: ["react"],
    })]
})
