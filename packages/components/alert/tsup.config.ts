import {defineConfig} from "tsup";

export default defineConfig({
  clean: true,
  target: "ESNext",
  format: ["cjs", "esm"],
  banner: {js: '"use client";'},
});
