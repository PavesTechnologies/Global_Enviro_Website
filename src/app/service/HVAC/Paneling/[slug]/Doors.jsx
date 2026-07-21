'use client';
import React from 'react';
import Image from 'next/image';

export default function DoorsPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Doors</h1>
        <p>
          Metal Doors are durable, hygienic, and secure doors commonly used
          in cleanrooms, pharmaceutical facilities, hospitals, laboratories,
          industrial facilities, and commercial facilities. We are designed
          to provide strength, cleanliness, fire resistance, and
          environmental control while withstanding frequent use. Industrial
          and clean room doors are specially designed to provide secure,
          hygienic, and efficient access control in controlled environments
          and industrial facilities. Built with durable materials and
          precision-engineered sealing systems, these doors ensure smooth
          operation, thermal insulation, contamination control, and
          long-term reliability.
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
            <li>Pharmaceutical Industries</li>
            <li>R&amp;D Laboratories</li>
            <li>Clean room Facilities</li>
            <li>Commercial Buildings</li>
            <li>Hospitals</li>
            <li>Food Processing Industries</li>
            <li>Manufacturing Industries</li>
            <li>Residential Buildings</li>
            <li>Data Centers</li>
            <li>Fire Exits</li>
            <li>Warehouses</li>
          </ul>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/hvac-projects/door-double.jpg"
            alt="Doors"
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
                src="/assets/images/hvac-projects/door-install.jpg"
                alt="Door Installation"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Door Installation
            </p>
          </div>
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/hvac-projects/door-brochure.jpg"
                alt="Door Specification"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Door Specification
            </p>
          </div>
          <div className="text-center">
            <div className="relative w-full h-[220px]">
              <Image
                src="/assets/images/hvac-projects/door-photo.jpg"
                alt="Door Product View"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              Door Product View
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
            <li>Heavy-Duty Galvanized Steel Construction</li>
            <li>Maintain differential pressures</li>
            <li>Good Powder Coated Finish</li>
            <li>
              Infinite Color Possibilities In-House Powder Coating for
              Customized RAL Shades
            </li>
            <li>Corrosion Resistance</li>
            <li>Single &amp; Double Leaf Options</li>
            <li>In-House Laser Cutting for Perfect Sizes</li>
            <li>High Quality Frame and Shutter with Vision Glass Options</li>
            <li>
              Infill Honeycomb / Rockwool / Polyurethane Foam Insulation
            </li>
            <li>Smoke and Fire Resistant Seals</li>
            <li>Panic Bar Compatibility</li>
            <li>Self-Closing Mechanism</li>
            <li>Customize Sized Doors Possibility</li>
            <li>Low Maintenance, Cost Effective Solution</li>
            <li>Quick and easy Installation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Technical Specification
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Types of Doors:</strong> Single / Double / Emergency
              Exit / Fire Rated / Shaft Doors
            </li>
            <li>
              <strong>Rebate Size:</strong> Single Rebate 50*58 mm / 80*58 mm
              / 100*58 mm
            </li>
            <li>
              <strong>Standards:</strong> IS 3614 / BS 476
            </li>
            <li>
              <strong>Infill Materials:</strong> Honeycomb / Rockwool / PUF
              Fill Insulation
            </li>
            <li>
              <strong>Finish:</strong> Pure Polyester Powder Coated Surface
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Door Type Specification Table ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Door Type Specifications
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full min-w-160 text-sm text-left border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Specification</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Clean Room Door</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Commercial Door</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">General Purpose</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Fire Door</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 bg-white">
                <td className="px-4 py-3 font-medium text-gray-700 align-top">Material</td>
                <td className="px-4 py-3 align-top">Galvanized Plain Skin Pass Steel / Stainless Steel 304 Grade</td>
                <td className="px-4 py-3 align-top">Galvanized Plain Skin Pass Steel / Stainless Steel 304 Grade</td>
                <td className="px-4 py-3 align-top">Galvanized Plain Skin Pass Steel / Stainless Steel 304 Grade</td>
                <td className="px-4 py-3 align-top">Galvanized Plain Skin Pass Steel / Stainless Steel 304 Grade</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700 align-top">Sheet Thickness</td>
                <td className="px-4 py-3 align-top">0.8 mm (Shutter) / 1.2 mm (Frame)</td>
                <td className="px-4 py-3 align-top">0.8 mm (Shutter) / 1.2 mm (Frame)</td>
                <td className="px-4 py-3 align-top">0.8 mm (Shutter) / 1.2 mm (Frame)</td>
                <td className="px-4 py-3 align-top">0.8, 1.2 mm (Shutter) / 1.2 mm (Frame)</td>
              </tr>
              <tr className="border-t border-gray-200 bg-white">
                <td className="px-4 py-3 font-medium text-gray-700 align-top">Shutter Thickness</td>
                <td className="px-4 py-3 align-top">44 mm</td>
                <td className="px-4 py-3 align-top">44 mm</td>
                <td className="px-4 py-3 align-top">44 mm</td>
                <td className="px-4 py-3 align-top">44 mm</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700 align-top">Infill Material</td>
                <td className="px-4 py-3 align-top">Honeycomb / PUF</td>
                <td className="px-4 py-3 align-top">Honeycomb</td>
                <td className="px-4 py-3 align-top">Honeycomb</td>
                <td className="px-4 py-3 align-top">Rockwool</td>
              </tr>
              <tr className="border-t border-gray-200 bg-white">
                <td className="px-4 py-3 font-medium text-gray-700 align-top">Applications</td>
                <td className="px-4 py-3 align-top">Pharma, Food Industries, Hospitals, Offices</td>
                <td className="px-4 py-3 align-top">Malls, Residential, Institutions, Offices</td>
                <td className="px-4 py-3 align-top">All</td>
                <td className="px-4 py-3 align-top">Shopping Malls, Pharma, Industries, Apartments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---------- Door Size Range Table ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Door Size Range
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full min-w-160 text-sm text-left border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Door Type</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Dimension</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Clean Room Door</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Commercial Door</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">General Purpose</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Fire Door</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 bg-white">
                <td className="px-4 py-3 font-medium text-gray-700 align-top" rowSpan={2}>Single Door</td>
                <td className="px-4 py-3 align-top">Width (mm)</td>
                <td className="px-4 py-3 align-top">750–1200</td>
                <td className="px-4 py-3 align-top">750–1200</td>
                <td className="px-4 py-3 align-top">750–1200</td>
                <td className="px-4 py-3 align-top">750–1200</td>
              </tr>
              <tr className="border-t border-gray-200 bg-white">
                <td className="px-4 py-3 align-top">Height (mm)</td>
                <td className="px-4 py-3 align-top">1200–2500</td>
                <td className="px-4 py-3 align-top">1200–2500</td>
                <td className="px-4 py-3 align-top">1200–2500</td>
                <td className="px-4 py-3 align-top">1200–2500</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700 align-top" rowSpan={2}>Double Door</td>
                <td className="px-4 py-3 align-top">Width (mm)</td>
                <td className="px-4 py-3 align-top">1000–2300</td>
                <td className="px-4 py-3 align-top">1000–2300</td>
                <td className="px-4 py-3 align-top">1000–2300</td>
                <td className="px-4 py-3 align-top">1000–2300</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-4 py-3 align-top">Height (mm)</td>
                <td className="px-4 py-3 align-top">1200–2500</td>
                <td className="px-4 py-3 align-top">1200–2500</td>
                <td className="px-4 py-3 align-top">1200–2500</td>
                <td className="px-4 py-3 align-top">1200–2500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
