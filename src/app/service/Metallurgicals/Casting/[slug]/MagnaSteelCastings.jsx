'use client';
import React from 'react';
import Image from 'next/image';

export default function MagnaSteelCastingsPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Magna Steel Castings
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-4">
          Premium-Grade Steel Castings for Heavy-Duty Industrial Applications
        </p>
        <p>
          Magna Steel Castings are high-performance engineered cast
          components designed to deliver exceptional strength, durability,
          and wear resistance in demanding industrial environments.
          Manufactured using advanced casting processes and premium-quality
          steel grades, these castings ensure reliable performance,
          dimensional accuracy, and extended service life for critical
          machinery and equipment.
        </p>
      </section>

      {/* ---------- Ideal For ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Ideal For
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cement &amp; Mining Industries</li>
          <li>Pumps, Valves &amp; Compressors</li>
          <li>Material Handling Equipment</li>
          <li>Heavy Engineering Applications</li>
          <li>Power &amp; Process Industries</li>
          <li>Machinery &amp; Automotive Components</li>
          <li>Industrial Manufacturing Units</li>
        </ul>
      </section>

      {/* ---------- Application Gallery ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Casting Division
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/metallurgicals-projects/casting-1.jpg"
                alt="Casting Division View 1"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/metallurgicals-projects/casting-2.jpg"
                alt="Casting Division View 2"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
