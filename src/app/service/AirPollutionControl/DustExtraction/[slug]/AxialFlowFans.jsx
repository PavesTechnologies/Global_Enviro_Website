'use client';
import React from 'react';
import Image from 'next/image';

export default function AxialFlowFansPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Axial Flow Fans
        </h1>
        <p className="text-lg text-blue-700 font-medium mb-1">
          High-Volume, Low-Pressure Air Moving Equipment for Ventilation &amp;
          Cooling
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Product Overview
          </h2>
          <p>
            Axial Flow Fans move air/gas parallel to the fan axis using a
            propeller-type impeller. They deliver large air volumes at low
            static pressure with minimum power consumption. Best suited for
            general ventilation and exhaust applications where system
            resistance is low.
          </p>
          <p className="mt-2 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li className="break-inside-avoid">Factory ventilation</li>
            <li className="break-inside-avoid">Heat exchangers</li>
            <li className="break-inside-avoid">Transformers</li>
            <li className="break-inside-avoid">Tunnel ventilation</li>
            <li className="break-inside-avoid">Warehouse exhaust</li>
          </ul>
        </div>

        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/a08. Axial Flow Fans.jpeg"
            alt="Axial Flow Fans"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Key Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>High Air Volume:</strong> Moves 3-5x more air than a
            centrifugal fan of the same motor HP at low pressure.
          </li>
          <li className="break-inside-avoid">
            <strong>Compact &amp; Lightweight:</strong> Straight-through
            design needs less space. Easy wall/roof mounting.
          </li>
          <li className="break-inside-avoid">
            <strong>Low Power Consumption:</strong> High efficiency 70-80% at
            best efficiency point for ventilation duty.
          </li>
          <li className="break-inside-avoid">
            <strong>Multiple Configurations:</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li className="break-inside-avoid">Tube Axial: Fan in cylindrical housing for duct mounting</li>
              <li className="break-inside-avoid">Propeller: Free air delivery, wall mounted exhaust</li>
            </ul>
          </li>
          <li className="break-inside-avoid">
            <strong>Reversible Option:</strong> 100% airflow in both
            directions for supply/exhaust mode.
          </li>
          <li className="break-inside-avoid">
            <strong>Low Maintenance:</strong> Direct drive models have no
            belts. External rotor has sealed bearings.
          </li>
          <li className="break-inside-avoid">
            <strong>Corrosion Resistant:</strong> FRP/PP fans for chemical
            fumes, cooling towers, STP plants.
          </li>
          <li className="break-inside-avoid">
            <strong>Low Noise Options:</strong> Aerofoil blades, 6-12 blades
            reduce noise versus 3-4 blade models.
          </li>
        </ul>
      </section>

      {/* ---------- Technical Specifications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Technical Specifications
        </h2>
        <ul className="list-disc pl-6 space-y-1 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>Capacity Range:</strong> 1,000 CMH to 50,000 CMH
          </li>
          <li className="break-inside-avoid">
            <strong>Temperature:</strong> Up to 300°C with suitable blade
            material
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Drive:</strong> Direct Drive / Belt Drive
          </li>
          <li className="break-inside-avoid">
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
