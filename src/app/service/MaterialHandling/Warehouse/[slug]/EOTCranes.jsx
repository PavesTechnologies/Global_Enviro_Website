'use client';
import React from 'react';
import Image from 'next/image';

export default function EOTCranesPage() {
  return (
    <div className="bg-white text-gray-800 leading-relaxed">
      {/* ---------- Intro Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">EOT Cranes</h1>
        <p>
          An EOT Crane is a heavy-duty material handling system designed to
          lift, transport, and position materials within industrial
          facilities. Operating on elevated runway beams, EOT cranes provide
          safe, efficient, and precise movement of heavy loads, improving
          productivity and reducing manual handling efforts. EOT Cranes
          provide a safe, reliable, and efficient solution for heavy
          material handling, enabling seamless movement of loads across
          industrial facilities while maximizing operational efficiency and
          workplace safety.
        </p>
      </section>

      {/* ---------- Product Overview ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-6 flex justify-center">
        <div className="relative w-full max-w-xl h-[320px]">
          <Image
            src="/assets/images/EOT and HOT cranes.png"
            alt="EOT Cranes"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
}
