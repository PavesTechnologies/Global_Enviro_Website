"use client";
import Image from "next/image";


export default function HeaderSection({ title, description, imgSrc, description1 }) {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-16 bg-gradient-to-br from-[#e8f0ff] via-[#f9fbff] to-[#ffffff] overflow-hidden">
      {/* Background animation blobs */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-70 animate-pulse"></div>

      {/* Left Content */}
      <div
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="md:w-1/2 z-10 space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-accent leading-tight drop-shadow-sm">
          {title}
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
        <p className="text-gray-700 leading-relaxed text-lg">{description1}</p>
      </div>

      {/* Right Image */}
      <div
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-1/2 flex justify-center mt-6 md:mt-0"
      >
        <Image
          src={imgSrc}
          alt={title}
          width={450}
          height={400}
          className="w-full h-auto max-w-112.5 rounded-4xl shadow-2xl object-cover border-4 border-white"
        />
      </div>
    </section>
  );
}
