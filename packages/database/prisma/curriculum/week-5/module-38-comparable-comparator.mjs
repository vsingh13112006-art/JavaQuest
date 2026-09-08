import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "comparable-comparator-natural-ordering", title: "Natural Ordering", code: false },
  { slug: "comparable-comparator-comparable-t", title: "`Comparable<T>`", code: true },
  { slug: "comparable-comparator-compareto", title: "`compareTo`", code: false },
  { slug: "comparable-comparator-comparator-basics", title: "Comparator Basics", code: true },
  { slug: "comparable-comparator-sort-with-comparator", title: "Sort with Comparator", code: false },
  { slug: "comparable-comparator-multiple-sort-orders", title: "Multiple Sort Orders", code: true },
  { slug: "comparable-comparator-stable-comparison-thinking", title: "Stable Comparison Thinking", code: false },
  { slug: "comparable-comparator-sorting-recap", title: "Sorting Recap", code: true }
];

export const comparableComparatorModule = buildTopicModule({
  slug: "comparable-comparator",
  title: "Module 38 — Comparable & Comparator",
  description: "Objects ko natural aur custom order me sort karna seekho.",
  position: 38,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Comparable object ka natural order define karta hai; Comparator external/custom order define karta hai.",
  model: "Comparable -> natural order\nComparator -> alternate order",
  syntax: "class Student implements Comparable<Student> { public int compareTo(Student o){...} }",
  example: "Comparator<Integer> desc=(a,b)->Integer.compare(b,a);",
  trace: "comparator -> compare pairs -> sort order",
  mistake: "Comparison me direct subtraction use karke overflow risk banana.",
  fix: "`Integer.compare` / appropriate compare methods safer aur intent-clear hote hain.",
  remember: "Natural aur custom sorting ko alag concepts samjho.",
  check: "Custom external ordering ke liye interface?",
  answer: "Comparator",
  labs: [{
    starterCode: "import java.util.*;\npublic class Main{public static void main(String[] args){List<Integer> v=new ArrayList<>(List.of(3,9,1));v.sort(Comparator.reverseOrder());System.out.println(v);}}",
    solution: "import java.util.*;\npublic class Main{public static void main(String[] args){List<Integer> v=new ArrayList<>(List.of(3,9,1));v.sort(Comparator.reverseOrder());System.out.println(v);}}",
    expectedOutput: "[9, 3, 1]",
  }],
}, points);
