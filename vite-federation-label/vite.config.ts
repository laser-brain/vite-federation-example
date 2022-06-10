import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "label",
      filename: "remoteEntry.js",
      exposes: {
        "./Label": "./src/components/Label.vue",
      },
    }),
  ],
  server: {
    port: 5002,
  },
});
