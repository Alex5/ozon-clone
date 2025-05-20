import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@shared", replacement: path.resolve(__dirname, "./src/shared") },
    ],
  },
}) satisfies UserConfig;
