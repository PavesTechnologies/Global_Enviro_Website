import { supabaseAdmin } from "@/lib/supabase/server";

export async function getActiveJobs() {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
