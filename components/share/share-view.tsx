import { formatMetaDate, formatViews } from "@/lib/format";
import type { SharePayload } from "@/types/share";
import { VisitCard } from "./visit-card";

interface ShareViewProps {
  data: SharePayload;
}

export function ShareView({ data }: ShareViewProps) {
  const visits = data.visits ?? [];
  const expiresText = formatMetaDate(data.expiresAt);
  const viewText = formatViews(data.viewCount ?? undefined, data.maxViews ?? null);
  const includeAttachments = data.includeAttachments ?? false;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(98,127,255,0.18),_transparent_55%),_#f8fafc] pb-16">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-5">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-6 w-6">
              <path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2z" />
            </svg>
          </span>
          <div>
            <p className="text-lg font-semibold text-slate-900">Records shared with you</p>
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-600">
              {expiresText && (
                <span className="rounded-full bg-slate-100 px-3 py-1">Expires {expiresText}</span>
              )}
              {viewText && <span className="rounded-full bg-slate-100 px-3 py-1">{viewText}</span>}
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {includeAttachments ? "Attachments enabled" : "Summary only"}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 pt-10">
        <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
          <p className="text-2xl font-semibold">Get the full Yimla Health experience</p>
          <p className="mt-3 text-slate-200">
            Download the mobile app to save this record, chat with your care team, and unlock
            attachments like imaging or lab PDFs when they are included.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-slate-900 font-semibold transition hover:-translate-y-0.5"
              href="https://www.yimla.dev"
              target="_blank"
              rel="noreferrer"
            >
              Download the app
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              href="mailto:support@yimla.dev"
            >
              Need assistance?
            </a>
          </div>
        </section>

        {includeAttachments && (
          <div className="flex items-start gap-3 rounded-2xl border border-blue-200/60 bg-blue-50 px-5 py-4 text-sm text-slate-700">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-5 w-5 text-blue-500">
              <path d="M16.5 6v11a4.5 4.5 0 01-9 0V5a3 3 0 016 0v10a1.5 1.5 0 01-3 0V6H9v9a3 3 0 006 0V5a4.5 4.5 0 00-9 0v12a6 6 0 0012 0V6h-1.5z" />
            </svg>
            <p>
              Attachments were included by the sender. For secure downloads, open this link inside the
              Yimla Health app.
            </p>
          </div>
        )}

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">Shared visits</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{visits.length}</p>
          </div>
          {expiresText && (
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Expires</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{expiresText}</p>
            </div>
          )}
          {viewText && (
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Viewing status</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{viewText}</p>
            </div>
          )}
        </section>

        <section className="flex flex-col gap-5">
          {visits.map((visit) => (
            <VisitCard
              key={visit.id}
              visit={visit}
              includeAttachments={includeAttachments}
            />
          ))}
        </section>

        <p className="text-center text-sm text-slate-500">
          Questions about this share? Contact{" "}
          <a className="font-semibold text-slate-900" href="mailto:support@yimla.dev">
            support@yimla.dev
          </a>
        </p>
      </main>
    </div>
  );
}

