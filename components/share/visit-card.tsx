import { formatDate } from "@/lib/format";
import type { SharedVisit } from "@/types/share";

interface VisitCardProps {
  visit: SharedVisit;
  includeAttachments: boolean;
}

export function VisitCard({ visit, includeAttachments }: VisitCardProps) {
  const diagnosisTags = visit.diagnosis_tags ?? [];
  const medications = visit.visit_medications ?? [];
  const visitDate = formatDate(visit.visit_date, visit.visit_date_raw);

  return (
    <article className="rounded-[26px] border border-slate-200 bg-white/95 px-6 py-7 shadow-xl shadow-slate-100">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {visitDate}
        </span>
        {visit.doctor_specialty && (
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            {visit.doctor_specialty}
          </span>
        )}
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-slate-900">
        {visit.facility_name ?? "Visit summary"}
      </h2>
      {visit.facility_location && (
        <p className="text-sm text-slate-500">{visit.facility_location}</p>
      )}

      {visit.doctor_name && (
        <div className="mt-4 text-sm font-medium text-slate-700">Dr. {visit.doctor_name}</div>
      )}

      {(visit.reason_for_visit || visit.diagnosis_summary) && (
        <section className="mt-6 border-t border-slate-100 pt-6" aria-label="Diagnosis summary">
          <h3 className="text-sm font-semibold text-slate-900">Reason & diagnosis</h3>
          {visit.reason_for_visit && (
            <p className="mt-2 text-sm text-slate-700">Reason: {visit.reason_for_visit}</p>
          )}
          {visit.diagnosis_summary && (
            <p className="mt-1 text-sm text-slate-700">{visit.diagnosis_summary}</p>
          )}
          {diagnosisTags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {diagnosisTags.map((tag) => (
                <span
                  className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </section>
      )}

      {(medications.length > 0 || visit.medications_summary) && (
        <section className="mt-6 border-t border-slate-100 pt-6" aria-label="Medications">
          <h3 className="text-sm font-semibold text-slate-900">Medications</h3>
          {medications.map((med) => (
            <div
              key={med.id}
              className="mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
            >
              <div className="font-semibold text-slate-900">{med.name}</div>
              <div className="text-xs text-slate-500">
                {[med.dosage, med.frequency, med.duration].filter(Boolean).join(" • ")}
              </div>
              {med.instructions && (
                <p className="mt-1 text-xs italic text-slate-600">{med.instructions}</p>
              )}
            </div>
          ))}
          {!medications.length && visit.medications_summary && (
            <p className="mt-3 text-sm text-slate-700">{visit.medications_summary}</p>
          )}
        </section>
      )}

      {visit.notes && (
        <section className="mt-6 border-t border-slate-100 pt-6" aria-label="Notes">
          <h3 className="text-sm font-semibold text-slate-900">Notes</h3>
          <p className="mt-2 text-sm text-slate-700">{visit.notes}</p>
        </section>
      )}

      {includeAttachments && visit.attachment_id && (
        <section className="mt-6 border-t border-slate-100 pt-6" aria-label="Attachments">
          <h3 className="text-sm font-semibold text-slate-900">Attachments</h3>
          <p className="mt-2 text-sm text-slate-700">
            This visit includes supplemental files. Open this link inside the Yimla Health app to view
            or download them securely.
          </p>
        </section>
      )}
    </article>
  );
}

