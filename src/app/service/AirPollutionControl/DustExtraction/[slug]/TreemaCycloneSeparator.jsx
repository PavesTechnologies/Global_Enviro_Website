'use client';
import React from 'react';
import Image from 'next/image';

export default function TreemaCycloneSeparatorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Treema Cyclone Separator
        </h1>
        <p className="text-lg text-blue-700 font-medium mb-4">
          High-Efficiency Multi-Cyclone Dust Collection System
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            Treema Cyclone Separator is a high-efficiency, multi-stage
            centrifugal dust collector designed to remove 95-99% of coarse
            and fine particulate matter from industrial exhaust gas streams.
            Using twin or quad cyclones in series, it achieves higher
            separation efficiency than conventional single cyclones without
            filters or water.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Cement &amp; Mineral Processing Plants</li>
            <li>Pharmaceutical Industries</li>
            <li>Food Processing Units</li>
            <li>Steel &amp; Foundry Industries</li>
            <li>Chemical &amp; Fertilizer Plants</li>
            <li>Woodworking &amp; Packaging Industries</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a05. Treema Cyclone Separator.jpg"
            alt="Treema Cyclone Separator"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Key Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Multi-Cyclone Design:</strong> Two or more high-efficiency
            Treema cyclones in series for cumulative 99% efficiency on fine
            dust.
          </li>
          <li>
            <strong>No Filter Media:</strong> Zero consumables. No bags,
            cartridges, or cloth to replace.
          </li>
          <li>
            <strong>Constant Airflow:</strong> Performance doesn&apos;t
            degrade due to clogging like bag filters.
          </li>
          <li>
            <strong>Low Maintenance:</strong> No moving parts inside cyclone
            body. Only periodic hopper emptying needed.
          </li>
          <li>
            <strong>Compact Footprint:</strong> Higher efficiency in smaller
            space versus conventional cyclones.
          </li>
          <li>
            <strong>Customizable:</strong> Designed per your gas flow, dust
            load, temperature, and space.
          </li>
          <li>
            <strong>Dry Collection:</strong> No water, no sludge disposal.
            Collected dust can be recycled/reused.
          </li>
          <li>
            <strong>High Temperature Ready:</strong> Suitable for boiler flue
            gas and hot process exhaust.
          </li>
        </ul>
      </section>

      {/* ---------- Technical Specifications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specifications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 500 CMH to 3,00,000 CMH
          </li>
          <li>
            <strong>Type of Fuel:</strong> Coal, Biomass, Wood, Pet Coke
          </li>
          <li>
            <strong>Temperature:</strong> Up to 300°C depending on
            application
          </li>
          <li>
            <strong>Types of Cleaning:</strong> Centrifugal Separation (No
            moving parts)
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
