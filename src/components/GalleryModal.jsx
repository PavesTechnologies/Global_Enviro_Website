"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function GalleryModal({ photos, initialIndex, onClose }) {
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
        className="gallery-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="gallery-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          x
        </button>

        <div className="gallery-modal-counter">
          {current + 1} / {photos.length}
        </div>

        <div className="gallery-modal-image-wrap relative w-full h-[60vh]">
          <Image
            key={current}
            src={photos[current]}
            alt={`Photo ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="gallery-modal-image object-contain"
            priority={false}
          />
        </div>

        {photos.length > 1 ? (
          <>
            <button
              type="button"
              className="gallery-modal-arrow left"
              onClick={prev}
              aria-label="Previous"
            >
              {"<"}
            </button>
            <button
              type="button"
              className="gallery-modal-arrow right"
              onClick={next}
              aria-label="Next"
            >
              {">"}
            </button>
          </>
        ) : null}

        {photos.length > 1 ? (
          <div className="gallery-modal-dots">
            {photos.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`gallery-modal-dot${index === current ? " active" : ""}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
