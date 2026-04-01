"use client";
import SectionCard from "@/components/commonForService/HVSectionCard";


export default function HVACContent() {
  const sections = [
    {
        title: "AIR HANDLING UNITS (AHU)",
        description:
        "The Air Handling Unit (AHU) is a crucial component of any HVAC system, responsible for conditioning and circulating air to maintain a controlled indoor environment. It is typically a large, insulated metal enclosure that integrates various components to ensure proper ventilation, temperature, and air quality control.",
        points: [
             "Used to condition and circulate air as part of HVAC systems.",
             "Comprises blower, heating/cooling coils, filters, and dampers.",
             "Constructed as insulated modular metal cabinets for efficiency.",
             "Equipped with high-efficiency motors and low-noise operation.",
             "Improves indoor air quality through multi-stage filtration.",
        ],
        image: "/assets/images/air handling units.png",    
    },
    {
      title: "WALL PARTITIONS, SEALING PARTITIONS AND DOORS",
      description:
        "We offer a range of clean room wall partitions and ceiling systems suitable for Pharma, Biotech, IT, Cold storage warehouses, and the Food industry. These modular systems are pre-engineered and tested to exacting standards.",
      points: [
        "Pre-engineered, Pre-Fabricated & Pre-Tested solutions.",
        "Mild dew, moisture and fungal resistant.",
        "Easy integration with process piping & process services.",
        "Air-tight and meet most of the cGMP requirements.",
        "Doors, frames and windows are flush with the walls.",
      ],
      image: "/assets/images/wall partitions.png",
    },
    {
      title: "PRE AND FINE FILTERS",
      description:
        "Non-Woven Polyester media with aluminum expanded mesh reinforcement on both sides for enhanced air handling capacity and lesser pressure drop. Ideal for LAF cabinets and AHU pre-filters.",
      points: [
        "Synthetic adhesive to bond media to frame.",
        "Cleanable with compressed air.",
        "Perforated protective sheet is provided on request.",
      ],
      image: "/assets/images/pre and fine filters.png",
    },
    {
      title: "HEPA FILTERS",
      description:
        "High-efficiency particulate air (HEPA) filters are designed for critical environments requiring maximum air purity and minimal contamination.",
      points: [
        "Removes 99.97% of airborne particles ≥ 0.3 microns.",
        "Ideal for clean rooms, pharma, and medical industries.",
        "Available in standard and custom dimensions.",
      ],
      image: "/assets/images/hepa filters.png",
    },
    {
    title: "Automation for HVAC Cleanroom Projects",
    description:
      "The automation of HVAC systems is an engineering solution for cleanroom environmental control, designed to ensure precise monitoring, efficiency, and reliability through integrated components.",
    points: [
      "Fan flow control for maintaining balanced air movement.",
      "AHU equipped with EC fans for energy saving and better fan speed control.",
      "Motorized dampers in return air network for differential pressure control.",
      "Room temperature and humidity control for stable environmental conditions.",
      "Airborne Particle Counters for continuous particle counting and monitoring.",
    ],
    image: "/assets/images/ash conditioner.png", // store your image here
  }
  ];

//   return (
//     <div className="py-12 px-6 md:px-16 bg-[#f4faff]">
//       {sections.map((section, index) => (
//         <SectionCard key={index} {...section} />
//       ))}
//     </div>
//   );
return (
    <div
      className="py-12 px-6 md:px-16 bg-[#f4faff]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* --- Heading Section --- */}
      <div
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c7b] mb-4 uppercase tracking-wide">
          HVAC CLEANROOM SOLUTIONS
        </h2>
        <p className="text-gray-700 md:text-lg max-w-4xl mx-auto leading-relaxed">
          Our HVAC Cleanroom Solutions deliver an integrated approach for precise
          environmental control in critical spaces. Each component — from{" "}
          <b>Air Handling Units</b> to <b>Automation Systems</b> — is designed
          for energy efficiency, cleanliness, and long-term reliability, ensuring
          compliance with international cleanroom standards.
        </p>
      </div>

      {/* --- Animated Section Cards --- */}
      <div className="flex flex-col gap-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative"
            
          >
            <SectionCard {...section} />
          </div>
        ))}
      </div>
    </div>
  );
}
