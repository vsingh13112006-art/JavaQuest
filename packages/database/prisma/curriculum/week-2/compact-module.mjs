import { buildModule, mainProgram } from "./module-builder.mjs";

export function compactModule(meta, specs) {
  const items = specs.map((s) => ({
    slug: s[0], title: s[1], description: s[2],
    why: s[3], model: s[4], example: s[5],
    predict: [`${s[0]}-prediction`, `Predict: ${s[1]}`, s[6], s[7]],
    code: [`${s[0]}-challenge`, `Build: ${s[1]}`, s[8], mainProgram(s[9], s[10] ?? ""), mainProgram(s[11], s[12] ?? ""), [{ input: s[17], expectedOutput: s[13], isHidden: false }, ...(s[14] ?? [])]],
    difficulty: s[15] ?? "INTERMEDIATE", recap: s[16] ?? false,
  }));
  return buildModule({ ...meta, items });
}
