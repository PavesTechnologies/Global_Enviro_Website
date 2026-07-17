import { supabaseAdmin } from "@/lib/supabase/server";

export async function getPublishedNews() {
  const { data, error } = await supabaseAdmin
    .from("news_events")
    .select("*")
    .eq("is_published", true)
    .order("event_date", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
