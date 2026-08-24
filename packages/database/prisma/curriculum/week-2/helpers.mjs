export function lesson(slug, title, kind, position, content) {
  return { slug, title, kind, position, content: String.raw`${content}` };
}

export function prediction(slug, title, prompt, position, solution, difficulty = "BEGINNER") {
  return { slug, title, prompt, kind: "OUTPUT_PREDICTION", difficulty, position, solution };
}

export function codeExercise({ slug, title, prompt, position, starterCode, solution, tests, difficulty = "BEGINNER" }) {
  return {
    slug, title, prompt, kind: "CODE", difficulty, position, starterCode, solution,
    testCases: { create: tests.map((test, index) => ({ position: index + 1, ...test })) },
  };
}

export function quest({ slug, title, description, position, minutes = 18, difficulty = "BEGINNER", lessons, exercises }) {
  return {
    slug, title, description, status: "PUBLISHED", difficulty, position,
    estimatedMinutes: minutes,
    lessons: { create: lessons },
    exercises: { create: exercises },
  };
}

export function conceptLessons(prefix, conceptTitle, why, model, example, recap = false) {
  return [
    lesson(`${prefix}-concept`, conceptTitle, "THEORY", 1, `${why}\n\n## Mental model\n\n~~~text\n${model}\n~~~\n\nSyntax ko ratne se pehle data ka flow samjho.`),
    lesson(`${prefix}-${recap ? "recap" : "example"}`, recap ? `${conceptTitle} Recap` : `${conceptTitle} in Java`, recap ? "RECAP" : "EXAMPLE", 2, `${example}\n\n> Code ko line-by-line trace karo. Har step par current value identify karna debugging ko easy banata hai.`),
  ];
}
