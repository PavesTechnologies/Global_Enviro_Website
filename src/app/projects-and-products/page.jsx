"use client";

import { Factory, Wind, Cog, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicePage() {
  const services = [
    {
      title: "Air Pollution Control",
      description:
        "We provide advanced air purification and dust collection systems to reduce emissions and maintain cleaner industrial environments. Our technologies ensure regulatory compliance and low maintenance costs.",
      icon: <Wind className="w-14 h-14 text-primary" strokeWidth={1.5} />,
      link: "/projects-and-products/AirPollutionControl",
    },
    {
      title: "Material Handling",
      description:
        "Our material handling systems streamline bulk transport and storage operations with efficiency and reliability. From conveyors to pneumatic systems, each solution is customized for performance. Designs focus on safety, durability, and ease of integration.",
      icon: <Factory className="w-14 h-14 text-primary" strokeWidth={1.5} />,
      link: "/projects-and-products/MaterialHandling",
    },
    {
      title: "HVAC Systems",
      description:
        "Our HVAC solutions deliver superior climate control and air quality for industrial and commercial facilities. We focus on energy-efficient designs, precision installation, and performance optimization.",
      icon: <Cog className="w-14 h-14 text-primary" strokeWidth={1.5} />,
      link: "/projects-and-products/HVAC",
    },
    {
      title: "EPC Power Projects",
      description:
        "We offer turnkey EPC services covering engineering, procurement, and construction for power plants and infrastructure. From concept to commissioning, we ensure timely execution with high safety and quality standards.",
      icon: <Zap className="w-14 h-14 text-primary" strokeWidth={1.5} />,
      link: "/projects-and-products/EPCPower",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/hero-section.png')] bg-cover bg-center opacity-40 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/0.02 to-[#dbe9ff]/0.02 -z-10" />

      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-5xl font-bold text-[#0b3d91] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Services We Provide
        </motion.h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At Global Enviro, we specialize in delivering end-to-end industrial and environmental engineering solutions designed for efficiency, safety, and sustainability. Our expertise spans across air pollution control, HVAC systems, EPC power projects, and material handling solutions. Each service is tailored to meet diverse industry needs with a focus on innovation, quality, and long-term reliability. With a proven track record of excellence, we help industries operate smarter, cleaner, and more efficiently.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group relative bg-white shadow-lg border border-gray-200 rounded-2xl p-8 w-full max-w-md flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Icon + Title + Description */}
            <div>
              <div className="flex items-start space-x-5 mb-5">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.2,
                  }}
                  className="text-[#0b3d91]"
                >
                  {service.icon}
                </motion.div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#0b3d91] mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Know More Button - Fixed Bottom */}
            <div className="flex justify-center mt-8">
              <a
                href={service.link}
                className="inline-block px-6 py-2 bg-[#0b3d91] text-white text-sm font-semibold rounded-lg hover:bg-[#002c6a] transition-all duration-300"
              >
                Know More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
