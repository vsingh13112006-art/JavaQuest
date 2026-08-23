"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { QuestDetail } from "@javaquets/shared";

import { getQuest } from "@/services/quests";
import { getCourse } from "@/services/courses";
import { QuestWorkspace } from "@/components/quest-workspace";
import { ErrorState, LoadingState } from "@/components/states";

export default function QuestPage() {
  const slug = String(useParams().slug);

  const [quest, setQuest] = useState<QuestDetail | null>(null);
  const [nextQuestSlug, setNextQuestSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const currentQuest = await getQuest(slug);
      setQuest(currentQuest);

      const course = await getCourse(currentQuest.module.courseSlug);

      const orderedQuests = [...course.modules]
        .sort((a, b) => a.position - b.position)
        .flatMap((module) =>
          [...module.quests].sort((a, b) => a.position - b.position),
        );

      const currentIndex = orderedQuests.findIndex(
        (item) => item.slug === currentQuest.slug,
      );

      const nextQuest =
        currentIndex >= 0 ? orderedQuests[currentIndex + 1] : undefined;

      setNextQuestSlug(nextQuest?.slug ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load quest");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    void load();
  }, [load]);

  if (loading) {
    return <LoadingState label="Loading quest workspace…" />;
  }

  if (error) {
    return <ErrorState message={error} retry={load} />;
  }

  return quest ? (
    <QuestWorkspace
      quest={quest}
      nextQuestSlug={nextQuestSlug}
    />
  ) : null;
}