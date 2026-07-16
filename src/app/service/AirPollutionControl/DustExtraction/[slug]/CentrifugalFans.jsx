'use client';
import React from 'react';
import Image from 'next/image';

export default function CentrifugalFansPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-10">
        {/* LEFT SIDE – Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-800">
            Centrifugal Fans
          </h1>
          <p>
            Centrifugal Blowers from Global Enviro are among the most efficient
            and versatile air-moving systems used in modern industries. These
            fans are built to deliver consistent airflow, low vibration, and
            quiet operation, making them ideal for a variety of air handling and
            process applications.
          </p>
          <p className="mt-3">
            Our centrifugal fans are precision-engineered with aerodynamic
            designs that enhance airflow efficiency while minimizing energy
            consumption. Each fan is fabricated with robust materials and
            high-quality components, ensuring long life and reliability even in
            challenging operating environments.
          </p>
        </div>

        {/* RIGHT SIDE – Image */}
        <div className="relative w-full h-[320px]">
          <Image
            src="/assets/images/Air_Pollution/a03. Centrifugal Fans-1.jpeg"
            alt="Centrifugal Fans"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Applications
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Induced Draft (ID) and Forced Draft (FD) Systems</li>
          <li>Primary Air (PA) Systems in Boilers</li>
          <li>Dust Extraction Systems</li>
          <li>Fume Exhaust Systems</li>
          <li>Pneumatic Conveying Systems</li>
          <li>Industrial Ventilation and Air Circulation</li>
        </ul>
      </section>

      {/* ---------- Key Features ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>High Efficiency:</strong> Designed for maximum airflow with
            minimal power usage.
          </li>
          <li>
            <strong>Low Noise Operation:</strong> Engineered blades ensure
            smooth, quiet performance.
          </li>
          <li>
            <strong>Durable Construction:</strong> Built with high-grade SS316,
            SS304, or IS2062 materials.
          </li>
          <li>
            <strong>Wide Temperature Range:</strong> Performs reliably in
            environments up to 400°C.
          </li>
          <li>
            <strong>Flexible Design Options:</strong> Available in multiple
            blade types — Forward, Backward, Radial, and Aerofoil.
          </li>
          <li>
            <strong>Easy Maintenance:</strong> Simple design for quick assembly,
            disassembly, and servicing.
          </li>
        </ul>
      </section>

      {/* ---------- Why Choose ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Why Choose Global Enviro Centrifugal Fans?
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Advanced Aerodynamic Design:</strong> Optimized for enhanced
            airflow and reduced resistance.
          </li>
          <li>
            <strong>Energy Efficient:</strong> Low operating costs through
            efficient power utilization.
          </li>
          <li>
            <strong>Custom-Built Solutions:</strong> Tailored to match your
            specific process and performance needs.
          </li>
          <li>
            <strong>Proven Reliability:</strong> Designed to perform
            continuously under tough industrial conditions.
          </li>
        </ul>
      </section>

      {/* ---------- Performance Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Performance You Can Rely On
        </h2>
        <p>
          With a reputation for quality engineering and dependable performance,
          Global Enviro Centrifugal Fans are the preferred choice for industries
          seeking efficient air movement, long-lasting durability, and energy
          savings across multiple applications.
        </p>
      </section>
    </div>
  );
}
