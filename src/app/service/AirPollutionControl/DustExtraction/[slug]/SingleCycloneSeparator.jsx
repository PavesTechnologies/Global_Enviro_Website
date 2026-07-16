'use client';
import React from 'react';
import Image from 'next/image';

export default function SingleCycloneSeparatorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-10">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-800">
            Single Cyclone Separator
          </h1>
          <p>
            Global Enviro&apos;s Single Cyclone Separators use centrifugal
            force to remove bulk dust and coarse particulate matter from air
            or gas streams. With no moving parts, they offer a rugged,
            low-maintenance first stage of separation ahead of secondary
            filtration systems such as bag filters.
          </p>
          <p className="mt-3">
            Dust-laden air enters tangentially near the top of the cyclone
            body, creating a high-speed vortex. Centrifugal force throws the
            heavier particles outward against the cone wall, where they spiral
            downward into the collection hopper, while cleaned air exits
            through the central outlet pipe.
          </p>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a04. Single Cyclone Separator.png"
            alt="Single Cyclone Separator"
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
              <td>Bulk dust / pre-separation of particulate matter</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Collection Efficiency</td>
              <td>Up to 90% for coarse particles (&gt;10 microns)</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Capacity Range</td>
              <td>Up to 1,00,000 CMH</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">MOC</td>
              <td>MS / SS304 / SS316</td>
            </tr>
            <tr>
              <td className="font-medium py-2 pr-3">Design</td>
              <td>Tangential or axial inlet, conical hopper base</td>
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
          <li>No moving parts — minimal maintenance and long service life</li>
          <li>Handles high dust loading and abrasive materials with ease</li>
          <li>Simple, rugged construction for continuous industrial duty</li>
          <li>Ideal as a pre-cleaner ahead of bag filters or scrubbers</li>
          <li>Low pressure drop compared to fine filtration systems</li>
        </ul>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Applications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Pre-cleaning stage for pneumatic conveying systems</li>
          <li>Wood waste, saw dust, and agro-waste collection</li>
          <li>Bulk powder and granule recovery</li>
          <li>Cement, mineral, and mining process dust separation</li>
          <li>Protecting downstream bag filters from coarse dust overload</li>
        </ul>
      </section>
    </div>
  );
}
