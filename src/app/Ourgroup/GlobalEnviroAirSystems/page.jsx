import HeroSection from "@/components/HeroSection/HeroSection";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  { label: "Founded",        value: "1999" },
  { label: "Headquarters",   value: "Hyderabad, Telangana" },
  { label: "Specialization", value: "Air Pollution Control & HVAC" },
  { label: "Industries",     value: "Cement, Power, Steel, Pharma, Paper" },
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
        subtitle="Leading designer and manufacturer of air pollution control systems and HVAC clean room solutions since 1999."
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
            Global Enviro Air Systems Pvt. Ltd.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Global Enviro Air Systems Private Limited is a distinguished designer
            and manufacturer specializing in a diverse range of air pollution
            control systems. Our systems are meticulously crafted to reduce or
            eliminate the emission of pollutants into the atmosphere.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We serve as turnkey solution providers for HVAC Cleanrooms projects,
            offering air handling units, Puff Panels, Doors, and Dust Collectors
            tailored for manufacturing areas. We also provide solutions for
            cement and fly ash unloading systems from silos and racks.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our systems cater to cement, power, steel, pharmaceuticals, paper,
            distilleries, food, and scientific industries.
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
          {highlights.map((h) => (
            <div
              key={h.label}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
            >
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                {h.label}
              </p>
              <p className="text-base font-bold text-[#0b1e3d]">{h.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1e3d] text-center mb-10">
            Our Core Divisions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {divisions.map((div) => (
              <div
                key={div.title}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={div.img}
                    alt={div.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-[#0b1e3d] text-base">
                    {div.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {div.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1e3d] text-center mb-10">
            Key Products &amp; Systems
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center py-3 bg-[#0b1e3d] text-white text-sm font-semibold">
                  {p.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1e3d] py-14 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          For enquiries about our products and systems, reach out to our team.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contactUs"
            className="bg-[#3877d4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f5fb8] transition-all"
          >
            Contact Us
          </Link>
          <Link
            href="/RequestQuote"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0b1e3d] transition-all"
          >
            Request a Quote
          </Link>
        </div>
      </section>

    </main>
  );
}