import { codeExercise, conceptLessons, prediction, quest } from "./helpers.mjs";

export const mainProgram = (body, methods = "") => {
  let imports = "";
  if (body.startsWith("import ")) {
    const splitAt = body.indexOf("\n\n");
    imports = body.slice(0, splitAt + 2);
    body = body.slice(splitAt + 2);
  }
  return `${imports}public class Main {\n  public static void main(String[] args) {\n${body}\n  }${methods ? `\n\n${methods}` : ""}\n}`;
};

export function buildModule({ slug, title, description, position, items }) {
  return {
    slug, title, description, position,
    quests: { create: items.map((item, index) => quest({
      slug: item.slug, title: item.title, description: item.description,
      position: index + 1, difficulty: item.difficulty ?? (position >= 14 ? "INTERMEDIATE" : "BEGINNER"),
      minutes: item.minutes ?? 20,
      lessons: conceptLessons(item.slug, item.title, item.why, item.model, item.example, item.recap),
      exercises: [
        prediction(item.predict[0], item.predict[1], item.predict[2], 1, item.predict[3], item.difficulty),
        codeExercise({ slug: item.code[0], title: item.code[1], prompt: item.code[2], position: 2,
          starterCode: item.code[3], solution: item.code[4], tests: item.code[5], difficulty: item.difficulty }),
      ],
    })) },
  };
}
