"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection/HeroSection";

const sections = [
  {
    id: "dust-extraction",
    title: "1. Dust Extraction Systems",
    color: "bg-blue-600",
    subsystems: [
      "Pulse Jet Bag Filter",
      "Single Cyclone Separator",
      "Treema Cyclone Separator",
      "Multi Cyclone Separator",
      "Centrifugal Fans",
      "RAV (Rotary Air Lock Valve)",
      "Axial Flow Fans",
    ],
  },
  {
    id: "fuel-extraction",
    title: "2. Fuel Extraction Systems",
    color: "bg-cyan-600",
    subsystems: [
      "Wet Scrubber",
      "Ventury Scrubber",
      "Carbon Filter for Odour Control",
    ],
  },
  {
    id: "silo-bin",
    title: "3. Silo / Bin Aeration for Cement / Fly Ash Systems",
    color: "bg-indigo-600",
    subsystems: ["Silo", "Root Blower"],
    commonEquipment: true,
  },
  {
    id: "bulk-loading",
    title: "4. Bulk Loading Systems",
    color: "bg-violet-600",
    subsystems: [],
    commonEquipment: true,
  },
  {
    id: "wagon",
    title: "5. Wagon Loading / Unloading",
    color: "bg-purple-700",
    subsystems: ["Clinker Wagon", "Cement Wagon", "Fly Ash Wagon"],
    commonEquipment: true,
  },
];

const commonEquipment = [
  "Compact Dust Collector",
  "Telescopic Loading Spout",
  "Horizontal Positioner",
  "Flow Control Gates",
  "Pneumatic Slide Gates",
  "Manual Slide Gates",
  "IFM (Insert Filter Module)",
];

// Image map — use your existing images where they match
const imageMap = {
  "dust-extraction": "/assets/images/dust extraction.png",
  "fuel-extraction": "/assets/images/carbon.png",
  "silo-bin": "/assets/images/ash handling.png",
  "bulk-loading": "/assets/images/pulsejet.png",
  "wagon": "/assets/images/rotary airlock valve.png",
};

function AccordionItem({ section, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-6 py-4 text-left text-white font-semibold text-base ${section.color} hover:opacity-90 transition-all`}
      >
        <span>{section.title}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="bg-white px-6 py-5 flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="md:w-1/3">
                <img
                  src={imageMap[section.id]}
                  alt={section.title}
                  className="rounded-xl object-cover w-full h-48 shadow"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 space-y-4">
                {section.subsystems.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Systems / Equipment
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.subsystems.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.commonEquipment && (
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Common Equipment
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {commonEquipment.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AirPollutionControlPage() {
  const [openId, setOpenId] = useState("dust-extraction");

  return (
    <main>
      <HeroSection
        imageSrc="/assets/images/Air-Pollution.jpg"
        title="Air Pollution Control Systems"
        subtitle="Comprehensive dust and emission control systems engineered for industrial compliance and environmental safety."
        align="left"
        overlay="bg-black/55"
        height="h-[380px]"
      />

      <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0b1e3d] mb-3">
            Our Systems &amp; Products
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Click each category to explore the systems and equipment we offer
            under Air Pollution Control.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <AccordionItem
              key={section.id}
              section={section}
              isOpen={openId === section.id}
              onToggle={() =>
                setOpenId(openId === section.id ? null : section.id)
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}