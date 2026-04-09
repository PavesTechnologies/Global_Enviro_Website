import HeroSection from "@/components/HeroSection/HeroSection";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Flame, Recycle, Factory } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-7 h-7 text-green-600" />,
    title: "Eco-Friendly",
    desc: "Biomass briquettes are a clean, carbon-neutral alternative to coal and fossil fuels.",
  },
  {
    icon: <Flame className="w-7 h-7 text-orange-500" />,
    title: "High Calorific Value",
    desc: "Consistent heat output suitable for industrial boilers and process heating.",
  },
  {
    icon: <Recycle className="w-7 h-7 text-blue-500" />,
    title: "Renewable Energy",
    desc: "Made from agricultural and forestry waste — reducing landfill and emissions.",
  },
  {
    icon: <Factory className="w-7 h-7 text-gray-600" />,
    title: "Industrial Grade",
    desc: "Designed for power plants, boilers, kilns, and large-scale heating applications.",
  },
];

const products = [
  { name: "Biomass Briquettes",       img: "/assets/images/fuel handling system.png" },
  { name: "Coal Handling Systems",    img: "/assets/images/belt conveyor.png" },
  { name: "Husk Handling",            img: "/assets/images/vibratory screen.png" },
  { name: "Ash Handling",             img: "/assets/images/ash handling.png" },
  { name: "Ash Conditioner",          img: "/assets/images/ash conditioner.png" },
  { name: "Dense Phase Conveying",    img: "/assets/images/densephase ash handling.png" },
];

const divisions = [
  {
    title: "Biomass Briquettes Supply",
    desc: "High-quality biomass briquettes manufactured from agricultural waste, offering consistent calorific value for industrial boilers.",
    img: "/assets/images/fuel handling system.png",
  },
  {
    title: "Fuel Handling Systems",
    desc: "Complete fuel handling solutions including coal, husk, and biomass briquette handling with conveyors, screens, and crushers.",
    img: "/assets/images/belt conveyor.png",
  },
  {
    title: "Renewable Energy Solutions",
    desc: "Sustainable alternatives to fossil fuels, helping industries reduce carbon footprint while maintaining energy efficiency.",
    img: "/assets/images/ash handling.png",
  },
];

export default function SVBioFuelsPage() {
  return (
    <main className="bg-[#f9fafb]">

      {/* Hero */}
      <HeroSection
        imageSrc="/assets/images/fuel handling system.png"
        title="SV Bio Fuels"
        subtitle="Sustainable biomass briquette solutions for industrial energy needs — clean, efficient, and renewable."
        align="left"
        overlay="bg-black/60"
        height="h-[400px]"
      />

      {/* About + Image */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <p className="text-green-600 uppercase tracking-widest text-sm font-semibold">
            About SV Bio Fuels
          </p>
          <h2 className="text-3xl font-bold text-[#0b1e3d]">
            Renewable Fuel for Industry
          </h2>
          <p className="text-gray-600 leading-relaxed">
            SV Bio Fuels focuses on sustainable and eco-friendly fuel solutions,
            specializing in biomass briquettes and renewable energy alternatives.
            The company aims to provide efficient fuel systems that reduce
            environmental impact while supporting industrial energy needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our biomass briquettes are manufactured from agricultural waste and
            biomass materials, offering a high-calorific, low-ash fuel alternative
            for industrial boilers, kilns, and process heating systems.
          </p>
          <Link
            href="/contactUs"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-all font-medium mt-2"
          >
            Enquire Now →
          </Link>
        </div>

        {/* Image */}
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/images/ash handling.png"
            alt="SV Bio Fuels"
            fill
            className="object-cover"
          />
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

      {/* Features */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1e3d] text-center mb-10">
            Why Biomass Briquettes?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#0b1e3d] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1e3d] text-center mb-10">
            Products &amp; Systems
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
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
        <h2 className="text-2xl font-bold mb-3">
          Interested in Our Fuel Solutions?
        </h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Contact us to learn more about our biomass briquettes for your facility.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contactUs"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
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