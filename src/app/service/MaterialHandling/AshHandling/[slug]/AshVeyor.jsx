'use client';
import React from 'react';
import Image from 'next/image';

export default function AshVeyorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Ash Veyor</h1>
        <p>
          Ash Veyor systems are specialized pneumatic conveying solutions
          designed for the efficient handling and transportation of fly
          ash, bottom ash, and other fine particulate materials generated
          in industrial and power plant operations. Engineered for
          dust-free and continuous operation, these systems ensure safe
          material transfer with minimal maintenance and environmental
          impact.
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
            <li>Thermal Power Plants</li>
            <li>Cement Industries</li>
            <li>Boiler &amp; Furnace Systems</li>
            <li>Steel &amp; Foundry Industries</li>
            <li>Waste-to-Energy Plants</li>
            <li>Industrial Ash Handling Applications</li>
            <li>Bulk Powder Conveying Systems</li>
          </ul>
        </div>

        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/ash-veyor.jpg"
            alt="Ash Veyor"
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
            <li>Efficient pneumatic ash conveying system</li>
            <li>Dust-free and environmentally safe operation</li>
            <li>Handles fine and abrasive ash materials effectively</li>
            <li>Low maintenance with reliable continuous performance</li>
            <li>Reduced material spillage and handling losses</li>
            <li>Energy-efficient conveying technology</li>
            <li>Suitable for long-distance ash transfer</li>
            <li>
              Customizable capacities and system configurations available
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 1 TPH to 10 TPH. Thermal
              Power, Incineration, Boilers, CFBC
            </li>
            <li>
              <strong>Type of Application:</strong> Dense phase pneumatic
              conveying of Bottom Ash / Fly Ash / Bed Ash
            </li>
            <li>
              <strong>Temp:</strong> Ambient to 300°C. Up to 400°C with
              refractory lined vessel &amp; high temp dome valves
            </li>
            <li>
              <strong>Types of System:</strong> Single Vessel
            </li>
            <li>
              <strong>Types of Conveying:</strong> Positive Pressure /
              Vacuum / Combination. Long distance up to 500m+
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
