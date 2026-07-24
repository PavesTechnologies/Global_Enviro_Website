'use client';
import React from 'react';
import Image from 'next/image';

export default function VibratoryScreenPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Vibratory Screen (Single/Double/Triple Deck)
        </h1>
        <p>
          Vibratory Screens are high-performance screening equipment
          designed for the separation, grading, and classification of bulk
          materials based on particle size. Available in single / double
          deck / triple deck configurations, these screens provide efficient
          and continuous operation for a wide range of industrial
          applications. Their robust construction and vibration mechanism
          ensure accurate screening with high throughput and minimal
          maintenance.
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
            <li>Cement &amp; Mineral Industries</li>
            <li>Coal &amp; Power Plants</li>
            <li>Food Processing Industries</li>
            <li>Chemical &amp; Fertilizer Plants</li>
            <li>Sand &amp; Aggregate Processing</li>
            <li>Recycling &amp; Material Recovery Systems</li>
            <li>Bulk Material Handling Applications</li>
          </ul>
        </div>

        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/vibratory-screen.jpg"
            alt="Vibratory Screen"
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
            <strong>Capacity Range:</strong> 1 TPH to 300 TPH. Mining,
            Power, Steel, Aggregates, Recycling
          </li>
          <li>
            <strong>Types of Screen:</strong> Circular Motion / Linear
            Motion / Flip Flow Screen / Hybrid (Top Deck Circular Motion /
            Bottom Deck / Flip flow)
          </li>
          <li>
            <strong>Types of Media:</strong> Wire Mesh / Polyurethane /
            Rubber / Perforated Plate / Finger Deck
          </li>
          <li>
            <strong>MOC:</strong> MS Fabricated / SS304 / SS316. Springs:
            Alloy Steel. Side Plates: MS/Lined
          </li>
        </ul>
      </section>
    </div>
  );
}
