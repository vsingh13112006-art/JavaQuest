import { javaMasteryModules } from "./index.mjs";

const allowedKinds = new Set(["MULTIPLE_CHOICE", "CODE", "OUTPUT_PREDICTION"]);
const fail = (m) => { throw new Error(m); };
const questSlugs = new Set();
const modulePositions = new Set();
let quests=0, lessons=0, exercises=0, code=0;
for (const mod of javaMasteryModules) {
  if (modulePositions.has(mod.position)) fail(`Duplicate module position ${mod.position}`);
  modulePositions.add(mod.position);
  const qpos=new Set();
  for (const q of mod.quests?.create ?? []) {
    quests++;
    if (questSlugs.has(q.slug)) fail(`Duplicate quest slug ${q.slug}`);
    questSlugs.add(q.slug);
    if (qpos.has(q.position)) fail(`Duplicate quest position in ${mod.slug}`);
    qpos.add(q.position);
    const lpos=new Set(), epos=new Set();
    for (const l of q.lessons?.create ?? []) { lessons++; if(lpos.has(l.position)) fail(`Duplicate lesson position ${q.slug}`); lpos.add(l.position); if(!l.content?.trim()) fail(`Empty lesson ${l.slug}`); }
    for (const e of q.exercises?.create ?? []) { exercises++; if(!allowedKinds.has(e.kind)) fail(`Bad exercise kind ${e.kind}`); if(epos.has(e.position)) fail(`Duplicate exercise position ${q.slug}`); epos.add(e.position); if(!e.prompt?.trim()) fail(`Empty prompt ${e.slug}`); if(e.kind==="CODE"){code++; if(!e.starterCode||!e.solution||(e.testCases?.create??[]).length===0) fail(`Incomplete CODE ${e.slug}`);} else if(!e.solution) fail(`Missing solution ${e.slug}`); }
  }
}
if (javaMasteryModules.length !== 48) fail(`Expected 48 modules, found ${javaMasteryModules.length}`);
for (let i=1;i<=48;i++) if(!modulePositions.has(i)) fail(`Missing module position ${i}`);
console.log(JSON.stringify({modules:javaMasteryModules.length,quests,lessons,exercises,code},null,2));
console.log("Curriculum validation passed.");
