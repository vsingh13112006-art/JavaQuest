import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "abstract-classes-abstract-class-idea", title: "Abstract Class Idea", code: false },
  { slug: "abstract-classes-abstract-methods", title: "Abstract Methods", code: true },
  { slug: "abstract-classes-concrete-methods", title: "Concrete Methods", code: false },
  { slug: "abstract-classes-shared-state", title: "Shared State", code: true },
  { slug: "abstract-classes-concrete-child", title: "Concrete Child", code: false },
  { slug: "abstract-classes-constructor-in-abstract-class", title: "Constructor in Abstract Class", code: true },
  { slug: "abstract-classes-when-to-choose-abstract-base", title: "When to Choose Abstract Base", code: false },
  { slug: "abstract-classes-abstract-class-recap", title: "Abstract Class Recap", code: true }
];

export const abstractClassesModule = buildTopicModule({
  slug: "abstract-classes",
  title: "Module 28 — Abstract Classes",
  description: "Incomplete base classes aur mandatory child behaviour ko abstract classes se model karo.",
  position: 28,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Abstract class common state/behaviour de sakti hai aur abstract methods ke through child classes ko implementation contract deti hai.",
  model: "abstract base\n├ shared code\n└ abstract method -> child must implement",
  syntax: "abstract class Payment { abstract void pay(); }",
  example: "abstract class Payment{abstract void pay();}\nclass Card extends Payment{void pay(){System.out.println(\"Card paid\");}}",
  trace: "new Card() -> concrete implementation available",
  mistake: "Abstract class ka direct object create karna.",
  fix: "Abstract class ko base blueprint samjho; concrete child ka object banta hai.",
  remember: "Abstract method body nahi rakhta aur concrete child ko implement karna hota hai.",
  check: "Abstract class ka direct object bana sakte ho? yes/no",
  answer: "no",
  labs: [{
    starterCode: "abstract class Payment { abstract void pay(); }\nclass Card extends Payment { void pay(){ /* print */ } }\npublic class Main {public static void main(String[] args){new Card().pay();}}",
    solution: "abstract class Payment { abstract void pay(); }\nclass Card extends Payment { @Override void pay(){ System.out.println(\"Card paid\"); } }\npublic class Main {public static void main(String[] args){new Card().pay();}}",
    expectedOutput: "Card paid",
  }],
}, points);
