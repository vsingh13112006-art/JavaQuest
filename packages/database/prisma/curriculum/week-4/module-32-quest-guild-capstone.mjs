import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "week-4-quest-guild-capstone-guild-requirements", title: "Guild Requirements", code: false },
  { slug: "week-4-quest-guild-capstone-abstract-character-base", title: "Abstract Character Base", code: true },
  { slug: "week-4-quest-guild-capstone-warrior-override", title: "Warrior Override", code: false },
  { slug: "week-4-quest-guild-capstone-mage-override", title: "Mage Override", code: true },
  { slug: "week-4-quest-guild-capstone-rank-enum", title: "Rank Enum", code: false },
  { slug: "week-4-quest-guild-capstone-ability-interface", title: "Ability Interface", code: true },
  { slug: "week-4-quest-guild-capstone-guild-composition", title: "Guild Composition", code: false },
  { slug: "week-4-quest-guild-capstone-polymorphic-party-report", title: "Polymorphic Party Report", code: true },
  { slug: "week-4-quest-guild-capstone-final-quest-guild-build", title: "Final Quest Guild Build", code: true }
];

export const questGuildCapstoneModule = buildTopicModule({
  slug: "week-4-quest-guild-capstone",
  title: "Module 32 — 🏆 Quest Guild",
  description: "Inheritance, overriding, polymorphism, abstract classes, interfaces, composition aur enums ko ek RPG-style system me integrate karo.",
  position: 32,
  difficulty: "INTERMEDIATE",
  capstone: true,
  coreIdea: "Capstone me individual syntax se zyada object roles aur collaboration important hai.",
  model: "Character abstract base\n├ Warrior\n└ Mage\nGuild has Characters\nRank enum stores fixed rank",
  syntax: "abstract class Character { abstract int power(); }",
  example: "Character[] party={new Warrior(),new Mage()};\nfor(Character c:party) System.out.println(c.power());",
  trace: "design roles -> create concrete characters -> polymorphic report",
  mistake: "Capstone me saari logic `main` ke andar hardcode karna.",
  fix: "State/behaviour ko relevant classes me rakho aur main ko orchestration tak limit karo.",
  remember: "Week 4 ke concepts ko ek coherent object model me connect karna capstone ka goal hai.",
  check: "Quest Guild ka common polymorphic base?",
  answer: "Character",
  labs: [{
    starterCode: "enum Rank{BRONZE,SILVER}\nabstract class Character{private String name;Character(String n){name=n;}String getName(){return name;}abstract int power();}\nclass Warrior extends Character{Warrior(String n){super(n);}int power(){return 120;}}\nclass Mage extends Character{Mage(String n){super(n);}int power(){return 150;}}\npublic class Main{public static void main(String[] args){Character[] party={new Warrior(\"Arin\"),new Mage(\"Mira\")};for(Character c:party)System.out.println(c.getName()+\": \"+c.power());}}",
    solution: "enum Rank{BRONZE,SILVER}\nabstract class Character{private String name;Character(String n){name=n;}String getName(){return name;}abstract int power();}\nclass Warrior extends Character{Warrior(String n){super(n);}@Override int power(){return 120;}}\nclass Mage extends Character{Mage(String n){super(n);}@Override int power(){return 150;}}\npublic class Main{public static void main(String[] args){Character[] party={new Warrior(\"Arin\"),new Mage(\"Mira\")};for(Character c:party)System.out.println(c.getName()+\": \"+c.power());}}",
    expectedOutput: "Arin: 120\nMira: 150",
  }],
}, points);
