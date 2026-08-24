function richTheory(spec) {
  return String.raw`
${spec.problem}

## Why This Matters

${spec.why}

## Mental Model

~~~text
${spec.model}
~~~

## Java Shape

~~~java
${spec.syntax}
~~~

> 💡 **Remember:** ${spec.remember}
`;
}

function richExample(spec) {
  return String.raw`
## Step-by-Step Example

~~~java
${spec.example}
~~~

## Trace

~~~text
${spec.trace}
~~~

## Common Mistake

~~~java
${spec.mistake}
~~~

${spec.fix}

> 🧠 Code ko sirf read nahi karo—current object aur uski current state ko har line ke baad trace karo.
`;
}

function testCases(tests) {
  return tests?.length ? { create: tests.map((test, index) => ({ position: index + 1, ...test })) } : undefined;
}

function prediction(slug, title, prompt, solution, position, difficulty) {
  return { slug, title, prompt, solution, kind: "OUTPUT_PREDICTION", difficulty, position };
}

function code(spec, position, difficulty) {
  return {
    slug: spec.slug,
    title: spec.title,
    prompt: spec.prompt,
    kind: "CODE",
    difficulty: spec.difficulty ?? difficulty,
    position,
    starterCode: spec.starterCode,
    solution: spec.solution,
    testCases: testCases(spec.tests),
  };
}

export function buildRichModule(meta, specs) {
  return {
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    position: meta.position,
    quests: {
      create: specs.map((spec, index) => {
        const difficulty = spec.difficulty ?? meta.difficulty ?? "BEGINNER";
        const exercises = [
          prediction(`${spec.slug}-concept-check`, `${spec.title} — Concept Check`, spec.predict[0], spec.predict[1], 2, difficulty),
        ];
        if (index % 2 === 0) {
          exercises.push(prediction(`${spec.slug}-trace-check`, `${spec.title} — Trace Check`, spec.predict2[0], spec.predict2[1], 4, difficulty));
        }
        exercises.push(code(spec.code, index % 2 === 0 ? 5 : 4, difficulty));
        if (spec.bug) exercises.push(code(spec.bug, index % 2 === 0 ? 6 : 5, difficulty));
        return {
          slug: spec.slug,
          title: spec.title,
          description: spec.description,
          status: "PUBLISHED",
          difficulty,
          position: index + 1,
          estimatedMinutes: spec.minutes ?? 22,
          lessons: {
            create: [
              { slug: `${spec.slug}-foundation`, title: spec.lessonTitle ?? spec.title, kind: index === 7 ? "RECAP" : "THEORY", position: 1, content: richTheory(spec) },
              { slug: `${spec.slug}-worked-example`, title: `${spec.title} — Worked Example`, kind: index === 7 ? "RECAP" : "EXAMPLE", position: 3, content: richExample(spec) },
            ],
          },
          exercises: { create: exercises },
        };
      }),
    },
  };
}
