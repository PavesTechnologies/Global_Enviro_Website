"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function NewsDetailModal({ item, photos, initialIndex = 0, onClose }) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrent((value) => (value - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setCurrent((value) => (value + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const handler = (event) => {
      if (event.key === "ArrowLeft") {
        prev();
      }

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [next, onClose, prev]);

  return (
    <div className="gallery-modal-backdrop" onClick={onClose}>
      <div
        className="news-detail-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="news-detail-modal-media">
          <button
            type="button"
            className="news-detail-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            x
          </button>

          <div className="news-detail-modal-counter">
            {current + 1} / {photos.length}
          </div>

          <Image
            key={current}
            src={photos[current]}
            alt={`Photo ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-contain"
            priority={false}
          />

          {photos.length > 1 ? (
            <>
              <button
                type="button"
                className="news-detail-modal-arrow left"
                onClick={prev}
                aria-label="Previous"
              >
                {"<"}
              </button>
              <button
                type="button"
                className="news-detail-modal-arrow right"
                onClick={next}
                aria-label="Next"
              >
                {">"}
              </button>
            </>
          ) : null}

          {photos.length > 1 ? (
            <div className="news-detail-modal-dots">
              {photos.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`news-detail-modal-dot${index === current ? " active" : ""}`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="news-detail-modal-body">
          <h2 className="mb-2 text-2xl font-semibold text-blue-800">
            {item.title}
          </h2>
          <p className="mb-4 text-sm text-gray-500">
            {item.event_date
              ? new Date(item.event_date).toLocaleDateString()
              : "Upcoming"}
          </p>
          <p className="whitespace-pre-wrap text-sm text-gray-700">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}
