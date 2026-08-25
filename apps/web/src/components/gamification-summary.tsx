"use client";

import { useCallback, useEffect, useState } from "react";
import type { GamificationDto } from "@javaquets/shared";

import { getGamification } from "@/services/gamification";
import { ProgressBar } from "@/components/progress-bar";
import { ErrorState, LoadingState } from "@/components/states";

export function GamificationSummary() {
  const [data, setData] = useState<GamificationDto | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(() => {
    setError("");

    getGamification()
      .then(setData)
      .catch((e) =>
        setError(
          e instanceof Error
            ? e.message
            : "Could not load learner stats",
        ),
      );
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  if (error) {
    return <ErrorState message={error} retry={load} />;
  }

  if (!data) {
    return <LoadingState label="Loading XP and achievements…" />;
  }

  const levelProgress = data.nextLevelXp
    ? Math.min(
        100,
        Math.round(
          (data.currentLevelXp / data.nextLevelXp) * 100,
        ),
      )
    : 0;

  const visibleAchievements = data.achievements.slice(0, 3);
  const visibleXp = data.recentXp.slice(0, 5);

  return (
    <section className="mt-6">
      {/* =================================================
          XP SUMMARY
      ================================================= */}

      <div className="grid gap-4 md:grid-cols-3">
        {/* LEVEL */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Level
              </p>

              <p className="mt-2 text-3xl font-black text-slate-100">
                {data.level}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 font-black text-amber-300">
              {data.level}
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                {data.currentLevelXp}/{data.nextLevelXp} XP
              </span>

              <span className="font-bold text-amber-300">
                {levelProgress}%
              </span>
            </div>

            <ProgressBar value={levelProgress} />
          </div>
        </div>

        {/* TOTAL XP */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Total XP
              </p>

              <p className="mt-2 text-3xl font-black text-amber-300">
                {data.totalXp.toLocaleString()}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-lg">
              ⚡
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Complete quests and exercises to keep earning XP.
          </p>
        </div>

        {/* STREAK */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Learning streak
              </p>

              <p className="mt-2 text-3xl font-black text-slate-100">
                {data.currentStreak}
                <span className="ml-2 text-base font-semibold text-slate-500">
                  days
                </span>
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-xl">
              🔥
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Longest streak:{" "}
            <span className="font-semibold text-slate-300">
              {data.longestStreak} days
            </span>
          </p>
        </div>
      </div>

      {/* =================================================
          ACHIEVEMENTS + RECENT XP
      ================================================= */}

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {/* ACHIEVEMENTS */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
            <div>
              <p className="text-sm font-bold text-slate-200">
                Achievements
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Milestones you've unlocked
              </p>
            </div>

            {data.achievements.length > 0 && (
              <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-400">
                {data.achievements.length}
              </span>
            )}
          </div>

          {visibleAchievements.length ? (
            <div className="divide-y divide-slate-800">
              {visibleAchievements.map((achievement) => (
                <div
                  key={achievement.slug}
                  className="flex items-center gap-3 px-5 py-3.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-sm text-amber-300">
                    ★
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-200">
                      {achievement.title}
                    </p>

                    <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="px-5 py-6 text-sm text-slate-500">
              Complete your first exercise to unlock an achievement.
            </p>
          )}

          {data.achievements.length > 3 && (
            <div className="border-t border-slate-800 px-5 py-3 text-xs text-slate-500">
              +{data.achievements.length - 3} more achievements unlocked
            </div>
          )}
        </div>

        {/* RECENT XP */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
            <div>
              <p className="text-sm font-bold text-slate-200">
                Recent XP
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Latest learning rewards
              </p>
            </div>

            <span className="text-xs font-semibold text-amber-300">
              XP history
            </span>
          </div>

          {visibleXp.length ? (
            <div className="divide-y divide-slate-800">
              {visibleXp.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between gap-4 px-5 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-200">
                      {event.reason}
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      {new Date(event.createdAt).toLocaleDateString(
                        undefined,
                        {
                          month: "short",
                          day: "numeric",
                        },
                      )}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-black text-amber-300">
                    +{event.amount} XP
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="px-5 py-6 text-sm text-slate-500">
              Your XP history will appear here.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
