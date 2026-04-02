"use client";
import React from "react";
import Image from "next/image";

const OurInfrastructure = () => {
  const baseImages = [
    "/assets/images/Infrastructure1.jpg",
    "/assets/images/Infrastructure4.jpg",
    "/assets/images/Infrastructure6.jpg",
    "/assets/images/Infrastructure8.jpg",
  ];

  const infrastructureData = [
    {
      title: "Unit - 1",
      images: [baseImages[0], baseImages[1]],
    },
    {
      title: "Unit - 2",
      images: [baseImages[2], baseImages[3]],
    },
    {
      title: "Unit - 3",
      images: [baseImages[1], baseImages[2]], // reused
    },
    {
      title: "Briquettes Manufacturing Unit",
      images: [baseImages[3], baseImages[0]], // reused
    },
  ];

  return (
    <section
      className="relative overflow-hidden text-gray-800 py-20"
      style={{ backgroundColor: "#E6F0FF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* 🔵 Header */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-5xl font-extrabold mb-6 text-black">
            Our Infrastructure
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-black">
              Global Enviro Air Systems Pvt. Ltd.
            </span>
            , our infrastructure spans multiple advanced manufacturing units,
            modern machinery setups, and briquettes production facilities. Each
            unit is equipped to ensure efficiency, precision, and international
            quality standards.
          </p>
        </div>

        {/* 🔵 Units */}
        <div className="space-y-14">

          {infrastructureData.map((unit, idx) => (
            <div key={idx}>

              {/* Unit Title */}
              <h3 className="text-2xl font-bold mb-6 text-[#1f3a70]">
                {unit.title}
              </h3>

              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {unit.images.map((img, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Image
                      src={img}
                      alt={`${unit.title} ${index}`}
                      width={500}
                      height={350}
                      className="object-cover w-full h-64"
                    />
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurInfrastructure;