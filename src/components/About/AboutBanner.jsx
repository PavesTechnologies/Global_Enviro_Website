"use client";

import MotionWrapper from "@/components/common/MotionWrapper";

export default function AboutBanner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 pb-20">
      {/* SVG Curve */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f9fafb"
          d="M0,32 C360,100 1080,0 1440,80 L1440,120 L0,120 Z"
        />
      </svg>

      {/* Banner Text */}
      <div className="relative container mx-auto px-6 pt-16 text-center max-w-4xl">
        <MotionWrapper
          as="h1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-blue-900 tracking-wide"
        >
          ABOUT US
        </MotionWrapper>

        <MotionWrapper
          as="h2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 text-xl md:text-2xl font-semibold text-blue-800"
        >
          Global Enviro Air Systems: Two and a Half Decades of Engineering Excellence
        </MotionWrapper>

        <MotionWrapper
          as="p"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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