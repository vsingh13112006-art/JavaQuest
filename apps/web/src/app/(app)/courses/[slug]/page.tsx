"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  CourseDetail,
  CourseProgressDto,
  EnrollmentDto,
} from "@javaquets/shared";

import { getCourse } from "@/services/courses";
import {
  enroll,
  getCourseProgress,
  getEnrollments,
} from "@/services/learner";

import { ProgressBar } from "@/components/progress-bar";
import {
  ErrorState,
  LoadingState,
} from "@/components/states";

// =====================================================
// WEEK METADATA
// =====================================================

const WEEK_TITLES: Record<number, string> = {
  1: "Java Foundations",
  2: "Arrays, Strings & Problem Solving",
  3: "Object-Oriented Programming",
  4: "Advanced OOP",
  5: "Collections & Generics",
  6: "Robust & Modern Java",
  7: "Database & JDBC",
  8: "Java Mastery & Final Capstone",
};

const WEEK_DESCRIPTIONS: Record<number, string> = {
  1: "Java syntax aur programming fundamentals",
  2: "Arrays, strings aur logical problem solving",
  3: "Classes, objects aur real-world modeling",
  4: "Inheritance, abstraction aur polymorphism",
  5: "Production-style data structures",
  6: "Exceptions, files aur modern Java",
  7: "SQL, JDBC aur persistent data",
  8: "Architecture, testing aur final project",
};

function getWeekNumber(modulePosition: number) {
  return Math.ceil(modulePosition / 8);
}

function getModuleNumberInWeek(modulePosition: number) {
  return ((modulePosition - 1) % 8) + 1;
}

// =====================================================
// COURSE PAGE
// =====================================================

export default function CoursePage() {
  const slug = String(useParams().slug);

  const [course, setCourse] =
    useState<CourseDetail | null>(null);

  const [progress, setProgress] =
    useState<CourseProgressDto | null>(null);

  const [enrollment, setEnrollment] =
    useState<EnrollmentDto | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [openWeeks, setOpenWeeks] =
    useState<number[]>([]);

  // =====================================================
  // LOAD COURSE
  // =====================================================

  const load = useCallback(() => {
    setLoading(true);

    Promise.all([
      getCourse(slug),
      getEnrollments(),
    ])
      .then(async ([c, e]) => {
        setCourse(c);

        const found =
          e.find(
            (item) =>
              item.courseSlug === slug,
          ) ?? null;

        setEnrollment(found);

        if (found) {
          setProgress(
            await getCourseProgress(slug),
          );
        } else {
          setProgress(null);
        }
      })
      .catch((e) =>
        setError(
          e instanceof Error
            ? e.message
            : "Could not load course",
        ),
      )
      .finally(() =>
        setLoading(false),
      );
  }, [slug]);

  useEffect(load, [load]);

  // =====================================================
  // ENROLL
  // =====================================================

  async function join() {
    try {
      setEnrollment(
        await enroll(slug),
      );

      setProgress(
        await getCourseProgress(slug),
      );
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Enrollment failed",
      );
    }
  }

  // =====================================================
  // QUEST STATUS HELPER
  // =====================================================

  const getQuestStatus = useCallback(
    (questSlug: string) =>
      progress?.quests.find(
        (item) =>
          item.questSlug === questSlug,
      )?.status ?? "NOT_STARTED",
    [progress],
  );

  // =====================================================
  // SORT MODULES
  // =====================================================

  const sortedModules = useMemo(() => {
    if (!course) return [];

    return [...course.modules].sort(
      (a, b) =>
        a.position - b.position,
    );
  }, [course]);

  // =====================================================
  // GROUP MODULES BY WEEK
  // =====================================================

  const weeks = useMemo(() => {
    const grouped = new Map<
      number,
      typeof sortedModules
    >();

    for (const module of sortedModules) {
      const weekNumber =
        getWeekNumber(module.position);

      const existing =
        grouped.get(weekNumber) ?? [];

      existing.push(module);

      grouped.set(
        weekNumber,
        existing,
      );
    }

    return Array.from(grouped.entries())
      .sort(([a], [b]) => a - b)
      .map(
        ([
          weekNumber,
          modules,
        ]) => ({
          weekNumber,
          modules,
        }),
      );
  }, [sortedModules]);

  // =====================================================
  // FIND CURRENT QUEST / MODULE / WEEK
  // =====================================================

  const currentQuest = useMemo(() => {
    for (const module of sortedModules) {
      for (const quest of module.quests) {
        if (
          getQuestStatus(
            quest.slug,
          ) !== "COMPLETED"
        ) {
          return {
            quest,
            module,
          };
        }
      }
    }

    return null;
  }, [
    sortedModules,
    getQuestStatus,
  ]);

  const currentWeek =
    currentQuest
      ? getWeekNumber(
          currentQuest.module.position,
        )
      : weeks.at(-1)?.weekNumber ?? 1;

  // =====================================================
  // AUTO OPEN CURRENT WEEK
  // =====================================================

  useEffect(() => {
    if (weeks.length === 0) return;

    setOpenWeeks((existing) => {
      if (
        existing.includes(currentWeek)
      ) {
        return existing;
      }

      // Initial experience:
      // only current week is expanded.
      if (existing.length === 0) {
        return [currentWeek];
      }

      return [
        ...existing,
        currentWeek,
      ];
    });
  }, [
    currentWeek,
    weeks.length,
  ]);

  function toggleWeek(
    weekNumber: number,
  ) {
    setOpenWeeks((existing) =>
      existing.includes(weekNumber)
        ? existing.filter(
            (week) =>
              week !== weekNumber,
          )
        : [
            ...existing,
            weekNumber,
          ],
    );
  }

  // =====================================================
  // LOADING / ERROR
  // =====================================================

  if (loading) {
    return (
      <LoadingState label="Loading course…" />
    );
  }

  if (error && !course) {
    return (
      <ErrorState
        message={error}
        retry={load}
      />
    );
  }

  if (!course) return null;

  // =====================================================
  // CONTINUE QUEST
  // =====================================================

  const firstQuest =
    sortedModules[0]?.quests[0];

  const continueQuestSlug =
    currentQuest?.quest.slug ??
    firstQuest?.slug;

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      <Link
        className="text-sm text-slate-400"
        href="/courses"
      >
        ← All courses
      </Link>

      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* =================================================
            MAIN COURSE
        ================================================= */}

        <section>
          <p className="eyebrow">
            {course.difficulty} course
          </p>

          <h1 className="mt-3 text-4xl font-black">
            {course.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            {course.description}
          </p>

          {/* ===============================================
              WEEK GROUPS
          =============================================== */}

          <div className="mt-10 space-y-5">
            {weeks.map(
              ({
                weekNumber,
                modules,
              }) => {
                const isOpen =
                  openWeeks.includes(
                    weekNumber,
                  );

                const weekQuests =
                  modules.flatMap(
                    (module) =>
                      module.quests,
                  );

                const completedQuests =
                  weekQuests.filter(
                    (quest) =>
                      getQuestStatus(
                        quest.slug,
                      ) ===
                      "COMPLETED",
                  ).length;

                const totalQuests =
                  weekQuests.length;

                const weekPercent =
                  totalQuests === 0
                    ? 0
                    : Math.round(
                        (completedQuests /
                          totalQuests) *
                          100,
                      );

                const weekCompleted =
                  totalQuests > 0 &&
                  completedQuests ===
                    totalQuests;

                const isCurrentWeek =
                  enrollment &&
                  weekNumber ===
                    currentWeek &&
                  !weekCompleted;

                const isFutureWeek =
                  enrollment &&
                  weekNumber >
                    currentWeek;

                return (
                  <div
                    key={weekNumber}
                    className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
                  >
                    {/* =====================================
                        WEEK HEADER
                    ===================================== */}

                    <button
                      type="button"
                      onClick={() =>
                        toggleWeek(
                          weekNumber,
                        )
                      }
                      className="w-full p-6 text-left transition hover:bg-slate-800/40"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-3">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
                              Week{" "}
                              {weekNumber}
                            </p>

                            {weekCompleted && (
                              <span className="rounded-full bg-emerald-950 px-3 py-1 text-xs font-bold text-emerald-300">
                                ✓ Completed
                              </span>
                            )}

                            {isCurrentWeek && (
                              <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                                Current week
                              </span>
                            )}

                            {isFutureWeek && (
                              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                                Upcoming
                              </span>
                            )}
                          </div>

                          <h2 className="mt-2 text-2xl font-black">
                            {WEEK_TITLES[
                              weekNumber
                            ] ??
                              `Week ${weekNumber}`}
                          </h2>

                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {WEEK_DESCRIPTIONS[
                              weekNumber
                            ] ??
                              "Continue your Java learning journey."}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                            <span>
                              {
                                modules.length
                              }{" "}
                              modules
                            </span>

                            <span>
                              {
                                totalQuests
                              }{" "}
                              quests
                            </span>

                            <span>
                              {
                                completedQuests
                              }{" "}
                              completed
                            </span>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-4">
                          <div className="hidden w-32 sm:block">
                            <div className="flex items-center justify-between text-xs text-slate-400">
                              <span>
                                Progress
                              </span>

                              <span>
                                {
                                  weekPercent
                                }
                                %
                              </span>
                            </div>

                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                              <div
                                className="h-full rounded-full bg-amber-400 transition-all"
                                style={{
                                  width: `${weekPercent}%`,
                                }}
                              />
                            </div>
                          </div>

                          <span className="text-xl text-slate-400">
                            {isOpen
                              ? "⌄"
                              : "›"}
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* =====================================
                        MODULES INSIDE WEEK
                    ===================================== */}

                    {isOpen && (
                      <div className="border-t border-slate-800 p-5">
                        <div className="space-y-4">
                          {modules.map(
                            (module) => {
                              const moduleNumber =
                                getModuleNumberInWeek(
                                  module.position,
                                );

                              const moduleCompleted =
                                module.quests.length >
                                  0 &&
                                module.quests.every(
                                  (quest) =>
                                    getQuestStatus(
                                      quest.slug,
                                    ) ===
                                    "COMPLETED",
                                );

                              const isCurrentModule =
                                currentQuest
                                  ?.module
                                  .slug ===
                                module.slug;

                              return (
                                <div
                                  className={`rounded-2xl border p-5 ${
                                    isCurrentModule
                                      ? "border-amber-500/60 bg-amber-400/[0.04]"
                                      : "border-slate-800 bg-slate-950/20"
                                  }`}
                                  key={
                                    module.slug
                                  }
                                >
                                  {/* =======================
                                      MODULE HEADER
                                  ======================= */}

                                  <div className="flex items-start justify-between gap-4">
                                    <div>
                                      <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-sm font-semibold text-amber-400">
                                          Module{" "}
                                          {
                                            moduleNumber
                                          }
                                        </p>

                                        {moduleCompleted && (
                                          <span className="text-xs font-bold text-emerald-300">
                                            ✓
                                          </span>
                                        )}

                                        {isCurrentModule &&
                                          !moduleCompleted && (
                                            <span className="rounded-full bg-amber-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-300">
                                              Current
                                            </span>
                                          )}
                                      </div>

                                      <h3 className="mt-1 text-xl font-bold">
                                        {
                                          module.title
                                        }
                                      </h3>

                                      <p className="mt-2 text-sm leading-6 text-slate-400">
                                        {
                                          module.description
                                        }
                                      </p>
                                    </div>

                                    <span className="shrink-0 text-sm text-slate-500">
                                      {
                                        module
                                          .quests
                                          .length
                                      }{" "}
                                      quests
                                    </span>
                                  </div>

                                  {/* =======================
                                      QUESTS
                                  ======================= */}

                                  <div className="mt-5 space-y-2">
                                    {module.quests.map(
                                      (
                                        quest,
                                      ) => {
                                        const status =
                                          getQuestStatus(
                                            quest.slug,
                                          );

                                        return (
                                          <Link
                                            href={
                                              enrollment
                                                ? `/quests/${quest.slug}`
                                                : "#enroll"
                                            }
                                            key={
                                              quest.slug
                                            }
                                            className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 p-4 transition hover:border-slate-700 hover:bg-slate-800/50"
                                          >
                                            <div className="min-w-0">
                                              <p className="font-semibold">
                                                {
                                                  quest.title
                                                }
                                              </p>

                                              <p className="mt-1 text-sm leading-6 text-slate-400">
                                                {
                                                  quest.estimatedMinutes
                                                }{" "}
                                                min ·{" "}
                                                {
                                                  quest.description
                                                }
                                              </p>
                                            </div>

                                            <span
                                              className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                                                status ===
                                                "COMPLETED"
                                                  ? "bg-emerald-950 text-emerald-300"
                                                  : status ===
                                                      "IN_PROGRESS"
                                                    ? "bg-amber-950 text-amber-300"
                                                    : "bg-slate-800 text-slate-300"
                                              }`}
                                            >
                                              {status.replace(
                                                /_/g,
                                                " ",
                                              )}
                                            </span>
                                          </Link>
                                        );
                                      },
                                    )}
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              },
            )}
          </div>
        </section>

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside>
          <div
            id="enroll"
            className="card sticky top-24"
          >
            {enrollment ? (
              <>
                <p className="eyebrow">
                  {enrollment.status}
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Your course progress
                </h2>

                <div className="mt-6">
                  <ProgressBar
                    value={
                      progress?.percentComplete ??
                      0
                    }
                  />
                </div>

                <p className="mt-4 text-sm text-slate-400">
                  {progress?.completedQuests ??
                    0}{" "}
                  of{" "}
                  {progress?.totalQuests ??
                    0}{" "}
                  quests completed
                </p>

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Current stage
                  </p>

                  <p className="mt-2 font-semibold">
                    Week {currentWeek}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {WEEK_TITLES[
                      currentWeek
                    ] ??
                      "Java learning"}
                  </p>
                </div>

                {continueQuestSlug && (
                  <Link
                    className="btn-primary mt-6 w-full"
                    href={`/quests/${continueQuestSlug}`}
                  >
                    Continue learning
                  </Link>
                )}
              </>
            ) : (
              <>
                <p className="eyebrow">
                  Ready when you are
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Join this course
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Enrollment saves your
                  quest and exercise
                  progress.
                </p>

                <button
                  className="btn-primary mt-6 w-full"
                  onClick={join}
                >
                  Enroll free
                </button>
              </>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}