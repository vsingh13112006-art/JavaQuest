import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "optional-modern-practices-why-optional", title: "Why Optional", code: false },
  { slug: "optional-modern-practices-of-vs-ofnullable", title: "`of` vs `ofNullable`", code: true },
  { slug: "optional-modern-practices-empty", title: "`empty`", code: false },
  { slug: "optional-modern-practices-ispresent-and-ifpresent", title: "`isPresent` and `ifPresent`", code: true },
  { slug: "optional-modern-practices-orelse", title: "`orElse`", code: false },
  { slug: "optional-modern-practices-map-on-optional", title: "`map` on Optional", code: true },
  { slug: "optional-modern-practices-readable-modern-java-habits", title: "Readable Modern Java Habits", code: false },
  { slug: "optional-modern-practices-optional-recap", title: "Optional Recap", code: true }
];

export const optionalModernPracticesModule = buildTopicModule({
  slug: "optional-modern-practices",
  title: "Module 47 — Optional & Modern Java Practices",
  description: "Missing values ko explicit `Optional` ke through model aur safer modern Java habits practice karo.",
  position: 47,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Optional ek value present ya absent hone ko explicit container me represent karta hai.",
  model: "Optional<T> -> present(value) OR empty",
  syntax: "Optional<String> name = Optional.of(\"Aman\");",
  example: "Optional<String> x=Optional.empty();\nSystem.out.println(x.orElse(\"Guest\"));",
  trace: "empty -> orElse fallback -> Guest",
  mistake: "Har field aur har parameter ko Optional bana dena.",
  fix: "Optional ko especially return value me absence communicate karne ke liye thoughtfully use karo.",
  remember: "Optional null ko magically erase nahi karta; absence ko explicit API banata hai.",
  check: "Optional fallback method?",
  answer: "orElse",
  labs: [{
    starterCode: "import java.util.*;\npublic class Main{public static void main(String[] args){Optional<String> name=Optional.ofNullable(null);System.out.println(name.orElse(\"Guest\"));Optional<Integer> n=Optional.of(5);System.out.println(n.map(x->x*2).orElse(0));}}",
    solution: "import java.util.*;\npublic class Main{public static void main(String[] args){Optional<String> name=Optional.ofNullable(null);System.out.println(name.orElse(\"Guest\"));Optional<Integer> n=Optional.of(5);System.out.println(n.map(x->x*2).orElse(0));}}",
    expectedOutput: "Guest\n10",
  }],
}, points);
