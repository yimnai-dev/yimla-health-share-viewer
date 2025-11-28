export interface SharedMedication {
  id: string;
  name: string;
  dosage: string | null;
  frequency: string | null;
  duration: string | null;
  route: string | null;
  instructions: string | null;
}

export interface SharedVisit {
  id: string;
  visit_date: string | null;
  visit_date_raw: string | null;
  facility_name: string | null;
  facility_location: string | null;
  doctor_name: string | null;
  doctor_specialty: string | null;
  reason_for_visit: string | null;
  diagnosis_summary: string | null;
  diagnosis_tags: string[] | null;
  medications_summary: string | null;
  notes: string | null;
  attachment_id: string | null;
  visit_medications: SharedMedication[] | null;
}

export interface SharePayload {
  valid: boolean;
  error?: string;
  visits?: SharedVisit[];
  includeAttachments?: boolean;
  expiresAt?: string;
  maxViews?: number | null;
  viewCount?: number | null;
  isActive?: boolean;
}

export interface ShareResultSuccess {
  ok: true;
  data: SharePayload;
}

export interface ShareResultError {
  ok: false;
  error: string;
}

export type ShareResult = ShareResultSuccess | ShareResultError;

