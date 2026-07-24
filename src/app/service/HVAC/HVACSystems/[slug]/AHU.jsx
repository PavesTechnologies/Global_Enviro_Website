'use client';
import React from 'react';
import Image from 'next/image';

export default function AHUPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          AHUs (Air Handling Units)
        </h1>
        <p>
          Air Handling Unit (AHU) is a central component of an HVAC (Heating,
          Ventilation, and Air Conditioning) system that conditions and
          circulates air throughout a building. It is designed to provide
          clean, comfortable, and controlled indoor air by filtering,
          heating, cooling, humidifying, or dehumidifying the air before
          distributing it to occupied spaces.
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
            <li>Clean Rooms</li>
            <li>Space Centers</li>
            <li>Nuclear Power Plants</li>
            <li>Electronic / Energy and Infrastructure Sectors</li>
            <li>Solar Panel Production Plants</li>
            <li>Commercial Buildings</li>
            <li>Hospitals</li>
            <li>Food Processing Plants</li>
            <li>Industrial Ventilation Systems</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/ahu.jpg"
            alt="AHUs (Air Handling Units)"
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
            <li>High Airflow Efficiency</li>
            <li>Improved indoor air quality</li>
            <li>Multi-stage Air Filtration (Pre + Fine + HEPA Filters)</li>
            <li>Reduced airborne contamination</li>
            <li>Low Noise Operation</li>
            <li>Modular Construction</li>
            <li>Energy-efficient Fans and Motors</li>
            <li>Cooling &amp; Heating Coil Integration</li>
            <li>Temperature and Humidity Control Options</li>
            <li>Compliance with HVAC and cleanroom standards</li>
            <li>Easy Maintenance Access Panels</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Type of Application:</strong> Air Conditioning /
              Ventilation / Clean Room / Industrial Air Handling Systems
            </li>
            <li>
              <strong>Type of Air Handling:</strong> Re-Circulation Unit /
              Ventilation Unit / Exhaust Unit
            </li>
            <li>
              <strong>Temp:</strong> Suitable for Ambient to 20°C to 28°C
              based on Air Handling Applications
            </li>
            <li>
              <strong>Types of Filters:</strong> Pre Filter / Fine Filter /
              HEPA Filter
            </li>
            <li>
              <strong>Types of Configuration:</strong> Double Skin / Single
              Skin / Horizontal / Vertical AHU / Double Decker
            </li>
            <li>
              <strong>MOC:</strong> GI (Pre-Coated Outer Skin &amp; Inner
              Plain)
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
