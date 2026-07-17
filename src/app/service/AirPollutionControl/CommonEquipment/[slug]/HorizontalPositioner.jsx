'use client';
import React from 'react';
import Image from 'next/image';

export default function HorizontalPositionerPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Horizontal Positioner
        </h1>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            In the cement and mining industries, a horizontal positioner for
            wagons refers to one of two critical heavy-duty systems, either a
            mechanical Wagon Positioner/Indexer that shunts heavy railcars
            into unloading zones, or a Horizontal Spout Positioner that
            aligns loading equipment directly above a wagon hatch. Instead of
            forcing the train driver to position the heavy clinker wagon with
            millimeter accuracy, a horizontal spout positioner moves the
            dustless loading spout over the car hatch.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li className="break-inside-avoid">
              Loading / unloading bays where wagons must creep forward
              inch-by-inch for precise spotting under chutes, hoppers, silos
            </li>
            <li className="break-inside-avoid">Cement plants</li>
            <li className="break-inside-avoid">Grain terminals</li>
            <li className="break-inside-avoid">Fertilizer plants</li>
          </ul>
        </div>

        <div className="relative w-full aspect-4/3">
          <Image
            src="/assets/images/Air_Pollution/d03. Horizontal Positioner.jpg"
            alt="Horizontal Positioner"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1 md:columns-2 md:gap-x-10">
          <li className="break-inside-avoid">
            <strong>Capacity Range:</strong> 500 Kg to 50 Ton load capacity
          </li>
          <li className="break-inside-avoid">
            <strong>Type of Application:</strong> Loading Spout Positioning
          </li>
          <li className="break-inside-avoid">
            <strong>Temperature:</strong> Suitable for normal industrial
            working conditions
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Positioning:</strong> Motorized Rotation
          </li>
          <li className="break-inside-avoid">
            <strong>Types of Drive:</strong> Gear Drive / Variable Speed
            Motorized Drive
          </li>
          <li className="break-inside-avoid">
            <strong>MOC:</strong> Carbon Steel (IS2062)
          </li>
        </ul>
      </section>
    </div>
  );
}
