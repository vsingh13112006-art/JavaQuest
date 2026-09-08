import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "week-6-persistent-expense-tracker-tracker-requirements", title: "Tracker Requirements", code: false },
  { slug: "week-6-persistent-expense-tracker-expense-model-and-validation", title: "Expense Model and Validation", code: true },
  { slug: "week-6-persistent-expense-tracker-custom-expense-exception", title: "Custom Expense Exception", code: false },
  { slug: "week-6-persistent-expense-tracker-save-with-files", title: "Save with Files", code: true },
  { slug: "week-6-persistent-expense-tracker-load-with-resource-safety", title: "Load with Resource Safety", code: false },
  { slug: "week-6-persistent-expense-tracker-lambda-based-actions", title: "Lambda-based Actions", code: true },
  { slug: "week-6-persistent-expense-tracker-stream-reports", title: "Stream Reports", code: false },
  { slug: "week-6-persistent-expense-tracker-optional-search", title: "Optional Search", code: true },
  { slug: "week-6-persistent-expense-tracker-final-persistent-tracker", title: "Final Persistent Tracker", code: true }
];

export const persistentExpenseTrackerModule = buildTopicModule({
  slug: "week-6-persistent-expense-tracker",
  title: "Module 48 — 🏆 Persistent Expense Tracker",
  description: "Exceptions, files, resources, lambdas, streams aur Optional ko combine karke persistent expense tracker build karo.",
  position: 48,
  difficulty: "INTERMEDIATE",
  capstone: true,
  coreIdea: "Capstone ka flow input validation se file persistence, reload aur report pipeline tak jata hai.",
  model: "validate expense\n-> save text file\n-> load lines\n-> parse\n-> stream report\n-> optional search",
  syntax: "record Expense(String name, int amount) {}",
  example: "List<Expense> e=...;\nint total=e.stream().mapToInt(Expense::amount).sum();",
  trace: "valid expenses -> persisted representation -> reload -> total/report",
  mistake: "File data ko trusted maan kar parsing validation skip karna.",
  fix: "Persistence boundary par invalid/malformed data ko deliberately handle karo.",
  remember: "Week 6 capstone robust file-backed workflow banata hai; database/JDBC next stage ka bridge hai, yahan JDBC nahi.",
  check: "Next week ke DB/JDBC se pehle persistence yahan kis API se ho rahi hai?",
  answer: "Files",
  labs: [{
    starterCode: "import java.nio.file.*;import java.util.*;\nrecord Expense(String name,int amount){}\npublic class Main{public static void main(String[] args)throws Exception{Path p=Files.createTempFile(\"expenses\",\".txt\");try{Files.write(p,List.of(\"Food,120\",\"Travel,80\"));List<Expense> e=Files.readAllLines(p).stream().map(s->s.split(\",\")).map(a->new Expense(a[0],Integer.parseInt(a[1]))).toList();int total=e.stream().mapToInt(Expense::amount).sum();System.out.println(\"Expenses: \"+e.size());System.out.println(\"Total: \"+total);}finally{Files.deleteIfExists(p);}}}",
    solution: "import java.nio.file.*;import java.util.*;\nrecord Expense(String name,int amount){}\npublic class Main{public static void main(String[] args)throws Exception{Path p=Files.createTempFile(\"expenses\",\".txt\");try{Files.write(p,List.of(\"Food,120\",\"Travel,80\"));List<Expense> e=Files.readAllLines(p).stream().map(s->s.split(\",\")).map(a->new Expense(a[0],Integer.parseInt(a[1]))).toList();int total=e.stream().mapToInt(Expense::amount).sum();System.out.println(\"Expenses: \"+e.size());System.out.println(\"Total: \"+total);}finally{Files.deleteIfExists(p);}}}",
    expectedOutput: "Expenses: 2\nTotal: 200",
  }],
}, points);
