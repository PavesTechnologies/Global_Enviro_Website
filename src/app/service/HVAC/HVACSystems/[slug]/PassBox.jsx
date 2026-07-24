'use client';
import React from 'react';
import Image from 'next/image';

export default function PassBoxPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Pass Box (Dynamic &amp; Static)
        </h1>
        <p>
          Dynamic Pass Box is a cleanroom equipment used to transfer
          materials between areas of different cleanliness classifications
          while minimizing contamination. Unlike a static pass box, a
          dynamic pass box is equipped with a HEPA-filtered airflow system
          that continuously cleans the air inside the chamber during
          material transfer. Static Pass Box is a cleanroom equipment used
          for the safe transfer of materials between two controlled areas
          without allowing personnel movement between them. It acts as a
          barrier to minimize contamination and maintain the cleanliness of
          the connected rooms.
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
            <li>Clean rooms</li>
            <li>Laboratories</li>
            <li>Hospitals</li>
            <li>Food processing units</li>
            <li>Electronics manufacturing</li>
            <li>Hospitals &amp; biotech facilities</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/pass-box.jpg"
            alt="Pass Box (Dynamic & Static)"
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
            <li>Contamination-free material transfer</li>
            <li>SS304 / SS316 construction</li>
            <li>Blower/Fan Unit to create filtered airflow</li>
            <li>UV light sterilization option</li>
            <li>Electromagnetic door interlocking / Pneumatic Interlocking</li>
            <li>Toughened glass viewing panels</li>
            <li>HEPA filtration</li>
            <li>Differential Pressure Gauge (optional)</li>
            <li>Low noise blower operation</li>
            <li>Easy cleaning &amp; maintenance</li>
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
              <strong>Type of Pass Box:</strong> Dynamic / Static
            </li>
            <li>
              <strong>Filtration:</strong> HEPA Filter / Pre-Filter / Fresh
              Air Filter
            </li>
            <li>
              <strong>Classification Level:</strong> ISO Class 5
            </li>
            <li>
              <strong>Temp:</strong> Suitable for Ambient Clean Room
              Operating Conditions
            </li>
            <li>
              <strong>Types of Operation:</strong> Two Door / Three Door
              Operation
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
