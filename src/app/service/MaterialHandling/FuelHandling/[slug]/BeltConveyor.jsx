'use client';
import React from 'react';
import Image from 'next/image';

export default function BeltConveyorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Belt Conveyor
        </h1>
        <p>
          Belt Conveyors are versatile material handling systems designed
          for the continuous transportation of bulk materials and packaged
          goods across short and long distances. Engineered with durable
          belts, robust structures, and efficient drive systems, these
          conveyors ensure smooth, safe, and energy-efficient movement of
          materials in industrial operations.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p className="font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Chemical &amp; Fertilizer Plants</li>
            <li>Power &amp; Fuel Handling Plants</li>
            <li>Warehouses &amp; Logistics Centers</li>
            <li>Food Processing Industries</li>
            <li>Packaging &amp; Manufacturing Units</li>
            <li>Ports &amp; Bulk Material Handling</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/belt-conveyor.jpg"
            alt="Belt Conveyor"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Key Features & Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Continuous and high-capacity material handling</li>
            <li>Smooth and reliable operation with minimal downtime</li>
            <li>Suitable for horizontal and inclined conveying</li>
            <li>Energy-efficient drive systems with VFD options</li>
            <li>Heavy-duty construction for rugged applications</li>
            <li>Low maintenance and long operational life</li>
            <li>Available in customized lengths, widths, and capacities</li>
            <li>Compatible with automation and process integration</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 5 TPH to 300 TPH. Power,
              Cement, Steel, Mines, Ports
            </li>
            <li>
              <strong>Type of Application:</strong> Horizontal/Inclined
              conveying of Coal, Ore, Aggregates
            </li>
            <li>
              <strong>Temp:</strong> Ambient to 150°C. Up to 120°C with HR
              belts
            </li>
            <li>
              <strong>Types of Conveyor:</strong> Flat / Troughed / Pipe /
              Cleated / Portable / Telescopic
            </li>
            <li>
              <strong>Types of Belt:</strong> EP Nylon / Steel Cord / Heat
              Resistant / Oil Resistant / FR Grade
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
