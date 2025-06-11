import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePluginCache } from "vite-plugin-cache";

const plugins: PluginOption[] = [react(), tsconfigPaths(), vitePluginCache()];

export default defineConfig({
  base: "/react-lavka/",
  plugins: plugins,
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5174",
        changeOrigin: true,
      },
    },
  },
});
