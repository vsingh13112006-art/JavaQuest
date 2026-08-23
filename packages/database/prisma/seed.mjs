import { PrismaClient } from "@prisma/client";
import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";

const prisma = new PrismaClient();

async function main() {
  const salt = randomBytes(16).toString("hex");
  const key = await promisify(scrypt)("AdminPass123!", salt, 64);
  await prisma.user.upsert({
    where: { email: "admin@javaquets.dev" },
    update: { role: "ADMIN", passwordHash: `scrypt$${salt}$${key.toString("hex")}` },
    create: { email: "admin@javaquets.dev", displayName: "JavaQuets Admin", role: "ADMIN", passwordHash: `scrypt$${salt}$${key.toString("hex")}` },
  });
  const courseSlug = "java-foundations";

  await prisma.course.deleteMany({ where: { slug: courseSlug } });

  await prisma.course.create({
  data: {
    slug: courseSlug,
    title: "Java Mastery Path",
    description:
      "A self-paced 8-stage journey from Java fundamentals to advanced programming. Learn concepts through short lessons, prediction exercises, coding challenges, and milestone projects.",
    status: "PUBLISHED",
    difficulty: "BEGINNER",

    modules: {
      create: [
        {
          slug: "week-1-first-steps",
          title: "Week 1 — First Steps in Java",
          description:
            "Learn how Java programs are structured, print console output, understand comments, and build your first complete Java program.",
          position: 1,

          quests: {
            create: [
              // =====================================================
              // QUEST 1
              // =====================================================
              {
                slug: "welcome-to-java",
                title: "Welcome to Java",
                description:
                  "Understand what Java is and how your code becomes a running program.",
                status: "PUBLISHED",
                difficulty: "BEGINNER",
                position: 1,
                estimatedMinutes: 8,

                lessons: {
                  create: [
                    {
                      slug: "what-is-java",
                      title: "What is Java?",
                      kind: "THEORY",
                      position: 1,
                      content: `Java is a programming language used to build backend systems, desktop applications, Android applications, developer tools, and large enterprise software.

In JavaQuets, you do not need to install Java before you begin. You can write Java directly in the browser and run it against real tests.

A useful mental model is:

Your Java Code
↓
Java Compiler
↓
Java Bytecode
↓
JVM
↓
Your Program Runs

The JDK contains tools used to develop and compile Java programs.

The JVM — Java Virtual Machine — executes compiled Java bytecode.

You do not need to memorize the internals yet. For now, remember:

You write Java code.
The compiler prepares it.
The JVM runs it.`,
                    },
                    {
                      slug: "java-platform-mental-model",
                      title: "Code → Compiler → JVM",
                      kind: "EXAMPLE",
                      position: 2,
                      content: `Suppose you write a file named Main.java.

The Java compiler checks the program and turns it into Java bytecode.

The JVM then executes that bytecode.

This is one reason Java programs can run on many different operating systems.`,
                    },
                  ],
                },

                exercises: {
                  create: [
                    {
                      slug: "predict-java-runtime",
                      title: "Who Runs Java Bytecode?",
                      prompt:
                        "Which component executes compiled Java bytecode? Enter exactly: JVM",
                      kind: "OUTPUT_PREDICTION",
                      difficulty: "BEGINNER",
                      position: 1,
                      solution: "JVM",
                    },
                  ],
                },
              },

              // =====================================================
              // QUEST 2
              // =====================================================
              {
                slug: "your-first-java-program",
                title: "Your First Java Program",
                description:
                  "Meet the basic structure of a Java program and print your first message.",
                status: "PUBLISHED",
                difficulty: "BEGINNER",
                position: 2,
                estimatedMinutes: 12,

                lessons: {
                  create: [
                    {
                      slug: "java-program-structure",
                      title: "The Shape of a Java Program",
                      kind: "THEORY",
                      position: 1,
                      content: `Here is a complete Java program:

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}

The program lives inside a class named Main.

Java starts this basic command-line program from the main method.

System.out.println(...) prints something to the console.

Most Java statements end with a semicolon.

You do not need to understand every word in:

public static void main(String[] args)

yet.

For now, treat it as the starting point of your program. We will understand each part later.`,
                    },
                    {
                      slug: "println-example",
                      title: "Your First println",
                      kind: "EXAMPLE",
                      position: 2,
                      content: `This statement:

System.out.println("JavaQuets");

prints:

JavaQuets

Text written inside double quotes is printed as text.`,
                    },
                  ],
                },

                exercises: {
                  create: [
                    {
                      slug: "hello-java",
                      title: "Print Hello, Java!",
                      prompt:
                        'Complete the program so it prints exactly:\nHello, Java!',
                      kind: "CODE",
                      difficulty: "BEGINNER",
                      position: 1,

                      starterCode: `public class Main {
  public static void main(String[] args) {
    // Write your code below

  }
}`,

                      solution: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`,

                      testCases: {
                        create: [
                          {
                            position: 1,
                            expectedOutput: "Hello, Java!",
                            isHidden: false,
                          },
                        ],
                      },
                    },
                  ],
                },
              },

              // =====================================================
              // QUEST 3
              // =====================================================
              {
                slug: "printing-output",
                title: "Printing Output",
                description:
                  "Use print and println to control exactly what appears in the console.",
                status: "PUBLISHED",
                difficulty: "BEGINNER",
                position: 3,
                estimatedMinutes: 15,

                lessons: {
                  create: [
                    {
                      slug: "print-vs-println",
                      title: "print vs println",
                      kind: "THEORY",
                      position: 1,
                      content: `Java gives us two useful ways to print console output.

println prints a value and then moves to a new line.

Example:

System.out.println("Java");
System.out.println("Quets");

Output:

Java
Quets

print does not automatically move to a new line.

Example:

System.out.print("Java");
System.out.print("Quets");

Output:

JavaQuets

A simple mental model:

println = print + new line
print   = stay on the same line`,
                    },
                    {
                      slug: "combine-print-statements",
                      title: "Combining Output",
                      kind: "EXAMPLE",
                      position: 2,
                      content: `Consider:

System.out.print("Learn ");
System.out.println("Java");
System.out.println("Build things");

The first print stays on the same line.

The next println prints Java and then moves down.

The output becomes:

Learn Java
Build things`,
                    },
                  ],
                },

                exercises: {
                  create: [
                    {
                      slug: "three-line-message",
                      title: "Build a Three-Line Message",
                      prompt: `Write Java statements that produce exactly:

I am learning Java.
I can write code.
Let's build!`,
                      kind: "CODE",
                      difficulty: "BEGINNER",
                      position: 1,

                      starterCode: `public class Main {
  public static void main(String[] args) {
    // Print the three required lines

  }
}`,

                      solution: `public class Main {
  public static void main(String[] args) {
    System.out.println("I am learning Java.");
    System.out.println("I can write code.");
    System.out.println("Let's build!");
  }
}`,

                      testCases: {
                        create: [
                          {
                            position: 1,
                            expectedOutput:
                              "I am learning Java.\nI can write code.\nLet's build!",
                            isHidden: false,
                          },
                        ],
                      },
                    },
                  ],
                },
              },

              // =====================================================
              // QUEST 4
              // =====================================================
              {
                slug: "comments-and-clean-code",
                title: "Comments & Clean Code",
                description:
                  "Use comments to explain code and temporarily prevent statements from running.",
                status: "PUBLISHED",
                difficulty: "BEGINNER",
                position: 4,
                estimatedMinutes: 10,

                lessons: {
                  create: [
                    {
                      slug: "java-comments",
                      title: "Comments are for Humans",
                      kind: "THEORY",
                      position: 1,
                      content: `Comments help humans understand code.

Java ignores comments when the program runs.

A single-line comment begins with:

// comment

Example:

// Print the welcome message
System.out.println("Welcome");

A multi-line comment uses:

/*
  Multiple lines
  can go here.
*/

Good comments explain why something exists or make code easier to understand.

Comments should not be used to explain every obvious statement.`,
                    },
                    {
                      slug: "comments-change-execution",
                      title: "Commenting Out Code",
                      kind: "EXAMPLE",
                      position: 2,
                      content: `Consider:

System.out.println("A");

// System.out.println("B");

System.out.println("C");

The second statement is a comment, so Java ignores it.

Output:

A
C`,
                    },
                  ],
                },

                exercises: {
                  create: [
                    {
                      slug: "comment-out-line",
                      title: "Remove a Line Without Deleting It",
                      prompt: `The program currently prints an unwanted line.

Turn the DELETE ME statement into a comment without deleting it.

The final output must be exactly:

Start
Finish`,
                      kind: "CODE",
                      difficulty: "BEGINNER",
                      position: 1,

                      starterCode: `public class Main {
  public static void main(String[] args) {
    System.out.println("Start");

    System.out.println("DELETE ME");

    System.out.println("Finish");
  }
}`,

                      solution: `public class Main {
  public static void main(String[] args) {
    System.out.println("Start");

    // System.out.println("DELETE ME");

    System.out.println("Finish");
  }
}`,

                      testCases: {
                        create: [
                          {
                            position: 1,
                            expectedOutput: "Start\nFinish",
                            isHidden: false,
                          },
                        ],
                      },
                    },
                  ],
                },
              },

              // =====================================================
              // QUEST 5 — MODULE MILESTONE
              // =====================================================
              {
                slug: "build-your-profile",
                title: "Milestone: Build Your Java Profile",
                description:
                  "Combine everything from this module to build your first small Java program.",
                status: "PUBLISHED",
                difficulty: "BEGINNER",
                position: 5,
                estimatedMinutes: 15,

                lessons: {
                  create: [
                    {
                      slug: "module-one-mission",
                      title: "Your First Mini Build",
                      kind: "THEORY",
                      position: 1,
                      content: `You have now seen the basic shape of a Java program, the main method, console output, print, println, semicolons, and comments.

Now you will combine those ideas without copying a complete solution.

Your mission is to build a small console profile.

For this challenge, use the provided profile information exactly so JavaQuets can automatically verify your program.`,
                    },
                  ],
                },

                exercises: {
                  create: [
                    {
                      slug: "java-profile",
                      title: "Build Your Profile",
                      prompt: `Write a Java program that prints exactly:

=== MY JAVA PROFILE ===
Name: Alex
Learning: Java
Goal: Build awesome things!
=======================`,
                      kind: "CODE",
                      difficulty: "BEGINNER",
                      position: 1,

                      starterCode: `public class Main {
  public static void main(String[] args) {

    // Build your profile here

  }
}`,

                      solution: `public class Main {
  public static void main(String[] args) {
    System.out.println("=== MY JAVA PROFILE ===");
    System.out.println("Name: Alex");
    System.out.println("Learning: Java");
    System.out.println("Goal: Build awesome things!");
    System.out.println("=======================");
  }
}`,

                      testCases: {
                        create: [
                          {
                            position: 1,
                            expectedOutput:
                              "=== MY JAVA PROFILE ===\nName: Alex\nLearning: Java\nGoal: Build awesome things!\n=======================",
                            isHidden: false,
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
});
  console.log("Seeded Java Foundations curriculum.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
