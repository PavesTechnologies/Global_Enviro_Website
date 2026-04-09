"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Certifications() {
  const certificates = [
    {
      name: "Global Enviro Air Systems Pvt. Ltd.",
      img: "/assets/images/Certificate1.jpg",
      desc: `Our ISO 9001:2008 certification highlights our dedication to superior design,
      manufacturing, and customer satisfaction. It reinforces our commitment to excellence
      and reliability in delivering HVAC and pollution control solutions.Our ISO 9001:2008 certification highlights our dedication to superior design,
      manufacturing, and customer satisfaction. It reinforces our commitment to excellence
      and reliability in delivering HVAC and pollution control solutions.`,
    },
    // {
    //   name: "Global Technologies",
    //   img: "/assets/images/Certificate2.jpg",
    //   desc: `With ISO 9001:2008 accreditation, Global Technologies continues to deliver top-tier
    //   engineering and material handling systems with precision, efficiency, and quality.`,
    // },
    {
      name: "Global Enviro Air Systems (Expansion)",
      img: "/assets/images/Certificate3.jpg",
      desc: `Our expansion certification reflects continued innovation, growth, and compliance with
      global standards in environmental engineering and cleanroom technology.`,
    },
  ];

  const [active, setActive] = useState(certificates[0]);

  // Auto rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const currentIndex = certificates.findIndex((c) => c.name === prev.name);
        return certificates[(currentIndex + 1) % certificates.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#081736] text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* ===== Title ===== */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-100">
          Our Certifications & Recognitions
        </h2>
        <p className="text-blue-200 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          A reflection of our unwavering commitment to quality, innovation, and
          international standards.
        </p>
      </div>

      {/* ===== Main Content ===== */}
      <div className="container relative z-10 mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* ===== Left: Certificate Image ===== */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.8 }}
              className="relative w-[350px] h-auto rounded-2xl shadow-2xl overflow-hidden"
            >
              <Image
                src={active.img}
                alt={active.name}
                width={400}
                height={500}
                className="rounded-2xl border-4 border-blue-400 object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== Right: Certificate Description ===== */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.img}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-3">
                {active.name}
              </h3>
              <p className="text-base leading-relaxed text-gray-200 mb-4">
                {active.desc}
              </p>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 border border-blue-300 px-6 py-2 rounded-md hover:bg-blue-200 hover:text-[#081736] transition-all"
              >
                Learn More
              </motion.button> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ===== Certificates Thumbnails Row ===== */}
      <div className="mt-20 flex flex-wrap justify-center gap-6 relative z-10">
        {certificates.map((c) => (
          <motion.div
            key={c.name}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(c)}
            className={`cursor-pointer w-24 h-32 rounded-md overflow-hidden border-2 ${
              c.name === active.name
                ? "border-blue-400"
                : "border-transparent opacity-70"
            }`}
          >
            <Image
              src={c.img}
              alt={c.name}
              width={100}
              height={130}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
