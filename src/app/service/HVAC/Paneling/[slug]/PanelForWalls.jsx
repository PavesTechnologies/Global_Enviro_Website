'use client';
import React from 'react';
import Image from 'next/image';

export default function PanelForWallsPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Panel for Walls, Partitions &amp; Ceiling
        </h1>
        <p>
          Clean Room Panels are prefabricated wall and ceiling panels used to
          construct cleanrooms and controlled environments. We provide
          smooth, non-shedding, easy-to-clean surfaces that help maintain
          cleanliness, hygiene, and environmental control in industries such
          as pharmaceuticals, biotechnology, electronics, healthcare,
          manufacturing Industries, and food processing. Manufactured with
          high-density PUF insulation between pre-coated, powder coated GI
          sheets, Stainless Steel Sheets, these panels provide superior
          thermal insulation, structural strength, airtight sealing, and
          clean room compatibility. We ensure fast installation, reduced
          energy consumption, and long-lasting performance in controlled
          environments. We meet cleanroom and GMP requirements.
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
            <li>Pharmaceutical Industries</li>
            <li>Clean room Facilities</li>
            <li>Laboratories &amp; Healthcare Facilities</li>
            <li>HVAC &amp; Controlled Environment Applications</li>
            <li>Food Processing Industries</li>
            <li>Cold Storage &amp; Refrigerated Rooms</li>
            <li>Warehouses &amp; Industrial Buildings</li>
            <li>Modular Offices &amp; Portable Cabins</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/panel-1.jpg"
            alt="Panel for Walls, Partitions & Ceiling"
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
        <div className="grid md:grid-cols-3 gap-6">
          {[2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div className="text-center" key={n}>
              <div className="relative w-full h-[220px]">
                <Image
                  src={`/assets/images/hvac-projects/panel-${n}.jpg`}
                  alt={`Clean Room Panel View ${n}`}
                  fill
                  className="object-contain rounded-lg shadow-md"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">
                Clean Room Panel Installation
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Key Features & Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Excellent thermal insulation with high energy efficiency</li>
            <li>Core materials like Puf Insulation, Rockwool</li>
            <li>Light weight yet strong construction</li>
            <li>Quick &amp; easy installation with modular design</li>
            <li>Hygienic, dust-free, and easy-to-clean surfaces</li>
            <li>Fire-retardant and moisture-resistant options available</li>
            <li>Air-tight joints for temperature-controlled areas</li>
            <li>Corrosion-resistant pre-coated metal finish</li>
            <li>Low maintenance with long service life</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Panel Thickness:</strong> 50 mm, 80 mm and 100 mm
              Panels
            </li>
            <li>
              <strong>Type of Application:</strong> Clean Room Walls /
              Office Partitions / Cold Rooms / False Ceiling Systems
            </li>
            <li>
              <strong>Types of Infill:</strong> PUF / Rockwool
            </li>
            <li>
              <strong>Skin Finish:</strong> PPGI / Powder Coated / SS Finish
              Panels
            </li>
            <li>
              <strong>Skin MOC:</strong> Pre Painted Galvanized Steel (PPGI)
              / GI Sheet (Powder Coated) / SS304 / SS316
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
