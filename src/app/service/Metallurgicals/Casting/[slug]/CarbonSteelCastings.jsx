'use client';
import React from 'react';
import Image from 'next/image';

export default function CarbonSteelCastingsPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Carbon Steel Castings
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-4">
          High-Strength Cast Components for Reliable Industrial Performance
        </p>
        <p>
          Carbon Steel Castings are precision-engineered industrial
          components manufactured using high-quality carbon steel to
          provide superior strength, toughness, and durability. These
          castings are widely used in heavy-duty machinery, material
          handling systems, and industrial equipment where high mechanical
          performance and wear resistance are essential.
        </p>
      </section>

      {/* ---------- Ideal For + Application Gallery ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
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
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Casting Division
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="relative w-full aspect-4/3">
                  <Image
                    src="/assets/images/metallurgicals-projects/casting-1.jpg"
                    alt="Casting Division View 1"
                    fill
                    className="object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-4/3">
                  <Image
                    src="/assets/images/metallurgicals-projects/casting-2.jpg"
                    alt="Casting Division View 2"
                    fill
                    className="object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
