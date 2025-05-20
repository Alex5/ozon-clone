import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  // resolve: {
  //   alias: [
  //     {
  //       find: "@shared",
  //       replacement: path.resolve(__dirname, "./src/shared/*"),
  //     },
  //   ],
  // },
}) satisfies UserConfig;
