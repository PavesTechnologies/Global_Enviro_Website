'use client';
import React from 'react';
import Image from 'next/image';

export default function CarbonFilterForOdourControlPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Carbon Filter for Odour Control
        </h1>
        <p>
          Global Enviro&apos;s Activated Carbon Filter is an adsorption
          system that removes odour, H₂S, mercaptans, solvents, and organic
          vapors from air/gas streams. Microporous carbon granules trap odor
          molecules on their huge internal surface area, making it ideal as a
          final polishing stage after dust collectors or scrubbers where
          smell is the main concern.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            Activated carbon works through adsorption, trapping odor and
            gas-phase pollutants on the vast internal surface area of its
            microporous granules. Used as a dry, plug-and-play polishing
            stage, it requires no water or chemical dosing.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>STP odour</li>
            <li>ETP exhausts</li>
            <li>Food processing</li>
            <li>Pharma solvents</li>
            <li>Chemical fumes</li>
            <li>Kitchen exhaust</li>
            <li>Waste plants</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/b02. Carbon Filter for Odour Control.jpeg"
            alt="Carbon Filter for Odour Control"
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
            <strong>High Surface Area:</strong> 1 gram of carbon = 500-1500
            m² internal area, giving huge capacity to trap odor molecules.
          </li>
          <li>
            <strong>Broad Spectrum:</strong> Removes 100+ compounds — H₂S,
            mercaptans, amines, aldehydes, ketones, solvents, ozone.
          </li>
          <li>
            <strong>No Water/Chemical:</strong> Dry process with no effluent
            or dosing pumps. Plug-and-play after commissioning.
          </li>
          <li>
            <strong>Low Pressure Drop:</strong> 100-150 mm wc only — can run
            with existing AHU/fan in most cases.
          </li>
          <li>
            <strong>Impregnated Options:</strong> KOH, KI, or KMnO₄
            impregnated carbon available for H₂S, NH₃, and formaldehyde.
          </li>
          <li>
            <strong>Modular Design:</strong> Multiple trays or cartridges for
            easy carbon change — no vessel entry needed.
          </li>
          <li>
            <strong>Polishing Stage:</strong> Achieves outlet odour &lt;2
            OU/M³ or non-detectable by human nose.
          </li>
          <li>
            <strong>Fire Safety:</strong> Thermal sensors and water spray for
            beds &gt;5 M³ carbon, preventing auto-ignition.
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
            <strong>Capacity Range:</strong> 500 CMH to 2,00,000 CMH
          </li>
          <li>
            <strong>Type of Application:</strong> Odour Control / Fume &amp;
            Gas Filtration
          </li>
          <li>
            <strong>Temperature:</strong> Up to 80°C to 120°C depending on
            carbon media
          </li>
          <li>
            <strong>Types of Carbon Media:</strong> Activated Carbon
            Granules / Pellets / Impregnated Carbon
          </li>
          <li>
            <strong>Types of Filtration:</strong> Single Bed / Multi Bed /
            Chemical Adsorption System
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / FRP / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
