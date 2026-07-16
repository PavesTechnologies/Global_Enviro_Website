'use client';
import React from 'react';
import Image from 'next/image';

export default function VenturiScrubberPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Venturi Scrubber
        </h1>
        <p>
          The Venturi Scrubber is a high-efficiency variant of Global
          Enviro&apos;s Wet Scrubber range, purpose-built to remove fine
          particulates and soluble gases from industrial exhaust streams. Gas
          is accelerated through a narrowing throat where it is atomized with
          scrubbing liquid, achieving intense gas-liquid contact for
          superior collection of sub-micron dust and mist.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            As gas velocity increases through the converging throat section,
            the scrubbing liquid is sheared into fine droplets, maximizing
            surface area for contact. This makes the Venturi Scrubber
            especially effective for high dust-loading and sub-micron
            particulate applications where standard spray or packed-bed
            scrubbers are less efficient.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Fine particulate and sub-micron dust</li>
            <li>Foundry and metallurgical fumes</li>
            <li>Boiler flue gas with high dust loading</li>
            <li>Chemical process off-gases</li>
            <li>Combustible or explosive dust streams</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/b01. Wet Scrubber.png"
            alt="Venturi Scrubber"
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
            <strong>High Collection Efficiency:</strong> Converging-diverging
            throat design delivers superior removal of fine and sub-micron
            particulates compared to conventional scrubbers.
          </li>
          <li>
            <strong>Dual Removal:</strong> Simultaneously removes particulate
            matter and absorbs gaseous pollutants such as SO₂, HCl, NH₃ and
            Cl₂.
          </li>
          <li>
            <strong>Handles Tough Dust:</strong> Effective on sticky,
            hygroscopic, or oily dust with no blinding or choking. Fire and
            explosion risk eliminated.
          </li>
          <li>
            <strong>High Temp Handling:</strong> Hot gases can be taken
            directly without pre-cooling; an integrated quenching section
            reduces temperature ahead of the throat.
          </li>
          <li>
            <strong>Corrosion Resistant:</strong> PP/FRP/rubber-lined
            construction for acidic or alkaline gas streams.
          </li>
          <li>
            <strong>Compact Footprint:</strong> Smaller installation area than
            ESPs for the same gas volume, suited to space-constrained sites.
          </li>
          <li>
            <strong>Low Maintenance:</strong> No bags or electrodes; upkeep is
            limited to the pump, spray nozzles, and pH dosing system.
          </li>
          <li>
            <strong>Adjustable Pressure Drop:</strong> Throat velocity can be
            tuned to balance collection efficiency against fan power
            consumption.
          </li>
        </ul>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 500 CMH to 3,00,000 CMH
          </li>
          <li>
            <strong>Type of Fuel:</strong> Coal, Biomass, Furnace Oil, Gas
            &amp; Chemical Process Applications
          </li>
          <li>
            <strong>Temperature:</strong> Up to 250°C depending on scrubbing
            liquid and material selection
          </li>
          <li>
            <strong>Scrubber Type:</strong> Venturi (converging-diverging
            throat)
          </li>
          <li>
            <strong>Types of Cleaning:</strong> Water Based / Chemical Based /
            Alkali Scrubbing System
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / FRP / SS304 / SS316
            (If required FRP can be done)
          </li>
        </ul>
      </section>
    </div>
  );
}
