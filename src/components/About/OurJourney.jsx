"use client";
import { motion } from "framer-motion";
import { FaFlag, FaWind, FaIndustry, FaBolt } from "react-icons/fa";

export default function OurJourney() {
  const milestones = [
    {
      year: "1999",
      title: "The Beginning",
      description:
        "Global Enviro Air Systems Pvt. Ltd. was established with a clear vision — to deliver world-class air pollution control systems and create a cleaner, healthier industrial environment.",
      icon: <FaFlag className="text-blue-300 text-2xl" />,
    },
    {
      year: "2003",
      title: "HVAC Division Added",
      description:
        "Expanded capabilities by introducing HVAC Clean Room systems, enabling the company to serve the pharmaceutical and chemical sectors with precision-controlled environments.",
      icon: <FaWind className="text-blue-300 text-2xl" />,
    },
    {
      year: "2008",
      title: "Material Handling Systems",
      description:
        "Launched a dedicated Material Handling division covering fuel handling, ash handling, and warehouse systems — strengthening our full-spectrum industrial offering.",
      icon: <FaIndustry className="text-blue-300 text-2xl" />,
    },
    {
      year: "2020",
      title: "Indophil Jettech Energy Pvt. Ltd.",
      description:
        "Established Indophil Jettech Energy Pvt. Ltd., extending the group's expertise into EPC power projects and marking a major milestone in our diversification journey.",
      icon: <FaBolt className="text-blue-300 text-2xl" />,
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #0A1833 0%, #417DD8 50%, #EAF2FF 100%)",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-12 text-white text-center"
      >
        Our Journey
      </motion.h1>

      {/* Timeline */}
      <div className="relative max-w-5xl w-full mx-auto border-l-4 border-white/50 pl-10 space-y-14">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 text-white"
          >
            {/* Timeline dot + icon */}
            <div className="absolute -left-[52px] flex items-center justify-center w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
              {milestone.icon}
            </div>

            {/* Year badge */}
            <span className="inline-block bg-blue-500/40 text-blue-100 text-xs font-bold px-3 py-1 rounded-full mb-2 tracking-widest uppercase">
              {milestone.year}
            </span>

            <h2 className="text-2xl font-bold text-[#AECBFF] mb-2">
              {milestone.title}
            </h2>
            <p className="text-[#D8E4F7] leading-relaxed">
              {milestone.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 text-center max-w-3xl"
      >
        <p className="text-lg italic text-[#EAF2FF]">
          "Every milestone we cross strengthens our commitment to building a sustainable world for generations to come."
        </p>
      </motion.div>
    </div>
  );
}