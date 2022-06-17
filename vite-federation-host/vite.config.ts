import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "router-host",
      filename: "remoteEntry.js",
      remotes: {
        label: {
          external: "http://localhost:5002/assets/remoteEntry.js",
          externalType: "url",
          format: "esm",
          from: "vite",
        },
        // button: {
        //   external: "http://localhost:5001/assets/remoteEntry.js",
        //   externalType: "url",
        //   format: "esm",
        //   from: "vite",
        // },
        button: {
          external: "http://localhost:5003/assets/remoteEntry.js",
          externalType: "url",
          format: "esm",
          from: "vite",
        }
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 5000,
    cors: true,
  },
});
