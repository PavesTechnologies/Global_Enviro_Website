'use client';
import React from 'react';
import Image from 'next/image';

export default function AxialFlowFansPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-10">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-800">
            Axial Flow Fans
          </h1>
          <p>
            Global Enviro&apos;s Axial Flow Fans move air parallel to the fan
            shaft, delivering high-volume airflow at low to medium static
            pressure. Their compact, direct-mounted design makes them ideal
            for large-area ventilation, cooling, and exhaust applications
            where high air throughput is the primary requirement.
          </p>
          <p className="mt-3">
            Each fan is built with aerodynamically profiled blades and a
            balanced impeller assembly to ensure smooth, low-vibration
            operation over long duty cycles, even in demanding industrial
            environments.
          </p>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a08. Axial Flow Fans.jpeg"
            alt="Axial Flow Fans"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Technical Specifications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Technical Specifications
        </h2>
        <table className="table-auto w-full text-sm border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Application</td>
              <td>High-volume ventilation and exhaust</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Airflow Type</td>
              <td>Parallel to shaft (axial), low-to-medium static pressure</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Drive</td>
              <td>Direct-driven or belt-driven</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Blade Material</td>
              <td>MS / Aluminium / FRP (application dependent)</td>
            </tr>
            <tr>
              <td className="font-medium py-2 pr-3">Mounting</td>
              <td>Wall, duct, or roof mounted</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------- Key Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>High air volume delivery at low-to-medium static pressure</li>
          <li>Compact, direct-mounted design saves installation space</li>
          <li>Aerodynamically profiled blades for quiet, efficient operation</li>
          <li>Balanced impeller for low vibration over long duty cycles</li>
          <li>Available in multiple sizes and drive configurations</li>
        </ul>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Applications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>General industrial ventilation and air circulation</li>
          <li>Cooling tower and radiator cooling fans</li>
          <li>Tunnel and warehouse ventilation</li>
          <li>Wall and roof-mounted exhaust systems</li>
        </ul>
      </section>
    </div>
  );
}
