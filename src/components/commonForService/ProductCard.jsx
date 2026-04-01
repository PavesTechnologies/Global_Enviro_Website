"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ id, title, image, specs = {} }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
      className="flex flex-col md:flex-row items-center bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-2xl p-6 w-full mx-auto border border-gray-100 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center ">
       <Image
        src={image}
        alt={title}
        width={330}
        height={250}
        className="rounded-br-3xl object-cover shadow-[0_8px_20px_rgba(128,128,128,0.4)] hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <Link href={`/projects-and-products/AirPollutionControl/${id}`}>
          <h1 className="text-2xl font-semibold text-blue-700 mb-3 hover:underline">
            {title}
          </h1>
        </Link>

        <table className="w-full text-sm text-gray-700">
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td className="pr-3 py-1 text-gray-800 font-medium">{key}</td>
                <td className="py-1 text-gray-600">: {value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
