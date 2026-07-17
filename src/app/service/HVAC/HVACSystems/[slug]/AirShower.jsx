'use client';
import React from 'react';
import Image from 'next/image';

export default function AirShowerPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Air Shower</h1>
        <p>
          Air Shower is a self-contained chamber installed at the entrance
          of cleanrooms and controlled environments. It uses high-velocity
          HEPA-filtered air jets to remove dust, lint, and other
          contaminants from personnel or materials before they enter a clean
          area. Emergency stops, LED indicators, and toughened glass meet
          GMP and safety requirements. Every unit ships with velocity
          mapping, DOP test reports, and full validation support. This
          isn&apos;t just moving air. It&apos;s protecting critical
          environments from the first step inside. Built for reliability in
          every nozzle, weld, and seal, because classification depends on
          entry. Pure air begins at the door.
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
            <li>Healthcare Facilities</li>
            <li>Electronics Industry</li>
            <li>Food &amp; beverage industries</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/air-shower.jpg"
            alt="Air Shower"
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
            <li>High-velocity HEPA-filtered airflow</li>
            <li>Automatic sensor-based operation</li>
            <li>Interlocked door system</li>
            <li>SS304 / powder-coated construction</li>
            <li>Energy-efficient blower system</li>
            <li>LED display and control panel</li>
            <li>Low noise operation</li>
            <li>Customizable design and size</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Capacity Range:</strong> Suitable for Single Person to
              Multi Person Clean Room Entry Systems
            </li>
            <li>
              <strong>Type of Application:</strong> Dust &amp; Contamination
              Removal in Pharmaceutical / Clean Room / Food / Electronics
              Industries
            </li>
            <li>
              <strong>Temp:</strong> Suitable for Ambient Clean Room
              Operating Conditions
            </li>
            <li>
              <strong>Types of Air Shower:</strong> Two Side / Tunnel Type
              Air Shower
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
