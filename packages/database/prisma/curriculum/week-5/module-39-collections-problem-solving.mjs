import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "collections-problem-solving-choose-the-right-collection", title: "Choose the Right Collection", code: false },
  { slug: "collections-problem-solving-remove-duplicates", title: "Remove Duplicates", code: true },
  { slug: "collections-problem-solving-frequency-counting", title: "Frequency Counting", code: false },
  { slug: "collections-problem-solving-lookup-tables", title: "Lookup Tables", code: true },
  { slug: "collections-problem-solving-group-data-manually", title: "Group Data Manually", code: false },
  { slug: "collections-problem-solving-merge-collection-results", title: "Merge Collection Results", code: true },
  { slug: "collections-problem-solving-debug-collection-logic", title: "Debug Collection Logic", code: false },
  { slug: "collections-problem-solving-problem-solving-recap", title: "Problem Solving Recap", code: true }
];

export const collectionsProblemSolvingModule = buildTopicModule({
  slug: "collections-problem-solving",
  title: "Module 39 — Collections Problem Solving",
  description: "List, Set aur Map ko problem shape ke hisaab se choose karke mixed problems solve karo.",
  position: 39,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Collection choose karne se pehle requirement identify karo: order, uniqueness, ya key-based lookup.",
  model: "ordered -> List\nunique -> Set\nkey/value -> Map",
  syntax: "List<T> / Set<T> / Map<K,V>",
  example: "List<String> words=List.of(\"a\",\"b\",\"a\");\nSet<String> unique=new HashSet<>(words);",
  trace: "list keeps 3 entries -> set keeps 2 unique",
  mistake: "Har problem me default ArrayList use karna.",
  fix: "Data access pattern ke hisaab se collection choose karo.",
  remember: "Correct data structure algorithm ko simpler bana sakta hai.",
  check: "Frequency counting ke liye useful structure?",
  answer: "Map",
  labs: [{
    starterCode: "import java.util.*;\npublic class Main{public static void main(String[] args){List<String> words=List.of(\"java\",\"oop\",\"java\");Map<String,Integer> freq=new LinkedHashMap<>();for(String w:words)freq.put(w,freq.getOrDefault(w,0)+1);System.out.println(freq);}}",
    solution: "import java.util.*;\npublic class Main{public static void main(String[] args){List<String> words=List.of(\"java\",\"oop\",\"java\");Map<String,Integer> freq=new LinkedHashMap<>();for(String w:words)freq.put(w,freq.getOrDefault(w,0)+1);System.out.println(freq);}}",
    expectedOutput: "{java=2, oop=1}",
  }],
}, points);
