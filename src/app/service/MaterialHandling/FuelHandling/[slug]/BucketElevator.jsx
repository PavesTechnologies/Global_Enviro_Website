'use client';
import React from 'react';
import Image from 'next/image';

export default function BucketElevatorPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Bucket Elevator
        </h1>
        <p>
          Bucket Elevators are vertical conveying systems designed for the
          efficient lifting and transportation of bulk materials. Equipped
          with a series of buckets mounted on belts or chains, these
          elevators ensure smooth and continuous handling of powders,
          granules, and bulk solids with minimal spillage and material
          degradation. They are widely used in industrial processing and
          bulk material handling applications.
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
            <li>Food &amp; Grain Processing Plants</li>
            <li>Chemical &amp; Fertilizer Industries</li>
            <li>Power &amp; Fuel Handling Systems</li>
            <li>Packaging &amp; Manufacturing Units</li>
            <li>Agricultural Processing Facilities</li>
            <li>Bulk Material Storage &amp; Handling Applications</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/material-handling-projects/bucket-elevator.jpg"
            alt="Bucket Elevator"
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
                src="/assets/images/material-handling-projects/bucket-elevator-2.jpg"
                alt="Bucket Elevator Installation"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
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
            <li>Efficient vertical conveying of bulk materials</li>
            <li>High-capacity and continuous operation</li>
            <li>Minimal material spillage and degradation</li>
            <li>Robust and durable construction</li>
            <li>Suitable for powders, granules, and lump materials</li>
            <li>Energy-efficient drive mechanisms</li>
            <li>Compact design with low floor space requirement</li>
            <li>
              Customized bucket sizes, capacities, and configurations
              available
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> 5 TPH to 100 TPH. Power,
              Cement, Food, Chemicals, Grains
            </li>
            <li>
              <strong>Type of Application:</strong> Vertical lifting of
              Coal, Ash, Clinker, Cement, Grains, Pellets
            </li>
            <li>
              <strong>Temp:</strong> Ambient to 120°C. Up to 120°C with heat
              resistant buckets
            </li>
            <li>
              <strong>Types of Elevator:</strong> Centrifugal Discharge /
              Continuous Discharge / Chain Type / Belt Type
            </li>
            <li>
              <strong>Types of Bucket:</strong> Pressed Steel / Fabricated /
              Plastic / SS
            </li>
            <li>
              <strong>MOC:</strong> MS Fabricated / SS304 / SS316. Casing:
              MS/GI. Boot &amp; Head: MS/Lined
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
