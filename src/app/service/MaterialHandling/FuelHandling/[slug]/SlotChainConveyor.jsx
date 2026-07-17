'use client';
import React from 'react';

export default function SlotChainConveyorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Slot Chain Conveyor
        </h1>
        <p>
          Slot Chain Conveyors are robust material handling systems designed
          for the horizontal and inclined transportation of bulk materials,
          powders, granules, and industrial products. Utilizing an endless
          chain with specially designed slats or flights moving inside an
          enclosed casing, these conveyors ensure efficient, dust-free, and
          controlled material movement with minimal spillage and wear.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Product Overview
        </h2>
        <p className="font-semibold text-gray-700">Ideal For:</p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Cement &amp; Mineral Industries</li>
          <li>Power &amp; Fuel Handling Systems</li>
          <li>Food &amp; Grain Processing Plants</li>
          <li>Chemical &amp; Fertilizer Industries</li>
          <li>Industrial Manufacturing Units</li>
          <li>Bulk Material Handling Applications</li>
          <li>Ash &amp; Powder Conveying Systems</li>
        </ul>
      </section>

      {/* ---------- Key Features & Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Efficient enclosed conveying system</li>
            <li>Suitable for heavy-duty and abrasive materials</li>
            <li>Dust-free operation with minimal material spillage</li>
            <li>Durable chain and wear-resistant construction</li>
            <li>Handles horizontal and inclined conveying applications</li>
            <li>Low maintenance with reliable continuous operation</li>
            <li>Compact design with high conveying efficiency</li>
            <li>Customized capacities and conveyor lengths available</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 1 TPH to 200 TPH. Food
              grains, coal, Biomass
            </li>
            <li>
              <strong>Types of Conveyor:</strong> Straight Running / Side
              flexing / Single Strand / Multi Strand / Incline-Decline
            </li>
            <li>
              <strong>Types of Chain:</strong> Acetal / SS / Thermoplastic /
              Low-Friction / Magnet flex / Tab / Bevel
            </li>
            <li>
              <strong>MOC:</strong> SS304 / SS316 Frame. Side Rails: SS/UHMW.
              Wear Strips: UHMW-PE
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
