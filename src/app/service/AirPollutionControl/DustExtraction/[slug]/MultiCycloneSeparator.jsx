'use client';
import React from 'react';
import Image from 'next/image';

export default function MultiCycloneSeparatorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Multi Cyclone Separator
        </h1>
        <p className="text-lg text-blue-700 font-medium mb-4">
          High-Efficiency Parallel Cyclone Battery System for Fine Dust
          Collection
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            Multi Cyclone Separator consists of multiple small-diameter
            cyclones housed in a single chamber operating in parallel. Small
            diameter creates higher centrifugal force, enabling collection of
            fine particles down to 5-10 microns with 90-95% efficiency. It
            acts as a pre-cleaner before bag filters/ESPs or as final
            collector for coarse/medium dust.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Boiler flue gas</li>
            <li>Cement plants</li>
            <li>Rice mills</li>
            <li>Plywood</li>
            <li>Thermal power</li>
            <li>Sugar mills</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a06. Multi Cyclone Separator.jpg"
            alt="Multi Cyclone Separator"
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
            <strong>Multiple Small Cyclones:</strong> 6-200 parallel tubes of
            150-400mm dia give higher &quot;g&quot; force than a single large
            cyclone. Collects finer dust.
          </li>
          <li>
            <strong>High Collection Efficiency:</strong> 90-95% for PM10.
            Reduces load on downstream bag filter by 80-90%.
          </li>
          <li>
            <strong>Low Pressure Drop:</strong> Optimized tube design keeps
            pressure drop 100-200 mmWC, saving fan power versus wet
            scrubbers.
          </li>
          <li>
            <strong>Compact Design:</strong> Handles large gas volumes in a
            small footprint versus conventional cyclones.
          </li>
          <li>
            <strong>No Moving Parts:</strong> Zero consumables. Only hopper
            discharge system needs maintenance.
          </li>
          <li>
            <strong>Abrasion Resistant:</strong> Ni-hard/ceramic liners
            available for highly erosive dust like boiler fly ash.
          </li>
          <li>
            <strong>Modular Construction:</strong> Damaged tubes can be
            plugged individually without stopping the entire unit.
          </li>
          <li>
            <strong>Dry Collection:</strong> Collected dust is dry, can be
            reused/sold. No water pollution.
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
            <strong>Capacity Range:</strong> 1,000 CMH to 3,00,000 CMH
          </li>
          <li>
            <strong>Type of Fuel:</strong> Coal, Biomass, Pet Coke, Wood
            Chips &amp; Process Dust Applications
          </li>
          <li>
            <strong>Temperature:</strong> Up to 300°C depending on design and
            lining
          </li>
          <li>
            <strong>Types of Separation:</strong> Multi Tube / High
            Efficiency / Tangential Cyclone Type
          </li>
          <li>
            <strong>Types of Discharge:</strong> Rotary Airlock / Screw
            Conveyor / Double Dump Valve
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
