"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#f2f8ff] to-[#e6f0ff] overflow-hidden py-10 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-stretch gap-10">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#003366]/10 blur-2xl rounded-full" />

      {/* Left Side Content */}
      <motion.div
        className="relative z-10 lg:w-1/2 flex flex-col justify-center h-full space-y-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-blue-700 font-extrabold text-2xl uppercase tracking-[6px]">About Us</h2>
        {/* <h1 className="text-4xl md:text-5xl font-extrabold text-[#003366] uppercase leading-tight">Global Enviro Group</h1> */}

        {/* Simple Description */}
         <p className="text-gray-700 text-lg justify-start">Leading the industry in air pollution control, HVAC systems, 
          bulk material handling,and industrial solutions with over a decade of excellence.</p>
         <p className="text-gray-700 text-lg justify-start">Global Industries now has an established presence in an array of activities that include 
         Air Pollution Control, Clean Room and HVAC systems,Metal Castings and Exports and Imports. One of the key components of our
         business culture is the ability to identify and understand our client needs appropriately.</p> 

          <p className="text-gray-700 text-lg justify-start">As one of the few companies that have reached an unenviable stature, Global Group through its strategic business 
          endeavours, envisions spectacular growth and presence over varied sectors across the sub continent in the forthcoming years.
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
      </motion.div>

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


