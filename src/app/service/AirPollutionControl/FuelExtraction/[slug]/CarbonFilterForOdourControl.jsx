'use client';
import React from 'react';
import Image from 'next/image';

export default function CarbonFilterForOdourControlPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Carbon Filter for Odour Control
        </h1>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Product Overview
          </h2>
          <p>
            Activated Carbon Filter removes odour, H₂S, mercaptans, solvents,
            and organic vapors from air/gas streams by adsorption. Microporous
            carbon granules trap odor molecules on their huge internal
            surface area. Used as final polishing stage after dust collectors
            or scrubbers where smell is the main issue.
          </p>
          <p className="mt-2 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li className="break-inside-avoid">STP odour</li>
            <li className="break-inside-avoid">ETP exhausts</li>
            <li className="break-inside-avoid">Food processing</li>
            <li className="break-inside-avoid">Pharma solvents</li>
            <li className="break-inside-avoid">Chemical fumes</li>
            <li className="break-inside-avoid">Kitchen exhaust</li>
            <li className="break-inside-avoid">Waste plants</li>
          </ul>
        </div>

        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/b02. Carbon Filter for Odour Control.jpeg"
            alt="Carbon Filter for Odour Control"
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
            <strong>High Surface Area:</strong> 1 gram of carbon = 500-1500
            m² internal area, giving huge capacity to trap odor molecules.
          </li>
          <li className="break-inside-avoid">
            <strong>Broad Spectrum:</strong> Removes 100+ compounds — H₂S,
            mercaptans, amines, aldehydes, ketones, solvents, ozone.
          </li>
          <li className="break-inside-avoid">
            <strong>No Water/Chemical:</strong> Dry process with no effluent
            or dosing pumps. Plug-and-play after commissioning.
          </li>
          <li className="break-inside-avoid">
            <strong>Low Pressure Drop:</strong> 100-150 mm wc only — can run
            with existing AHU/fan in most cases.
          </li>
          <li className="break-inside-avoid">
            <strong>Impregnated Options:</strong> KOH, KI, or KMnO₄
            impregnated carbon available for H₂S, NH₃, and formaldehyde.
          </li>
          <li className="break-inside-avoid">
            <strong>Modular Design:</strong> Multiple trays or cartridges for
            easy carbon change — no vessel entry needed.
          </li>
          <li className="break-inside-avoid">
            <strong>Polishing Stage:</strong> Achieves outlet odour &lt;2
            OU/M³ or non-detectable by human nose.
          </li>
          <li className="break-inside-avoid">
            <strong>Fire Safety:</strong> Thermal sensors and water spray for
            beds &gt;5 M³ carbon, preventing auto-ignition.
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
            <strong>Capacity Range:</strong> 500 CMH to 2,00,000 CMH
          </li>
          <li className="break-inside-avoid">
            <strong>Type of Application:</strong> Odour Control / Fume &amp;
            Gas Filtration
          </li>
          <li className="break-inside-avoid">
            <strong>Temperature:</strong> Up to 80°C to 120°C depending on
            carbon media
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Carbon Media:</strong> Activated Carbon
            Granules / Pellets / Impregnated Carbon
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Filtration:</strong> Single Bed / Multi Bed /
            Chemical Adsorption System
          </li>
          <li className="break-inside-avoid">
            <strong>MOC:</strong> Carbon Steel (IS2062) / FRP / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
