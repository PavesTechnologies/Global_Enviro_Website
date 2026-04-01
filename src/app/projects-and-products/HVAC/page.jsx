"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function HVACPage() {
  const productOfferings = [
    "Cleanroom Project Design and Execution",
    "Wall & Ceiling Panels",
    "Scientific Doors",
    "Air Handling Units",
    "Pre and Fine Filters",
    "HEPA Filters",
    "Pass Boxes",
    "Sampling & Dispensing Units",
    "Laminar Air Flow Units",
    "Clean Room Furniture",
    "Unit Dust Collectors",
    "HVAC Accessories i.e. HEPA Modules, Grills & Diffusers, VCD’s etc",
    "Clean Room Validation",
  ];

  const turnkeySolutions = [
    "Design of Complete Clean Room",
    "Validation as per FDA/GMP",
    "HEPA Filter Integrity Test (D.O.P)",
    "Airborne Room Particle Count Test",
    "DQ, IQ, OQ, PQ protocols as per FDA/GMP",
    "Chilled Water, Hot Water Pipeline Calculations",
    "Supply & Commissioning of Electrical Control Panels",
    "Air Flow Pattern Test, Air Flow Velocity, Duct Leak Test and Air Changes Profile Test",
  ];

  const systemBoxes = [
    { label: "Clean Room Projects", color: "bg-[#0094c6]" },
    { label: "Ventilation Systems", color: "bg-[#e97451]" },
    { label: "Evaporative Cooling Systems", color: "bg-[#00b7a8]" },
    { label: "Fume/Gas Extraction Systems", color: "bg-[#e4572e]" },
    { label: "Dust Collection Systems", color: "bg-[#0077b6]" },
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* 🔹 ABOUT US + PRODUCT OFFERINGS */}
      <section className="flex flex-col lg:flex-row px-10 py-16 gap-10">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-black">ABOUT US</h2>
          <p className="text-lg leading-relaxed">
            Ours is an Engineering-based company and glad to introduce us as one of the
            reputed Designers, Manufacturers & Suppliers of HVAC Cleanroom Projects,
            Pollution Control and Material Handling Equipment and Systems.
            We are centrally located in Hyderabad to meet the demand of our products
            & systems at the shortest time.
          </p>
          <Image
            src="/assets/images/clean room panel.png"
            alt="HVAC Cleanroom"
            width={550}
            height={380}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 bg-[#0094c6] text-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b border-white pb-2">
            PRODUCT OFFERINGS
          </h2>
          <div className="space-y-3">
            {productOfferings.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2"
              >
                <ChevronRight className="w-5 h-5 text-white mt-1" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 TURNKEY SOLUTIONS */}
      <section className="flex flex-col lg:flex-row px-10 py-16 gap-10 bg-gradient-to-br from-[#e9f3ff] to-[#f8fbff]">
        {/* LEFT SIDE */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold text-black mb-6">
            TURNKEY SOLUTION FOR HVAC CLEAN ROOM
          </h2>
          <ul className="list-none space-y-2 text-lg">
            {turnkeySolutions.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 font-bold">►</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* RIGHT SIDE SYSTEM BOXES */}
        <div className="lg:w-1/2 flex flex-col justify-start relative">
          <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 rotate-[-90deg] bg-[#0b3d91] text-white px-4 py-3 font-semibold tracking-widest rounded-t-md">
            SYSTEMS
          </div>
          <div className="flex flex-col w-full border-l-4 border-[#0b3d91] ml-6">
            {systemBoxes.map((box, i) => (
              <div
                key={i}
                className={`text-[#0b3d91] text-lg font-medium px-5 py-3 mb-2 ${
            i % 2 === 0 ? "bg-[#d9efff]" : "bg-white"
          }`}
                
              >
                {box.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

