'use client';
import React from 'react';
import Image from 'next/image';

export default function DustExtractionPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Dust Extraction Systems
        </h1>
        <p>
          Global Enviro offers high-performance Dust Extraction and Furnace Fume
          Extraction Systems designed to maintain clean air environments in
          industrial plants. Our systems effectively capture and control dust,
          fumes, and particulate matter generated during manufacturing, ensuring
          a safe, compliant, and efficient workspace.
        </p>
      </section>

      {/* ---------- Technical Specifications ---------- */}
      {/* Two-column layout: left = specs, right = image */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE – Technical Specs Table */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Technical Specifications
          </h2>
          <table className="table-auto w-full text-sm border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="font-medium py-2 pr-3">Application</td>
                <td>Dust Extraction / Fume Extraction</td>
              </tr>
              <tr className="border-b">
                <td className="font-medium py-2 pr-3">Capacity Range</td>
                <td>Up to 2,50,000 CMH</td>
              </tr>
              <tr className="border-b">
                <td className="font-medium py-2 pr-3">Operating Temp</td>
                <td>Up to 260°C</td>
              </tr>
              <tr className="border-b">
                <td className="font-medium py-2 pr-3">Filter Bag Materials</td>
                <td>Polyester, PPS, Nomex, P-84, PTFE</td>
              </tr>
              <tr className="border-b">
                <td className="font-medium py-2 pr-3">MOC</td>
                <td>SS304 / SS316 / IS2062</td>
              </tr>
              <tr>
                <td className="font-medium py-2 pr-3">Cleaning Type</td>
                <td>Offline / Online Pulse Jet</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RIGHT SIDE – Image */}
        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/dust extraction.png"
            alt="Dust Extraction System"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- About Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          About Global Enviro Dust Extraction Systems
        </h2>
        <p>
          Global Enviro designs and manufactures premium-quality industrial dust
          extraction and collection systems that meet stringent industry
          standards. Our equipment ensures maximum air quality, operational
          reliability, and worker safety, making it ideal for a wide range of
          industrial applications.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Dust collection for food processing, weighing, and packing</li>
          <li>Dust extraction during mixing, screening, and blending</li>
          <li>Furnace fume extraction systems for metallurgical industries</li>
        </ul>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Applications & Solutions Offered
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dust Collection Systems for Mixing, Packing, Weighing, Screening, and Blending</li>
          <li>Pneumatic Conveying Systems for Powders and Granules</li>
          <li>Aspiration Units / Vent Filters for Dump Hoppers</li>
          <li>Aspiration Units / Vent Filters for Weighing Bins</li>
          <li>Aspiration Units / Vent Filters for Hammer Mills</li>
          <li>Dust Collection Systems for Ball Mills and Pulverizers</li>
          <li>Dust Collectors for Dryers</li>
          <li>Dust Extraction Units for Small and Big Bag Unloading Areas</li>
          <li>Centrifugal Blowers / ID Fans</li>
          <li>Bag Filters for Boiler Flue Gas Applications</li>
        </ul>
      </section>

      {/* ---------- Why Choose ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Why Choose Global Enviro?
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Efficient Air Filtration:</strong> Maintains clean air and reduces emissions.</li>
          <li><strong>High Reliability:</strong> Built with durable materials like SS304/SS316 for long life.</li>
          <li><strong>Custom Design:</strong> Tailored to meet industry-specific requirements.</li>
          <li><strong>Compliance Ready:</strong> Meets environmental and safety regulations.</li>
          <li><strong>Enhanced Productivity:</strong> Keeps the work environment dust-free, improving equipment longevity and worker health.</li>
        </ul>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Cleaner Air, Healthier Workplaces
        </h2>
        <p>
          All Global Enviro Dust Collection Systems — from mixing and drying to
          packing and weighing — play a vital role in ensuring smooth plant
          operations while maintaining a healthy, pollution-free environment for
          all.
        </p>
      </section>
    </div>
  );
}



