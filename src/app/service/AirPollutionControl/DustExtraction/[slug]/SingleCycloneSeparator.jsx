'use client';
import React from 'react';
import Image from 'next/image';

export default function SingleCycloneSeparatorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Single Cyclone Separator
        </h1>
        <p className="text-lg text-blue-700 font-medium mb-1">
          Efficient Particle Separation through Powerful Centrifugal Action
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Product Overview
          </h2>
          <p>
            Single Cyclone Separators are highly efficient dust and particle
            separation systems designed to remove coarse and medium-sized
            particulate matter from air or gas streams. Using centrifugal
            force, these separators provide reliable pre-cleaning before
            filtration systems, reducing equipment wear and improving overall
            dust collection efficiency. Their simple design, low maintenance,
            and continuous operation make them ideal for various industrial
            applications.
          </p>
          <p className="mt-2 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li className="break-inside-avoid">Cement &amp; Mineral Industries</li>
            <li className="break-inside-avoid">Woodworking &amp; Sawdust Collection</li>
            <li className="break-inside-avoid">Food Processing Plants</li>
            <li className="break-inside-avoid">Boiler &amp; Furnace Systems</li>
            <li className="break-inside-avoid">Chemical &amp; Fertilizer Industries</li>
            <li className="break-inside-avoid">Material Handling Systems</li>
            <li className="break-inside-avoid">Industrial Dust Collection Applications</li>
          </ul>
        </div>

        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/a04. Single Cyclone Separator.png"
            alt="Single Cyclone Separator"
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
          <li className="break-inside-avoid">Efficient separation of dust and solid particles</li>
          <li className="break-inside-avoid">Operates without moving internal parts</li>
          <li className="break-inside-avoid">Low maintenance and long service life</li>
          <li className="break-inside-avoid">Compact and robust construction</li>
          <li className="break-inside-avoid">Handles high-temperature and high-dust-load applications</li>
          <li className="break-inside-avoid">Reduces load on downstream filtration systems</li>
          <li className="break-inside-avoid">Energy-efficient operation with continuous performance</li>
          <li className="break-inside-avoid">Available in customized capacities and configurations</li>
        </ul>
      </section>

      {/* ---------- Technical Specifications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Technical Specifications
        </h2>
        <ul className="list-disc pl-6 space-y-1 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>Capacity Range:</strong> 500 CMH to 2,00,000 CMH
          </li>
          <li className="break-inside-avoid">
            <strong>Temperature:</strong> Up to 300°C depending on
            application
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Separation:</strong> High Efficiency /
            Conventional / Tangential Entry Type
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Discharge:</strong> Rotary Airlock / Manual
            Collection / Screw Conveyor
          </li>
          <li className="break-inside-avoid">
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
