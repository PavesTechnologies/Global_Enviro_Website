'use client';
import React from 'react';
import Image from 'next/image';

export default function PneumaticSlideGatesPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Pneumatic Slide Gates
        </h1>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Product Overview
          </h2>
          <p>
            Pneumatic Slide Gate is an air-cylinder operated shut-off device
            that uses a flat blade to open or close the flow of dry bulk
            solids from silos, hoppers, and chutes. Fast 2-5 second actuation
            makes it ideal for batching, dosing, and process interlocking,
            with dust-tight sealing and positive material cut-off.
          </p>
          <p className="mt-2 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li className="break-inside-avoid">Batch weighing</li>
            <li className="break-inside-avoid">Truck loading</li>
            <li className="break-inside-avoid">Feeder isolation</li>
            <li className="break-inside-avoid">Filter discharge</li>
            <li className="break-inside-avoid">Pneumatic conveying systems</li>
          </ul>
        </div>

        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/d05. Pneumatic Slide Gates.jpg"
            alt="Pneumatic Slide Gates"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Key Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>Fast Operation:</strong> 2-5 sec full stroke versus 30-60
            sec for a motorized gate. Perfect for batching accuracy.
          </li>
          <li className="break-inside-avoid">
            <strong>Fail-Safe Action:</strong> Spring-return or air-reservoir
            closes the gate on air/power failure — no silo emptying risk.
          </li>
          <li className="break-inside-avoid">
            <strong>Dust-Tight Seal:</strong> Full perimeter gasket + bonnet
            seal. &lt;0.1% leakage, &lt;20 mg/NM³ emission.
          </li>
          <li className="break-inside-avoid">
            <strong>Self-Cleaning Blade:</strong> Beveled edge scrapes the
            seat clean on closing — no material jam or leakage.
          </li>
          <li className="break-inside-avoid">
            <strong>Low Profile:</strong> Body height 120-200mm only, fits in
            tight spaces under existing equipment.
          </li>
          <li className="break-inside-avoid">
            <strong>Position Feedback:</strong> Magnetic reed switches for
            open/close status to PLC — no false signals.
          </li>
          <li className="break-inside-avoid">
            <strong>Maintenance Free:</strong> Only cylinder seals wear.
            Blade and body last 5+ years in cement duty.
          </li>
          <li className="break-inside-avoid">
            <strong>Modular Design:</strong> Bolted construction — change
            blade/seal without removing the gate from the line.
          </li>
        </ul>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>Capacity Range:</strong> 10 TPH to 500 TPH material
            handling capacity
          </li>
          <li className="break-inside-avoid">
            <strong>Type of Application:</strong> Dust Tight Flow Control for
            Hoppers, Silos &amp; Pneumatic Conveying Systems
          </li>
          <li className="break-inside-avoid">
            <strong>Temperature:</strong> Up to 250°C depending on sealing
            and actuator type
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Gates:</strong> Slide Type / Knife Edge
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Operation:</strong> Pneumatic Cylinder Operated /
            Solenoid Controlled Automation
          </li>
          <li className="break-inside-avoid">
            <strong>MOC:</strong> Carbon Steel (IS2062)
          </li>
        </ul>
      </section>
    </div>
  );
}
