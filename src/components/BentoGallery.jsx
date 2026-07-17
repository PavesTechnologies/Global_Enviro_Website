"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const GalleryModal = dynamic(() => import("@/components/GalleryModal"), {
  ssr: false,
  loading: () => <div className="modal-loading" />,
});

export default function BentoGallery({ photos = [], onPhotoClick }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  if (!photos.length) {
    return null;
  }

  const visiblePhotos = photos.slice(0, 4);
  const remaining = photos.length - 4;
  const countClass =
    photos.length === 1
      ? "count-1"
      : photos.length === 2
        ? "count-2"
        : photos.length === 3
          ? "count-3"
          : "count-4-plus";

  return (
    <>
      <div className={`bento-gallery ${countClass}`}>
        {visiblePhotos.map((url, index) => {
          const isLast = index === 3 && remaining > 0;

          return (
            <button
              key={`${url}-${index}`}
              type="button"
              className={`bento-img${isLast ? " has-more" : ""}`}
              data-more={isLast ? `+${remaining}` : undefined}
              onClick={(event) => {
                if (onPhotoClick) {
                  event.stopPropagation();
                  onPhotoClick(index);
                  return;
                }

                setStartIndex(index);
                setModalOpen(true);
              }}
            >
              <Image src={url} alt={`Event photo ${index + 1}`} width={400} height={300} className="object-cover" loading="lazy" />
            </button>
          );
        })}
      </div>

      {modalOpen ? (
        <GalleryModal
          photos={photos}
          initialIndex={startIndex}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
    </>
  );
}
