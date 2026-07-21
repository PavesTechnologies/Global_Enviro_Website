'use client';
import React from 'react';
import Image from 'next/image';

export default function CrusherImpactHammerMillPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Crusher (Impact Hammer Mill)
        </h1>
        <p>
          Impact Hammer Mill Crushers are heavy-duty crushing machines
          designed for the efficient reduction of bulk materials into
          smaller, uniform particle sizes. Utilizing high-speed rotating
          hammers and impact forces, these crushers deliver high crushing
          efficiency, reliable performance, and consistent output for a wide
          range of industrial applications.
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
            <li>Cement &amp; Mineral Industries</li>
            <li>Coal &amp; Power Plants</li>
            <li>Chemical &amp; Fertilizer Industries</li>
            <li>Recycling &amp; Waste Processing Units</li>
            <li>Food &amp; Agro Processing Applications</li>
            <li>Mining &amp; Aggregate Industries</li>
            <li>Bulk Material Handling Systems</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/crusher-impact-hammer-mill.jpg"
            alt="Crusher (Impact Hammer Mill)"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Key Features & Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>High crushing efficiency with uniform output size</li>
            <li>Robust and heavy-duty construction</li>
            <li>Suitable for brittle and medium-hard materials</li>
            <li>High-speed rotor with durable hammer design</li>
            <li>Adjustable output particle size control</li>
            <li>Continuous and reliable operation</li>
            <li>Easy maintenance and replacement of wear parts</li>
            <li>Available in multiple capacities and configurations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 5 TPH to 200 TPH. Coal,
              Limestone, Minerals, Biomass, Aggregates
            </li>
            <li>
              <strong>Type of Application:</strong> Size reduction / Primary
              / Secondary crushing for Power, Cement, Mining
            </li>
            <li>
              <strong>Temp:</strong> Ambient to 150°C. Handles hot clinker up
              to 180°C with special MOC
            </li>
            <li>
              <strong>Types of Crusher:</strong> Impactor / Hammer Mill
              (Reversible / Non-Reversible)
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
