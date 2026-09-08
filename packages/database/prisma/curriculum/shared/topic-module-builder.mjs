function testCases(expectedOutput) {
  return { create: [{ position: 1, input: null, expectedOutput, isHidden: false }] };
}

function lessonOne(meta, point) {
  return String.raw`
${point.intro ?? `Ab ${point.title} ko practical Java angle se samajhte hain. Idea sirf syntax yaad karna nahi hai; humein samajhna hai ki is concept ko code design me kab aur kyun use karna hai.`}

## Core Idea

${point.idea ?? meta.coreIdea}

## Mental Model

~~~text
${point.model ?? meta.model}
~~~

## Java Shape

~~~java
${point.syntax ?? meta.syntax}
~~~

${point.note ?? `Is concept ko previous modules ke saath connect karke dekho. Chhota code likho, output predict karo, phir state ya data-flow trace karo.`}

> 💡 **Yaad rakho:** ${point.remember ?? meta.remember}
`;
}

function lessonTwo(meta, point) {
  return String.raw`
## Worked Example

~~~java
${point.example ?? meta.example}
~~~

## Trace

~~~text
${point.trace ?? meta.trace}
~~~

## Common Mistake

~~~text
${point.mistake ?? meta.mistake}
~~~

${point.fix ?? meta.fix}

> 🧠 **Check:** code ko line-by-line trace karo aur dekho ${point.title} ka effect exactly kahan aa raha hai.
`;
}

export function buildTopicModule(meta, points) {
  let labCounter = 0;
  return {
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    position: meta.position,
    quests: {
      create: points.map((point, index) => {
        const difficulty = point.difficulty ?? meta.difficulty ?? "INTERMEDIATE";
        const exercises = [{
          slug: `${point.slug}-check`,
          title: `${point.title} — Concept Check`,
          prompt: point.checkPrompt ?? `Neeche statement complete karo. Exact answer enter karo:\n\n${point.check ?? meta.check}`,
          kind: point.checkKind ?? "OUTPUT_PREDICTION",
          difficulty,
          position: 2,
          solution: point.answer ?? meta.answer,
        }];

        const shouldCode = point.code ?? ((index % 2 === 1) || (meta.capstone && index === points.length - 1));
        if (shouldCode) {
          const lab = meta.labs[labCounter % meta.labs.length];
          labCounter += 1;
          exercises.push({
            slug: `${point.slug}-code`,
            title: point.codeTitle ?? `Build: ${point.title}`,
            prompt: `${point.codePrompt ?? `Ab ${point.title} ko use karke mini build complete karo.`}\n\nExact output:\n${lab.expectedOutput}`,
            kind: "CODE",
            difficulty,
            position: 4,
            starterCode: lab.starterCode,
            solution: lab.solution,
            executionTimeoutMs: 5000,
            testCases: testCases(lab.expectedOutput),
          });
        }

        return {
          slug: point.slug,
          title: point.title,
          description: point.description ?? `${point.title} ko simple Hinglish explanation, trace aur Java practice ke through master karo.`,
          status: "PUBLISHED",
          difficulty,
          position: index + 1,
          estimatedMinutes: point.minutes ?? (meta.capstone ? 32 : 24),
          lessons: { create: [
            { slug: `${point.slug}-foundation`, title: `${point.title} — Foundation`, kind: index === points.length - 1 ? "RECAP" : "THEORY", position: 1, content: lessonOne(meta, point) },
            { slug: `${point.slug}-worked-example`, title: `${point.title} — Worked Example`, kind: index === points.length - 1 ? "RECAP" : "EXAMPLE", position: 3, content: lessonTwo(meta, point) },
          ]},
          exercises: { create: exercises },
        };
      }),
    },
  };
}
