import { NEWS_PHOTOS_BUCKET } from "@/lib/config";

export function getNewsPhotoUrl(path) {
  if (!path) {
    return "/assets/images/hero-section.png";
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${NEWS_PHOTOS_BUCKET}/${path}`;
}
