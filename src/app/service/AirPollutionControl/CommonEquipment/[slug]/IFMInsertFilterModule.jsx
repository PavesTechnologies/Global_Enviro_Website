'use client';
import React from 'react';
import Image from 'next/image';

export default function IFMInsertFilterModulePage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          IFM (Insert Filter Module)
        </h1>
        <p>
          Global Enviro&apos;s Insert Filter Module (IFM) is a compact dust
          collection system designed to control airborne dust generated
          during material transfer, storage, and processing operations. It is
          installed directly on silos, bins, hoppers, conveyors, or enclosed
          process equipment to capture dust at the source.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            The unit ensures effective filtration, cleaner working
            conditions, reduced emissions, and compliance with environmental
            standards. It is commonly used in cement, power, mining,
            chemical, and bulk material handling industries.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              Dust extraction at transfer points, hoppers, silos, and
              enclosed material handling systems
            </li>
            <li>
              Industries handling powdery materials like cement, fly ash,
              coal dust, minerals, and chemicals
            </li>
            <li>
              Maintaining clean air and reducing particulate emissions in
              plant areas
            </li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/dust collector.png"
            alt="IFM (Insert Filter Module)"
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
          <li>Compact design for easy integration into existing systems.</li>
          <li>
            High-efficiency filter cartridges/bags for fine dust collection.
          </li>
          <li>Continuous dust removal with pulse jet cleaning mechanism.</li>
          <li>Low maintenance and easy filter replacement.</li>
          <li>
            Heavy-duty steel construction with corrosion-resistant finish.
          </li>
          <li>Suitable for indoor and outdoor industrial applications.</li>
        </ul>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 500 CMH to 5,000 CMH
          </li>
          <li>
            <strong>Type of Application:</strong> Modular Dust Collection /
            Fume Extraction / Process Filtration Systems
          </li>
          <li>
            <strong>Temperature:</strong> Up to 150°C with suitable filter
            media
          </li>
          <li>
            <strong>Types of Filter Media:</strong> Polyester / PTFE Coated /
            Nomex / Cartridge Filters
          </li>
          <li>
            <strong>Types of Cleaning:</strong> Pulse Jet Automatic Cleaning
            System
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
