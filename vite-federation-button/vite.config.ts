import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
      vue(),
      federation({
        name: "button",
        filename: "remoteEntry.js",
        exposes: {
          "./Button": "./src/components/Button.vue",
        },
      }),
    ],
    server: {
      port: 5001,
    },
});
