'use client';
import React from 'react';
import Image from 'next/image';

export default function AshConditionerPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Ash Conditioner
        </h1>
        <p>
          Ash Conditioners are specialized equipment designed to mix dry ash
          with a controlled quantity of water to convert it into a moist,
          manageable form for safe handling, transportation, and disposal.
          Widely used in power plants and industrial ash handling systems,
          these units minimize dust generation, improve operational
          cleanliness, and support environmentally compliant ash
          management.
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
            <li>Thermal Power Plants</li>
            <li>Cement &amp; Mineral Industries</li>
            <li>Boiler &amp; Furnace Systems</li>
            <li>Steel &amp; Foundry Industries</li>
            <li>Waste-to-Energy Plants</li>
            <li>Industrial Ash Handling Applications</li>
            <li>Fly Ash &amp; Bottom Ash Processing Systems</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/ash-conditioner.jpg"
            alt="Ash Conditioner"
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
            <li>Efficient dust suppression during ash handling</li>
            <li>Uniform mixing of ash and water</li>
            <li>Continuous and reliable operation</li>
            <li>Reduces airborne ash pollution</li>
            <li>Robust and wear-resistant construction</li>
            <li>Low maintenance and energy-efficient design</li>
            <li>Suitable for handling dry and abrasive ash materials</li>
            <li>Customized capacities and configurations available</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 1 TPH to 10 TPH. Thermal
              Power, Fly Ash, CFBC, Incineration
            </li>
            <li>
              <strong>Type of Application:</strong> Wetting/conditioning of
              dry fly ash with water to prevent dusting during disposal
            </li>
            <li>
              <strong>Temp:</strong> Ambient to 150°C inlet ash. Discharge
              temp 40-80°C after conditioning
            </li>
            <li>
              <strong>Types of Conditioner:</strong> Twin Shaft Paddle /
              Single Shaft / Continuous / Pin Mixer Type
            </li>
            <li>
              <strong>MOC:</strong> IS2062
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
