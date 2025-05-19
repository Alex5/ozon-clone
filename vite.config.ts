import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitetsconfigpaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), vitetsconfigpaths()],
}) satisfies UserConfig;
