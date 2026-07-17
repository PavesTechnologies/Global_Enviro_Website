import NewsGalleryList from "@/components/news/NewsGalleryList";
import { getPublishedNews } from "@/lib/queries/news";

export const dynamic = "force-dynamic";

export default async function NewsAndEventsPage() {
  let items = [];

  try {
    items = await getPublishedNews();
  } catch {
    items = [];
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-16">
      <h1 className="mb-12 text-center text-4xl font-bold text-blue-900">
        News & Events
      </h1>
      <NewsGalleryList items={items} />
    </div>
  );
}
