import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "week-5-student-course-capstone-system-requirements", title: "System Requirements", code: false },
  { slug: "week-5-student-course-capstone-student-list", title: "Student List", code: true },
  { slug: "week-5-student-course-capstone-unique-course-codes", title: "Unique Course Codes", code: false },
  { slug: "week-5-student-course-capstone-enrollment-map", title: "Enrollment Map", code: true },
  { slug: "week-5-student-course-capstone-search-student", title: "Search Student", code: false },
  { slug: "week-5-student-course-capstone-sort-reports", title: "Sort Reports", code: true },
  { slug: "week-5-student-course-capstone-generic-helper", title: "Generic Helper", code: false },
  { slug: "week-5-student-course-capstone-validation-and-debugging", title: "Validation and Debugging", code: true },
  { slug: "week-5-student-course-capstone-final-course-manager", title: "Final Course Manager", code: true }
];

export const studentCourseCapstoneModule = buildTopicModule({
  slug: "week-5-student-course-capstone",
  title: "Module 40 — 🏆 Student/Course Manager",
  description: "Collections aur generics ko combine karke student-course enrollment system build karo.",
  position: 40,
  difficulty: "INTERMEDIATE",
  capstone: true,
  coreIdea: "Capstone me students, courses aur enrollments ko appropriate collections se model karna hai.",
  model: "List<Student> roster\nSet<String> courseCodes\nMap<String,List<String>> enrollments",
  syntax: "Map<String, List<String>> enrollments = new LinkedHashMap<>();",
  example: "enrollments.computeIfAbsent(\"JAVA\", k -> new ArrayList<>()).add(\"Aman\");",
  trace: "course key -> student list create/get -> enroll",
  mistake: "Same student ko duplicate enroll karna bina validation ke.",
  fix: "Requirements ke hisaab se Set ya duplicate check use karo.",
  remember: "Week 5 capstone collection choice + iteration + generic type safety ko integrate karta hai.",
  check: "Student lookup by id ke liye useful collection?",
  answer: "Map",
  labs: [{
    starterCode: "import java.util.*;\npublic class Main{public static void main(String[] args){Map<String,List<String>> e=new LinkedHashMap<>();e.put(\"JAVA\",new ArrayList<>(List.of(\"Aman\",\"Riya\")));e.put(\"DB\",new ArrayList<>(List.of(\"Riya\")));System.out.println(\"JAVA: \"+e.get(\"JAVA\"));System.out.println(\"Courses: \"+e.size());}}",
    solution: "import java.util.*;\npublic class Main{public static void main(String[] args){Map<String,List<String>> e=new LinkedHashMap<>();e.put(\"JAVA\",new ArrayList<>(List.of(\"Aman\",\"Riya\")));e.put(\"DB\",new ArrayList<>(List.of(\"Riya\")));System.out.println(\"JAVA: \"+e.get(\"JAVA\"));System.out.println(\"Courses: \"+e.size());}}",
    expectedOutput: "JAVA: [Aman, Riya]\nCourses: 2",
  }],
}, points);
