"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection/HeroSection";

const sections = [
  {
    id: "fuel-handling",
    title: "1. Fuel Handling Systems",
    color: "bg-indigo-700",
    subsystems: ["Coal Handling", "Husk Handling", "Biomass Briquettes Handling"],
    equipment: [
      { name: "Belt Conveyor",                          img: "/assets/images/belt conveyor.png" },
      { name: "Bucket Elevator",                        img: "/assets/images/ash handling.png" },
      { name: "Slot Chain Conveyor",                    img: "/assets/images/fuel handling system.png" },
      { name: "Vibratory Screen (Single/Double Deck)",  img: "/assets/images/vibratory screen.png" },
      { name: "Screw Conveyor",                         img: "/assets/images/belt conveyor.png" },
      { name: "Crusher (Impact Hammer Mill)",           img: "/assets/images/crusher.png" },
      { name: "Crusher cum Screen",                     img: "/assets/images/crusher.png" },
    ],
  },
  {
    id: "ash-handling",
    title: "2. Ash Handling Systems",
    color: "bg-slate-700",
    subsystems: [
      "Dense Phase Ash Handling",
      "Lean Phase Ash Handling",
      "Mechanical Ash Handling",
    ],
    equipment: [
      { name: "Dense Veyor",    img: "/assets/images/densephase ash handling.png" },
      { name: "Ash Veyor",      img: "/assets/images/ash handling.png" },
      { name: "Wet Scrapper",   img: "/assets/images/dust extraction.png" },
      { name: "Ash Conditioner",img: "/assets/images/ash conditioner.png" },
    ],
  },
  {
    id: "warehouse",
    title: "3. Warehouse Handling Systems",
    color: "bg-blue-800",
    subsystems: ["EOT Cranes"],
    equipment: [
      { name: "Single Girder EOT Crane", img: "/assets/images/EOT and HOT cranes.png" },
      { name: "Double Girder EOT Crane", img: "/assets/images/EOT and HOT cranes.png" },
    ],
  },
];

function MHAccordion({ section, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-6 py-4 text-left text-white font-semibold text-base ${section.color} hover:opacity-90 transition-all`}
      >
        <span>{section.title}</span>
        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="bg-white px-6 py-6 space-y-6">
              {/* Sub-systems */}
              {section.subsystems.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    System Types
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {section.subsystems.map((s) => (
                      <span key={s} className="bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Equipment grid */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Equipment
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {section.equipment.map((eq) => (
                    <div key={eq.name} className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-3 border border-gray-100 hover:shadow-md transition-shadow">
                      <img
                        src={eq.img}
                        alt={eq.name}
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <p className="text-xs font-medium text-gray-700 leading-tight">{eq.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MaterialHandlingPage() {
  const [openId, setOpenId] = useState("fuel-handling");

  return (
    <main>
      <HeroSection
        imageSrc="/assets/images/fuel handling system.png"
        title="Material Handling Systems"
        subtitle="Complete bulk material handling — fuel, ash, and warehouse systems — engineered for power, pharma, and process industries."
        align="left"
        overlay="bg-black/60"
        height="h-[380px]"
      />

      <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0b1e3d] mb-3">
            Our Handling Systems
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Explore our three core material handling divisions — each covering
            specific system types and the equipment deployed within them.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <MHAccordion
              key={section.id}
              section={section}
              isOpen={openId === section.id}
              onToggle={() => setOpenId(openId === section.id ? null : section.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}