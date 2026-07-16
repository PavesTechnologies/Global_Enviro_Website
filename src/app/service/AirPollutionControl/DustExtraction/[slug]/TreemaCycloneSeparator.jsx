'use client';
import React from 'react';
import Image from 'next/image';

export default function TreemaCycloneSeparatorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-10">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-800">
            Treema Cyclone Separator
          </h1>
          <p>
            The Treema Cyclone Separator is a high-efficiency cyclone design
            engineered with an optimized cone geometry and inlet profile to
            deliver superior particle separation compared to conventional
            cyclones. Its refined vortex path increases residence time,
            allowing finer particulate to be captured before the air stream
            exits.
          </p>
          <p className="mt-3">
            Global Enviro manufactures Treema-type separators as compact,
            standalone dust collectors for medium-duty applications, or as an
            efficient pre-separation stage ahead of bag filters where fine
            dust loading needs to be reduced.
          </p>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a05. Treema Cyclone Separator.jpg"
            alt="Treema Cyclone Separator"
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
              <td>Fine-to-medium dust separation</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Collection Efficiency</td>
              <td>Higher than conventional single cyclones</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Footprint</td>
              <td>Compact — suited for space-constrained installations</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">MOC</td>
              <td>MS / SS304 / SS316</td>
            </tr>
            <tr>
              <td className="font-medium py-2 pr-3">Design</td>
              <td>Optimized cone geometry with extended vortex path</td>
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
          <li>Improved separation efficiency versus standard cyclones</li>
          <li>Compact footprint ideal for retrofits and spot extraction</li>
          <li>Low maintenance, no moving parts</li>
          <li>Robust fabrication for continuous industrial operation</li>
        </ul>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Applications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Standalone dust collection for line and spot extraction</li>
          <li>Pre-separator ahead of bag filters and scrubbers</li>
          <li>Cement, mineral processing, and bulk material handling plants</li>
          <li>Woodworking and agro-processing dust recovery</li>
        </ul>
      </section>
    </div>
  );
}
