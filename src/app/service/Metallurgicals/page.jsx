"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection/HeroSection";

const sections = [
  {
    id: "casting",
    title: "1. Casting Division",
    color: "bg-gray-700",
    description:
      "Our casting division manufactures high-quality industrial wear parts used in crushing, grinding, and material processing applications.",
    equipment: [
      "Liners",
      "Beaters",
      "Carbon Steel Castings",
      "Magna Steel Castings",
      "Cast Iron Components",
    ],
    img: "/assets/images/castings.png",
  },
  {
    id: "briquettes",
    title: "2. Biomass Briquettes Division",
    color: "bg-green-700",
    description:
      "We supply biomass briquettes as an eco-friendly alternative fuel for industrial boilers, reducing dependence on conventional fossil fuels.",
    equipment: [
      "Biomass Briquettes used as fuel for Boilers",
      "Suitable for all types of industrial boilers",
      "Eco-friendly and renewable energy source",
      "Consistent heat value and low ash content",
    ],
    img: "/assets/images/metallurgy.jpg",
  },
];

function MetAccordion({ section, isOpen, onToggle }) {
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
            <div className="bg-white px-6 py-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src={section.img}
                  alt={section.title}
                  className="rounded-xl object-cover w-full h-48 shadow"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {section.description}
                </p>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Products / Details
                  </p>
                  <ul className="space-y-2">
                    {section.equipment.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MetallurgicalsPage() {
  const [openId, setOpenId] = useState("casting");

  return (
    <main>
      <HeroSection
        imageSrc="/assets/images/metallurgy.jpg"
        title="Metallurgicals & Briquettes"
        subtitle="High-quality metal castings for industrial wear applications and biomass briquettes as sustainable boiler fuel."
        align="left"
        overlay="bg-black/55"
        height="h-[380px]"
      />

      <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0b1e3d] mb-3">
            Our Divisions
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Global Metallurgicals operates two divisions — precision metal
            castings and sustainable biomass briquettes for industrial energy needs.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <MetAccordion
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