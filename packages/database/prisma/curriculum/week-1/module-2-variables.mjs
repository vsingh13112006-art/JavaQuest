export const variablesModule = {
  slug: "week-1-variables-and-data-types",
  title: "Week 1 — Variables & Data Types",
  position: 2,

  quests: {
    create: [
      //=====================================================
      // QUEST 1 Variables: Data Ko Naam Do
      // =====================================================
      {
        slug: "variables-basics",
        title: "Variables: Data Ko Naam Do",
        description:
          "Variables ke through values store, print aur update karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 1,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "what-is-a-variable",
              title: "Variable Kya Hota Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Program me hume values ko **store** karke rakhna padta hai.

Variable ko ek **named container** ki tarah samjho jisme hum koi value rakh sakte hain.

## Pehla variable

~~~java
int score = 10;
~~~

Is statement ko break karke dekho:

~~~text
int      score      =      10;
 ↓         ↓                 ↓
type      name              value
~~~

- **int** batata hai ki hum whole number store kar rahe hain.
- **score** variable ka naam hai.
- **10** variable ke andar stored value hai.

## Variable ko print karna

~~~java
int score = 10;

System.out.println(score);
~~~

Output:

~~~text
10
~~~

Notice karo ki humne print karte waqt score ke around double quotes nahi lagaye.

## "score" vs score

Ye dono same nahi hain:

~~~java
int score = 10;

System.out.println("score");
System.out.println(score);
~~~

Output:

~~~text
score
10
~~~

**"score"** ek text hai.

**score** actual variable hai, isliye Java uske andar stored value print karta hai.

> 💡 **Yaad rakho:**  
> Variable hume kisi value ko naam dene aur baad me use karne deta hai.
`,
            },

            {
              slug: "updating-variable-values",
              title: "Variable Ki Value Change Karna",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Variable ki value program ke andar change ho sakti hai.

Example:

~~~java
int level = 1;

System.out.println(level);

level = 2;

System.out.println(level);
~~~

Output:

~~~text
1
2
~~~

Variable ka naam **level** same raha.

Sirf uske andar stored value:

~~~text
1 → 2
~~~

ho gayi.

## Declaration vs Update

Variable pehli baar banate waqt:

~~~java
int level = 1;
~~~

Yahan:

- int = type
- level = name
- 1 = initial value

Baad me value change karte waqt:

~~~java
level = 2;
~~~

Dobara int likhne ki zarurat nahi hai.

> 💡 **Simple rule:**  
> Pehli baar variable banao → type likho.  
> Existing variable update karo → sirf naam aur new value use karo.
`,
            },

            {
              slug: "meaningful-variable-names",
              title: "Variable Ka Naam Important Hai",
              kind: "THEORY",
              position: 5,
              content: String.raw`
Java ko technically chhote names se problem nahi hoti.

Ye valid hai:

~~~java
int x = 100;
~~~

Lekin code padhne wale person ko ye immediately clear nahi hai ki **x** kya represent karta hai.

Better:

~~~java
int playerScore = 100;
~~~

Ab naam dekhte hi purpose samajh aa raha hai.

## Meaningful names

Examples:

~~~java
int playerScore = 100;
int totalCoins = 50;
int currentLevel = 3;
~~~

Java me multiple words wale variable names ke liye commonly **camelCase** use hota hai.

~~~text
playerScore
totalCoins
currentLevel
~~~

Pehla word lowercase se start hota hai aur next word ka first letter capital hota hai.

## Kuch incorrect names

~~~java
int player score = 10;
~~~

❌ Variable name ke beech space nahi ho sakta.

~~~java
int 2score = 10;
~~~

❌ Variable name number se start nahi ho sakta.

> 💡 Abhi saare naming rules memorize karne ki zarurat nahi.  
> Bas readable aur meaningful names likhne ki habit banao.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-coins-output",
              title: "Predict the Value",
              prompt: `Code dekho:

int coins = 25;
System.out.println(coins);

Output kya hoga?

Exactly value enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "25",
            },

            {
              slug: "update-the-score",
              title: "Update the Score",
              prompt: `score ki starting value 10 hai.

Comment wali jagah par score ko 50 se update karo.

Final output exactly ye hona chahiye:

10
50`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,
              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 10;

    System.out.println(score);

    // score ko 50 karo

    System.out.println(score);
  }
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int score = 10;

    System.out.println(score);

    score = 50;

    System.out.println(score);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `10
50`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "create-first-variables",
              title: "Create Your First Variables",
              prompt: `Do int variables banao:

level ki value 3 honi chahiye.
coins ki value 50 honi chahiye.

Pehle level print karo aur phir coins.

Expected output:

3
50`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,
              starterCode: `public class Main {
  public static void main(String[] args) {
    // level aur coins variables yahan banao


    // variables ko yahan print karo

  }
}`,
              solution: `public class Main {
  public static void main(String[] args) {
    int level = 3;
    int coins = 50;

    System.out.println(level);
    System.out.println(coins);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `3
50`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "predict-updated-value",
              title: "Quest Checkpoint",
              prompt: `Code ko dhyan se dekho:

int lives = 3;
lives = 2;
System.out.println(lives);

Final output kya hoga?

Exactly value enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 7,
              solution: "2",
            },
          ],
        },
      },
      //=====================================================
      // QUEST 2 Numbers: int & double
      // =====================================================
      {
        slug: "numbers-int-and-double",
        title: "Numbers: int & double",
        description:
          "Whole numbers aur decimal numbers ko sahi Java data type ke saath store karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 2,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "whole-numbers-with-int",
              title: "Whole Numbers with int",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Java me **int** whole numbers store karne ke liye use hota hai.

Whole number ka matlab — jisme decimal part nahi hota.

## Examples

~~~java
int age = 20;
int score = 100;
int lives = 3;
~~~

Ye sab valid hain:

~~~java
int coins = 50;
int temperature = -5;
int level = 0;
~~~

## int decimal store nahi karta

Ye galat hai:

~~~java
int price = 99.99;
~~~

Java compiler error dega, kyunki **99.99 decimal number** hai.

> 💡 **Simple rule:**  
> Whole number → int
`,
            },

            {
              slug: "decimal-numbers-with-double",
              title: "Decimal Numbers with double",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Decimal values store karne ke liye hum commonly **double** use karte hain.

## Examples

~~~java
double price = 99.99;
double temperature = 36.5;
double progress = 12.5;
~~~

Difference dekho:

~~~text
20       → int
99.99    → double
-5       → int
36.5     → double
~~~

## Printing double values

~~~java
double price = 149.99;

System.out.println(price);
~~~

Output:

~~~text
149.99
~~~

> 💡 **Abhi yaad rakho:**  
> Decimal value dikhe → usually double.
`,
            },

            {
              slug: "choosing-correct-number-type",
              title: "Correct Type Kaise Choose Karein?",
              kind: "THEORY",
              position: 5,
              content: String.raw`
Variable ka data type us value ke nature par depend karta hai.

## Real-world examples

~~~java
int age = 21;
double height = 5.9;

int totalStudents = 30;
double accountBalance = 1250.75;
~~~

Question ye nahi hai ki value "number" hai ya nahi.

Question hai:

> **Kya value whole number hai ya decimal ho sakti hai?**

## Wrong type example

~~~java
int temperature = 36.5;
~~~

Ye invalid hai.

Correct:

~~~java
double temperature = 36.5;
~~~

Java ek **statically typed language** hai.

Iska simple meaning:

> Variable ka type matter karta hai, aur Java type rules ko check karta hai.

Advanced type-system details baad me dekhenge.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-updated-coins",
              title: "Predict the Number",
              prompt: `Code dekho:

int coins = 20;
coins = 35;
System.out.println(coins);

Final output kya hoga?

Exactly value enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "35",
            },

            {
              slug: "create-a-price",
              title: "Create a Price",
              prompt: `price naam ka double variable banao jiski value 149.99 ho.

Us variable ko print karo.

Expected output:

149.99`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // price variable yahan banao


    // price ko print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    double price = 149.99;

    System.out.println(price);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "149.99",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-the-number-type",
              title: "Fix the Wrong Type",
              prompt: `Neeche program me temperature decimal value hai, lekin wrong data type use hua hai.

Program ko fix karo.

Expected output:

36.5`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int temperature = 36.5;

    System.out.println(temperature);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    double temperature = 36.5;

    System.out.println(temperature);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "36.5",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "int-double-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Code dekho:

int level = 4;
double progress = 72.5;

System.out.println(level);
System.out.println(progress);

Output exactly kya hoga?

Do lines me answer socho.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 7,
              solution: `4
72.5`,
            },
          ],
        },
      },
      // =====================================================
      // QUEST 3 — TEXT & CHARACTERS
      // =====================================================
      {
        slug: "strings-and-characters",
        title: "Text & Characters: String aur char",
        description:
          "Java me text aur single characters ko String aur char ke through store karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 3,
        estimatedMinutes: 20,

        lessons: {
          create: [
            {
              slug: "storing-text-with-string",
              title: "Text Store Karna with String",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Abhi tak humne numbers store kiye:

~~~java
int age = 20;
double price = 99.99;
~~~

Lekin real programs me hume **text** bhi store karna hota hai.

Jaise:

- learner ka naam
- city ka naam
- programming language
- course ka title

Java me text store karne ke liye **String** use hota hai.

## Your First String

~~~java
String name = "Aman";
~~~

Is line ko break karke dekho:

~~~text
String      name      =      "Aman";
  ↓           ↓                 ↓
type         name              value
~~~

- **String** data type hai.
- **name** variable ka naam hai.
- **"Aman"** stored text value hai.
- Text ke around **double quotes** use hote hain.

## String Ko Print Karna

~~~java
String language = "Java";

System.out.println(language);
~~~

Output:

~~~text
Java
~~~

## Variable Ki Value Change Karna

~~~java
String language = "Java";

language = "Python";

System.out.println(language);
~~~

Output:

~~~text
Python
~~~

## Quick Examples

~~~java
String name = "Aman";
String city = "Delhi";
String language = "Java";
~~~

> 💡 **Simple rule:**  
> Text store karna ho → **String** use karo.  
> String values ke around **double quotes** lagte hain.
`,
            },

            {
              slug: "single-character-with-char",
              title: "Single Character with char",
              kind: "THEORY",
              position: 3,
              content: String.raw`
String ka use hum text store karne ke liye karte hain.

Lekin kabhi-kabhi hume sirf **ek single character** store karna hota hai.

Us situation me Java ka **char** data type useful hota hai.

## First char

~~~java
char grade = 'A';
~~~

Aur examples:

~~~java
char section = 'B';
char symbol = '#';
char answer = 'Y';
~~~

## String aur char Ka Difference

~~~java
String language = "Java";
char grade = 'A';
~~~

Mental model:

~~~text
String → text
char   → one character
~~~

## Quotes Par Dhyan Do

String:

~~~java
String language = "Java";
~~~

Double quotes use karta hai.

char:

~~~java
char letter = 'J';
~~~

Single quotes use karta hai.

## Ek Character Bhi String Ho Sakta Hai

~~~java
String letter = "J";
~~~

Ye **String** hai because `"J"` double quotes ke andar hai.

Lekin:

~~~java
char letter = 'J';
~~~

Ye **char** hai because `'J'` single quotes me hai.

## Quick Check

~~~text
"Java" → String
"J"    → String
'J'    → char
'A'    → char
~~~

## char Me Poora Word?

Ye invalid hai:

~~~java
char language = 'Java';
~~~

`char` sirf ek character ke liye hota hai.

Correct:

~~~java
String language = "Java";
~~~

> 💡 **Simple rule:**  
> String = text  
> char = one character
`,
            },

            {
              slug: "string-char-common-mistakes",
              title: "Quotes Ka Game",
              kind: "THEORY",
              position: 5,
              content: String.raw`
String aur char samajhte waqt **quotes** bahut important hain.

Correct code:

~~~java
String name = "Aman";
char grade = 'A';
~~~

## Mistake 1 — String Me Single Quotes

Wrong:

~~~java
String name = 'Aman';
~~~

String value ke liye double quotes chahiye.

Correct:

~~~java
String name = "Aman";
~~~

## Mistake 2 — char Me Double Quotes

Wrong:

~~~java
char grade = "A";
~~~

`"A"` double quotes me hai, isliye ye String value hai.

Correct:

~~~java
char grade = 'A';
~~~

## Quick Check

~~~text
"Hello" → String
"J"     → String
'J'     → char
~~~

Sirf ek character likha hone ka matlab ye nahi ki wo automatically `char` hai.

Quotes decide karte hain:

~~~text
Double quotes → String
Single quotes → char
~~~

Lekin `char` ke andar sirf **ek character** hona chahiye.

~~~java
String a = "A";
char b = 'A';
~~~

Dono visually similar lag sakte hain, lekin Java me **same type nahi hain**.

> 💡 **Yaad rakho:**  
> `"A"` aur `'A'` ka type different hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-string-output",
              title: "Predict the Text",
              prompt: `Code dekho:

String language = "Java";
System.out.println(language);

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "Java",
            },

            {
              slug: "create-name-and-grade",
              title: "Name & Grade",
              prompt: `Do variables banao:

name -> String jisme value "Aman" ho

grade -> char jisme value 'A' ho

Pehle name print karo.
Uske baad grade print karo.

Expected output:

Aman
A`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // String name variable banao


    // char grade variable banao


    // name print karo


    // grade print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    String name = "Aman";
    char grade = 'A';

    System.out.println(name);
    System.out.println(grade);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Aman
A`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-the-quotes",
              title: "Fix the Quotes",
              prompt: `Neeche diye program me String aur char ke quotes galat hain.

Code ko fix karo.

Expected output:

Java
J`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    String language = 'Java';
    char firstLetter = "J";

    System.out.println(language);
    System.out.println(firstLetter);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    String language = "Java";
    char firstLetter = 'J';

    System.out.println(language);
    System.out.println(firstLetter);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Java
J`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "string-char-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Neeche teen values di gayi hain:

"A"
'A'
"Java"

Inme se char value kaunsi hai?

Exactly correct value enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 7,
              solution: "'A'",
            },
          ],
        },
      },
      // =====================================================
      // QUEST 4 — BOOLEAN
      // =====================================================
      {
        slug: "boolean-true-or-false",
        title: "Boolean: true ya false",
        description:
          "Java me true/false states ko boolean variables ke through represent karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 4,
        estimatedMinutes: 18,

        lessons: {
          create: [
            {
              slug: "what-is-boolean",
              title: "Boolean Kya Hota Hai?",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Kuch questions ka answer sirf do possibilities me hota hai.

Jaise:

- Kya user logged in hai?
- Kya course complete hua?
- Kya game start hua?

In sabka answer roughly **haan ya nahi** hota hai.

Java me aisi state ko **boolean** data type se represent karte hain.

## Basic Example

~~~java
boolean isLoggedIn = true;
boolean courseCompleted = false;
~~~

## boolean Ki Sirf Do Values

~~~text
true
false
~~~

Examples:

~~~java
boolean learningJava = true;
boolean paymentSuccessful = false;
boolean darkModeEnabled = true;
~~~

## Important — true vs "true"

Ye dono same nahi hain.

Correct:

~~~java
boolean learningJava = true;
~~~

Wrong:

~~~java
boolean learningJava = "true";
~~~

`"true"` double quotes ke andar hai, isliye wo **String text** hai.

Actual boolean value:

~~~text
true
~~~

> 💡 **Simple rule:**  
> boolean = `true` ya `false`  
> Quotes nahi lagane.
`,
            },

            {
              slug: "updating-boolean",
              title: "Boolean Value Update Karna",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Boolean bhi normal variable ki tarah update ho sakta hai.

Example:

~~~java
boolean gameStarted = false;

System.out.println(gameStarted);

gameStarted = true;

System.out.println(gameStarted);
~~~

Output:

~~~text
false
true
~~~

## Step by Step

Starting state:

~~~text
gameStarted = false
~~~

Game start hone ke baad:

~~~text
gameStarted = true
~~~

Variable same raha.

Sirf uske andar stored **state** change hui.

Ek aur example:

~~~java
boolean courseCompleted = false;

courseCompleted = true;

System.out.println(courseCompleted);
~~~

Output:

~~~text
true
~~~

## Existing boolean Update Karna

Correct:

~~~java
boolean isOnline = false;

isOnline = true;
~~~

Dobara `boolean` likhne ki zarurat nahi.

> 💡 Pehli baar declaration me type likho. Update ke waqt sirf variable ko new value assign karo.
`,
            },

            {
              slug: "when-to-use-boolean",
              title: "Boolean Kab Use Karein?",
              kind: "THEORY",
              position: 5,
              content: String.raw`
Boolean tab useful hota hai jab kisi cheez ki state do possibilities me represent ho sakti hai.

## Common Examples

~~~java
boolean isOnline = true;
boolean hasAccess = false;
boolean canEdit = true;
boolean courseCompleted = false;
~~~

## Boolean Variable Names

Readable names code ko easy banate hain.

Examples:

~~~text
isOnline
hasAccess
canEdit
isLoggedIn
courseCompleted
~~~

Naam dekhte hi roughly samajh aa raha hai ki variable kis **state** ko represent karta hai.

## Abhi Kya Focus Hai?

Aage hum expressions bhi likhenge jo boolean result dete hain.

Jaise:

~~~text
age compare karna
score compare karna
multiple conditions combine karna
~~~

Lekin abhi focus simple hai:

- boolean variable banana
- `true` / `false` store karna
- value update karna
- value print karna

> 💡 Boolean ko program ki **yes/no state** ki tarah socho.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "predict-boolean-output",
              title: "Predict the Boolean",
              prompt: `Code dekho:

boolean completed = false;
System.out.println(completed);

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "false",
            },

            {
              slug: "start-the-game",
              title: "Start the Game",
              prompt: `gameStarted ki starting value false hai.

Pehle existing value print hogi.

Uske baad gameStarted ko true karo aur dobara print karo.

Expected output:

false
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    boolean gameStarted = false;

    System.out.println(gameStarted);

    // gameStarted ko true karo

    System.out.println(gameStarted);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    boolean gameStarted = false;

    System.out.println(gameStarted);

    gameStarted = true;

    System.out.println(gameStarted);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `false
true`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-the-boolean",
              title: "Fix the Boolean",
              prompt: `Program me isOnline ko wrong type ki value di gayi hai.

Code fix karo taaki isOnline actual boolean value ho.

Expected output:

true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    boolean isOnline = "true";

    System.out.println(isOnline);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    boolean isOnline = true;

    System.out.println(isOnline);
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
              slug: "boolean-checkpoint",
              title: "Quest Checkpoint",
              prompt: `In dono me actual boolean value kaunsi hai?

true
"true"

Exactly correct value enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 7,
              solution: "true",
            },
          ],
        },
      },
      // =====================================================
      // QUEST 5 — BASIC CALCULATIONS
      // =====================================================
      {
        slug: "variables-and-calculations",
        title: "Variables ke Saath Calculations",
        description:
          "Number variables ko calculations me use, combine aur update karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 5,
        estimatedMinutes: 25,

        lessons: {
          create: [
            {
              slug: "calculating-with-variables",
              title: "Variables Se Calculation",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Variables sirf values store nahi karte.

Hum un values ko calculations me bhi use kar sakte hain.

## First Calculation

~~~java
int coins = 10;
int bonus = 5;

int total = coins + bonus;

System.out.println(total);
~~~

Output:

~~~text
15
~~~

## Kya Hua?

~~~text
coins = 10
bonus = 5

10 + 5
   ↓
  15
   ↓
total = 15
~~~

Java ne variables ke andar stored values use karke calculation ki.

## Basic Operations

### Addition

~~~java
int total = a + b;
~~~

### Subtraction

~~~java
int remaining = a - b;
~~~

### Multiplication

~~~java
int result = a * b;
~~~

### Division

~~~java
int result = a / b;
~~~

## Practical Example

~~~java
int price = 20;
int quantity = 3;

int total = price * quantity;

System.out.println(total);
~~~

Output:

~~~text
60
~~~

> 💡 **Important:**  
> Calculation ka result bhi kisi variable me store kiya ja sakta hai.
`,
            },

            {
              slug: "updating-with-calculations",
              title: "Calculation Se Variable Update Karna",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Existing variable ko calculation ke result se update bhi kar sakte ho.

Example:

~~~java
int coins = 10;

coins = coins + 5;

System.out.println(coins);
~~~

Output:

~~~text
15
~~~

Ye line beginner ko thodi strange lag sakti hai:

~~~java
coins = coins + 5;
~~~

Isko mathematics equation ki tarah mat dekho.

Java pehle **right side** calculate karta hai.

## Step by Step

Current value:

~~~text
coins = 10
~~~

Right side:

~~~text
coins + 5
10 + 5
   ↓
  15
~~~

Ab result wapas `coins` me store hota hai:

~~~text
coins = 15
~~~

## Ek Aur Example

~~~java
int score = 100;

score = score - 20;

System.out.println(score);
~~~

Output:

~~~text
80
~~~

## Mental Model

~~~text
Old value
    ↓
Calculation
    ↓
New value
~~~

> 💡 Assignment me pehle right side evaluate hoti hai, phir result left-side variable me store hota hai.
`,
            },

            {
              slug: "int-vs-double-calculations",
              title: "int vs double Calculations",
              kind: "THEORY",
              position: 5,
              content: String.raw`
Calculations me data type ka effect result par bhi padta hai.

## int Division

~~~java
int a = 5;
int b = 2;

System.out.println(a / b);
~~~

Tum mathematically expect kar sakte ho:

~~~text
2.5
~~~

Lekin output hoga:

~~~text
2
~~~

## Kyun?

Dono variables `int` hain.

Java integer division me decimal part remove kar deta hai.

~~~text
5 / 2
  ↓
 2
~~~

## Decimal Result Chahiye?

`double` use karo:

~~~java
double a = 5.0;
double b = 2.0;

System.out.println(a / b);
~~~

Output:

~~~text
2.5
~~~

## Ek Aur Example

~~~java
double price = 50.0;
double discount = 10.0;

double finalPrice = price - discount;

System.out.println(finalPrice);
~~~

Output:

~~~text
40.0
~~~

> 💡 **Simple rule:**  
> Whole-number calculations → `int` useful ho sakta hai.  
> Decimal result important ho → `double` use karo.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "calculate-total-score",
              title: "Calculate Total Score",
              prompt: `score ki value 40 hai aur bonus ki value 10 hai.

score + bonus calculate karke result totalScore variable me store karo.

totalScore print karo.

Expected output:

50`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int score = 40;
    int bonus = 10;

    // totalScore calculate karo


    // totalScore print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int score = 40;
    int bonus = 10;

    int totalScore = score + bonus;

    System.out.println(totalScore);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "50",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "earn-more-xp",
              title: "Earn More XP",
              prompt: `Player ke paas starting me 100 XP hai.

Pehle current XP print karo.

Uske baad existing xp variable me 50 add karo.

Phir updated XP print karo.

Expected output:

100
150`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int xp = 100;

    System.out.println(xp);

    // xp me 50 add karo


    System.out.println(xp);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int xp = 100;

    System.out.println(xp);

    xp = xp + 50;

    System.out.println(xp);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `100
150`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-the-average",
              title: "Fix the Decimal Result",
              prompt: `Program ko 5 ko 2 se divide karke decimal result print karna hai.

Current code int use kar raha hai, isliye output 2 aa raha hai.

Data types ko fix karo taaki expected output mile:

2.5`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int a = 5;
    int b = 2;

    System.out.println(a / b);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    double a = 5.0;
    double b = 2.0;

    System.out.println(a / b);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "2.5",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "player-stats-challenge",
              title: "Player Stats Challenge",
              prompt: `Player ka:

startingScore = 100
bonus = 25
penalty = 10

In teen variables ka use karke finalScore calculate karo.

Formula:

startingScore + bonus - penalty

Sirf finalScore print karo.

Expected output:

115`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 7,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int startingScore = 100;
    int bonus = 25;
    int penalty = 10;

    // finalScore calculate karo


    // finalScore print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int startingScore = 100;
    int bonus = 25;
    int penalty = 10;

    int finalScore = startingScore + bonus - penalty;

    System.out.println(finalScore);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "115",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      }, // =====================================================
      // QUEST 6 — TYPE CONVERSION & CASTING
      // =====================================================
      {
        slug: "type-conversion-and-casting",
        title: "Type Conversion & Casting",
        description:
          "Numeric values ko int aur double ke beech safely convert karna aur data loss ko samajhna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 6,
        estimatedMinutes: 22,

        lessons: {
          create: [
            {
              slug: "automatic-int-to-double",
              title: "Automatic Conversion: int se double",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Kabhi Java ek numeric type ko automatically dusre type me convert kar sakta hai.

## int → double

~~~java
int score = 100;

double finalScore = score;

System.out.println(finalScore);
~~~

Output:

~~~text
100.0
~~~

## Kya Hua?

`score` ek `int` tha:

~~~text
100
~~~

`finalScore` ek `double` hai.

Java ne automatically convert kiya:

~~~text
100 → 100.0
~~~

Ye conversion generally safe hai because `double` decimal values bhi handle kar sakta hai.

## Ek Aur Example

~~~java
int coins = 50;

double wallet = coins;

System.out.println(wallet);
~~~

Output:

~~~text
50.0
~~~

> 💡 **Simple rule:**  
> `int → double` conversion Java usually automatically kar sakta hai.
`,
            },

            {
              slug: "explicit-double-to-int",
              title: "Explicit Casting: double se int",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Reverse direction thodi different hai.

Agar `double` value ko `int` me convert karna ho, to hume explicitly **cast** karna padta hai.

## Example

~~~java
double price = 99.99;

int wholePrice = (int) price;

System.out.println(wholePrice);
~~~

Output:

~~~text
99
~~~

## Important

Java `99.99` ko round karke `100` nahi bana raha.

Decimal part remove ho raha hai.

~~~text
99.99 → 99
5.8   → 5
2.1   → 2
~~~

## Casting Syntax

~~~text
(int) value
~~~

Example:

~~~java
double score = 87.9;

int wholeScore = (int) score;

System.out.println(wholeScore);
~~~

Output:

~~~text
87
~~~

> 💡 `double → int` karte waqt decimal part lose ho sakta hai.
`,
            },

            {
              slug: "casting-and-data-loss",
              title: "Casting Me Data Loss",
              kind: "THEORY",
              position: 5,
              content: String.raw`
Har conversion equally safe nahi hoti.

## Safe Direction Example

~~~java
int number = 25;

double converted = number;
~~~

Yahan information lose nahi hoti:

~~~text
25 → 25.0
~~~

## Possible Data Loss

~~~java
double number = 25.75;

int converted = (int) number;
~~~

Yahan decimal information lose ho jati hai:

~~~text
25.75 → 25
~~~

Isliye casting ko blindly use nahi karna chahiye.

Cast tab karo jab tum consciously accept kar rahe ho ki value ka kuch part lose ho sakta hai.

## Mental Model

~~~text
int → double
Usually safe

double → int
Possible data loss
~~~

> 💡 Casting ka purpose compiler ko bas chup karana nahi hai.  
> Conversion ke baad actual value kya banegi, ye samajhna zaroori hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "convert-coins-to-double",
              title: "Convert Coins to double",
              prompt: `coins ek int variable hai jiski value 50 hai.

Us value ko wallet naam ke double variable me assign karo.

wallet print karo.

Expected output:

50.0`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {
    int coins = 50;

    // coins ko double wallet me assign karo


    // wallet print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    int coins = 50;

    double wallet = coins;

    System.out.println(wallet);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "50.0",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "cast-score-to-int",
              title: "Cast the Score",
              prompt: `score ki value 87.9 hai.

Usse int me cast karke wholeScore variable me store karo.

wholeScore print karo.

Expected output:

87`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    double score = 87.9;

    // score ko int me cast karo


    // wholeScore print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    double score = 87.9;

    int wholeScore = (int) score;

    System.out.println(wholeScore);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "87",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-missing-cast",
              title: "Fix the Missing Cast",
              prompt: `Program double value ko int variable me store karne ki koshish kar raha hai.

Required cast add karke code fix karo.

Expected output:

42`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    double value = 42.8;

    int result = value;

    System.out.println(result);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    double value = 42.8;

    int result = (int) value;

    System.out.println(result);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "42",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "casting-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Code dekho:

double level = 7.9;
int result = (int) level;

System.out.println(result);

Output exactly kya hoga?`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 7,
              solution: "7",
            },
          ],
        },
      }, // =====================================================
      // QUEST 7 — CONSTANTS WITH final
      // =====================================================
      {
        slug: "constants-with-final",
        title: "Constants with final",
        description:
          "Aisi values banana seekho jo program me once set hone ke baad change nahi honi chahiye.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 7,
        estimatedMinutes: 18,

        lessons: {
          create: [
            {
              slug: "why-constants",
              title: "Kabhi Value Change Nahi Honi Chahiye",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Normal variable ki value change ho sakti hai.

Example:

~~~java
int maxLives = 3;

maxLives = 10;
~~~

Java ise allow karega.

Lekin kuch values program ke **fixed rules** represent karti hain aur unhe change nahi hona chahiye.

## final Constant

~~~java
final int MAX_LIVES = 3;
~~~

Ab agar hum likhen:

~~~java
MAX_LIVES = 10;
~~~

to Java compile error dega.

## final Ka Matlab

`final` lagane ke baad variable ko dobara assign nahi kar sakte.

Example:

~~~java
final int MAX_LEVEL = 100;

System.out.println(MAX_LEVEL);
~~~

Output:

~~~text
100
~~~

## Mental Model

~~~text
Normal variable
→ value change ho sakti hai

final variable
→ once assigned
→ reassign nahi kar sakte
~~~

> 💡 **Simple rule:**  
> Fixed rule/value ke liye `final` useful hai.
`,
            },

            {
              slug: "constant-naming",
              title: "Constants Ka Naming Style",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Java me constants ke liye commonly **UPPER_SNAKE_CASE** naming convention use hoti hai.

## Examples

~~~java
final int MAX_USERS = 100;
final double PI = 3.14159;
final String APP_NAME = "JavaQuets";
~~~

Multiple words ke beech underscore use hota hai:

~~~text
MAX_USERS
MAX_LEVEL
DAYS_IN_WEEK
APP_NAME
~~~

## Important

`UPPER_SNAKE_CASE` compiler ki requirement nahi hai.

Java technically ye bhi allow karega:

~~~java
final int maxUsers = 100;
~~~

Lekin constants ke liye commonly:

~~~java
final int MAX_USERS = 100;
~~~

zyada readable convention hai.

> 💡 Convention code ko readable aur consistent banati hai.
`,
            },

            {
              slug: "variable-vs-constant",
              title: "Variable vs Constant",
              kind: "THEORY",
              position: 5,
              content: String.raw`
Normal variable aur constant ka purpose different ho sakta hai.

Example:

~~~java
int score = 10;

final int MAX_SCORE = 100;
~~~

`score` player ki current state represent kar raha hai.

Ye change ho sakta hai:

~~~java
score = 20;
~~~

`MAX_SCORE` game ka fixed rule represent kar raha hai.

Isliye ise reassign nahi karna chahiye.

## Real Examples

~~~java
final int DAYS_IN_WEEK = 7;
final String COURSE_NAME = "JavaQuets";
final int MAX_ATTEMPTS = 3;
~~~

## Mental Model

~~~text
Current state
→ normal variable

Fixed rule / fixed value
→ final constant
~~~

> 💡 Har value ko constant mat banao. `final` tab use karo jab value logically fixed rehni chahiye.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "create-max-level",
              title: "Create a Constant",
              prompt: `MAX_LEVEL naam ka final int constant banao.

Uski value 100 honi chahiye.

MAX_LEVEL print karo.

Expected output:

100`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // MAX_LEVEL constant banao


    // MAX_LEVEL print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    final int MAX_LEVEL = 100;

    System.out.println(MAX_LEVEL);
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
              slug: "constant-naming-practice",
              title: "Name the Constant",
              prompt: `Aisa final int constant banao jo week me days represent kare.

Naam exactly DAYS_IN_WEEK hona chahiye.

Value 7 honi chahiye.

Constant print karo.

Expected output:

7`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // DAYS_IN_WEEK constant banao


    // constant print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    final int DAYS_IN_WEEK = 7;

    System.out.println(DAYS_IN_WEEK);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "7",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-final-reassignment",
              title: "Fix the Constant",
              prompt: `MAX_LIVES final constant hai.

Code currently usse dobara assign kar raha hai.

Invalid reassignment remove karke program fix karo.

Expected output:

3`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {
    final int MAX_LIVES = 3;

    MAX_LIVES = 5;

    System.out.println(MAX_LIVES);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    final int MAX_LIVES = 3;

    System.out.println(MAX_LIVES);
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
              slug: "final-keyword-checkpoint",
              title: "Quest Checkpoint",
              prompt: `Java me kisi variable ko once assigned hone ke baad reassign hone se rokne ke liye kaunsa keyword use hota hai?

Exactly keyword enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 7,
              solution: "final",
            },
          ],
        },
      }, // =====================================================
      // QUEST 8 — MODULE CHALLENGE
      // =====================================================
      {
        slug: "java-learner-profile-challenge",
        title: "🏆 Module Challenge: Java Learner Profile",
        description:
          "Variables, data types, calculations, casting aur constants ko combine karke ek complete Java learner profile build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 8,
        estimatedMinutes: 30,

        lessons: {
          create: [
            {
              slug: "module-two-mission",
              title: "Your Module 2 Mission",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Module 2 me tumne kaafi important building blocks seekhe hain.

## Ab Tak Tum Jaante Ho

~~~text
int
double
String
char
boolean
variable updates
basic calculations
type conversion
casting
final constants
~~~

Ab time hai in concepts ko combine karne ka.

# Mission — Java Learner Profile

Ek Java Learner Profile build karna hai.

Profile me different data types use honge.

Required values:

~~~text
name = "Aman"
level = 3
progress = 72.5
grade = 'A'
learningJava = true
MAX_LEVEL = 100
~~~

Tumhe har value ke liye correct data type choose karna hoga.

## Goal

Sirf syntax copy nahi karna.

Ye prove karna hai ki tum samajhte ho:

- kis value ke liye kaunsa type use hota hai
- variable kaise create hota hai
- constant kaise create hota hai
- values kaise print hoti hain
- existing value kaise update hoti hai

> 💡 Final challenge me Module 2 ke concepts ek saath use honge.
`,
            },

            {
              slug: "module-two-bug-hunt",
              title: "Bug Hunt Preparation",
              kind: "THEORY",
              position: 3,
              content: String.raw`
Real programming me tum hamesha blank file se code nahi likhoge.

Kabhi tumhe **broken code** bhi milega.

Example:

~~~java
String name = 'Aman';

int progress = 72.5;

char grade = "A";

boolean learningJava = "true";
~~~

Is code me multiple type mistakes hain.

## Bug 1 — String Quotes

Wrong:

~~~java
String name = 'Aman';
~~~

Correct:

~~~java
String name = "Aman";
~~~

## Bug 2 — Decimal in int

Wrong:

~~~java
int progress = 72.5;
~~~

Correct:

~~~java
double progress = 72.5;
~~~

## Bug 3 — char Quotes

Wrong:

~~~java
char grade = "A";
~~~

Correct:

~~~java
char grade = 'A';
~~~

## Bug 4 — boolean as Text

Wrong:

~~~java
boolean learningJava = "true";
~~~

Correct:

~~~java
boolean learningJava = true;
~~~

## Debugging Checklist

~~~text
Value kya represent karti hai?
        ↓
Correct data type kaunsa hai?
        ↓
Quotes correct hain?
        ↓
Assignment valid hai?
~~~

> 💡 Debugging bhi programming ka core skill hai.
`,
            },
          ],
        },

        exercises: {
          create: [
            {
              slug: "complete-java-profile",
              title: "Complete the Profile",
              prompt: `Correct data types use karke required variables banao:

name = "Aman"
level = 3
progress = 72.5
grade = 'A'
learningJava = true
MAX_LEVEL = 100

MAX_LEVEL final constant hona chahiye.

Output exactly:

=== JAVA LEARNER ===
Aman
3
72.5
A
true
100
====================`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // name


    // level


    // progress


    // grade


    // learningJava


    // MAX_LEVEL


    System.out.println("=== JAVA LEARNER ===");

    // variables ko correct order me print karo


    System.out.println("====================");
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    String name = "Aman";
    int level = 3;
    double progress = 72.5;
    char grade = 'A';
    boolean learningJava = true;
    final int MAX_LEVEL = 100;

    System.out.println("=== JAVA LEARNER ===");
    System.out.println(name);
    System.out.println(level);
    System.out.println(progress);
    System.out.println(grade);
    System.out.println(learningJava);
    System.out.println(MAX_LEVEL);
    System.out.println("====================");
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `=== JAVA LEARNER ===
Aman
3
72.5
A
true
100
====================`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "fix-learner-profile-types",
              title: "Bug Hunt: Fix the Types",
              prompt: `Program me multiple data type aur quote mistakes hain.

Sab errors fix karo.

Expected output:

Aman
72.5
A
true`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,

              starterCode: `public class Main {
  public static void main(String[] args) {
    String name = 'Aman';
    int progress = 72.5;
    char grade = "A";
    boolean learningJava = "true";

    System.out.println(name);
    System.out.println(progress);
    System.out.println(grade);
    System.out.println(learningJava);
  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    String name = "Aman";
    double progress = 72.5;
    char grade = 'A';
    boolean learningJava = true;

    System.out.println(name);
    System.out.println(progress);
    System.out.println(grade);
    System.out.println(learningJava);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Aman
72.5
A
true`,
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "calculate-profile-progress",
              title: "Update the Progress",
              prompt: `Starting progress 60.0 hai.

lessonProgress 12.5 hai.

Existing progress me lessonProgress add karo.

Updated progress print karo.

Expected output:

72.5`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,

              starterCode: `public class Main {
  public static void main(String[] args) {
    double progress = 60.0;
    double lessonProgress = 12.5;

    // progress update karo


    // updated progress print karo

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    double progress = 60.0;
    double lessonProgress = 12.5;

    progress = progress + lessonProgress;

    System.out.println(progress);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "72.5",
                    isHidden: false,
                  },
                ],
              },
            },

            {
              slug: "build-profile-from-scratch",
              title: "Final Challenge: Build It Yourself",
              prompt: `Ab minimal starter se profile khud build karo.

Required values:

String name = "Aman"
int level = 3
double progress = 72.5
char grade = 'A'
boolean learningJava = true
final int MAX_LEVEL = 100

Sab values isi order me print karo.

Expected output:

Aman
3
72.5
A
true
100`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 6,

              starterCode: `public class Main {
  public static void main(String[] args) {

    // Build your Java learner profile

  }
}`,

              solution: `public class Main {
  public static void main(String[] args) {
    String name = "Aman";
    int level = 3;
    double progress = 72.5;
    char grade = 'A';
    boolean learningJava = true;
    final int MAX_LEVEL = 100;

    System.out.println(name);
    System.out.println(level);
    System.out.println(progress);
    System.out.println(grade);
    System.out.println(learningJava);
    System.out.println(MAX_LEVEL);
  }
}`,

              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: `Aman
3
72.5
A
true
100`,
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
