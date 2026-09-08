import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "generics-why-generics", title: "Why Generics", code: false },
  { slug: "generics-generic-class", title: "Generic Class", code: true },
  { slug: "generics-generic-constructor-use", title: "Generic Constructor Use", code: false },
  { slug: "generics-generic-methods", title: "Generic Methods", code: true },
  { slug: "generics-type-inference", title: "Type Inference `<>`", code: false },
  { slug: "generics-multiple-type-parameters-intro", title: "Multiple Type Parameters Intro", code: true },
  { slug: "generics-generic-collections-connection", title: "Generic Collections Connection", code: false },
  { slug: "generics-generics-recap", title: "Generics Recap", code: true }
];

export const genericsModule = buildTopicModule({
  slug: "generics",
  title: "Module 37 — Generics",
  description: "Type-safe reusable classes aur methods ko generics se build karo.",
  position: 37,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Generics type ko parameter bana dete hain, jisse same code multiple reference types ke saath compile-time safety rakhta hai.",
  model: "Box<T>\nT determined at use-site",
  syntax: "class Box<T> { private T value; }",
  example: "Box<String> b=new Box<>();\nb.set(\"Java\");",
  trace: "T -> String for this object -> get returns String",
  mistake: "Raw types use karke compile-time type safety lose karna.",
  fix: "Parameterized types prefer karo aur casts ko avoid karo.",
  remember: "Generics reuse ke saath type safety dete hain.",
  check: "Generic type parameter ka common placeholder?",
  answer: "T",
  labs: [{
    starterCode: "class Box<T>{private T value;void set(T v){value=v;}T get(){return value;}}\npublic class Main{public static void main(String[] args){Box<String> b=new Box<>();b.set(\"Java\");System.out.println(b.get());}}",
    solution: "class Box<T>{private T value;void set(T v){value=v;}T get(){return value;}}\npublic class Main{public static void main(String[] args){Box<String> b=new Box<>();b.set(\"Java\");System.out.println(b.get());}}",
    expectedOutput: "Java",
  }],
}, points);
