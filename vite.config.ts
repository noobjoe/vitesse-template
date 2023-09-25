import path from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import VueI18n from "@intlify/unplugin-vue-i18n/vite";
import { VantResolver } from "@vant/auto-import-resolver";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue(),
    Pages(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core", "vue-i18n"],
      dts: true,
      dirs: ["./src/composables"],
      vueTemplate: true,
    }),
    Components({
      dts: true,
      resolvers: [VantResolver()],
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, "./src/locales/**")],
    }),
  ],
});
