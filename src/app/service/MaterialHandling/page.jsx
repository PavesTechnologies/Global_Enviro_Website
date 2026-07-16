"use client";
import { useState } from "react";
import useOpenOnHash from "@/lib/useOpenOnHash";
import MotionWrapper from "@/components/common/MotionWrapper";
import LazyAnimatePresence from "@/components/common/LazyAnimatePresence";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection/HeroSection";
import HVSectionCard from "@/components/commonForService/HVSectionCard";

const sections = [
  {
    id: "fuel-handling",
    title: "1. Fuel Handling Systems",
    color: "bg-indigo-700",
    subsystems: [
      {
        name: "Coal Handling",
        description:
          "A Coal Handling System (CHS) is an integrated system designed to receive, unload, transport, store, crush, screen, and feed coal to boilers, furnaces, kilns, or process plants. It ensures a continuous and reliable supply of coal while minimizing dust generation, material losses, and manual intervention. Coal Handling Systems are engineered to provide efficient, safe, and environmentally compliant coal transportation and storage solutions for uninterrupted plant operations.",
      },
      {
        name: "Husk Handling",
        description:
          "A Husk Handling System (HHS) is designed to receive, convey, store, distribute, and feed husk efficiently to boilers, furnaces, and biomass-fired power plants. The system ensures smooth material flow, minimizes spillage and dust generation, and provides a continuous fuel supply for uninterrupted plant operation. Husk Handling Systems provide an efficient and automated solution for transporting, storing, and feeding biomass fuel, ensuring reliable and environmentally friendly plant operations.",
      },
      {
        name: "Biomass Briquettes Handling",
        description:
          "A Biomass Briquettes Handling System (BBHS) is designed to receive, convey, store, and feed biomass briquettes efficiently to boilers, furnaces, and thermal processing units. The system ensures smooth handling of briquettes while minimizing breakage, dust generation, and material losses, providing a reliable and continuous fuel supply. Biomass Briquettes Handling Systems provide an efficient, automated, and eco-friendly solution for the storage, conveying, and feeding of renewable biomass fuels, ensuring reliable plant performance and energy efficiency.",
      },
    ],
    equipment: [
      {
        title: "Belt Conveyor",
        description:
          "Belt Conveyors are versatile material handling systems designed for the continuous transportation of bulk materials and packaged goods across short and long distances. Engineered with durable belts, robust structures, and efficient drive systems, these conveyors ensure smooth, safe, and energy-efficient movement of materials in industrial operations.",
        points: [
          "Ideal For: Chemical & Fertilizer Plants, Power & Fuel Handling Plants, Warehouses & Logistics Centers, Food Processing Industries, Packaging & Manufacturing Units, Ports & Bulk Material Handling",
          "Continuous and high-capacity material handling",
          "Smooth and reliable operation with minimal downtime",
          "Suitable for horizontal and inclined conveying",
          "Energy-efficient drive systems with VFD options",
          "Heavy-duty construction for rugged applications",
          "Low maintenance and long operational life",
          "Available in customized lengths, widths, and capacities",
          "Compatible with automation and process integration",
          "Capacity Range: 5 TPH to 300 TPH. Power, Cement, Steel, Mines, Ports",
          "Type of Application: Horizontal/Inclined conveying of Coal, Ore, Aggregates",
          "Temp: Ambient to 150°C. Up to 120°C with HR belts",
          "Types of Conveyor: Flat / Troughed / Pipe / Cleated / Portable / Telescopic",
          "Types of Belt: EP Nylon / Steel Cord / Heat Resistant / Oil Resistant / FR Grade",
        ],
        image: "/assets/images/material-handling-projects/belt-conveyor.jpg",
      },
      {
        title: "Bucket Elevator",
        description:
          "Bucket Elevators are vertical conveying systems designed for the efficient lifting and transportation of bulk materials. Equipped with a series of buckets mounted on belts or chains, these elevators ensure smooth and continuous handling of powders, granules, and bulk solids with minimal spillage and material degradation. They are widely used in industrial processing and bulk material handling applications.",
        points: [
          "Ideal For: Cement & Mineral Industries, Food & Grain Processing Plants, Chemical & Fertilizer Industries, Power & Fuel Handling Systems, Packaging & Manufacturing Units, Agricultural Processing Facilities, Bulk Material Storage & Handling Applications",
          "Efficient vertical conveying of bulk materials",
          "High-capacity and continuous operation",
          "Minimal material spillage and degradation",
          "Robust and durable construction",
          "Suitable for powders, granules, and lump materials",
          "Energy-efficient drive mechanisms",
          "Compact design with low floor space requirement",
          "Customized bucket sizes, capacities, and configurations available",
          "Capacity Range: 5 TPH to 100 TPH. Power, Cement, Food, Chemicals, Grains",
          "Type of Application: Vertical lifting of Coal, Ash, Clinker, Cement, Grains, Pellets",
          "Temp: Ambient to 120°C. Up to 120°C with heat resistant buckets",
          "Types of Elevator: Centrifugal Discharge / Continuous Discharge / Chain Type / Belt Type",
          "Types of Bucket: Pressed Steel / Fabricated / Plastic / SS",
          "MOC: MS Fabricated / SS304 / SS316. Casing: MS/GI. Boot & Head: MS/Lined",
        ],
        image: "/assets/images/material-handling-projects/bucket-elevator.jpg",
        gallery: ["/assets/images/material-handling-projects/bucket-elevator-2.jpg"],
      },
      {
        title: "Slot Chain Conveyor",
        description:
          "Slot Chain Conveyors are robust material handling systems designed for the horizontal and inclined transportation of bulk materials, powders, granules, and industrial products. Utilizing an endless chain with specially designed slats or flights moving inside an enclosed casing, these conveyors ensure efficient, dust-free, and controlled material movement with minimal spillage and wear.",
        points: [
          "Ideal For: Cement & Mineral Industries, Power & Fuel Handling Systems, Food & Grain Processing Plants, Chemical & Fertilizer Industries, Industrial Manufacturing Units, Bulk Material Handling Applications, Ash & Powder Conveying Systems",
          "Efficient enclosed conveying system",
          "Suitable for heavy-duty and abrasive materials",
          "Dust-free operation with minimal material spillage",
          "Durable chain and wear-resistant construction",
          "Handles horizontal and inclined conveying applications",
          "Low maintenance with reliable continuous operation",
          "Compact design with high conveying efficiency",
          "Customized capacities and conveyor lengths available",
          "Capacity Range: 1 TPH to 200 TPH. Food grains, coal, Biomass",
          "Types of Conveyor: Straight Running / Side flexing / Single Strand / Multi Strand / Incline-Decline",
          "Types of Chain: Acetal / SS / Thermoplastic / Low-Friction / Magnet flex / Tab / Bevel",
          "MOC: SS304 / SS316 Frame. Side Rails: SS/UHMW. Wear Strips: UHMW-PE",
        ],
      },
      {
        title: "Vibratory Screen (Single/Double/Triple Deck)",
        description:
          "Vibratory Screens are high-performance screening equipment designed for the separation, grading, and classification of bulk materials based on particle size. Available in single / double deck / triple deck configurations, these screens provide efficient and continuous operation for a wide range of industrial applications. Their robust construction and vibration mechanism ensure accurate screening with high throughput and minimal maintenance.",
        points: [
          "Ideal For: Cement & Mineral Industries, Coal & Power Plants, Food Processing Industries, Chemical & Fertilizer Plants, Sand & Aggregate Processing, Recycling & Material Recovery Systems, Bulk Material Handling Applications",
          "Capacity Range: 1 TPH to 300 TPH. Mining, Power, Steel, Aggregates, Recycling",
          "Types of Screen: Circular Motion / Linear Motion / Flip Flow Screen / Hybrid (Top Deck Circular Motion / Bottom Deck / Flip flow)",
          "Types of Media: Wire Mesh / Polyurethane / Rubber / Perforated Plate / Finger Deck",
          "MOC: MS Fabricated / SS304 / SS316. Springs: Alloy Steel. Side Plates: MS/Lined",
        ],
        image: "/assets/images/material-handling-projects/vibratory-screen.jpg",
      },
      {
        title: "Screw Conveyor",
        description:
          "Screw Conveyors are versatile material handling systems designed for the smooth transportation of powders, granules, semi-solid materials, and bulk solids. Using a rotating helical screw inside a trough or tubular casing, these conveyors provide controlled, dust-free, and efficient material movement for various industrial applications. Their compact design and reliable operation make them ideal for both horizontal and inclined conveying.",
        points: [
          "Ideal For: Cement & Mineral Industries, Food Processing Plants, Chemical & Fertilizer Industries, Pharmaceutical Applications, Waste & Ash Handling Systems, Packaging & Manufacturing Units, Bulk Material Transfer Applications",
          "Smooth and continuous material conveying",
          "Suitable for powders, granules, and semi-solid materials",
          "Compact and space-saving design",
          "Enclosed construction for dust-free operation",
          "Handles horizontal, inclined, and vertical conveying",
          "Durable and low-maintenance construction",
          "Customizable lengths, diameters, and capacities",
          "Energy-efficient and reliable performance",
          "Capacity Range: 0.5 TPH to 100 TPH. Power, Cement, Chemicals, Food, ETP/STP",
          "Type of Application: Horizontal/Inclined conveying of Ash, Cement, Lime, Sludge, Grains, Powder",
          "Temp: Ambient to 150°C. Up to 250°C with special flight/seal design",
          "Types of Conveyor: U-Trough / Tubular / Shaftless / Inclined / Hanger Type",
          "Types of Screw: Helical / Sectional / Ribbon / Paddle / Cut Flight / Tapered",
          "MOC: MS Fabricated / SS304 / SS316 / Lined MS. Trough: MS/SS. Flights: MS/SS/Hard faced",
        ],
        image: "/assets/images/material-handling-projects/screw-conveyor.jpg",
      },
      {
        title: "Crusher (Impact Hammer Mill)",
        description:
          "Impact Hammer Mill Crushers are heavy-duty crushing machines designed for the efficient reduction of bulk materials into smaller, uniform particle sizes. Utilizing high-speed rotating hammers and impact forces, these crushers deliver high crushing efficiency, reliable performance, and consistent output for a wide range of industrial applications.",
        points: [
          "Ideal For: Cement & Mineral Industries, Coal & Power Plants, Chemical & Fertilizer Industries, Recycling & Waste Processing Units, Food & Agro Processing Applications, Mining & Aggregate Industries, Bulk Material Handling Systems",
          "High crushing efficiency with uniform output size",
          "Robust and heavy-duty construction",
          "Suitable for brittle and medium-hard materials",
          "High-speed rotor with durable hammer design",
          "Adjustable output particle size control",
          "Continuous and reliable operation",
          "Easy maintenance and replacement of wear parts",
          "Available in multiple capacities and configurations",
          "Capacity Range: 5 TPH to 200 TPH. Coal, Limestone, Minerals, Biomass, Aggregates",
          "Type of Application: Size reduction / Primary / Secondary crushing for Power, Cement, Mining",
          "Temp: Ambient to 150°C. Handles hot clinker up to 180°C with special MOC",
          "Types of Crusher: Impactor / Hammer Mill (Reversible / Non-Reversible)",
        ],
        image: "/assets/images/material-handling-projects/crusher-impact-hammer-mill.jpg",
      },
      {
        title: "Crusher Cum Screen",
        description:
          "Crusher Cum Screen units are compact and efficient systems designed to perform both crushing and screening operations in a single integrated setup. These machines reduce material size and simultaneously separate particles according to required specifications, improving productivity, reducing handling stages, and optimizing space utilization in industrial processing applications.",
        points: [
          "Ideal For: Cement & Mineral Industries, Coal & Power Plants, Sand & Aggregate Processing, Recycling & Waste Management Units, Chemical & Fertilizer Industries, Mining & Quarry Operations, Bulk Material Handling Systems",
          "Combined crushing and screening in one unit",
          "High operational efficiency with reduced processing time",
          "Compact and space-saving design",
          "Uniform particle size output with effective separation",
          "Continuous and reliable operation",
          "Robust construction for heavy-duty applications",
          "Reduced material handling and maintenance requirements",
          "Available in customized capacities and configurations",
          "Capacity Range: 1 TPH to 50 TPH. Coal, Limestone, Ore, Aggregates, Mining",
          "Type of Application: Combined crushing + sizing in single unit for Power, Cement, Steel plants",
          "Temp: Ambient to 120°C. Up to 150°C with heat resistant screen media",
          "Types of Unit: Impact Type / Ring Granulator Type",
        ],
        image: "/assets/images/material-handling-projects/crusher-cum-screen.jpg",
      },
    ],
  },
  {
    id: "ash-handling",
    title: "2. Ash Handling Systems",
    color: "bg-slate-700",
    subsystems: [
      {
        name: "Dense Phase Ash Handling",
        description:
          "A Dense Phase Ash Handling System (DPAHS) is a pneumatic conveying system designed to transport fly ash, bottom ash, and other dry bulk materials using high pressure and low velocity air. This method ensures efficient, dust-free, and low-wear material transfer over long distances while minimizing ash degradation and pipeline erosion. Dense Phase Ash Handling Systems provide a highly efficient, reliable, and environmentally friendly solution for conveying ash and other dry bulk materials with minimal wear, dust emissions, and maintenance requirements.",
      },
      {
        name: "Lean Phase Ash Handling",
        description:
          "A Lean Phase Ash Handling System (LPAHS) is a pneumatic conveying system that transports fly ash and other dry bulk materials using low pressure and high velocity air. The material remains suspended in the air stream throughout the conveying process, making it suitable for continuous ash transfer over short to medium distances. Lean Phase Ash Handling Systems offer a cost-effective and efficient solution for the continuous pneumatic conveying of fly ash and other fine dry materials, ensuring clean, reliable, and automated plant operations.",
      },
      {
        name: "Mechanical Ash Handling",
        description:
          "A Mechanical Ash Handling System (MAHS) is designed to collect, convey, cool, store, and dispose of bottom ash, clinker ash, and other solid combustion residues using mechanical conveying equipment. The system provides reliable and economical ash transportation while ensuring continuous plant operation and reduced manual handling. Mechanical Ash Handling Systems provide a dependable and cost-effective solution for the collection, cooling, conveying, and disposal of ash, ensuring safe, efficient, and uninterrupted plant operations.",
      },
    ],
    equipment: [
      {
        title: "Dense Veyor",
        description:
          "Dense Veyor systems are advanced dense phase pneumatic conveying solutions designed for the controlled transportation of bulk powders and granular materials at low velocity and high pressure. These systems minimize material degradation, pipeline wear, and dust generation while ensuring energy-efficient and reliable conveying over long distances.",
        points: [
          "Ideal For: Cement & Fly Ash Handling Plants, Power Generation Industries, Chemical & Fertilizer Plants, Food & Pharmaceutical Industries, Mineral & Bulk Material Processing Units, Ash Handling Systems, Pneumatic Material Transfer Applications",
          "Low-velocity dense phase conveying technology",
          "Minimal material degradation and segregation",
          "Dust-free and environmentally safe operation",
          "Reduced pipeline wear and maintenance costs",
          "Energy-efficient material transfer",
          "Suitable for long-distance conveying applications",
          "Fully enclosed and automated system operation",
          "Handles abrasive, fragile, and fine materials efficiently",
          "Capacity Range: 1 TPH to 10 TPH. Power, Cement, Steel, Fly Ash, Cement, Lime",
          "Type of Application: Pneumatic dense phase conveying of fine/dry bulk solids over long distance",
          "Temp: Ambient to 150°C. Up to 250°C with special dome valve & pipeline",
          "Types of System: Single Vessel / Twin Vessel / Continuous / Batch / Multi-point Discharge",
          "Types of Valve: Dome Valve",
        ],
        image: "/assets/images/material-handling-projects/dense-veyor.jpg",
      },
      {
        title: "Ash Veyor",
        description:
          "Ash Veyor systems are specialized pneumatic conveying solutions designed for the efficient handling and transportation of fly ash, bottom ash, and other fine particulate materials generated in industrial and power plant operations. Engineered for dust-free and continuous operation, these systems ensure safe material transfer with minimal maintenance and environmental impact.",
        points: [
          "Ideal For: Thermal Power Plants, Cement Industries, Boiler & Furnace Systems, Steel & Foundry Industries, Waste-to-Energy Plants, Industrial Ash Handling Applications, Bulk Powder Conveying Systems",
          "Efficient pneumatic ash conveying system",
          "Dust-free and environmentally safe operation",
          "Handles fine and abrasive ash materials effectively",
          "Low maintenance with reliable continuous performance",
          "Reduced material spillage and handling losses",
          "Energy-efficient conveying technology",
          "Suitable for long-distance ash transfer",
          "Customizable capacities and system configurations available",
          "Capacity Range: 1 TPH to 10 TPH. Thermal Power, Incineration, Boilers, CFBC",
          "Type of Application: Dense phase pneumatic conveying of Bottom Ash / Fly Ash / Bed Ash",
          "Temp: Ambient to 300°C. Up to 400°C with refractory lined vessel & high temp dome valves",
          "Types of System: Single Vessel",
          "Types of Conveying: Positive Pressure / Vacuum / Combination. Long distance up to 500m+",
        ],
        image: "/assets/images/material-handling-projects/ash-veyor.jpg",
      },
      {
        title: "Wet Scrapper",
        description:
          "Wet Scrapper is major essential component in Ash handling equipment used to continuously remove bottom ash from coal-fired boiler furnaces. The scraper chain drags ash through a water trough, quenching it and preventing dust during disposal.",
        points: [
          "Capacity Range: 1 TPH to 10 TPH. Thermal Power, Steel, Boilers, Bottom Ash Handling",
          "Type of Application: Submerged chain conveying for hot bottom ash / clinker / slag quenching + discharge",
          "Temp: Up to 800°C material inlet. Water bath temp 60-90°C. Handles hot ash from furnace",
          "Types of Scrapper: Single Chain / Double Chain / Submerged / Semi-submerged / Heavy Duty",
          "Types of Chain: Forged Link",
          "MOC: IS2062",
        ],
        image: "/assets/images/material-handling-projects/wet-scrapper.jpg",
      },
      {
        title: "Ash Conditioner",
        description:
          "Ash Conditioners are specialized equipment designed to mix dry ash with a controlled quantity of water to convert it into a moist, manageable form for safe handling, transportation, and disposal. Widely used in power plants and industrial ash handling systems, these units minimize dust generation, improve operational cleanliness, and support environmentally compliant ash management.",
        points: [
          "Ideal For: Thermal Power Plants, Cement & Mineral Industries, Boiler & Furnace Systems, Steel & Foundry Industries, Waste-to-Energy Plants, Industrial Ash Handling Applications, Fly Ash & Bottom Ash Processing Systems",
          "Efficient dust suppression during ash handling",
          "Uniform mixing of ash and water",
          "Continuous and reliable operation",
          "Reduces airborne ash pollution",
          "Robust and wear-resistant construction",
          "Low maintenance and energy-efficient design",
          "Suitable for handling dry and abrasive ash materials",
          "Customized capacities and configurations available",
          "Capacity Range: 1 TPH to 10 TPH. Thermal Power, Fly Ash, CFBC, Incineration",
          "Type of Application: Wetting/conditioning of dry fly ash with water to prevent dusting during disposal",
          "Temp: Ambient to 150°C inlet ash. Discharge temp 40-80°C after conditioning",
          "Types of Conditioner: Twin Shaft Paddle / Single Shaft / Continuous / Pin Mixer Type",
          "MOC: IS2062",
        ],
        image: "/assets/images/material-handling-projects/ash-conditioner.jpg",
      },
    ],
  },
  {
    id: "warehouse",
    title: "3. Warehouse Handling Systems",
    color: "bg-blue-800",
    subsystems: [
      {
        name: "EOT Cranes",
        description:
          "An EOT Crane is a heavy-duty material handling system designed to lift, transport, and position materials within industrial facilities. Operating on elevated runway beams, EOT cranes provide safe, efficient, and precise movement of heavy loads, improving productivity and reducing manual handling efforts. EOT Cranes provide a safe, reliable, and efficient solution for heavy material handling, enabling seamless movement of loads across industrial facilities while maximizing operational efficiency and workplace safety.",
      },
    ],
    equipment: [
      {
        title: "Single Girder EOT Crane",
        description:
          "Single Girder EOT (Electric Overhead Traveling) Cranes are versatile lifting systems designed for safe and efficient handling of materials within industrial facilities. Featuring a single bridge girder with an electrically operated hoist, these cranes provide reliable performance, optimized floor space utilization, and smooth load movement for light to medium-duty applications.",
        points: [
          "Ideal For: Manufacturing & Engineering Units, Warehouses & Logistics Facilities, Fabrication Workshops, Power & Process Industries, Assembly & Maintenance Areas, Material Handling Applications, Industrial Production Plants",
          "Compact and space-saving design",
          "Smooth and precise load handling operation",
          "Electrically operated hoist and travel mechanisms",
          "High lifting efficiency with reliable performance",
          "Suitable for light and medium-duty applications",
          "Robust construction with low maintenance requirements",
          "Enhanced operational safety features",
          "Available in customized spans, capacities, and lifting heights",
          "Capacity Range: 0.5 Ton to 20 Ton. Workshops, Power House, Pump House, Stores",
          "Type of Application: Material handling / Maintenance / Loading-unloading in bays & sheds",
          "Types of Crane: Single Girder / under slung / Top Running. Span: 3m to 31.5m",
          "Types of Hoist: Electric Wire Rope / Chain Hoist. Speeds: Single / Double / VFD Control",
          "MOC: IS2062 Fabricated Box Girder / ISMC/ISMB. End Carriages: MS. Wheels: C45 Forged/Alloy Steel",
        ],
      },
      {
        title: "Double Girder EOT Crane",
        description:
          "Double Girder EOT (Electric Overhead Traveling) Cranes are high-capacity lifting systems engineered for heavy-duty industrial material handling applications. Built with two bridge girders for enhanced strength and stability, these cranes provide superior load handling, greater lifting heights, and smooth operation for demanding industrial environments.",
        points: [
          "Ideal For: Steel & Heavy Engineering Industries, Power Plants & Process Industries, Manufacturing & Fabrication Units, Shipyards & Infrastructure Projects, Warehouses & Logistics Centers, Mining & Cement Industries, Heavy Material Handling Applications",
          "High load carrying capacity for heavy-duty operations",
          "Dual girder structure for enhanced strength and stability",
          "Smooth and precise lifting and travel movements",
          "Higher lifting height with optimized hook approach",
          "Durable and low-maintenance construction",
          "Safe and reliable operation with advanced control systems",
          "Suitable for continuous industrial usage",
          "Available in customized spans, capacities, and duty classes",
          "Capacity Range: 5 Ton to 30 Ton. Steel, Power, Heavy Engineering, Paper, Hydro",
          "Type of Application: Heavy material handling / Turbine hall / Mill bay / Erection & maintenance",
          "Types of Crane: Top running / under slung. Span: 6m to 25m+. Lift Height: Up to 30m",
          "Types of Hoist: Wire Rope Crab / Open Winch. Controls: Pendant / Radio Remote / Cabin / VFD",
        ],
      },
    ],
  },
];

function MHAccordion({ section, isOpen, onToggle }) {
  return (
    <div id={section.id} className="scroll-mt-28 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
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
            <div className="bg-white px-6 py-6 space-y-8">
              {/* System Types */}
              {section.subsystems.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    System Types
                  </p>
                  <div className="space-y-4">
                    {section.subsystems.map((s) => (
                      <div key={s.name}>
                        <span className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-2">
                          {s.name}
                        </span>
                        <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Equipment */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Equipment
                </p>
                <div className="flex flex-col gap-8">
                  {section.equipment.map((item) => (
                    <HVSectionCard key={item.title} {...item} />
                  ))}
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
