export const userInputModule = {
  slug: "week-1-user-input",
  title: "Week 1 — User Input with Scanner",
  description:
    "Scanner ke through user se text aur numbers input lena aur interactive Java programs banana seekho.",
  position: 4,

  quests: {
    create: [
      // =====================================================
      // QUEST 1 — MEET SCANNER
      // =====================================================
      {
        slug: "meet-scanner",
        title: "Program Se Baat Karo",
        description:
          "Scanner aur System.in ka use karke Java program me keyboard input lena start karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 1,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "why-user-input",
              title: "Hard-Coded Values Se Aage",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab tak hamare programs me values pehle se code ke andar likhi hoti thi.

Example:

~~~java
String name = "Aman";
int age = 20;
~~~

Isse **hard-coded data** keh sakte hain.

Lekin real programs me hum chahte hain ki user khud value enter kare.

Example:

~~~text
Enter your name:
Aman
~~~

Program user ke input ko variable me store karega.

## Mental Model

~~~text
Keyboard
   ↓
System.in
   ↓
Scanner
   ↓
Java Variable
   ↓
Program
~~~

Java me console input lene ka common beginner-friendly tool hai:

~~~java
Scanner
~~~

Scanner use karne ke liye hume import karna padta hai.
`,
            },

            {
              slug: "create-scanner",
              title: "Your First Scanner",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Scanner use karne ke liye sabse pehle import:

~~~java
import java.util.Scanner;
~~~

Phir main method ke andar Scanner object:

~~~java
Scanner input = new Scanner(System.in);
~~~

Complete basic structure:

~~~java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
  }
}
~~~

## Breakdown

~~~text
Scanner
~~~

Scanner ka type hai.

~~~text
input
~~~

hamara variable/object name hai.

~~~text
new Scanner(System.in)
~~~

keyboard input read karne ke liye Scanner create karta hai.

Abhi object aur new keyword ka deep OOP explanation nahi chahiye.

Filhaal mental model:

> Scanner input = keyboard se values lene ka tool.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "scanner-import-check",
              title: "Scanner Kahan Se Aata Hai?",
              prompt: `Scanner use karne ke liye kaunsa import correct hai?

Exactly enter karo:

java.util.Scanner`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "java.util.Scanner",
            },

            {
              slug: "create-first-scanner",
              title: "Create Your Scanner",
              prompt: `Scanner input naam ka Scanner object banao jo System.in se input read kare.

Program ko sirf READY print karna hai.

Expected output:

READY`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // Scanner input yahan create karo


    System.out.println("READY");
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    System.out.println("READY");
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "READY",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 2 — STRING INPUT
      // =====================================================
      {
        slug: "read-text-input",
        title: "Naam Pucho: String Input",
        description:
          "nextLine() ke through user ka poora text input String variable me store karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 2,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "nextline-basics",
              title: "Text Input with nextLine()",
              kind: "THEORY",
              position: 1,
              content: String.raw`
User se text read karne ke liye Scanner ka:

~~~java
nextLine()
~~~

method use kar sakte hain.

Example:

~~~java
Scanner input = new Scanner(System.in);

String name = input.nextLine();
~~~

Agar user type kare:

~~~text
Aman
~~~

to name variable ke andar:

~~~text
Aman
~~~

store ho jayega.

## Complete example

~~~java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    String name = input.nextLine();

    System.out.println(name);
  }
}
~~~

Input:

~~~text
Aman
~~~

Output:

~~~text
Aman
~~~
`,
            },

            {
              slug: "prompt-before-input",
              title: "User Ko Batao Kya Enter Karna Hai",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Input lene se pehle user ko prompt dikhana useful hota hai.

Example:

~~~java
System.out.print("Enter your name: ");

String name = input.nextLine();
~~~

Agar user Aman enter kare:

~~~text
Enter your name: Aman
~~~

Phir program response de sakta hai:

~~~java
System.out.println("Hello " + name);
~~~

Output:

~~~text
Hello Aman
~~~

Yahan hum previous modules ka String concatenation style use kar rahe hain.

## Program Flow

~~~text
Prompt
  ↓
User Input
  ↓
Variable
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
              slug: "read-name",
              title: "Read a Name",
              prompt: `User se ek full line read karo aur name variable me store karo.

Phir name print karo.

Test input:

Aman

Expected output:

Aman`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // name read karo


    // name print karo

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    String name = input.nextLine();

    System.out.println(name);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "Aman",
                    expectedOutput: "Aman",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "read-full-name",
              title: "Full Name Bhi Read Hoga",
              prompt: `nextLine() use karke full name read karo.

Test input:

Aman Sharma

Expected output:

Aman Sharma`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // full name read karo


    System.out.println(name);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    String name = input.nextLine();

    System.out.println(name);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "Aman Sharma",
                    expectedOutput: "Aman Sharma",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 3 — NUMBER INPUT
      // =====================================================
      {
        slug: "read-number-input",
        title: "Numbers Input Lo",
        description:
          "nextInt() aur nextDouble() ke through integer aur decimal input read karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 3,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "nextint-basics",
              title: "Integer Input with nextInt()",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Whole number input read karne ke liye:

~~~java
nextInt()
~~~

use kar sakte hain.

Example:

~~~java
Scanner input = new Scanner(System.in);

int age = input.nextInt();

System.out.println(age);
~~~

Input:

~~~text
21
~~~

Output:

~~~text
21
~~~

## Choose the Right Method

~~~java
String name = input.nextLine();
~~~

text ke liye.

~~~java
int age = input.nextInt();
~~~

integer ke liye.
`,
            },

            {
              slug: "nextdouble-basics",
              title: "Decimal Input with nextDouble()",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Decimal number read karne ke liye:

~~~java
nextDouble()
~~~

use hota hai.

Example:

~~~java
double price = input.nextDouble();
~~~

Input:

~~~text
49.99
~~~

price ke andar:

~~~text
49.99
~~~

store hoga.

## Complete Example

~~~java
Scanner input = new Scanner(System.in);

double hours = input.nextDouble();

System.out.println(hours);
~~~

Input:

~~~text
2.5
~~~

Output:

~~~text
2.5
~~~

## Scanner Method Map

~~~text
nextLine()   → String

nextInt()    → int

nextDouble() → double
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "read-age",
              title: "Read the Age",
              prompt: `User se int age read karo aur print karo.

Test input:

25

Expected output:

25`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // age read karo


    System.out.println(age);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int age = input.nextInt();

    System.out.println(age);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "25",
                    expectedOutput: "25",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "read-study-hours",
              title: "Read Decimal Hours",
              prompt: `User se daily study hours double me read karo.

Test input:

2.5

Expected output:

2.5`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // double hours read karo


    System.out.println(hours);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    double hours = input.nextDouble();

    System.out.println(hours);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "2.5",
                    expectedOutput: "2.5",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "scanner-method-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Decimal number read karne ke liye kaunsa Scanner method use hota hai?

Exactly enter karo:

nextDouble()`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "nextDouble()",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 4 — INPUT + CALCULATION
      // =====================================================
      {
        slug: "input-and-calculation",
        title: "Input + Calculation",
        description:
          "User input ko calculations ke saath combine karke dynamic results banana seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 4,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "input-process-output",
              title: "Input → Process → Output",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Programming ka ek very common pattern hai:

~~~text
INPUT
  ↓
PROCESS
  ↓
OUTPUT
~~~

Example:

User number enter karta hai:

~~~text
10
~~~

Program us number ko double karta hai:

~~~java
int number = input.nextInt();

int doubled = number * 2;
~~~

Phir result:

~~~java
System.out.println(doubled);
~~~

Output:

~~~text
20
~~~

## Complete Flow

~~~java
Scanner input = new Scanner(System.in);

int number = input.nextInt();

int doubled = number * 2;

System.out.println(doubled);
~~~

Ab program fixed value par depend nahi hai.

User jo value enter karega, result uske according change hoga.
`,
            },

            {
              slug: "multiple-input-calculation",
              title: "Do Inputs Ko Combine Karo",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Scanner se multiple values read kar sakte ho.

Example:

~~~java
int a = input.nextInt();
int b = input.nextInt();

int total = a + b;

System.out.println(total);
~~~

Input:

~~~text
10
20
~~~

Output:

~~~text
30
~~~

Program internally:

~~~text
a = 10
b = 20

10 + 20 = 30
~~~

Ye pattern calculators aur many real programs ka base hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "double-user-number",
              title: "Double the Number",
              prompt: `User se ek int read karo.

Usko 2 se multiply karke result print karo.

Test input:

7

Expected output:

14`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // number read karo


    // doubled calculate karo


    // result print karo

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int number = input.nextInt();

    int doubled = number * 2;

    System.out.println(doubled);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "7",
                    expectedOutput: "14",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "add-two-inputs",
              title: "Add Two Numbers",
              prompt: `User se do integers read karo.

Unka sum print karo.

Test input:

12
8

Expected output:

20`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // first number


    // second number


    // sum


    // print

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int a = input.nextInt();
    int b = input.nextInt();

    int sum = a + b;

    System.out.println(sum);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `12
8`,
                    expectedOutput: "20",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "weekly-study-hours",
              title: "Weekly Study Hours",
              prompt: `User daily coding hours enter karega.

dailyHours ko 7 se multiply karke weeklyHours calculate karo.

Test input:

2.5

Expected output:

17.5`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // dailyHours read karo


    // weeklyHours calculate karo


    System.out.println(weeklyHours);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    double dailyHours = input.nextDouble();

    double weeklyHours = dailyHours * 7;

    System.out.println(weeklyHours);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "2.5",
                    expectedOutput: "17.5",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 5 — MULTIPLE INPUTS
      // =====================================================
      {
        slug: "multiple-user-inputs",
        title: "Multiple Inputs",
        description:
          "Ek program me String, int aur double jaise multiple input types ko combine karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 5,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "reading-multiple-values",
              title: "Ek Se Zyada Values Read Karna",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Real programs usually ek hi input nahi lete.

Example:

~~~text
Name
Age
Study Hours
~~~

Scanner multiple values read kar sakta hai.

Example:

~~~java
String name = input.nextLine();

int age = input.nextInt();

double hours = input.nextDouble();
~~~

Program har input ko correct type ke variable me store karta hai.

## Mental Model

~~~text
Aman
 ↓
String name

25
 ↓
int age

2.5
 ↓
double hours
~~~

Data type choose karna Module 2 ka concept tha.

Ab Scanner us knowledge ko interactive bana raha hai.
`,
            },

            {
              slug: "combine-input-with-previous-concepts",
              title: "Input + Operators",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Input ko previous operators ke saath combine kar sakte ho.

Example:

~~~java
int score = input.nextInt();
int bonus = input.nextInt();

score += bonus;

boolean highScore = score >= 100;

System.out.println(score);
System.out.println(highScore);
~~~

Input:

~~~text
80
25
~~~

Result:

~~~text
105
true
~~~

Yahan ek hi program me use hua:

- Scanner
- int
- +=
- >=
- boolean

Isi tarah modules ek dusre ke upar build karenge.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "read-score-and-bonus",
              title: "Score + Bonus",
              prompt: `User se score aur bonus read karo.

score me bonus add karo.

Phir updated score print karo.

Test input:

80
25

Expected output:

105`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // score read karo


    // bonus read karo


    // score update karo


    System.out.println(score);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();
    int bonus = input.nextInt();

    score += bonus;

    System.out.println(score);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `80
25`,
                    expectedOutput: "105",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "input-high-score-check",
              title: "Dynamic High Score Check",
              prompt: `User se score input lo.

boolean highScore banao:

score >= 100

Test input:

120

Expected output:

true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // score read karo


    // highScore boolean banao


    System.out.println(highScore);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    boolean highScore = score >= 100;

    System.out.println(highScore);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "120",
                    expectedOutput: "true",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 6 — SCANNER NEWLINE GOTCHA
      // =====================================================
      {
        slug: "scanner-newline-gotcha",
        title: "Scanner Ka Famous Bug",
        description:
          "nextInt() ke baad nextLine() empty result kyun de sakta hai aur usse safely fix kaise karein, samjho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 6,
        estimatedMinutes: 25,

        lessons: {
          create: [
            {
              slug: "nextint-nextline-problem",
              title: "Name Empty Kyun Aa Raha Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ye Scanner beginners ka very common issue hai.

Code:

~~~java
int age = input.nextInt();

String name = input.nextLine();
~~~

Suppose input:

~~~text
25
Aman
~~~

Unexpectedly name empty mil sakta hai.

## Why Does This Happen?

Jab user:

~~~text
25
~~~

enter karta hai, Enter key ek newline bhi create karti hai.

~~~text
25\n
~~~

nextInt() number:

~~~text
25
~~~

read karta hai.

Lekin newline buffer me reh sakti hai.

Phir nextLine() us leftover newline ko consume kar leta hai.

Result:

~~~text
empty String
~~~


## Mental Model

~~~text
User enters: 25 + Enter

nextInt()
   ↓
reads 25

newline remains
   ↓

nextLine()
   ↓
consumes leftover newline
~~~
`,
            },

            {
              slug: "consume-leftover-newline",
              title: "Scanner Newline Fix",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
## The Fix

~~~java
int age = input.nextInt();

input.nextLine();

String name = input.nextLine();
~~~

Extra:

~~~java
input.nextLine();
~~~

leftover newline consume kar deta hai.

Ab next nextLine() actual user text read karega.

Example:

~~~java
Scanner input = new Scanner(System.in);

int age = input.nextInt();

input.nextLine();

String name = input.nextLine();

System.out.println(age);
System.out.println(name);
~~~

Input:

~~~text
25
Aman Sharma
~~~

Output:

~~~text
25
Aman Sharma
~~~


> 💡 Jab numeric Scanner method ke baad nextLine() use karo, newline behavior yaad rakhna.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "fix-empty-name",
              title: "Fix the Empty Name",
              prompt: `Program pehle age aur phir full name read karta hai.

Missing newline-consume statement add karo.

Test input:

25
Aman Sharma

Expected output:

25
Aman Sharma`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int age = input.nextInt();

    // leftover newline consume karo

    String name = input.nextLine();

    System.out.println(age);
    System.out.println(name);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int age = input.nextInt();

    input.nextLine();

    String name = input.nextLine();

    System.out.println(age);
    System.out.println(name);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `25
Aman Sharma`,
                    expectedOutput: `25
Aman Sharma`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "newline-checkpoint",
              title: "Quest Checkpoint",
              prompt: `nextInt() ke baad leftover newline consume karne ke liye commonly kya use karte hain?

Exactly enter karo:

input.nextLine()`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 4,
              solution: "input.nextLine()",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 7 — INPUT VALIDATION PREVIEW
      // =====================================================
      {
        slug: "input-validation-preview",
        title: "Input Ko Check Karna",
        description:
          "User input ko comparison aur logical operators ke through basic validation expressions me check karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 7,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "valid-input-expression",
              title: "Input Valid Hai Ya Nahi?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Conditions module abhi next hai.

Lekin hum already boolean expressions use karke input ko check kar sakte hain.

Example:

~~~java
int age = input.nextInt();

boolean validAge = age >= 0;
~~~

Agar user:

~~~text
25
~~~

enter kare:

~~~text
validAge = true
~~~

Agar:

~~~text
-5
~~~

enter kare:

~~~text
validAge = false
~~~


## Range Check

~~~java
int score = input.nextInt();

boolean validScore = score >= 0 && score <= 100;
~~~

Ye true tab hoga jab score 0 se 100 ke beech hai.

Hum abhi if statement use nahi kar rahe.

Sirf boolean validation expression bana rahe hain.
`,
            },

            {
              slug: "validation-with-operators",
              title: "Previous Modules Ko Connect Karo",
              kind: "RECAP",
              position: 3,
              content: String.raw`
Input validation me previous concepts ek saath use ho rahe hain.

Example:

~~~java
int score = input.nextInt();

boolean validScore =
    score >= 0 &&
    score <= 100;
~~~

Yahan:

~~~text
Scanner
+
int
+
>=
+
<=
+
&&
+
boolean
~~~

sab combine ho rahe hain.

Isi foundation par next module me:

~~~java
if (...)
~~~

use karke actual decisions lenge.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "validate-score-range",
              title: "Validate the Score",
              prompt: `User se score input lo.

validScore boolean banao:

score >= 0 && score <= 100

Test input:

85

Expected output:

true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // score read karo


    // validScore banao


    System.out.println(validScore);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    boolean validScore = score >= 0 && score <= 100;

    System.out.println(validScore);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "85",
                    expectedOutput: "true",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "invalid-score-check",
              title: "Catch an Invalid Score",
              prompt: `Same validation use karo:

score >= 0 && score <= 100

Test input:

150

Expected output:

false`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    // validScore banao


    System.out.println(validScore);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    boolean validScore = score >= 0 && score <= 100;

    System.out.println(validScore);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "150",
                    expectedOutput: "false",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 8 — MODULE CHALLENGE
      // =====================================================
      {
        slug: "interactive-java-profile",
        title: "🏆 Module Challenge: Interactive Java Profile",
        description:
          "Scanner, variables, calculations aur boolean expressions ko combine karke interactive learner profile build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 8,
        estimatedMinutes: 30,

        lessons: {
          create: [
            {
              slug: "interactive-profile-mission",
              title: "Your Scanner Mission",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab tum hard-coded programs se interactive programs tak aa gaye ho.

Is module me tumne seekha:

- Scanner import
- System.in
- nextLine()
- nextInt()
- nextDouble()
- multiple inputs
- input + calculations
- Scanner newline gotcha
- input validation expressions


## Final Mission

User se learner profile data lena.

## Required Input

~~~text
Name
Age
Daily coding hours
~~~

Program calculate karega:

~~~text
weekly coding hours
~~~

## Formula

~~~text
dailyHours * 7
~~~

Aur boolean:

~~~text
seriousLearner = weeklyHours >= 10
~~~

Is challenge me Module 2, 3 aur 4 sab combine honge.
`,
            },

            {
              slug: "scanner-module-recap",
              title: "Scanner Recap",
              kind: "RECAP",
              position: 3,
              content: String.raw`
## Quick Recap

Text:

~~~java
String name = input.nextLine();
~~~

Integer:

~~~java
int age = input.nextInt();
~~~

Decimal:

~~~java
double hours = input.nextDouble();
~~~

Numeric input ke baad nextLine:

~~~java
input.nextLine();
~~~

kabhi leftover newline consume karne ke liye required ho sakta hai.


## Programming Flow

~~~text
Input
 ↓
Store
 ↓
Process
 ↓
Validate
 ↓
Output
~~~

Next module me isi input ke basis par program decisions lega.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "calculate-interactive-weekly-hours",
              title: "Interactive Weekly Hours",
              prompt: `User daily coding hours enter karega.

weeklyHours = dailyHours * 7

Test input:

2.0

Expected output:

14.0`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // daily hours


    // weekly hours


    // print

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    double dailyHours = input.nextDouble();

    double weeklyHours = dailyHours * 7;

    System.out.println(weeklyHours);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "2.0",
                    expectedOutput: "14.0",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "build-interactive-profile",
              title: "Build the Interactive Profile",
              prompt: `Input order:

full name
age
daily coding hours

Program:

name read kare
age read kare
dailyHours read kare

weeklyHours = dailyHours * 7

seriousLearner = weeklyHours >= 10

Test input:

Aman Sharma
25
2.5

Expected output exactly:

Aman Sharma
25
17.5
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // name


    // age


    // daily coding hours


    // weekly hours


    // serious learner


    // output

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    String name = input.nextLine();
    int age = input.nextInt();
    double dailyHours = input.nextDouble();

    double weeklyHours = dailyHours * 7;

    boolean seriousLearner = weeklyHours >= 10;

    System.out.println(name);
    System.out.println(age);
    System.out.println(weeklyHours);
    System.out.println(seriousLearner);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `Aman Sharma
25
2.5`,
                    expectedOutput: `Aman Sharma
25
17.5
true`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "scanner-bug-hunt",
              title: "Bug Hunt: Fix the Profile",
              prompt: `Program age ke baad full name read karta hai.

Scanner newline bug fix karo.

Test input:

25
Aman Sharma

Expected output:

Aman Sharma
25`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int age = input.nextInt();

    String name = input.nextLine();

    System.out.println(name);
    System.out.println(age);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int age = input.nextInt();

    input.nextLine();

    String name = input.nextLine();

    System.out.println(name);
    System.out.println(age);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `25
Aman Sharma`,
                    expectedOutput: `Aman Sharma
25`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "scanner-final-challenge",
              title: "Final Challenge: Input → Result",
              prompt: `Minimal starter se program build karo.

User do integers enter karega:

score
bonus

score me bonus add karo.

highScore boolean:
score >= 100

Test input:

80
30

Expected output:

110
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // Build the program

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();
    int bonus = input.nextInt();

    score += bonus;

    boolean highScore = score >= 100;

    System.out.println(score);
    System.out.println(highScore);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `80
30`,
                    expectedOutput: `110
true`,
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