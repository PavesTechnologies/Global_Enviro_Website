export const DEFAULT_JOB_LOCATION =
  process.env.NEXT_PUBLIC_DEFAULT_JOB_LOCATION || "Hyderabad, Telangana";

export const DEFAULT_JOB_TYPE =
  process.env.NEXT_PUBLIC_DEFAULT_JOB_TYPE || "Full-time";

export const RESUMES_BUCKET =
  process.env.NEXT_PUBLIC_SUPABASE_RESUMES_BUCKET || "resumes";

export const NEWS_PHOTOS_BUCKET =
  process.env.NEXT_PUBLIC_SUPABASE_NEWS_PHOTOS_BUCKET || "news-photos";

export const APPLICATION_RESUME_URL_TTL_SECONDS = Number(
  process.env.APPLICATION_RESUME_URL_TTL_SECONDS || 900
);

export const DEFAULT_ADMIN_NOTIFICATION_EMAIL =
  process.env.DEFAULT_ADMIN_NOTIFICATION_EMAIL || "admin@globalenviro.in";

export const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "no-reply@globalenviro.in";
