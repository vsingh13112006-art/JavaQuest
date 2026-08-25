"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  CourseProgressDto,
  EnrollmentDto,
} from "@javaquets/shared";

import { useAuth } from "@/features/auth/auth-context";
import {
  getCourseProgress,
  getEnrollments,
} from "@/services/learner";

import { ProgressBar } from "@/components/progress-bar";
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/components/states";

import { GamificationSummary } from "@/components/gamification-summary";

type Item = {
  enrollment: EnrollmentDto;
  progress: CourseProgressDto | null;
};

export default function Dashboard() {
  const { user } = useAuth();

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // LOAD DASHBOARD
  // =====================================================

  const load = useCallback(() => {
    setLoading(true);
    setError("");

    getEnrollments()
      .then(async (enrollments) => {
        const result = await Promise.all(
          enrollments.map(
            async (enrollment) => ({
              enrollment,
              progress: await getCourseProgress(
                enrollment.courseSlug,
              ).catch(() => null),
            }),
          ),
        );

        setItems(result);
      })
      .catch((e) =>
        setError(
          e instanceof Error
            ? e.message
            : "Could not load dashboard",
        ),
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(load, [load]);

  // =====================================================
  // DERIVED STATS
  // =====================================================

  const completedCourses = useMemo(
    () =>
      items.filter(
        (item) =>
          item.enrollment.status === "COMPLETED",
      ).length,
    [items],
  );

  const activeCourses =
    items.length - completedCourses;

  const averageProgress =
    items.length > 0
      ? Math.round(
          items.reduce(
            (total, item) =>
              total +
              (item.progress?.percentComplete ?? 0),
            0,
          ) / items.length,
        )
      : 0;

  // =====================================================
  // CONTINUE LEARNING COURSE
  // =====================================================

  const continueItem = useMemo(() => {
    const active = items
      .filter(
        (item) =>
          item.enrollment.status !== "COMPLETED",
      )
      .sort(
        (a, b) =>
          (b.progress?.percentComplete ?? 0) -
          (a.progress?.percentComplete ?? 0),
      );

    return active[0] ?? null;
  }, [items]);

  const firstName =
    user?.displayName?.split(" ")[0] ?? "learner";

  return (
    <div className="mx-auto w-full max-w-[1450px]">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-7 sm:px-8 sm:py-9">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">
              Learner workspace
            </p>

            <h1 className="mt-3 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Good to see you, {firstName}.
            </h1>

            <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-slate-400">
              Pick up where you left off and keep building your Java skills one quest at a time.
            </p>
          </div>

          <Link
            className="btn-secondary shrink-0"
            href="/courses"
          >
            Explore courses
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* =================================================
          GAMIFICATION
      ================================================= */}

      <div className="mt-5">
        <GamificationSummary />
      </div>

      {/* =================================================
          TOP GRID
      ================================================= */}

      <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
        {/* ===============================================
            CONTINUE LEARNING
        =============================================== */}

        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
          <div className="border-b border-slate-800 px-6 py-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="eyebrow">
                  Continue learning
                </p>

                <h2 className="mt-2 text-xl font-black tracking-tight text-white">
                  Your next step
                </h2>
              </div>

              {continueItem && (
                <span className="badge-warning">
                  In progress
                </span>
              )}
            </div>
          </div>

          <div className="p-6">
            {loading ? (
              <LoadingState label="Finding your next lesson…" />
            ) : error ? (
              <ErrorState
                message={error}
                retry={load}
              />
            ) : continueItem ? (
              <>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Current course
                    </p>

                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-100">
                      {continueItem.enrollment.courseTitle}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {
                        continueItem.progress
                          ?.completedQuests ?? 0
                      }{" "}
                      of{" "}
                      {
                        continueItem.progress
                          ?.totalQuests ?? 0
                      }{" "}
                      quests completed
                    </p>
                  </div>

                  <div className="shrink-0 rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-center">
                    <p className="text-xs text-slate-500">
                      Progress
                    </p>

                    <p className="mt-1 text-2xl font-black text-amber-300">
                      {
                        continueItem.progress
                          ?.percentComplete ?? 0
                      }
                      %
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <ProgressBar
                    value={
                      continueItem.progress
                        ?.percentComplete ?? 0
                    }
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-slate-500">
                    Continue from your current course position.
                  </p>

                  <Link
                    href={`/courses/${continueItem.enrollment.courseSlug}`}
                    className="btn-primary"
                  >
                    Continue learning
                    <span>→</span>
                  </Link>
                </div>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-xl">
                  ⚡
                </div>

                <h3 className="mt-4 text-lg font-black text-slate-200">
                  Start your first Java course
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Enroll in a learning path and your current progress will appear here.
                </p>

                <Link
                  className="btn-primary mt-5"
                  href="/courses"
                >
                  Browse courses
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ===============================================
            PROGRESS SUMMARY
        =============================================== */}

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="eyebrow">
            Your progress
          </p>

          <h2 className="mt-2 text-xl font-black text-white">
            Learning overview
          </h2>

          <div className="mt-6 space-y-3">
            <StatRow
              label="Active courses"
              value={activeCourses}
            />

            <StatRow
              label="Completed courses"
              value={completedCourses}
            />

            <StatRow
              label="Average progress"
              value={`${averageProgress}%`}
            />
          </div>

          <div className="mt-6 border-t border-slate-800 pt-5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-500">
                Overall learning progress
              </span>

              <span className="font-bold text-slate-200">
                {averageProgress}%
              </span>
            </div>

            <div className="mt-3">
              <ProgressBar value={averageProgress} />
            </div>
          </div>
        </section>
      </div>

      {/* =================================================
          MY LEARNING
      ================================================= */}

      <section
        id="enrollments"
        className="mt-10"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              My learning
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Your courses
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Track every enrolled learning path from one place.
            </p>
          </div>

          {!loading && items.length > 0 && (
            <span className="badge-neutral">
              {items.length}{" "}
              {items.length === 1
                ? "course"
                : "courses"}
            </span>
          )}
        </div>

        <div className="mt-5">
          {loading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState
              message={error}
              retry={load}
            />
          ) : items.length === 0 ? (
            <EmptyState
              title="Your learning path starts here"
              body="Enroll in a course to see its quests and progress on this dashboard."
              action={
                <Link
                  className="btn-primary"
                  href="/courses"
                >
                  Browse courses
                </Link>
              }
            />
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {items.map(
                ({
                  enrollment,
                  progress,
                }) => {
                  const completed =
                    enrollment.status ===
                    "COMPLETED";

                  return (
                    <Link
                      href={`/courses/${enrollment.courseSlug}`}
                      key={
                        enrollment.courseSlug
                      }
                      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition duration-200 hover:border-slate-700 hover:bg-slate-900/80"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <span
                              className={
                                completed
                                  ? "badge-success"
                                  : "badge-warning"
                              }
                            >
                              {
                                enrollment.status
                              }
                            </span>

                            <h3 className="mt-3 text-xl font-black tracking-tight text-slate-100 transition group-hover:text-white">
                              {
                                enrollment.courseTitle
                              }
                            </h3>
                          </div>

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/50 text-slate-500 transition group-hover:text-amber-300">
                            →
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="mb-2 flex items-center justify-between text-xs">
                            <span className="text-slate-500">
                              Course progress
                            </span>

                            <span className="font-bold text-slate-300">
                              {
                                progress?.percentComplete ??
                                0
                              }
                              %
                            </span>
                          </div>

                          <ProgressBar
                            value={
                              progress?.percentComplete ??
                              0
                            }
                          />
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4 text-sm">
                          <span className="text-slate-500">
                            Completed quests
                          </span>

                          <span className="font-semibold text-slate-200">
                            {
                              progress?.completedQuests ??
                              0
                            }
                            /
                            {
                              progress?.totalQuests ??
                              0
                            }
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                },
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// =====================================================
// STAT ROW
// =====================================================

function StatRow({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/30 px-4 py-4">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="text-xl font-black text-slate-100">
        {value}
      </span>
    </div>
  );
}
