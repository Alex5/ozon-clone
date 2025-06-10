import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePluginCache } from "vite-plugin-cache";

export default defineConfig({
  base: "/react-lavka/",
  plugins: [react(), tsconfigPaths(), vitePluginCache()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5174",
        changeOrigin: true,
      },
    },
  },
});
