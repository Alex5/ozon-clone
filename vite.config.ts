import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePluginCache } from "vite-plugin-cache";

const plugins: PluginOption[] = [
  react(),
  tsconfigPaths(),
  vitePluginCache({
    config: (dc) => ({
      ...dc,
      "swr-api-cache": {
        strategy: "stale-while-revalidate",
        match: ({ url, request }) =>
          url.pathname.includes("/api/v1/") &&
          !url.pathname.includes("/api/v1/cart") &&
          request.method === "GET",
        plugins: {
          expiration: {
            maxAgeSeconds: 60,
            maxEntries: 100,
          },
        },
      },
      "network-first-api-cache": {
        match: ({ url, request }) =>
          url.pathname.includes("/api/v1/cart") && request.method === "GET",
        strategy: "network-first",
        plugins: {
          expiration: {
            maxAgeSeconds: 60 * 5,
            maxEntries: 100,
          },
        },
      },
    }),
  }),
];

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
