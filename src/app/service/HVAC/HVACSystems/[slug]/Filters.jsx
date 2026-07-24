'use client';
import React from 'react';
import Image from 'next/image';

export default function FiltersPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Filters (Pre, Fine &amp; HEPA)
        </h1>
        <p>
          Pre-filters and fine filters are air filtration components used in
          HVAC systems, cleanrooms, and air handling units (AHUs) to remove
          airborne particles and improve indoor air quality. They are often
          installed in stages, with pre-filters protecting downstream fine
          filters and high-efficiency filters. A pre-filter is the first
          stage of filtration that captures larger particles from the
          incoming air stream and fine filter is the second-stage filter
          that removes smaller airborne particles not captured by the
          pre-filter.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p className="font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>AHUs &amp; HVAC systems</li>
            <li>Pharmaceutical industries</li>
            <li>Hospitals &amp; laboratories</li>
            <li>Food processing plants</li>
            <li>Commercial buildings</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/filter-hepa.jpg"
            alt="Filters (Pre, Fine & HEPA)"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Application Gallery ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Built for Every Application
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/hvac-projects/filter-pre.jpg"
                alt="Pre-Filter"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/hvac-projects/filter-fine.jpg"
                alt="Fine Filter"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Key Features & Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improved indoor air quality</li>
            <li>Lower maintenance costs</li>
            <li>Extended HEPA filter life</li>
            <li>Better HVAC system performance</li>
            <li>High filtration efficiency</li>
            <li>Low pressure drop</li>
            <li>Multi-stage filtration system</li>
            <li>Washable/reusable options</li>
            <li>Compact and lightweight design</li>
            <li>Easy installation and replacement</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Types of Filters:</strong> HEPA / Fine-Filters / Pre
              Filters / Fresh Air Filters
            </li>
            <li>
              <strong>Types of Efficiency:</strong> 0.3 Microns / 5 Microns /
              10 Microns / 20 Microns
            </li>
            <li>
              <strong>Filter Media:</strong> Fiber glass / Polyster
              Synthetic Media with Two Layers of HDPE
            </li>
            <li>
              <strong>MOC:</strong> Galvanized Steel with Powder Coated /
              Aluminium
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
