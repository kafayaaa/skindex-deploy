import { supabase } from "@/lib/supabase";
import { AnalysisDetailDB } from "@/types/Skin";

export async function getAnalysisDetail(
  photoId: number
): Promise<AnalysisDetailDB> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  const { data, error } = await supabase
    .from("analysis_interpretations")
    .select(
      `
      id,
      user_id,
      photo_id,
      severity,
      intro_text,
      concerns,
      recommendations,
      generated_at
    `
    )
    .eq("user_id", user.id)
    .eq("photo_id", photoId)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
