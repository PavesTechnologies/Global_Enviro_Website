"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Management() {
  const team = [
    {
      name: "K. Srirami Reddy",
      title: "Managing Director",
      img: "/assets/images/founder.jpeg",
      desc: `As the Founder and Managing Director of Global Enviro Air Systems,
      Mr. Srirami Reddy's remarkable engineering experience, business acumen,
      and relentless dedication helped lay a strong foundation for all group
      companies. His research in pollution control technology and innovative
      approach have been instrumental in the company's success and growth.`,
    },
    {
      name: "V. Ramana Murthy",
      title: "Director",                     // ← simplified per client doc
      img: "/assets/images/Director.png",
      desc: `A phenomenal management force of Global Enviro Systems,
      Mr. Ramana Murthy has led over 100 Clean Room and HVAC projects across
      Pharma and Chemical sectors. His deep expertise in failure analysis and
      system design continues to strengthen Global Group's project performance.`,
    },
    {
      name: "A. Sambasiva Rao",
      title: "Business Head",                // ← updated per client doc
      img: "/assets/images/Partner.png",
      desc: `With over 15 years of experience in Fuels and Ash Handling Systems,
      Mr. Sambasiva Rao brings extensive project management and vendor
      coordination expertise. His leadership ensures the success of complex
      conveyor and material handling projects across the country.`,
    },
  ];

  const [active, setActive] = useState(team[0]);

  return (
    <section className="relative bg-[#081736] text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Background Wave */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-80 opacity-40"
        >
          <path
            fill="url(#waveGradient)"
            d="M0,128L40,149.3C80,171,160,213,240,208C320,203,400,149,480,133.3C560,117,640,139,720,165.3C800,192,880,224,960,208C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192V320H0Z"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5ea2ef" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: Active Member Description */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold mb-3 text-blue-100">
                Our Management Team
              </h2>
              <h3 className="text-2xl font-semibold text-blue-300 mb-1">
                {active.name}
              </h3>
              <p className="text-sm text-blue-200 italic mb-4">
                {active.title}
              </p>
              <p className="text-base leading-relaxed text-gray-200">
                {active.desc}
              </p>
              {/* ❌ "Contact Us" button removed here */}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Team Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          <div className="absolute -top-16 right-0 w-80 h-80 bg-blue-400/20 blur-3xl rounded-full animate-pulse" />

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setActive(member)}
              className={`bg-white text-center p-6 rounded-2xl shadow-lg cursor-pointer transition-all w-[230px] relative z-10 ${
                index === 2 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-2 border-blue-800"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}