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
        subtitle="Specialists in Manganese Steel, Hi-Chrome Castings, and precision cast iron components for industrial applications."
        align="left"
        overlay="bg-black/55"
        height="h-[400px]"
      />

      {/* About + Capabilities */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <p className="text-[#3877d4] uppercase tracking-widest text-sm font-semibold">
            About Global Metallurgicals
          </p>
          <h2 className="text-3xl font-bold text-[#0b1e3d]">
            Precision Metal Castings for Industry
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Global Metallurgicals specialises in manufacturing Manganese Steel
            Castings and Hi-Chrome Castings. Our cast iron items mainly include
            Rotary Airlock Valves, Dust Collector Cones, Bearing Housings,
            Liners and Beaters, and Hammers for crushers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With an induction furnace capacity of 500 Kgs, a dedicated Heat
            Treatment facility, and full In-House Machining capability, we
            deliver precision components that meet demanding industrial standards.
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

      {/* Casting Types */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1e3d] text-center mb-10">
            Our Casting Divisions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {castingTypes.map((type) => (
              <div
                key={type.title}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={type.img}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-[#0b1e3d] text-base">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Image Grid */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1e3d] text-center mb-10">
            Our Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {products.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center py-3 bg-[#0b1e3d] text-white text-sm font-semibold">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1e3d] py-14 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">
          Need Custom Castings?
        </h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          We manufacture to specification. Reach out to discuss your casting
          requirements with our engineering team.
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