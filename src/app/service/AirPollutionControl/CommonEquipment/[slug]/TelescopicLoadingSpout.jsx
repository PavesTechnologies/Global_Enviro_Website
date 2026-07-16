'use client';
import React from 'react';
import Image from 'next/image';

export default function TelescopicLoadingSpoutPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Telescopic Loading Spout
        </h1>
        <p>
          Global Enviro&apos;s Telescopic Loading Spout is a retractable chute
          system for dust-free, spillage-free loading of dry bulk powders and
          granules into tankers, trucks, rail wagons, and ships. The spout
          extends to the material pile and retracts as the level rises, with
          integrated dust extraction keeping emissions below 20 mg/NM³ during
          loading.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Product Overview
          </h2>
          <p>
            Auto level control extends and retracts the spout automatically
            to maintain a sealed loading environment, eliminating spillage
            and manual operator intervention during truck, wagon, or ship
            loading.
          </p>
          <p className="mt-3 font-semibold text-gray-700">Ideal For:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Cement</li>
            <li>Fly ash</li>
            <li>Flour</li>
            <li>Sugar</li>
            <li>Plastic granules</li>
            <li>Chemicals</li>
            <li>Grains</li>
            <li>Soda ash</li>
            <li>Carbon black</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/d02. Telescopic Loading Spout.jpeg"
            alt="Telescopic Loading Spout"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Key Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dust-Free Loading:</strong> Outer spout creates a vacuum
            annulus. Dust is pulled to an integral filter or central dust
            collector, keeping emissions &lt;20 mg/NM³ at the truck hatch.
          </li>
          <li>
            <strong>Auto Level Control:</strong> Tilt probe or radar senses
            the material pile. Spout retracts automatically to maintain seal
            with no operator needed.
          </li>
          <li>
            <strong>Abrasion Resistant:</strong> Hardox cones, ceramic
            liners, or replaceable PU cones for cement, clinker, sand —
            3x life versus mild steel.
          </li>
          <li>
            <strong>Zero Spillage:</strong> Flexible outlet skirt with 360°
            seal sits on the tanker hatch. No material escapes, no cleaning.
          </li>
          <li>
            <strong>Truck Friendly:</strong> Anti-collision sensor stops
            descent if the truck moves, preventing spout damage.
          </li>
          <li>
            <strong>Integral Filter Option:</strong> Self-cleaning cartridge
            on the spout eliminates long ducting to a central filter, saving
            space.
          </li>
          <li>
            <strong>Hot Material Duty:</strong> Stainless steel cones,
            insulation, and cooling ring for clinker up to 450°C.
          </li>
        </ul>
      </section>

      {/* ---------- Technical Specification ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specification
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Capacity Range:</strong> 50 TPH to 1000 TPH material
            loading capacity
          </li>
          <li>
            <strong>Type of Application:</strong> Truck / Wagon / Ship Loading
            for Cement, Fly Ash, Clinker, Powder Materials, Food Grains
          </li>
          <li>
            <strong>Temperature:</strong> Up to 200°C depending on material
            handled
          </li>
          <li>
            <strong>Types of Spout:</strong> Single Bellow / Double Bellow /
            Dust Controlled Loading Spout
          </li>
          <li>
            <strong>Types of Operation:</strong> Manual / Motorized /
            Automatic Telescopic System
          </li>
          <li>
            <strong>MOC:</strong> Carbon Steel (IS2062) / SS304 / SS316
          </li>
        </ul>
      </section>
    </div>
  );
}
