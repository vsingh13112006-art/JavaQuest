import { buildRichModule } from "./rich-module-builder.mjs";

export const tests = (expectedOutput, input) => [{ input, expectedOutput, isHidden: false }];

export function specModule(meta, rows) {
  return buildRichModule(meta, rows.map((r) => ({
    slug:r.slug,title:r.title,description:r.description,problem:r.problem,why:r.why,
    model:r.model,syntax:r.syntax,remember:r.remember,example:r.example,
    trace:r.trace,mistake:r.mistake,fix:r.fix,predict:r.predict,predict2:r.predict2,
    code:{slug:`${r.slug}-code`,title:r.codeTitle??`Build: ${r.title}`,prompt:r.prompt,starterCode:r.starter,solution:r.solution,tests:r.tests},
    bug:r.bug,difficulty:r.difficulty,minutes:r.minutes,
  })));
}
