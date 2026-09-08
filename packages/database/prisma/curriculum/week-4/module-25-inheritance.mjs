import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "inheritance-parent-aur-child-class", title: "Parent aur Child Class", code: false },
  { slug: "inheritance-extends-keyword", title: "`extends` Keyword", code: true },
  { slug: "inheritance-inherited-fields", title: "Inherited Fields", code: false },
  { slug: "inheritance-inherited-methods", title: "Inherited Methods", code: true },
  { slug: "inheritance-constructor-chain-ka-intro", title: "Constructor Chain ka Intro", code: false },
  { slug: "inheritance-protected-vs-private-access", title: "Protected vs Private Access", code: true },
  { slug: "inheritance-is-a-relationship", title: "Is-a Relationship", code: false },
  { slug: "inheritance-inheritance-recap", title: "Inheritance Recap", code: true }
];

export const inheritanceModule = buildTopicModule({
  slug: "inheritance",
  title: "Module 25 — Inheritance",
  description: "Parent-child class relationship ko `extends`, inherited state aur reusable behaviour ke through samjho.",
  position: 25,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Inheritance me child class parent ke accessible members ko reuse karti hai aur apni extra capability add kar sakti hai.",
  model: "Parent class -> common state/behaviour\nChild class -> parent reuse + specialised behaviour",
  syntax: "class Dog extends Animal { }",
  example: "class Animal { void move(){ System.out.println(\"Animal moves\"); } }\nclass Dog extends Animal { }",
  trace: "new Dog() -> Dog object -> inherited move() available",
  mistake: "Har class ko sirf code reuse ke liye inheritance me jod dena.",
  fix: "Inheritance tab use karo jab real \"is-a\" relationship ho.",
  remember: "`extends` relationship ko model karta hai, sirf copy-paste reduction ko nahi.",
  check: "Java me class inheritance ke liye keyword?",
  answer: "extends",
  labs: [{
    starterCode: "class Animal { void move(){ System.out.println(\"Animal moves\"); } }\nclass Dog extends Animal { }\npublic class Main { public static void main(String[] args){ Dog d=new Dog(); /* call inherited method */ } }",
    solution: "class Animal { void move(){ System.out.println(\"Animal moves\"); } }\nclass Dog extends Animal { }\npublic class Main { public static void main(String[] args){ Dog d=new Dog(); d.move(); } }",
    expectedOutput: "Animal moves",
  }],
}, points);
