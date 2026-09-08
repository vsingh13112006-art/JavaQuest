import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "composition-has-a-relationship", title: "Has-a Relationship", code: false },
  { slug: "composition-object-as-field", title: "Object as Field", code: true },
  { slug: "composition-constructor-injection-ka-basic-idea", title: "Constructor Injection ka Basic Idea", code: false },
  { slug: "composition-delegation", title: "Delegation", code: true },
  { slug: "composition-lifecycle-ownership", title: "Lifecycle Ownership", code: false },
  { slug: "composition-composition-vs-inheritance", title: "Composition vs Inheritance", code: true },
  { slug: "composition-flexible-design", title: "Flexible Design", code: false },
  { slug: "composition-composition-recap", title: "Composition Recap", code: true }
];

export const compositionModule = buildTopicModule({
  slug: "composition",
  title: "Module 30 — Composition",
  description: "Has-a relationships aur objects ko combine karke flexible OOP design banana seekho.",
  position: 30,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Composition me ek object dusre object ko field ke roop me own/use karta hai.",
  model: "Car has Engine\nOrder has Customer\nTeam has Player[]",
  syntax: "class Car { private Engine engine; }",
  example: "class Engine{void start(){System.out.println(\"Engine on\");}}\nclass Car{private final Engine e=new Engine();void start(){e.start();}}",
  trace: "Car.start -> delegates to Engine.start",
  mistake: "Har relationship ko `extends` banana.",
  fix: "Has-a relationship me composition inheritance se zyada natural hoti hai.",
  remember: "Composition responsibilities ko chhote collaborating objects me divide karti hai.",
  check: "Car has Engine kis relationship ka example hai?",
  answer: "composition",
  labs: [{
    starterCode: "class Engine { void start(){System.out.println(\"Engine on\");} }\nclass Car { private Engine engine=new Engine(); void start(){ /* delegate */ } }\npublic class Main {public static void main(String[] args){new Car().start();}}",
    solution: "class Engine { void start(){System.out.println(\"Engine on\");} }\nclass Car { private Engine engine=new Engine(); void start(){ engine.start(); } }\npublic class Main {public static void main(String[] args){new Car().start();}}",
    expectedOutput: "Engine on",
  }],
}, points);
