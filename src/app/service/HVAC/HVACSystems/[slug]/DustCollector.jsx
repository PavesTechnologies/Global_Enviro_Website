'use client';
import React from 'react';
import Image from 'next/image';

export default function DustCollectorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Dust Collector
        </h1>
        <p>
          Dust Collector is an air pollution control system designed to
          capture, filter, and remove dust, powder, particles, and other
          airborne particles generated during industrial processes. It helps
          maintain clean air, protects workers, improves product quality,
          enhance operational efficiency and ensures compliance with
          environmental and occupational safety regulations.
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
            <li>Bulk Drugs</li>
            <li>Food Processing Units</li>
            <li>Cement &amp; Mineral Processing Plants</li>
            <li>Steel &amp; Foundry Industries</li>
            <li>Chemical &amp; Fertilizer Plants</li>
            <li>Woodworking &amp; Packaging Industries</li>
            <li>Material Handling &amp; Crushing Systems</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/dust-collector.jpg"
            alt="Dust Collector"
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
            <li>High-efficiency dust filtration</li>
            <li>Collection through hoods</li>
            <li>Fine particles are captured by filter media</li>
            <li>Robust and durable construction</li>
            <li>Low maintenance operation</li>
            <li>Energy-efficient performance</li>
            <li>Compact and modular design</li>
            <li>Continuous dust collection system</li>
            <li>Easy filter cleaning and replacement</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 250 CMH to 5,000 CMH
            </li>
            <li>
              <strong>Temp:</strong> Up to 200°C with suitable filter media
            </li>
            <li>
              <strong>Types of Filters:</strong> Bag / Cartridge Type / HEPA
              Filter
            </li>
            <li>
              <strong>Types of Cleaning:</strong> Pulse Jet
            </li>
            <li>
              <strong>MOC:</strong> SS304 / SS316
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
