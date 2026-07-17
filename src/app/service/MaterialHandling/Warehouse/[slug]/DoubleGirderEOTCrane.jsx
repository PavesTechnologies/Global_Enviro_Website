'use client';
import React from 'react';
import Image from 'next/image';

export default function DoubleGirderEOTCranePage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Double Girder EOT Crane
        </h1>
        <p>
          Double Girder EOT (Electric Overhead Traveling) Cranes are
          high-capacity lifting systems engineered for heavy-duty industrial
          material handling applications. Built with two bridge girders for
          enhanced strength and stability, these cranes provide superior
          load handling, greater lifting heights, and smooth operation for
          demanding industrial environments.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p className="font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Steel &amp; Heavy Engineering Industries</li>
            <li>Power Plants &amp; Process Industries</li>
            <li>Manufacturing &amp; Fabrication Units</li>
            <li>Shipyards &amp; Infrastructure Projects</li>
            <li>Warehouses &amp; Logistics Centers</li>
            <li>Mining &amp; Cement Industries</li>
            <li>Heavy Material Handling Applications</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/EOT and HOT cranes.png"
            alt="Double Girder EOT Crane"
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
            <li>High load carrying capacity for heavy-duty operations</li>
            <li>Dual girder structure for enhanced strength and stability</li>
            <li>Smooth and precise lifting and travel movements</li>
            <li>Higher lifting height with optimized hook approach</li>
            <li>Durable and low-maintenance construction</li>
            <li>Safe and reliable operation with advanced control systems</li>
            <li>Suitable for continuous industrial usage</li>
            <li>
              Available in customized spans, capacities, and duty classes
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 5 Ton to 30 Ton. Steel, Power,
              Heavy Engineering, Paper, Hydro
            </li>
            <li>
              <strong>Type of Application:</strong> Heavy material handling
              / Turbine hall / Mill bay / Erection &amp; maintenance
            </li>
            <li>
              <strong>Types of Crane:</strong> Top running / under slung.
              Span: 6m to 25m+. Lift Height: Up to 30m
            </li>
            <li>
              <strong>Types of Hoist:</strong> Wire Rope Crab / Open Winch.
              Controls: Pendant / Radio Remote / Cabin / VFD
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
