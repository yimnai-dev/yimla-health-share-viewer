interface ShareErrorProps {
  title?: string;
  message: string;
}

export function ShareError({
  title = "This link is no longer available",
  message,
}: ShareErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,107,157,0.12),_transparent_45%),_#f8fafc] px-4 py-16">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-rose-500">
          <svg viewBox="0 0 24 24" role="img" className="h-8 w-8">
            <path d="M11.001 10h2v5h-2zm0 7h2v2h-2z" />
            <path d="M21 19H3L12 4zm-3.47-1L12 7.29 6.47 18z" />
          </svg>
        </div>
        <p className="mt-6 text-2xl font-semibold text-slate-900">{title}</p>
        <p className="mt-3 text-sm text-slate-600">{message}</p>
        <div className="mt-8 flex flex-col gap-3">
          <a
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
            href="mailto:support@yimla.health"
          >
            Contact support
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
            href="https://www.yimla.health"
            target="_blank"
            rel="noreferrer"
          >
            Learn about Yimla Health
          </a>
        </div>
      </div>
    </div>
  );
}

