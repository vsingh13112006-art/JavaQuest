import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "map-map-mental-model", title: "Map Mental Model", code: false },
  { slug: "map-put-and-get", title: "`put` and `get`", code: true },
  { slug: "map-unique-keys", title: "Unique Keys", code: false },
  { slug: "map-containskey", title: "`containsKey`", code: true },
  { slug: "map-default-values", title: "Default Values", code: false },
  { slug: "map-iterating-entries", title: "Iterating Entries", code: true },
  { slug: "map-map-of-objects", title: "Map of Objects", code: false },
  { slug: "map-map-recap", title: "Map Recap", code: true }
];

export const mapModule = buildTopicModule({
  slug: "map",
  title: "Module 35 — Map",
  description: "Key-value data ko `Map` ke through model aur query karo.",
  position: 35,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Map har unique key ko ek value ke saath associate karta hai.",
  model: "key -> value\n\"Aman\" -> 90\n\"Riya\" -> 95",
  syntax: "Map<String,Integer> scores = new HashMap<>();",
  example: "Map<String,Integer> m=new HashMap<>();\nm.put(\"Aman\",90);\nSystem.out.println(m.get(\"Aman\"));",
  trace: "put key/value -> get by key -> 90",
  mistake: "Map ko list samajhkar numeric index se access karna.",
  fix: "Map me data key se retrieve hota hai, position se nahi.",
  remember: "Lookup naturally key-based ho to Map strong fit hai.",
  check: "Key-value collection interface?",
  answer: "Map",
  labs: [{
    starterCode: "import java.util.*;\npublic class Main{public static void main(String[] args){Map<String,Integer> m=new LinkedHashMap<>();m.put(\"Aman\",90);m.put(\"Riya\",95);System.out.println(m.get(\"Riya\"));System.out.println(m.size());}}",
    solution: "import java.util.*;\npublic class Main{public static void main(String[] args){Map<String,Integer> m=new LinkedHashMap<>();m.put(\"Aman\",90);m.put(\"Riya\",95);System.out.println(m.get(\"Riya\"));System.out.println(m.size());}}",
    expectedOutput: "95\n2",
  }],
}, points);
