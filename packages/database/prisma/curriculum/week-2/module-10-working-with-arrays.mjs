import { buildModule, mainProgram } from "./module-builder.mjs";

const p = (body, methods = "") => mainProgram(body, methods);
const visible = (expectedOutput, input) => [{ input, expectedOutput, isHidden: false }];

const items = [
  {
    slug: "array-algorithm-sum", title: "Sum an Array", description: "Accumulator pattern se saari values total karo.",
    why: "Multiple values ka running total rakhne ke liye accumulator `0` se start hota hai aur har value add hoti hai.", model: "total=0 → +10 → 10 → +20 → 30 → +30 → 60",
    example: "~~~java\nint total = 0;\nfor (int value : values) total += value;\n~~~",
    predict: ["array-sum-prediction", "Trace the Total", "Values 5, 7, 8 ka final total kya hoga?", "20"],
    code: ["array-calculate-sum", "Calculate Total", "Array ka total exactly `Total: 100` format me print karo.", p("    int[] values = {10, 20, 30, 40};\n    int total = 0;\n    // Traverse and total"), p("    int[] values = {10, 20, 30, 40};\n    int total = 0;\n    for (int value : values) total += value;\n    System.out.println(\"Total: \" + total);"), visible("Total: 100")],
  },
  {
    slug: "array-algorithm-average", title: "Calculate Average", description: "Sum, length aur casting ko combine karke decimal average nikalo.",
    why: "Average = total / count. Decimal result preserve karne ke liye division se pehle ek operand `double` banana hota hai.", model: "values → sum → divide by length → average",
    example: "~~~java\ndouble average = (double) total / values.length;\n~~~",
    predict: ["array-average-casting", "Predict Decimal Average", "Total 7 aur length 2 ke liye `(double) total / length` kya hai?", "3.5"],
    code: ["array-calculate-average", "Calculate Decimal Average", "Scores ka output exactly `Average: 72.5` print karo.", p("    int[] scores = {60, 70, 80, 80};\n    // Calculate average"), p("    int[] scores = {60, 70, 80, 80};\n    int total = 0;\n    for (int score : scores) total += score;\n    double average = (double) total / scores.length;\n    System.out.println(\"Average: \" + average);"), visible("Average: 72.5")],
  },
  {
    slug: "array-algorithm-maximum", title: "Find Maximum", description: "First element initialization ke saath safe maximum algorithm banao.",
    why: "`max = 0` all-negative arrays par fail hota hai. First actual element safe initial candidate hai.", model: "max=first → compare each → replace only when larger",
    example: "~~~java\nint max = values[0];\nfor (int value : values) if (value > max) max = value;\n~~~",
    predict: ["array-max-negative", "Maximum of Negatives", "Values -8, -2, -10 me maximum kya hai?", "-2"],
    code: ["array-find-maximum", "Find Highest Value", "Highest value exactly `Highest: -2` print karo. `max` ko zero mat initialize karo.", p("    int[] values = {-8, -2, -10};\n    // Find max safely"), p("    int[] values = {-8, -2, -10};\n    int max = values[0];\n    for (int value : values) {\n      if (value > max) max = value;\n    }\n    System.out.println(\"Highest: \" + max);"), [{ expectedOutput: "Highest: -2", isHidden: false }]],
  },
  {
    slug: "array-algorithm-minimum", title: "Find Minimum", description: "Comparison direction reverse karke lowest value find karo.",
    why: "Minimum pattern maximum jaisa hai, bas candidate tab replace hota hai jab smaller value mile.", model: "min=first → value < min? → update",
    example: "~~~java\nint min = values[0];\nfor (int value : values) if (value < min) min = value;\n~~~",
    predict: ["array-min-prediction", "Trace the Minimum", "Values 12, 4, 9 me minimum kya hai?", "4"],
    code: ["array-find-minimum", "Find Lowest Score", "Output exactly `Lowest: 45` karo.", p("    int[] scores = {78, 92, 45, 88};\n    // Find minimum"), p("    int[] scores = {78, 92, 45, 88};\n    int min = scores[0];\n    for (int score : scores) if (score < min) min = score;\n    System.out.println(\"Lowest: \" + min);"), visible("Lowest: 45")],
  },
  {
    slug: "array-algorithm-search", title: "Search an Array", description: "Boolean flag aur break se exact match search karo.",
    why: "Search me initial answer `false` hota hai. Match milte hi `true` set karke unnecessary traversal stop kar sakte ho.", model: "found=false → visit → match? → true + break",
    example: "~~~java\nboolean found=false;\nfor (int n: values) { if(n==target){ found=true; break; } }\n~~~",
    predict: ["array-search-result", "Predict Search Result", "Values 3, 6, 9 me target 6 search karne par `found` kya hoga?", "true"],
    code: ["array-search-target", "Search for Target", "Target 25 search karke exactly `Found` ya `Not found` print karo.", p("    int[] values = {10, 20, 30};\n    int target = 25;\n    // Search"), p("    int[] values = {10, 20, 30};\n    int target = 25;\n    boolean found = false;\n    for (int value : values) {\n      if (value == target) { found = true; break; }\n    }\n    System.out.println(found ? \"Found\" : \"Not found\");"), visible("Not found")],
  },
  {
    slug: "array-algorithm-count", title: "Count Matches", description: "Traverse-check-count pattern se passing scores count karo.",
    why: "Counter sirf condition true hone par increment hota hai.", model: "visit score → score >= 50? → passed++",
    example: "~~~java\nint passed=0;\nfor(int score:scores) if(score>=50) passed++;\n~~~",
    predict: ["array-count-passed", "Count Passing Scores", "45, 50, 80, 30 me score >= 50 kitne hain?", "2"],
    code: ["array-count-matches", "Count Passed", "Passed aur failed counts print karo.", p("    int[] scores = {45, 50, 80, 30, 65};\n    // Print Passed and Failed"), p("    int[] scores = {45, 50, 80, 30, 65};\n    int passed = 0;\n    for (int score : scores) if (score >= 50) passed++;\n    int failed = scores.length - passed;\n    System.out.println(\"Passed: \" + passed);\n    System.out.println(\"Failed: \" + failed);"), visible("Passed: 3\nFailed: 2")],
  },
  {
    slug: "array-algorithm-transform", title: "Transform Array Data", description: "Indexed loop se original array slots modify karo.",
    why: "Enhanced loop ka variable copy-like current value deta hai. Original slots update karne ke liye index chahiye.", model: "i → values[i] → values[i] = transformed value",
    example: "~~~java\nfor(int i=0;i<scores.length;i++) scores[i] += 5;\n~~~",
    predict: ["array-transform-first", "Predict Transformed Value", "`{60,70}` par har value me 5 add karne ke baad first value kya hai?", "65"],
    code: ["array-add-bonus", "Apply Score Bonus", "Har score me 5 add karke space-separated values print karo.", p("    int[] scores = {60, 70, 80};\n    // Transform and print"), p("    int[] scores = {60, 70, 80};\n    for (int i = 0; i < scores.length; i++) scores[i] += 5;\n    for (int score : scores) System.out.print(score + \" \");"), visible("65 75 85 ")],
  },
  {
    slug: "array-algorithm-methods", title: "Arrays with Methods", description: "Array parameters se algorithms reusable banao.",
    why: "Method ko `int[]` parameter dene se same algorithm different arrays par work karta hai.", model: "array input → method → calculated result",
    example: "~~~java\nstatic int total(int[] values) { ... return sum; }\n~~~",
    predict: ["array-method-return", "Method Result", "`total(new int[]{2,3,5})` kya return karega?", "10"],
    code: ["array-total-method", "Build calculateTotal", "`calculateTotal(int[])` method complete karke output `Total: 15` karo.", p("    int[] nums = {1, 2, 3, 4, 5};\n    System.out.println(\"Total: \" + calculateTotal(nums));", "  static int calculateTotal(int[] values) {\n    // Return total\n    return 0;\n  }"), p("    int[] nums = {1, 2, 3, 4, 5};\n    System.out.println(\"Total: \" + calculateTotal(nums));", "  static int calculateTotal(int[] values) {\n    int total = 0;\n    for (int value : values) total += value;\n    return total;\n  }"), visible("Total: 15")],
  },
  {
    slug: "array-analyzer-challenge", title: "Array Analyzer Challenge", description: "Sum, average, min, max aur counter patterns ek program me combine karo.",
    why: "Real analysis ek pattern nahi, multiple small algorithms ka composition hota hai.", model: "scores → total/average + highest/lowest + passed/failed → report",
    example: "Requirements ko pehle outputs me break karo, phir har calculation independently trace karo. Ye Module 16 capstone ka mini-preview hai.", recap: true,
    predict: ["array-analyzer-passed", "Analyzer Check", "78, 92, 45, 88, 61 me >= 50 scores kitne hain?", "4"],
    code: ["array-analyzer-mini-build", "Build Mini Analyzer", "Given scores ka exact six-line report build karo.", p("    int[] scores = {78, 92, 45, 88, 61};\n    // Build report"), p("    int[] scores = {78, 92, 45, 88, 61};\n    int total=0, highest=scores[0], lowest=scores[0], passed=0;\n    for(int score:scores){\n      total += score;\n      if(score>highest) highest=score;\n      if(score<lowest) lowest=score;\n      if(score>=50) passed++;\n    }\n    double average=(double)total/scores.length;\n    System.out.println(\"Total: \"+total);\n    System.out.println(\"Average: \"+average);\n    System.out.println(\"Highest: \"+highest);\n    System.out.println(\"Lowest: \"+lowest);\n    System.out.println(\"Passed: \"+passed);\n    System.out.println(\"Failed: \"+(scores.length-passed));"), visible("Total: 364\nAverage: 72.8\nHighest: 92\nLowest: 45\nPassed: 4\nFailed: 1")], difficulty: "INTERMEDIATE",
  },
];

export const workingWithArraysModule = buildModule({
  slug: "week-2-working-with-arrays", title: "Week 2 — Working with Arrays",
  description: "Arrays ko sum, average, search, count, transform aur reusable methods ke through analyze karo.", position: 10, items,
});
