import HeroSection from "@/components/HeroSection/HeroSection";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const highlights = [
  { label: "Founded",        value: "1999" },
  { label: "Headquarters",   value: "Hyderabad, Telangana" },
  { label: "Specialization", value: "Air Pollution Control & HVAC" },
  // { label: "Industries",     value: "Cement, Power, Steel, Pharma, Paper" },
];

const divisions = [
  {
    title: "Air Pollution Control",
    desc: "Advanced dust extraction, pulse jet bag filters, cyclone separators, centrifugal fans, and bulk loading systems for cleaner industrial environments.",
    img: "/assets/images/Air-Pollution.jpg",
  },
  {
    title: "HVAC Clean Room Systems",
    desc: "Turnkey HVAC and clean room solutions including AHUs, puff panels, doors, HEPA filters, laminar flow units, and air showers for pharma and biotech.",
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
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
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
            As turnkey solution providers for HVAC and Clean room projects, we
            deliver complete systems: air handling units, puff panels, clean room
            doors, and high-efficiency dust collectors — all tailored for precision
            manufacturing environments. We also specialize in bulk material handling
            for cement and fly ash, with proven unloading systems for silos and racks.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#0b1e3d]">Industries We Serve:</span> Cement | Power |
            Steel | Pharmaceuticals | Paper | Distilleries | Food Processing | Scientific Research
          </p>
          <Link
            href="/service"
            className="inline-flex items-center gap-2 bg-[#3877d4] text-white px-5 py-2.5 rounded-lg hover:bg-[#2f5fb8] transition-all font-medium mt-2"
          >
            Explore Products & Projects →
          </Link>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h, index) => {
            const isLastOdd =
              index === highlights.length - 1 && highlights.length % 2 !== 0;

            return (
              <div
                key={h.label}
                className={cn(
                  "bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center",
                  isLastOdd && "col-span-2 max-w-[calc(50%-0.5rem)] mx-auto"
                )}
              >
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  {h.label}
                </p>
                <p className="text-base font-bold text-[#0b1e3d]">{h.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      

    </main>
  );
}