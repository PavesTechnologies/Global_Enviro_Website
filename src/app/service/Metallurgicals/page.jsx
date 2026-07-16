"use client";
import { useState } from "react";
import useOpenOnHash from "@/lib/useOpenOnHash";
import MotionWrapper from "@/components/common/MotionWrapper";
import LazyAnimatePresence from "@/components/common/LazyAnimatePresence";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection/HeroSection";
import HVSectionCard from "@/components/commonForService/HVSectionCard";
import ImageLightbox from "@/components/common/ImageLightbox";

const sections = [
  {
    id: "casting",
    title: "1. Casting Division",
    color: "bg-gray-700",
    description:
      "Our casting division manufactures high-quality industrial wear parts used in crushing, grinding, and material processing applications.",
    idealFor: [
      "Cement & Mining Industries",
      "Pumps, Valves & Compressors",
      "Material Handling Equipment",
      "Heavy Engineering Applications",
      "Power & Process Industries",
      "Machinery & Automotive Components",
      "Industrial Manufacturing Units",
    ],
    photos: [
      "/assets/images/metallurgicals-projects/casting-1.jpg",
      "/assets/images/metallurgicals-projects/casting-2.jpg",
    ],
    items: [
      {
        title: "Liners",
        heading: "Durable Wear Protection for Extended Equipment Life",
        description:
          "Liners are protective components designed to safeguard industrial equipment and surfaces from wear, abrasion, impact, and corrosion during material handling and processing operations. Manufactured from high-strength and wear-resistant materials, liners enhance equipment durability, reduce maintenance costs, and improve operational efficiency in demanding industrial environments.",
        points: [],
      },
      {
        title: "Beaters",
        heading: "High-Impact Components for Efficient Crushing & Material Processing",
        description:
          "Beaters are critical rotating components used in crushers, hammer mills, and material processing equipment for breaking, crushing, and pulverizing bulk materials. Manufactured from high-strength, wear-resistant materials, beaters deliver efficient impact action, long operational life, and reliable performance in demanding industrial applications.",
        points: [],
      },
      {
        title: "Carbon Steel Castings",
        heading: "High-Strength Cast Components for Reliable Industrial Performance",
        description:
          "Carbon Steel Castings are precision-engineered industrial components manufactured using high-quality carbon steel to provide superior strength, toughness, and durability. These castings are widely used in heavy-duty machinery, material handling systems, and industrial equipment where high mechanical performance and wear resistance are essential.",
        points: [],
      },
      {
        title: "Magna Steel Castings",
        heading: "Premium-Grade Steel Castings for Heavy-Duty Industrial Applications",
        description:
          "Magna Steel Castings are high-performance engineered cast components designed to deliver exceptional strength, durability, and wear resistance in demanding industrial environments. Manufactured using advanced casting processes and premium-quality steel grades, these castings ensure reliable performance, dimensional accuracy, and extended service life for critical machinery and equipment.",
        points: [],
      },
      {
        title: "Cast Iron Components",
        heading: "Durable & Precision-Cast Components for Industrial Reliability",
        description:
          "Cast Iron Components are robust industrial parts manufactured using high-quality cast iron to provide excellent strength, wear resistance, vibration damping, and durability. Widely used across heavy engineering and machinery applications, these components offer reliable performance, dimensional stability, and cost-effective operation in demanding industrial environments.",
        points: [],
      },
    ],
  },
  {
    id: "briquettes",
    title: "2. Biomass Briquettes Division",
    color: "bg-green-700",
    description:
      "We supply biomass briquettes as an eco-friendly alternative fuel for industrial boilers, reducing dependence on conventional fossil fuels.",
    idealFor: [],
    photos: [],
    items: [
      {
        title: "Biomass Briquettes",
        heading: "Clean Fuel for a Greener Tomorrow",
        description:
          "Biomass briquettes are a renewable, high-efficiency fuel made from agricultural and industrial biomass waste — an eco-friendly alternative to conventional fossil fuels for boilers and furnaces.",
        points: [],
        groups: [
          {
            label: "Advantages",
            items: [
              "Eco-friendly and renewable fuel source",
              "High calorific value with efficient heat generation",
              "Low moisture content for better combustion efficiency",
              "Reduced smoke, ash, and harmful emissions",
              "Uniform size and density for easy handling and storage",
              "Cost-effective alternative to conventional fossil fuels",
              "Suitable for automated feeding and combustion systems",
              "Utilizes agricultural and biomass waste effectively",
            ],
          },
          {
            label: "Benefits",
            items: [
              "Reduces dependency on coal, furnace oil, and other fossil fuels",
              "Helps in lowering overall fuel and operational costs",
              "Supports sustainable waste management and recycling",
              "Minimizes carbon footprint and environmental pollution",
              "Improves boiler and furnace combustion performance",
              "Reduces storage space compared to loose biomass materials",
              "Ensures cleaner workplace and safer fuel handling",
              "Contributes to green energy and sustainable industrial practices",
            ],
          },
        ],
        image: "/assets/images/metallurgicals-projects/biomass-briquettes.jpg",
      },
    ],
  },
];

function MetAccordion({ section, isOpen, onToggle }) {
  const [previewSrc, setPreviewSrc] = useState(null);

  return (
    <div
      id={section.id}
      className={`scroll-mt-32 rounded-xl overflow-hidden border transition-all duration-300 ${
        isOpen
          ? "border-blue-300 shadow-lg ring-1 ring-blue-200"
          : "border-gray-200 shadow-sm hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-6 py-4 text-left text-white font-semibold text-base ${section.color} hover:opacity-90 transition-all`}
      >
        <span>{section.title}</span>
        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

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
            <div className="bg-white px-6 py-6">
              <p className="text-gray-600 text-base leading-relaxed mb-4">{section.description}</p>

              {(section.idealFor.length > 0 || section.photos.length > 0) && (
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                  {section.idealFor.length > 0 && (
                    <div className="lg:flex-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#3877d4] mb-3">
                        Ideal For
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {section.idealFor.map((point) => (
                          <span
                            key={point}
                            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-sm text-gray-700"
                          >
                            <span className="text-red-600 font-bold">►</span>
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.photos.length > 0 && (
                    <div className="flex flex-wrap gap-4 lg:shrink-0 lg:justify-end">
                      {section.photos.map((src, index) => (
                        <button
                          type="button"
                          key={src}
                          onClick={() => setPreviewSrc(src)}
                          className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-md border-2 border-white cursor-zoom-in"
                        >
                          <Image
                            src={src}
                            alt={`${section.title} photo ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="192px"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col gap-8">
                {section.items.map((item) => (
                  <HVSectionCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </MotionWrapper>
        )}
      </LazyAnimatePresence>

      <ImageLightbox src={previewSrc} alt={section.title} onClose={() => setPreviewSrc(null)} />
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
