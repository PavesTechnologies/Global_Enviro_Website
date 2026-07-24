'use client';
import React from 'react';
import Image from 'next/image';

export default function PulseJetBagFilterForBoilerPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Pulse Jet Bag Filter for Boiler
        </h1>
      </section>

      {/* ---------- Image ---------- */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/a01. Pulsejet Bag Filter for Boiler.jpg"
            alt="Pulse Jet Bag Filter for Boiler"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
