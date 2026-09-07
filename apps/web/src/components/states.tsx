export function LoadingState({
  label = "Loading your workspace…",
}: {
  label?: string;
}) {
  return (
    <div role="status" className="card min-h-40 p-5 sm:p-6">
      <p className="text-sm text-slate-400">{label}</p>
      <div
        aria-hidden="true"
        className="mt-5 space-y-3 motion-safe:animate-pulse"
      >
        <div className="h-5 w-2/3 rounded bg-slate-800" />
        <div className="h-3 w-full rounded bg-slate-800" />
        <div className="h-3 w-4/5 rounded bg-slate-800" />
      </div>
    </div>
  );
}
export function ErrorState({
  message,
  retry,
}: {
  message: string;
  retry?: () => void;
}) {
  return (
    <div role="alert" className="card p-5 sm:p-6">
      <p className="font-semibold text-red-300">Something went wrong</p>
      <p className="mt-1 break-words text-sm text-slate-400">{message}</p>
      {retry && (
        <button type="button" className="btn-secondary mt-4" onClick={retry}>
          Try again
        </button>
      )}
    </div>
  );
}
export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="card px-5 py-8 text-center">
      <p className="text-xl font-bold">{title}</p>
      <p className="mx-auto mt-2 max-w-lg text-slate-400">{body}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
