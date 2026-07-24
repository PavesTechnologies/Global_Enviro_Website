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
    id: "casting",
    title: "1. Casting Division",
    color: "bg-gray-700",
    basePath: "Casting",
    items: [
      { name: "Liners", slug: "liners" },
      { name: "Beaters", slug: "beaters" },
      { name: "Carbon Steel Castings", slug: "carbon-steel-castings" },
      { name: "Magna Steel Castings", slug: "magna-steel-castings" },
      { name: "Cast Iron Components", slug: "cast-iron-components" },
    ],
  },
  {
    id: "briquettes",
    title: "2. Biomass Briquettes Division",
    color: "bg-green-700",
    basePath: "Briquettes",
    items: [{ name: "Biomass Briquettes", slug: "biomass-briquettes" }],
  },
];

// One representative image per section (shown in the accordion body)
const imageMap = {
  casting: "/assets/images/metallurgicals-projects/casting-1.jpg",
  briquettes: "/assets/images/metallurgicals-projects/biomass-briquettes.jpg",
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
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Products
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/service/Metallurgicals/${section.basePath}/${item.slug}`}
                        className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        )}
      </LazyAnimatePresence>
    </div>
  );
}

const sectionIds = sections.map((s) => s.id);

export default function MetallurgicalsPage() {
  const [openId, setOpenId] = useState("casting");
  useOpenOnHash(sectionIds, setOpenId);

  return (
    <main>
      <HeroSection
        images={[
          "/assets/images/metallurgicals-projects/casting-1.jpg",
          "/assets/images/metallurgicals-projects/casting-2.jpg",
          "/assets/images/metallurgicals-projects/biomass-briquettes.jpg",
        ]}
        title="Metallurgicals & Briquettes"
        subtitle="High-quality metal castings for industrial wear applications and biomass briquettes as sustainable boiler fuel."
        align="left"
        overlay="bg-black/55"
        height="h-[380px]"
      />

      <section className="py-8 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-5">
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
