export const loopsModule = {
  slug: "week-1-loops",
  title: "Week 1 — Loops",
  description:
    "for, while, do-while, break, continue aur accumulator patterns ke through repeated tasks automate karna seekho.",
  position: 6,

  quests: {
    create: [
      // =====================================================
      // QUEST 1 — WHY LOOPS
      // =====================================================
      {
        slug: "why-loops",
        title: "Why Loops?",
        description:
          "Repeated code ki problem samjho aur loops ka basic mental model build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 1,
        estimatedMinutes: 18,

        lessons: {
          create: [
            {
              slug: "repetition-problem",
              title: "Same Code Baar Baar Kyun Likhein?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Suppose tumhe Java word 5 baar print karna hai.

Without loop:

~~~java
System.out.println("Java");
System.out.println("Java");
System.out.println("Java");
System.out.println("Java");
System.out.println("Java");
~~~

Ye kaam karta hai.

Lekin agar 100 baar print karna ho?

100 lines likhna inefficient hoga.

Programming me repeated tasks automate karne ke liye hum **loops** use karte hain.


## Loop Ka Basic Idea

~~~text
Start
  ↓
Condition check
  ↓
Code run
  ↓
Update
  ↓
Condition dobara check
  ↺
~~~

Loop tab tak repeat karta hai jab tak uski condition allow karti hai.


Example idea:

~~~text
1
2
3
4
5
~~~

Hum ek counter variable ko repeatedly update karke ye output generate kar sakte hain.


Loops future me use honge:

- numbers repeat karne me
- user attempts me
- lists process karne me
- totals calculate karne me
- searching me
- games me
- data processing me
`,
            },

            {
              slug: "loop-mental-model",
              title: "Loop Ko Mentally Trace Karo",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Loop ko samajhne ka best tareeka hai step-by-step trace karna.

Suppose counter 1 se start hota hai.

~~~text
counter = 1

condition true
print 1
counter becomes 2

condition true
print 2
counter becomes 3

condition true
print 3
counter becomes 4

condition false
loop stop
~~~

Important idea:

Loop ke usually teen important parts hote hain:

~~~text
Starting point

Condition

Update
~~~

Next quest me hum in teen parts ko Java ke for loop me dekhenge.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "spot-repetition",
              title: "What Should Repeat?",
              prompt: `Agar hume "Java" word 100 baar print karna ho, repeated task automate karne ke liye kaunsa programming concept use karenge?

Exactly enter karo:

loop`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "loop",
            },

            {
              slug: "loops-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Loop generally kab tak repeat karta hai?

Exactly enter karo:

condition true`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 4,
              solution: "condition true",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 2 — FOR LOOP
      // =====================================================
      {
        slug: "for-loop-basics",
        title: "Your First for Loop",
        description:
          "for loop ka structure samjho aur fixed number of repetitions perform karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 2,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "for-loop-structure",
              title: "for Loop Ko Break Karke Samjho",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Java ka basic for loop:

~~~java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
~~~

Output:

~~~text
1
2
3
4
5
~~~


for loop ke teen important parts:

~~~java
for (int i = 1; i <= 5; i++)
~~~

## for Loop Breakdown

~~~text
int i = 1
    ↓
starting point

i <= 5
    ↓
condition

i++
    ↓
update
~~~


## Loop Flow

~~~text
i = 1
 ↓
1 <= 5 ? true
 ↓
print 1
 ↓
i++

i = 2
 ↓
repeat...
~~~


Jab:

~~~text
i = 6
~~~

condition:

~~~text
6 <= 5
~~~

false ho jati hai.

Loop stop ho jata hai.
`,
            },

            {
              slug: "for-loop-tracing",
              title: "for Loop Ko Trace Karna",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Example:

~~~java
for (int i = 1; i <= 3; i++) {
    System.out.println("Java");
}
~~~

## Step-by-Step Trace

~~~text
i = 1
condition true
Java print

i = 2
condition true
Java print

i = 3
condition true
Java print

i = 4
condition false
stop
~~~

Output:

~~~text
Java
Java
Java
~~~


Counter ko body ke andar use karna bhi possible hai:

~~~java
for (int i = 1; i <= 3; i++) {
    System.out.println(i);
}
~~~

Output:

~~~text
1
2
3
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-for-loop",
              title: "Predict the Loop",
              prompt: `Code dekho:

for (int i = 1; i <= 3; i++) {
    System.out.println(i);
}

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: `1
2
3`,
            },

            {
              slug: "print-one-to-five",
              title: "Print 1 to 5",
              prompt: `for loop use karke numbers 1 se 5 tak print karo.

Expected output:

1
2
3
4
5`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // for loop yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      System.out.println(i);
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `1
2
3
4
5`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "for-loop-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Code dekho:

for (int i = 0; i < 3; i++) {
    System.out.println("Go");
}

"Go" kitni baar print hoga?

Exactly number enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "3",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 3 — COUNT UP AND DOWN
      // =====================================================
      {
        slug: "count-up-and-down",
        title: "Count Up & Count Down",
        description:
          "for loops ke through custom ranges me counting aur countdown banana seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 3,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "custom-loop-ranges",
              title: "Loop Hamesha 1 Se Start Nahi Hota",
              kind: "THEORY",
              position: 1,
              content: String.raw`
for loop ka starting point tum decide karte ho.

Example:

~~~java
for (int i = 5; i <= 8; i++) {
    System.out.println(i);
}
~~~

Output:

~~~text
5
6
7
8
~~~


Start:

~~~text
5
~~~

End condition:

~~~text
i <= 8
~~~

Update:

~~~text
i++
~~~


Isi tarah step size bhi different ho sakti hai:

~~~java
for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);
}
~~~

Output:

~~~text
0
2
4
6
8
10
~~~
`,
            },

            {
              slug: "countdown-loop",
              title: "Countdown with --",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Countdown ke liye counter decrease kar sakte ho.

Example:

~~~java
for (int i = 5; i >= 1; i--) {
    System.out.println(i);
}
~~~

Output:

~~~text
5
4
3
2
1
~~~


Yahan:

~~~text
start = 5

condition = i >= 1

update = i--
~~~


Agar update wrong direction me ho:

~~~java
for (int i = 5; i >= 1; i++)
~~~

to condition false hone ki taraf move nahi karegi.

Isse infinite loop jaisi problem ho sakti hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-countdown",
              title: "Predict the Countdown",
              prompt: `Output kya hoga?

for (int i = 3; i >= 1; i--) {
    System.out.println(i);
}`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: `3
2
1`,
            },

            {
              slug: "build-countdown",
              title: "Build a Countdown",
              prompt: `for loop se 5 se 1 tak countdown print karo.

Expected output:

5
4
3
2
1`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // countdown loop

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    for (int i = 5; i >= 1; i--) {
      System.out.println(i);
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `5
4
3
2
1`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "even-step-loop",
              title: "Count by Two",
              prompt: `for loop use karke:

2
4
6
8
10

print karo.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // loop yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    for (int i = 2; i <= 10; i += 2) {
      System.out.println(i);
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `2
4
6
8
10`,
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 4 — WHILE LOOP
      // =====================================================
      {
        slug: "while-loop",
        title: "Repeat with while",
        description:
          "while loop ke through condition-based repetition aur infinite loop risks samjho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 4,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "while-basics",
              title: "while Loop Kya Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
while loop tab useful hota hai jab repetition primarily ek condition par depend karti hai.

Example:

~~~java
int lives = 3;

while (lives > 0) {
    System.out.println(lives);

    lives--;
}
~~~

Output:

~~~text
3
2
1
~~~


## Loop Flow

~~~text
lives = 3

lives > 0?
yes
print
decrement

repeat...
~~~


Jab lives 0 ho jata hai:

~~~text
0 > 0
~~~

false.

Loop stop.


## while Syntax

~~~java
while (condition) {
    // repeated code
}
~~~
`,
            },

            {
              slug: "infinite-loop-warning",
              title: "Infinite Loop Se Bachna",
              kind: "THEORY",
              position: 3,
              content: String.raw`
while loop me condition eventually false honi chahiye.

Problematic example:

~~~java
int lives = 3;

while (lives > 0) {
    System.out.println(lives);
}
~~~

lives kabhi change hi nahi ho raha.

Condition:

~~~text
lives > 0
~~~

hamesha true rahegi.

Loop continuously run kar sakta hai.


Correct:

~~~java
while (lives > 0) {
    System.out.println(lives);
    lives--;
}
~~~


## Stop Condition Check

> 💡 Har loop likhte waqt socho — **ye loop stop kaise hoga?**
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-while",
              title: "Predict the while Loop",
              prompt: `Code dekho:

int i = 1;

while (i <= 3) {
    System.out.println(i);
    i++;
}

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: `1
2
3`,
            },

            {
              slug: "build-while-countdown",
              title: "while Countdown",
              prompt: `while loop use karke 3 se 1 tak print karo.

Expected output:

3
2
1`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int number = 3;

    // while loop yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int number = 3;

    while (number >= 1) {
      System.out.println(number);
      number--;
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `3
2
1`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-infinite-loop",
              title: "Fix the Infinite Loop",
              prompt: `Loop ko fix karo taaki output ho:

1
2
3

Current code counter update nahi karta.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int i = 1;

    while (i <= 3) {
      System.out.println(i);

      // missing update
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int i = 1;

    while (i <= 3) {
      System.out.println(i);
      i++;
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `1
2
3`,
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 5 — DO WHILE
      // =====================================================
      {
        slug: "do-while-loop",
        title: "At Least Once: do-while",
        description:
          "do-while loop aur while loop ke execution-order difference ko samjho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 5,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "do-while-basics",
              title: "do-while Ka Special Behaviour",
              kind: "THEORY",
              position: 1,
              content: String.raw`
while loop condition pehle check karta hai.

do-while body pehle run karta hai.

Syntax:

~~~java
do {
    // code
} while (condition);
~~~


Example:

~~~java
int number = 1;

do {
    System.out.println(number);
    number++;
} while (number <= 3);
~~~

Output:

~~~text
1
2
3
~~~


## Key Difference

~~~text
while
→ condition first

do-while
→ body first
→ condition after
~~~


Isliye do-while body **at least once** run hota hai.
`,
            },

            {
              slug: "do-while-once",
              title: "Condition False Ho Tab Bhi",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Example:

~~~java
int number = 10;

do {
    System.out.println(number);
} while (number < 5);
~~~

Condition:

~~~text
10 < 5
~~~

false hai.

Lekin output:

~~~text
10
~~~

kyun?

Body condition check se pehle run hua.


Compare with while:

~~~java
int number = 10;

while (number < 5) {
    System.out.println(number);
}
~~~

Yahan no output.

Because condition first check hoti hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-do-while",
              title: "Runs At Least Once?",
              prompt: `Code dekho:

int x = 10;

do {
    System.out.println(x);
} while (x < 5);

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "10",
            },

            {
              slug: "build-do-while",
              title: "Build a do-while Loop",
              prompt: `do-while use karke 1 se 3 tak print karo.

Expected output:

1
2
3`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int number = 1;

    // do-while yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int number = 1;

    do {
      System.out.println(number);
      number++;
    } while (number <= 3);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `1
2
3`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "do-while-checkpoint",
              title: "Quest Checkpoint",
              prompt: `do-while loop ki body minimum kitni baar run hoti hai?

Exactly number enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "1",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 6 — BREAK AND CONTINUE
      // =====================================================
      {
        slug: "break-and-continue",
        title: "Loop Control: break & continue",
        description:
          "break aur continue ke through loop execution ko control karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 6,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "break-basics",
              title: "Loop Ko Early Stop Karna with break",
              kind: "THEORY",
              position: 1,
              content: String.raw`
break current loop ko immediately stop karta hai.

Example:

~~~java
for (int i = 1; i <= 10; i++) {

    if (i == 4) {
        break;
    }

    System.out.println(i);
}
~~~

Output:

~~~text
1
2
3
~~~

Jab i = 4:

~~~text
break
~~~

execute hota hai.

Loop completely stop.


## Mental Model

~~~text
loop
 ↓
break?
 ↓ yes
EXIT LOOP
~~~
`,
            },

            {
              slug: "continue-basics",
              title: "Ek Iteration Skip Karna with continue",
              kind: "THEORY",
              position: 3,
              content: String.raw`
continue loop ko completely stop nahi karta.

Sirf current iteration ka remaining code skip karta hai.

Example:

~~~java
for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    System.out.println(i);
}
~~~

Output:

~~~text
1
2
4
5
~~~

3 print nahi hua.

Lekin loop 4 aur 5 ke liye continue hua.


## Pattern Difference

~~~text
break
→ loop khatam

continue
→ current round skip
→ next round continue
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-break",
              title: "Predict break",
              prompt: `Code dekho:

for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }

    System.out.println(i);
}

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: `1
2`,
            },

            {
              slug: "skip-number-three",
              title: "Skip Number 3",
              prompt: `for loop 1 se 5 tak chalega.

continue use karke number 3 ko skip karo.

Expected output:

1
2
4
5`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {

      // 3 ko skip karo


      System.out.println(i);
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      if (i == 3) {
        continue;
      }

      System.out.println(i);
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `1
2
4
5`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "stop-at-five",
              title: "Stop at 5",
              prompt: `Loop 1 se 10 tak configured hai.

i == 5 hone par break karo.

Sirf numbers 1 to 4 print hone chahiye.

Expected output:

1
2
3
4`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {

      // 5 par loop stop karo


      System.out.println(i);
    }
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {
      if (i == 5) {
        break;
      }

      System.out.println(i);
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `1
2
3
4`,
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 7 — CONDITIONS INSIDE LOOPS
      // =====================================================
      {
        slug: "conditions-inside-loops",
        title: "Loops + Conditions",
        description:
          "if statements, modulus aur loops ko combine karke selective repetition karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 7,
        estimatedMinutes: 24,

        lessons: {
          create: [
            {
              slug: "if-inside-loop",
              title: "Har Iteration Par Decision",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Loop ke andar if statement use kar sakte ho.

Example:

~~~java
for (int i = 1; i <= 5; i++) {

    if (i >= 3) {
        System.out.println(i);
    }
}
~~~

Output:

~~~text
3
4
5
~~~


Har iteration par condition check hoti hai.

## Loop Flow

~~~text
i = 1
1 >= 3? false

i = 2
2 >= 3? false

i = 3
3 >= 3? true
print

...
~~~


Ye combination powerful hai:

~~~text
Loop
+
Condition
=
Repeat + Decide
~~~
`,
            },

            {
              slug: "even-numbers-loop",
              title: "Even Numbers with %",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Module 3 me tumne modulus seekha tha.

## Even Number Pattern

~~~text
number % 2 == 0
~~~

Ab isse loop ke andar use karo:

~~~java
for (int i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        System.out.println(i);
    }
}
~~~

Output:

~~~text
2
4
6
8
10
~~~


Yahan combine hua:

- for loop
- if
- %
- ==
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-even-loop",
              title: "Which Numbers Print?",
              prompt: `Code dekho:

for (int i = 1; i <= 6; i++) {
    if (i % 2 == 0) {
        System.out.println(i);
    }
}

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: `2
4
6`,
            },

            {
              slug: "print-even-numbers",
              title: "Print Even Numbers",
              prompt: `for loop + if + modulus use karke 1 se 10 ke beech sirf even numbers print karo.

Expected output:

2
4
6
8
10`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // loop + condition yahan banao

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {
      if (i % 2 == 0) {
        System.out.println(i);
      }
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `2
4
6
8
10`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "print-divisible-by-three",
              title: "Divisible by 3",
              prompt: `1 se 12 tak sirf wo numbers print karo jo 3 se completely divide hote hain.

Expected output:

3
6
9
12`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // loop + modulus condition

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 12; i++) {
      if (i % 3 == 0) {
        System.out.println(i);
      }
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `3
6
9
12`,
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 8 — ACCUMULATOR PATTERNS
      // =====================================================
      {
        slug: "loop-accumulators",
        title: "Counters & Accumulators",
        description:
          "Loops ke through totals aur counts calculate karne ke important problem-solving patterns seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 8,
        estimatedMinutes: 24,

        lessons: {
          create: [
            {
              slug: "sum-accumulator",
              title: "Running Total Banana",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Loops ka ek very important pattern hai **accumulator**.

Suppose 1 se 5 tak numbers ka total chahiye.

~~~java
int total = 0;

for (int i = 1; i <= 5; i++) {
    total += i;
}

System.out.println(total);
~~~

Output:

~~~text
15
~~~


## Step-by-Step Trace

~~~text
total = 0

i = 1
total = 1

i = 2
total = 3

i = 3
total = 6

i = 4
total = 10

i = 5
total = 15
~~~


Variable loop ke har round me previous result ko carry karta hai.

Isliye ise running total keh sakte ho.
`,
            },

            {
              slug: "counter-pattern",
              title: "Kitni Baar Match Hua?",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Counter pattern matches count karta hai.

Example:

1 se 10 ke beech kitne even numbers hain?

~~~java
int count = 0;

for (int i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        count++;
    }
}

System.out.println(count);
~~~

Even numbers:

~~~text
2
4
6
8
10
~~~

Count:

~~~text
5
~~~


## Pattern Difference

~~~text
accumulator
→ values ko add karta hai

counter
→ occurrences count karta hai
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-running-total",
              title: "Predict the Total",
              prompt: `Code dekho:

int total = 0;

for (int i = 1; i <= 3; i++) {
    total += i;
}

System.out.println(total);

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "6",
            },

            {
              slug: "sum-one-to-five",
              title: "Sum 1 to 5",
              prompt: `for loop aur accumulator use karke 1 se 5 tak numbers ka sum calculate karo.

Expected output:

15`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int total = 0;

    // loop yahan banao


    System.out.println(total);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int total = 0;

    for (int i = 1; i <= 5; i++) {
      total += i;
    }

    System.out.println(total);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "15",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "count-even-numbers",
              title: "Count Even Numbers",
              prompt: `1 se 10 ke beech kitne even numbers hain?

Loop + if + counter use karo.

Expected output:

5`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int count = 0;

    // loop + condition yahan banao


    System.out.println(count);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int count = 0;

    for (int i = 1; i <= 10; i++) {
      if (i % 2 == 0) {
        count++;
      }
    }

    System.out.println(count);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "5",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 9 — MODULE CHALLENGE
      // =====================================================
      {
        slug: "number-loop-challenge",
        title: "🏆 Module Challenge: Number Analyzer",
        description:
          "Scanner, loops, conditions, modulus aur accumulators ko combine karke number analyzer build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 9,
        estimatedMinutes: 32,

        lessons: {
          create: [
            {
              slug: "loops-module-mission",
              title: "Your Loop Mission",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab tum repetition automate kar sakte ho.

Is module me tumne seekha:

- for
- while
- do-while
- counters
- countdowns
- break
- continue
- conditions inside loops
- modulus
- accumulators


## Final Mission

Final challenge me user ek number enter karega.

Suppose:

~~~text
5
~~~

Program 1 se 5 tak process karega.

Expected ideas:

~~~text
1
2 EVEN
3
4 EVEN
5
Total: 15
~~~


## Program Ko Kya Karna Hai?

1. input read karna hai
2. loop chalana hai
3. even numbers identify karne hain
4. running total calculate karna hai


Ye Week 1 ke multiple modules ko combine karta hai.
`,
            },

            {
              slug: "loops-final-recap",
              title: "Loops Recap",
              kind: "RECAP",
              position: 3,
              content: String.raw`
## Quick Recap

~~~text
for
→ known/reasonable counting pattern

while
→ condition-based repetition

do-while
→ at least once

break
→ loop exit

continue
→ current iteration skip
~~~


## Problem-Solving Patterns

~~~text
counter
→ kitne matches

accumulator
→ running total
~~~


## Powerful Combination

~~~text
Input
+
Loop
+
Condition
+
Calculation
=
Dynamic program
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "input-countdown",
              title: "Dynamic Countdown",
              prompt: `User ek starting number enter karega.

Us number se 1 tak countdown print karo.

Test input:

4

Expected output:

4
3
2
1`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // starting number read karo


    // countdown loop

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int number = input.nextInt();

    for (int i = number; i >= 1; i--) {
      System.out.println(i);
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "4",
                    expectedOutput: `4
3
2
1`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "dynamic-sum",
              title: "Dynamic Running Total",
              prompt: `User ek number enter karega.

1 se us number tak sum calculate karo.

Test input:

5

Expected output:

15`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int limit = input.nextInt();

    int total = 0;

    // loop + accumulator


    System.out.println(total);
  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int limit = input.nextInt();

    int total = 0;

    for (int i = 1; i <= limit; i++) {
      total += i;
    }

    System.out.println(total);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "5",
                    expectedOutput: "15",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "build-number-analyzer",
              title: "Build the Number Analyzer",
              prompt: `User limit enter karega.

1 se limit tak har number print karo.

Even number ke liye:

number + " EVEN"

Odd number ke liye sirf number print karo.

End me total print karo:

Total: X

Test input:

5

Expected output exactly:

1
2 EVEN
3
4 EVEN
5
Total: 15`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int limit = input.nextInt();
    int total = 0;

    // loop + conditions + total

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int limit = input.nextInt();
    int total = 0;

    for (int i = 1; i <= limit; i++) {
      total += i;

      if (i % 2 == 0) {
        System.out.println(i + " EVEN");
      } else {
        System.out.println(i);
      }
    }

    System.out.println("Total: " + total);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "5",
                    expectedOutput: `1
2 EVEN
3
4 EVEN
5
Total: 15`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "loops-final-challenge",
              title: "Final Challenge: Multiplication Table",
              prompt: `Minimal starter se multiplication table build karo.

User number enter karega.

1 se 5 tak multiplication result print karo.

Format:

number x i = result

Test input:

3

Expected output:

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // Build the multiplication table

  }
}`,

              solution: `import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int number = input.nextInt();

    for (int i = 1; i <= 5; i++) {
      int result = number * i;

      System.out.println(
        number + " x " + i + " = " + result
      );
    }
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    input: "3",
                    expectedOutput: `3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15`,
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