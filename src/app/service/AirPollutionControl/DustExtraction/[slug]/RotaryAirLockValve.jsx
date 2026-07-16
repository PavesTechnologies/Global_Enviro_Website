'use client';
import React from 'react';
import Image from 'next/image';

export default function RotaryAirLockValvePage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-10">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-800">
            RAV — Rotary Air Lock Valve
          </h1>
          <p>
            The Rotary Air Lock Valve (RAV) is installed beneath the hoppers
            of cyclones, bag filters, and silos to continuously discharge
            collected dust or bulk material while maintaining an airlock
            between the process, which typically operates under negative or
            positive pressure, and the atmosphere.
          </p>
          <p className="mt-3">
            A motor-driven rotor with multiple pockets rotates within a close-
            tolerance housing, metering material out through the bottom outlet
            in a continuous, controlled flow without allowing false air
            ingress or process air leakage.
          </p>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a07. Rotary Air Lock Valve.jpg"
            alt="Rotary Air Lock Valve"
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
              <td>Continuous dust / material discharge under airlock</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Drive</td>
              <td>Geared motor with chain or direct coupling</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Rotor</td>
              <td>6 / 8 blade pocket rotor, adjustable tip clearance</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium py-2 pr-3">Operating Temp</td>
              <td>Up to 250°C (standard); higher on request</td>
            </tr>
            <tr>
              <td className="font-medium py-2 pr-3">MOC</td>
              <td>MS / SS304 / SS316</td>
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
          <li>Maintains continuous material discharge without breaking the airlock</li>
          <li>Adjustable rotor tip clearance to minimize air leakage</li>
          <li>Robust construction suited for abrasive and hot dust</li>
          <li>Available with shear pin, geared limit switch, and speed sensors</li>
          <li>Low-maintenance bearing and sealing arrangement</li>
        </ul>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Applications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Beneath bag filter and cyclone hoppers</li>
          <li>Silo and bin discharge for cement, fly ash, and bulk powders</li>
          <li>Pneumatic conveying system material feeding</li>
          <li>Boiler ash handling systems</li>
        </ul>
      </section>
    </div>
  );
}
