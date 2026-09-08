import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "enums-oop-design-why-enums", title: "Why Enums", code: false },
  { slug: "enums-oop-design-declaring-enum", title: "Declaring Enum", code: true },
  { slug: "enums-oop-design-using-enum-values", title: "Using Enum Values", code: false },
  { slug: "enums-oop-design-enum-in-fields", title: "Enum in Fields", code: true },
  { slug: "enums-oop-design-enum-with-switch", title: "Enum with `switch`", code: false },
  { slug: "enums-oop-design-enum-methods-ka-intro", title: "Enum Methods ka Intro", code: true },
  { slug: "enums-oop-design-domain-modelling", title: "Domain Modelling", code: false },
  { slug: "enums-oop-design-enums-recap", title: "Enums Recap", code: true }
];

export const enumsOopDesignModule = buildTopicModule({
  slug: "enums-oop-design",
  title: "Module 31 — Enums & OOP Design",
  description: "Fixed domain values ko enum me model karke safer OOP state banao.",
  position: 31,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Enum fixed allowed values ka type-safe set deta hai, isliye random strings ki jagah valid states enforce hoti hain.",
  model: "OrderStatus = NEW | PAID | SHIPPED",
  syntax: "enum OrderStatus { NEW, PAID, SHIPPED }",
  example: "OrderStatus s=OrderStatus.PAID;\nSystem.out.println(s);",
  trace: "enum constant -> typed state -> switch/logic me safe use",
  mistake: "Status ko free-form String rakhna aur spelling bugs allow karna.",
  fix: "Closed set of values ho to enum strong choice hai.",
  remember: "Enum domain vocabulary ko code me explicit banata hai.",
  check: "Fixed set of named constants ke liye Java feature?",
  answer: "enum",
  labs: [{
    starterCode: "enum OrderStatus { NEW, PAID, SHIPPED }\npublic class Main {public static void main(String[] args){OrderStatus s=OrderStatus.PAID; /* print */}}",
    solution: "enum OrderStatus { NEW, PAID, SHIPPED }\npublic class Main {public static void main(String[] args){OrderStatus s=OrderStatus.PAID; System.out.println(\"Status: \"+s);}}",
    expectedOutput: "Status: PAID",
  }],
}, points);
