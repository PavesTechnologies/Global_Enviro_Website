'use client';
import React from 'react';
import Image from 'next/image';

export default function WetScrubberPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Wet Scrubber
        </h1>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Product Overview
          </h2>
          <p>
            Wet Scrubber is an air pollution control system that removes
            particulates and soluble gases from industrial exhaust streams
            by contacting dirty gas with a scrubbing liquid, typically
            water. It handles sticky, corrosive, high-temperature, and
            explosive dusts where dry collectors like bag filters are
            unsuitable.
          </p>
          <p className="mt-2 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li className="break-inside-avoid">Chemical fumes</li>
            <li className="break-inside-avoid">Acid mists</li>
            <li className="break-inside-avoid">Foundry dust</li>
            <li className="break-inside-avoid">Boiler flue gas</li>
            <li className="break-inside-avoid">Odorous gases</li>
            <li className="break-inside-avoid">Combustible dusts</li>
          </ul>
        </div>

        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/b01. Wet Scrubber.png"
            alt="Wet Scrubber"
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
            <strong>Dual Removal:</strong> Simultaneously removes particulate
            matter and absorbs gaseous pollutants like SO₂, HCl, NH₃ and Cl₂.
          </li>
          <li className="break-inside-avoid">
            <strong>Handles Tough Dust:</strong> No blinding or choking with
            sticky, hygroscopic, or oily dust. Fire/explosion risk eliminated.
          </li>
          <li className="break-inside-avoid">
            <strong>High Temp Handling:</strong> Hot gases directly taken
            without pre-cooling. Quenching section reduces temperature before
            main scrubbing.
          </li>
          <li className="break-inside-avoid">
            <strong>Corrosion Resistant:</strong> PP/FRP/rubber lining used
            for acidic or alkaline gases. No corrosion issues like in bag
            filters.
          </li>
          <li className="break-inside-avoid">
            <strong>Compact Design:</strong> Lower footprint than ESPs for the
            same gas volume. Suitable for space constraints.
          </li>
          <li className="break-inside-avoid">
            <strong>Low Maintenance:</strong> No bags or electrodes to
            replace. Only pump, nozzles, and pH dosing need attention.
          </li>
          <li className="break-inside-avoid">
            <strong>Turndown Capability:</strong> Can operate at 50-110% of
            design flow with stable efficiency.
          </li>
          <li className="break-inside-avoid">
            <strong>Byproduct Recovery:</strong> Scrubbing liquid can be
            treated to recover product or neutralize for safe disposal.
          </li>
        </ul>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>Capacity Range:</strong> 500 CMH to 3,00,000 CMH
          </li>
          <li className="break-inside-avoid">
            <strong>Type of Fuel:</strong> Coal, Biomass, Furnace Oil, Gas
            &amp; Chemical Process Applications
          </li>
          <li className="break-inside-avoid">
            <strong>Temperature:</strong> Up to 250°C depending on scrubbing
            liquid and material selection
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Scrubber:</strong> Venturi Type / Packed Bed /
            Spray Tower / Cyclonic Scrubber
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Cleaning:</strong> Water Based / Chemical Based /
            Alkali Scrubbing System
          </li>
          <li className="break-inside-avoid">
            <strong>MOC:</strong> Carbon Steel (IS2062) / FRP / SS304 / SS316
            (If required FRP can be done)
          </li>
        </ul>
      </section>
    </div>
  );
}
