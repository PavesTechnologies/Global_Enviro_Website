'use client';
import React from 'react';
import Image from 'next/image';

export default function ModulesGrillsDiffusersPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Modules, Grills, Diffusers &amp; Linear Bar Grills
        </h1>
        <p>
          The Module is a specialized HVAC and cleanroom component designed
          to deliver filtered, conditioned air into a controlled
          environment. It is typically installed in the ceiling, Wall and is
          used to maintain air cleanliness, airflow patterns, temperature,
          humidity, and room pressurization. The primary purpose of a Supply
          Air Module is to Supply clean and filtered air to a room, Maintain
          required air changes per hour (ACH), Control airborne
          contamination, Ensure positive or negative room pressure as
          required, Provide uniform air distribution.
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
            <li>Healthcare &amp; Hospitals</li>
            <li>Food &amp; beverage industries</li>
            <li>Electronics &amp; Semiconductor Manufacturing</li>
            <li>Clean room applications</li>
            <li>HVAC systems where required</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/module-hepa-housing.jpg"
            alt="Modules, Grills, Diffusers & Linear Bar Grills"
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
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/hvac-projects/module-latch-grill.jpg"
                alt="Latch Type Grill"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Latch Type Grill
            </p>
          </div>
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/hvac-projects/module-diffuser.jpg"
                alt="Diffuser"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">Diffuser</p>
          </div>
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/hvac-projects/module-linear-bar-grill.jpg"
                alt="Linear Bar Grill"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Linear Bar Grill
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
            <li>Modular and compact design</li>
            <li>DOP/PAO Test Port</li>
            <li>Easy installation and maintenance</li>
            <li>Custom-built configurations</li>
            <li>High operational efficiency</li>
            <li>Improves indoor air quality</li>
            <li>Reduces contamination risks</li>
            <li>Compliance with cleanroom and GMP requirements</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Types of Modules:</strong> Supply Air Modules / Return
              Air Modules
            </li>
            <li>
              <strong>Types of Assembly:</strong> Welded Construction with
              Gear wheel operated for Damper open / close
            </li>
            <li>
              <strong>Type of Mounting:</strong> Ceiling Mounted / Wall
              Mounted / Duct Connected
            </li>
            <li>
              <strong>Type of Module Grills:</strong> Perforated Plain
              Grills / Latch type Grills
            </li>
            <li>
              <strong>Type of Grills:</strong> 2-Way Diffusers / 4-Way
              Diffusers / Linear Bar Grills
            </li>
            <li>
              <strong>MOC:</strong> Galvanized Sheet Steel (Powder Coated) /
              SS304 / SS316 / Aluminium
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
