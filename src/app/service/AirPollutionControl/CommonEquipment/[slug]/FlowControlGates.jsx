'use client';
import React from 'react';
import Image from 'next/image';

export default function FlowControlGatesPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Flow Control Gates
        </h1>
        <p>
          Flow Control Gate is a shut-off and regulating
          device installed below silos, hoppers, conveyors, and chutes to
          start, stop, or modulate the flow of dry bulk solids. Available as
          slide gate, knife gate, or diverter type, it provides positive
          shut-off, variable discharge, and material routing with
          dust-tight sealing.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li className="break-inside-avoid">Cement</li>
            <li className="break-inside-avoid">Fly ash</li>
            <li className="break-inside-avoid">Grains</li>
            <li className="break-inside-avoid">Sugar</li>
            <li className="break-inside-avoid">Plastic granules</li>
            <li className="break-inside-avoid">Chemicals</li>
            <li className="break-inside-avoid">Sand</li>
            <li className="break-inside-avoid">Coal</li>
            <li className="break-inside-avoid">Minerals</li>
          </ul>
        </div>

        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/d04. Flow Control Gates.png"
            alt="Flow Control Gates"
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
        <ul className="list-disc pl-6 space-y-2 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>Positive Shut-Off:</strong> Knife edge cuts through the
            material column. No leakage when closed, even with fine powders.
          </li>
          <li className="break-inside-avoid">
            <strong>Dust-Tight Design:</strong> Full perimeter seal + bonnet
            gasket. No dust emission to atmosphere.
          </li>
          <li className="break-inside-avoid">
            <strong>Wear Resistant:</strong> Hardox or ceramic lined blade and
            guides for abrasive materials like cement, sand, clinker.
          </li>
          <li className="break-inside-avoid">
            <strong>Modulating Control:</strong> V-notch blade or multi-blade
            louver for linear flow control 10-100% with actuator.
          </li>
          <li className="break-inside-avoid">
            <strong>Fail-Safe Options:</strong> Spring-close on air/power
            failure prevents silo emptying during emergency.
          </li>
          <li className="break-inside-avoid">
            <strong>Self-Cleaning:</strong> Blade scrapes seat on closing —
            no material buildup to prevent full closure.
          </li>
          <li className="break-inside-avoid">
            <strong>Low Headroom:</strong> Slim body design, 100-250mm height
            only, fits under existing hoppers easily.
          </li>
          <li className="break-inside-avoid">
            <strong>Maintenance Friendly:</strong> Top-mounted actuator,
            replaceable blade, split frame for in-line service.
          </li>
        </ul>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>Capacity Range:</strong> 10 TPH to 500 TPH material
            handling capacity
          </li>
          <li className="break-inside-avoid">
            <strong>Type of Application:</strong> Flow Control for Hoppers,
            Silos, Chutes &amp; Conveying Systems
          </li>
          <li className="break-inside-avoid">
            <strong>Temperature:</strong> Up to 400°C depending on material
            and sealing arrangement
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Gates:</strong> Slide Gate / Flap Gate /
            Diverter Gate
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Operation:</strong> Manual / Pneumatic /
            Motorized
          </li>
          <li className="break-inside-avoid">
            <strong>MOC:</strong> Carbon Steel (IS2062)
          </li>
        </ul>
      </section>
    </div>
  );
}
