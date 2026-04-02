"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection/HeroSection";

const sections = [
  {
    id: "hvac",
    title: "1. HVAC Systems",
    color: "bg-cyan-700",
    items: [
      { name: "AHUs (Air Handling Units)", img: "/assets/images/air handling units.png" },
      { name: "Pass Box (Dynamic & Static)", img: "/assets/images/pass box.png" },
      { name: "Modules", img: "/assets/images/hepa filters.png" },
      { name: "Filters (Pre, Fine & HEPA)", img: "/assets/images/pre and fine filters.png" },
      { name: "Laminar Flow Unit", img: "/assets/images/laminar flow unit.png" },
      { name: "Air Shower", img: "/assets/images/air shower.png" },
      { name: "De-Dusting Booth", img: "/assets/images/dust collector.png" },
      { name: "Dust Collector", img: "/assets/images/dust collector.png" },
    ],
  },
  {
    id: "paneling",
    title: "2. Paneling",
    color: "bg-teal-700",
    items: [
      { name: "Puff Panel for Walls, Partitions & Ceiling", img: "/assets/images/wall partitions.png" },
      { name: "Doors", img: "/assets/images/doors.png" },
      { name: "Crush Panel", img: "/assets/images/clean room panel.png" },
      { name: "Glass Windows", img: "/assets/images/sealing partitions.png" },
      { name: "Louvers", img: "/assets/images/wall partitions.png" },
    ],
  },
];

function HVACAccordion({ section, isOpen, onToggle }) {
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
            <div className="bg-white px-6 py-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {section.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-3 border border-gray-100 hover:shadow-md transition-shadow">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-28 object-cover rounded-lg mb-2"
                    />
                    <p className="text-xs font-medium text-gray-700 leading-tight">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HVACPage() {
  const [openId, setOpenId] = useState("hvac");

  return (
    <main>
      <HeroSection
        imageSrc="/assets/images/hvac clean room.png"
        title="HVAC Clean Room Projects"
        subtitle="Precision-controlled environments for pharma, biotech, and critical industries — from air handling units to full clean room paneling."
        align="left"
        overlay="bg-black/55"
        height="h-[380px]"
      />

      <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0b1e3d] mb-3">
            HVAC &amp; Clean Room Systems
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            We deliver complete HVAC and clean room solutions — from air handling
            units and filtration systems to modular paneling.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <HVACAccordion
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