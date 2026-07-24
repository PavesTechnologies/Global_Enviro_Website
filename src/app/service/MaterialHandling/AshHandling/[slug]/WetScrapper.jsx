'use client';
import React from 'react';
import Image from 'next/image';

export default function WetScrapperPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Wet Scrapper
        </h1>
        <p>
          Wet Scrapper is major essential component in Ash handling
          equipment used to continuously remove bottom ash from coal-fired
          boiler furnaces. The scraper chain drags ash through a water
          trough, quenching it and preventing dust during disposal.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6 flex justify-center">
        <div className="relative w-full max-w-xl h-[220px] sm:h-[260px] md:h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/wet-scrapper.jpg"
            alt="Wet Scrapper"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 1 TPH to 10 TPH. Thermal Power,
            Steel, Boilers, Bottom Ash Handling
          </li>
          <li>
            <strong>Type of Application:</strong> Submerged chain conveying
            for hot bottom ash / clinker / slag quenching + discharge
          </li>
          <li>
            <strong>Temp:</strong> Up to 800°C material inlet. Water bath
            temp 60-90°C. Handles hot ash from furnace
          </li>
          <li>
            <strong>Types of Scrapper:</strong> Single Chain / Double Chain
            / Submerged / Semi-submerged / Heavy Duty
          </li>
          <li>
            <strong>Types of Chain:</strong> Forged Link
          </li>
          <li>
            <strong>MOC:</strong> IS2062
          </li>
        </ul>
      </section>
    </div>
  );
}
