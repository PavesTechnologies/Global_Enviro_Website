'use client';
import React from 'react';
import Image from 'next/image';

export default function SingleCycloneSeparatorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Single Cyclone Separator
        </h1>
        <p className="text-lg text-blue-700 font-medium mb-4">
          Efficient Particle Separation through Powerful Centrifugal Action
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
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
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Cement &amp; Mineral Industries</li>
            <li>Woodworking &amp; Sawdust Collection</li>
            <li>Food Processing Plants</li>
            <li>Boiler &amp; Furnace Systems</li>
            <li>Chemical &amp; Fertilizer Industries</li>
            <li>Material Handling Systems</li>
            <li>Industrial Dust Collection Applications</li>
          </ul>
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

      {/* ---------- Key Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Efficient separation of dust and solid particles</li>
          <li>Operates without moving internal parts</li>
          <li>Low maintenance and long service life</li>
          <li>Compact and robust construction</li>
          <li>Handles high-temperature and high-dust-load applications</li>
          <li>Reduces load on downstream filtration systems</li>
          <li>Energy-efficient operation with continuous performance</li>
          <li>Available in customized capacities and configurations</li>
        </ul>
      </section>

      {/* ---------- Technical Specifications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specifications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 500 CMH to 2,00,000 CMH
          </li>
          <li>
            <strong>Temperature:</strong> Up to 300°C depending on
            application
          </li>
          <li>
            <strong>Types of Separation:</strong> High Efficiency /
            Conventional / Tangential Entry Type
          </li>
          <li>
            <strong>Types of Discharge:</strong> Rotary Airlock / Manual
            Collection / Screw Conveyor
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
