import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "streams-stream-mental-model", title: "Stream Mental Model", code: false },
  { slug: "streams-create-stream", title: "Create Stream", code: true },
  { slug: "streams-filter", title: "`filter`", code: false },
  { slug: "streams-map", title: "`map`", code: true },
  { slug: "streams-terminal-operations", title: "Terminal Operations", code: false },
  { slug: "streams-tolist-and-foreach", title: "`toList` and `forEach`", code: true },
  { slug: "streams-reduce-count-intro", title: "Reduce/Count Intro", code: false },
  { slug: "streams-streams-recap", title: "Streams Recap", code: true }
];

export const streamsModule = buildTopicModule({
  slug: "streams",
  title: "Module 46 — Streams",
  description: "Collections ko declarative pipeline me filter, map aur collect/process karna seekho.",
  position: 46,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Stream data ko store nahi karta; source se elements ko pipeline operations ke through process karta hai.",
  model: "source -> filter -> map -> terminal operation",
  syntax: "list.stream().filter(...).map(...).toList()",
  example: "List.of(1,2,3,4).stream().filter(x->x%2==0).map(x->x*10).toList();",
  trace: "1,2,3,4 -> 2,4 -> 20,40",
  mistake: "Stream pipeline ke beech source collection automatically modified assume karna.",
  fix: "Most stream operations new processing result banati hain; source unchanged rehta hai.",
  remember: "Intermediate operations lazy pipeline banati hain; terminal operation execution trigger karta hai.",
  check: "Only matching elements keep karne wala stream operation?",
  answer: "filter",
  labs: [{
    starterCode: "import java.util.*;\npublic class Main{public static void main(String[] args){List<Integer> out=List.of(1,2,3,4).stream().filter(x->x%2==0).map(x->x*10).toList();System.out.println(out);}}",
    solution: "import java.util.*;\npublic class Main{public static void main(String[] args){List<Integer> out=List.of(1,2,3,4).stream().filter(x->x%2==0).map(x->x*10).toList();System.out.println(out);}}",
    expectedOutput: "[20, 40]",
  }],
}, points);
