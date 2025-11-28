import type { SharePayload, ShareResult } from "@/types/share";
import { getSupabaseClient } from "./supabase";

const GENERIC_ERROR =
  "We couldn't load this share link. Please ask the sender to try again.";

export async function fetchShareData(token: string): Promise<ShareResult> {
  if (!token) {
    return { ok: false, error: "No share token provided." };
  }

  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.rpc("consume_shared_visits", {
      p_token: token,
    });

    if (error) {
      console.error("Failed to load share", error);
      return { ok: false, error: GENERIC_ERROR };
    }

    if (!data) {
      return { ok: false, error: "This share link could not be found." };
    }

    return { ok: true, data: data as SharePayload };
  } catch (error) {
    console.error("Unexpected share fetch error", error);
    return { ok: false, error: GENERIC_ERROR };
  }
}

