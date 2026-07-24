'use client';
import React from 'react';
import Image from 'next/image';

export default function CrusherCumScreenPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Crusher Cum Screen
        </h1>
        <p>
          Crusher Cum Screen units are compact and efficient systems
          designed to perform both crushing and screening operations in a
          single integrated setup. These machines reduce material size and
          simultaneously separate particles according to required
          specifications, improving productivity, reducing handling stages,
          and optimizing space utilization in industrial processing
          applications.
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
            <li>Sand &amp; Aggregate Processing</li>
            <li>Recycling &amp; Waste Management Units</li>
            <li>Chemical &amp; Fertilizer Industries</li>
            <li>Mining &amp; Quarry Operations</li>
            <li>Bulk Material Handling Systems</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/crusher-cum-screen.jpg"
            alt="Crusher Cum Screen"
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
            <li>Combined crushing and screening in one unit</li>
            <li>High operational efficiency with reduced processing time</li>
            <li>Compact and space-saving design</li>
            <li>Uniform particle size output with effective separation</li>
            <li>Continuous and reliable operation</li>
            <li>Robust construction for heavy-duty applications</li>
            <li>Reduced material handling and maintenance requirements</li>
            <li>Available in customized capacities and configurations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 1 TPH to 50 TPH. Coal,
              Limestone, Ore, Aggregates, Mining
            </li>
            <li>
              <strong>Type of Application:</strong> Combined crushing +
              sizing in single unit for Power, Cement, Steel plants
            </li>
            <li>
              <strong>Temp:</strong> Ambient to 120°C. Up to 150°C with heat
              resistant screen media
            </li>
            <li>
              <strong>Types of Unit:</strong> Impact Type / Ring Granulator
              Type
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
