"use client";

import MotionWrapper from "@/components/common/MotionWrapper";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="relative w-full h-auto py-14 bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/overview-bg.jpg"
          alt="Mission Vision Background"
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Glass overlay layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 flex flex-col items-center text-center">
        {/* Section Heading */}
        <MotionWrapper
          as="h2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
        >
          Our <span className="text-blue-400">Mission</span> &{" "}
          <span className="text-blue-400">Vision</span>
        </MotionWrapper>

        <MotionWrapper
          as="p"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-gray-300 mb-6"
        >
          Striving to create a sustainable future through engineering excellence,
          innovation, and commitment to our clients’ success.
        </MotionWrapper>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Mission Card */}
          <MotionWrapper
            as="div"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Our Mission</h3>
            <p className="text-gray-200 leading-relaxed text-[15px]">
              We aim at supplying the best products in the market that give maximum
              satisfaction to our clients and help in keeping the environment clean
              while reducing production costs through innovation and efficiency.
            </p>
          </MotionWrapper>

          {/* Vision Card */}
          <MotionWrapper
            as="div"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">Our Vision</h3>
            <p className="text-gray-200 leading-relaxed text-[15px]">
              Our focus is on developing energy-efficient systems through continuous
              research and development, always keeping the end-user requirements in
              mind and striving to create technology that drives a cleaner, smarter,
              and more sustainable future.
            </p>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
