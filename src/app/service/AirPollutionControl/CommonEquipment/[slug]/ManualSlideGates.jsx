'use client';
import React from 'react';
import Image from 'next/image';

export default function ManualSlideGatesPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Manual Slide Gates
        </h1>
        <p>
          Global Enviro&apos;s Manual Slide Gate is a hand-operated shut-off
          device that uses a flat blade to open or close the flow of dry bulk
          solids from silos, hoppers, and chutes. Operated by hand wheel or
          lever with no air or power supply required, it provides dust-tight
          sealing and positive material cut-off for isolation duty.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            A rack-and-pinion or screw-operated hand wheel drives the blade
            through the material column for simple, reliable on/off
            isolation. With no compressed air or electrical supply needed,
            it is well suited to standalone silos, maintenance isolation
            points, and low-frequency shut-off duty.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Silo and hopper isolation</li>
            <li>Maintenance shut-off points</li>
            <li>Low-frequency flow isolation</li>
            <li>Cement, fly ash, and mineral handling</li>
            <li>Standalone installations without air/power supply</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/d04. Flow Control Gates.png"
            alt="Manual Slide Gates"
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
            <strong>No Air/Power Required:</strong> Hand wheel or lever
            operation — ideal where compressed air or electrical supply is
            unavailable.
          </li>
          <li>
            <strong>Positive Shut-Off:</strong> Knife edge cuts through the
            material column with no leakage, even with fine powders.
          </li>
          <li>
            <strong>Dust-Tight Design:</strong> Full perimeter seal + bonnet
            gasket prevents dust emission to atmosphere.
          </li>
          <li>
            <strong>Wear Resistant:</strong> Hardox or ceramic lined blade and
            guides for abrasive materials like cement, sand, clinker.
          </li>
          <li>
            <strong>Self-Cleaning:</strong> Blade scrapes seat on closing —
            no material buildup to prevent full closure.
          </li>
          <li>
            <strong>Low Headroom:</strong> Slim body design fits under
            existing hoppers easily.
          </li>
          <li>
            <strong>Maintenance Friendly:</strong> Simple mechanical design,
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
            <strong>Type of Application:</strong> Flow Isolation for Hoppers,
            Silos &amp; Chutes
          </li>
          <li>
            <strong>Temperature:</strong> Up to 400°C depending on material
            and sealing arrangement
          </li>
          <li>
            <strong>Types of Gates:</strong> Slide Gate / Knife Edge
          </li>
          <li>
            <strong>Types of Operation:</strong> Hand Wheel / Lever Operated
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062)
          </li>
        </ul>
      </section>
    </div>
  );
}
