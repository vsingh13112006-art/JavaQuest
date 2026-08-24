import { codeExercise, conceptLessons, prediction, quest } from "./helpers.mjs";

const program = (body) =>
  `public class Main {\n  public static void main(String[] args) {\n${body}\n  }\n}`;

const items = [
  {
    slug: "arrays-why-collections",
    title: "Why Arrays?",
    description:
      "Repeated variables ki problem se same-type collection ki need discover karo.",
    why: "Agar 50 scores hain, `score1`, `score2`... maintain karna difficult hoga. Array ek naam ke andar same type ki multiple values rakhta hai.",
    model: "single values → repeated names → int[] scores → one collection",
    example:
      "~~~java\nint[] scores = {80, 90, 75};\n~~~\n`scores` poori collection ko represent karta hai.",
    predict: [
      "arrays-collection-type",
      "Identify the Collection",
      "`int[] scores` me brackets kis idea ko show karte hain? Exactly enter: array",
      "array",
    ],
    code: [
      "arrays-print-known-values",
      "Print Stored Scores",
      "Array use karke exactly three lines print karo: 80, 90, 75.",
      "    int[] scores = {80, 90, 75};\n    // Print each element",
      "    int[] scores = {80, 90, 75};\n    System.out.println(scores[0]);\n    System.out.println(scores[1]);\n    System.out.println(scores[2]);",
      "80\n90\n75",
    ],
  },
  {
    slug: "arrays-zero-based-index",
    title: "Zero-Based Indexing",
    description: "Index aur element ka visual mental model establish karo.",
    why: "Array ki har value ka address **index** hota hai. Java me first index 0 hota hai.",
    model: "index     0     1     2\nscores  [80]  [90]  [75]",
    example:
      "~~~java\nint[] scores = {80, 90, 75};\nSystem.out.println(scores[1]); // 90\n~~~",
    predict: [
      "arrays-predict-index-one",
      "Predict Index 1",
      "`int[] values = {4, 8, 2};` me `values[1]` ka output kya hai?",
      "8",
    ],
    code: [
      "arrays-first-last-elements",
      "Print First and Last",
      "Given array ka first aur last element exactly `10 40` format me print karo.",
      "    int[] values = {10, 20, 30, 40};\n    // Print first and last",
      '    int[] values = {10, 20, 30, 40};\n    System.out.println(values[0] + " " + values[3]);',
      "10 40",
    ],
  },
  {
    slug: "arrays-create-fixed-size",
    title: "Create Arrays",
    description:
      "Known values aur fixed empty slots wale array creation patterns compare karo.",
    why: "Values pehle se known hon to initializer use karo. Sirf size known ho to `new int[size]` use hota hai.",
    model: "{3, 6, 9} → known values\nnew int[3] → [0] [0] [0]",
    example:
      "~~~java\nint[] known = {3, 6, 9};\nint[] later = new int[3];\n~~~\n`int` slots ki default value 0 hoti hai.",
    predict: [
      "arrays-default-int-value",
      "Default Slot Value",
      "`new int[3]` ke `values[1]` ki initial value kya hogi?",
      "0",
    ],
    code: [
      "arrays-fill-fixed-slots",
      "Fill Fixed Slots",
      "Size 3 ka array banao, values 5, 10, 15 assign karo aur space-separated print karo.",
      "    int[] values = new int[3];\n    // Fill and print",
      '    int[] values = new int[3];\n    values[0] = 5;\n    values[1] = 10;\n    values[2] = 15;\n    System.out.println(values[0] + " " + values[1] + " " + values[2]);',
      "5 10 15",
    ],
  },
  {
    slug: "arrays-access-elements",
    title: "Access Elements",
    description: "Valid indices use karke exact values read karo.",
    why: "Array name ke saath `[index]` current element ko read karta hai.",
    model: "array + index → one element",
    example:
      '~~~java\nString[] tools = {"JDK", "JVM", "IDE"};\nSystem.out.println(tools[2]);\n~~~\nOutput: `IDE`',
    predict: [
      "arrays-access-middle",
      "Read the Middle",
      '`String[] names = {"A", "B", "C"};` me `names[1]` kya hai?',
      "B",
    ],
    code: [
      "arrays-access-selected-elements",
      "Access Selected Values",
      "Array se index 0 aur index 2 ka sum print karo.",
      "    int[] nums = {7, 11, 13};\n    // Print required sum",
      "    int[] nums = {7, 11, 13};\n    System.out.println(nums[0] + nums[2]);",
      "20",
    ],
  },
  {
    slug: "arrays-update-elements",
    title: "Update Elements",
    description: "Existing array slot ko replace karna seekho.",
    why: "Array mutable hai: valid index par nayi value assign karne se old value replace hoti hai.",
    model: "[80] [90] [75] → scores[1] = 100 → [80] [100] [75]",
    example: "~~~java\nint[] scores = {80, 90, 75};\nscores[1] = 100;\n~~~",
    predict: [
      "arrays-predict-update",
      "Predict Updated Value",
      "`int[] x={2,4}; x[0]=9;` ke baad `x[0]` kya hai?",
      "9",
    ],
    code: [
      "arrays-correct-score",
      "Correct a Score",
      "Second score ko 95 update karke poora array three lines me print karo.",
      "    int[] scores = {70, 60, 80};\n    // Update and print",
      "    int[] scores = {70, 60, 80};\n    scores[1] = 95;\n    System.out.println(scores[0]);\n    System.out.println(scores[1]);\n    System.out.println(scores[2]);",
      "70\n95\n80",
    ],
  },
  {
    slug: "arrays-length-property",
    title: "Array Length",
    description:
      "Array size ko hardcode karne ke bajay `.length` se read karo.",
    why: "`.length` actual element count deta hai aur loop ko different-sized arrays ke saath reusable banata hai.",
    model: "last index = length - 1",
    example:
      "~~~java\nint[] nums = {4, 8, 2};\nSystem.out.println(nums.length); // 3\n~~~\nArray me `length` property hai, parentheses nahi.",
    predict: [
      "arrays-length-vs-last-index",
      "Length or Last Index?",
      "4 elements wale array ka last valid index kya hai?",
      "3",
    ],
    code: [
      "arrays-dynamic-last-element",
      "Print Dynamic Last Element",
      "`.length` use karke last value print karo; index 3 hardcode mat karo.",
      "    int[] values = {12, 24, 36, 48};\n    // Use length",
      "    int[] values = {12, 24, 36, 48};\n    System.out.println(values[values.length - 1]);",
      "48",
    ],
  },
  {
    slug: "arrays-indexed-traversal",
    title: "Arrays with for Loop",
    description: "Index variable se har array element visit karo.",
    why: "Jab same action har element par karna ho, loop indices 0 se `length - 1` tak visit karta hai.",
    model: "i=0 → scores[0]\ni=1 → scores[1]\ni=2 → scores[2]",
    example:
      "~~~java\nfor (int i=0; i<scores.length; i++) {\n    System.out.println(scores[i]);\n}\n~~~",
    predict: [
      "arrays-loop-final-index",
      "Final Loop Index",
      "Length 5 ke liye `i < values.length` loop ka final `i` kya hoga?",
      "4",
    ],
    code: [
      "arrays-loop-print-all",
      "Traverse Every Element",
      "Loop use karke values ko separate lines me print karo.",
      "    int[] values = {6, 12, 18};\n    // Write loop",
      "    int[] values = {6, 12, 18};\n    for (int i = 0; i < values.length; i++) {\n      System.out.println(values[i]);\n    }",
      "6\n12\n18",
    ],
  },
  {
    slug: "arrays-enhanced-for",
    title: "Enhanced for Loop",
    description: "Jab index ki need na ho tab direct elements traverse karo.",
    why: "Enhanced for loop current value directly deta hai. Reading/printing/summing ke liye clean hai.",
    model: "for (int value : values) → next value",
    example:
      "~~~java\nfor (int score : scores) {\n    System.out.println(score);\n}\n~~~",
    predict: [
      "arrays-enhanced-loop-value",
      "Current Value",
      "`for (int n : new int[]{2,4})` ki second iteration me `n` kya hai?",
      "4",
    ],
    code: [
      "arrays-enhanced-print",
      "Print with Enhanced Loop",
      "Enhanced for loop se languages print karo.",
      '    String[] languages = {"Java", "SQL", "Git"};\n    // Enhanced loop',
      '    String[] languages = {"Java", "SQL", "Git"};\n    for (String language : languages) {\n      System.out.println(language);\n    }',
      "Java\nSQL\nGit",
    ],
  },
  {
    slug: "arrays-fundamentals-checkpoint",
    title: "Array Bug Hunt & Checkpoint",
    description:
      "Bounds, update aur traversal mistakes fix karke fundamentals consolidate karo.",
    why: "Valid indices `0` se `length - 1` tak hote hain. `i <= length` invalid extra iteration chalata hai.",
    model: "length 3 → valid: 0,1,2 → invalid: 3",
    example:
      "Bug: `i <= values.length`\n\nFix: `i < values.length`\n\nIs quest me new syntax nahi—sirf recap aur debugging hai.",
    predict: [
      "arrays-bounds-bug-fix",
      "Choose Correct Bound",
      "Loop ka correct condition exactly enter karo: `i < values.length`",
      "i < values.length",
    ],
    code: [
      "arrays-fix-traversal",
      "Fix the Traversal",
      "Broken loop ko fix karo aur output exactly 3, 6, 9 produce karo.",
      "    int[] values = {3, 6, 9};\n    for (int i = 0; i <= values.length; i++) {\n      System.out.println(values[i]);\n    }",
      "    int[] values = {3, 6, 9};\n    for (int i = 0; i < values.length; i++) {\n      System.out.println(values[i]);\n    }",
      "3\n6\n9",
    ],
    recap: true,
  },
];

export const arraysFundamentalsModule = {
  slug: "week-2-arrays-fundamentals",
  title: "Week 2 — Arrays Fundamentals",
  description:
    "Same-type values ko arrays me store, access, update aur safely traverse karna seekho.",
  position: 9,
  quests: {
    create: items.map((item, index) =>
      quest({
        slug: item.slug,
        title: item.title,
        description: item.description,
        position: index + 1,
        lessons: conceptLessons(
          item.slug,
          item.title,
          item.why,
          item.model,
          item.example,
          item.recap,
        ),
        exercises: [
          prediction(...item.predict.slice(0, 3), 1, item.predict[3]),
          codeExercise({
            slug: item.code[0],
            title: item.code[1],
            prompt: item.code[2],
            position: 2,
            starterCode: program(item.code[3]),
            solution: program(item.code[4]),
            tests: [{ expectedOutput: item.code[5], isHidden: false }],
          }),
        ],
      }),
    ),
  },
};
