import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  /* From Ionic */
  build: {
    minify: false,
    emptyOutDir: true,
  },
  /* Easy imports */
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
