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
      "8-stage self-paced Java journey — basics se advanced tak. Short Hinglish lessons, coding challenges, practice quests aur milestone projects ke through seekho.",
    status: "PUBLISHED",
    difficulty: "BEGINNER",

    modules: {
      create: [
        {
          slug: "week-1-first-steps",
          title: "Week 1 — First Steps in Java",
          description:
            "Java program ka basic structure samjho, console output print karo, comments use karo aur apna pehla complete Java program build karo.",
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
                  "Java kya hai aur tumhara code actual running program kaise banta hai — simple Hinglish me samjho.",
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
                      content: String.raw`
Java ek **programming language** hai jiska use backend systems, Android apps, desktop software aur large-scale applications banane me hota hai.

JavaQuets me abhi tumhe Java locally install karne ki zarurat nahi hai. Tum browser me code likhoge aur real Java execution ke against test karoge.

## Simple mental model

~~~text
Tumhara Java Code
        ↓
   Java Compiler
        ↓
    Bytecode
        ↓
       JVM
        ↓
 Program Run Hota Hai
~~~

## JDK kya hai?

**JDK (Java Development Kit)** me wo tools hote hain jinse Java code develop aur compile kiya jata hai.

## JVM kya hai?

**JVM (Java Virtual Machine)** compiled Java bytecode ko execute karti hai.

> 💡 **Abhi bas itna yaad rakho:**  
> Tum Java code likhte ho → compiler usse prepare karta hai → JVM usse run karti hai.

Internals ko abhi ratne ki zarurat nahi. Hum aage step-by-step detail me jayenge.
`,
                    },
                    {
                      slug: "java-platform-mental-model",
                      title: "Code → Compiler → JVM",
                      kind: "EXAMPLE",
                      position: 2,
                      content: String.raw`
Maan lo tumne ek file likhi:

~~~text
Main.java
~~~

Java compiler tumhare program ko check karta hai aur usse **bytecode** me convert karta hai.

Uske baad JVM us bytecode ko run karti hai.

## Iska fayda kya hai?

Isi model ki wajah se Java ka famous idea aata hai:

> **Write Once, Run Anywhere**

Matlab same Java program alag operating systems par JVM ke through run ho sakta hai.

## Quick recap

~~~text
Main.java
   ↓
Compiler
   ↓
Bytecode
   ↓
JVM
   ↓
Output
~~~
`,
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
                  "Java program ka basic structure samjho aur apna pehla message console par print karo.",
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
                      content: String.raw`
Java ka ek basic complete program kuch aisa dikhta hai:

~~~java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
~~~

## Simple breakdown

**public class Main**  
Ye hamari class hai. Abhi bas itna samjho ki Java code generally classes ke andar organize hota hai.

**main()**  
Basic Java program ki execution yahin se start hoti hai.

**System.out.println(...)**  
Console par output print karta hai.

**Semicolon ;**  
Java me most statements semicolon par end hote hain.

> 💡 **Abhi tension mat lo:**  
> public, static, void aur String[] args ko abhi memorize karne ki zarurat nahi hai.  
> Methods aur OOP ke time in sab ko properly samjhenge.

## Yaad rakho

- Program ka starting point: **main()**
- Output print karna: **System.out.println(...)**
- Most statements ka ending: **;**
`,
                    },
                    {
                      slug: "println-example",
                      title: "Your First println",
                      kind: "EXAMPLE",
                      position: 2,
                      content: String.raw`
Console par text print karne ke liye hum **System.out.println(...)** use karte hain.

## Example

~~~java
System.out.println("JavaQuets");
~~~

Output:

~~~text
JavaQuets
~~~

Double quotes ke andar jo text likha hota hai, wahi console par print hota hai.

> 🧠 **Quick check:**  
> Agar hum likhen: System.out.println("Hello");  
> to output hoga: **Hello**
`,
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
                  "print aur println ka difference samjho aur console output ko exactly control karna seekho.",
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
                      content: String.raw`
Java me output print karne ke do common tareeke hain:

## println

**println** value print karta hai aur uske baad next line par chala jata hai.

~~~java
System.out.println("Java");
System.out.println("Quets");
~~~

Output:

~~~text
Java
Quets
~~~

## print

**print** value print karta hai, lekin automatically next line par nahi jata.

~~~java
System.out.print("Java");
System.out.print("Quets");
~~~

Output:

~~~text
JavaQuets
~~~

> 💡 **Shortcut:**  
> println = print + new line  
> print = same line par continue
`,
                    },
                    {
                      slug: "combine-print-statements",
                      title: "Combining Output",
                      kind: "EXAMPLE",
                      position: 2,
                      content: String.raw`
Ab ye code dekho:

~~~java
System.out.print("Learn ");
System.out.println("Java");
System.out.println("Build things");
~~~

Pehla **print** same line par rehta hai.

Doosra **println** Java print karke next line par chala jata hai.

Final output:

~~~text
Learn Java
Build things
~~~

## Predict karo

Agar pehli line me println hota, to output ka layout kaise change hota?

Code ko mentally trace karna programming ka important skill hai.
`,
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
                  "Comments ka use code explain karne aur kisi statement ko temporarily run hone se rokne ke liye karo.",
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
                      content: String.raw`
Comments **humans ke liye** hote hain. Java program run karte waqt comments ko ignore karta hai.

## Single-line comment

Single-line comment **//** se start hota hai.

~~~java
// Welcome message print karo
System.out.println("Welcome");
~~~

## Multi-line comment

Multiple lines ke liye:

~~~java
/*
  Ye ek multi-line
  comment hai.
*/
~~~

## Good comment kab likhna chahiye?

Achha comment code ka **reason** ya important context explain karta hai.

Har obvious line ko comment karna zaroori nahi.

> 💡 **Rule:**  
> Code kya kar raha hai wo code se clear hona chahiye.  
> Comment useful context ya "kyun" explain kare.
`,
                    },
                    {
                      slug: "comments-change-execution",
                      title: "Commenting Out Code",
                      kind: "EXAMPLE",
                      position: 2,
                      content: String.raw`
Ye code dekho:

~~~java
System.out.println("A");

// System.out.println("B");

System.out.println("C");
~~~

Middle wali statement comment ban chuki hai, isliye Java usse execute nahi karega.

Output:

~~~text
A
C
~~~

Isi technique ko kabhi-kabhi debugging ke time kisi line ko temporarily disable karne ke liye use kiya jata hai.
`,
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
                  "Module me jo seekha hai use combine karke apna pehla small Java program build karo.",
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
                      content: String.raw`
Ab tak tumne ye concepts dekhe hain:

- Java program ka basic structure
- main method
- System.out.print
- System.out.println
- semicolon
- comments

Ab in sab ko combine karke apna pehla **mini build** banana hai.

## Mission

Ek console profile build karo.

Is challenge me provided profile information exactly use karna, taaki JavaQuets tumhare output ko automatically verify kar sake.

> 🏆 **Challenge mode:**  
> Complete solution pehle se copy mat karo. Jo concepts seekhe hain unhe use karke khud build karne ki koshish karo.
`,
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