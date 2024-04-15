import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: "lib/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}")
          .map((file) => [
            relative("lib", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: "assets/[name]-[hash:10][extname]",
        entryFileNames: "[name].js",
      },
      external: ["react", "react/jsx-runtime", "react-dom"],
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib"], exclude: ["lib/**/*.spec.tsx"], entryRoot: "lib" }),
  ],
});
3;
