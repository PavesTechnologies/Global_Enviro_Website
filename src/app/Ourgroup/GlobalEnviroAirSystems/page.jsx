import HeroSection from "@/components/HeroSection/HeroSection";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Cog, Factory, Check } from "lucide-react";

const highlights = [
  { label: "Founded",      value: "1999",                 icon: Calendar },
  { label: "Headquarters", value: "Hyderabad, Telangana", icon: MapPin },
  {
    label: "Specialization",
    icon: Cog,
    value: [
      "Air Pollution Control Systems",
      "HVAC Clean Room Systems",
      "Material Handling Systems",
      // "EPC Power Projects",
      // "Metallurgicals & Briquettes",
    ],
  },
  {
    label: "Industries We Serve",
    icon: Factory,
    value: [
      "Cement",
      "Power",
      "Steel",
      "Pharmaceuticals",
      "Paper",
      "Distilleries",
      "Food Processing",
      "Scientific Research",
    ],
  },
];

const divisions = [
  {
    title: "Air Pollution Control",
    desc: "Advanced dust extraction, pulse jet bag filters, cyclone separators, centrifugal fans, and bulk loading systems for cleaner industrial environments.",
    img: "/assets/images/Air-Pollution.jpg",
  },
  {
    title: "HVAC Clean Room Systems",
    desc: "Turnkey HVAC & clean room systems including AHUs, puff panels, doors, HEPA filters, laminar flow units, and air showers for pharma and biotech.",
    img: "/assets/images/hvac clean room.png",
  },
  {
    title: "Material Handling",
    desc: "Complete fuel handling, ash handling, and warehouse systems with conveyors, bucket elevators, crushers, and EOT cranes for power and process industries.",
    img: "/assets/images/fuel handling system.png",
  },
];

const products = [
  { name: "Pulse Jet Bag Filter",    img: "/assets/images/pulsejet.png" },
  { name: "Dust Extraction Systems", img: "/assets/images/dust extraction.png" },
  { name: "Centrifugal Fans",        img: "/assets/images/centrifugal fans.png" },
  { name: "HVAC Clean Room",         img: "/assets/images/hvac clean room.png" },
  { name: "Clean Room Panels",       img: "/assets/images/clean room panel.png" },
  { name: "Ash Handling Systems",    img: "/assets/images/ash handling.png" },
];

export default function GlobalEnviroAirSystemsPage() {
  return (
    <main className="bg-[#f9fafb]">

      {/* Hero */}
      <HeroSection
        imageSrc="/assets/images/global image.jpg"
        title="Global Enviro Air Systems (P) Ltd"
        subtitle="Engineering Clean Air, Enabling Clean Industry."
        align="left"
        overlay="bg-black/55"
        height="h-[400px]"
      />

      {/* About + Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="text-[#3877d4] uppercase tracking-widest text-sm font-semibold">
            About the Company
          </p>
          <h2 className="text-3xl font-bold text-[#0b1e3d]">
            Engineering Clean Air, Enabling Clean Industry
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We design and manufacture advanced air pollution control systems,
            engineered to drastically reduce or eliminate industrial emissions
            into the atmosphere.
          </p>
          <p className="text-gray-600 leading-relaxed">
            As turnkey solution providers for HVAC & Cleanroom systems, we
            deliver complete systems: air handling units, puff panels, clean room
            doors, and high-efficiency dust collectors — all tailored for precision
            manufacturing environments. We also specialize in bulk material handling
            for cement and fly ash, with proven unloading systems for silos and racks.
          </p>
          {/* <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#0b1e3d]">Industries We Serve:</span> Cement | Power |
            Steel | Pharmaceuticals | Paper | Distilleries | Food Processing | Scientific Research
          </p> */}
          <Link
            href="/service"
            className="inline-flex items-center gap-2 bg-[#3877d4] text-white px-5 py-2.5 rounded-lg hover:bg-[#2f5fb8] transition-all font-medium mt-2"
          >
            Explore Products & Projects →
          </Link>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-4 items-stretch">
          {highlights.map((h) => {
            const isList = Array.isArray(h.value);
            const Icon = h.icon;

            return (
              <div
                key={h.label}
                className="group flex flex-col h-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5"
              >
                {/* Header */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 text-[#3877d4] group-hover:bg-[#3877d4] group-hover:text-white transition-colors">
                    {Icon && <Icon size={15} />}
                  </span>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    {h.label}
                  </p>
                </div>

                {isList ? (
                  <ul className="flex-1 flex flex-col justify-center gap-2 w-fit mx-auto">
                    {h.value.map((v) => (
                      <li
                        key={v}
                        className="flex items-center gap-2 text-sm font-semibold text-[#0b1e3d]"
                      >
                        <Check size={15} className="text-[#3877d4] shrink-0" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="flex-1 flex items-center justify-center text-lg font-bold text-[#0b1e3d]">
                    {h.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      

    </main>
  );
}