import { apiFetch } from "@/lib/api";

export type DsaProblem = {
  slug: string;
  title: string;
  topic: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  hackerRankUrl: string;
  solved: boolean;
};

export const getProblems = () => apiFetch<{ items: DsaProblem[] }>("/practice/problems");
export const setProblemSolved = (slug: string, solved: boolean) =>
  apiFetch<{ solved: boolean }>(`/practice/problems/${encodeURIComponent(slug)}/solved`, {
    method: solved ? "PUT" : "DELETE",
  });
