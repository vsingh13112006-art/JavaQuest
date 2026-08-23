import { PrismaClient } from "@prisma/client";
import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";
import { javaMasteryModules } from "./curriculum/index.mjs";

const prisma = new PrismaClient();

async function main() {
  const salt = randomBytes(16).toString("hex");
  const key = await promisify(scrypt)("AdminPass123!", salt, 64);

  await prisma.user.upsert({
    where: { email: "admin@javaquets.dev" },
    update: {
      role: "ADMIN",
      passwordHash: `scrypt$${salt}$${key.toString("hex")}`,
    },
    create: {
      email: "admin@javaquets.dev",
      displayName: "JavaQuets Admin",
      role: "ADMIN",
      passwordHash: `scrypt$${salt}$${key.toString("hex")}`,
    },
  });

  const courseSlug = "java-foundations";

  await prisma.course.deleteMany({
    where: { slug: courseSlug },
  });

  await prisma.course.create({
    data: {
      slug: courseSlug,
      title: "Java Mastery Path",
      description:
        "8-stage self-paced Java journey — basics se advanced tak. Short Hinglish lessons, coding challenges, practice quests aur milestone projects ke through seekho.",
      status: "PUBLISHED",
      difficulty: "BEGINNER",

      modules: {
        create: javaMasteryModules,
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