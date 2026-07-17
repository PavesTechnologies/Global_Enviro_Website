"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import BentoGallery from "@/components/BentoGallery";
import { getNewsPhotoUrl } from "@/lib/newsPhotos";

const NewsDetailModal = dynamic(
  () => import("@/components/news/NewsDetailModal"),
  { ssr: false }
);

export default function NewsGalleryList({ items }) {
  const [activeItem, setActiveItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const images = item.photo_urls?.length
          ? item.photo_urls.map((photo) => getNewsPhotoUrl(photo))
          : [getNewsPhotoUrl(null)];

        const openDetail = (index = 0) => {
          setActiveItem(item);
          setActiveIndex(index);
        };

        return (
          <article
            key={item.id}
            className="news-card news-card-clickable overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
            onClick={() => openDetail(0)}
          >
            <BentoGallery photos={images} onPhotoClick={openDetail} />

            <div className="news-card-body p-6">
              <h2 className="mb-2 text-xl font-semibold text-blue-800">
                {item.title}
              </h2>
              <p className="mb-3 text-sm text-gray-500">
                {item.event_date
                  ? new Date(item.event_date).toLocaleDateString()
                  : "Upcoming"}
              </p>
              <p className="news-card-preview text-sm text-gray-700">
                {item.content}
              </p>
            </div>
          </article>
        );
      })}

      {activeItem ? (
        <NewsDetailModal
          item={activeItem}
          photos={
            activeItem.photo_urls?.length
              ? activeItem.photo_urls.map((photo) => getNewsPhotoUrl(photo))
              : [getNewsPhotoUrl(null)]
          }
          initialIndex={activeIndex}
          onClose={() => setActiveItem(null)}
        />
      ) : null}
    </div>
  );
}
