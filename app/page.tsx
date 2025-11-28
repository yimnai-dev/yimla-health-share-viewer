export default function Home() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(105,146,255,0.25),_transparent_60%),_#f8fafc] px-4 py-16">
      <div className="w-full max-w-3xl rounded-[32px] bg-white px-8 py-12 shadow-2xl sm:px-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          Yimla Health
        </span>
        <h1 className="mt-6 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
          Secure, patient-approved access to medical summaries
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          When someone shares their Yimla Health visit with you, the link opens
          on this site. Use the official mobile app for the best viewing
          experience, attachments, and encrypted history.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            href="https://www.yimla.dev"
            target="_blank"
            rel="noreferrer"
          >
            Get the YimlaHealth App
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900/20"
            href="mailto:support@yimla.dev"
          >
            Contact support
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Share links look like{" "}
          <span className="font-semibold text-slate-700">
            https://health.yimla.dev/share/&lt;token&gt;
          </span>
          . Paste it into your browser to view the record, or open it directly
          on your phone.
        </p>
      </div>
    </section>
  );
}
