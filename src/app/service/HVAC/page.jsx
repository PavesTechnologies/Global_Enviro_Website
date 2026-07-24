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
    id: "hvac",
    title: "1. HVAC Systems",
    color: "bg-cyan-700",
    basePath: "HVACSystems",
    intro:
      "An HVAC System is designed to control and maintain indoor air quality, temperature, humidity, and ventilation within commercial, industrial, pharmaceutical, healthcare, and clean room environments. These systems ensure occupant comfort, process reliability, and compliance with environmental standards. HVAC Systems provide a complete solution for climate control, ventilation, and air purification, ensuring optimal indoor conditions, enhanced productivity, and compliance with industry standards.",
    items: [
      {
        title: "AHUs (Air Handling Units)",
        slug: "ahus-air-handling-units",
        description:
          "Air Handling Unit (AHU) is a central component of an HVAC (Heating, Ventilation, and Air Conditioning) system that conditions and circulates air throughout a building. It is designed to provide clean, comfortable, and controlled indoor air by filtering, heating, cooling, humidifying, or dehumidifying the air before distributing it to occupied spaces.",
        points: [
          "Ideal For: Pharmaceutical Industries, Clean Rooms, Space Centers, Nuclear Power Plants, Electronic / Energy and Infrastructure Sectors, Solar Panel Production Plants, Commercial Buildings, Hospitals, Food Processing Plants, Industrial Ventilation Systems",
          "High Airflow Efficiency",
          "Improved indoor air quality",
          "Multi-stage Air Filtration (Pre + Fine + HEPA Filters)",
          "Reduced airborne contamination",
          "Low Noise Operation",
          "Modular Construction",
          "Energy-efficient Fans and Motors",
          "Cooling & Heating Coil Integration",
          "Temperature and Humidity Control Options",
          "Compliance with HVAC and cleanroom standards",
          "Easy Maintenance Access Panels",
          "Type of Application: Air Conditioning / Ventilation / Clean Room / Industrial Air Handling Systems",
          "Type of Air Handling: Re-Circulation Unit / Ventilation Unit / Exhaust Unit",
          "Temp: Suitable for Ambient to 20°C to 28°C based on Air Handling Applications",
          "Types of Filters: Pre Filter / Fine Filter / HEPA Filter",
          "Types of Configuration: Double Skin / Single Skin / Horizontal / Vertical AHU / Double Decker",
          "MOC: GI (Pre-Coated Outer Skin & Inner Plain)",
        ],
        image: "/assets/images/hvac-projects/ahu.jpg",
      },
      {
        title: "Pass Box (Dynamic & Static)",
        slug: "pass-box-dynamic-static",
        description:
          "Dynamic Pass Box is a cleanroom equipment used to transfer materials between areas of different cleanliness classifications while minimizing contamination. Unlike a static pass box, a dynamic pass box is equipped with a HEPA-filtered airflow system that continuously cleans the air inside the chamber during material transfer. Static Pass Box is a cleanroom equipment used for the safe transfer of materials between two controlled areas without allowing personnel movement between them. It acts as a barrier to minimize contamination and maintain the cleanliness of the connected rooms.",
        points: [
          "Ideal For: Pharmaceutical industries, Clean rooms, Laboratories, Hospitals, Food processing units, Electronics manufacturing, Hospitals & biotech facilities",
          "Contamination-free material transfer",
          "SS304 / SS316 construction",
          "Blower/Fan Unit to create filtered airflow",
          "UV light sterilization option",
          "Electromagnetic door interlocking / Pneumatic Interlocking",
          "Toughened glass viewing panels",
          "HEPA filtration",
          "Differential Pressure Gauge (optional)",
          "Low noise blower operation",
          "Easy cleaning & maintenance",
          "Capacity Range: Suitable for Small to Large Clean Room Applications",
          "Type of Pass Box: Dynamic / Static",
          "Filtration: HEPA Filter / Pre-Filter / Fresh Air Filter",
          "Classification Level: ISO Class 5",
          "Temp: Suitable for Ambient Clean Room Operating Conditions",
          "Types of Operation: Two Door / Three Door Operation",
          "MOC: SS304 / SS316",
        ],
        image: "/assets/images/hvac-projects/pass-box.jpg",
      },
      {
        title: "Modules, Grills, Diffusers & Linear Bar Grills",
        slug: "modules-grills-diffusers-linear-bar-grills",
        description:
          "The Module is a specialized HVAC and cleanroom component designed to deliver filtered, conditioned air into a controlled environment. It is typically installed in the ceiling, Wall and is used to maintain air cleanliness, airflow patterns, temperature, humidity, and room pressurization. The primary purpose of a Supply Air Module is to Supply clean and filtered air to a room, Maintain required air changes per hour (ACH), Control airborne contamination, Ensure positive or negative room pressure as required, Provide uniform air distribution.",
        points: [
          "Ideal For: Pharmaceutical industries, Healthcare & Hospitals, Food & beverage industries, Electronics & Semiconductor Manufacturing, Clean room applications, HVAC systems where required",
          "Modular and compact design",
          "DOP/PAO Test Port",
          "Easy installation and maintenance",
          "Custom-built configurations",
          "High operational efficiency",
          "Improves indoor air quality",
          "Reduces contamination risks",
          "Compliance with cleanroom and GMP requirements",
          "Types of Modules: Supply Air Modules / Return Air Modules",
          "Types of Assembly: Welded Construction with Gear wheel operated for Damper open / close",
          "Type of Mounting: Ceiling Mounted / Wall Mounted / Duct Connected",
          "Type of Module Grills: Perforated Plain Grills / Latch type Grills",
          "Type of Grills: 2-Way Diffusers / 4-Way Diffusers / Linear Bar Grills",
          "MOC: Galvanized Sheet Steel (Powder Coated) / SS304 / SS316 / Aluminium",
        ],
        image: "/assets/images/hvac-projects/module-hepa-housing.jpg",
        gallery: [
          "/assets/images/hvac-projects/module-latch-grill.jpg",
          "/assets/images/hvac-projects/module-diffuser.jpg",
          "/assets/images/hvac-projects/module-linear-bar-grill.jpg",
        ],
      },
      {
        title: "Filters (Pre, Fine & HEPA)",
        slug: "filters-pre-fine-hepa",
        description:
          "Pre-filters and fine filters are air filtration components used in HVAC systems, cleanrooms, and air handling units (AHUs) to remove airborne particles and improve indoor air quality. They are often installed in stages, with pre-filters protecting downstream fine filters and high-efficiency filters. A pre-filter is the first stage of filtration that captures larger particles from the incoming air stream and fine filter is the second-stage filter that removes smaller airborne particles not captured by the pre-filter.",
        points: [
          "Ideal For: AHUs & HVAC systems, Pharmaceutical industries, Hospitals & laboratories, Food processing plants, Commercial buildings",
          "Improved indoor air quality",
          "Lower maintenance costs",
          "Extended HEPA filter life",
          "Better HVAC system performance",
          "High filtration efficiency",
          "Low pressure drop",
          "Multi-stage filtration system",
          "Washable/reusable options",
          "Compact and lightweight design",
          "Easy installation and replacement",
          "Types of Filters: HEPA / Fine-Filters / Pre Filters / Fresh Air Filters",
          "Types of Efficiency: 0.3 Microns / 5 Microns / 10 Microns / 20 Microns",
          "Filter Media: Fiber glass / Polyster Synthetic Media with Two Layers of HDPE",
          "MOC: Galvanized Steel with Powder Coated / Aluminium",
        ],
        image: "/assets/images/hvac-projects/filter-hepa.jpg",
        gallery: [
          "/assets/images/hvac-projects/filter-pre.jpg",
          "/assets/images/hvac-projects/filter-fine.jpg",
        ],
      },
      {
        title: "Laminar Flow Unit",
        slug: "laminar-flow-unit",
        description:
          "Laminar Air Flow (LAF) Unit is a clean-air workstation designed to provide a contamination-free working environment by directing highly filtered air in a uniform, unidirectional flow over the work area. It is widely used in pharmaceutical, microbiological, electronics, and research applications where product protection from airborne contamination is critical. We engineer Laminar Flow Units that deliver ISO Class 5 air exactly where your product lives. We ensure H14 HEPA filtration with scan-tested, zero-leak integrity in every unit. We build with SS304 work zones, coved corners, and flush surfaces for easy cleaning. We build reliability into every weld and seal, because contamination has no second chance. This is how we protect your critical process – with airflow we stand behind.",
        points: [
          "Ideal For: Pharmaceutical industries, Clean rooms, Microbiology laboratories, Hospitals and Healthcare, Electronics Industry, Food & beverage industries",
          "HEPA-filtered laminar airflow",
          "Uniform air velocity distribution",
          "Provides a highly clean work environment",
          "Protects products from airborne contamination",
          "Low noise and vibration operation",
          "UV light sterilization option",
          "Energy-efficient blower system",
          "Easy maintenance and cleaning",
          "Compact and ergonomic design",
          "Capacity Range: Suitable for Small to Large Clean Room Applications",
          "Classification Level: ISO Class 5",
          "Temp: Suitable for Ambient Clean Room Operating Conditions",
          "Types of Laminar Flow: Horizontal Laminar Flow / Vertical Laminar Flow / Reverse Flow Units",
          "Types of Filtration: Pre Filter / Fine Filter / HEPA Filtration",
          "MOC: SS304 / SS316",
        ],
        image: "/assets/images/hvac-projects/laminar-flow-unit.jpg",
      },
      {
        title: "Air Shower",
        slug: "air-shower",
        description:
          "Air Shower is a self-contained chamber installed at the entrance of cleanrooms and controlled environments. It uses high-velocity HEPA-filtered air jets to remove dust, lint, and other contaminants from personnel or materials before they enter a clean area. Emergency stops, LED indicators, and toughened glass meet GMP and safety requirements. Every unit ships with velocity mapping, DOP test reports, and full validation support. This isn't just moving air. It's protecting critical environments from the first step inside. Built for reliability in every nozzle, weld, and seal, because classification depends on entry. Pure air begins at the door.",
        points: [
          "Ideal For: Pharmaceutical industries, Clean rooms, Microbiology laboratories, Healthcare Facilities, Electronics Industry, Food & beverage industries",
          "High-velocity HEPA-filtered airflow",
          "Automatic sensor-based operation",
          "Interlocked door system",
          "SS304 / powder-coated construction",
          "Energy-efficient blower system",
          "LED display and control panel",
          "Low noise operation",
          "Customizable design and size",
          "Capacity Range: Suitable for Single Person to Multi Person Clean Room Entry Systems",
          "Type of Application: Dust & Contamination Removal in Pharmaceutical / Clean Room / Food / Electronics Industries",
          "Temp: Suitable for Ambient Clean Room Operating Conditions",
          "Types of Air Shower: Two Side / Tunnel Type Air Shower",
          "Types of Filtration: Pre Filter / Fine Filter / HEPA Filtration",
          "MOC: SS304 / SS316",
        ],
        image: "/assets/images/hvac-projects/air-shower.jpg",
      },
      {
        title: "Dust Collector",
        slug: "dust-collector",
        description:
          "Dust Collector is an air pollution control system designed to capture, filter, and remove dust, powder, particles, and other airborne particles generated during industrial processes. It helps maintain clean air, protects workers, improves product quality, enhance operational efficiency and ensures compliance with environmental and occupational safety regulations.",
        points: [
          "Ideal For: Pharmaceutical Industries, Bulk Drugs, Food Processing Units, Cement & Mineral Processing Plants, Steel & Foundry Industries, Chemical & Fertilizer Plants, Woodworking & Packaging Industries, Material Handling & Crushing Systems",
          "High-efficiency dust filtration",
          "Collection through hoods",
          "Fine particles are captured by filter media",
          "Robust and durable construction",
          "Low maintenance operation",
          "Energy-efficient performance",
          "Compact and modular design",
          "Continuous dust collection system",
          "Easy filter cleaning and replacement",
          "Capacity Range: 250 CMH to 5,000 CMH",
          "Temp: Up to 200°C with suitable filter media",
          "Types of Filters: Bag / Cartridge Type / HEPA Filter",
          "Types of Cleaning: Pulse Jet",
          "MOC: SS304 / SS316",
        ],
        image: "/assets/images/hvac-projects/dust-collector.jpg",
      },
    ],
  },
  {
    id: "paneling",
    title: "2. Paneling",
    color: "bg-teal-700",
    basePath: "Paneling",
    intro:
      "Clean room panel systems are modular, prefabricated enclosures designed to achieve and maintain ISO-classified environments by controlling particulates, temperature, humidity, and pressure. The system uses insulated sandwich panels with PUF, Rockwool cores clad in powder-coated GI, SS304/SS316 sheets for chemical resistance and minimal particle shedding. Flush wall-to-ceiling and wall-to-floor covings, silicone-sealed joints, and concealed fasteners eliminate crevices to meet GMP, FDA, and ISO 14644 standards. Integrated doors, view glass panels, pass boxes, and walkable ceiling grids support personnel movement and equipment installation without compromising air tightness. Compatible with HEPA/ULPA terminal modules, laminar flow units, and differential pressure monitoring, the panels ensure unidirectional airflow and contamination control. Quick installation, demountable design, and easy wipe-down surfaces reduce downtime during validation and maintenance because clean room integrity directly impacts product quality.",
    items: [
      {
        title: "Panel for Walls, Partitions & Ceiling",
        slug: "panel-for-walls-partitions-ceiling",
        description:
          "Clean Room Panels are prefabricated wall and ceiling panels used to construct cleanrooms and controlled environments. We provide smooth, non-shedding, easy-to-clean surfaces that help maintain cleanliness, hygiene, and environmental control in industries such as pharmaceuticals, biotechnology, electronics, healthcare, manufacturing Industries, and food processing. Manufactured with high-density PUF insulation between pre-coated, powder coated GI sheets, Stainless Steel Sheets, these panels provide superior thermal insulation, structural strength, airtight sealing, and clean room compatibility. We ensure fast installation, reduced energy consumption, and long-lasting performance in controlled environments. We meet cleanroom and GMP requirements.",
        points: [
          "Ideal For: Pharmaceutical Industries, Clean room Facilities, Laboratories & Healthcare Facilities, HVAC & Controlled Environment Applications, Food Processing Industries, Cold Storage & Refrigerated Rooms, Warehouses & Industrial Buildings, Modular Offices & Portable Cabins",
          "Excellent thermal insulation with high energy efficiency",
          "Core materials like Puf Insulation, Rockwool",
          "Light weight yet strong construction",
          "Quick & easy installation with modular design",
          "Hygienic, dust-free, and easy-to-clean surfaces",
          "Fire-retardant and moisture-resistant options available",
          "Air-tight joints for temperature-controlled areas",
          "Corrosion-resistant pre-coated metal finish",
          "Low maintenance with long service life",
          "Panel Thickness: 50 mm, 80 mm and 100 mm Panels",
          "Type of Application: Clean Room Walls / Office Partitions / Cold Rooms / False Ceiling Systems",
          "Types of Infill: PUF / Rockwool",
          "Skin Finish: PPGI / Powder Coated / SS Finish Panels",
          "Skin MOC: Pre Painted Galvanized Steel (PPGI) / GI Sheet (Powder Coated) / SS304 / SS316",
        ],
        image: "/assets/images/hvac-projects/panel-1.jpg",
        gallery: [
          "/assets/images/hvac-projects/panel-2.jpg",
          "/assets/images/hvac-projects/panel-3.jpg",
          "/assets/images/hvac-projects/panel-4.jpg",
          "/assets/images/hvac-projects/panel-5.jpg",
          "/assets/images/hvac-projects/panel-6.jpg",
          "/assets/images/hvac-projects/panel-7.jpg",
          "/assets/images/hvac-projects/panel-8.jpg",
        ],
      },
      {
        title: "Doors",
        slug: "doors",
        description:
          "Metal Doors are durable, hygienic, and secure doors commonly used in cleanrooms, pharmaceutical facilities, hospitals, laboratories, industrial facilities, and commercial facilities. We are designed to provide strength, cleanliness, fire resistance, and environmental control while withstanding frequent use. Industrial and clean room doors are specially designed to provide secure, hygienic, and efficient access control in controlled environments and industrial facilities. Built with durable materials and precision-engineered sealing systems, these doors ensure smooth operation, thermal insulation, contamination control, and long-term reliability.",
        points: [
          "Ideal For: Pharmaceutical Industries, R&D Laboratories, Clean room Facilities, Commercial Buildings, Hospitals, Food Processing Industries, Manufacturing Industries, Residential Buildings, Data Centers, Fire Exits, Warehouses",
          "Heavy-Duty Galvanized Steel Construction",
          "Maintain differential pressures",
          "Good Powder Coated Finish",
          "Infinite Color Possibilities In-House Powder Coating for Customized RAL Shades",
          "Corrosion Resistance",
          "Single & Double Leaf Options",
          "In-House Laser Cutting for Perfect Sizes",
          "High Quality Frame and Shutter with Vision Glass Options",
          "Infill Honeycomb / Rockwool / Polyurethane Foam Insulation",
          "Smoke and Fire Resistant Seals",
          "Panic Bar Compatibility",
          "Self-Closing Mechanism",
          "Customize Sized Doors Possibility",
          "Low Maintenance, Cost Effective Solution",
          "Quick and easy Installation",
          "Types of Doors: Single / Double / Emergency Exit / Fire Rated / Shaft Doors",
          "Rebate Size: Single Rebate 50*58 mm / 80*58 mm / 100*58 mm",
          "Standards: IS 3614 / BS 476",
          "Infill Materials: Honeycomb / Rockwool / PUF Fill Insulation",
          "Finish: Pure Polyester Powder Coated Surface",
          "Clean Room Door: Galvanized Plain Skin Pass Steel / SS304, 0.8 mm shutter & 1.2 mm frame, 44 mm shutter thickness, Honeycomb/PUF infill — for Pharma, Food Industries, Hospitals, Offices",
          "Commercial Door: Galvanized Plain Skin Pass Steel / SS304, 0.8 mm shutter & 1.2 mm frame, 44 mm shutter thickness, Honeycomb infill — for Malls, Residential, Institutions, Offices",
          "General Purpose Door: Galvanized Plain Skin Pass Steel / SS304, 0.8 mm shutter & 1.2 mm frame, 44 mm shutter thickness, Honeycomb infill — suitable for All applications",
          "Fire Door: Galvanized Plain Skin Pass Steel / SS304, 0.8–1.2 mm shutter & 1.2 mm frame, 44 mm shutter thickness, Rockwool infill — for Shopping Malls, Pharma, Industries, Apartments",
          "Single Door Size Range: 750–1200 mm (W) x 1200–2500 mm (H)",
          "Double Door Size Range: 1000–2300 mm (W) x 1200–2500 mm (H)",
        ],
        image: "/assets/images/hvac-projects/door-double.jpg",
        gallery: [
          "/assets/images/hvac-projects/door-install.jpg",
          "/assets/images/hvac-projects/door-brochure.jpg",
          "/assets/images/hvac-projects/door-photo.jpg",
        ],
      },
      {
        title: "Crush Panel",
        slug: "crush-panel",
        description:
          "Crush Panel is a specially designed panel to install in cleanrooms, pharmaceutical facilities, and bulk drugs laboratories to protect personnel's escape from the fire, fumes, and hazard situations.",
        points: [
          "Ideal For: Pharmaceutical industries, Clean rooms & Laboratories, Food Processing Units, Manufacturing Facilities",
          "Toughened glass",
          "Durable and long-lasting construction",
          "Easy to clean and maintain",
          "Quick installation",
          "Available in customized sizes and finishes",
          "Frame Thickness: 80 / 100 mm",
          "Sheet Thickness: 1.2 mm for Frame",
          "Glass Thickness: 8 mm Toughened glass",
          "MOC: Galvanized Plain Skin Pass Steel",
          "Finish: Pure Polyester Powder Coated Surface",
        ],
        image: "/assets/images/hvac-projects/crush-panel.jpg",
      },
      {
        title: "Glass Windows",
        slug: "glass-windows",
        description:
          "Glass Windows in cleanrooms are specially designed viewing windows installed in walls, puff panels and partitions to provide visibility between areas while maintaining cleanliness, improve safety and supervision, process monitoring without room entry, pressure integrity and environmental control. We are manufactured with smooth, flush surfaces to prevent dust accumulation and facilitate easy cleaning. Manufactured using high-quality toughened and double-glazed glass with precision engineered frames, these windows provide excellent visibility, airtight sealing, durability, and aesthetic appeal while maintaining hygienic and controlled environments.",
        points: [
          "Ideal For: Pharmaceutical & Clean room Facilities, Laboratories & Research Centers, Hospitals & Healthcare Centers, Food Processing Industries, Industrial Production Units",
          "High clarity toughened or double-glazed glass",
          "Airtight and dust-resistant sealing",
          "Easy cleaning and sanitization",
          "Good visibility between rooms",
          "Improve safety and supervision",
          "Reduces contamination risks",
          "Strong, durable, and corrosion-resistant frames",
          "Excellent visibility for monitoring operations",
          "Flush-mounted designs for clean room applications",
          "Customized sizes and frame finishes",
          "Types of Windows: Double Glazed / Sliding / Fixed Glass Windows",
          "Types of Glass: Toughened Glass / Float Glass",
          "MOC: Powder Coated GI",
          "Installation: Brick Wall / Wall Panels",
        ],
        image: "/assets/images/hvac-projects/glass-windows-1.jpg",
        gallery: ["/assets/images/hvac-projects/glass-windows-2.jpg"],
      },
    ],
  },
];

// One representative image per section (shown in the accordion body)
const imageMap = {
  hvac: "/assets/images/hvac-projects/ahu.jpg",
  paneling: "/assets/images/hvac-projects/panel-1.jpg",
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
                <h3 className="text-2xl font-bold text-[#0b1e3d]">
                  {section.title.replace(/^\d+\.\s*/, "")}
                </h3>
                {section.intro && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {section.intro}
                  </p>
                )}

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Systems / Equipment
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/service/HVAC/${section.basePath}/${item.slug}`}
                        className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {item.title}
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

export default function HVACPage() {
  const [openId, setOpenId] = useState("hvac");
  useOpenOnHash(sectionIds, setOpenId);

  return (
    <main>
      <HeroSection
        imageSrc="/assets/images/hvac clean room.png"
        title="HVAC Clean Room Projects"
        subtitle="Precision-controlled environments for pharma, biotech, and critical industries — from air handling units to full clean room paneling."
        align="left"
        overlay="bg-black/55"
        height="h-[240px] sm:h-[300px] md:h-[380px]"
      />

      <section className="py-8 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-5">
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
