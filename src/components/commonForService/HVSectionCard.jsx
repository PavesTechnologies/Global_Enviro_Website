// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function HVSectionCard({ title, description, points, image }) {
//   return (
//     <section className="relative flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#e6f7ff] p-8 rounded-2xl shadow-md my-8 overflow-hidden">
//       {/* Left Content */}
//       <div className="lg:w-2/3">
//         <h2 className="text-2xl font-bold text-[#004c91] mb-4 uppercase">
//           {title}
//         </h2>
//         <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
//         <ul className="list-none space-y-2">
//           {points.map((point, index) => (
//             <li key={index} className="flex items-start gap-2 text-gray-800">
//               <span className="text-red-600 font-bold">►</span>
//               <span>{point}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Image with Shape */}
      
// <div className="relative lg:w-1/3 flex justify-center items-center">
//   <div
//     className="relative w-[320px] h-[300px] overflow-hidden shadow-xl"
//     style={{
//       clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // rhombus shape
//       border: "10px solid white", // thicker, visible white border
//       borderRadius: "35px", // smooth rounded edges
//       boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//       background: "white", // ensures clean border contrast
//     }}
//   >
//     <Image
//       src={image}
//       alt={title}
//       fill
//       className="object-cover rounded-[30px]" // matches rounded edges
//       sizes="(max-width: 768px) 100vw, 33vw"
//     />
//   </div>
// </div>
//     </section>
//   );
// } 






"use client";
import MotionWrapper from "@/components/common/MotionWrapper";
import Image from "next/image";

export default function HVSectionCard({ title, description, points, image }) {
  return (
    <MotionWrapper
      as="section"
      className="relative flex flex-col lg:flex-row items-center justify-between gap-2 bg-[#e6f7ff] p-8 rounded-2xl shadow-md my-2 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left Content */}
      <div className="lg:w-2/3 space-y-2">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        <ul className="list-none space-y-2">
           {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-800">
              <span className="text-red-600 font-bold">►</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image */}
      <MotionWrapper
        as="div"
        className="relative lg:w-1/3 flex justify-center items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className="relative w-[320px] h-[280px] overflow-hidden"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            border: "10px solid white",
            borderRadius: "30px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
            background: "white",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-[20px]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </MotionWrapper>
    </MotionWrapper>
  );
}


