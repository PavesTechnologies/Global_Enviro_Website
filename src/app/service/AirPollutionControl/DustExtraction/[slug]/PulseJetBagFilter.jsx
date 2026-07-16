'use client';
import React from 'react';
import Image from 'next/image';

export default function PulseJetBagFilterPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Pulse Jet Bag Filter / Pulse Jet Hose Bag Type Filters
        </h1>
        <p>
          Global Enviro offers advanced Pulse Jet Bag Filters — also known as
          conventional de-dusting filters — designed with next-generation
          technology to deliver superior performance, longer filter life, and
          minimal maintenance. Our innovative systems achieve reduced emission
          levels, lower pressure drops, and optimized space utilization while
          extending bag life in demanding industrial conditions.
        </p>
      </section>

      {/* ---------- About Fabric Filtration Technology ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        {/* LEFT SIDE - Text */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            About Fabric Filtration Technology
          </h2>
          <p>
            The concept of fabric filtration began over a century ago and remains
            one of the most effective and practical methods for separating solid
            particles from air or gas streams. Tubular filter fabrics (woven or
            non-woven) are vertically installed in a housing, each supported by
            a metal cage and venturi to prevent collapse under vacuum or
            pressure.
          </p>
          <p className="mt-3">
            Dust-laden air passes through the fabric, capturing particulate
            matter on the outer surface and forming a dust cake, ensuring clean
            air output and long-lasting filter performance.
          </p>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a01. Pulsejet Bag Filter for Boiler.jpg"
            alt="Pulse Jet Bag Filter for Boiler"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Application Gallery ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Built for Every Application
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/Air_Pollution/a01. Pulsejet Bag Filter for Boiler.jpg"
                alt="Pulse Jet Bag Filter for Boiler"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Pulse Jet Bag Filter for Boiler
            </p>
          </div> */}
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/Air_Pollution/a02. Pulsejet Bag Filter for Process Industries.jpg"
                alt="Pulse Jet Bag Filter for Process Industries"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Pulse Jet Bag Filter for Process Industries
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Cleaning Mechanism ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Cleaning Mechanism
        </h2>
        <p>
          The accumulated dust is cleaned row-by-row using short bursts of
          compressed air in either online or offline mode. This reverse airflow
          dislodges dust from filter bags, aided by the venturi effect for
          maximum cleaning efficiency. Cracked dust cake and dislodged particles
          fall into the hopper and are discharged through the dust removal
          system.
        </p>
        <p className="mt-2">
          <strong>Typical Air Volume Range:</strong> 5,000 to 500,000 m³/hr (single or modular
          design)
        </p>
      </section>

      {/* ---------- Air Pollution Control Device ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Air Pollution Control Device (APCD)
        </h2>
        <p>
          An Air Pollution Control Device extracts contaminated air containing
          dust, fumes, or particulates from industrial processes and filters it
          to release clean, breathable air. These systems are also known as:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Bag Filter / Bag House</li>
          <li>Pulse Jet Dust Collector</li>
          <li>De-dusting System</li>
          <li>Silo Vent Filter</li>
          <li>Cassette Type Filter</li>
          <li>Reverse Air Cleaned Bag Filter</li>
          <li>Fabric Filter</li>
          <li>Flue Gas Emission Control System</li>
          <li>Fume Extraction System</li>
          <li>Dust Recovery System</li>
        </ul>
      </section>

      {/* ---------- Key Components ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Components
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Filter Bags (woven / non-woven)</li>
          <li>Filter Cages</li>
          <li>Pulse Cleaning Valves</li>
          <li>Sequential Timer Units</li>
          <li>Centrifugal Blowers</li>
          <li>Rotary Airlock Valves (RAV)</li>
          <li>Filter Cartridges</li>
        </ul>
        <p className="mt-2">
          Each system is engineered based on dust loading, air-to-cloth ratio,
          can velocity, gas temperature, and local emission norms.
        </p>
      </section>

      {/* ---------- Filtration Efficiency ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Filtration Efficiency
        </h2>
        <p>
          Global Enviro’s Air Pollution Control Devices or Pulse Jet Bag Filters
          achieve filtration levels as low as <strong>2 mg/Nm³</strong>, ensuring
          compliance with strict environmental standards while maintaining high
          operational efficiency.
        </p>
      </section>

      {/* ---------- Operation ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Pulse Jet Bag Filter – Operation
        </h2>
        <p>
          The Pulse Jet Bag Filter removes fine dust particles from air or gas
          streams generated during industrial processes such as boilers, cement
          processing, or foundry operations. It ensures collection efficiency up
          to 99.9% and operates reliably up to 260°C.
        </p>
        <p className="mt-3">
          Each bag is supported by a metal cage mounted on a tube sheet at the
          top of the bag house. Dust-laden air flows from outside to inside
          through the bags, allowing clean air to exit from the top while dust
          accumulates on the outer surface.
        </p>
      </section>

      {/* ---------- Types of Cleaning Mechanisms ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Types of Cleaning Mechanisms
        </h2>

        <h3 className="text-lg font-semibold text-blue-700 mt-3">
          Online Cleaning
        </h3>
        <p>
          In online cleaning, compartments remain operational while being
          cleaned. A short pulse of compressed air dislodges the dust, allowing
          continuous operation with minimal downtime.
        </p>

        <h3 className="text-lg font-semibold text-blue-700 mt-3">
          Offline Cleaning
        </h3>
        <p>
          In offline cleaning, one compartment is isolated for cleaning while
          others continue filtration. This method is ideal for low-density or
          volatile dust applications with air volumes up to 100,000 CMH.
        </p>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">Applications</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Process & Power Boilers</li>
          <li>Steel Melting Induction Furnaces</li>
          <li>Cement and Mineral Processing Plants</li>
          <li>Food & Pharmaceutical Industries</li>
          <li>Lead Smelting and Foundry Operations</li>
        </ul>
      </section>
    </div>
  );
}
