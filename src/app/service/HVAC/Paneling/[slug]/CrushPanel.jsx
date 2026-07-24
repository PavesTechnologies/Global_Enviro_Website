'use client';
import React from 'react';
import Image from 'next/image';

export default function CrushPanelPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Crush Panel
        </h1>
        <p>
          Crush Panel is a specially designed panel to install in
          cleanrooms, pharmaceutical facilities, and bulk drugs laboratories
          to protect personnel&apos;s escape from the fire, fumes, and
          hazard situations.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p className="font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Pharmaceutical industries</li>
            <li>Clean rooms &amp; Laboratories</li>
            <li>Food Processing Units</li>
            <li>Manufacturing Facilities</li>
          </ul>
        </div>

        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px]">
          <Image
            src="/assets/images/hvac-projects/crush-panel.jpg"
            alt="Crush Panel"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Key Features & Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Toughened glass</li>
            <li>Durable and long-lasting construction</li>
            <li>Easy to clean and maintain</li>
            <li>Quick installation</li>
            <li>Available in customized sizes and finishes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Frame Thickness:</strong> 80 / 100 mm
            </li>
            <li>
              <strong>Sheet Thickness:</strong> 1.2 mm for Frame
            </li>
            <li>
              <strong>Glass Thickness:</strong> 8 mm Toughened glass
            </li>
            <li>
              <strong>MOC:</strong> Galvanized Plain Skin Pass Steel
            </li>
            <li>
              <strong>Finish:</strong> Pure Polyester Powder Coated Surface
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
