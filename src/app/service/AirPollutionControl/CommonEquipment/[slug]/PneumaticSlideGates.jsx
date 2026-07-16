'use client';
import React from 'react';
import Image from 'next/image';

export default function PneumaticSlideGatesPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Pneumatic Slide Gates
        </h1>
        <p>
          Global Enviro&apos;s Pneumatic Slide Gate is an air-cylinder
          operated shut-off device that uses a flat blade to open or close
          the flow of dry bulk solids from silos, hoppers, and chutes. Fast
          2-5 second actuation makes it ideal for batching, dosing, and
          process interlocking, with dust-tight sealing and positive
          material cut-off.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            An air cylinder drives the blade through its full stroke in just
            2-5 seconds — far faster than a motorized gate — making it well
            suited to batch weighing and feeder isolation where speed and
            repeatability matter.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Batch weighing</li>
            <li>Truck loading</li>
            <li>Feeder isolation</li>
            <li>Filter discharge</li>
            <li>Pneumatic conveying systems</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/d05. Pneumatic Slide Gates.jpg"
            alt="Pneumatic Slide Gates"
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
            <strong>Fast Operation:</strong> 2-5 sec full stroke versus 30-60
            sec for a motorized gate. Perfect for batching accuracy.
          </li>
          <li>
            <strong>Fail-Safe Action:</strong> Spring-return or air-reservoir
            closes the gate on air/power failure — no silo emptying risk.
          </li>
          <li>
            <strong>Dust-Tight Seal:</strong> Full perimeter gasket + bonnet
            seal. &lt;0.1% leakage, &lt;20 mg/NM³ emission.
          </li>
          <li>
            <strong>Self-Cleaning Blade:</strong> Beveled edge scrapes the
            seat clean on closing — no material jam or leakage.
          </li>
          <li>
            <strong>Low Profile:</strong> Body height 120-200mm only, fits in
            tight spaces under existing equipment.
          </li>
          <li>
            <strong>Position Feedback:</strong> Magnetic reed switches for
            open/close status to PLC — no false signals.
          </li>
          <li>
            <strong>Maintenance Free:</strong> Only cylinder seals wear.
            Blade and body last 5+ years in cement duty.
          </li>
          <li>
            <strong>Modular Design:</strong> Bolted construction — change
            blade/seal without removing the gate from the line.
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
            <strong>Type of Application:</strong> Dust Tight Flow Control for
            Hoppers, Silos &amp; Pneumatic Conveying Systems
          </li>
          <li>
            <strong>Temperature:</strong> Up to 250°C depending on sealing
            and actuator type
          </li>
          <li>
            <strong>Types of Gates:</strong> Slide Type / Knife Edge
          </li>
          <li>
            <strong>Types of Operation:</strong> Pneumatic Cylinder Operated /
            Solenoid Controlled Automation
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062)
          </li>
        </ul>
      </section>
    </div>
  );
}
