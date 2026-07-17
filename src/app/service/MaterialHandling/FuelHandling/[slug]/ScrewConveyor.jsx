'use client';
import React from 'react';
import Image from 'next/image';

export default function ScrewConveyorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Screw Conveyor
        </h1>
        <p>
          Screw Conveyors are versatile material handling systems designed
          for the smooth transportation of powders, granules, semi-solid
          materials, and bulk solids. Using a rotating helical screw inside
          a trough or tubular casing, these conveyors provide controlled,
          dust-free, and efficient material movement for various industrial
          applications. Their compact design and reliable operation make
          them ideal for both horizontal and inclined conveying.
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
            <li>Cement &amp; Mineral Industries</li>
            <li>Food Processing Plants</li>
            <li>Chemical &amp; Fertilizer Industries</li>
            <li>Pharmaceutical Applications</li>
            <li>Waste &amp; Ash Handling Systems</li>
            <li>Packaging &amp; Manufacturing Units</li>
            <li>Bulk Material Transfer Applications</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/screw-conveyor.jpg"
            alt="Screw Conveyor"
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
            <li>Smooth and continuous material conveying</li>
            <li>Suitable for powders, granules, and semi-solid materials</li>
            <li>Compact and space-saving design</li>
            <li>Enclosed construction for dust-free operation</li>
            <li>Handles horizontal, inclined, and vertical conveying</li>
            <li>Durable and low-maintenance construction</li>
            <li>Customizable lengths, diameters, and capacities</li>
            <li>Energy-efficient and reliable performance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 0.5 TPH to 100 TPH. Power,
              Cement, Chemicals, Food, ETP/STP
            </li>
            <li>
              <strong>Type of Application:</strong> Horizontal/Inclined
              conveying of Ash, Cement, Lime, Sludge, Grains, Powder
            </li>
            <li>
              <strong>Temp:</strong> Ambient to 150°C. Up to 250°C with
              special flight/seal design
            </li>
            <li>
              <strong>Types of Conveyor:</strong> U-Trough / Tubular /
              Shaftless / Inclined / Hanger Type
            </li>
            <li>
              <strong>Types of Screw:</strong> Helical / Sectional / Ribbon
              / Paddle / Cut Flight / Tapered
            </li>
            <li>
              <strong>MOC:</strong> MS Fabricated / SS304 / SS316 / Lined
              MS. Trough: MS/SS. Flights: MS/SS/Hard faced
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
