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

/* =====================================================
   WEEK METADATA
===================================================== */

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
  7: "SQL, JDBC aur persistent applications",
  8: "Architecture, testing aur final capstone",
};

function getWeekNumber(position: number) {
  return Math.ceil(position / 8);
}

function getModuleNumber(position: number) {
  return ((position - 1) % 8) + 1;
}

/* =====================================================
   PAGE
===================================================== */

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

  const [openModules, setOpenModules] =
    useState<string[]>([]);

  /* =====================================================
     LOAD
  ===================================================== */

  const load = useCallback(() => {
    setLoading(true);
    setError("");

    Promise.all([
      getCourse(slug),
      getEnrollments(),
    ])
      .then(async ([courseData, enrollments]) => {
        setCourse(courseData);

        const found =
          enrollments.find(
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
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  useEffect(load, [load]);

  /* =====================================================
     ENROLL
  ===================================================== */

  async function join() {
    try {
      const result =
        await enroll(slug);

      setEnrollment(result);

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

  /* =====================================================
     STATUS
  ===================================================== */

  const getQuestStatus = useCallback(
    (questSlug: string) =>
      progress?.quests.find(
        (item) =>
          item.questSlug === questSlug,
      )?.status ?? "NOT_STARTED",
    [progress],
  );

  /* =====================================================
     SORT MODULES
  ===================================================== */

  const modules = useMemo(() => {
    if (!course) return [];

    return [...course.modules].sort(
      (a, b) =>
        a.position - b.position,
    );
  }, [course]);

  /* =====================================================
     GROUP BY WEEK
  ===================================================== */

  const weeks = useMemo(() => {
    const grouped = new Map<
      number,
      typeof modules
    >();

    for (const module of modules) {
      const week =
        getWeekNumber(
          module.position,
        );

      const current =
        grouped.get(week) ?? [];

      current.push(module);

      grouped.set(
        week,
        current,
      );
    }

    return Array.from(
      grouped.entries(),
    )
      .sort(([a], [b]) => a - b)
      .map(([weekNumber, weekModules]) => ({
        weekNumber,
        modules: weekModules,
      }));
  }, [modules]);

  /* =====================================================
     CURRENT QUEST
  ===================================================== */

  const currentQuest = useMemo(() => {
    for (const module of modules) {
      for (const quest of module.quests) {
        const status =
          getQuestStatus(
            quest.slug,
          );

        if (
          status !==
          "COMPLETED"
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
    modules,
    getQuestStatus,
  ]);

  const currentWeek =
    currentQuest
      ? getWeekNumber(
          currentQuest.module.position,
        )
      : weeks.at(-1)?.weekNumber ?? 1;

  /* =====================================================
     AUTO OPEN CURRENT WEEK/MODULE
  ===================================================== */

  useEffect(() => {
    if (
      weeks.length === 0
    ) {
      return;
    }

    setOpenWeeks((current) =>
      current.length === 0
        ? [currentWeek]
        : current,
    );

    if (currentQuest) {
      setOpenModules(
        (current) =>
          current.length === 0
            ? [
                currentQuest
                  .module.slug,
              ]
            : current,
      );
    }
  }, [
    currentWeek,
    currentQuest,
    weeks.length,
  ]);

  /* =====================================================
     TOGGLE HELPERS
  ===================================================== */

  function toggleWeek(
    week: number,
  ) {
    setOpenWeeks((current) =>
      current.includes(week)
        ? current.filter(
            (item) =>
              item !== week,
          )
        : [
            ...current,
            week,
          ],
    );
  }

  function toggleModule(
    moduleSlug: string,
  ) {
    setOpenModules((current) =>
      current.includes(moduleSlug)
        ? current.filter(
            (item) =>
              item !==
              moduleSlug,
          )
        : [
            ...current,
            moduleSlug,
          ],
    );
  }

  /* =====================================================
     STATES
  ===================================================== */

  if (loading) {
    return (
      <LoadingState label="Loading course…" />
    );
  }

  if (
    error &&
    !course
  ) {
    return (
      <ErrorState
        message={error}
        retry={load}
      />
    );
  }

  if (!course) {
    return null;
  }

  const firstQuest =
    modules[0]?.quests[0];

  const continueQuestSlug =
    currentQuest?.quest.slug ??
    firstQuest?.slug;

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      {/* =================================================
          BACK LINK
      ================================================= */}

      <Link
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-slate-200"
        href="/courses"
      >
        <span>←</span>
        <span>
          All courses
        </span>
      </Link>

      {/* =================================================
          HERO
      ================================================= */}

      <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="min-w-0">
          <div className="max-w-3xl">
            <p className="eyebrow">
              {course.difficulty} course
            </p>

            <h1 className="mt-3 text-balance text-4xl font-black tracking-tight sm:text-5xl">
              {course.title}
            </h1>

            <p className="mt-4 text-pretty text-base leading-8 text-slate-400 sm:text-lg">
              {course.description}
            </p>

            {/* ===========================================
                QUICK STATS
            =========================================== */}

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="badge-neutral">
                {
                  weeks.length
                }{" "}
                weeks
              </div>

              <div className="badge-neutral">
                {
                  modules.length
                }{" "}
                modules
              </div>

              <div className="badge-neutral">
                {modules.reduce(
                  (
                    total,
                    module,
                  ) =>
                    total +
                    module.quests
                      .length,
                  0,
                )}{" "}
                quests
              </div>

              {enrollment && (
                <div className="badge-warning">
                  Week{" "}
                  {currentWeek}
                </div>
              )}
            </div>
          </div>

          {/* ===============================================
              WEEK LIST
          =============================================== */}

          <div className="mt-10 space-y-4">
            {weeks.map(
              ({
                weekNumber,
                modules: weekModules,
              }) => {
                const weekOpen =
                  openWeeks.includes(
                    weekNumber,
                  );

                const quests =
                  weekModules.flatMap(
                    (module) =>
                      module.quests,
                  );

                const total =
                  quests.length;

                const completeCount =
                  quests.filter(
                    (quest) =>
                      getQuestStatus(
                        quest.slug,
                      ) ===
                      "COMPLETED",
                  ).length;

                const percent =
                  total === 0
                    ? 0
                    : Math.round(
                        (completeCount /
                          total) *
                          100,
                      );

                const completed =
                  total > 0 &&
                  completeCount ===
                    total;

                const active =
                  Boolean(
                    enrollment,
                  ) &&
                  weekNumber ===
                    currentWeek &&
                  !completed;

                const future =
                  Boolean(
                    enrollment,
                  ) &&
                  weekNumber >
                    currentWeek;

                return (
                  <article
                    key={
                      weekNumber
                    }
                    className={`overflow-hidden rounded-[22px] border transition duration-200 ${
                      active
                        ? "border-amber-400/40 bg-amber-400/[0.025]"
                        : completed
                          ? "border-emerald-900/60 bg-emerald-950/[0.08]"
                          : "border-slate-800 bg-slate-900/40"
                    }`}
                  >
                    {/* ===================================
                        WEEK BUTTON
                    =================================== */}

                    <button
                      type="button"
                      onClick={() =>
                        toggleWeek(
                          weekNumber,
                        )
                      }
                      className="w-full px-5 py-5 text-left sm:px-6 sm:py-6"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="eyebrow">
                              Week{" "}
                              {weekNumber}
                            </span>

                            {completed && (
                              <span className="badge-success">
                                ✓ Completed
                              </span>
                            )}

                            {active && (
                              <span className="badge-warning">
                                Current
                              </span>
                            )}

                            {future && (
                              <span className="badge-neutral">
                                Upcoming
                              </span>
                            )}
                          </div>

                          <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
                            {WEEK_TITLES[
                              weekNumber
                            ] ??
                              `Week ${weekNumber}`}
                          </h2>

                          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                            {WEEK_DESCRIPTIONS[
                              weekNumber
                            ] ??
                              "Continue your Java journey."}
                          </p>

                          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                            <span>
                              {
                                weekModules.length
                              }{" "}
                              modules
                            </span>

                            <span>
                              {
                                total
                              }{" "}
                              quests
                            </span>

                            <span>
                              {
                                completeCount
                              }{" "}
                              completed
                            </span>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-4">
                          <div className="hidden min-w-[120px] sm:block">
                            <div className="flex items-center justify-between text-xs text-slate-500">
                              <span>
                                Progress
                              </span>

                              <span className="font-semibold text-slate-300">
                                {
                                  percent
                                }
                                %
                              </span>
                            </div>

                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  completed
                                    ? "bg-emerald-400"
                                    : "bg-amber-400"
                                }`}
                                style={{
                                  width: `${percent}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/40 text-lg text-slate-400">
                            {weekOpen
                              ? "⌄"
                              : "›"}
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* ===================================
                        MODULES
                    =================================== */}

                    {weekOpen && (
                      <div className="border-t border-slate-800/80 px-4 py-4 sm:px-5">
                        <div className="space-y-2">
                          {weekModules.map(
                            (module) => {
                              const moduleOpen =
                                openModules.includes(
                                  module.slug,
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

                              const currentModule =
                                currentQuest
                                  ?.module
                                  .slug ===
                                module.slug;

                              const moduleQuestCount =
                                module.quests
                                  .length;

                              const moduleCompletedCount =
                                module.quests.filter(
                                  (quest) =>
                                    getQuestStatus(
                                      quest.slug,
                                    ) ===
                                    "COMPLETED",
                                ).length;

                              return (
                                <div
                                  key={
                                    module.slug
                                  }
                                  className={`overflow-hidden rounded-2xl border transition ${
                                    currentModule
                                      ? "border-amber-400/30 bg-amber-400/[0.035]"
                                      : "border-slate-800/80 bg-slate-950/20"
                                  }`}
                                >
                                  {/* =======================
                                      MODULE HEADER
                                  ======================= */}

                                  <button
                                    type="button"
                                    onClick={() =>
                                      toggleModule(
                                        module.slug,
                                      )
                                    }
                                    className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                                  >
                                    <div className="flex min-w-0 items-start gap-4">
                                      <div
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                                          moduleCompleted
                                            ? "bg-emerald-950 text-emerald-300"
                                            : currentModule
                                              ? "bg-amber-400 text-slate-950"
                                              : "bg-slate-800 text-slate-300"
                                        }`}
                                      >
                                        {moduleCompleted
                                          ? "✓"
                                          : getModuleNumber(
                                              module.position,
                                            )}
                                      </div>

                                      <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Module{" "}
                                            {getModuleNumber(
                                              module.position,
                                            )}
                                          </span>

                                          {currentModule &&
                                            !moduleCompleted && (
                                              <span className="badge-warning">
                                                Current
                                              </span>
                                            )}
                                        </div>

                                        <h3 className="mt-1 text-base font-bold text-slate-100 sm:text-lg">
                                          {
                                            module.title
                                          }
                                        </h3>

                                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
                                          {
                                            module.description
                                          }
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex shrink-0 items-center gap-3">
                                      <span className="hidden text-xs text-slate-500 sm:inline">
                                        {
                                          moduleCompletedCount
                                        }
                                        /
                                        {
                                          moduleQuestCount
                                        }
                                      </span>

                                      <span className="text-slate-500">
                                        {moduleOpen
                                          ? "⌄"
                                          : "›"}
                                      </span>
                                    </div>
                                  </button>

                                  {/* =======================
                                      QUESTS
                                  ======================= */}

                                  {moduleOpen && (
                                    <div className="border-t border-slate-800/70 p-3 sm:p-4">
                                      <div className="space-y-2">
                                        {module.quests.map(
                                          (
                                            quest,
                                            questIndex,
                                          ) => {
                                            const status =
                                              getQuestStatus(
                                                quest.slug,
                                              );

                                            const questCompleted =
                                              status ===
                                              "COMPLETED";

                                            const questInProgress =
                                              status ===
                                              "IN_PROGRESS";

                                            return (
                                              <Link
                                                key={
                                                  quest.slug
                                                }
                                                href={
                                                  enrollment
                                                    ? `/quests/${quest.slug}`
                                                    : "#enroll"
                                                }
                                                className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-slate-800 hover:bg-slate-800/40 sm:px-4"
                                              >
                                                <div
                                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                                                    questCompleted
                                                      ? "bg-emerald-950 text-emerald-300"
                                                      : questInProgress
                                                        ? "bg-amber-400 text-slate-950"
                                                        : "bg-slate-800/80 text-slate-400"
                                                  }`}
                                                >
                                                  {questCompleted
                                                    ? "✓"
                                                    : questIndex +
                                                      1}
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                  <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <p className="font-semibold text-slate-200 transition group-hover:text-white">
                                                      {
                                                        quest.title
                                                      }
                                                    </p>

                                                    <span className="text-xs text-slate-500">
                                                      {
                                                        quest.estimatedMinutes
                                                      }{" "}
                                                      min
                                                    </span>
                                                  </div>

                                                  <p className="mt-1 line-clamp-1 text-sm text-slate-500">
                                                    {
                                                      quest.description
                                                    }
                                                  </p>
                                                </div>

                                                <span
                                                  className={`hidden shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide sm:inline-flex ${
                                                    questCompleted
                                                      ? "bg-emerald-950 text-emerald-300"
                                                      : questInProgress
                                                        ? "bg-amber-400/10 text-amber-300"
                                                        : "bg-slate-800 text-slate-400"
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
                                  )}
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                );
              },
            )}
          </div>
        </section>

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="min-w-0">
          <div
            id="enroll"
            className="card sticky top-24 p-5"
          >
            {enrollment ? (
              <>
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow">
                    Your journey
                  </p>

                  <span className="badge-success">
                    Active
                  </span>
                </div>

                <h2 className="mt-3 text-xl font-black tracking-tight">
                  Course progress
                </h2>

                <div className="mt-6">
                  <ProgressBar
                    value={
                      progress?.percentComplete ??
                      0
                    }
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    Completed
                  </span>

                  <span className="font-semibold text-slate-200">
                    {progress?.completedQuests ??
                      0}
                    /
                    {progress?.totalQuests ??
                      0}
                  </span>
                </div>

                {/* =========================================
                    CURRENT STAGE
                ========================================= */}

                <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/35 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Current stage
                  </p>

                  <div className="mt-3 flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-sm font-black text-slate-950">
                      {
                        currentWeek
                      }
                    </div>

                    <div className="min-w-0">
                      <p className="font-bold">
                        Week{" "}
                        {
                          currentWeek
                        }
                      </p>

                      <p className="mt-1 text-sm leading-5 text-slate-400">
                        {WEEK_TITLES[
                          currentWeek
                        ] ??
                          "Java learning"}
                      </p>
                    </div>
                  </div>

                  {currentQuest && (
                    <div className="mt-4 border-t border-slate-800 pt-4">
                      <p className="text-xs text-slate-500">
                        Up next
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-200">
                        {
                          currentQuest
                            .quest
                            .title
                        }
                      </p>
                    </div>
                  )}
                </div>

                {continueQuestSlug && (
                  <Link
                    className="btn-primary mt-5 w-full"
                    href={`/quests/${continueQuestSlug}`}
                  >
                    Continue learning
                    <span>
                      →
                    </span>
                  </Link>
                )}
              </>
            ) : (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/10 text-xl">
                  ⚡
                </div>

                <p className="eyebrow mt-5">
                  Ready when you are
                </p>

                <h2 className="mt-2 text-xl font-black">
                  Start your Java journey
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Enrollment saves your
                  quest, exercise and
                  course progress.
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

          {/* ===============================================
              COURSE META
          =============================================== */}

          <div className="card-soft mt-4 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Learning path
            </p>

            <div className="mt-3 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">
                  Weeks
                </span>

                <span className="font-semibold">
                  {
                    weeks.length
                  }
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Modules
                </span>

                <span className="font-semibold">
                  {
                    modules.length
                  }
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Difficulty
                </span>

                <span className="font-semibold capitalize">
                  {course.difficulty.toLowerCase()}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
