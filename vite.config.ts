import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  base: "/react-lavka/",
  plugins: [
    react(),
    tsconfigPaths(),
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `reactlavka_${hash}`,
    }),
  ],
});
