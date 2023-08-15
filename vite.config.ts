import { fileURLToPath, URL } from "node:url";
import pluginRewriteAll from 'vite-plugin-rewrite-all';

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), pluginRewriteAll()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/style/global-variables.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
});
