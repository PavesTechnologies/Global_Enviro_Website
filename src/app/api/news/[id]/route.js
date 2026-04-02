import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log("Params received:", params);
  const { id } = await params;
  console.log("Params received:", params);

  const {
    title,
    content,
    event_date,
    is_published,
    photo_urls,
  } = await request.json();
  const { data, error } = await supabaseAdmin
    .from("news_events")
    .update({
      title,
      content,
      event_date,
      is_published,
      photo_urls,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

export async function DELETE(_request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;


  const { error } = await supabaseAdmin
    .from("news_events")
    .delete()
    .eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
