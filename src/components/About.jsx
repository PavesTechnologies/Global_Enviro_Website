"use client";
import MotionWrapper from "@/components/common/MotionWrapper";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#f2f8ff] to-[#e6f0ff] overflow-hidden py-10 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-stretch gap-10">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#003366]/10 blur-2xl rounded-full" />

      {/* Left Side Content */}
      <MotionWrapper
        as="div"
        className="relative z-10 lg:w-1/2 flex flex-col justify-center h-full space-y-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-blue-700 font-extrabold text-2xl uppercase tracking-[6px]">About Us</h2>
        <h1 className="text-2xl md:text-2xl font-bold text-[#003366] leading-tight">Two and a Half Decades of Engineering Excellence</h1>

        {/* Simple Description */}
         <p className="text-gray-700 text-lg justify-start">We lead the industry in air pollution control, HVAC systems,
          bulk material handling, and end-to-end industrial solutions. Our expertise spans clean room technology,
          metal castings, and global import-export operations.</p>
         <p className="text-gray-700 text-lg justify-start">What sets us apart is our commitment to truly understanding
          client needs and delivering solutions that work.</p>

          <p className="text-gray-700 text-lg justify-start">As one of the industry&apos;s most trusted names, Global Enviro Air Systems Pvt. Ltd.
          is strategically expanding across diverse sectors. We envision strong, sustainable growth throughout the
          subcontinent in the years ahead.
         </p>

        {/* Know More Button */}
        {/* <motion.button
          className="mt-6 w-40 py-3 px-6 bg-primary text-white font-semibold rounded-lg shadow-lg hover:cursor-pointer transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Know More
        </motion.button> */}
  </MotionWrapper>

      {/* Right Side Image (unchanged) */}
      <div className="relative lg:w-1/2 mt-10 lg:mt-0 flex items-center h-full">
        <Image
          src="/assets/images/enviro.png"
          alt="Industrial setup"
          width={800}
          height={700}
          className="object-cover w-full h-full shadow-lg"
          style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />
      </div>
    </section>
  );
}


