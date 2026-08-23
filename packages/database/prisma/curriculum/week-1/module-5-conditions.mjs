export const conditionsModule = {
  slug: "week-1-conditions",
  title: "Week 1 — Conditions",
  description:
    "if, else, else if, logical conditions aur switch ke through Java programs ko decisions lena sikhao.",
  position: 5,

  quests: {
    create: [
      // =====================================================
      // QUEST 1 — IF BASICS
      // =====================================================
      {
        slug: "if-basics",
        title: "Decision Lena with if",
        description:
          "if statement ke through condition true hone par code run karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 1,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "what-is-if",
              title: "if Statement Kya Karta Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab tak hamare programs mostly har line ko execute karte the.

Lekin real programs ko decisions lene padte hain.

Example:

Agar score 50 ya usse zyada hai,
tab "Passed" print karo.

Java me iske liye if statement use hota hai.

~~~java
int score = 75;

if (score >= 50) {
    System.out.println("Passed");
}
~~~

score >= 50 ka result true hai.

Isliye block run hoga.

Output:

~~~text
Passed
~~~

## Agar condition false ho?

~~~java
int score = 30;

if (score >= 50) {
    System.out.println("Passed");
}
~~~

30 >= 50 false hai.

Isliye if block skip ho jayega.

Koi output nahi aayega.

## Mental model

~~~text
Condition
   ↓
 true? ── yes ──> code run
   │
   no
   ↓
 skip block
~~~

> 💡 if block tabhi run hota hai jab condition true ho.
`,
            },

            {
              slug: "if-with-boolean",
              title: "Boolean Variable Ke Saath if",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
if ke andar direct boolean variable bhi use kar sakte ho.

Example:

~~~java
boolean loggedIn = true;

if (loggedIn) {
    System.out.println("Welcome!");
}
~~~

loggedIn true hai.

Output:

~~~text
Welcome!
~~~

Agar:

~~~java
boolean loggedIn = false;
~~~

ho, to block run nahi karega.

Ye same idea hai jo tum boolean module me seekh chuke ho.

if ke andar expression ka final result boolean hona chahiye:

~~~java
score >= 50
age >= 18
loggedIn
lives > 0
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-if-output",
              title: "Will It Run?",
              prompt: `Code dekho:

int score = 70;

if (score >= 50) {
    System.out.println("Passed");
}

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "Passed",
            },

            {
              slug: "build-pass-check",
              title: "Build a Pass Check",
              prompt: `score ki value 80 hai.

if statement use karo:

Agar score >= 50 ho to "Passed" print karo.

Expected output:

Passed`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 80;

    // if statement yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 80;

    if (score >= 50) {
      System.out.println("Passed");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Passed",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "if-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Code dekho:

int age = 15;

if (age >= 18) {
    System.out.println("Adult");
}

Kya print hoga?

Agar kuch print nahi hoga to exactly enter karo:

NO OUTPUT`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "NO OUTPUT",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 2 — IF ELSE
      // =====================================================
      {
        slug: "if-else",
        title: "Do Raaste: if / else",
        description:
          "if aur else ke through true aur false dono outcomes handle karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 2,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "if-else-basics",
              title: "True Ho To Ye, Warna Wo",
              kind: "THEORY",
              position: 1,
              content: String.raw`
if ke saath else use karke dono possibilities handle kar sakte ho.

Example:

~~~java
int age = 20;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}
~~~

age >= 18 true hai.

Output:

~~~text
Adult
~~~

Agar age 15 hoti:

~~~java
int age = 15;
~~~

to condition false hoti.

Output:

~~~text
Minor
~~~

## Important

if / else me exactly ek branch run hoti hai.

~~~text
condition true
    ↓
if block

condition false
    ↓
else block
~~~
`,
            },

            {
              slug: "if-else-real-example",
              title: "Program Ka Behaviour Change Karna",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Example:

~~~java
boolean gameOver = false;

if (gameOver) {
    System.out.println("Game Over");
} else {
    System.out.println("Keep Playing");
}
~~~

Output:

~~~text
Keep Playing
~~~

Ek aur example:

~~~java
int balance = 100;

if (balance >= 50) {
    System.out.println("Purchase allowed");
} else {
    System.out.println("Not enough balance");
}
~~~

Conditions program ka behaviour dynamically change karti hain.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-if-else",
              title: "Which Branch Runs?",
              prompt: `Code dekho:

int age = 16;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "Minor",
            },

            {
              slug: "build-age-checker",
              title: "Build an Age Checker",
              prompt: `age ki value 21 hai.

Agar age >= 18:
Adult

warna:
Minor

Expected output:

Adult`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int age = 21;

    // if / else yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int age = 21;

    if (age >= 18) {
      System.out.println("Adult");
    } else {
      System.out.println("Minor");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Adult",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 3 — ELSE IF
      // =====================================================
      {
        slug: "else-if",
        title: "Multiple Decisions with else if",
        description:
          "Multiple conditions ko order me check karke different outcomes banana seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 3,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "else-if-basics",
              title: "Do Se Zyada Outcomes",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Kabhi sirf do outcomes enough nahi hote.

Example:

Score ke basis par grade decide karna.

~~~java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 70) {
    System.out.println("B");
} else {
    System.out.println("C");
}
~~~

score 85 hai.

Pehli condition:

~~~text
85 >= 90 → false
~~~

Second condition:

~~~text
85 >= 70 → true
~~~

Output:

~~~text
B
~~~

Java first matching branch run karta hai.

Uske baad baaki branches skip ho jati hain.
`,
            },

            {
              slug: "condition-order",
              title: "Order Bahut Important Hai",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Conditions ka order result ko change kar sakta hai.

Wrong order:

~~~java
int score = 95;

if (score >= 50) {
    System.out.println("Passed");
} else if (score >= 90) {
    System.out.println("Excellent");
}
~~~

95 >= 50 true hai.

Java first branch run karega.

Output:

~~~text
Passed
~~~

Excellent branch tak pahunch hi nahi payega.

Better:

~~~java
if (score >= 90) {
    System.out.println("Excellent");
} else if (score >= 50) {
    System.out.println("Passed");
}
~~~

Rule:

> More specific / higher threshold conditions pehle check karo.
`,
            },

            {
              slug: "grade-chain-example",
              title: "Grade Chain",
              kind: "EXAMPLE",
              position: 5,
              content: String.raw`
Example:

~~~java
int score = 76;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 75) {
    System.out.println("B");
} else if (score >= 50) {
    System.out.println("C");
} else {
    System.out.println("Fail");
}
~~~

76:

~~~text
>= 90 → false
>= 75 → true
~~~

Output:

~~~text
B
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-grade",
              title: "Predict the Grade",
              prompt: `score = 82

Rules:

>= 90 -> A
>= 75 -> B
>= 50 -> C
else -> Fail

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "B",
            },

            {
              slug: "build-grade-chain",
              title: "Build a Grade Chain",
              prompt: `score ki value 65 hai.

Rules:

>= 90 -> A
>= 75 -> B
>= 50 -> C
else -> Fail

Expected output:

C`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 65;

    // if / else if / else chain banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 65;

    if (score >= 90) {
      System.out.println("A");
    } else if (score >= 75) {
      System.out.println("B");
    } else if (score >= 50) {
      System.out.println("C");
    } else {
      System.out.println("Fail");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "C",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-condition-order",
              title: "Fix the Wrong Order",
              prompt: `Program 95 score ke liye "Excellent" print karna chahta hai.

Current order wrong hai.

Expected output:

Excellent`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 95;

    if (score >= 50) {
      System.out.println("Passed");
    } else if (score >= 90) {
      System.out.println("Excellent");
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 95;

    if (score >= 90) {
      System.out.println("Excellent");
    } else if (score >= 50) {
      System.out.println("Passed");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Excellent",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 4 — MULTIPLE CONDITIONS
      // =====================================================
      {
        slug: "multiple-conditions",
        title: "Multiple Conditions",
        description:
          "&&, || aur ! ko if statements ke andar use karke complex decisions banana seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 4,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "and-in-if",
              title: "if Ke Andar &&",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Logical operators ab actual decisions me use honge.

Example:

~~~java
int age = 20;
boolean hasTicket = true;

if (age >= 18 && hasTicket) {
    System.out.println("Enter");
}
~~~

Dono conditions true honi chahiye:

~~~text
age >= 18
AND
hasTicket
~~~

Agar ek bhi false ho:

if block run nahi karega.
`,
            },

            {
              slug: "or-and-not-in-if",
              title: "|| aur ! Conditions",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
OR:

~~~java
boolean premium = false;
boolean hasCoupon = true;

if (premium || hasCoupon) {
    System.out.println("Discount");
}
~~~

At least ek true hai.

Output:

~~~text
Discount
~~~

NOT:

~~~java
boolean banned = false;

if (!banned) {
    System.out.println("Access allowed");
}
~~~

!false = true

Output:

~~~text
Access allowed
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "build-entry-check",
              title: "Build Entry Check",
              prompt: `age = 22
hasTicket = true

Condition:

age >= 18 && hasTicket

Agar true ho to:

Enter

Expected output:

Enter`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int age = 22;
    boolean hasTicket = true;

    // condition yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int age = 22;
    boolean hasTicket = true;

    if (age >= 18 && hasTicket) {
      System.out.println("Enter");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Enter",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "discount-check",
              title: "Premium ya Coupon?",
              prompt: `premium = false
hasCoupon = true

Agar premium || hasCoupon true ho to:

Discount

Expected output:

Discount`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    boolean premium = false;
    boolean hasCoupon = true;

    // condition yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    boolean premium = false;
    boolean hasCoupon = true;

    if (premium || hasCoupon) {
      System.out.println("Discount");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Discount",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 5 — NESTED CONDITIONS
      // =====================================================
      {
        slug: "nested-conditions",
        title: "Conditions Ke Andar Conditions",
        description:
          "Nested if statements ko read aur use karna seekho bina unnecessary complexity create kiye.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 5,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "nested-if-basics",
              title: "Nested if Kya Hota Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ek if block ke andar dusra if ho sakta hai.

Example:

~~~java
boolean loggedIn = true;
boolean isAdmin = true;

if (loggedIn) {
    if (isAdmin) {
        System.out.println("Admin Panel");
    }
}
~~~

Flow:

~~~text
loggedIn?
   ↓ yes
isAdmin?
   ↓ yes
Admin Panel
~~~

Nested condition tab useful hoti hai jab second decision first decision ke andar logically depend karta ho.
`,
            },

            {
              slug: "avoid-deep-nesting",
              title: "Over-Nesting Se Bachna",
              kind: "RECAP",
              position: 3,
              content: String.raw`
Nested conditions useful hain.

Lekin bahut zyada nesting code ko hard to read bana sakti hai.

Example:

~~~text
if
  if
    if
      if
~~~

Beginner stage par rule:

> Sirf tab nest karo jab logic naturally dependent ho.

Kai cases me logical operators cleaner ho sakte hain.

Example:

~~~java
if (loggedIn && isAdmin) {
    System.out.println("Admin Panel");
}
~~~

Ye nested version se simpler ho sakta hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "nested-admin-check",
              title: "Admin Panel Access",
              prompt: `loggedIn = true
isAdmin = true

Nested if use karke "Admin Panel" print karo.

Expected output:

Admin Panel`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    boolean loggedIn = true;
    boolean isAdmin = true;

    // nested if yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    boolean loggedIn = true;
    boolean isAdmin = true;

    if (loggedIn) {
      if (isAdmin) {
        System.out.println("Admin Panel");
      }
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Admin Panel",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 6 — SWITCH
      // =====================================================
      {
        slug: "switch-basics",
        title: "Menu Decisions with switch",
        description:
          "switch expression ke through fixed choices ko cleanly handle karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 6,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "what-is-switch",
              title: "switch Kab Useful Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Kabhi ek value ke multiple exact options hote hain.

Example:

~~~text
1 → Play
2 → Settings
3 → Exit
~~~

Aise cases me switch readable ho sakta hai.

Modern Java syntax:

~~~java
int choice = 2;

switch (choice) {
    case 1 -> System.out.println("Play");
    case 2 -> System.out.println("Settings");
    case 3 -> System.out.println("Exit");
    default -> System.out.println("Invalid");
}
~~~

choice = 2

Output:

~~~text
Settings
~~~

default tab run hota hai jab koi case match nahi karta.
`,
            },

            {
              slug: "switch-vs-if",
              title: "switch vs if",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
switch useful hai jab:

- ek value hai
- multiple exact choices hain

Example:

~~~java
switch (day) {
    case 1 -> System.out.println("Monday");
    case 2 -> System.out.println("Tuesday");
    default -> System.out.println("Unknown");
}
~~~

if / else better hota hai jab:

~~~text
score >= 90
age >= 18
price < 100
~~~

jaise range/comparison conditions hon.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-switch",
              title: "Predict the Menu",
              prompt: `choice = 2

Cases:

1 -> Play
2 -> Settings
default -> Invalid

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "Settings",
            },

            {
              slug: "build-menu-switch",
              title: "Build a Menu",
              prompt: `choice ki value 3 hai.

switch banao:

1 -> Play
2 -> Settings
3 -> Exit
default -> Invalid

Expected output:

Exit`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int choice = 3;

    // switch yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int choice = 3;

    switch (choice) {
      case 1 -> System.out.println("Play");
      case 2 -> System.out.println("Settings");
      case 3 -> System.out.println("Exit");
      default -> System.out.println("Invalid");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Exit",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 7 — DEBUGGING CONDITIONS
      // =====================================================
      {
        slug: "condition-debugging",
        title: "Condition Bug Hunt",
        description:
          "Assignment vs comparison, wrong order aur logical mistakes jaise common condition bugs fix karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 7,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "common-condition-bugs",
              title: "Common Condition Mistakes",
              kind: "RECAP",
              position: 1,
              content: String.raw`
Common bugs recap:

## = vs ==

Wrong:

~~~java
if (score = 50)
~~~

Correct:

~~~java
if (score == 50)
~~~

## Wrong threshold order

Wrong:

~~~java
if (score >= 50) {
    ...
} else if (score >= 90) {
    ...
}
~~~

Higher threshold pehle aana chahiye.

## Wrong logical operator

Sometimes:

~~~java
age >= 18 || hasTicket
~~~

aur:

~~~java
age >= 18 && hasTicket
~~~

ka meaning completely different hai.

Condition ko English/Hinglish sentence me read karo before coding.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "fix-equality-condition",
              title: "Fix = vs ==",
              prompt: `Program score exactly 50 check karna chahta hai.

Code fix karo.

Expected output:

Exact`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 50;

    if (score = 50) {
      System.out.println("Exact");
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 50;

    if (score == 50) {
      System.out.println("Exact");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Exact",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-grade-order",
              title: "Fix Grade Order",
              prompt: `score = 95

Expected output:

A

Current condition order wrong hai.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 95;

    if (score >= 50) {
      System.out.println("C");
    } else if (score >= 75) {
      System.out.println("B");
    } else if (score >= 90) {
      System.out.println("A");
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 95;

    if (score >= 90) {
      System.out.println("A");
    } else if (score >= 75) {
      System.out.println("B");
    } else if (score >= 50) {
      System.out.println("C");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "A",
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
        slug: "grade-calculator-challenge",
        title: "🏆 Module Challenge: Grade Calculator",
        description:
          "Scanner, validation aur conditions ko combine karke interactive grade calculator build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 8,
        estimatedMinutes: 30,

        lessons: {
          create: [
            {
              slug: "grade-calculator-mission",
              title: "Your Conditions Mission",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab tum programs ko actual decisions lena sikha sakte ho.

Final mission:

User score enter karega.

Program:

1. score read karega
2. validate karega
3. grade decide karega


Rules:

~~~text
90 - 100 → A

75 - 89 → B

50 - 74 → C

0 - 49 → Fail

outside 0-100 → Invalid
~~~


Ye challenge combine karta hai:

- Scanner
- int
- comparisons
- logical operators
- if
- else if
- else
`,
            },

            {
              slug: "conditions-final-recap",
              title: "Conditions Recap",
              kind: "RECAP",
              position: 3,
              content: String.raw`
Quick recap:

~~~text
if
→ condition true ho to run

else
→ otherwise

else if
→ multiple ordered checks

&&
→ both

||
→ at least one

!
→ reverse

switch
→ exact fixed choices
~~~

Remember:

First matching else-if branch wins.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "interactive-pass-fail",
              title: "Interactive Pass / Fail",
              prompt: `User score enter karega.

Agar score >= 50:
Passed

warna:
Failed

Test input:

72

Expected output:

Passed`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // score read karo


    // decision yahan banao

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    if (score >= 50) {
      System.out.println("Passed");
    } else {
      System.out.println("Failed");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "72",
                    expectedOutput: "Passed",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "build-grade-calculator",
              title: "Build the Grade Calculator",
              prompt: `User score enter karega.

Rules:

90-100 -> A
75-89 -> B
50-74 -> C
0-49 -> Fail
outside 0-100 -> Invalid

Test input:

82

Expected output:

B`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    // grade logic yahan banao

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    if (score < 0 || score > 100) {
      System.out.println("Invalid");
    } else if (score >= 90) {
      System.out.println("A");
    } else if (score >= 75) {
      System.out.println("B");
    } else if (score >= 50) {
      System.out.println("C");
    } else {
      System.out.println("Fail");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "82",
                    expectedOutput: "B",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "grade-invalid-input",
              title: "Handle Invalid Score",
              prompt: `Same grade calculator logic use karo.

Test input:

120

Expected output:

Invalid`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    // validation + grade logic

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int score = input.nextInt();

    if (score < 0 || score > 100) {
      System.out.println("Invalid");
    } else if (score >= 90) {
      System.out.println("A");
    } else if (score >= 75) {
      System.out.println("B");
    } else if (score >= 50) {
      System.out.println("C");
    } else {
      System.out.println("Fail");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "120",
                    expectedOutput: "Invalid",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "conditions-final-challenge",
              title: "Final Challenge: Eligibility Checker",
              prompt: `Minimal starter se program build karo.

Input order:

age
hasTicket

hasTicket input boolean hoga.

Rule:

Agar age >= 18 && hasTicket true:
Allowed

warna:
Denied

Test input:

21
true

Expected output:

Allowed`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // Build the eligibility checker

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int age = input.nextInt();
    boolean hasTicket = input.nextBoolean();

    if (age >= 18 && hasTicket) {
      System.out.println("Allowed");
    } else {
      System.out.println("Denied");
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: `21
true`,
                    expectedOutput: "Allowed",
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