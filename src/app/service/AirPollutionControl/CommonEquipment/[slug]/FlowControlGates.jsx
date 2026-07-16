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
          Global Enviro&apos;s Flow Control Gate is a shut-off and regulating
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
          <p>
            A knife-edge blade cuts cleanly through the material column,
            giving positive shut-off with no leakage — even with fine
            powders — while a full perimeter seal keeps the system
            dust-tight.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Cement</li>
            <li>Fly ash</li>
            <li>Grains</li>
            <li>Sugar</li>
            <li>Plastic granules</li>
            <li>Chemicals</li>
            <li>Sand</li>
            <li>Coal</li>
            <li>Minerals</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
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
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Positive Shut-Off:</strong> Knife edge cuts through the
            material column. No leakage when closed, even with fine powders.
          </li>
          <li>
            <strong>Dust-Tight Design:</strong> Full perimeter seal + bonnet
            gasket. No dust emission to atmosphere.
          </li>
          <li>
            <strong>Wear Resistant:</strong> Hardox or ceramic lined blade and
            guides for abrasive materials like cement, sand, clinker.
          </li>
          <li>
            <strong>Modulating Control:</strong> V-notch blade or multi-blade
            louver for linear flow control 10-100% with actuator.
          </li>
          <li>
            <strong>Fail-Safe Options:</strong> Spring-close on air/power
            failure prevents silo emptying during emergency.
          </li>
          <li>
            <strong>Self-Cleaning:</strong> Blade scrapes seat on closing —
            no material buildup to prevent full closure.
          </li>
          <li>
            <strong>Low Headroom:</strong> Slim body design, 100-250mm height
            only, fits under existing hoppers easily.
          </li>
          <li>
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
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 10 TPH to 500 TPH material
            handling capacity
          </li>
          <li>
            <strong>Type of Application:</strong> Flow Control for Hoppers,
            Silos, Chutes &amp; Conveying Systems
          </li>
          <li>
            <strong>Temperature:</strong> Up to 400°C depending on material
            and sealing arrangement
          </li>
          <li>
            <strong>Types of Gates:</strong> Slide Gate / Flap Gate /
            Diverter Gate
          </li>
          <li>
            <strong>Types of Operation:</strong> Manual / Pneumatic /
            Motorized
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062)
          </li>
        </ul>
      </section>
    </div>
  );
}
