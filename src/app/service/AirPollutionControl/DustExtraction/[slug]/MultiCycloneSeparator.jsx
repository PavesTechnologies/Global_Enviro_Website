'use client';
import React from 'react';
import Image from 'next/image';

export default function MultiCycloneSeparatorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-10">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-800">
            Multi Cyclone Separator
          </h1>
          <p>
            Global Enviro&apos;s Multi Cyclone Separators arrange multiple
            small-diameter cyclone tubes in parallel within a single common
            housing. Because centrifugal force increases as cyclone diameter
            decreases, this arrangement captures finer particles at higher
            efficiency than a single large-diameter cyclone, while still
            handling large gas volumes.
          </p>
          <p className="mt-3">
            The design is widely used as a robust pre-collector ahead of bag
            filters or electrostatic precipitators, reducing the dust load
            reaching downstream fine-filtration equipment and extending its
            service life.
          </p>
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

      {/* ---------- Technical Specifications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specifications
        </h2>
        <table className="table-auto w-full text-sm border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Application</td>
              <td>High-volume flue gas and process dust dedusting</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Capacity Range</td>
              <td>Up to 5,00,000 CMH (modular, multiple tubes in parallel)</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Operating Temp</td>
              <td>Up to 400°C</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">MOC</td>
              <td>MS / SS304 / SS316 / IS2062</td>
            </tr>
            <tr>
              <td className="font-medium py-2 pr-3">Design</td>
              <td>Multiple small-diameter cyclone tubes in a common shell</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------- Key Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Higher collection efficiency for finer particulate than single cyclones</li>
          <li>Handles large gas volumes in a compact common housing</li>
          <li>No moving parts, low operating cost, minimal maintenance</li>
          <li>Withstands high operating temperatures and abrasive dust</li>
        </ul>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Applications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Boiler flue gas pre-dedusting</li>
          <li>Pre-collector ahead of bag filters / ESPs</li>
          <li>Cement, mineral processing, and power plant applications</li>
          <li>High-temperature process gas cleaning</li>
        </ul>
      </section>
    </div>
  );
}
