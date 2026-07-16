"use client";
import MotionWrapper from "@/components/common/MotionWrapper";
import LazyAnimatePresence from "@/components/common/LazyAnimatePresence";
import { X } from "lucide-react";

export default function ImageLightbox({ src, alt, onClose }) {
  return (
    <LazyAnimatePresence>
      {src && (
        <MotionWrapper
          as="div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 bg-black/85 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={28} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </MotionWrapper>
      )}
    </LazyAnimatePresence>
  );
}
