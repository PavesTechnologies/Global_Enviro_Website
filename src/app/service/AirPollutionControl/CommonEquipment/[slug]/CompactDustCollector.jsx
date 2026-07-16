'use client';
import React from 'react';
import Image from 'next/image';

export default function CompactDustCollectorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Compact Dust Collector
        </h1>
        <p>
          Global Enviro&apos;s Compact Dust Collector is a high-efficiency,
          small-footprint dust collection system using pleated cartridge
          filters. Designed for source capture, intermittent duty, and indoor
          installation, it replaces bulky bag filters where space is limited.
          Pulse jet cleaning provides continuous online operation with
          minimal compressed air.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            Pleated cartridges give up to 3x more filtration area than bags
            in the same volume, making the unit ideal wherever floor space is
            tight and dust must be captured close to the source.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Welding fumes</li>
            <li>Laser / plasma cutting</li>
            <li>Grinding</li>
            <li>Pharma tablet press</li>
            <li>Silo vent</li>
            <li>Food mixing</li>
            <li>Packaging lines</li>
            <li>CNC machining</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/d01. Compact Dust Collector.jpeg"
            alt="Compact Dust Collector"
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
            <strong>50% Smaller Footprint:</strong> Pleated cartridges give 3x
            more area than bags in the same volume. Fits between machines.
          </li>
          <li>
            <strong>Quick Cartridge Change:</strong> Top or front access door.
            No tools needed. Change in &lt;5 minutes, no vessel entry.
          </li>
          <li>
            <strong>High Efficiency:</strong> PTFE membrane gives MERV 16,
            captures welding fumes, laser smoke, 0.1-1.0 micron dust.
          </li>
          <li>
            <strong>Low Compressed Air:</strong> Optimized venturi + diaphragm
            valve uses 30% less air than bag filters.
          </li>
          <li>
            <strong>Plug-and-Play:</strong> Comes with fan, controls,
            silencer, bin pre-wired. Just connect duct + power + air.
          </li>
          <li>
            <strong>Flame Retardant Media:</strong> For spark-generating
            applications like grinding. Prevents fire propagation.
          </li>
          <li>
            <strong>Down Flow Pattern:</strong> Dirty air enters top, flows
            down. Heavy particles drop out, reducing filter loading.
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
            <strong>Capacity Range:</strong> 500 CMH to 10,000 CMH
          </li>
          <li>
            <strong>Type of Application:</strong> Dust Collection / Powder
            Handling / Fume Extraction Systems
          </li>
          <li>
            <strong>Temperature:</strong> Up to 150°C with suitable filter
            media
          </li>
          <li>
            <strong>Types of Filter Bags/Cartridges:</strong> Polyester / PTFE
            Coated / Cellulose / Cartridge Type Filters
          </li>
          <li>
            <strong>Types of Cleaning:</strong> Pulse Jet
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
