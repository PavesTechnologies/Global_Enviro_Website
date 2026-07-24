'use client';
import React from 'react';
import Image from 'next/image';

export default function SingleGirderEOTCranePage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Single Girder EOT Crane
        </h1>
        <p>
          Single Girder EOT (Electric Overhead Traveling) Cranes are
          versatile lifting systems designed for safe and efficient handling
          of materials within industrial facilities. Featuring a single
          bridge girder with an electrically operated hoist, these cranes
          provide reliable performance, optimized floor space utilization,
          and smooth load movement for light to medium-duty applications.
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
            <li>Manufacturing &amp; Engineering Units</li>
            <li>Warehouses &amp; Logistics Facilities</li>
            <li>Fabrication Workshops</li>
            <li>Power &amp; Process Industries</li>
            <li>Assembly &amp; Maintenance Areas</li>
            <li>Material Handling Applications</li>
            <li>Industrial Production Plants</li>
          </ul>
        </div>

        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px]">
          <Image
            src="/assets/images/EOT and HOT cranes.png"
            alt="Single Girder EOT Crane"
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
            <li>Compact and space-saving design</li>
            <li>Smooth and precise load handling operation</li>
            <li>Electrically operated hoist and travel mechanisms</li>
            <li>High lifting efficiency with reliable performance</li>
            <li>Suitable for light and medium-duty applications</li>
            <li>Robust construction with low maintenance requirements</li>
            <li>Enhanced operational safety features</li>
            <li>
              Available in customized spans, capacities, and lifting heights
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 0.5 Ton to 20 Ton. Workshops,
              Power House, Pump House, Stores
            </li>
            <li>
              <strong>Type of Application:</strong> Material handling /
              Maintenance / Loading-unloading in bays &amp; sheds
            </li>
            <li>
              <strong>Types of Crane:</strong> Single Girder / under slung /
              Top Running. Span: 3m to 31.5m
            </li>
            <li>
              <strong>Types of Hoist:</strong> Electric Wire Rope / Chain
              Hoist. Speeds: Single / Double / VFD Control
            </li>
            <li>
              <strong>MOC:</strong> IS2062 Fabricated Box Girder / ISMC/ISMB.
              End Carriages: MS. Wheels: C45 Forged/Alloy Steel
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
