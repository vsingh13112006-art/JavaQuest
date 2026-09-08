import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "set-why-set", title: "Why Set", code: false },
  { slug: "set-hashset-basics", title: "HashSet Basics", code: true },
  { slug: "set-duplicate-behaviour", title: "Duplicate Behaviour", code: false },
  { slug: "set-add-return-value", title: "`add` Return Value", code: true },
  { slug: "set-contains-and-remove", title: "`contains` and `remove`", code: false },
  { slug: "set-iterating-set", title: "Iterating Set", code: true },
  { slug: "set-set-of-objects-and-equality-intro", title: "Set of Objects and Equality Intro", code: false },
  { slug: "set-set-recap", title: "Set Recap", code: true }
];

export const setModule = buildTopicModule({
  slug: "set",
  title: "Module 34 — Set",
  description: "Unique values ko Set me store karke duplicate handling simple banao.",
  position: 34,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Set duplicate logical values ko allow nahi karta; order implementation par depend kar sakta hai.",
  model: "input values -> Set -> unique values",
  syntax: "Set<String> tags = new HashSet<>();",
  example: "Set<String> s=new HashSet<>();\ns.add(\"java\");s.add(\"java\");\nSystem.out.println(s.size());",
  trace: "first add true -> duplicate add false -> size 1",
  mistake: "Set se guaranteed index-based access expect karna.",
  fix: "Set ko uniqueness ke liye use karo, index-based sequence ke liye nahi.",
  remember: "Duplicate elimination Set ka primary use-case hai.",
  check: "Unique collection interface?",
  answer: "Set",
  labs: [{
    starterCode: "import java.util.*;\npublic class Main{public static void main(String[] args){Set<String> s=new HashSet<>();s.add(\"java\");s.add(\"java\");s.add(\"oop\");System.out.println(s.size());System.out.println(s.contains(\"oop\"));}}",
    solution: "import java.util.*;\npublic class Main{public static void main(String[] args){Set<String> s=new HashSet<>();s.add(\"java\");s.add(\"java\");s.add(\"oop\");System.out.println(s.size());System.out.println(s.contains(\"oop\"));}}",
    expectedOutput: "2\ntrue",
  }],
}, points);
