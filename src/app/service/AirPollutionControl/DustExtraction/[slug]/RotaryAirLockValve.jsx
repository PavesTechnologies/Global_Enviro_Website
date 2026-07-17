'use client';
import React from 'react';
import Image from 'next/image';

export default function RotaryAirLockValvePage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          RAV (Rotary Air Lock Valve)
        </h1>
        <p className="text-lg text-blue-700 font-medium mb-4">
          Continuous Discharge, Constant Efficiency
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            A Rotary Air Lock Valve (RAV) is a precision-engineered rotary
            feeder used for controlled discharge of bulk materials while
            maintaining an effective air seal between two different pressure
            zones. It is widely used in pneumatic conveying, dust collection,
            and material handling systems to ensure continuous and leak-free
            material transfer.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Cement plants</li>
            <li>Fly ash handling systems</li>
            <li>Food &amp; grain processing</li>
            <li>Chemical and pharmaceutical industries</li>
            <li>Boiler and dust collector systems</li>
            <li>Plastic pellet and mineral processing</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a07. Rotary Air Lock Valve.jpg"
            alt="RAV (Rotary Air Lock Valve)"
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
          <li>Continuous and uniform material feeding</li>
          <li>Excellent air-locking capability</li>
          <li>Heavy-duty rotor construction</li>
          <li>Low maintenance operation</li>
          <li>Compact and robust design</li>
          <li>
            Available in cast iron, mild steel, and stainless steel
            construction
          </li>
          <li>Suitable for abrasive and high-temperature materials</li>
          <li>Gear motor driven for smooth rotation</li>
        </ul>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 1 TPH to 200 TPH dust handling
            capacity
          </li>
          <li>
            <strong>Type of Application:</strong> Dust Collection
          </li>
          <li>
            <strong>Temperature:</strong> Up to 250°C with suitable sealing
            arrangement
          </li>
          <li>
            <strong>Types of Rotor:</strong> Open Type / Closed Type / Blow
            Through Type
          </li>
          <li>
            <strong>Types of Drive:</strong> Direct Drive / Chain Drive
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
