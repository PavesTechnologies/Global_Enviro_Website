'use client';
import React from 'react';
import Image from 'next/image';

export default function GlassWindowsPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Glass Windows
        </h1>
        <p>
          Glass Windows in cleanrooms are specially designed viewing windows
          installed in walls, puff panels and partitions to provide
          visibility between areas while maintaining cleanliness, improve
          safety and supervision, process monitoring without room entry,
          pressure integrity and environmental control. We are manufactured
          with smooth, flush surfaces to prevent dust accumulation and
          facilitate easy cleaning. Manufactured using high-quality toughened
          and double-glazed glass with precision engineered frames, these
          windows provide excellent visibility, airtight sealing, durability,
          and aesthetic appeal while maintaining hygienic and controlled
          environments.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p className="font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Pharmaceutical &amp; Clean room Facilities</li>
            <li>Laboratories &amp; Research Centers</li>
            <li>Hospitals &amp; Healthcare Centers</li>
            <li>Food Processing Industries</li>
            <li>Industrial Production Units</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/glass-windows-1.jpg"
            alt="Glass Windows"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Application Gallery ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Built for Every Application
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/hvac-projects/glass-windows-2.jpg"
                alt="Glass Windows Installation"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Glass Windows Installation
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Key Features & Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>High clarity toughened or double-glazed glass</li>
            <li>Airtight and dust-resistant sealing</li>
            <li>Easy cleaning and sanitization</li>
            <li>Good visibility between rooms</li>
            <li>Improve safety and supervision</li>
            <li>Reduces contamination risks</li>
            <li>Strong, durable, and corrosion-resistant frames</li>
            <li>Excellent visibility for monitoring operations</li>
            <li>Flush-mounted designs for clean room applications</li>
            <li>Customized sizes and frame finishes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Types of Windows:</strong> Double Glazed / Sliding /
              Fixed Glass Windows
            </li>
            <li>
              <strong>Types of Glass:</strong> Toughened Glass / Float Glass
            </li>
            <li>
              <strong>MOC:</strong> Powder Coated GI
            </li>
            <li>
              <strong>Installation:</strong> Brick Wall / Wall Panels
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
