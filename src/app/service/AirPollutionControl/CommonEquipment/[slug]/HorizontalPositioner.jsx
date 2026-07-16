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
        <p>
          In the cement and mining industries, a Horizontal Positioner for
          wagons refers to one of two critical heavy-duty systems — a
          mechanical Wagon Positioner/Indexer that shunts heavy railcars into
          unloading zones, or a Horizontal Spout Positioner that aligns
          loading equipment directly above a wagon hatch.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            Instead of forcing the train driver to position the heavy clinker
            wagon with millimeter accuracy, a horizontal spout positioner
            moves the dustless loading spout over the car hatch — creeping
            the load point forward inch-by-inch for precise spotting under
            chutes, hoppers, and silos.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              Loading / unloading bays where wagons must creep forward
              inch-by-inch for precise spotting under chutes, hoppers, silos
            </li>
            <li>Cement plants</li>
            <li>Grain terminals</li>
            <li>Fertilizer plants</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
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
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 500 Kg to 50 Ton load capacity
          </li>
          <li>
            <strong>Type of Application:</strong> Loading Spout Positioning
          </li>
          <li>
            <strong>Temperature:</strong> Suitable for normal industrial
            working conditions
          </li>
          <li>
            <strong>Types of Positioning:</strong> Motorized Rotation
          </li>
          <li>
            <strong>Types of Drive:</strong> Gear Drive / Variable Speed
            Motorized Drive
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062)
          </li>
        </ul>
      </section>
    </div>
  );
}
