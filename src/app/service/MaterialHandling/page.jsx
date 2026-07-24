"use client";
import { useState } from "react";
import useOpenOnHash from "@/lib/useOpenOnHash";
import MotionWrapper from "@/components/common/MotionWrapper";
import LazyAnimatePresence from "@/components/common/LazyAnimatePresence";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection/HeroSection";

const sections = [
  {
    id: "fuel-handling",
    title: "1. Fuel Handling Systems",
    color: "bg-indigo-700",
    basePath: "FuelHandling",
    subsystems: [
      { name: "Coal Handling", slug: "coal-handling" },
      { name: "Husk Handling", slug: "husk-handling" },
      { name: "Biomass Briquettes Handling", slug: "biomass-briquettes-handling" },
    ],
    equipment: [
      { name: "Belt Conveyor", slug: "belt-conveyor" },
      { name: "Bucket Elevator", slug: "bucket-elevator" },
      { name: "Slot Chain Conveyor", slug: "slot-chain-conveyor" },
      { name: "Vibratory Screen (Single/Double/Triple Deck)", slug: "vibratory-screen" },
      { name: "Screw Conveyor", slug: "screw-conveyor" },
      { name: "Crusher (Impact Hammer Mill)", slug: "crusher-impact-hammer-mill" },
      { name: "Crusher Cum Screen", slug: "crusher-cum-screen" },
    ],
  },
  {
    id: "ash-handling",
    title: "2. Ash Handling Systems",
    color: "bg-slate-700",
    basePath: "AshHandling",
    subsystems: [
      { name: "Dense Phase Ash Handling", slug: "dense-phase-ash-handling" },
      { name: "Lean Phase Ash Handling", slug: "lean-phase-ash-handling" },
      { name: "Mechanical Ash Handling", slug: "mechanical-ash-handling" },
    ],
    equipment: [
      { name: "Dense Veyor", slug: "dense-veyor" },
      { name: "Ash Veyor", slug: "ash-veyor" },
      { name: "Wet Scrapper", slug: "wet-scrapper" },
      { name: "Ash Conditioner", slug: "ash-conditioner" },
    ],
  },
  {
    id: "warehouse",
    title: "3. Warehouse Handling Systems",
    color: "bg-blue-800",
    basePath: "Warehouse",
    subsystems: [{ name: "EOT Cranes", slug: "eot-cranes" }],
    equipment: [
      { name: "Single Girder EOT Crane", slug: "single-girder-eot-crane" },
      { name: "Double Girder EOT Crane", slug: "double-girder-eot-crane" },
    ],
  },
];

// One representative image per section (shown in the accordion body)
const imageMap = {
  "fuel-handling": "/assets/images/material-handling-projects/belt-conveyor.jpg",
  "ash-handling": "/assets/images/material-handling-projects/dense-veyor.jpg",
  warehouse: "/assets/images/EOT and HOT cranes.png",
};

function AccordionItem({ section, isOpen, onToggle }) {
  return (
    <div
      id={section.id}
      className={`scroll-mt-32 rounded-xl overflow-hidden border transition-all duration-300 ${
        isOpen
          ? "border-blue-300 shadow-lg ring-1 ring-blue-200"
          : "border-gray-200 shadow-sm hover:shadow-md"
      }`}
    >
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
      <LazyAnimatePresence initial={false}>
        {isOpen && (
          <MotionWrapper
            as="div"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="bg-white px-6 py-6 flex flex-col md:flex-row md:items-center gap-6">
              {/* Image */}
              <div className="md:w-1/3 shrink-0">
                <div className="relative w-full aspect-4/3 rounded-xl bg-gray-50 border border-gray-100">
                  <Image
                    src={imageMap[section.id]}
                    alt={section.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 space-y-4">
                {section.subsystems.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      System Types
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {section.subsystems.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/service/MaterialHandling/${section.basePath}/${item.slug}`}
                          className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {section.equipment.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Equipment
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {section.equipment.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/service/MaterialHandling/${section.basePath}/${item.slug}`}
                          className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </MotionWrapper>
        )}
      </LazyAnimatePresence>
    </div>
  );
}

const sectionIds = sections.map((s) => s.id);

export default function MaterialHandlingPage() {
  const [openId, setOpenId] = useState("fuel-handling");
  useOpenOnHash(sectionIds, setOpenId);

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

      <section className="py-8 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-5">
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
            <AccordionItem
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
