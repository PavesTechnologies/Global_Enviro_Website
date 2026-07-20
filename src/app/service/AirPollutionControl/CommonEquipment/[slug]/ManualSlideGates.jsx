'use client';
import React from 'react';
import Image from 'next/image';

export default function ManualSlideGatesPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Manual Slide Gates
        </h1>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Product Overview
          </h2>
          <p>
            Global Enviro&apos;s Manual Slide Gate is a hand-operated shut-off
            device that uses a flat blade to open or close the flow of dry
            bulk solids from silos, hoppers, and chutes. Operated by hand
            wheel or lever with no air or power supply required, it provides
            dust-tight sealing and positive material cut-off for isolation
            duty.
          </p>
          <p className="mt-2">
            A rack-and-pinion or screw-operated hand wheel drives the blade
            through the material column for simple, reliable on/off
            isolation. With no compressed air or electrical supply needed,
            it is well suited to standalone silos, maintenance isolation
            points, and low-frequency shut-off duty.
          </p>
          <p className="mt-2 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li className="break-inside-avoid">Silo and hopper isolation</li>
            <li className="break-inside-avoid">Maintenance shut-off points</li>
            <li className="break-inside-avoid">Low-frequency flow isolation</li>
            <li className="break-inside-avoid">Cement, fly ash, and mineral handling</li>
            <li className="break-inside-avoid">Standalone installations without air/power supply</li>
          </ul>
        </div>

        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/d04. Flow Control Gates.png"
            alt="Manual Slide Gates"
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
            <strong>No Air/Power Required:</strong> Hand wheel or lever
            operation — ideal where compressed air or electrical supply is
            unavailable.
          </li>
          <li className="break-inside-avoid">
            <strong>Positive Shut-Off:</strong> Knife edge cuts through the
            material column with no leakage, even with fine powders.
          </li>
          <li className="break-inside-avoid">
            <strong>Dust-Tight Design:</strong> Full perimeter seal + bonnet
            gasket prevents dust emission to atmosphere.
          </li>
          <li className="break-inside-avoid">
            <strong>Wear Resistant:</strong> Hardox or ceramic lined blade and
            guides for abrasive materials like cement, sand, clinker.
          </li>
          <li className="break-inside-avoid">
            <strong>Self-Cleaning:</strong> Blade scrapes seat on closing —
            no material buildup to prevent full closure.
          </li>
          <li className="break-inside-avoid">
            <strong>Low Headroom:</strong> Slim body design fits under
            existing hoppers easily.
          </li>
          <li className="break-inside-avoid">
            <strong>Maintenance Friendly:</strong> Simple mechanical design,
            replaceable blade, split frame for in-line service.
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
            <strong>Type of Application:</strong> Flow Isolation for Hoppers,
            Silos &amp; Chutes
          </li>
          <li className="break-inside-avoid">
            <strong>Temperature:</strong> Up to 400°C depending on material
            and sealing arrangement
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Gates:</strong> Slide Gate / Knife Edge
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Operation:</strong> Hand Wheel / Lever Operated
          </li>
          <li className="break-inside-avoid">
            <strong>MOC:</strong> Carbon Steel (IS2062)
          </li>
        </ul>
      </section>
    </div>
  );
}
