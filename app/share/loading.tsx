export default function LoadingShareView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 text-slate-500">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-500"
        aria-hidden="true"
      />
      <p className="text-sm font-medium text-slate-600">Loading secure visit details…</p>
    </div>
  );
}

