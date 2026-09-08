import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "interfaces-interface-as-contract", title: "Interface as Contract", code: false },
  { slug: "interfaces-implements-keyword", title: "`implements` Keyword", code: true },
  { slug: "interfaces-interface-references", title: "Interface References", code: false },
  { slug: "interfaces-multiple-capabilities", title: "Multiple Capabilities", code: true },
  { slug: "interfaces-default-design-thinking", title: "Default Design Thinking", code: false },
  { slug: "interfaces-abstract-class-vs-interface", title: "Abstract Class vs Interface", code: true },
  { slug: "interfaces-loose-coupling-intro", title: "Loose Coupling Intro", code: false },
  { slug: "interfaces-interface-recap", title: "Interface Recap", code: true }
];

export const interfacesModule = buildTopicModule({
  slug: "interfaces",
  title: "Module 29 — Interfaces",
  description: "Capability contracts ko interfaces se define aur multiple implementations me reuse karo.",
  position: 29,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Interface batata hai object kya capability promise karta hai; implementation class decide karti hai kaise.",
  model: "interface capability\n        ↓ implements\nconcrete class",
  syntax: "interface Flyable { void fly(); }\nclass Drone implements Flyable { public void fly(){} }",
  example: "Flyable f=new Drone();\nf.fly();",
  trace: "contract -> implementation -> interface reference se call",
  mistake: "Interface method implement karte waqt required visibility miss karna.",
  fix: "Interface contract ko exactly implement karo; implementation public hoti hai.",
  remember: "Interface capability ko class hierarchy se alag express kar sakta hai.",
  check: "Class interface ko kaunse keyword se adopt karti hai?",
  answer: "implements",
  labs: [{
    starterCode: "interface Flyable { void fly(); }\nclass Drone implements Flyable { public void fly(){ /* print */ } }\npublic class Main {public static void main(String[] args){Flyable f=new Drone();f.fly();}}",
    solution: "interface Flyable { void fly(); }\nclass Drone implements Flyable { public void fly(){ System.out.println(\"Drone flying\"); } }\npublic class Main {public static void main(String[] args){Flyable f=new Drone();f.fly();}}",
    expectedOutput: "Drone flying",
  }],
}, points);
