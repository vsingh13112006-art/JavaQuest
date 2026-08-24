export const operatorsModule = {
  slug: "week-1-operators-and-expressions",
  title: "Week 1 — Operators & Expressions",
  description:
    "Java operators ke through calculations, comparisons aur boolean expressions banana seekho.",
  position: 3,

  quests: {
    create: [
      // =====================================================
      // QUEST 1 — JAVA KA CALCULATOR
      // =====================================================
      {
        slug: "java-calculator-basics",
        title: "Java Ka Calculator",
        description:
          "Addition, subtraction, multiplication aur division operators ko Java expressions me use karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 1,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "arithmetic-operators",
              title: "Java Me Basic Maths",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Java sirf values store nahi karta.

Hum Java ko calculations karne ke liye bhi use kar sakte hain.

## Basic Arithmetic Operators

~~~text
+   Addition
-   Subtraction
*   Multiplication
/   Division
~~~


## Addition

~~~java
int result = 10 + 5;

System.out.println(result);
~~~

Output:

~~~text
15
~~~


## Subtraction

~~~java
int lives = 5 - 2;

System.out.println(lives);
~~~

Output:

~~~text
3
~~~


## Multiplication

~~~java
int total = 4 * 3;

System.out.println(total);
~~~

Output:

~~~text
12
~~~


## Division

~~~java
int result = 20 / 4;

System.out.println(result);
~~~

Output:

~~~text
5
~~~


Variables ke saath bhi same operators use hote hain:

~~~java
int score = 100;
int bonus = 25;

int finalScore = score + bonus;

System.out.println(finalScore);
~~~

Output:

~~~text
125
~~~

> 💡 Expression ka result kisi variable me store kiya ja sakta hai.
`,
            },

            {
              slug: "building-arithmetic-expressions",
              title: "Variables Ko Combine Karna",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Ek calculation me multiple variables use kar sakte ho.

Example:

~~~java
int startingScore = 100;
int bonus = 30;
int penalty = 10;

int finalScore = startingScore + bonus - penalty;

System.out.println(finalScore);
~~~

## Calculation

~~~text
100 + 30 - 10
      ↓
     120
~~~

Output:

~~~text
120
~~~

Ek aur example:

~~~java
int price = 50;
int quantity = 4;

int totalCost = price * quantity;

System.out.println(totalCost);
~~~

Output:

~~~text
200
~~~

Operator aur variables milkar ek **expression** banate hain.

Example:

~~~java
price * quantity
~~~

Ye expression evaluate hoke ek value produce karta hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-arithmetic-result",
              title: "Predict the Result",
              prompt: `Code dekho:

int a = 20;
int b = 5;

System.out.println(a - b);

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "15",
            },

            {
              slug: "calculate-total-cost",
              title: "Calculate Total Cost",
              prompt: `price ki value 25 hai.
quantity ki value 4 hai.

price * quantity calculate karke totalCost variable me store karo.

Expected output:

100`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int price = 25;
    int quantity = 4;

    // totalCost calculate karo


    // totalCost print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int price = 25;
    int quantity = 4;

    int totalCost = price * quantity;

    System.out.println(totalCost);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "100",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "arithmetic-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Code dekho:

int score = 50;
int bonus = 20;
int penalty = 5;

int result = score + bonus - penalty;

System.out.println(result);

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "65",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 2 — MODULUS
      // =====================================================
      {
        slug: "modulus-remainder",
        title: "Remainder with Modulus",
        description:
          "Modulus operator % ka use karke division ka remainder find karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 2,
        estimatedMinutes: 18,

        lessons: {
          create: [
            {
              slug: "what-is-modulus",
              title: "% Operator Kya Karta Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Division normally quotient deta hai.

Lekin kabhi hume division ke baad **remainder** chahiye hota hai.

Java me remainder ke liye modulus operator use hota hai:

~~~text
%
~~~

Example:

~~~java
int remainder = 10 % 3;

System.out.println(remainder);
~~~

10 ko 3 se divide karo:

~~~text
3 * 3 = 9

10 - 9 = 1
~~~

Output:

~~~text
1
~~~


Ek aur example:

~~~java
System.out.println(8 % 2);
~~~

Output:

~~~text
0
~~~

Kyunki 8 completely 2 se divide ho jata hai.


## Useful mental model

~~~text
number % divisor = remainder
~~~

Modulus future me even/odd checks, cycles aur many algorithms me useful hoga.
`,
            },

            {
              slug: "modulus-patterns",
              title: "Modulus Ka Practical Use",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Modulus ka common use even aur odd numbers identify karne me hota hai.

Example:

~~~java
int number = 8;

int remainder = number % 2;

System.out.println(remainder);
~~~

Output:

~~~text
0
~~~

Agar number % 2 ka result 0 ho, number even hota hai.

Example:

~~~java
int number = 7;

System.out.println(number % 2);
~~~

Output:

~~~text
1
~~~

Abhi hum if statement use nahi kar rahe.

Sirf pattern samjho:

~~~text
8 % 2 → 0

7 % 2 → 1

10 % 2 → 0

11 % 2 → 1
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-remainder",
              title: "Predict the Remainder",
              prompt: `Output kya hoga?

System.out.println(17 % 5);`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "2",
            },

            {
              slug: "find-remainder",
              title: "Find the Remainder",
              prompt: `number ki value 23 hai.

23 ko 4 se divide karne ke baad remainder calculate karo.

Result print karo.

Expected output:

3`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int number = 23;

    // remainder calculate karo


    // result print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int number = 23;

    int remainder = number % 4;

    System.out.println(remainder);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "3",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "modulus-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Code dekho:

int number = 14;

System.out.println(number % 2);

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "0",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 3 — OPERATOR PRECEDENCE
      // =====================================================
      {
        slug: "operator-precedence",
        title: "Operator Precedence",
        description:
          "Java expressions kis order me calculate hote hain aur parentheses result ko kaise change karte hain, samjho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 3,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "calculation-order",
              title: "Java Pehle Kya Calculate Karega?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ek expression me multiple operators ho sakte hain.

Example:

~~~java
int result = 10 + 5 * 2;
~~~

Java simply left-to-right calculate nahi karta.

Multiplication ki priority addition se higher hai.

Isliye:

~~~text
10 + 5 * 2

5 * 2 = 10

10 + 10 = 20
~~~

Result:

~~~text
20
~~~


## Precedence Rule

~~~text
() first

* / % next

+ - after that
~~~


Example:

~~~java
int result = 20 - 8 / 2;
~~~

Pehle:

~~~text
8 / 2 = 4
~~~

Phir:

~~~text
20 - 4 = 16
~~~
`,
            },

            {
              slug: "parentheses-control-order",
              title: "Parentheses Se Control Lo",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Parentheses calculation order change kar sakte hain.

Compare karo:

~~~java
int a = 10 + 5 * 2;
~~~

Result:

~~~text
20
~~~

Lekin:

~~~java
int b = (10 + 5) * 2;
~~~

Pehle parentheses:

~~~text
10 + 5 = 15
~~~

Phir multiplication:

~~~text
15 * 2 = 30
~~~

Result:

~~~text
30
~~~

Parentheses code ko readable bhi bana sakte hain.

> 💡 Jab doubt ho, parentheses use karke intention clear karo.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-precedence",
              title: "Which Runs First?",
              prompt: `Code dekho:

int result = 4 + 3 * 2;

System.out.println(result);

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "10",
            },

            {
              slug: "use-parentheses",
              title: "Change the Result",
              prompt: `Current expression:

10 + 5 * 2

ka result 20 hai.

Parentheses use karo taaki result 30 ho.

Expected output:

30`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int result = 10 + 5 * 2;

    System.out.println(result);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int result = (10 + 5) * 2;

    System.out.println(result);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "30",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "precedence-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Output predict karo:

System.out.println((8 + 2) * 3);`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "30",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 4 — ASSIGNMENT SHORTCUTS
      // =====================================================
      {
        slug: "assignment-shortcuts",
        title: "Assignment Shortcuts",
        description:
          "+=, -=, *= aur /= ke through variables ko concise way me update karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 4,
        estimatedMinutes: 18,

        lessons: {
          create: [
            {
              slug: "compound-assignment",
              title: "Shorter Variable Updates",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Module 2 me tumne variable update karna seekha:

~~~java
int score = 100;

score = score + 20;
~~~

Java iska shorter version bhi provide karta hai:

~~~java
score += 20;
~~~

Dono ka effect same hai.


## Common Assignment Shortcuts

~~~text
+=   add and assign
-=   subtract and assign
*=   multiply and assign
/=   divide and assign
~~~


Examples:

~~~java
int score = 100;

score += 25;

System.out.println(score);
~~~

Output:

~~~text
125
~~~


Subtraction:

~~~java
int lives = 5;

lives -= 2;

System.out.println(lives);
~~~

Output:

~~~text
3
~~~
`,
            },

            {
              slug: "more-compound-assignments",
              title: "Multiply aur Divide Shortcut",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Compound assignment multiplication aur division ke saath bhi work karta hai.

Example:

~~~java
int coins = 10;

coins *= 3;

System.out.println(coins);
~~~

Equivalent:

~~~java
coins = coins * 3;
~~~

Output:

~~~text
30
~~~


Division:

~~~java
int energy = 100;

energy /= 2;

System.out.println(energy);
~~~

Output:

~~~text
50
~~~

Ye shortcuts code ko concise banate hain.

Lekin pehle ye samajhna important hai ki internally value update ho rahi hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-plus-equals",
              title: "Predict +=",
              prompt: `Code dekho:

int xp = 50;
xp += 25;

System.out.println(xp);

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "75",
            },

            {
              slug: "use-compound-assignment",
              title: "Upgrade the Score",
              prompt: `score ki starting value 100 hai.

+= operator use karke score me 40 add karo.

Expected output:

140`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 100;

    // += use karke 40 add karo


    System.out.println(score);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 100;

    score += 40;

    System.out.println(score);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "140",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-long-update",
              title: "Use the Shortcut",
              prompt: `Program ka output already correct hai.

score = score - 20;

ko compound assignment operator se replace karo.

Expected output:

80`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 100;

    score = score - 20;

    System.out.println(score);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 100;

    score -= 20;

    System.out.println(score);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "80",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 5 — INCREMENT & DECREMENT
      // =====================================================
      {
        slug: "increment-and-decrement",
        title: "Increment & Decrement",
        description:
          "++ aur -- operators se numeric variables ko one step se update karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 5,
        estimatedMinutes: 18,

        lessons: {
          create: [
            {
              slug: "increment-operator",
              title: "Ek Se Increase Karna",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Kabhi variable ko exactly 1 se increase karna hota hai.

Long version:

~~~java
level = level + 1;
~~~

Shorter:

~~~java
level += 1;
~~~

Aur Java ka aur bhi shorter operator:

~~~java
level++;
~~~


Example:

~~~java
int level = 3;

level++;

System.out.println(level);
~~~

Output:

~~~text
4
~~~


++ ka simple meaning:

~~~text
current value + 1
~~~
`,
            },

            {
              slug: "decrement-operator",
              title: "Ek Se Decrease Karna",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Variable ko 1 se decrease karne ke liye:

~~~java
lives--;
~~~

Example:

~~~java
int lives = 3;

lives--;

System.out.println(lives);
~~~

Output:

~~~text
2
~~~


Abhi hum:

~~~text
x++

vs

++x
~~~

ke advanced expression differences discuss nahi karenge.

Beginner level par simple standalone update use karo:

~~~java
score++;
lives--;
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-increment",
              title: "Predict ++",
              prompt: `Code dekho:

int level = 5;
level++;

System.out.println(level);

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "6",
            },

            {
              slug: "lose-a-life",
              title: "Lose a Life",
              prompt: `lives ki starting value 3 hai.

-- operator use karke lives ko 1 se decrease karo.

Expected output:

2`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int lives = 3;

    // lives ko decrement karo


    System.out.println(lives);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int lives = 3;

    lives--;

    System.out.println(lives);
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
              slug: "increment-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Code dekho:

int coins = 10;
coins++;
coins++;

System.out.println(coins);

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "12",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 6 — COMPARISON OPERATORS
      // =====================================================
      {
        slug: "comparison-operators",
        title: "Compare Karo",
        description:
          "Comparison operators ke through values compare karke boolean results banana seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 6,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "comparison-basics",
              title: "Comparison Ka Result boolean Hota Hai",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Java me values compare karne ke liye comparison operators use hote hain.

## Common Comparison Operators

~~~text
>    greater than
<    less than
>=   greater than or equal
<=   less than or equal
==   equal to
!=   not equal to
~~~


Example:

~~~java
int score = 80;

boolean highScore = score >= 50;

System.out.println(highScore);
~~~

80 >= 50 true hai.

Output:

~~~text
true
~~~


Example:

~~~java
int age = 15;

boolean adult = age >= 18;

System.out.println(adult);
~~~

Output:

~~~text
false
~~~


Important:

Comparison ka result:

~~~text
true

ya

false
~~~

hota hai.
`,
            },

            {
              slug: "equality-vs-assignment",
              title: "= aur == Same Nahi Hain",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Beginners ka ek common confusion:

~~~text
=

vs

==
~~~


Single equals:

~~~java
score = 100;
~~~

Assignment hai.

Matlab value variable me store karo.


Double equals:

~~~java
score == 100
~~~

Comparison hai.

Matlab check karo score 100 ke equal hai ya nahi.


Example:

~~~java
int score = 100;

boolean perfect = score == 100;

System.out.println(perfect);
~~~

Output:

~~~text
true
~~~


Not equal:

~~~java
int lives = 3;

boolean empty = lives != 0;

System.out.println(empty);
~~~

Output:

~~~text
true
~~~

> 💡 = assigns value  
> == compares values
`,
            },

            {
              slug: "comparison-expressions",
              title: "Comparison Expressions",
              kind: "EXAMPLE",
              position: 5,
              content: String.raw`
Comparison directly print bhi kar sakte ho.

Example:

~~~java
System.out.println(10 > 5);
~~~

Output:

~~~text
true
~~~


~~~java
System.out.println(3 == 7);
~~~

Output:

~~~text
false
~~~


~~~java
System.out.println(8 != 2);
~~~

Output:

~~~text
true
~~~


Lekin meaningful code me result ko boolean variable me store karna useful ho sakta hai:

~~~java
int score = 75;

boolean passed = score >= 50;
~~~

Ye Conditions module me directly useful hoga.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-comparison",
              title: "True ya False?",
              prompt: `Output kya hoga?

System.out.println(10 < 5);`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "false",
            },

            {
              slug: "create-pass-check",
              title: "Create a Pass Check",
              prompt: `score ki value 75 hai.

score >= 50 comparison use karke passed boolean variable banao.

passed print karo.

Expected output:

true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 75;

    // passed boolean banao


    // passed print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 75;

    boolean passed = score >= 50;

    System.out.println(passed);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "true",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-equality-check",
              title: "Fix the Comparison",
              prompt: `Program check karna chahta hai ki score exactly 100 hai.

Comparison operator fix karo.

Expected output:

true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 100;

    boolean perfect = score = 100;

    System.out.println(perfect);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 100;

    boolean perfect = score == 100;

    System.out.println(perfect);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "true",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "comparison-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Output kya hoga?

System.out.println(20 != 20);`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 7,
              solution: "false",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 7 — LOGICAL OPERATORS
      // =====================================================
      {
        slug: "logical-operators",
        title: "Logical Operators",
        description:
          "&&, || aur ! ke through multiple boolean conditions ko combine karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 7,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "and-operator",
              title: "AND Operator &&",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Kabhi ek result ke liye **multiple conditions** true honi chahiye.

Java me AND operator:

~~~text
&&
~~~

Example:

~~~java
boolean hasTicket = true;
boolean isAdult = true;

boolean canEnter = hasTicket && isAdult;

System.out.println(canEnter);
~~~

Output:

~~~text
true
~~~


AND me result true tabhi hota hai jab dono sides true hon.

~~~text
true  && true   → true

true  && false  → false

false && true   → false

false && false  → false
~~~
`,
            },

            {
              slug: "or-operator",
              title: "OR Operator ||",
              kind: "THEORY",
              position: 3,
              content: String.raw`
OR operator:

~~~text
||
~~~

Result true ho sakta hai agar **at least ek condition true** ho.

Example:

~~~java
boolean hasCoupon = false;
boolean isPremium = true;

boolean getsDiscount = hasCoupon || isPremium;

System.out.println(getsDiscount);
~~~

Output:

~~~text
true
~~~


## OR Truth Pattern

~~~text
true  || true   → true

true  || false  → true

false || true   → true

false || false  → false
~~~
`,
            },

            {
              slug: "not-operator",
              title: "NOT Operator !",
              kind: "THEORY",
              position: 5,
              content: String.raw`
NOT operator boolean value ko reverse karta hai.

Operator:

~~~text
!
~~~

Example:

~~~java
boolean gameOver = false;

boolean canPlay = !gameOver;

System.out.println(canPlay);
~~~

Output:

~~~text
true
~~~


## Mental Model

~~~text
!true  → false

!false → true
~~~


Logical operators future if conditions me bahut important honge.

Example:

~~~java
boolean hasTicket = true;
boolean banned = false;

boolean canEnter = hasTicket && !banned;
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-and-result",
              title: "Predict &&",
              prompt: `Output kya hoga?

boolean a = true;
boolean b = false;

System.out.println(a && b);`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "false",
            },

            {
              slug: "build-access-check",
              title: "Build an Access Check",
              prompt: `hasTicket = true
isAdult = true

&& operator use karke canEnter boolean banao.

Expected output:

true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    boolean hasTicket = true;
    boolean isAdult = true;

    // canEnter banao


    System.out.println(canEnter);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    boolean hasTicket = true;
    boolean isAdult = true;

    boolean canEnter = hasTicket && isAdult;

    System.out.println(canEnter);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "true",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "use-not-operator",
              title: "Reverse the State",
              prompt: `gameOver ki value false hai.

! operator use karke canPlay banao.

Expected output:

true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    boolean gameOver = false;

    // ! use karke canPlay banao


    System.out.println(canPlay);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    boolean gameOver = false;

    boolean canPlay = !gameOver;

    System.out.println(canPlay);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "true",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "logical-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Output kya hoga?

boolean premium = false;
boolean coupon = true;

System.out.println(premium || coupon);`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 7,
              solution: "true",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 8 — MODULE CHALLENGE
      // =====================================================
      {
        slug: "player-stats-calculator",
        title: "🏆 Module Challenge: Player Stats Calculator",
        description:
          "Arithmetic, assignment, comparison aur logical operators ko combine karke player stats calculate karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 8,
        estimatedMinutes: 30,

        lessons: {
          create: [
            {
              slug: "operators-module-mission",
              title: "Your Operators Mission",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab tumne Java ke important operators seekh liye hain:

+ - * / %

+= -= *= /=

++ --

> < >= <= == !=

&& || !


Ab in concepts ko combine karke player stats calculate karoge.


Required starting data:

~~~java
int score = 120;
int bonus = 30;
int penalty = 10;
int lives = 3;
~~~

Final score calculate karna hai:

~~~text
score + bonus - penalty
~~~

Phir boolean expressions create karne hain.

High score:

~~~text
finalScore >= 100
~~~

Can continue:

~~~text
lives > 0
~~~


Is challenge ka goal sirf expected text print karna nahi hai.

Try karo actual variables aur expressions use karke solution build karo.
`,
            },

            {
              slug: "operators-debugging-recap",
              title: "Common Operator Mistakes",
              kind: "RECAP",
              position: 3,
              content: String.raw`
Final challenge se pehle common mistakes recap karte hain.


## Assignment vs comparison

Wrong thinking:

~~~text
= and == same
~~~

Correct:

~~~text
=   assign

==  compare
~~~


## Division

~~~java
5 / 2
~~~

int values ke saath result:

~~~text
2
~~~


## Precedence

~~~java
10 + 5 * 2
~~~

result:

~~~text
20
~~~


## Logical operators

~~~text
&& → both

|| → at least one

!  → reverse
~~~


## Modulus

~~~text
% → remainder
~~~

Ye concepts Conditions aur Loops modules me repeatedly use honge.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "calculate-final-player-score",
              title: "Calculate the Final Score",
              prompt: `Starting values:

score = 120
bonus = 30
penalty = 10

finalScore calculate karo:

score + bonus - penalty

Expected output:

140`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 120;
    int bonus = 30;
    int penalty = 10;

    // finalScore calculate karo


    System.out.println(finalScore);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 120;
    int bonus = 30;
    int penalty = 10;

    int finalScore = score + bonus - penalty;

    System.out.println(finalScore);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "140",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "build-player-status",
              title: "Build Player Status",
              prompt: `Starting values:

score = 120
bonus = 30
penalty = 10
lives = 3

finalScore calculate karo.

highScore boolean:
finalScore >= 100

canContinue boolean:
lives > 0

Output exactly:

140
true
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 120;
    int bonus = 30;
    int penalty = 10;
    int lives = 3;

    // finalScore


    // highScore


    // canContinue


    // values print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 120;
    int bonus = 30;
    int penalty = 10;
    int lives = 3;

    int finalScore = score + bonus - penalty;
    boolean highScore = finalScore >= 100;
    boolean canContinue = lives > 0;

    System.out.println(finalScore);
    System.out.println(highScore);
    System.out.println(canContinue);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `140
true
true`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "operator-bug-hunt",
              title: "Bug Hunt: Fix the Operators",
              prompt: `Program me operator mistakes hain.

Code fix karo taaki expected output mile:

75
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 50;

    score =+ 25;

    boolean passed = score = 75;

    System.out.println(score);
    System.out.println(passed);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 50;

    score += 25;

    boolean passed = score == 75;

    System.out.println(score);
    System.out.println(passed);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `75
true`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "operators-final-challenge",
              title: "Final Challenge: Build It Yourself",
              prompt: `Minimal starter se program build karo.

Required:

int score = 90
int bonus = 20
int lives = 1

score me += use karke bonus add karo.

highScore:
score >= 100

canPlay:
lives > 0 && highScore

Output exactly:

110
true
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // Build the player stats program

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 90;
    int bonus = 20;
    int lives = 1;

    score += bonus;

    boolean highScore = score >= 100;
    boolean canPlay = lives > 0 && highScore;

    System.out.println(score);
    System.out.println(highScore);
    System.out.println(canPlay);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `110
true
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