"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { EmptyState, ErrorState, LoadingState } from "@/components/states";
import { getProblems, setProblemSolved, type DsaProblem } from "@/services/practice";

type Filter = "ALL" | DsaProblem["difficulty"];
const difficulties: Filter[] = ["ALL", "EASY", "MEDIUM", "HARD"];

export default function PracticePage() {
  const [problems, setProblems] = useState<DsaProblem[]>([]);
  const [filter, setFilter] = useState<Filter>("ALL");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const load = useCallback(() => {
    setLoading(true);
    setError("");
    getProblems().then(({ items }) => setProblems(items))
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Could not load problems"))
      .finally(() => setLoading(false));
  }, []);
  useEffect(load, [load]);
  const topics = useMemo(() => [...new Set(problems.map((p) => p.topic))].sort(), [problems]);
  const visible = problems.filter((p) => (filter === "ALL" || p.difficulty === filter) && (!topic || p.topic === topic));
  async function toggle(problem: DsaProblem) {
    setBusy(problem.slug);
    setError("");
    try {
      const result = await setProblemSolved(problem.slug, !problem.solved);
      setProblems((items) => items.map((item) => item.slug === problem.slug ? { ...item, solved: result.solved } : item));
    } catch (e) { setError(e instanceof Error ? e.message : "Could not update solved status"); }
    finally { setBusy(""); }
  }
  return <>
    <p className="eyebrow">DSA Practice</p>
    <h1 className="mt-3 text-4xl font-black">Practice problems</h1>
    <p className="mt-2 text-slate-400">Solve on HackerRank, then track your result here yourself. Solved status is self-tracked and is not verified by HackerRank.</p>
    <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by difficulty">
      {difficulties.map((value) => <button key={value} type="button" aria-pressed={filter === value}
        className={filter === value ? "btn-primary" : "btn-secondary"} onClick={() => setFilter(value)}>
        {value === "ALL" ? "All" : value[0] + value.slice(1).toLowerCase()}
      </button>)}
      {topics.length > 1 && <label className="flex items-center gap-2 text-sm text-slate-400">
        Topic <select className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">All topics</option>{topics.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>}
    </div>
    {error && <div className="mt-5"><ErrorState message={error} retry={load} /></div>}
    <div className="mt-6">
      {loading ? <LoadingState label="Loading practice problems…" /> : !error && !visible.length ?
        <EmptyState title="No problems found" body="Try another filter, or check back when problems are published." /> :
        <div className="grid gap-5 md:grid-cols-2">{visible.map((problem) => <article key={problem.slug} className="card p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2"><span className="eyebrow">{problem.topic}</span><span className="badge-neutral">{problem.difficulty[0] + problem.difficulty.slice(1).toLowerCase()}</span>
            {problem.solved && <span className="badge-success">Self-tracked solved</span>}</div>
          <h2 className="mt-5 text-2xl font-bold">{problem.title}</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary" href={problem.hackerRankUrl} target="_blank" rel="noopener noreferrer">Solve on HackerRank ↗</a>
            <button type="button" className="btn-secondary" disabled={Boolean(busy)} onClick={() => toggle(problem)}>
              {busy === problem.slug ? "Saving…" : problem.solved ? "Mark as Unsolved" : "Mark as Solved"}
            </button>
          </div>
        </article>)}</div>}
    </div>
  </>;
}
