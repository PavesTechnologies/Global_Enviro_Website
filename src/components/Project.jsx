"use client";

import React, { useState } from "react";
import MotionWrapper from "@/components/common/MotionWrapper";

const Project = () => {
  const data = [
    { client: "KUTCH CHEMICAL LIMITED", boiler: "260 TPH 60 MW", fuel: "160 TPH", ash: "Dense Phase" },
    { client: "DECCAN CHEMICALS LIMITED", boiler: "170 TPH 18 MW", fuel: "70 TPH", ash: "Dense Phase" },
    { client: "LYFIUS PHARMA PRIVATE LIMITED", boiler: "150 TPH x 2 Nos 2x30 MW", fuel: "150 TPH", ash: "Dense Phase" },
    { client: "COVALENT LABORATORIES LIMITED", boiler: "35TPH, 22TPH, 90TPH", fuel: "110TPH", ash: "Dense Phase" },
    { client: "VIRCHOW’S PETRO", boiler: "75TPH 20MW", fuel: "60TPH", ash: "Dense Phase" },
    { client: "KILBURN CHEMICALS LIMITED", boiler: "75TPH 16MW", fuel: "60TPH", ash: "Dense Phase" },
    { client: "AURABINDO PHARMA LIMITED", boiler: "35TPH 6MW", fuel: "25TPH", ash: "Dense Phase" },
    { client: "GODREJ OILS LIMITED", boiler: "50TPH 6MW", fuel: "30TPH", ash: "Bio Mass Mechanical" },
    { client: "PEARL DISTILLERIES LIMITED", boiler: "30TPH 6MW", fuel: "25TPH", ash: "Dense Phase" },
    { client: "SPY AGRO LIMITED", boiler: "50TPH", fuel: "40TPH", ash: "Dense Phase" },
    { client: "EMAMI AGROTECH LIMITED", boiler: "30TPH", fuel: "30TPH", ash: "Coal" },
    { client: "NATCO PHARMA LIMITED", boiler: "10TPH", fuel: "7TPH", ash: "Dense Phase" },
    { client: "DIVIS LABORATORIES LIMITED", boiler: "24TPH", fuel: "25TPH", ash: "Dense Phase" },
    { client: "BALAJI AMINES LIMITED", boiler: "55TPH", fuel: "30TPH", ash: "Dense Phase" },
    { client: "AURABINDO LIMITED UNIT-15", boiler: "12TPH", fuel: "10TPH", ash: "Dense Phase" },
    { client: "HETERO DRUGS LIMITED UNIT 1", boiler: "6TPH", fuel: "6TPH", ash: "Coal" },
    { client: "GROWELL FEEDS LIMITED", boiler: "8TPH", fuel: "5TPH", ash: "Pneumatic" },
    { client: "THERMAX LIMITED", boiler: "30TPH", fuel: "30TPH", ash: "Coal" },
    { client: "VIRCHOW PETROCHEMICAL PVT LTD", boiler: "40TPH", fuel: "40TPH", ash: "Coal" },
    { client: "MRF LIMITED", boiler: "50TPH", fuel: "40TPH", ash: "Coal" },
    // ... (you can paste rest of cleaned unique entries here)
  ];

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#e8f1fc] to-[#f8fbff] py-8 px-6 overflow-hidden">
      {/* Animated background curves */}
      <svg
        className="absolute top-0 left-0 w-full opacity-30 animate-pulse"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2dbee"
          d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,144C672,171,768,181,864,165.3C960,149,1056,107,1152,112C1248,117,1344,171,1392,197.3L1440,224V320H0Z"
        ></path>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-6">
        <h2 className="text-4xl font-bold text-[#204170] mb-2">
          Experience in Fuel & Ash Handling Systems
        </h2>
        <p className="text-gray-600 text-lg">
          A showcase of our industrial expertise across sectors
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {paginatedData.map((item, index) => (
          <MotionWrapper
            as="div"
            key={index}
            whileHover={{ y: -8, boxShadow: "0px 8px 25px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-2xl shadow-md p-6 border border-[#c5defc] text-left"
          >
            <h3 className="text-[#2f5b9c] font-semibold text-xl mb-3">
              {item.client}
            </h3>
            <p><strong>Boiler Capacity:</strong> {item.boiler}</p>
            <p><strong>Fuel Handling:</strong> {item.fuel}</p>
            <p><strong>Ash Handling:</strong> {item.ash}</p>
          </MotionWrapper>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-3 relative z-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md border transition-all ${
              currentPage === i + 1
                ? "bg-[#2f5b9c] text-white border-[#2f5b9c]"
                : "border-[#2f5b9c] text-[#2f5b9c] hover:bg-[#e2edff]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Project;
