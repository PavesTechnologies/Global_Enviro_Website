"use client";

import { useReducedMotion } from "framer-motion";
import MotionWrapper from "@/components/common/MotionWrapper";

export default function AboutBanner() {
  const reduceMotion = useReducedMotion();

  // When the user prefers reduced motion, render content in its final state
  // (no offset / no fade) so nothing animates and nothing can stay hidden.
  const rise = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, delay },
        };

  return (
    <section className="relative bg-linear-to-r from-blue-100 to-blue-50 pb-8">
      {/* SVG Curve (decorative) */}
      <svg
        aria-hidden="true"
        focusable="false"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f9fafb"
          d="M0,32 C360,100 1080,0 1440,80 L1440,120 L0,120 Z"
        />
      </svg>

      {/* Banner Text */}
      <div className="relative mx-auto px-6 pt-6 text-center max-w-4xl">
        <MotionWrapper
          as="h1"
          {...rise(0)}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 tracking-wide"
        >
          ABOUT US
        </MotionWrapper>

        <MotionWrapper
          as="h2"
          {...rise(0.15)}
          className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-blue-800"
        >
          Global Enviro Air Systems: Two and a Half Decades of Engineering Excellence
        </MotionWrapper>

        <MotionWrapper
          as="p"
          {...rise(0.3)}
          className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed"
        >
          We lead the industry in air pollution control, HVAC systems, bulk material
          handling, and end-to-end industrial solutions. Our expertise spans clean room
          technology, metal castings, and global import-export operations. What sets us
          apart is our commitment to truly understanding client needs and delivering
          solutions that work. As one of the industry&apos;s most trusted names, Global Enviro
          Air Systems Pvt. Ltd. is strategically expanding across diverse sectors. We
          envision strong, sustainable growth throughout the subcontinent in the years ahead.
        </MotionWrapper>
      </div>
    </section>
  );
}
