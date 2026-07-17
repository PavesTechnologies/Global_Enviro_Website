'use client';
import React from 'react';
import Image from 'next/image';

export default function LaminarFlowUnitPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Laminar Flow Unit
        </h1>
        <p>
          Laminar Air Flow (LAF) Unit is a clean-air workstation designed to
          provide a contamination-free working environment by directing
          highly filtered air in a uniform, unidirectional flow over the
          work area. It is widely used in pharmaceutical, microbiological,
          electronics, and research applications where product protection
          from airborne contamination is critical. We engineer Laminar Flow
          Units that deliver ISO Class 5 air exactly where your product
          lives. We ensure H14 HEPA filtration with scan-tested, zero-leak
          integrity in every unit. We build with SS304 work zones, coved
          corners, and flush surfaces for easy cleaning. We build
          reliability into every weld and seal, because contamination has no
          second chance. This is how we protect your critical process – with
          airflow we stand behind.
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
            <li>Pharmaceutical industries</li>
            <li>Clean rooms</li>
            <li>Microbiology laboratories</li>
            <li>Hospitals and Healthcare</li>
            <li>Electronics Industry</li>
            <li>Food &amp; beverage industries</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/laminar-flow-unit.jpg"
            alt="Laminar Flow Unit"
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
            <li>HEPA-filtered laminar airflow</li>
            <li>Uniform air velocity distribution</li>
            <li>Provides a highly clean work environment</li>
            <li>Protects products from airborne contamination</li>
            <li>Low noise and vibration operation</li>
            <li>UV light sterilization option</li>
            <li>Energy-efficient blower system</li>
            <li>Easy maintenance and cleaning</li>
            <li>Compact and ergonomic design</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> Suitable for Small to Large
              Clean Room Applications
            </li>
            <li>
              <strong>Classification Level:</strong> ISO Class 5
            </li>
            <li>
              <strong>Temp:</strong> Suitable for Ambient Clean Room
              Operating Conditions
            </li>
            <li>
              <strong>Types of Laminar Flow:</strong> Horizontal Laminar
              Flow / Vertical Laminar Flow / Reverse Flow Units
            </li>
            <li>
              <strong>Types of Filtration:</strong> Pre Filter / Fine Filter
              / HEPA Filtration
            </li>
            <li>
              <strong>MOC:</strong> SS304 / SS316
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
