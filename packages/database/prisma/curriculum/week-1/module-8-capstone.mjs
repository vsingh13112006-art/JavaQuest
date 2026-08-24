export const weekOneCapstoneModule = {
  slug: "week-1-capstone",
  title: "Week 1 — 🏆 Java XP Tracker",
  description:
    "Week 1 ke variables, operators, Scanner, conditions, loops aur methods ko combine karke ek complete Java XP Tracker build karo.",
  position: 8,

  quests: {
    create: [
      // =====================================================
      // QUEST 1 — CAPSTONE BRIEF
      // =====================================================
      {
        slug: "xp-tracker-mission",
        title: "Your Week 1 Mission",
        description:
          "Week 1 ke concepts recap karo aur Java XP Tracker project ke requirements samjho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 1,
        estimatedMinutes: 15,

        lessons: {
          create: [
            {
              slug: "capstone-overview",
              title: "Ab Sab Kuch Connect Hoga",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Week 1 me tumne Java ke important programming foundations seekhe.

Ab tak tum use kar chuke ho:

- Java program structure
- variables
- int
- double
- String
- char
- boolean
- operators
- Scanner
- if / else
- loops
- methods
- parameters
- return values


## Final Mission

# Java XP Tracker

Ek interactive console program jo learner ka naam aur XP data lega.

Program:

1. user input read karega
2. total XP calculate karega
3. XP ke basis par level decide karega
4. completed sessions loop se print karega
5. logic ko methods me organize karega


## Program flow

~~~text
User Input
    ↓
Variables
    ↓
XP Calculation
    ↓
Level Decision
    ↓
Session Loop
    ↓
Methods
    ↓
Final Report
~~~


Ye Week 1 ka final build hai.

Isme goal sirf expected output produce karna nahi hai.

> 💡 Goal sirf output banana nahi — Week 1 ke concepts ko ek real program me connect karna hai.
`,
            },

            {
              slug: "xp-tracker-requirements",
              title: "Project Requirements",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Final Java XP Tracker user se ye values lega:

~~~text
name

current XP

earned XP

completed sessions
~~~


## Example Input

~~~text
Aman
80
30
3
~~~


## XP Calculation

~~~text
80 + 30 = 110
~~~


## Level Rules

~~~text
XP >= 200
→ Level 3

XP >= 100
→ Level 2

otherwise
→ Level 1
~~~


## Session Output

~~~text
Session 1 complete
Session 2 complete
Session 3 complete
~~~


## Final Report

~~~text
=== JAVA XP TRACKER ===
Learner: Aman
XP: 110
Level: 2
Session 1 complete
Session 2 complete
Session 3 complete
Keep coding!
~~~


Hum project ko ek hi baar blank editor se build nahi karenge.

Har quest ek part build karega.

Final quest me sab pieces combine honge.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "capstone-concepts-check",
              title: "What Calculates XP?",
              prompt: `Agar:

currentXp = 80
earnedXp = 30

to totalXp kya hoga?

Exactly value enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "110",
            },

            {
              slug: "capstone-level-check",
              title: "Predict the Level",
              prompt: `Level rules:

XP >= 200 -> Level 3
XP >= 100 -> Level 2
otherwise -> Level 1

Agar total XP 110 hai to level kya hoga?

Exactly number enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 4,
              solution: "2",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 2 — PROFILE INPUT
      // =====================================================
      {
        slug: "xp-tracker-profile-input",
        title: "Build the Learner Input",
        description:
          "Scanner ke through learner ka naam aur current XP read karke project ka input layer build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 2,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "capstone-input-layer",
              title: "Project Ka Input Layer",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Har interactive program ko data kahin se milta hai.

Hamare Java XP Tracker me data user enter karega.

## Scanner Setup

~~~java
import java.util.Scanner;

Scanner input = new Scanner(System.in);
~~~


## Read the Learner Name

~~~java
String name = input.nextLine();
~~~


## Read Current XP

~~~java
int currentXp = input.nextInt();
~~~


## Example Input

~~~text
Aman
80
~~~


## Stored Values

~~~text
name = "Aman"

currentXp = 80
~~~


Ab project ke paas learner ki initial state aa gayi.
`,
            },

            {
              slug: "input-data-types-recap",
              title: "Correct Type Choose Karo",
              kind: "RECAP",
              position: 3,
              content: String.raw`
Capstone me bhi data types matter karte hain.

## Learner Name

~~~java
String name
~~~

## XP Values

~~~java
int currentXp
~~~

## Sessions

~~~java
int sessions
~~~


## Type-Selection Question

Question hamesha ye hona chahiye:

> Value kis type ki hai?


Text:

~~~text
String
~~~

Whole number:

~~~text
int
~~~


Ye Module 2 ka concept tha.

Ab same knowledge project ke andar use ho rahi hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "read-learner-profile",
              title: "Read the Learner Profile",
              prompt: `Input order:

full name
current XP

Test input:

Aman Sharma
80

name ko String me read karo.
currentXp ko int me read karo.

Expected output:

Aman Sharma
80`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // name read karo


    // current XP read karo


    // output

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    String name = input.nextLine();
    int currentXp = input.nextInt();

    System.out.println(name);
    System.out.println(currentXp);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `Aman Sharma
80`,
                    expectedOutput: `Aman Sharma
80`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "profile-input-checkpoint",
              title: "Input Checkpoint",
              prompt: `Scanner se full text line read karne ke liye kaunsa method use hota hai?

Exactly enter karo:

nextLine()`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 4,
              solution: "nextLine()",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 3 — XP CALCULATION
      // =====================================================
      {
        slug: "xp-calculation",
        title: "Calculate Total XP",
        description:
          "Current XP aur earned XP ko combine karke learner ka updated XP calculate karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 3,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "calculate-total-xp",
              title: "XP Update Karna",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Learner ke paas already XP ho sakta hai.

Example:

~~~text
current XP = 80
~~~


New lesson/challenge complete karne ke baad:

~~~text
earned XP = 30
~~~


## Updated XP

~~~text
80 + 30 = 110
~~~


## Java Version

~~~java
int currentXp = 80;
int earnedXp = 30;

int totalXp = currentXp + earnedXp;
~~~


Output:

~~~text
110
~~~


Ye calculation simple hai.

Lekin project perspective se important hai:

~~~text
Input
 ↓
Calculation
 ↓
New State
~~~


totalXp ab learner ki updated state represent karta hai.
`,
            },

            {
              slug: "xp-method-preview",
              title: "Calculation Ko Naam Dena",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
## Extract the Calculation into a Method

Same calculation ko method me bhi organize kar sakte hain:

~~~java
static int calculateTotalXp(
    int currentXp,
    int earnedXp
) {
    return currentXp + earnedXp;
}
~~~


Call:

~~~java
int totalXp =
    calculateTotalXp(currentXp, earnedXp);
~~~


Ye final project structure ke liye useful hoga.

Method ka naam clearly batata hai:

~~~text
calculateTotalXp
~~~


Program kya kar raha hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "calculate-xp-from-input",
              title: "Calculate XP from Input",
              prompt: `Input order:

current XP
earned XP

Test input:

80
30

totalXp calculate karo:

currentXp + earnedXp

Expected output:

110`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // current XP


    // earned XP


    // total XP


    // print

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int currentXp = input.nextInt();
    int earnedXp = input.nextInt();

    int totalXp = currentXp + earnedXp;

    System.out.println(totalXp);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `80
30`,
                    expectedOutput: "110",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "calculate-xp-method",
              title: "Move XP Logic into a Method",
              prompt: `calculateTotalXp(int currentXp, int earnedXp) method banao.

Method sum return kare.

main values:

currentXp = 50
earnedXp = 25

Expected output:

75`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int currentXp = 50;
    int earnedXp = 25;

    // calculateTotalXp call karo


    // result print karo

  }

  // calculateTotalXp method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int currentXp = 50;
    int earnedXp = 25;

    int totalXp =
        calculateTotalXp(currentXp, earnedXp);

    System.out.println(totalXp);
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    return currentXp + earnedXp;
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "75",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 4 — LEVEL DECISION
      // =====================================================
      {
        slug: "xp-level-system",
        title: "Turn XP into Levels",
        description:
          "if / else if / else ke through total XP ko learner level me convert karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 4,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "level-rules",
              title: "XP Se Level Decide Karna",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab total XP ko learner level me convert karenge.

Rules:

~~~text
XP >= 200
→ Level 3

XP >= 100
→ Level 2

otherwise
→ Level 1
~~~


Example:

~~~java
int xp = 110;

int level;

if (xp >= 200) {
    level = 3;
} else if (xp >= 100) {
    level = 2;
} else {
    level = 1;
}
~~~


xp = 110

## Condition Trace

~~~text
110 >= 200
false

110 >= 100
true
~~~


## Result

~~~text
Level 2
~~~


> 💡 **Condition order matters:** higher XP threshold ko pehle check karo.
`,
            },

            {
              slug: "calculate-level-method",
              title: "Level Logic Ko Method Me Rakho",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
## Extract Level Logic into a Method

Level calculation reusable method ban sakti hai:

~~~java
static int calculateLevel(int xp) {

    if (xp >= 200) {
        return 3;
    } else if (xp >= 100) {
        return 2;
    } else {
        return 1;
    }
}
~~~


Use:

~~~java
int level = calculateLevel(110);
~~~


## Result

~~~text
2
~~~


Notice:

Har branch return value produce karti hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-xp-level",
              title: "Predict the Level",
              prompt: `Rules:

XP >= 200 -> 3
XP >= 100 -> 2
otherwise -> 1

XP = 225

Level kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "3",
            },

            {
              slug: "build-level-system",
              title: "Build the Level System",
              prompt: `xp ki value 130 hai.

Rules:

XP >= 200 -> Level 3
XP >= 100 -> Level 2
otherwise -> Level 1

level calculate karo aur print karo.

Expected output:

2`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int xp = 130;

    int level;

    // level decision


    System.out.println(level);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int xp = 130;

    int level;

    if (xp >= 200) {
      level = 3;
    } else if (xp >= 100) {
      level = 2;
    } else {
      level = 1;
    }

    System.out.println(level);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "2",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "build-level-method",
              title: "Build calculateLevel()",
              prompt: `calculateLevel(int xp) method banao.

Rules:

>= 200 -> 3
>= 100 -> 2
otherwise -> 1

main me:

calculateLevel(80)

print karo.

Expected output:

1`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // level calculate aur print karo

  }

  // calculateLevel method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int level = calculateLevel(80);

    System.out.println(level);
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "1",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 5 — SESSION LOOP
      // =====================================================
      {
        slug: "xp-session-loop",
        title: "Track Completed Sessions",
        description:
          "for loop ke through learner ke completed coding sessions ko dynamically print karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 5,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "session-loop",
              title: "Sessions Ko Loop Se Print Karo",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Suppose learner ne 3 coding sessions complete kiye.

Hum manually likh sakte hain:

~~~text
Session 1 complete
Session 2 complete
Session 3 complete
~~~


## Make It Dynamic

Lekin sessions user input se aayenge.

Isliye loop better hai:

~~~java
int sessions = 3;

for (int i = 1; i <= sessions; i++) {
    System.out.println(
        "Session " + i + " complete"
    );
}
~~~


Output:

~~~text
Session 1 complete
Session 2 complete
Session 3 complete
~~~


Agar sessions = 5 ho:

same code automatically 5 lines print karega.


Ye dynamic repetition hai.
`,
            },

            {
              slug: "session-method",
              title: "Loop Ko Method Me Extract Karo",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
## Extract the Loop into a Method

Loop logic ko reusable method me rakh sakte hain:

~~~java
static void printSessions(int sessions) {

    for (
        int i = 1;
        i <= sessions;
        i++
    ) {
        System.out.println(
            "Session " +
            i +
            " complete"
        );
    }
}
~~~


Call:

~~~java
printSessions(3);
~~~


Output:

~~~text
Session 1 complete
Session 2 complete
Session 3 complete
~~~


Ab main method ko loop details nahi pata honi chahiye.

Usse sirf:

~~~text
printSessions
~~~

task ka meaning pata hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "print-dynamic-sessions",
              title: "Print Dynamic Sessions",
              prompt: `User completed sessions ka number enter karega.

1 se sessions tak print karo:

Session X complete

Test input:

3

Expected output:

Session 1 complete
Session 2 complete
Session 3 complete`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // sessions read karo


    // loop

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int sessions = input.nextInt();

    for (int i = 1; i <= sessions; i++) {
      System.out.println(
        "Session " + i + " complete"
      );
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "3",
                    expectedOutput: `Session 1 complete
Session 2 complete
Session 3 complete`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "build-print-sessions-method",
              title: "Build printSessions()",
              prompt: `printSessions(int sessions) method banao.

Method loop se Session X complete print kare.

main me:

printSessions(2);

Expected output:

Session 1 complete
Session 2 complete`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // method call

  }

  // printSessions method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    printSessions(2);
  }

  static void printSessions(int sessions) {
    for (int i = 1; i <= sessions; i++) {
      System.out.println(
        "Session " + i + " complete"
      );
    }
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Session 1 complete
Session 2 complete`,
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 6 — REFACTOR INTO METHODS
      // =====================================================
      {
        slug: "xp-tracker-methods",
        title: "Organize the XP Tracker",
        description:
          "XP calculation, level decision aur session output ko separate methods me organize karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 6,
        estimatedMinutes: 25,

        lessons: {
          create: [
            {
              slug: "capstone-method-architecture",
              title: "main() Ko Story Ki Tarah Padho",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Without methods, main() quickly large ho sakta hai.

## Better Method-Based Structure

~~~java
int totalXp =
    calculateTotalXp(
        currentXp,
        earnedXp
    );

int level =
    calculateLevel(totalXp);

printSessions(sessions);
~~~


Ab main method high-level flow batata hai:

~~~text
Calculate XP

Calculate Level

Print Sessions
~~~


Implementation separate methods me hai.


## Project Methods

~~~java
calculateTotalXp()

calculateLevel()

printSessions()

showReport()
~~~


Isse code easier to read aur maintain hota hai.
`,
            },

            {
              slug: "capstone-method-responsibility",
              title: "Ek Method, Ek Clear Task",
              kind: "RECAP",
              position: 3,
              content: String.raw`
## One Method, One Responsibility

~~~text
calculateTotalXp
→ XP calculation

calculateLevel
→ level decision

printSessions
→ loop output

showReport
→ final report
~~~


> 💡 Method ka naam padhkar uska task samajh aana chahiye.


## Avoid Vague Method Names

~~~text
doEverything()
stuff()
work()
~~~


Readable names program ko self-explanatory banate hain.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "combine-xp-methods",
              title: "Combine XP Methods",
              prompt: `Methods use karke program banao.

currentXp = 80
earnedXp = 30

calculateTotalXp(...)
calculateLevel(...)

Rules:

>= 200 -> 3
>= 100 -> 2
else -> 1

Expected output:

110
2`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int currentXp = 80;
    int earnedXp = 30;

    // methods use karo

  }

  // calculateTotalXp


  // calculateLevel
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int currentXp = 80;
    int earnedXp = 30;

    int totalXp =
        calculateTotalXp(
            currentXp,
            earnedXp
        );

    int level =
        calculateLevel(totalXp);

    System.out.println(totalXp);
    System.out.println(level);
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    return currentXp + earnedXp;
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `110
2`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "show-xp-report-method",
              title: "Build showReport()",
              prompt: `showReport(String name, int xp, int level) method banao.

main se call:

showReport("Aman", 110, 2);

Expected output:

Learner: Aman
XP: 110
Level: 2`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // showReport call

  }

  // showReport method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    showReport("Aman", 110, 2);
  }

  static void showReport(
      String name,
      int xp,
      int level
  ) {
    System.out.println(
        "Learner: " + name
    );

    System.out.println(
        "XP: " + xp
    );

    System.out.println(
        "Level: " + level
    );
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Learner: Aman
XP: 110
Level: 2`,
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 7 — CAPSTONE BUG HUNT
      // =====================================================
      {
        slug: "xp-tracker-bug-hunt",
        title: "Bug Hunt: Broken XP Tracker",
        description:
          "Multiple Week 1 concepts ke bugs ek combined program me identify aur fix karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 7,
        estimatedMinutes: 28,

        lessons: {
          create: [
            {
              slug: "capstone-debugging-strategy",
              title: "Large Program Ko Kaise Debug Karein?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Jab ek program me multiple bugs hon,
sab kuch ek saath fix karne ki koshish mat karo.

## Structured Debugging Checklist

~~~text
1. Compiler errors dekho

2. Data types check karo

3. Operators check karo

4. Conditions check karo

5. Loop update check karo

6. Method calls check karo

7. Return values check karo

8. Output compare karo
~~~


## Example Bugs

~~~java
String name = input.nextInt();
~~~

Wrong input method/type.


~~~java
totalXp = currentXp = earnedXp;
~~~

Wrong calculation.


~~~java
if (xp = 100)
~~~

Assignment vs comparison.


~~~java
calculateLevel;
~~~

Missing method call parentheses.


Debugging ek separate programming skill hai.

Week 1 ka goal sirf code likhna nahi,
broken code ko understand karna bhi hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "fix-broken-xp-calculation",
              title: "Fix the XP Calculation",
              prompt: `Program ka expected output:

110
2

Multiple bugs fix karo.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int currentXp = 80;
    int earnedXp = 30;

    int totalXp =
        calculateTotalXp;

    int level =
        calculateLevel(totalXp);

    System.out.println(totalXp);
    System.out.println(level);
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    currentXp = earnedXp;
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int currentXp = 80;
    int earnedXp = 30;

    int totalXp =
        calculateTotalXp(
            currentXp,
            earnedXp
        );

    int level =
        calculateLevel(totalXp);

    System.out.println(totalXp);
    System.out.println(level);
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    return currentXp + earnedXp;
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `110
2`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-broken-session-loop",
              title: "Fix the Session Loop",
              prompt: `Program ko print karna hai:

Session 1 complete
Session 2 complete
Session 3 complete

Loop bug fix karo.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    printSessions(3);
  }

  static void printSessions(
      int sessions
  ) {
    for (
        int i = 1;
        i <= sessions;
        i--
    ) {
      System.out.println(
        "Session " +
        i +
        " complete"
      );
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    printSessions(3);
  }

  static void printSessions(
      int sessions
  ) {
    for (
        int i = 1;
        i <= sessions;
        i++
    ) {
      System.out.println(
        "Session " +
        i +
        " complete"
      );
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Session 1 complete
Session 2 complete
Session 3 complete`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-combined-xp-tracker",
              title: "Fix the Combined Tracker",
              prompt: `Program ko exactly print karna hai:

Aman
110
2
true

Code me data, calculation aur method-call mistakes fix karo.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {
    String name = 'Aman';

    int currentXp = 80;
    int earnedXp = 30;

    int totalXp =
        currentXp = earnedXp;

    int level =
        calculateLevel;

    boolean active =
        totalXp > 0;

    System.out.println(name);
    System.out.println(totalXp);
    System.out.println(level);
    System.out.println(active);
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    String name = "Aman";

    int currentXp = 80;
    int earnedXp = 30;

    int totalXp =
        currentXp + earnedXp;

    int level =
        calculateLevel(totalXp);

    boolean active =
        totalXp > 0;

    System.out.println(name);
    System.out.println(totalXp);
    System.out.println(level);
    System.out.println(active);
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Aman
110
2
true`,
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 8 — FINAL WEEK 1 BUILD
      // =====================================================
      {
        slug: "java-xp-tracker-final",
        title: "🏆 Final Build: Java XP Tracker",
        description:
          "Week 1 ke saare major concepts ko combine karke complete interactive Java XP Tracker build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 8,
        estimatedMinutes: 40,

        lessons: {
          create: [
            {
              slug: "final-build-brief",
              title: "The Final Week 1 Build",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ye Week 1 ka final challenge hai.

Ab starter code intentionally minimal hoga.


## Input order

~~~text
name

currentXp

earnedXp

sessions
~~~


## Example Input

~~~text
Aman
80
30
3
~~~


## Required calculations

~~~text
totalXp =
currentXp + earnedXp
~~~


## Level Rules

~~~text
>= 200
→ Level 3

>= 100
→ Level 2

otherwise
→ Level 1
~~~


## Required methods

Try karo program me ye methods use ho:

~~~text
calculateTotalXp()

calculateLevel()

printSessions()

showReport()
~~~


## Expected output

~~~text
=== JAVA XP TRACKER ===
Learner: Aman
XP: 110
Level: 2
Session 1 complete
Session 2 complete
Session 3 complete
Keep coding!
~~~


Ye project combine karta hai:

- Scanner
- variables
- String
- int
- arithmetic
- conditions
- loops
- methods
- parameters
- return values


Agar tum ye program requirements se build kar pa rahe ho,
to Week 1 ka foundation successfully connect ho raha hai.
`,
            },

            {
              slug: "final-week-one-recap",
              title: "Week 1 Recap",
              kind: "RECAP",
              position: 3,
              content: String.raw`
Week 1 journey:

~~~text
Print output
    ↓
Store values
    ↓
Calculate
    ↓
Compare
    ↓
Read user input
    ↓
Make decisions
    ↓
Repeat work
    ↓
Organize with methods
    ↓
Build a complete program
~~~


Java syntax yaad karna useful hai.

Lekin programming ka bigger skill hai:

> Problem ko small steps me break karna.


Final tracker bhi wahi process follow karta hai:

~~~text
Input
 ↓
Process
 ↓
Decision
 ↓
Repetition
 ↓
Output
~~~


Week 2 me hum data ke groups:

~~~text
Arrays

Strings

Problem Solving
~~~

par move karenge.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "final-tracker-core",
              title: "Build the Tracker Core",
              prompt: `Input order:

name
currentXp
earnedXp

Program total XP aur level calculate kare.

Rules:

>= 200 -> 3
>= 100 -> 2
else -> 1

Test input:

Aman
80
30

Expected output:

Aman
110
2`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // Build the tracker core

  }

  // methods
}`,
              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input =
        new Scanner(System.in);

    String name =
        input.nextLine();

    int currentXp =
        input.nextInt();

    int earnedXp =
        input.nextInt();

    int totalXp =
        calculateTotalXp(
            currentXp,
            earnedXp
        );

    int level =
        calculateLevel(totalXp);

    System.out.println(name);
    System.out.println(totalXp);
    System.out.println(level);
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    return currentXp + earnedXp;
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    input: `Aman
80
30`,
                    expectedOutput: `Aman
110
2`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "final-tracker-with-sessions",
              title: "Add the Session Tracker",
              prompt: `Input order:

name
currentXp
earnedXp
sessions

Build:

total XP
level
session loop

Test input:

Aman
80
30
3

Expected output:

Aman
110
2
Session 1 complete
Session 2 complete
Session 3 complete`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // Read input


    // Calculate XP


    // Calculate level


    // Print result


    // Print sessions

  }

  // calculateTotalXp


  // calculateLevel


  // printSessions
}`,
              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input =
        new Scanner(System.in);

    String name =
        input.nextLine();

    int currentXp =
        input.nextInt();

    int earnedXp =
        input.nextInt();

    int sessions =
        input.nextInt();

    int totalXp =
        calculateTotalXp(
            currentXp,
            earnedXp
        );

    int level =
        calculateLevel(totalXp);

    System.out.println(name);
    System.out.println(totalXp);
    System.out.println(level);

    printSessions(sessions);
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    return currentXp + earnedXp;
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }

  static void printSessions(
      int sessions
  ) {
    for (
        int i = 1;
        i <= sessions;
        i++
    ) {
      System.out.println(
          "Session " +
          i +
          " complete"
      );
    }
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    input: `Aman
80
30
3`,
                    expectedOutput: `Aman
110
2
Session 1 complete
Session 2 complete
Session 3 complete`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "week-one-final-bug-hunt",
              title: "Final Bug Hunt",
              prompt: `Week 1 ke multiple concepts broken hain.

Program ko fix karo.

Test input:

Aman
80
30

Expected output:

Learner: Aman
XP: 110
Level: 2`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input =
        new Scanner(System.in);

    String name =
        input.nextInt();

    int currentXp =
        input.nextInt();

    int earnedXp =
        input.nextInt();

    int totalXp =
        calculateTotalXp;

    int level =
        calculateLevel(totalXp);

    showReport(
        name,
        totalXp,
        level
    );
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    currentXp + earnedXp;
  }

  static int calculateLevel(int xp) {
    if (xp >= 100) {
      return 2;
    } else if (xp >= 200) {
      return 3;
    } else {
      return 1;
    }
  }

  static void showReport(
      String name,
      int xp,
      int level
  ) {
    System.out.println(
        "Learner: " + name
    );

    System.out.println(
        "XP: " + xp
    );

    System.out.println(
        "Level: " + level
    );
  }
}`,
              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input =
        new Scanner(System.in);

    String name =
        input.nextLine();

    int currentXp =
        input.nextInt();

    int earnedXp =
        input.nextInt();

    int totalXp =
        calculateTotalXp(
            currentXp,
            earnedXp
        );

    int level =
        calculateLevel(totalXp);

    showReport(
        name,
        totalXp,
        level
    );
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    return currentXp + earnedXp;
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }

  static void showReport(
      String name,
      int xp,
      int level
  ) {
    System.out.println(
        "Learner: " + name
    );

    System.out.println(
        "XP: " + xp
    );

    System.out.println(
        "Level: " + level
    );
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    input: `Aman
80
30`,
                    expectedOutput: `Learner: Aman
XP: 110
Level: 2`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "java-xp-tracker-build",
              title: "🏆 Java XP Tracker — Build It Yourself",
              prompt: `Ye Week 1 ka final challenge hai.

Input order:

name
currentXp
earnedXp
sessions

Required methods:

calculateTotalXp(int currentXp, int earnedXp)

calculateLevel(int xp)

printSessions(int sessions)

showReport(String name, int xp, int level)

Level rules:

xp >= 200 -> 3
xp >= 100 -> 2
otherwise -> 1

Test input:

Aman
80
30
3

Expected output exactly:

=== JAVA XP TRACKER ===
Learner: Aman
XP: 110
Level: 2
Session 1 complete
Session 2 complete
Session 3 complete
Keep coding!`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // =================================
    // BUILD YOUR JAVA XP TRACKER
    // =================================

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input =
        new Scanner(System.in);

    String name =
        input.nextLine();

    int currentXp =
        input.nextInt();

    int earnedXp =
        input.nextInt();

    int sessions =
        input.nextInt();

    int totalXp =
        calculateTotalXp(
            currentXp,
            earnedXp
        );

    int level =
        calculateLevel(totalXp);

    System.out.println(
        "=== JAVA XP TRACKER ==="
    );

    showReport(
        name,
        totalXp,
        level
    );

    printSessions(sessions);

    System.out.println(
        "Keep coding!"
    );
  }

  static int calculateTotalXp(
      int currentXp,
      int earnedXp
  ) {
    return currentXp + earnedXp;
  }

  static int calculateLevel(int xp) {
    if (xp >= 200) {
      return 3;
    } else if (xp >= 100) {
      return 2;
    } else {
      return 1;
    }
  }

  static void printSessions(
      int sessions
  ) {
    for (
        int i = 1;
        i <= sessions;
        i++
    ) {
      System.out.println(
          "Session " +
          i +
          " complete"
      );
    }
  }

  static void showReport(
      String name,
      int xp,
      int level
  ) {
    System.out.println(
        "Learner: " + name
    );

    System.out.println(
        "XP: " + xp
    );

    System.out.println(
        "Level: " + level
    );
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    input: `Aman
80
30
3`,
                    expectedOutput: `=== JAVA XP TRACKER ===
Learner: Aman
XP: 110
Level: 2
Session 1 complete
Session 2 complete
Session 3 complete
Keep coding!`,
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
};