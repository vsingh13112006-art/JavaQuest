import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "exceptions-exception-mental-model", title: "Exception Mental Model", code: false },
  { slug: "exceptions-try-and-catch", title: "`try` and `catch`", code: true },
  { slug: "exceptions-specific-exception-types", title: "Specific Exception Types", code: false },
  { slug: "exceptions-multiple-catch-blocks", title: "Multiple Catch Blocks", code: true },
  { slug: "exceptions-finally", title: "`finally`", code: false },
  { slug: "exceptions-throwing-exceptions-intro", title: "Throwing Exceptions Intro", code: true },
  { slug: "exceptions-propagation-basics", title: "Propagation Basics", code: false },
  { slug: "exceptions-exceptions-recap", title: "Exceptions Recap", code: true }
];

export const exceptionsModule = buildTopicModule({
  slug: "exceptions",
  title: "Module 41 — Exceptions",
  description: "Runtime failures ko understand, catch aur intentionally handle karna seekho.",
  position: 41,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Exception normal control flow se alag failure signal hai; `try/catch` recover ya meaningful response dene ka mechanism hai.",
  model: "try risky code\ncatch matching exception\nfinally optional cleanup",
  syntax: "try { ... } catch (Exception e) { ... }",
  example: "try{int x=10/0;}catch(ArithmeticException e){System.out.println(\"Invalid math\");}",
  trace: "exception thrown -> matching catch -> program continues",
  mistake: "Har exception ko empty catch me swallow kar dena.",
  fix: "Handle tab karo jab meaningful action ho; warna clear propagation better ho sakta hai.",
  remember: "Specific exceptions ko samajhkar handle karo, blindly catch-all nahi.",
  check: "Risky code kis block me jaata hai?",
  answer: "try",
  labs: [{
    starterCode: "public class Main{public static void main(String[] args){try{int x=10/0;System.out.println(x);}catch(ArithmeticException e){System.out.println(\"Invalid math\");}System.out.println(\"Continues\");}}",
    solution: "public class Main{public static void main(String[] args){try{int x=10/0;System.out.println(x);}catch(ArithmeticException e){System.out.println(\"Invalid math\");}System.out.println(\"Continues\");}}",
    expectedOutput: "Invalid math\nContinues",
  }],
}, points);
