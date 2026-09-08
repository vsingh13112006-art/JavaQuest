import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "polymorphism-parent-reference", title: "Parent Reference", code: false },
  { slug: "polymorphism-child-object", title: "Child Object", code: true },
  { slug: "polymorphism-dynamic-method-dispatch", title: "Dynamic Method Dispatch", code: false },
  { slug: "polymorphism-polymorphic-arrays", title: "Polymorphic Arrays", code: true },
  { slug: "polymorphism-common-api", title: "Common API", code: false },
  { slug: "polymorphism-safe-design-thinking", title: "Safe Design Thinking", code: true },
  { slug: "polymorphism-when-polymorphism-helps", title: "When Polymorphism Helps", code: false },
  { slug: "polymorphism-polymorphism-recap", title: "Polymorphism Recap", code: true }
];

export const polymorphismModule = buildTopicModule({
  slug: "polymorphism",
  title: "Module 27 — Polymorphism",
  description: "Parent reference aur child objects ke saath runtime polymorphism build karo.",
  position: 27,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Polymorphism me ek common reference type different child objects ko hold kar sakta hai aur overridden method runtime par choose hoti hai.",
  model: "Animal ref\n  ├ Dog object -> Bark\n  └ Cat object -> Meow",
  syntax: "Animal a = new Dog();\na.sound();",
  example: "Animal[] pets={new Dog(),new Cat()};\nfor(Animal p:pets) p.sound();",
  trace: "reference type common -> actual object different -> runtime dispatch",
  mistake: "Object ka actual type ignore karke sirf reference type ke method ko assume karna.",
  fix: "Overridden instance method actual object ke basis par dispatch hoti hai.",
  remember: "Common parent reference extensible code ka base ban sakta hai.",
  check: "`Animal a = new Dog()` me actual object type?",
  answer: "Dog",
  labs: [{
    starterCode: "class Animal { void sound(){} }\nclass Dog extends Animal { void sound(){System.out.println(\"Bark\");} }\nclass Cat extends Animal { void sound(){System.out.println(\"Meow\");} }\npublic class Main {public static void main(String[] args){ Animal[] a={new Dog(),new Cat()}; for(Animal x:a){x.sound();}}}",
    solution: "class Animal { void sound(){} }\nclass Dog extends Animal { @Override void sound(){System.out.println(\"Bark\");} }\nclass Cat extends Animal { @Override void sound(){System.out.println(\"Meow\");} }\npublic class Main {public static void main(String[] args){ Animal[] a={new Dog(),new Cat()}; for(Animal x:a){x.sound();}}}",
    expectedOutput: "Bark\nMeow",
  }],
}, points);
