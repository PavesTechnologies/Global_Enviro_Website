'use client';
import React from 'react';
import Image from 'next/image';

export default function BiomassBriquettesPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">
          Biomass Briquettes
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-4">
          Clean Fuel for a Greener Tomorrow
        </p>
        <p>
          Biomass briquettes are a renewable, high-efficiency fuel made from
          agricultural and industrial biomass waste — an eco-friendly
          alternative to conventional fossil fuels for boilers and
          furnaces.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6 flex justify-center">
        <div className="relative w-full max-w-xl h-[320px]">
          <Image
            src="/assets/images/metallurgicals-projects/biomass-briquettes.jpg"
            alt="Biomass Briquettes"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Advantages & Benefits ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Advantages
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Eco-friendly and renewable fuel source</li>
            <li>High calorific value with efficient heat generation</li>
            <li>Low moisture content for better combustion efficiency</li>
            <li>Reduced smoke, ash, and harmful emissions</li>
            <li>Uniform size and density for easy handling and storage</li>
            <li>Cost-effective alternative to conventional fossil fuels</li>
            <li>Suitable for automated feeding and combustion systems</li>
            <li>Utilizes agricultural and biomass waste effectively</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Benefits
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Reduces dependency on coal, furnace oil, and other fossil
              fuels
            </li>
            <li>Helps in lowering overall fuel and operational costs</li>
            <li>Supports sustainable waste management and recycling</li>
            <li>Minimizes carbon footprint and environmental pollution</li>
            <li>Improves boiler and furnace combustion performance</li>
            <li>
              Reduces storage space compared to loose biomass materials
            </li>
            <li>Ensures cleaner workplace and safer fuel handling</li>
            <li>
              Contributes to green energy and sustainable industrial
              practices
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
