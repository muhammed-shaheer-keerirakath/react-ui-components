import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/lib/index"),
      formats: ["es"],
    },
  },
  plugins: [
    react(),
    dts({ include: ["src/lib"], exclude: ["src/**/*.spec.tsx"] }),
  ],
});
