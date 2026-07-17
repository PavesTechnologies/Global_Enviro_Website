'use client';
import React from 'react';
import Image from 'next/image';

export default function PulseJetBagFilterPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Pulse Jet Bag Filter
        </h1>
        <p className="text-lg text-blue-700 font-medium mb-4">
          High-Efficiency Dust Collection for Cleaner &amp; Safer Operations
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            Pulse Jet Bag Filters are advanced dust collection systems
            designed to capture and remove fine dust particles from
            industrial air streams. These systems use fabric filter bags
            combined with compressed air pulse cleaning technology to ensure
            continuous and efficient filtration. Widely used in process
            industries, they help maintain clean air, improve workplace
            safety, and comply with environmental standards.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Cement &amp; Mineral Processing Plants</li>
            <li>Pharmaceutical Industries</li>
            <li>Food Processing Units</li>
            <li>Steel &amp; Foundry Industries</li>
            <li>Chemical &amp; Fertilizer Plants</li>
            <li>Woodworking &amp; Packaging Industries</li>
            <li>Material Handling &amp; Crushing Systems</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a01. Pulsejet Bag Filter for Boiler.jpg"
            alt="Pulse Jet Bag Filter"
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
          <li>High dust collection efficiency for fine particles</li>
          <li>Continuous operation with automatic pulse cleaning</li>
          <li>Low maintenance and long filter bag life</li>
          <li>Compact and robust construction</li>
          <li>Energy-efficient operation with reduced pressure loss</li>
          <li>Suitable for high dust load applications</li>
          <li>Easy access for inspection and maintenance</li>
          <li>Customized capacities and filtration configurations available</li>
        </ul>
      </section>

      {/* ---------- Technical Specifications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specifications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 500 CMH to 3,00,000 CMH
          </li>
          <li>
            <strong>Type of Fuel:</strong> Coal, Biomass, Furnace Oil, Gas,
            Pet Coke
          </li>
          <li>
            <strong>Temperature:</strong> Up to 300°C depending on filter
            media
          </li>
          <li>
            <strong>Types of Filter Bags:</strong> Polyester, PP, Nomex,
            PTFE, Fiberglass
          </li>
          <li>
            <strong>Types of Cleaning:</strong> Pulse Jet / Reverse Air /
            Shaker Type
          </li>
          <li>
            <strong>MOC:</strong> IS2062 / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
