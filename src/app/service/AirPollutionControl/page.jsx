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
    id: "dust-extraction",
    title: "1. Dust Extraction Systems",
    color: "bg-blue-600",
    basePath: "DustExtraction",
    description:
      "A Dust Extraction System is designed to capture, filter, and remove airborne dust, fumes, and particulate matter generated during industrial processes. The system helps maintain a clean and safe working environment, protects equipment, improves product quality, and ensures compliance with environmental and workplace safety regulations. Dust Extraction Systems provide an effective and reliable solution for controlling airborne dust and particulates, ensuring cleaner operations, safer workplaces, and environmentally compliant industrial processes.",
    subsystems: [
      { name: "Pulse Jet Bag Filter", slug: "pulse-jet-bag-filter" },
      { name: "Pulse Jet Bag Filter for Boiler", slug: "pulse-jet-bag-filter-for-boiler" },
      { name: "Single Cyclone Separator", slug: "single-cyclone-separator" },
      { name: "Treema Cyclone Separator", slug: "treema-cyclone-separator" },
      { name: "Multi Cyclone Separator", slug: "multi-cyclone-separator" },
      { name: "Centrifugal Fans", slug: "centrifugal-fans" },
      { name: "RAV (Rotary Air Lock Valve)", slug: "rav-rotary-air-lock-valve" },
      { name: "Axial Flow Fans", slug: "axial-flow-fans" },
    ],
  },
  {
    id: "fuel-extraction",
    title: "2. Fuel Extraction Systems",
    color: "bg-cyan-600",
    basePath: "FuelExtraction",
    description:
      "A Fuel Extraction System is designed to extract, reclaim, and transfer fuel from storage bunkers, silos, stockyards, or hoppers to downstream conveying and combustion systems. It ensures a controlled, continuous, and reliable fuel supply to boilers, furnaces, kilns, and power generation units. Fuel Extraction Systems provide a reliable and efficient solution for reclaiming and feeding fuel from storage facilities, ensuring uninterrupted operation and optimal performance of industrial combustion and power generation systems.",
    subsystems: [
      { name: "Wet Scrubber", slug: "wet-scrubber" },
      // { name: "Venturi Scrubber", slug: "venturi-scrubber" },
      { name: "Carbon Filter for Odour Control", slug: "carbon-filter-for-odour-control" },
    ],
  },
  {
    id: "silo-bin",
    title: "3. Bin Aeration for Cement _ Fly Ash Systems",
    color: "bg-indigo-600",
    subsystems: ["Silo", "Root Blower"],
    commonEquipment: true,
  },
  // {
  //   id: "bulk-loading",
  //   title: "4. Bulk Loading Systems",
  //   color: "bg-violet-600",
  //   subsystems: [],
  //   commonEquipment: true,
  // },
  // {
  //   id: "wagon",
  //   title: "5. Wagon Loading / Unloading",
  //   color: "bg-purple-700",
  //   subsystems: ["Clinker Wagon", "Cement Wagon", "Fly Ash Wagon"],
  //   commonEquipment: true,
  // },
];

const commonEquipment = [
  { name: "Compact Dust Collector", slug: "compact-dust-collector" },
  { name: "Telescopic Loading Spout", slug: "telescopic-loading-spout" },
  { name: "Horizontal Positioner", slug: "horizontal-positioner" },
  { name: "Flow Control Gates", slug: "flow-control-gates" },
  { name: "Pneumatic Slide Gates", slug: "pneumatic-slide-gates" },
  // { name: "Manual Slide Gates", slug: "manual-slide-gates" },
  { name: "IFM (Insert Filter Module)", slug: "ifm-insert-filter-module" },
];

// Image map — use your existing images where they match
const imageMap = {
  "dust-extraction": "/assets/images/Air_Pollution/a01. Pulsejet Bag Filter for Boiler.jpg",
  "fuel-extraction": "/assets/images/Air_Pollution/b02. Carbon Filter for Odour Control.jpeg",
  "silo-bin": "/assets/images/Air_Pollution/d03. Horizontal Positioner.jpg",
  "bulk-loading": "/assets/images/pulsejet.png",
  "wagon": "/assets/images/rotary airlock valve.png",
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
                {section.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                )}

                {section.subsystems.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Systems / Equipment
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {section.subsystems.map((item) => {
                        const isLinked = typeof item === "object";
                        const label = isLinked ? item.name : item;
                        return isLinked ? (
                          <Link
                            key={label}
                            href={`/service/AirPollutionControl/${section.basePath}/${item.slug}`}
                            className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                          >
                            {label}
                          </Link>
                        ) : (
                          <span
                            key={label}
                            className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm text-gray-500"
                          >
                            {label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {section.commonEquipment && (
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Common Equipment
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {commonEquipment.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/service/AirPollutionControl/CommonEquipment/${item.slug}`}
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

export default function AirPollutionControlPage() {
  const [openId, setOpenId] = useState("dust-extraction");
  useOpenOnHash(sectionIds, setOpenId);

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
