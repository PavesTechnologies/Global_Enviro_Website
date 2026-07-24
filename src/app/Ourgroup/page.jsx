"use client";
import Link from "next/link";
import React from "react";
import MotionWrapper from "@/components/common/MotionWrapper";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Global Enviro Air Systems (P) Ltd",
    tagline: "Engineering Clean Air, Enabling Clean Industry",
    description:
      "We design and manufacture advanced air pollution control systems, engineered to drastically reduce or eliminate industrial emissions into the atmosphere. As turnkey solution providers for HVAC and Clean room projects, we deliver complete systems — air handling units, puff panels, clean room doors, and high-efficiency dust collectors — all tailored for precision manufacturing environments. We also specialize in bulk material handling for cement and fly ash, with proven unloading systems for silos and racks.",
    image: "/assets/images/global image.jpg",
    shape: "rounded-full",
    link: "/Ourgroup/GlobalEnviroAirSystems",
    external: false,
  },
  {
    id: 2,
    name: "Indophil Jettech Energy Private Limited",
    description:
      "Indophil Jettech Energy Pvt. Ltd. is a leading player in Engineering, Procurement, and Construction (EPC) services for Biomass Power Plants, Solar Power Plants, Edible Oil Refineries, and Process Boilers. As a rapidly growing entity in the Philippines Energy Sector, our portfolio boasts over 55 MW (Biomass Power Plants) capacity and 15 MW (Solar Power Plants).",
    image: "/assets/images/jettech.jpg",
    shape: "rounded-full",
    link: "https://www.jettechenergy.com/",
    external: true,
  },
  {
    id: 3,
    name: "Global Metallurgicals",
    tagline: "Precision Metal Castings for Industry",
    description:
      "We specialize in high-performance Manganese Steel Castings and Hi-Chrome Castings, engineered for extreme wear and impact applications. Our core cast iron products include Rotary Airlock Valves, Dust Collector Cones, Bearing Housings, Crusher Liners & Beaters, and Hammers. In-House Capabilities That Deliver — with a 500 Kg induction furnace, a dedicated heat treatment facility, and complete in-house machining, we maintain full quality control from melt to final component.",
    image: "/assets/images/metallurgy.jpg",
    shape: "rounded-full",
    link: "/Ourgroup/GlobalMetallurgy",
    external: false,
  },
  {
    id: 4,
    name: "SV Bio Fuels",
    tagline: "Green Fuel, Real Impact — Powering Industry, Sustainably",
    description:
      "We deliver sustainable, eco-friendly fuel solutions through high-quality biomass briquettes and renewable energy alternatives. Our mission is simple: help industries meet their energy needs while cutting carbon footprint. We design efficient fuel systems that lower costs, reduce emissions, and support cleaner production.",
    image: "/assets/images/fuel handling system.png",
    shape: "rounded-full",
    link: "/Ourgroup/SVBioFuels",
    external: false,
  },
];

export default function GroupPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900">

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 pb-10">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f9fafb" d="M0,32 C360,100 1080,0 1440,80 L1440,120 L0,120 Z" />
        </svg>
        <div className="relative container mx-auto px-6 pt-8 text-center">
          <MotionWrapper
            as="h1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-blue-900 tracking-wide"
          >
            Our Group of Companies
          </MotionWrapper>
          <MotionWrapper
            as="p"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto"
          >
            A collective of innovation and engineering excellence driving
            industrial solutions worldwide.
          </MotionWrapper>
        </div>
      </section>

      {/* Company Sections */}
      <div className="max-w-6xl mx-auto px-8 py-8 space-y-10">
        {companies.map((company, index) => (
          <MotionWrapper
            as="div"
            key={company.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Text */}
            <div className="md:w-1/2 space-y-5">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a]">
                {company.name}
              </h2>
              {company.tagline && (
                <p className="text-[#3877d4] font-semibold text-lg">
                  {company.tagline}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed text-justify">
                {company.description}
              </p>
              {company.industries && (
                <p className="text-gray-700 text-sm font-medium">
                  {company.industries}
                </p>
              )}
              <Link
                href={company.link}
                target={company.external ? "_blank" : "_self"}
                rel={company.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 mt-3 bg-[#3877d4] text-white px-5 py-2.5 rounded-lg hover:bg-[#2f5fb8] transition-all font-medium"
              >
                {company.external ? "Visit Website ↗" : "View More →"}
              </Link>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className={`overflow-hidden w-[360px] h-[360px] shadow-lg border border-gray-200 ${company.shape}`}>
                <Image
                  src={company.image}
                  alt={company.name}
                  width={360}
                  height={360}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}