import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "method-overriding-why-override", title: "Why Override", code: false },
  { slug: "method-overriding-matching-method-signature", title: "Matching Method Signature", code: true },
  { slug: "method-overriding-override-annotation", title: "`@Override` Annotation", code: false },
  { slug: "method-overriding-runtime-behaviour", title: "Runtime Behaviour", code: true },
  { slug: "method-overriding-calling-parent-with-super", title: "Calling Parent with `super`", code: false },
  { slug: "method-overriding-overloading-vs-overriding", title: "Overloading vs Overriding", code: true },
  { slug: "method-overriding-override-rules", title: "Override Rules", code: false },
  { slug: "method-overriding-override-recap", title: "Override Recap", code: true }
];

export const methodOverridingModule = buildTopicModule({
  slug: "method-overriding",
  title: "Module 26 — Method Overriding",
  description: "Same method contract ko child class me specialised behaviour dena seekho.",
  position: 26,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Overriding me child class parent ke same method signature ka apna implementation deti hai.",
  model: "Parent method contract\n        ↓\nChild same signature, new behaviour",
  syntax: "@Override\nvoid sound(){ ... }",
  example: "class Animal { void sound(){System.out.println(\"sound\");} }\nclass Dog extends Animal { @Override void sound(){System.out.println(\"Bark\");} }",
  trace: "Dog.sound() -> child implementation execute",
  mistake: "Method name same rakhkar parameters badal dena aur use overriding samajhna.",
  fix: "Signature matching aur `@Override` compiler check use karo.",
  remember: "`@Override` intent clear karta hai aur signature mistake pakadta hai.",
  check: "Overridden method identify karne ke liye useful annotation?",
  answer: "@Override",
  labs: [{
    starterCode: "class Animal { void sound(){ System.out.println(\"Animal sound\"); } }\nclass Dog extends Animal { @Override void sound(){ /* Bark */ } }\npublic class Main { public static void main(String[] args){ new Dog().sound(); } }",
    solution: "class Animal { void sound(){ System.out.println(\"Animal sound\"); } }\nclass Dog extends Animal { @Override void sound(){ System.out.println(\"Bark\"); } }\npublic class Main { public static void main(String[] args){ new Dog().sound(); } }",
    expectedOutput: "Bark",
  }],
}, points);
