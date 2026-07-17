'use client';
import React from 'react';
import Image from 'next/image';

export default function CentrifugalFansPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Centrifugal Fans
        </h1>
        <p className="text-lg text-blue-700 font-medium mb-4">
          High-Pressure Air Moving Equipment for Process &amp; Ventilation
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            Centrifugal Fans, also called industrial blowers, use a rotating
            impeller to increase the velocity of air/gas and convert it into
            pressure. A critical component in boiler systems that pulls flue
            gases out of the furnace and pushes them up the chimney. By
            creating a negative pressure (draft) inside the boiler, it
            ensures safe operation and continuous combustion. They are
            designed for high-pressure applications where axial fans cannot
            deliver required static pressure. Used for dust collection,
            combustion air, drying, cooling, and pneumatic conveying.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Boiler ID/FD/SA fans</li>
            <li>Dust collectors</li>
            <li>Bag filters</li>
            <li>Cyclones</li>
            <li>Chemical &amp; Fertilizer Plants</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a03. Centrifugal Fans-1.jpeg"
            alt="Centrifugal Fans"
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
            <strong>High Static Pressure:</strong> Delivers 10x more pressure
            than axial fans. Essential for ducting, filters, cyclones.
          </li>
          <li>
            <strong>Multiple Blade Types:</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Backward Curved: High efficiency 80-85%, for clean air</li>
              <li>Forward Curved: Compact, low noise</li>
              <li>Radial Blade: Self-cleaning, for heavy dust/chips, Aero foil</li>
            </ul>
          </li>
          <li>
            <strong>Energy Efficient:</strong> Aerodynamically designed
            impellers with VFD option save 20-40% power.
          </li>
          <li>
            <strong>Robust Construction:</strong> Heavy-duty bearings,
            vibration isolators for 24x7 operations.
          </li>
          <li>
            <strong>Low Noise:</strong> Scroll casing and inlet cone reduce
            turbulence and noise levels.
          </li>
          <li>
            <strong>Customizable:</strong> Inlet/outlet orientation,
            spark-proof, high-temp, weatherproof options.
          </li>
          <li>
            <strong>Easy Maintenance:</strong> Split casing &amp; easy belt
            access for quick service.
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
            <strong>Temperature:</strong> Up to 300°C with suitable material
            selection
          </li>
          <li>
            <strong>Types of Impellers:</strong> Backward Curved / Forward
            Curved / Radial Blade / Aero foil
          </li>
          <li>
            <strong>Types of Drive:</strong> Direct Drive / Belt Drive /
            Coupled Drive
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
