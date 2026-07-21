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
        subtitle="Green Fuel, Real Impact — Powering Industry, Sustainably."
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
            Green Fuel, Real Impact
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Powering industry, sustainably. We deliver sustainable, eco-friendly fuel
            solutions through high-quality biomass briquettes and renewable energy
            alternatives. Our mission is simple: help industries meet their energy needs
            while cutting carbon footprint.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We design efficient fuel systems that lower costs, reduce emissions, and
            support cleaner production.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#0b1e3d]">The SV Bio Fuels Advantage:</span> reliable
            supply, consistent calorific value, and a direct path to your sustainability goals.
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
            src="/assets/images/metallurgicals-projects/biomass-briquettes.jpg"
            alt="SV Bio Fuels"
            fill
            className="object-cover"
          />
        </div>
      </section>

      

    </main>
  );
}