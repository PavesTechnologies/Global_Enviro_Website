'use client';
import React from 'react';
import Image from 'next/image';

export default function DenseVeyorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Dense Veyor
        </h1>
        <p>
          Dense Veyor systems are advanced dense phase pneumatic conveying
          solutions designed for the controlled transportation of bulk
          powders and granular materials at low velocity and high pressure.
          These systems minimize material degradation, pipeline wear, and
          dust generation while ensuring energy-efficient and reliable
          conveying over long distances.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p className="font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Cement &amp; Fly Ash Handling Plants</li>
            <li>Power Generation Industries</li>
            <li>Chemical &amp; Fertilizer Plants</li>
            <li>Food &amp; Pharmaceutical Industries</li>
            <li>Mineral &amp; Bulk Material Processing Units</li>
            <li>Ash Handling Systems</li>
            <li>Pneumatic Material Transfer Applications</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/dense-veyor.jpg"
            alt="Dense Veyor"
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
            <li>Low-velocity dense phase conveying technology</li>
            <li>Minimal material degradation and segregation</li>
            <li>Dust-free and environmentally safe operation</li>
            <li>Reduced pipeline wear and maintenance costs</li>
            <li>Energy-efficient material transfer</li>
            <li>Suitable for long-distance conveying applications</li>
            <li>Fully enclosed and automated system operation</li>
            <li>Handles abrasive, fragile, and fine materials efficiently</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 1 TPH to 10 TPH. Power,
              Cement, Steel, Fly Ash, Cement, Lime
            </li>
            <li>
              <strong>Type of Application:</strong> Pneumatic dense phase
              conveying of fine/dry bulk solids over long distance
            </li>
            <li>
              <strong>Temp:</strong> Ambient to 150°C. Up to 250°C with
              special dome valve &amp; pipeline
            </li>
            <li>
              <strong>Types of System:</strong> Single Vessel / Twin Vessel
              / Continuous / Batch / Multi-point Discharge
            </li>
            <li>
              <strong>Types of Valve:</strong> Dome Valve
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
