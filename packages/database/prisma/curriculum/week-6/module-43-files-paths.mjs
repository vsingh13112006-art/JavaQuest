import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "files-paths-path-basics", title: "Path Basics", code: false },
  { slug: "files-paths-build-paths", title: "Build Paths", code: true },
  { slug: "files-paths-absolute-vs-relative", title: "Absolute vs Relative", code: false },
  { slug: "files-paths-normalize-and-resolve", title: "Normalize and Resolve", code: true },
  { slug: "files-paths-files-exists", title: "`Files.exists`", code: false },
  { slug: "files-paths-read-text-basics", title: "Read Text Basics", code: true },
  { slug: "files-paths-write-text-basics", title: "Write Text Basics", code: false },
  { slug: "files-paths-files-paths-recap", title: "Files & Paths Recap", code: true }
];

export const filesPathsModule = buildTopicModule({
  slug: "files-paths",
  title: "Module 43 — Files & Paths",
  description: "`Path` aur `Files` APIs ke through filesystem paths aur basic text file operations samjho.",
  position: 43,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "`Path` location ko represent karta hai; `Files` utility methods filesystem operations perform karte hain.",
  model: "Path value -> Files operation -> text/data",
  syntax: "Path p = Path.of(\"data.txt\");",
  example: "Path p=Path.of(\"logs\",\"app.txt\");\nSystem.out.println(p.getFileName());",
  trace: "Path builds segments -> fileName returns last segment",
  mistake: "Path ko plain string concatenate karke platform separators hardcode karna.",
  fix: "`Path.of` aur resolve jaisi APIs portable path handling deti hain.",
  remember: "Path location hai; actual I/O Files class se hota hai.",
  check: "Filesystem location ko represent karne wali type?",
  answer: "Path",
  labs: [{
    starterCode: "import java.nio.file.*;\npublic class Main{public static void main(String[] args){Path p=Path.of(\"logs\",\"app.txt\");System.out.println(p.getFileName());System.out.println(p.getParent());}}",
    solution: "import java.nio.file.*;\npublic class Main{public static void main(String[] args){Path p=Path.of(\"logs\",\"app.txt\");System.out.println(p.getFileName());System.out.println(p.getParent());}}",
    expectedOutput: "app.txt\nlogs",
  }],
}, points);
