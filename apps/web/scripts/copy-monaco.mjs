import { createRequire } from "node:module";
import { cpSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
const require = createRequire(import.meta.url);
const source = resolve(
  dirname(require.resolve("monaco-editor/package.json")),
  "min/vs",
);
const target = new URL("../public/monaco/vs", import.meta.url);
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });
