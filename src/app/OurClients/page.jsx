"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "ISRO", logo: "https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg" },
  { name: "ITC Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png" },
  { name: "NALCO", logo: "https://images.seeklogo.com/logo-png/17/1/nalco-logo-png_seeklogo-177232.png" },
  { name: "NMDC", logo: "https://images.seeklogo.com/logo-png/38/1/national-mineral-development-corporation-ndmc-logo-png_seeklogo-386958.png" },
  { name: "Aditya Birla Group", logo: "https://upload.wikimedia.org/wikipedia/en/7/75/Aditya_Birla_Group_Logo.svg" },
  { name: "NCC Limited", logo: "https://companieslogo.com/img/orig/NCC.NS-f5845ee7.png?t=1720244493" },
  { name: "Tata Group", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/330px-Tata_logo.svg.png" },
  { name: "Unilever", logo: "https://assets.turbologo.com/blog/en/2021/07/26072303/unilever-958x575.png" },
  { name: "BARC", logo: "https://ibgnews.com/wp-content/uploads/2016/08/BARC_logo.png" },
  { name: "APGENCO", logo: "https://upload.wikimedia.org/wikipedia/en/f/ff/Andhra_Pradesh_Power_Generation_Company_Limited.jpg" },
  { name: "Dr. Reddy's", logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/Dr._Reddy%27s_Laboratories_logo.svg" },
  { name: "Laurus Labs", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Laurus_Labs_Logo.png" },
  { name: "Emami", logo: "https://images.seeklogo.com/logo-png/38/1/emami-logo-png_seeklogo-387133.png" },
  { name: "GSK", logo: "https://discovertemplate.com/wp-content/uploads/2024/02/Gsk.jpg" },
  { name: "Bharat Electronics", logo: "https://cdn.worldvectorlogo.com/logos/bharat-electronics-logo.svg" },
  { name: "Thermax", logo: "https://www.tefskoatings.com/images/thermax.png" },
  { name: "Godrej", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Godrej_Logo.svg" },
  { name: "Saint-Gobain", logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Saint-Gobain_logo.svg" },
  { name: "Divi's Laboratories", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Divi%27s_Laboratories_Logo.svg" },
  { name: "Aurobindo Pharma", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/Aurobindo_Pharma_logo.svg" },
  { name: "Granules India", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Granules_India_logo.JPG" },
  { name: "Wrigley", logo: "https://images.seeklogo.com/logo-png/15/1/wrigley-logo-png_seeklogo-154057.png" },
  { name: "Adani Group", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png" },
  { name: "Hetero Drugs", logo: "https://mma.prnewswire.com/media/1167815/Hetero_Logo.jpg?p=facebook" },
  { name: "Shilpa Medicare", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHzHh-3M2hlPg/company-logo_200_200/company-logo_200_200/0/1630631130177/shilpa_medicare_ltd_logo?e=2147483647&v=beta&t=eODxTmKs8UzfS6dRhwRtfuI6eNdmZdGFr0kZMFbL28w" },
  { name: "Suven Pharma", logo: "https://www.suven.com/images/logo.png" },
  { name: "United Breweries", logo: "https://cdn.prod.website-files.com/61177bff37db7dd194ff451f/611785fb98bd9a149efa44f2_UB_Logo_sh.png" },
  { name: "BHEL", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/BHEL_logo.svg" },
  { name: "NPCIL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/NPCIL_Logo.svg/1024px-NPCIL_Logo.svg.png" },
  { name: "Toshiba", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/1200px-Toshiba_logo.svg.png" },
  { name: "Shree Cement", logo: "https://plotkart.com/wp-content/uploads/2025/03/shree_Cement.png" },
  { name: "Perfetti Van Melle", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Perfetti_Van_Melle_logo.svg" },
  { name: "Vijayasri", logo: "https://vijayasri.com/images/logo2.png" },
  { name: "Ramky Infrastructure", logo: "https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/118142.Image-Ramky-Infrastructure-Limited-Ladakh-MediaBrief.jpg" },
  { name: "Balaji Amines", logo: "https://www.indianchemicalnews.com/public/thumbs/news/2022/10/15235/Balaji_Amines.jpg" },
  { name: "Nandi Group", logo: "https://space.bouncewatch.com/images/597079/Nandi-Group-of-Companies-logo.jpg" },
  { name: "Virchow", logo: "https://www.pnl.mu/wp-content/uploads/2019/02/virchow-logo-1.png" },
  { name: "Musim Mas", logo: "https://upload.wikimedia.org/wikipedia/en/5/50/Musim_Mas_Logo.png" },
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
      <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 pb-20">
        
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

        <div className="relative container mx-auto px-6 pt-16 text-center">
          <p className="text-[#3877d4] uppercase tracking-[5px] text-sm font-semibold mb-3">
            Trusted Worldwide
          </p>

          <h1 className="text-5xl font-bold text-blue-900">
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
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border shadow-sm p-5 flex flex-col items-center gap-3 hover:shadow-md transition"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 text-center">{client.name}</p>
            </motion.div>
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