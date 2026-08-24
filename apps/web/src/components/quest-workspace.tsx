"use client";

import { LessonContent } from "@/components/lesson-content";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  ExerciseDto,
  QuestDetail,
  QuestProgressDto,
  SubmissionResultDto,
} from "@javaquets/shared";

import {
  completeExercise,
  getQuestProgress,
  startQuest,
} from "@/services/learner";

import { submitJava } from "@/services/submissions";
import { ProgressBar } from "@/components/progress-bar";

export function QuestWorkspace({
  quest,
  nextQuestSlug,
}: {
  quest: QuestDetail;
  nextQuestSlug: string | null;
}) {
  const router = useRouter();

  const items = useMemo(
    () => [
      ...[...quest.lessons]
        .sort(
          (a, b) =>
            a.position - b.position,
        )
        .map((x) => ({
          ...x,
          type: "lesson" as const,
        })),

      ...[...quest.exercises]
        .sort(
          (a, b) =>
            a.position - b.position,
        )
        .map((x) => ({
          ...x,
          type: "exercise" as const,
        })),
    ],
    [quest],
  );

  const [index, setIndex] = useState(0);

  const [progress, setProgress] =
    useState<QuestProgressDto | null>(
      null,
    );

  const [code, setCode] = useState(
    quest.exercises[0]?.starterCode ?? "",
  );

  const [answer, setAnswer] =
    useState("");

  const [result, setResult] =
    useState<SubmissionResultDto | null>(
      null,
    );

  const [busy, setBusy] =
    useState(false);

  const [error, setError] =
    useState("");

  const [answerCorrect, setAnswerCorrect] =
    useState(false);

  const current = items[index];

  // =====================================================
  // START QUEST
  // =====================================================

  useEffect(() => {
    startQuest(quest.slug)
      .then(setProgress)
      .catch(() =>
        getQuestProgress(quest.slug)
          .then(setProgress)
          .catch((e) =>
            setError(
              e instanceof Error
                ? e.message
                : "Could not start quest",
            ),
          ),
      );
  }, [quest.slug]);

  // =====================================================
  // RESET CURRENT ITEM STATE
  // =====================================================

  useEffect(() => {
    if (
      current?.type === "exercise"
    ) {
      setCode(
        current.starterCode ?? "",
      );
    }

    setAnswer("");
    setAnswerCorrect(false);
    setResult(null);
    setError("");
  }, [current]);

  // =====================================================
  // EVALUATE EXERCISE
  // =====================================================

  async function evaluate(
    exercise: ExerciseDto,
  ) {
    setBusy(true);
    setError("");

    try {
      // -----------------------------
      // CODE EXERCISE
      // -----------------------------

      if (exercise.kind === "CODE") {
        const submission =
          await submitJava(
            quest.slug,
            exercise.slug,
            code,
          );

        setResult(submission);

        // submitJava evaluator backend
        // already handles CODE completion
        // after passing.
        if (
          submission.status ===
          "PASSED"
        ) {
          const updatedProgress =
            await getQuestProgress(
              quest.slug,
            );

          setProgress(
            updatedProgress,
          );
        }

        return;
      }

      // -----------------------------
      // NON-CODE EXERCISE
      // -----------------------------

      if (!answer.trim()) {
        setError(
          "Enter an answer before checking.",
        );
        return;
      }

      const updatedProgress =
        await completeExercise(
          quest.slug,
          exercise.slug,
          answer,
        );

      setProgress(updatedProgress);
      setAnswerCorrect(true);
    } catch (e) {
      setAnswerCorrect(false);

      setError(
        e instanceof Error
          ? e.message
          : "Exercise failed",
      );
    } finally {
      setBusy(false);
    }
  }

  // =====================================================
  // NAVIGATION
  // =====================================================

  function goNext() {
    const isLastItem =
      index >= items.length - 1;

    if (!isLastItem) {
      setIndex(index + 1);
      return;
    }

    if (nextQuestSlug) {
      router.push(
        `/quests/${nextQuestSlug}`,
      );

      return;
    }

    router.push(
      `/courses/${quest.module.courseSlug}`,
    );
  }

  // =====================================================
  // PROGRESS
  // =====================================================

  const completed =
    progress?.completedExercises ?? 0;

  const pct =
    progress?.totalExercises
      ? (completed /
          progress.totalExercises) *
        100
      : 0;

  return (
    <div>
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link
            className="text-sm text-slate-400"
            href={`/courses/${quest.module.courseSlug}`}
          >
            ← {quest.module.title}
          </Link>

          <h1 className="mt-2 text-3xl font-black">
            {quest.title}
          </h1>
        </div>

        <div className="w-full sm:w-64">
          <ProgressBar
            value={pct}
            label={`${completed}/${
              progress?.totalExercises ??
              quest.exercises.length
            } exercises`}
          />
        </div>
      </div>

      {/* =================================================
          QUEST WORKSPACE
      ================================================= */}

      <div className="mt-7 grid gap-5 lg:grid-cols-[260px_1fr]">
        {/* ===============================================
            QUEST PATH
        =============================================== */}

        <aside className="card h-fit">
          <p className="eyebrow">
            Quest path
          </p>

          <div className="mt-4 space-y-1">
            {items.map((item, i) => {
              const done =
                item.type === "exercise" &&
                progress?.completedExerciseSlugs.includes(
                  item.slug,
                );

              return (
                <button
                  key={`${item.type}-${item.slug}`}
                  onClick={() =>
                    setIndex(i)
                  }
                  className={`w-full rounded-xl p-3 text-left text-sm ${
                    i === index
                      ? "bg-amber-400 font-bold text-slate-950"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <span className="mr-2">
                    {done
                      ? "✓"
                      : item.type ===
                          "lesson"
                        ? "◆"
                        : "›"}
                  </span>

                  {item.title}
                </button>
              );
            })}
          </div>
        </aside>

        {/* ===============================================
            CURRENT CONTENT
        =============================================== */}

        <section>
          {current?.type ===
          "lesson" ? (
            <Lesson
              title={current.title}
              kind={current.kind}
              content={current.content}
              onNext={goNext}
            />
          ) : current?.type ===
            "exercise" ? (
            <Exercise
              exercise={current}
              code={code}
              setCode={setCode}
              answer={answer}
              setAnswer={setAnswer}
              answerCorrect={
                answerCorrect
              }
              result={result}
              busy={busy}
              error={error}
              completed={
                progress?.completedExerciseSlugs.includes(
                  current.slug,
                ) ?? false
              }
              onRun={() =>
                evaluate(current)
              }
              onNext={goNext}
            />
          ) : (
            <div className="card">
              This quest has no content
              yet.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

// =====================================================
// LESSON
// =====================================================

function Lesson({
  title,
  kind,
  content,
  onNext,
}: {
  title: string;
  kind: string;
  content: string;
  onNext: () => void;
}) {
  return (
    <article className="card min-h-[480px] p-8">
      <p className="eyebrow">
        {kind}
      </p>

      <h2 className="mt-3 text-3xl font-black">
        {title}
      </h2>

      <div className="mt-8">
        <LessonContent
          content={content}
        />
      </div>

      <button
        className="btn-primary mt-12"
        onClick={onNext}
      >
        Continue →
      </button>
    </article>
  );
}

// =====================================================
// EXERCISE
// =====================================================

function Exercise({
  exercise,
  code,
  setCode,
  answer,
  setAnswer,
  answerCorrect,
  result,
  busy,
  error,
  completed,
  onRun,
  onNext,
}: {
  exercise: ExerciseDto;

  code: string;

  setCode: (value: string) => void;

  answer: string;

  setAnswer: (
    value: string,
  ) => void;

  answerCorrect: boolean;

  result:
    | SubmissionResultDto
    | null;

  busy: boolean;

  error: string;

  completed: boolean;

  onRun: () => void;

  onNext: () => void;
}) {
  const passed =
    result?.status === "PASSED";

  const isCode =
    exercise.kind === "CODE";

  const isPrediction =
    exercise.kind ===
    "OUTPUT_PREDICTION";

  const isMultipleChoice =
    exercise.kind ===
    "MULTIPLE_CHOICE";

  return (
    <div className="space-y-4">
      {/* ===============================================
          EXERCISE PROMPT
      =============================================== */}

      <article className="card">
        <p className="eyebrow">
          {exercise.kind.replace(
            /_/g,
            " ",
          )}{" "}
          exercise
        </p>

        <h2 className="mt-3 text-2xl font-black">
          {exercise.title}
        </h2>

        <div className="mt-3 whitespace-pre-wrap leading-7 text-slate-300">
          {exercise.prompt}
        </div>
      </article>

      {/* ===============================================
          CODE EXERCISE
      =============================================== */}

      {isCode && (
        <>
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#050914]">
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
              <span className="text-sm font-semibold text-slate-300">
                Main.java
              </span>

              <span className="text-xs text-slate-500">
                Java 21
              </span>
            </div>

            <textarea
              aria-label="Java source code"
              spellCheck={false}
              value={code}
              onChange={(e) =>
                setCode(
                  e.target.value,
                )
              }
              className="min-h-[330px] w-full resize-y bg-transparent p-5 font-mono text-sm leading-6 text-slate-100 outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="btn-secondary"
              disabled={
                busy ||
                !code.trim()
              }
              onClick={onRun}
            >
              {busy
                ? "Running…"
                : "Run tests"}
            </button>

            <button
              className="btn-primary"
              disabled={
                busy ||
                !code.trim()
              }
              onClick={onRun}
            >
              {busy
                ? "Submitting…"
                : "Submit solution"}
            </button>

            {(passed ||
              completed) && (
              <button
                className="btn-secondary"
                onClick={onNext}
              >
                Continue →
              </button>
            )}
          </div>
        </>
      )}

      {/* ===============================================
          OUTPUT PREDICTION
      =============================================== */}

      {isPrediction && (
        <NonCodeAnswer
          answer={answer}
          setAnswer={setAnswer}
          busy={busy}
          completed={completed}
          answerCorrect={
            answerCorrect
          }
          placeholder="Enter your answer..."
          onRun={onRun}
          onNext={onNext}
        />
      )}

      {/* ===============================================
          MULTIPLE CHOICE
          
          Current DB schema does not expose structured
          option objects yet, so answer entry remains
          text-based for now.
      =============================================== */}

      {isMultipleChoice && (
        <NonCodeAnswer
          answer={answer}
          setAnswer={setAnswer}
          busy={busy}
          completed={completed}
          answerCorrect={
            answerCorrect
          }
          placeholder="Enter the correct option..."
          onRun={onRun}
          onNext={onNext}
        />
      )}

      {/* ===============================================
          ERROR / WRONG ANSWER
      =============================================== */}

      {error && (
        <div className="card !border-red-900 bg-red-950/20 text-red-300">
          <p className="font-bold">
            Not quite yet
          </p>

          <p className="mt-1 text-sm">
            {error}
          </p>
        </div>
      )}

      {/* ===============================================
          CODE RESULT
      =============================================== */}

      {result && (
        <ResultPanel
          result={result}
        />
      )}
    </div>
  );
}

// =====================================================
// NON-CODE ANSWER
// =====================================================

function NonCodeAnswer({
  answer,
  setAnswer,
  busy,
  completed,
  answerCorrect,
  placeholder,
  onRun,
  onNext,
}: {
  answer: string;

  setAnswer: (
    value: string,
  ) => void;

  busy: boolean;

  completed: boolean;

  answerCorrect: boolean;

  placeholder: string;

  onRun: () => void;

  onNext: () => void;
}) {
  const solved =
    completed || answerCorrect;

  return (
    <div className="card">
      {!solved ? (
        <>
          <label
            htmlFor="exercise-answer"
            className="text-sm font-bold text-slate-200"
          >
            Your answer
          </label>

          <input
            id="exercise-answer"
            type="text"
            value={answer}
            disabled={busy}
            autoComplete="off"
            onChange={(e) =>
              setAnswer(
                e.target.value,
              )
            }
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                answer.trim() &&
                !busy
              ) {
                onRun();
              }
            }}
            placeholder={
              placeholder
            }
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400"
          />

          <div className="mt-4">
            <button
              className="btn-primary"
              disabled={
                busy ||
                !answer.trim()
              }
              onClick={onRun}
            >
              {busy
                ? "Checking…"
                : "Check answer"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-xl border border-emerald-800 bg-emerald-950/30 p-4">
            <p className="font-bold text-emerald-300">
              ✓ Correct!
            </p>

            <p className="mt-1 text-sm text-emerald-200/80">
              Exercise completed.
            </p>
          </div>

          <button
            className="btn-primary mt-4"
            onClick={onNext}
          >
            Continue →
          </button>
        </>
      )}
    </div>
  );
}

// =====================================================
// CODE RESULT PANEL
// =====================================================

function ResultPanel({
  result,
}: {
  result: SubmissionResultDto;
}) {
  const passed =
    result.status === "PASSED";

  return (
    <section
      aria-live="polite"
      className={`card ${
        passed
          ? "!border-emerald-700"
          : "!border-red-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p
            className={`font-bold ${
              passed
                ? "text-emerald-300"
                : "text-red-300"
            }`}
          >
            {passed
              ? "All tests passed"
              : "Keep iterating"}
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Score {result.score} ·{" "}
            {result.runtimeMs ??
              0}{" "}
            ms
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            passed
              ? "bg-emerald-950 text-emerald-300"
              : "bg-red-950 text-red-300"
          }`}
        >
          {result.status}
        </span>
      </div>

      {result.errorText && (
        <pre className="mt-4 overflow-auto rounded-xl bg-slate-950 p-4 text-sm text-red-200">
          {result.errorText}
        </pre>
      )}

      <div className="mt-4 grid gap-3">
        {result.tests.map(
          (test) => (
            <div
              key={test.position}
              className="rounded-lg bg-slate-950/60 px-3 py-3 text-sm"
            >
              <div className="flex justify-between">
                <span>
                  {test.hidden
                    ? "Hidden test"
                    : `Test ${test.position}`}
                </span>

                <span
                  className={
                    test.passed
                      ? "text-emerald-300"
                      : "text-red-300"
                  }
                >
                  {test.passed
                    ? "Passed"
                    : "Failed"}
                </span>
              </div>

              {!test.hidden &&
                !test.passed &&
                test.expectedOutput !==
                  null && (
                  <div className="mt-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Expected
                      output
                    </p>

                    <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-lg bg-slate-950 p-3 text-emerald-200">
                      {
                        test.expectedOutput
                      }
                    </pre>
                  </div>
                )}

              {!test.hidden &&
                !test.passed &&
                test.stdout !==
                  null && (
                  <div className="mt-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Your output
                    </p>

                    <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-lg bg-slate-950 p-3 text-slate-200">
                      {test.stdout ||
                        "(no output)"}
                    </pre>
                  </div>
                )}
            </div>
          ),
        )}
      </div>
    </section>
  );
}