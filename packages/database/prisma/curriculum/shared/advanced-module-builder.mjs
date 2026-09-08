function lessonContent(spec, moduleTitle) {
  return String.raw`
${spec.intro}

## Simple Idea

${spec.idea}

## Mental Model

~~~text
${spec.model}
~~~

## Java Shape

~~~java
${spec.syntax}
~~~

## Example

~~~java
${spec.example}
~~~

${spec.explanation}

> 💡 **Yaad rakho:** ${spec.remember}
`;
}

function exampleContent(spec) {
  return String.raw`
## Code Ko Trace Karo

~~~java
${spec.example}
~~~

~~~text
${spec.trace}
~~~

## Common Mistake

~~~java
${spec.mistake}
~~~

${spec.fix}

> 🧠 **Quick takeaway:** ${spec.takeaway ?? spec.remember}
`;
}

function testCases(tests = []) {
  return tests.length
    ? { create: tests.map((test, index) => ({ position: index + 1, isHidden: false, ...test })) }
    : undefined;
}

function knowledgeExercise(spec, position, difficulty) {
  return {
    slug: `${spec.slug}-check`,
    title: spec.checkTitle ?? `Check: ${spec.title}`,
    prompt: spec.checkPrompt,
    kind: spec.checkKind ?? "OUTPUT_PREDICTION",
    difficulty,
    position,
    solution: spec.checkSolution,
  };
}

function codeExercise(spec, position, difficulty) {
  return {
    slug: `${spec.slug}-code`,
    title: spec.codeTitle ?? `Build: ${spec.title}`,
    prompt: spec.codePrompt,
    kind: "CODE",
    difficulty: spec.codeDifficulty ?? difficulty,
    position,
    starterCode: spec.starterCode,
    solution: spec.solution,
    executionTimeoutMs: spec.executionTimeoutMs ?? 5000,
    testCases: testCases(spec.tests),
  };
}

function bugExercise(spec, position, difficulty) {
  if (!spec.bug) return null;
  return {
    slug: `${spec.slug}-bug-hunt`,
    title: spec.bug.title ?? `Bug Hunt: ${spec.title}`,
    prompt: spec.bug.prompt,
    kind: "CODE",
    difficulty: spec.bug.difficulty ?? difficulty,
    position,
    starterCode: spec.bug.starterCode,
    solution: spec.bug.solution,
    executionTimeoutMs: spec.bug.executionTimeoutMs ?? 5000,
    testCases: testCases(spec.bug.tests),
  };
}

export function buildAdvancedModule(meta, specs) {
  return {
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    position: meta.position,
    quests: {
      create: specs.map((spec, index) => {
        const difficulty = spec.difficulty ?? meta.difficulty ?? "INTERMEDIATE";
        const exercises = [knowledgeExercise(spec, 2, difficulty)];
        if (spec.codePrompt) exercises.push(codeExercise(spec, 4, difficulty));
        const bug = bugExercise(spec, spec.codePrompt ? 5 : 4, difficulty);
        if (bug) exercises.push(bug);

        return {
          slug: spec.slug,
          title: spec.title,
          description: spec.description,
          status: "PUBLISHED",
          difficulty,
          position: index + 1,
          estimatedMinutes: spec.minutes ?? (meta.capstone ? 32 : 24),
          lessons: {
            create: [
              {
                slug: `${spec.slug}-lesson`,
                title: spec.lessonTitle ?? spec.title,
                kind: spec.recap ? "RECAP" : "THEORY",
                position: 1,
                content: lessonContent(spec, meta.title),
              },
              {
                slug: `${spec.slug}-example`,
                title: `${spec.title} — Worked Example`,
                kind: spec.recap ? "RECAP" : "EXAMPLE",
                position: 3,
                content: exampleContent(spec),
              },
            ],
          },
          exercises: { create: exercises },
        };
      }),
    },
  };
}

export const visibleTests = (expectedOutput, input) => [
  { input, expectedOutput, isHidden: false },
];
