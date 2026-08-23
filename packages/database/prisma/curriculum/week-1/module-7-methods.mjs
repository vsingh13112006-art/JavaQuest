export const methodsModule = {
  slug: "week-1-methods",
  title: "Week 1 — Methods",
  description:
    "Reusable methods, parameters, return values aur method-based code organization seekho.",
  position: 7,

  quests: {
    create: [
      // =====================================================
      // QUEST 1 — WHY METHODS
      // =====================================================
      {
        slug: "why-methods",
        title: "Why Methods?",
        description:
          "Repeated logic ko reusable named blocks me organize karne ki need samjho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 1,
        estimatedMinutes: 18,

        lessons: {
          create: [
            {
              slug: "repeated-code-problem",
              title: "Repeated Code Ki Problem",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Suppose hume same message multiple times print karna hai.

~~~java
System.out.println("Welcome!");
System.out.println("Welcome!");
System.out.println("Welcome!");
~~~

Ye kaam karta hai.

Lekin real programs me repeated logic zyada complex ho sakti hai.

Example:

- profile print karna
- score calculate karna
- grade decide karna
- report show karna

Agar same logic baar-baar copy karoge, code:

- lamba hoga
- hard to maintain hoga
- bugs repeat ho sakte hain


Methods reusable code blocks hote hain.

Example idea:

~~~java
static void greet() {
    System.out.println("Welcome!");
}
~~~

Ab method ko baar-baar call kar sakte ho:

~~~java
greet();
greet();
greet();
~~~

Output:

~~~text
Welcome!
Welcome!
Welcome!
~~~

> 💡 Method kisi task ko naam deta hai.
`,
            },

            {
              slug: "method-mental-model",
              title: "Method Ka Mental Model",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Method ko ek small machine ki tarah samjho.

~~~text
Method Name
    ↓
Code Block
    ↓
Task Perform
~~~

Example:

~~~java
static void showMessage() {
    System.out.println("Keep coding!");
}
~~~

Call:

~~~java
showMessage();
~~~

Important difference:

~~~text
method definition
→ method kya karega

method call
→ method ko actually run karo
~~~

Sirf method define karne se wo automatically execute nahi hota.

Usse call karna padta hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "method-purpose-check",
              title: "Why Use a Method?",
              prompt: `Repeated code ko reusable named block me organize karne ke liye kya use karte hain?

Exactly enter karo:

method`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "method",
            },

            {
              slug: "method-definition-vs-call",
              title: "Definition ya Call?",
              prompt: `Ye line method ko run karti hai:

greet();

Is action ko kya kehte hain?

Exactly enter karo:

method call`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 4,
              solution: "method call",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 2 — FIRST METHOD
      // =====================================================
      {
        slug: "first-method",
        title: "Your First Method",
        description:
          "Simple static void method define aur call karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 2,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "void-method-structure",
              title: "Method Ka Structure",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Basic method:

~~~java
static void greet() {
    System.out.println("Hello!");
}
~~~

Isko break karke dekho:

~~~text
static
→ abhi main ke context me use hone wala pattern

void
→ method koi value return nahi karta

greet
→ method ka naam

()
→ parameters ki jagah

{ }
→ method body
~~~

Complete program:

~~~java
public class Main {

    public static void main(String[] args) {
        greet();
    }

    static void greet() {
        System.out.println("Hello!");
    }
}
~~~

Output:

~~~text
Hello!
~~~

Important:

Method ko main method ke andar define nahi karte.

Method class ke andar hota hai, lekin main ke bahar.
`,
            },

            {
              slug: "calling-method-many-times",
              title: "Same Method, Multiple Calls",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Ek method ko multiple times call kar sakte ho.

~~~java
public class Main {

    public static void main(String[] args) {
        greet();
        greet();
        greet();
    }

    static void greet() {
        System.out.println("Java!");
    }
}
~~~

Output:

~~~text
Java!
Java!
Java!
~~~

Method body ek baar likhi.

Call multiple times kiya.

Yahi reusability ka basic idea hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-method-call",
              title: "Predict the Method",
              prompt: `Code dekho:

public class Main {
  public static void main(String[] args) {
    hello();
  }

  static void hello() {
    System.out.println("Java");
  }
}

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "Java",
            },

            {
              slug: "build-first-method",
              title: "Build Your First Method",
              prompt: `showMessage naam ka static void method banao.

Method exactly ye print kare:

Keep coding!

main() ke andar method call karo.

Expected output:

Keep coding!`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // method call karo

  }

  // showMessage method yahan banao
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    showMessage();
  }

  static void showMessage() {
    System.out.println("Keep coding!");
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Keep coding!",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-method-location",
              title: "Fix the Method Location",
              prompt: `Method currently main ke andar define hai.

Usse correct location par move karo.

Expected output:

Hello`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {

    static void greet() {
      System.out.println("Hello");
    }

    greet();
  }
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    greet();
  }

  static void greet() {
    System.out.println("Hello");
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Hello",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 3 — PARAMETERS
      // =====================================================
      {
        slug: "method-parameters",
        title: "Methods with Parameters",
        description:
          "Methods ko values pass karke reusable dynamic behaviour banana seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 3,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "parameter-basics",
              title: "Method Ko Input Dena",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Without parameter:

~~~java
static void greet() {
    System.out.println("Hello Aman");
}
~~~

Ye sirf Aman ke liye fixed hai.

Parameter ke saath:

~~~java
static void greet(String name) {
    System.out.println("Hello " + name);
}
~~~

Calls:

~~~java
greet("Aman");
greet("Riya");
~~~

Output:

~~~text
Hello Aman
Hello Riya
~~~

Method definition me:

~~~java
String name
~~~

parameter hai.

Method call me:

~~~java
"Aman"
~~~

argument hai.

Simple mental model:

~~~text
argument
   ↓
parameter
   ↓
method body
~~~
`,
            },

            {
              slug: "parameter-as-local-input",
              title: "Parameter Ek Temporary Input Variable",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Parameter ko method ke andar variable ki tarah use kar sakte ho.

~~~java
static void showScore(int score) {
    System.out.println(score);
}
~~~

Call:

~~~java
showScore(75);
~~~

Method ke andar:

~~~text
score = 75
~~~

jaisa behave karega.

Another call:

~~~java
showScore(100);
~~~

same method, different value.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-parameter-output",
              title: "Predict the Greeting",
              prompt: `Code dekho:

static void greet(String name) {
    System.out.println("Hi " + name);
}

Call:

greet("Aman");

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "Hi Aman",
            },

            {
              slug: "build-name-greeting",
              title: "Dynamic Greeting",
              prompt: `greet(String name) method banao.

Method print kare:

Hello <name>

main se greet("Riya") call karo.

Expected output:

Hello Riya`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // greet call karo

  }

  // greet method yahan banao
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    greet("Riya");
  }

  static void greet(String name) {
    System.out.println("Hello " + name);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Hello Riya",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 4 — MULTIPLE PARAMETERS
      // =====================================================
      {
        slug: "multiple-parameters",
        title: "Multiple Parameters",
        description:
          "Ek method ko multiple typed inputs dena aur parameter order samajhna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 4,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "multiple-parameter-basics",
              title: "Ek Method, Multiple Inputs",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Method multiple parameters accept kar sakta hai.

Example:

~~~java
static void showScore(String name, int score) {
    System.out.println(name);
    System.out.println(score);
}
~~~

Call:

~~~java
showScore("Aman", 85);
~~~

Output:

~~~text
Aman
85
~~~

Parameters comma se separate hote hain.

~~~text
String name
int score
~~~

Call me arguments ka order match karna chahiye:

~~~java
showScore("Aman", 85);
~~~

Wrong order:

~~~java
showScore(85, "Aman");
~~~

Types match nahi karenge.
`,
            },

            {
              slug: "multiple-parameter-calculation",
              title: "Parameters Se Calculation",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Parameters ko calculation me use kar sakte ho.

~~~java
static void showTotal(int score, int bonus) {
    int total = score + bonus;

    System.out.println(total);
}
~~~

Call:

~~~java
showTotal(80, 20);
~~~

Output:

~~~text
100
~~~

Method ko required data diya.

Method ne process karke result show kiya.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "show-player-score",
              title: "Show Player Score",
              prompt: `showScore(String name, int score) method banao.

main se call:

showScore("Aman", 90);

Expected output:

Aman
90`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // method call

  }

  // showScore method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    showScore("Aman", 90);
  }

  static void showScore(String name, int score) {
    System.out.println(name);
    System.out.println(score);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Aman
90`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-parameter-order",
              title: "Fix the Argument Order",
              prompt: `Method expects:

String name
int score

Current call wrong order me hai.

Expected output:

Riya
75`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    showScore(75, "Riya");
  }

  static void showScore(String name, int score) {
    System.out.println(name);
    System.out.println(score);
  }
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    showScore("Riya", 75);
  }

  static void showScore(String name, int score) {
    System.out.println(name);
    System.out.println(score);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Riya
75`,
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 5 — RETURN VALUES
      // =====================================================
      {
        slug: "return-values",
        title: "Methods That Return Values",
        description:
          "Methods se calculated values return karke unhe variables aur expressions me use karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 5,
        estimatedMinutes: 24,

        lessons: {
          create: [
            {
              slug: "return-basics",
              title: "Method Se Value Wapas Lena",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab tak methods mostly output print kar rahe the.

Method value return bhi kar sakta hai.

Example:

~~~java
static int add(int a, int b) {
    return a + b;
}
~~~

Use:

~~~java
int result = add(10, 20);

System.out.println(result);
~~~

Output:

~~~text
30
~~~

Method header:

~~~java
static int add(...)
~~~

Yahan int batata hai ki method int value return karega.

Inside:

~~~java
return a + b;
~~~

calculated value caller ko wapas bhejta hai.


Mental model:

~~~text
10, 20
  ↓
add()
  ↓
30
  ↓
result
~~~
`,
            },

            {
              slug: "using-returned-values",
              title: "Returned Value Ko Reuse Karna",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Returned result ko variable me store kar sakte ho.

~~~java
int total = add(5, 7);
~~~

Ya directly print:

~~~java
System.out.println(add(5, 7));
~~~

Ya further calculation me use:

~~~java
int total = add(5, 7) * 2;
~~~

Method ek reusable expression ki tarah behave kar sakta hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-return-value",
              title: "Predict the Return",
              prompt: `Method:

static int doubleNumber(int n) {
    return n * 2;
}

Call:

System.out.println(doubleNumber(6));

Output kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "12",
            },

            {
              slug: "build-add-method",
              title: "Build add()",
              prompt: `add(int a, int b) method banao jo sum return kare.

main me:

int result = add(10, 15);

result print karo.

Expected output:

25`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // add call karo


    // result print karo

  }

  // add method yahan banao
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int result = add(10, 15);

    System.out.println(result);
  }

  static int add(int a, int b) {
    return a + b;
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "25",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "return-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Method caller ko value wapas bhejne ke liye kaunsa keyword use hota hai?

Exactly enter karo:

return`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "return",
            },
          ],
        },
      },

      // =====================================================
      // QUEST 6 — VOID VS RETURN
      // =====================================================
      {
        slug: "void-vs-return",
        title: "void vs Return Value",
        description:
          "Side-effect methods aur value-producing methods ke difference ko samjho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 6,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "void-methods",
              title: "void Method Kya Karta Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
void ka meaning:

~~~text
method koi value caller ko return nahi karta
~~~

Example:

~~~java
static void showMessage() {
    System.out.println("Hello");
}
~~~

Method task perform karta hai.

Lekin:

~~~java
int result = showMessage();
~~~

valid nahi hoga.

Kyunki method int return nahi karta.


Value-returning method:

~~~java
static int doubleNumber(int number) {
    return number * 2;
}
~~~

Use:

~~~java
int result = doubleNumber(5);
~~~
`,
            },

            {
              slug: "choosing-void-or-return",
              title: "Kab void, Kab Return?",
              kind: "RECAP",
              position: 3,
              content: String.raw`
Simple beginner rule:

Method sirf action kare:

~~~text
print
show
display
~~~

to void useful ho sakta hai.


Method value calculate kare:

~~~text
add
calculate
check
convert
~~~

to return value useful ho sakti hai.


Examples:

~~~java
static void showProfile() {
    ...
}
~~~

~~~java
static int calculateTotal(int a, int b) {
    return a + b;
}
~~~

~~~java
static boolean isPassed(int score) {
    return score >= 50;
}
~~~
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "void-or-int-check",
              title: "Which Return Type?",
              prompt: `Method:

static ___ doubleNumber(int n) {
    return n * 2;
}

Blank me kaunsa type aayega?

Exactly enter karo:

int`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "int",
            },

            {
              slug: "build-double-method",
              title: "Return Double Value",
              prompt: `doubleNumber(int number) method banao.

Method number * 2 return kare.

main me doubleNumber(7) ka result print karo.

Expected output:

14`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // method use karo

  }

  // doubleNumber method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int result = doubleNumber(7);

    System.out.println(result);
  }

  static int doubleNumber(int number) {
    return number * 2;
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "14",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 7 — METHODS + CONDITIONS
      // =====================================================
      {
        slug: "methods-with-conditions",
        title: "Methods + Conditions",
        description:
          "Conditions ko reusable methods me organize karke boolean aur grade logic return karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 7,
        estimatedMinutes: 24,

        lessons: {
          create: [
            {
              slug: "boolean-return-method",
              title: "Method Se boolean Return Karna",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Method boolean value return kar sakta hai.

Example:

~~~java
static boolean isPassed(int score) {
    return score >= 50;
}
~~~

Call:

~~~java
boolean passed = isPassed(75);

System.out.println(passed);
~~~

Output:

~~~text
true
~~~

Method ka name readable hai:

~~~text
isPassed
~~~

Caller ko implementation details jaane ki zarurat nahi.

Usse bas result milta hai.
`,
            },

            {
              slug: "condition-chain-in-method",
              title: "Grade Logic Ko Method Me Rakho",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Methods ke andar if / else if use kar sakte ho.

~~~java
static String getGrade(int score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 75) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}
~~~

Call:

~~~java
System.out.println(getGrade(82));
~~~

Output:

~~~text
B
~~~

Method complex decision ko meaningful name deta hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "build-is-passed",
              title: "Build isPassed()",
              prompt: `isPassed(int score) method banao.

Return:

score >= 50

main me isPassed(70) print karo.

Expected output:

true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // result print karo

  }

  // isPassed method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    System.out.println(isPassed(70));
  }

  static boolean isPassed(int score) {
    return score >= 50;
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
              slug: "build-grade-method",
              title: "Build getGrade()",
              prompt: `getGrade(int score) method banao.

Rules:

>= 90 -> A
>= 75 -> B
>= 50 -> C
else -> Fail

main me getGrade(82) print karo.

Expected output:

B`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // getGrade call

  }

  // getGrade method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    System.out.println(getGrade(82));
  }

  static String getGrade(int score) {
    if (score >= 90) {
      return "A";
    } else if (score >= 75) {
      return "B";
    } else if (score >= 50) {
      return "C";
    } else {
      return "Fail";
    }
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "B",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 8 — METHODS + LOOPS
      // =====================================================
      {
        slug: "methods-with-loops",
        title: "Methods + Loops",
        description:
          "Loop logic ko reusable methods ke andar encapsulate karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 8,
        estimatedMinutes: 24,

        lessons: {
          create: [
            {
              slug: "loop-inside-method",
              title: "Loop Ko Method Me Rakho",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Methods ke andar loops use kar sakte ho.

Example:

~~~java
static void printNumbers() {
    for (int i = 1; i <= 3; i++) {
        System.out.println(i);
    }
}
~~~

Call:

~~~java
printNumbers();
~~~

Output:

~~~text
1
2
3
~~~

Method repetitive logic ko organize kar raha hai.
`,
            },

            {
              slug: "parameterized-loop-method",
              title: "Dynamic Loop Method",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Method parameter se loop dynamic ho sakta hai.

~~~java
static void printTable(int number) {
    for (int i = 1; i <= 5; i++) {
        System.out.println(number * i);
    }
}
~~~

Call:

~~~java
printTable(3);
~~~

Output:

~~~text
3
6
9
12
15
~~~

Same method:

~~~java
printTable(5);
~~~

different table create karega.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "build-print-count",
              title: "Build printCount()",
              prompt: `printCount(int limit) method banao.

1 se limit tak numbers print kare.

main me:

printCount(4);

Expected output:

1
2
3
4`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // method call

  }

  // printCount method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    printCount(4);
  }

  static void printCount(int limit) {
    for (int i = 1; i <= limit; i++) {
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

            {
              slug: "build-table-method",
              title: "Build printTable()",
              prompt: `printTable(int number) method banao.

1 se 3 tak multiplication results print karo.

main me:

printTable(4);

Expected output:

4
8
12`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // printTable call

  }

  // printTable method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    printTable(4);
  }

  static void printTable(int number) {
    for (int i = 1; i <= 3; i++) {
      System.out.println(number * i);
    }
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `4
8
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
      // QUEST 9 — METHOD BUG HUNT
      // =====================================================
      {
        slug: "method-debugging",
        title: "Method Bug Hunt",
        description:
          "Common method declaration, call, parameter aur return errors identify aur fix karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 9,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "common-method-errors",
              title: "Common Method Mistakes",
              kind: "RECAP",
              position: 1,
              content: String.raw`
Common mistakes:


## Missing ()

Wrong:

~~~java
greet;
~~~

Correct:

~~~java
greet();
~~~


## Wrong argument count

Method:

~~~java
static void add(int a, int b)
~~~

Wrong:

~~~java
add(5);
~~~


## Wrong argument type

~~~java
showScore("Aman", 90);
~~~

types order match hone chahiye.


## Missing return

Wrong:

~~~java
static int add(int a, int b) {
    int total = a + b;
}
~~~

Correct:

~~~java
static int add(int a, int b) {
    return a + b;
}
~~~


## Method inside main

Method definitions class ke andar,
main ke bahar hone chahiye.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "fix-missing-return",
              title: "Fix Missing return",
              prompt: `add method int return karna chahta hai.

Missing return fix karo.

Expected output:

15`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    System.out.println(add(7, 8));
  }

  static int add(int a, int b) {
    int total = a + b;

    // missing return
  }
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    System.out.println(add(7, 8));
  }

  static int add(int a, int b) {
    int total = a + b;

    return total;
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
              slug: "fix-method-call",
              title: "Fix the Method Call",
              prompt: `Method ko correctly call karo.

Expected output:

Hello`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    greet;
  }

  static void greet() {
    System.out.println("Hello");
  }
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    greet();
  }

  static void greet() {
    System.out.println("Hello");
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Hello",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      // =====================================================
      // QUEST 10 — MODULE CHALLENGE
      // =====================================================
      {
        slug: "methods-refactor-challenge",
        title: "🏆 Module Challenge: Refactor the Program",
        description:
          "Calculations, conditions aur output logic ko reusable methods me divide karke cleaner Java program build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 10,
        estimatedMinutes: 32,

        lessons: {
          create: [
            {
              slug: "methods-module-mission",
              title: "Your Methods Mission",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ab tum code ko sirf working nahi,
better organized bhi bana sakte ho.

Final mission me program ke tasks separate methods me divide karoge.

Possible responsibilities:

~~~text
calculateTotalXp()

isPassed()

showResult()
~~~


Example flow:

~~~text
main()
  ↓
calculate
  ↓
check
  ↓
display
~~~


main method ko high-level story ki tarah readable banana goal hai.

Example:

~~~java
int total = calculateTotal(80, 30);
boolean passed = isPassed(total);

showResult(total, passed);
~~~

Implementation details separate methods me chale jate hain.
`,
            },

            {
              slug: "methods-final-recap",
              title: "Methods Recap",
              kind: "RECAP",
              position: 3,
              content: String.raw`
Quick recap:

~~~text
method
→ named reusable block

parameter
→ method input

argument
→ call ke time passed value

void
→ no returned value

return
→ value caller ko wapas
~~~


Powerful combinations:

~~~text
method + condition

method + loop

method + calculation
~~~


Week 1 capstone me ye sab combine honge.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "calculate-total-xp-method",
              title: "Extract XP Calculation",
              prompt: `calculateTotalXp(int currentXp, int earnedXp) method banao.

Method sum return kare.

main me:

currentXp = 80
earnedXp = 30

Expected output:

110`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int currentXp = 80;
    int earnedXp = 30;

    // method call


    // result print
  }

  // calculateTotalXp method
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int currentXp = 80;
    int earnedXp = 30;

    int totalXp = calculateTotalXp(currentXp, earnedXp);

    System.out.println(totalXp);
  }

  static int calculateTotalXp(int currentXp, int earnedXp) {
    return currentXp + earnedXp;
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "110",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "methods-combined-program",
              title: "Build a Clean Result Program",
              prompt: `Methods use karke program build karo.

Required:

calculateTotal(int score, int bonus)
→ sum return kare

isHighScore(int total)
→ total >= 100 return kare

showResult(int total, boolean highScore)
→ total aur highScore print kare

main values:

score = 80
bonus = 30

Expected output:

110
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 80;
    int bonus = 30;

    // use your methods

  }

  // calculateTotal


  // isHighScore


  // showResult
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int score = 80;
    int bonus = 30;

    int total = calculateTotal(score, bonus);
    boolean highScore = isHighScore(total);

    showResult(total, highScore);
  }

  static int calculateTotal(int score, int bonus) {
    return score + bonus;
  }

  static boolean isHighScore(int total) {
    return total >= 100;
  }

  static void showResult(int total, boolean highScore) {
    System.out.println(total);
    System.out.println(highScore);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `110
true`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "methods-final-bug-hunt",
              title: "Bug Hunt: Fix the Methods",
              prompt: `Program me method-related bugs hain.

Expected output:

20
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int result = doubleNumber(10);

    boolean large = isLarge;

    System.out.println(result);
    System.out.println(large);
  }

  static int doubleNumber(int number) {
    number * 2;
  }

  static boolean isLarge(int number) {
    return number >= 20;
  }
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int result = doubleNumber(10);

    boolean large = isLarge(result);

    System.out.println(result);
    System.out.println(large);
  }

  static int doubleNumber(int number) {
    return number * 2;
  }

  static boolean isLarge(int number) {
    return number >= 20;
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `20
true`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "methods-final-challenge",
              title: "Final Challenge: Build with Methods",
              prompt: `Minimal starter se program build karo.

Required methods:

addBonus(int score, int bonus)
isPassed(int score)
showResult(int score, boolean passed)

Values:

score = 60
bonus = 20

Expected output:

80
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // Build the program with methods

  }
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int score = 60;
    int bonus = 20;

    score = addBonus(score, bonus);

    boolean passed = isPassed(score);

    showResult(score, passed);
  }

  static int addBonus(int score, int bonus) {
    return score + bonus;
  }

  static boolean isPassed(int score) {
    return score >= 50;
  }

  static void showResult(int score, boolean passed) {
    System.out.println(score);
    System.out.println(passed);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `80
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