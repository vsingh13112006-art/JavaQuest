import { PrismaClient } from "@prisma/client";
import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";

import { javaMasteryModules } from "./curriculum/index.mjs";

const prisma = new PrismaClient();

const scryptAsync = promisify(scrypt);

function createdItems(relation) {
  return relation?.create ?? [];
}

async function syncTestCases(tx, exerciseId, testCasesRelation) {
  const testCases = createdItems(testCasesRelation);

  for (const testCase of testCases) {
    await tx.testCase.upsert({
      where: {
        exerciseId_position: {
          exerciseId,
          position: testCase.position,
        },
      },

      update: {
        input: testCase.input ?? null,
        expectedOutput: testCase.expectedOutput,
        isHidden: testCase.isHidden ?? false,
      },

      create: {
        exerciseId,
        position: testCase.position,
        input: testCase.input ?? null,
        expectedOutput: testCase.expectedOutput,
        isHidden: testCase.isHidden ?? false,
      },
    });
  }
}

async function syncExercises(tx, questId, exercisesRelation) {
  const exercises = createdItems(exercisesRelation);

  for (const exercise of exercises) {
    const savedExercise = await tx.exercise.upsert({
      where: {
        questId_slug: {
          questId,
          slug: exercise.slug,
        },
      },

      update: {
        title: exercise.title,
        prompt: exercise.prompt,
        kind: exercise.kind,
        difficulty: exercise.difficulty ?? "BEGINNER",
        position: exercise.position,
        starterCode: exercise.starterCode ?? null,
        solution: exercise.solution ?? null,
        executionTimeoutMs: exercise.executionTimeoutMs ?? 5000,
      },

      create: {
        questId,
        slug: exercise.slug,
        title: exercise.title,
        prompt: exercise.prompt,
        kind: exercise.kind,
        difficulty: exercise.difficulty ?? "BEGINNER",
        position: exercise.position,
        starterCode: exercise.starterCode ?? null,
        solution: exercise.solution ?? null,
        executionTimeoutMs: exercise.executionTimeoutMs ?? 5000,
      },
    });

    await syncTestCases(
      tx,
      savedExercise.id,
      exercise.testCases,
    );
  }
}

async function syncLessons(tx, questId, lessonsRelation) {
  const lessons = createdItems(lessonsRelation);

  for (const lesson of lessons) {
    await tx.lesson.upsert({
      where: {
        questId_slug: {
          questId,
          slug: lesson.slug,
        },
      },

      update: {
        title: lesson.title,
        kind: lesson.kind ?? "THEORY",
        content: lesson.content,
        position: lesson.position,
      },

      create: {
        questId,
        slug: lesson.slug,
        title: lesson.title,
        kind: lesson.kind ?? "THEORY",
        content: lesson.content,
        position: lesson.position,
      },
    });
  }
}

async function syncQuests(tx, moduleId, questsRelation) {
  const quests = createdItems(questsRelation);

  for (const quest of quests) {
    const savedQuest = await tx.quest.upsert({
      where: {
        slug: quest.slug,
      },

      update: {
        moduleId,
        title: quest.title,
        description: quest.description,
        status: quest.status ?? "DRAFT",
        difficulty: quest.difficulty ?? "BEGINNER",
        position: quest.position,
        estimatedMinutes: quest.estimatedMinutes ?? 15,
      },

      create: {
        moduleId,
        slug: quest.slug,
        title: quest.title,
        description: quest.description,
        status: quest.status ?? "DRAFT",
        difficulty: quest.difficulty ?? "BEGINNER",
        position: quest.position,
        estimatedMinutes: quest.estimatedMinutes ?? 15,
      },
    });

    await syncLessons(
      tx,
      savedQuest.id,
      quest.lessons,
    );

    await syncExercises(
      tx,
      savedQuest.id,
      quest.exercises,
    );
  }
}

async function syncModules(tx, courseId, modules) {
  for (const module of modules) {
    console.log(
      `Syncing module ${module.position}: ${module.title}`,
    );

    const savedModule =
      await tx.courseModule.upsert({
        where: {
          courseId_slug: {
            courseId,
            slug: module.slug,
          },
        },

        update: {
          title: module.title,
          description:
            module.description ?? null,
          position: module.position,
        },

        create: {
          courseId,
          slug: module.slug,
          title: module.title,
          description:
            module.description ?? null,
          position: module.position,
        },
      });

    await syncQuests(
      tx,
      savedModule.id,
      module.quests,
    );
  }
}

async function main() {
  const salt = randomBytes(16).toString("hex");

  const key = await scryptAsync(
    "AdminPass123!",
    salt,
    64,
  );

  const passwordHash =
    `scrypt$${salt}$${key.toString("hex")}`;

  // --------------------------------------------
  // ADMIN
  // --------------------------------------------

  await prisma.user.upsert({
    where: {
      email: "admin@javaquets.dev",
    },

    update: {
      role: "ADMIN",
      passwordHash,
    },

    create: {
      email: "admin@javaquets.dev",
      displayName: "JavaQuets Admin",
      role: "ADMIN",
      passwordHash,
    },
  });

  // --------------------------------------------
  // COURSE
  // --------------------------------------------

  const course = await prisma.course.upsert({
    where: {
      slug: "java-foundations",
    },

    update: {
      title: "Java Mastery Path",
      description:
        "8-stage self-paced Java journey — basics se advanced tak. Short Hinglish lessons, coding challenges, practice quests aur milestone projects ke through seekho.",
      status: "PUBLISHED",
      difficulty: "BEGINNER",
    },

    create: {
      slug: "java-foundations",
      title: "Java Mastery Path",
      description:
        "8-stage self-paced Java journey — basics se advanced tak. Short Hinglish lessons, coding challenges, practice quests aur milestone projects ke through seekho.",
      status: "PUBLISHED",
      difficulty: "BEGINNER",
    },
  });

  // --------------------------------------------
  // CURRICULUM
  // --------------------------------------------

  await syncModules(
    prisma,
    course.id,
    javaMasteryModules,
  );

  console.log(
    "Safely synced Java Foundations curriculum.",
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 