"use client";

import React from "react";
import MotionWrapper from "@/components/common/MotionWrapper";
import Image from "next/image";
import OurClientsPage from "@/app/OurClients/page";


const clientLogos = [
  // High-quality logo links (SVG/PNG)
  "https://www.logo.wine/a/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/432px-ITC_Limited_Logo.svg.png?20250908034046",
  "https://images.seeklogo.com/logo-png/17/1/nalco-logo-png_seeklogo-177232.png",
  "https://images.seeklogo.com/logo-png/38/1/national-mineral-development-corporation-ndmc-logo-png_seeklogo-386958.png",
  "https://upload.wikimedia.org/wikipedia/en/7/75/Aditya_Birla_Group_Logo.svg",
  "https://companieslogo.com/img/orig/NCC.NS-f5845ee7.png?t=1720244493",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/330px-Tata_logo.svg.png",
  "https://assets.turbologo.com/blog/en/2021/07/26072303/unilever-958x575.png",
  "https://ibgnews.com/wp-content/uploads/2016/08/BARC_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/f/ff/Andhra_Pradesh_Power_Generation_Company_Limited.jpg",
  "https://upload.wikimedia.org/wikipedia/en/b/ba/Dr._Reddy%27s_Laboratories_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/09/Laurus_Labs_Logo.png",
  "https://images.seeklogo.com/logo-png/38/1/emami-logo-png_seeklogo-387133.png",
  "https://discovertemplate.com/wp-content/uploads/2024/02/Gsk.jpg",
  "https://cdn.worldvectorlogo.com/logos/bharat-electronics-logo.svg",
  "https://www.tefskoatings.com/images/thermax.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/97/Godrej_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/d/dc/Saint-Gobain_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/3/30/Divi%27s_Laboratories_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/d/dd/Aurobindo_Pharma_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/92/Granules_India_logo.JPG",
  "https://cdn.neowin.com/news/images/uploaded/2024/11/1731343814_msn_logo_story.jpg",
  "https://images.seeklogo.com/logo-png/15/1/wrigley-logo-png_seeklogo-154057.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png",
  "https://mma.prnewswire.com/media/1167815/Hetero_Logo.jpg?p=facebook",
  "https://vijayasri.com/images/logo2.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8herq8RsShXjaz9b5hSn43ZQmGTONeUPdAg&s",
  "https://media.licdn.com/dms/image/v2/C4E0BAQHzHh-3M2hlPg/company-logo_200_200/company-logo_200_200/0/1630631130177/shilpa_medicare_ltd_logo?e=2147483647&v=beta&t=eODxTmKs8UzfS6dRhwRtfuI6eNdmZdGFr0kZMFbL28w",
  "https://www.suven.com/images/logo.png",
  "https://cdn.prod.website-files.com/61177bff37db7dd194ff451f/611785fb98bd9a149efa44f2_UB_Logo_sh.png"
];

const ClientsRow = ({ logos, reverse }) => (
  <div className="overflow-hidden w-full my-6">
    <MotionWrapper
      as="div"
      className="flex gap-12"
      animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
      transition={{
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      }}
    >
      {[...logos, ...logos].map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt="client logo"
          width={120}
          height={56}
          className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md"
        />
      ))}
    </MotionWrapper>
  </div>
);

const ClientsPage = () => {
  // Split logos into three roughly equal groups
  const third = Math.ceil(clientLogos.length / 3);
  const row2 = clientLogos.slice(third, third * 2);
  const row3 = clientLogos.slice(third * 2);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-8">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-2">
        Our Clients
      </h2>
      <p className="text-center text-blue-800 text-lg mb-8 tracking-wide">
    Empowering Sustainable Growth Through Innovation and Trust
  </p>
      <div className="space-y-5">
        <ClientsRow logos={row2} reverse={true} />
        <br></br>
        <ClientsRow logos={row3} reverse={false} />
      </div>
      {/* Animated Button */}
      <div className="flex justify-center mt-5">
        <a href="/OurClients">
          <MotionWrapper
            as="button"
            whileHover={{
              scale: 1.08,
              backgroundPosition: "right center",
              boxShadow: "0px 8px 20px rgba(30, 64, 175, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="px-8 py-3 bg-gradient-to-tr from-primary to-accent text-white font-semibold rounded-full shadow-md bg-[length:200%_200%] transition-all duration-500"
            onClick={() => router.push("/OurClients")}
          >
            View All Clients
          </MotionWrapper>
        </a>
      </div>
    </div>
  );
};

export default ClientsPage;



