import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "lambdas-why-lambdas", title: "Why Lambdas", code: false },
  { slug: "lambdas-functional-interface", title: "Functional Interface", code: true },
  { slug: "lambdas-lambda-syntax", title: "Lambda Syntax", code: false },
  { slug: "lambdas-parameters-and-return", title: "Parameters and Return", code: true },
  { slug: "lambdas-block-lambdas", title: "Block Lambdas", code: false },
  { slug: "lambdas-built-in-functional-interfaces", title: "Built-in Functional Interfaces", code: true },
  { slug: "lambdas-passing-behaviour", title: "Passing Behaviour", code: false },
  { slug: "lambdas-lambda-recap", title: "Lambda Recap", code: true }
];

export const lambdasModule = buildTopicModule({
  slug: "lambdas",
  title: "Module 45 — Lambdas",
  description: "Small behaviour ko lambda expressions me represent karna aur functional interfaces ke saath use karna seekho.",
  position: 45,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Lambda ek concise function-like implementation hai jo compatible functional interface target karti hai.",
  model: "functional interface + lambda body -> behaviour value",
  syntax: "x -> x * 2",
  example: "java.util.function.Function<Integer,Integer> twice=x->x*2;",
  trace: "lambda assigned -> apply(4) -> 8",
  mistake: "Lambda ko standalone method samajhna bina target type ke.",
  fix: "Lambda ko functional interface context chahiye.",
  remember: "One abstract method wale interface ke saath lambda natural fit hai.",
  check: "Lambda arrow operator?",
  answer: "->",
  labs: [{
    starterCode: "import java.util.function.*;\npublic class Main{public static void main(String[] args){Function<Integer,Integer> twice=x->x*2;Predicate<Integer> even=x->x%2==0;System.out.println(twice.apply(4));System.out.println(even.test(8));}}",
    solution: "import java.util.function.*;\npublic class Main{public static void main(String[] args){Function<Integer,Integer> twice=x->x*2;Predicate<Integer> even=x->x%2==0;System.out.println(twice.apply(4));System.out.println(even.test(8));}}",
    expectedOutput: "8\ntrue",
  }],
}, points);
