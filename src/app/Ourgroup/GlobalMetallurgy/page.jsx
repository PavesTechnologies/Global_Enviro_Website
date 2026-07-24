import HeroSection from "@/components/HeroSection/HeroSection";
import Image from "next/image";
import Link from "next/link";

const products = [
  { title: "Castings",            img: "/assets/images/castings.png" },
  { title: "Carbon Steel",        img: "/assets/images/carbon.png" },
  { title: "Guidevan",            img: "/assets/images/guidevan.png" },
  { title: "MDC Cones",           img: "/assets/images/MDC cones.png" },
  { title: "Rotary Airlock Valve",img: "/assets/images/rotary airlock valve.png" },
  { title: "Core Shop",           img: "/assets/images/core shop.png" },
];

const capabilities = [
  { label: "Specialization",  value: "Manganese Steel & Hi-Chrome Castings" },
  { label: "Furnace Capacity",value: "500 Kgs Induction Furnace" },
  { label: "Facility",        value: "Heat Treatment & In-House Machining" },
  { label: "Products",        value: "Liners, Beaters, Hammers, RAV, Cones" },
];

const castingTypes = [
  {
    title: "Manganese Steel Castings",
    desc: "High-impact resistant castings used in crushing, grinding, and material handling applications. Ideal for high-wear environments.",
    img: "/assets/images/castings.png",
  },
  {
    title: "Hi-Chrome Castings",
    desc: "Superior abrasion-resistant castings offering extended service life in cement, power, and mineral processing industries.",
    img: "/assets/images/carbon.png",
  },
  {
    title: "Cast Iron Components",
    desc: "Precision cast iron parts including Rotary Airlock Valves, Dust Collector Cones, Bearing Housings, Liners, Beaters, and Crusher Hammers.",
    img: "/assets/images/rotary airlock valve.png",
  },
];

export default function GlobalMetallurgicalsPage() {
  return (
    <main className="bg-[#f9fafb]">

      {/* Hero */}
      <HeroSection
        imageSrc="/assets/images/metallurgy.jpg"
        title="Global Metallurgicals"
        subtitle="Precision Metal Castings for Industry."
        align="left"
        overlay="bg-black/55"
        height="h-[400px]"
      />

      {/* About + Capabilities */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="text-[#3877d4] uppercase tracking-widest text-sm font-semibold">
            About Global Metallurgicals
          </p>
          <h2 className="text-3xl font-bold text-[#0b1e3d]">
            Precision Metal Castings for Industry
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in high-performance Manganese Steel Castings and
            Hi-Chrome Castings, engineered for extreme wear and impact applications.
            Our core cast iron products include Rotary Airlock Valves, Dust Collector
            Cones, Bearing Housings, Crusher Liners &amp; Beaters, and Hammers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-[#0b1e3d]">In-House Capabilities That Deliver:</span> with
            a 500 Kg induction furnace, a dedicated heat treatment facility, and complete
            in-house machining, we maintain full quality control from melt to final
            component. The result: precision parts built to demanding industrial standards.
          </p>
          <Link
            href="/contactUs"
            className="inline-flex items-center gap-2 bg-[#3877d4] text-white px-5 py-2.5 rounded-lg hover:bg-[#2f5fb8] transition-all font-medium"
          >
            Enquire Now →
          </Link>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-2 gap-4">
          {capabilities.map((c) => (
            <div
              key={c.label}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                {c.label}
              </p>
              <p className="text-sm font-bold text-[#0b1e3d] leading-snug">
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      

    </main>
  );
}