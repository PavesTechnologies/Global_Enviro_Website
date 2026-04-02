"use client";
import Image from "next/image";
import { Factory, Wind, Cog, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicePage() {
  const services = [
    {
      title: "Air Pollution Control",
      description:
        "Designing and delivering advanced air filtration and dust collection systems for cleaner industrial environments.",
      icon: <Wind className="w-14 h-14 text-primary" strokeWidth={1.5} />,
    },
    {
      title: "Material Handling",
      description:
        "Providing customized solutions for safe, efficient material transportation across manufacturing units.",
      icon: <Factory className="w-14 h-14 text-primary" strokeWidth={1.5} />,
    },
    {
      title: "HVAC Systems",
      description:
        "Creating energy-efficient heating, ventilation, and air conditioning systems for industrial facilities.",
      icon: <Cog className="w-14 h-14 text-primary" strokeWidth={1.5} />,
    },
    {
      title: "EPC Power Projects",
      description:
        "Executing complete Engineering, Procurement, and Construction power projects with technical precision.",
      icon: <Zap className="w-14 h-14 text-primary" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative px-62 py-18 overflow-hidden bg-[url('/assets/images/hero-section.png')] bg-cover ">
      {/* Background Image with Soft Overlay */}
      <div className="absolute inset-0 -z-10">
      
        <div className="absolute inset-0 backdrop-blur-[10px]" />
      </div>

      {/* Animated Heading Section */}
      <div className="container mx-auto px-6 text-center w-full">
        <motion.h1
          className="text-5xl font-bold text-accent mb-4"
          initial={{ opacity: 2 }}
          animate={{ opacity: 4 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Services We Provide
        </motion.h1>

        <p
          className="text-lg text-accent mb-14 max-w-3xl mx-auto"
        >
          Innovating sustainable industrial solutions for cleaner, safer operations.
          From air pollution control to efficient material handling and HVAC systems.
          Delivering complete EPC projects with precision and reliability.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 justify-items-center w-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 w-auto max-w-auto  h-auto bg-white/90 shadow-md rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              {/* Icon with floating animation */}
              <motion.div
                className="mr-5 flex-shrink-0"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.2,
                }}
              >
                {service.icon}
              </motion.div>

              <div className="text-left">
                <h3 className="text-2xl font-semibold text-accent mb-2">{service.title}</h3>
                <p className="text-gray-700 text-1xl leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

