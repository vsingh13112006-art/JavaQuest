import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"],
  format: ["esm"],
  clean: true,
  sourcemap: true,

  // Prisma must remain a runtime dependency.
  // Bundling it into ESM causes dynamic require("fs") failures.
  external: ["@prisma/client"],

  noExternal: [
    "@javaquets/config",
    "@javaquets/database",
    "@javaquets/shared",
    "@javaquets/validation",
  ],
});