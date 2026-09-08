import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "iteration-collection-algorithms-for-each-with-collections", title: "For-each with Collections", code: false },
  { slug: "iteration-collection-algorithms-index-loop-with-list", title: "Index Loop with List", code: true },
  { slug: "iteration-collection-algorithms-search", title: "Search", code: false },
  { slug: "iteration-collection-algorithms-count-matches", title: "Count Matches", code: true },
  { slug: "iteration-collection-algorithms-min-and-max", title: "Min and Max", code: false },
  { slug: "iteration-collection-algorithms-sort-with-collections", title: "Sort with Collections", code: true },
  { slug: "iteration-collection-algorithms-aggregate-values", title: "Aggregate Values", code: false },
  { slug: "iteration-collection-algorithms-algorithms-recap", title: "Algorithms Recap", code: true }
];

export const iterationAlgorithmsModule = buildTopicModule({
  slug: "iteration-collection-algorithms",
  title: "Module 36 — Iteration & Collection Algorithms",
  description: "Collections par loop, search, count, min/max aur sorting jaise common algorithms practice karo.",
  position: 36,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Collection algorithm ka pattern hota hai: initialize -> iterate -> compare/update -> result.",
  model: "List data -> loop -> accumulator/state -> answer",
  syntax: "for (int x : values) { ... }",
  example: "List<Integer> v=List.of(4,1,7);\nint max=v.get(0);\nfor(int x:v) if(x>max) max=x;",
  trace: "max 4 -> 4 -> 7",
  mistake: "Har problem ke liye complex API dhoondhna instead of simple loop.",
  fix: "Pehle loop-based algorithm samjho; library helpers baad me readable shortcut bante hain.",
  remember: "Search/count/min/max ka mental model arrays aur collections dono me transferable hai.",
  check: "Collection traverse karne ka simple Java construct?",
  answer: "for-each loop",
  labs: [{
    starterCode: "import java.util.*;\npublic class Main{public static void main(String[] args){List<Integer> v=new ArrayList<>(List.of(4,1,7,3));int max=v.get(0);for(int x:v)if(x>max)max=x;Collections.sort(v);System.out.println(\"Max: \"+max);System.out.println(v);}}",
    solution: "import java.util.*;\npublic class Main{public static void main(String[] args){List<Integer> v=new ArrayList<>(List.of(4,1,7,3));int max=v.get(0);for(int x:v)if(x>max)max=x;Collections.sort(v);System.out.println(\"Max: \"+max);System.out.println(v);}}",
    expectedOutput: "Max: 7\n[1, 3, 4, 7]",
  }],
}, points);
