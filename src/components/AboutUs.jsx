"use client";

import MotionWrapper from "@/components/common/MotionWrapper";
import { Building2, Leaf, Globe, Users } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <MotionWrapper
          as="h2"
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About
        </MotionWrapper>

        <MotionWrapper
          as="p"
          className="text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Global Enviro Air Systems (P) Ltd. is a leading environmental engineering
          company headquartered in Hyderabad, India. We specialize in designing and
          manufacturing air pollution control equipment and industrial ventilation systems.
          With a strong focus on innovation and sustainability, we deliver reliable, energy-efficient
          solutions to clients across multiple industries worldwide.
        </MotionWrapper>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <Building2 className="w-10 h-10 text-green-600" />,
            title: "Our Expertise",
            desc: "Over two decades of engineering excellence in industrial air systems and pollution control."
          },
          {
            icon: <Leaf className="w-10 h-10 text-green-600" />,
            title: "Sustainability",
            desc: "Committed to eco-friendly technologies that reduce emissions and protect the environment."
          },
          {
            icon: <Globe className="w-10 h-10 text-green-600" />,
            title: "Global Presence",
            desc: "Strong footprint across India and Southeast Asia, serving diverse industrial sectors."
          },
          {
            icon: <Users className="w-10 h-10 text-green-600" />,
            title: "Our Team",
            desc: "Led by experienced engineers and environmental specialists dedicated to quality and service."
          }
        ].map((item, index) => (
          <MotionWrapper
            as="div"
            key={index}
            className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </MotionWrapper>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-16 text-center">
        <p className="text-gray-700 leading-relaxed">
          Our mission is to deliver high-quality, sustainable engineering solutions that meet
          international standards while ensuring client satisfaction and environmental protection.
          We continuously innovate to provide reliable and cost-effective systems for a cleaner future.
        </p>
      </div>
    </section>
  );
}
