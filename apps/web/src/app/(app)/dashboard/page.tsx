"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { CourseProgressDto, EnrollmentDto } from "@javaquets/shared";
import { useAuth } from "@/features/auth/auth-context";
import { getCourseProgress, getEnrollments } from "@/services/learner";
import { ProgressBar } from "@/components/progress-bar";
import { EmptyState, ErrorState, LoadingState } from "@/components/states";
import { GamificationSummary } from "@/components/gamification-summary";

type Item = { enrollment: EnrollmentDto; progress: CourseProgressDto | null };

export default function Dashboard() {
  const { user } = useAuth();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const load = useCallback(() => {
    setLoading(true);
    setError("");
    getEnrollments()
      .then(async (enrollments) => {
        setItems(
          await Promise.all(
            enrollments.map(async (enrollment) => ({
              enrollment,
              progress: await getCourseProgress(enrollment.courseSlug).catch(
                () => null,
              ),
            })),
          ),
        );
      })
      .catch((e) =>
        setError(e instanceof Error ? e.message : "Could not load dashboard"),
      )
      .finally(() => setLoading(false));
  }, []);
  useEffect(load, [load]);

  const completedCourses = items.filter(
    (item) => item.enrollment.status === "COMPLETED",
  ).length;
  const activeCourses = items.length - completedCourses;
  const missingProgress = items.some((item) => !item.progress);
  const averageProgress = missingProgress
    ? null
    : items.length
      ? Math.round(
          items.reduce(
            (sum, item) => sum + (item.progress?.percentComplete ?? 0),
            0,
          ) / items.length,
        )
      : 0;
  const continueItem = items
    .filter((item) => item.enrollment.status === "ACTIVE")
    .sort(
      (a, b) =>
        (b.progress?.percentComplete ?? 0) - (a.progress?.percentComplete ?? 0),
    )[0];
  const firstName = user?.displayName?.trim().split(/\s+/)[0] || "learner";

  return (
    <div>
      <section className="border-b border-slate-800 pb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">Learner workspace</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Good to see you, {firstName}.
            </h1>
            <p className="mt-3 max-w-2xl text-slate-400">
              Pick up where you left off and build your Java skills one quest at
              a time.
            </p>
          </div>
          <Link className="btn-secondary shrink-0 self-start" href="/courses">
            Explore courses <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <section className="card p-5 sm:p-6" aria-labelledby="continue-heading">
          <p className="eyebrow">Continue learning</p>
          <h2 id="continue-heading" className="mt-2 text-xl font-bold">
            Your next step
          </h2>
          <div className="mt-5">
            {loading ? (
              <LoadingState label="Finding your next lesson…" />
            ) : error ? (
              <ErrorState message={error} retry={load} />
            ) : continueItem ? (
              <>
                <span className="badge-warning">In progress</span>
                <h3 className="mt-3 text-2xl font-bold">
                  {continueItem.enrollment.courseTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {continueItem.progress
                    ? `${continueItem.progress.completedQuests} of ${continueItem.progress.totalQuests} quests completed`
                    : "Your saved progress is temporarily unavailable."}
                </p>
                <div className="mt-5">
                  <ProgressBar
                    value={continueItem.progress?.percentComplete ?? null}
                    label="Course progress"
                  />
                </div>
                <Link
                  href={`/courses/${continueItem.enrollment.courseSlug}`}
                  className="btn-primary mt-5 w-full sm:w-auto"
                >
                  Continue learning <span aria-hidden="true">→</span>
                </Link>
              </>
            ) : (
              <div className="py-3">
                <h3 className="text-lg font-bold">
                  {items.length
                    ? "All your courses are complete"
                    : "Start your first Java course"}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {items.length
                    ? "Revisit your learning below or explore another path."
                    : "Enroll in a learning path to start tracking your progress."}
                </p>
                <Link className="btn-primary mt-5" href="/courses">
                  Browse courses
                </Link>
              </div>
            )}
          </div>
        </section>
        <section className="card p-5 sm:p-6" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-xl font-bold">
            Learning overview
          </h2>
          {loading ? (
            <div className="mt-5">
              <LoadingState label="Loading learning overview…" />
            </div>
          ) : error ? (
            <p className="mt-5 text-slate-400">
              Your learning overview is unavailable. Retry loading your
              workspace.
            </p>
          ) : (
            <>
              <dl className="mt-5 divide-y divide-slate-800">
                <StatRow label="Active courses" value={activeCourses} />
                <StatRow label="Completed courses" value={completedCourses} />
              </dl>
              <div className="mt-5">
                <ProgressBar value={averageProgress} label="Average progress" />
              </div>
              {missingProgress && (
                <div role="status" className="mt-4 text-sm text-slate-400">
                  <p>Some progress could not be loaded.</p>
                  <button
                    type="button"
                    className="btn-secondary mt-3"
                    onClick={load}
                  >
                    Retry progress
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      <GamificationSummary />

      <section
        id="enrollments"
        className="mt-8"
        aria-labelledby="courses-heading"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="courses-heading" className="text-2xl font-bold">
            Your courses
          </h2>
          {!loading && !error && items.length > 0 && (
            <span className="badge-neutral">
              {items.length} {items.length === 1 ? "course" : "courses"}
            </span>
          )}
        </div>
        <div className="mt-4">
          {loading ? (
            <LoadingState />
          ) : error ? (
            <p className="text-slate-400">
              Your courses will appear when the workspace reloads.
            </p>
          ) : !items.length ? (
            <EmptyState
              title="Your learning path starts here"
              body="Enroll in a course to see its quests and progress here."
              action={
                <Link className="btn-primary" href="/courses">
                  Browse courses
                </Link>
              }
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {items.map(({ enrollment, progress }) => (
                <Link
                  href={`/courses/${enrollment.courseSlug}`}
                  key={enrollment.courseSlug}
                  className="card card-hover p-5 sm:p-6"
                >
                  <span
                    className={
                      enrollment.status === "COMPLETED"
                        ? "badge-success"
                        : "badge-neutral"
                    }
                  >
                    {enrollment.status === "COMPLETED"
                      ? "Completed"
                      : "Enrolled"}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">
                    {enrollment.courseTitle}
                  </h3>
                  <div className="mt-5">
                    <ProgressBar
                      value={progress?.percentComplete ?? null}
                      label="Course progress"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4 text-sm">
                    <span className="text-slate-400">
                      {progress
                        ? `${progress.completedQuests} / ${progress.totalQuests} quests completed`
                        : "Progress temporarily unavailable"}
                    </span>
                    <span className="font-semibold">
                      {enrollment.status === "COMPLETED"
                        ? "Review course"
                        : "Open course"}{" "}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
function StatRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-3 py-4">
      <dt className="text-sm text-slate-400">{label}</dt>
      <dd className="text-2xl font-bold tabular-nums">{value}</dd>
    </div>
  );
}
