"use client";
import { Wind, Factory, Cog, Zap, Gem } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Air Pollution Control Systems",
    description:
      "Advanced dust extraction, fuel extraction, silo aeration, bulk loading, and wagon loading/unloading systems for cleaner industrial environments.",
    icon: <Wind className="w-12 h-12" strokeWidth={1.5} />,
    link: "/service/AirPollutionControl",
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "HVAC Clean Room Projects",
    description:
      "Precision HVAC systems and clean room paneling solutions for pharma, biotech, and critical environments requiring strict contamination control.",
    icon: <Cog className="w-12 h-12" strokeWidth={1.5} />,
    link: "/service/HVAC",
    color: "from-cyan-600 to-cyan-800",
  },
  {
    title: "Material Handling Systems",
    description:
      "Complete fuel handling, ash handling, and warehouse handling systems with conveyors, elevators, crushers, and EOT cranes.",
    icon: <Factory className="w-12 h-12" strokeWidth={1.5} />,
    link: "/service/MaterialHandling",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    title: "EPC Power Projects",
    description:
      "Turnkey Engineering, Procurement & Construction for power plants. Click to visit our dedicated EPC subsidiary — Indophil Jettech Energy Pvt. Ltd.",
    icon: <Zap className="w-12 h-12" strokeWidth={1.5} />,
    link: "https://www.jettechenergy.com",
    external: true,
    color: "from-orange-500 to-orange-700",
  },
  {
    title: "Metallurgicals & Briquettes",
    description:
      "Casting division offering liners, beaters, carbon steel, magna steel and cast iron. Also supplying biomass briquettes as boiler fuel.",
    icon: <Gem className="w-12 h-12" strokeWidth={1.5} />,
    link: "/service/Metallurgicals",
    color: "from-slate-600 to-slate-800",
  },
];

export default function ServicePage() {
  return (
    <section className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/assets/images/hero-section.png')] bg-cover bg-center opacity-30 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#e8f0ff] to-[#dbeafe] -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#3877d4] uppercase tracking-[5px] text-sm font-semibold mb-3"
        >
          What We Offer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0b1e3d] mb-6"
        >
          Projects &amp; Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          From air pollution control to precision clean rooms, bulk material
          handling to EPC power projects — Global Enviro delivers end-to-end
          industrial engineering solutions across five core domains.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
              // Make EPC card full-width on md if it's the 4th and there are 5
              index === 3 ? "md:col-span-1" : ""
            }`}
          >
            {/* Gradient top bar */}
            <div className={`h-2 w-full bg-gradient-to-r ${cat.color}`} />

            <div className="bg-white p-8 h-full flex flex-col">
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cat.color} text-white mb-5 w-fit`}>
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0b1e3d] mb-3">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {cat.description}
              </p>

              <div className="mt-6">
                <Link
                  href={cat.link}
                  target={cat.external ? "_blank" : "_self"}
                  rel={cat.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold bg-gradient-to-r ${cat.color} hover:opacity-90 transition-all`}
                >
                  {cat.external ? "Visit Jettech →" : "Explore →"}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}