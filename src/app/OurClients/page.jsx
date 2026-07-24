"use client";

import MotionWrapper from "@/components/common/MotionWrapper";
import Image from "next/image";

const clients = [
  { name: "ISRO", logo: "/assets/images/clients/isro.svg" },
  { name: "ITC Limited", logo: "/assets/images/clients/itc-limited.svg" },
  { name: "NALCO", logo: "/assets/images/clients/nalco.png" },
  { name: "NMDC", logo: "/assets/images/clients/nmdc.png" },
  { name: "Aditya Birla Group", logo: "/assets/images/clients/aditya-birla-group.svg" },
  { name: "NCC Limited", logo: "/assets/images/clients/ncc-limited.png" },
  { name: "Tata Group", logo: "/assets/images/clients/tata-group.png" },
  { name: "Unilever", logo: "/assets/images/clients/unilever.png" },
  { name: "BARC", logo: "/assets/images/clients/barc.png" },
  { name: "APGENCO", logo: "/assets/images/clients/apgenco.jpg" },
  { name: "Dr. Reddy's", logo: "/assets/images/clients/dr-reddys.svg" },
  { name: "Laurus Labs", logo: "/assets/images/clients/laurus-labs.png" },
  { name: "Emami", logo: "/assets/images/clients/emami.png" },
  { name: "GSK", logo: "/assets/images/clients/gsk.svg" },
  { name: "Bharat Electronics", logo: "/assets/images/clients/bharat-electronics.svg" },
  { name: "Thermax", logo: "/assets/images/clients/thermax.png" },
  { name: "Godrej", logo: "/assets/images/clients/godrej.svg" },
  { name: "Saint-Gobain", logo: "/assets/images/clients/saint-gobain.svg" },
  { name: "Divi's Laboratories", logo: "/assets/images/clients/divis-laboratories.svg" },
  { name: "Aurobindo Pharma", logo: "/assets/images/clients/aurobindo-pharma.svg" },
  { name: "Granules India", logo: "/assets/images/clients/granules-india.jpg" },
  { name: "Wrigley", logo: "/assets/images/clients/wrigley.png" },
  { name: "Adani Group", logo: "/assets/images/clients/adani-group.png" },
  { name: "Hetero Drugs", logo: "/assets/images/clients/hetero-drugs.jpg" },
  { name: "Shilpa Medicare", logo: "/assets/images/clients/shilpa-medicare.png" },
  { name: "Suven Pharma", logo: "/assets/images/clients/suven-pharma.png" },
  { name: "United Breweries", logo: "/assets/images/clients/united-breweries.png" },
  { name: "BHEL", logo: "/assets/images/clients/bhel.svg" },
  { name: "NPCIL", logo: "/assets/images/clients/npcil.svg" },
  { name: "Toshiba", logo: "/assets/images/clients/toshiba.svg" },
  { name: "Shree Cement", logo: "/assets/images/clients/shree-cement.png" },
  { name: "Perfetti Van Melle", logo: "/assets/images/clients/perfetti-van-melle.svg" },
  { name: "Vijayasri", logo: "/assets/images/clients/vijayasri.png" },
  { name: "Ramky Infrastructure", logo: "/assets/images/clients/ramky-infrastructure.jpg" },
  { name: "Balaji Amines", logo: "/assets/images/clients/balaji-amines.jpg" },
  { name: "Nandi Group", logo: "/assets/images/clients/nandi-group.jpg" },
  { name: "Virchow", logo: "/assets/images/clients/virchow.png" },
  { name: "Musim Mas", logo: "/assets/images/clients/musim-mas.png" },
  { name: "Avanti Feeds Ltd.", logo: "/assets/images/clients/avanti-feeds.svg" },
  { name: "Deccan", logo: "/assets/images/clients/deccan.png" },
  { name: "Dhunseri", logo: "/assets/images/clients/dhunseri.png" },
  { name: "Gowardhan", logo: "/assets/images/clients/gowardhan.png" },
  { name: "HBL Power Systems Ltd.", logo: "/assets/images/clients/hbl-power-systems.png" },
  { name: "Kesoram Industries Limited", logo: "/assets/images/clients/kesoram-industries.png" },
  { name: "Monsanto", logo: "/assets/images/clients/monsanto.png" },
  { name: "Nile Limited", logo: "/assets/images/clients/nile-limited.png" },
  { name: "Notch Chemical Industries Ltd.", logo: "/assets/images/clients/notch-chemical-industries.svg" },
  { name: "Nuziveedu Seeds", logo: "/assets/images/clients/nuziveedu-seeds.png" },
  { name: "Rane", logo: "/assets/images/clients/rane.jpg" },
  { name: "Sai Sirius", logo: "/assets/images/clients/sai-sirius.png" },
  { name: "Shasun", logo: "/assets/images/clients/shasun.jpg" },
  { name: "Suryajyoti Spinning Mills Ltd.", logo: "/assets/images/clients/suryajyoti-spinning-mills.png" },
  { name: "United Spirits", logo: "/assets/images/clients/united-spirits.png" },
  { name: "Aktinos Pharma", logo: "/assets/images/clients/aktinos-pharma.jpg" },
  { name: "Apicore", logo: "/assets/images/clients/apicore.png" },
  { name: "BBetter", logo: "/assets/images/clients/bbetter.png" },
  { name: "Biophore", logo: "/assets/images/clients/biophore.png" },
  { name: "Formel Labs Pvt. Ltd.", logo: "/assets/images/clients/formel-labs.png" },
  { name: "Lantech Pharmaceuticals", logo: "/assets/images/clients/lantech-pharmaceuticals.png" },
  { name: "MSN Laboratories", logo: "/assets/images/clients/msn-laboratories.png" },
  { name: "Pelloys", logo: "/assets/images/clients/pelloys.svg" },
  { name: "Sri Vyshnavi Labs", logo: "/assets/images/clients/sri-vyshnavi-labs.svg" },
  { name: "SriovLab", logo: "/assets/images/clients/sriovlab.svg" },
  { name: "Styrax", logo: "/assets/images/clients/styrax.png" },
  { name: "SVR", logo: "/assets/images/clients/svr.png" },
  { name: "Tyche Industries Ltd.", logo: "/assets/images/clients/tyche-industries.png" },
  { name: "Vaidi Molecules", logo: "/assets/images/clients/vaidi-molecules.svg" },
  { name: "Vasudha Pharma", logo: "/assets/images/clients/vasudha-pharma.png" },
  { name: "Vensun Pharmaceuticals", logo: "/assets/images/clients/vensun-pharmaceuticals.jpg" },
  { name: "Vital Therapeutics & Formulations", logo: "/assets/images/clients/vital-therapeutics.png" },
  { name: "WohlStand", logo: "/assets/images/clients/wohlstand.svg" },
];

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "25+", label: "Years of Trust" },
  { value: "15+", label: "Industries" },
  { value: "500+", label: "Projects Delivered" },
];

export default function OurClientsPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 pb-8">
        
        {/* CURVE (IMPORTANT) */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f9fafb"
            d="M0,32 C360,100 1080,0 1440,80 L1440,120 L0,120 Z"
          />
        </svg>

        <div className="relative container mx-auto px-6 pt-8 text-center">
          <p className="text-[#3877d4] uppercase tracking-[5px] text-sm font-semibold mb-3">
            Trusted Worldwide
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
            Our Clients
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by industry leaders across pharma, power, cement, FMCG,
            and defense sectors — we build partnerships that last.
          </p>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="relative -mt-10 bg-white shadow-lg rounded-2xl w-[92%] max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 overflow-hidden">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`py-6 text-center ${i < stats.length - 1 ? "border-r" : ""}`}>
            <div className="text-3xl font-bold text-[#3877d4]">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </section> */}

      {/* Clients Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {clients.map((client) => (
            <MotionWrapper
              key={client.name}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border shadow-sm p-5 flex flex-col items-center gap-3 hover:shadow-md transition"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={56}
                  className="max-h-12 object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 text-center">{client.name}</p>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-[#3877d4] py-14 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Join Our Growing Client Base</h2>
        <p className="text-gray-300 mb-6">
          Partner with us for reliable industrial solutions trusted by 200+ companies.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/contactUs" className="bg-[#3877d4] px-6 py-3 rounded-lg">
            Get in Touch
          </a>
          <a href="/RequestQuote" className="border px-6 py-3 rounded-lg">
            Request a Quote
          </a>
        </div>
      </section> */}

    </div>
  );
}