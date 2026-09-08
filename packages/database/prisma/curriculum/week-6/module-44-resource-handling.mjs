import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "resource-handling-why-resources-need-closing", title: "Why Resources Need Closing", code: false },
  { slug: "resource-handling-autocloseable-idea", title: "AutoCloseable Idea", code: true },
  { slug: "resource-handling-try-with-resources-syntax", title: "Try-with-Resources Syntax", code: false },
  { slug: "resource-handling-bufferedreader-example", title: "BufferedReader Example", code: true },
  { slug: "resource-handling-multiple-resources", title: "Multiple Resources", code: false },
  { slug: "resource-handling-exceptions-during-resource-use", title: "Exceptions During Resource Use", code: true },
  { slug: "resource-handling-cleanup-thinking", title: "Cleanup Thinking", code: false },
  { slug: "resource-handling-resource-recap", title: "Resource Recap", code: true }
];

export const resourceHandlingModule = buildTopicModule({
  slug: "resource-handling",
  title: "Module 44 — Resource Handling",
  description: "Closeable resources ko try-with-resources se safely manage karo.",
  position: 44,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Try-with-resources block se resource automatic close hota hai, even jab exception aaye.",
  model: "open resource -> use -> automatic close",
  syntax: "try (BufferedReader br = ...) { ... }",
  example: "try(BufferedReader br=new BufferedReader(new StringReader(\"Java\"))){System.out.println(br.readLine());}",
  trace: "resource opens -> read -> block ends -> close automatically",
  mistake: "Resource close karna bhool jana ya duplicate cleanup code likhna.",
  fix: "`AutoCloseable` resources ke liye try-with-resources prefer karo.",
  remember: "Automatic cleanup correctness ko improve karta hai.",
  check: "Automatic close wali try syntax ka naam?",
  answer: "try-with-resources",
  labs: [{
    starterCode: "import java.io.*;\npublic class Main{public static void main(String[] args)throws Exception{try(BufferedReader br=new BufferedReader(new StringReader(\"Java\\nQuest\"))){System.out.println(br.readLine());System.out.println(br.readLine());}}}",
    solution: "import java.io.*;\npublic class Main{public static void main(String[] args)throws Exception{try(BufferedReader br=new BufferedReader(new StringReader(\"Java\\nQuest\"))){System.out.println(br.readLine());System.out.println(br.readLine());}}}",
    expectedOutput: "Java\nQuest",
  }],
}, points);
