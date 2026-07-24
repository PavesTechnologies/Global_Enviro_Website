"use client";
import React from "react";
import Image from "next/image";

export default function LinersPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-2 text-blue-800">Liners</h1>
        <p className="text-lg font-medium text-gray-600 mb-4">
          Durable Wear Protection for Extended Equipment Life
        </p>
        <p>
          Liners are protective components designed to safeguard industrial
          equipment and surfaces from wear, abrasion, impact, and corrosion
          during material handling and processing operations. Manufactured from
          high-strength and wear-resistant materials, liners enhance equipment
          durability, reduce maintenance costs, and improve operational
          efficiency in demanding industrial environments.
        </p>
      </section>

      {/* ---------- Ideal For + Application Gallery ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Ideal For
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cement &amp; Mining Industries</li>
              <li>Pumps, Valves &amp; Compressors</li>
              <li>Material Handling Equipment</li>
              <li>Heavy Engineering Applications</li>
              <li>Power &amp; Process Industries</li>
              <li>Machinery &amp; Automotive Components</li>
              <li>Industrial Manufacturing Units</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Casting Division
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="relative w-full aspect-4/3">
                  <Image
                    src="/assets/images/metallurgicals-projects/casting-1.jpg"
                    alt="Casting Division View 1"
                    fill
                    className="object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-4/3">
                  <Image
                    src="/assets/images/metallurgicals-projects/casting-2.jpg"
                    alt="Casting Division View 2"
                    fill
                    className="object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
