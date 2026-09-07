export function ProgressBar({
  value,
  label = "Progress",
}: {
  value: number | null;
  label?: string;
}) {
  const safe =
    value !== null && Number.isFinite(value)
      ? Math.max(0, Math.min(100, Math.round(value)))
      : null;
  return (
    <div className="min-w-0">
      <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm text-slate-400">
        <span>{label}</span>
        <span className="tabular-nums">
          {safe === null ? "Unavailable" : `${safe}%`}
        </span>
      </div>
      <div
        role={safe === null ? undefined : "progressbar"}
        aria-label={safe === null ? undefined : label}
        aria-valuemin={safe === null ? undefined : 0}
        aria-valuemax={safe === null ? undefined : 100}
        aria-valuenow={safe ?? undefined}
        className="h-2 overflow-hidden rounded-full bg-slate-800"
      >
        <div
          className={`h-full rounded-full ${safe === 100 ? "bg-emerald-400" : "bg-amber-400"}`}
          style={{ width: `${safe ?? 0}%` }}
        />
      </div>
    </div>
  );
}
