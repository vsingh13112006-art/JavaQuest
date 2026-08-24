export const classesObjectsModule = {
  slug: "week-3-classes-objects",
  title: "Week 3 — Classes & Objects",
  description:
    "Classes ko blueprint ki tarah use karna, objects create karna, fields access/update karna aur same class ke multiple independent objects manage karna seekho.",
  position: 17,

  quests: {
    create: [
      {
        slug: "why-objects",
        title: "Why Do We Need Objects?",
        description:
          "Scattered variables ki problem samjho aur dekho ki class related data ko ek meaningful structure me kaise group karti hai.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 1,
        estimatedMinutes: 15,
        lessons: {
          create: [
            {
              slug: "scattered-player-data",
              title: "Scattered Data Ki Problem",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Week 1 aur Week 2 me humne kaafi programs individual variables ke saath banaye.

~~~java
String player1Name = "Aman";
int player1Level = 3;
int player1Xp = 250;

String player2Name = "Riya";
int player2Level = 5;
int player2Xp = 470;
~~~

Program technically kaam karta hai, lekin har player ki information multiple variables me scattered hai.

## Real Mental Grouping

~~~text
Player 1
 ├── name
 ├── level
 └── xp

Player 2
 ├── name
 ├── level
 └── xp
~~~

Java me hum isi idea ko class ke through model kar sakte hain.

~~~java
class Player {
    String name;
    int level;
    int xp;
}
~~~

> 💡 Class related data ko ek meaningful model me organize karti hai.
`,
            },
            {
              slug: "class-as-blueprint",
              title: "Class = Blueprint",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
Class ko beginner level par blueprint ki tarah socho.

~~~text
Player class
    ↓
defines
    ↓
name
level
xp
~~~

Class khud ek specific player nahi hai. Ye batati hai ki ek Player kis type ki information rakh sakta hai.

~~~java
class Book {
    String title;
    String author;
    int pages;
}
~~~

~~~text
Class
  ↓
related data ka blueprint
~~~
`,
            },
          ],
        },
        exercises: {
          create: [
            {
              slug: "identify-player-grouping",
              title: "Which Concept Groups the Data?",
              prompt: `name, level aur xp ko ek Player blueprint me group karne ke liye kaunsa Java concept use karoge?

Exactly enter karo:

class`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "class",
            },
            {
              slug: "book-fields-check",
              title: "Choose the Book Field",
              prompt: `Book ko model karna hai.

title
author
pages
playerXp

Inme se Book ka natural field NAHI hai.

Exactly enter karo:

playerXp`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 4,
              solution: "playerXp",
            },
          ],
        },
      },

      {
        slug: "your-first-class",
        title: "Your First Class",
        description:
          "Class declaration, class name aur fields ko clearly identify karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 2,
        estimatedMinutes: 18,
        lessons: {
          create: [
            {
              slug: "class-and-fields",
              title: "Class Aur Fields",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Ek simple Player class:

~~~java
class Player {
    String name;
    int level;
    int xp;
}
~~~

## Breakdown

~~~text
class Player
      │
      └── class name

String name
   │     │
 type   field
~~~

## Three Important Terms

**Class** → blueprint / custom type

**Field** → object ke andar stored information

**Object** → class ka actual instance

~~~text
Class
  ↓
Blueprint

Field
  ↓
Stored property

Object
  ↓
Actual instance
~~~

> 💡 Constructors, private aur static later modules me aayenge.
`,
            },
            {
              slug: "different-class-models",
              title: "Different Problems, Different Classes",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
~~~java
class Enemy {
    String name;
    int health;
}

class Quest {
    String title;
    int xpReward;
}

class Book {
    String title;
    String author;
    int pages;
}
~~~

Har class ke fields us concept ki information describe karte hain.

> Is object ko describe karne ke liye kaunsi information naturally belong karti hai?
`,
            },
          ],
        },
        exercises: {
          create: [
            {
              slug: "identify-field",
              title: "Identify the Field",
              prompt: `class Enemy {
    String name;
    int health;
}

health kya hai?

Exactly enter karo:

field`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "field",
            },
            {
              slug: "build-quest-class",
              title: "Build a Quest Class",
              prompt: `Quest class banao.

Required fields:

String title
int xpReward

Expected output:

Quest class ready`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,
              starterCode: `class Quest {
  // fields
}

public class Main {
  public static void main(String[] args) {
    System.out.println("Quest class ready");
  }
}`,
              solution: `class Quest {
  String title;
  int xpReward;
}

public class Main {
  public static void main(String[] args) {
    System.out.println("Quest class ready");
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Quest class ready",
                    isHidden: false,
                  },
                ],
              },
            },
            {
              slug: "fix-class-field-syntax",
              title: "Fix the Field Syntax",
              prompt: `Missing syntax fix karo.

Expected output:

Ready`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,
              starterCode: `class Player {
  String name
  int xp;
}

public class Main {
  public static void main(String[] args) {
    System.out.println("Ready");
  }
}`,
              solution: `class Player {
  String name;
  int xp;
}

public class Main {
  public static void main(String[] args) {
    System.out.println("Ready");
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Ready",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      {
        slug: "creating-objects-with-new",
        title: "Create Objects with new",
        description:
          "Class se actual objects create karna aur new keyword ka role samjho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 3,
        estimatedMinutes: 18,
        lessons: {
          create: [
            {
              slug: "first-object",
              title: "Class Se Object Tak",
              kind: "THEORY",
              position: 1,
              content: String.raw`
Blueprint:

~~~java
class Player {
    String name;
    int xp;
}
~~~

Object create karo:

~~~java
Player player = new Player();
~~~

~~~text
Player player = new Player();
  │      │          │
 type  variable   create object
~~~

~~~text
Player class
    ↓
new Player()
    ↓
actual Player object
~~~

Do objects:

~~~java
Player player1 = new Player();
Player player2 = new Player();
~~~

> 💡 Class blueprint hai. new us blueprint ka actual object create karta hai.
`,
            },
            {
              slug: "object-variable-breakdown",
              title: "Object Creation Ko Read Karna",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
~~~java
Enemy boss = new Enemy();
~~~

~~~text
Enemy
→ object ka type

boss
→ variable name

new
→ object create karne ka keyword

Enemy()
→ Enemy object creation
~~~

~~~java
Book javaBook = new Book();
~~~

Abhi memory internals ki zarurat nahi. Object creation syntax confidently recognize karo.
`,
            },
          ],
        },
        exercises: {
          create: [
            {
              slug: "new-keyword-check",
              title: "Which Keyword Creates an Object?",
              prompt: `Java me naya object create karne ke liye kaunsa keyword use hota hai?

Exactly enter karo:

new`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "new",
            },
            {
              slug: "create-enemy-object",
              title: "Create the Boss Object",
              prompt: `Enemy class already di gayi hai.

boss naam ka Enemy object create karo.

Expected output:

Boss created`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,
              starterCode: `class Enemy {
  String name;
  int health;
}

public class Main {
  public static void main(String[] args) {
    // boss object create karo

    System.out.println("Boss created");
  }
}`,
              solution: `class Enemy {
  String name;
  int health;
}

public class Main {
  public static void main(String[] args) {
    Enemy boss = new Enemy();

    System.out.println("Boss created");
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Boss created",
                    isHidden: false,
                  },
                ],
              },
            },
            {
              slug: "fix-missing-new",
              title: "Fix the Missing new",
              prompt: `Object creation broken hai.

Expected output:

Player created`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,
              starterCode: `class Player {
  String name;
}

public class Main {
  public static void main(String[] args) {
    Player player = Player();

    System.out.println("Player created");
  }
}`,
              solution: `class Player {
  String name;
}

public class Main {
  public static void main(String[] args) {
    Player player = new Player();

    System.out.println("Player created");
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Player created",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      {
        slug: "working-with-object-fields",
        title: "Work with Object Fields",
        description:
          "Dot notation ke through object fields ko assign, read aur update karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 4,
        estimatedMinutes: 20,
        lessons: {
          create: [
            {
              slug: "dot-notation",
              title: "Meet Dot Notation",
              kind: "THEORY",
              position: 1,
              content: String.raw`
~~~java
Player player = new Player();

player.name = "Aman";
player.level = 3;
player.xp = 250;
~~~

## Dot Notation

~~~text
object.field
~~~

~~~java
System.out.println(player.name);
System.out.println(player.xp);
~~~

Field update:

~~~java
player.xp = 300;
~~~

Week 1 assignment concept:

~~~java
int xp = 100;
xp = 200;
~~~

Object ke saath:

~~~java
player.xp = 100;
player.xp = 200;
~~~

xp ab Player object ki state ka part hai.
`,
            },
            {
              slug: "object-state-update",
              title: "Object Ki State Change Hoti Hai",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
~~~java
Player player = new Player();

player.name = "Riya";
player.xp = 100;

player.xp = player.xp + 50;

System.out.println(player.xp);
~~~

Output:

~~~text
150
~~~

~~~text
Player object
 ├── name = Riya
 └── xp   = 150
~~~

Later modules me state ko methods ke through safely change karna seekhenge. Abhi direct fields intentional hain.
`,
            },
          ],
        },
        exercises: {
          create: [
            {
              slug: "predict-object-field-output",
              title: "Predict the Player Output",
              prompt: `Player player = new Player();

player.name = "Riya";
player.level = 4;

System.out.println(player.name);
System.out.println(player.level);

Exactly output enter karo:

Riya
4`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "Riya\n4",
            },
            {
              slug: "build-book-object",
              title: "Build a Book Object",
              prompt: `Book object ka:

title = Java Quest
pages = 250

Set karo aur exactly print karo:

Java Quest
250`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,
              starterCode: `class Book {
  String title;
  int pages;
}

public class Main {
  public static void main(String[] args) {
    // Book object create karo

    // fields set karo

    // output
  }
}`,
              solution: `class Book {
  String title;
  int pages;
}

public class Main {
  public static void main(String[] args) {
    Book book = new Book();

    book.title = "Java Quest";
    book.pages = 250;

    System.out.println(book.title);
    System.out.println(book.pages);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Java Quest\n250",
                    isHidden: false,
                  },
                ],
              },
            },
            {
              slug: "fix-missing-object-reference",
              title: "Fix the Field Access",
              prompt: `Program ko print karna hai:

100

Field access bug fix karo.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 5,
              starterCode: `class Player {
  int xp;
}

public class Main {
  public static void main(String[] args) {
    Player player = new Player();
    player.xp = 100;

    System.out.println(xp);
  }
}`,
              solution: `class Player {
  int xp;
}

public class Main {
  public static void main(String[] args) {
    Player player = new Player();
    player.xp = 100;

    System.out.println(player.xp);
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
          ],
        },
      },

      {
        slug: "multiple-independent-objects",
        title: "Same Class, Different Objects",
        description:
          "Same class ke multiple objects create karke unki independent state ko trace karna seekho.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 5,
        estimatedMinutes: 22,
        lessons: {
          create: [
            {
              slug: "independent-object-state",
              title: "Har Object Ki Apni State",
              kind: "THEORY",
              position: 1,
              content: String.raw`
~~~java
Player player1 = new Player();
Player player2 = new Player();

player1.name = "Aman";
player1.xp = 100;

player2.name = "Riya";
player2.xp = 400;
~~~

~~~text
Player class
     │
     ├── player1
     │    name = Aman
     │    xp   = 100
     │
     └── player2
          name = Riya
          xp   = 400
~~~

~~~java
player1.xp = 150;
~~~

Ab:

~~~text
player1.xp = 150
player2.xp = 400
~~~

> 💡 Same class ke objects same structure follow karte hain, but state independent hoti hai.
`,
            },
            {
              slug: "trace-two-players",
              title: "Two Players Ko Trace Karo",
              kind: "EXAMPLE",
              position: 3,
              content: String.raw`
~~~java
Player p1 = new Player();
Player p2 = new Player();

p1.level = 2;
p2.level = 5;

p1.level++;

System.out.println(p1.level);
System.out.println(p2.level);
~~~

Output:

~~~text
3
5
~~~

Only p1 changed.
`,
            },
          ],
        },
        exercises: {
          create: [
            {
              slug: "predict-independent-xp",
              title: "Predict Two Player XP Values",
              prompt: `Player p1 = new Player();
Player p2 = new Player();

p1.xp = 50;
p2.xp = 200;

p1.xp = p1.xp + 50;

System.out.println(p1.xp);
System.out.println(p2.xp);

Exactly output:

100
200`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "100\n200",
            },
            {
              slug: "build-two-player-summary",
              title: "Build Two Player Summaries",
              prompt: `Do Player objects banao.

Player 1:
Aman
Level 3

Player 2:
Riya
Level 7

Exactly print karo:

Aman - Level 3
Riya - Level 7`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,
              starterCode: `class Player {
  String name;
  int level;
}

public class Main {
  public static void main(String[] args) {
    // objects + values + output
  }
}`,
              solution: `class Player {
  String name;
  int level;
}

public class Main {
  public static void main(String[] args) {
    Player player1 = new Player();
    Player player2 = new Player();

    player1.name = "Aman";
    player1.level = 3;

    player2.name = "Riya";
    player2.level = 7;

    System.out.println(player1.name + " - Level " + player1.level);
    System.out.println(player2.name + " - Level " + player2.level);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Aman - Level 3\nRiya - Level 7",
                    isHidden: false,
                  },
                ],
              },
            },
            {
              slug: "independent-state-checkpoint",
              title: "Independent State Checkpoint",
              prompt: `Agar p1.level change hota hai, kya p2.level automatically change hoga?

Exactly enter karo:

No`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "No",
            },
          ],
        },
      },

      {
        slug: "object-prediction-lab",
        title: "Object Prediction Lab",
        description:
          "Class, object aur field state ko mentally trace karke output predict karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 6,
        estimatedMinutes: 20,
        lessons: {
          create: [
            {
              slug: "how-to-trace-objects",
              title: "Object Code Ko Dry Run Kaise Karein?",
              kind: "RECAP",
              position: 1,
              content: String.raw`
Har object ki state separately track karo.

~~~text
1. Object create hua?
2. Kaunsa object?
3. Kaunsa field update hua?
4. New value kya bani?
5. Print kis object ka field kar raha hai?
~~~

~~~java
Player p = new Player();

p.xp = 100;
p.xp = p.xp + 50;

System.out.println(p.xp);
~~~

~~~text
p.xp = 100
   ↓
100 + 50
   ↓
150
~~~
`,
            },
          ],
        },
        exercises: {
          create: [
            {
              slug: "prediction-lab-xp-update",
              title: "Trace an XP Update",
              prompt: `Player p = new Player();

p.xp = 100;
p.xp = p.xp + 50;

System.out.println(p.xp);

Exactly output enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 2,
              solution: "150",
            },
            {
              slug: "prediction-lab-levels",
              title: "Trace Two Levels",
              prompt: `Player a = new Player();
Player b = new Player();

a.level = 2;
b.level = 5;

a.level++;

System.out.println(a.level);
System.out.println(b.level);

Exactly output:

3
5`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 3,
              solution: "3\n5",
            },
            {
              slug: "prediction-lab-copied-value",
              title: "Trace a Copied Field Value",
              prompt: `Book book1 = new Book();
Book book2 = new Book();

book1.pages = 200;
book2.pages = book1.pages;

book1.pages = 300;

System.out.println(book2.pages);

Exactly output enter karo.`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 4,
              solution: "200",
            },
            {
              slug: "object-creation-label-check",
              title: "Label the Object Creation Keyword",
              prompt: `Player hero = new Player();

Object creation keyword kaunsa hai?

Exactly enter karo:

new`,
              kind: "OUTPUT_PREDICTION",
              difficulty: "BEGINNER",
              position: 5,
              solution: "new",
            },
          ],
        },
      },

      {
        slug: "object-bug-hunt",
        title: "Bug Hunt: Broken Objects",
        description:
          "Missing new, wrong fields, wrong object references aur mixed-object output bugs fix karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 7,
        estimatedMinutes: 25,
        lessons: {
          create: [
            {
              slug: "object-debugging-checklist",
              title: "Object Bugs Ko Systematically Debug Karo",
              kind: "THEORY",
              position: 1,
              content: String.raw`
## Debugging Checklist

~~~text
1. Class name correct?
2. Object create hua?
3. new keyword present?
4. Field class me exist karta hai?
5. Correct object.field use ho raha hai?
6. Print correct object se ho raha hai?
~~~

Wrong:

~~~java
Player p = Player();
~~~

Correct:

~~~java
Player p = new Player();
~~~

Wrong:

~~~java
System.out.println(xp);
~~~

Correct:

~~~java
System.out.println(player.xp);
~~~
`,
            },
          ],
        },
        exercises: {
          create: [
            {
              slug: "fix-wrong-field-name",
              title: "Fix the Wrong Field",
              prompt: `Expected output:

Aman

Wrong field access fix karo.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,
              starterCode: `class Player {
  String username;
}

public class Main {
  public static void main(String[] args) {
    Player p = new Player();

    p.name = "Aman";

    System.out.println(p.username);
  }
}`,
              solution: `class Player {
  String username;
}

public class Main {
  public static void main(String[] args) {
    Player p = new Player();

    p.username = "Aman";

    System.out.println(p.username);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Aman",
                    isHidden: false,
                  },
                ],
              },
            },
            {
              slug: "fix-mixed-player-output",
              title: "Fix the Mixed Player Output",
              prompt: `Expected output:

Aman
Riya

Second output wrong object se aa raha hai.`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 3,
              starterCode: `class Player {
  String name;
}

public class Main {
  public static void main(String[] args) {
    Player player1 = new Player();
    Player player2 = new Player();

    player1.name = "Aman";
    player2.name = "Riya";

    System.out.println(player1.name);
    System.out.println(player1.name);
  }
}`,
              solution: `class Player {
  String name;
}

public class Main {
  public static void main(String[] args) {
    Player player1 = new Player();
    Player player2 = new Player();

    player1.name = "Aman";
    player2.name = "Riya";

    System.out.println(player1.name);
    System.out.println(player2.name);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Aman\nRiya",
                    isHidden: false,
                  },
                ],
              },
            },
            {
              slug: "fix-combined-object-bugs",
              title: "Fix the Broken Player Program",
              prompt: `Multiple object mistakes fix karo.

Expected output:

Aman
150
Riya
300`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,
              starterCode: `class Player {
  String name;
  int xp;
}

public class Main {
  public static void main(String[] args) {
    Player p1 = Player();
    Player p2 = new Player();

    p1.name = "Aman";
    p1.xp = 100;
    p1.xp = p1.xp + 50;

    p2.name = "Riya";
    p2.xp = 300;

    System.out.println(name);
    System.out.println(p1.xp);
    System.out.println(p1.name);
    System.out.println(p2.xp);
  }
}`,
              solution: `class Player {
  String name;
  int xp;
}

public class Main {
  public static void main(String[] args) {
    Player p1 = new Player();
    Player p2 = new Player();

    p1.name = "Aman";
    p1.xp = 100;
    p1.xp = p1.xp + 50;

    p2.name = "Riya";
    p2.xp = 300;

    System.out.println(p1.name);
    System.out.println(p1.xp);
    System.out.println(p2.name);
    System.out.println(p2.xp);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Aman\n150\nRiya\n300",
                    isHidden: false,
                  },
                ],
              },
            },
          ],
        },
      },

      {
        slug: "player-profile-build",
        title: "🏆 Build Player Profiles",
        description:
          "Classes, objects aur fields ko combine karke do complete JavaQuets player profiles build karo.",
        status: "PUBLISHED",
        difficulty: "BEGINNER",
        position: 8,
        estimatedMinutes: 30,
        lessons: {
          create: [
            {
              slug: "player-profile-mission",
              title: "Module 17 Final Mission",
              kind: "THEORY",
              position: 1,
              content: String.raw`
## What You Know

~~~text
class
fields
object
new
object.field
field updates
multiple objects
independent state
~~~

## Mission

~~~text
Player
 ├── name
 ├── level
 └── xp
~~~

Player 1:

~~~text
Name: Aman
Level: 3
XP: 250
~~~

Player 2:

~~~text
Name: Riya
Level: 5
XP: 480
~~~

## Required Output

~~~text
=== PLAYER 1 ===
Name: Aman
Level: 3
XP: 250
=== PLAYER 2 ===
Name: Riya
Level: 5
XP: 480
~~~

Abhi constructors use nahi karne. Objects manually create aur fields assign karo.

> 🏆 Next module me isi manual setup ki problem se Constructors introduce honge.
`,
            },
            {
              slug: "module-17-recap",
              title: "Module 17 Recap",
              kind: "RECAP",
              position: 3,
              content: String.raw`
~~~text
Scattered variables
      ↓
Class
      ↓
Fields
      ↓
new
      ↓
Object
      ↓
Dot notation
      ↓
Independent objects
      ↓
Debug object code
      ↓
Build player profiles
~~~

## Core Vocabulary

~~~text
Class
→ blueprint / custom type

Field
→ object ki stored property

Object
→ class ka actual instance

new
→ object creation

object.field
→ specific object ke field ko access karna
~~~

Next problem:

~~~java
Player player = new Player();

player.name = "Aman";
player.level = 1;
player.xp = 0;
~~~

Kya object create hote hi initial values set ho sakti hain?

Next module: Constructors.
`,
            },
          ],
        },
        exercises: {
          create: [
            {
              slug: "player-profile-guided-build",
              title: "Build One Player Profile",
              prompt: `Player class use karke ek player banao.

name = Aman
level = 3
xp = 250

Exactly output:

Aman
3
250`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 2,
              starterCode: `class Player {
  String name;
  int level;
  int xp;
}

public class Main {
  public static void main(String[] args) {
    // object + fields + output
  }
}`,
              solution: `class Player {
  String name;
  int level;
  int xp;
}

public class Main {
  public static void main(String[] args) {
    Player player = new Player();

    player.name = "Aman";
    player.level = 3;
    player.xp = 250;

    System.out.println(player.name);
    System.out.println(player.level);
    System.out.println(player.xp);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput: "Aman\n3\n250",
                    isHidden: false,
                  },
                ],
              },
            },
            {
              slug: "player-profile-final-build",
              title: "🏆 Player Profile — Build It Yourself",
              prompt: `Module 17 ka final challenge.

Player class:

String name
int level
int xp

Do Player objects:

Player 1:
Aman
Level 3
XP 250

Player 2:
Riya
Level 5
XP 480

Expected output exactly:

=== PLAYER 1 ===
Name: Aman
Level: 3
XP: 250
=== PLAYER 2 ===
Name: Riya
Level: 5
XP: 480`,
              kind: "CODE",
              difficulty: "BEGINNER",
              position: 4,
              starterCode: `public class Main {
  public static void main(String[] args) {

    // Build two Player profiles

  }
}

// Player class`,
              solution: `class Player {
  String name;
  int level;
  int xp;
}

public class Main {
  public static void main(String[] args) {
    Player player1 = new Player();
    Player player2 = new Player();

    player1.name = "Aman";
    player1.level = 3;
    player1.xp = 250;

    player2.name = "Riya";
    player2.level = 5;
    player2.xp = 480;

    System.out.println("=== PLAYER 1 ===");
    System.out.println("Name: " + player1.name);
    System.out.println("Level: " + player1.level);
    System.out.println("XP: " + player1.xp);

    System.out.println("=== PLAYER 2 ===");
    System.out.println("Name: " + player2.name);
    System.out.println("Level: " + player2.level);
    System.out.println("XP: " + player2.xp);
  }
}`,
              testCases: {
                create: [
                  {
                    position: 1,
                    expectedOutput:
                      "=== PLAYER 1 ===\nName: Aman\nLevel: 3\nXP: 250\n=== PLAYER 2 ===\nName: Riya\nLevel: 5\nXP: 480",
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
