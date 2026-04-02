"use client";
import Image from "next/image";

export default function CleanroomEquipmentsPage() {
  const equipments = [
    {
      title: "PASS BOX",
      img: "/assets/images/pass box.png",
      description:
        "This pass box is designed to minimize traffic & contamination entry into the clean room. Enables parts, tools, and other work items to be passed to and from the room. This pass box unit acts as an air lock device preventing ambient air from entering, or clean air from exiting the clean room.",
    },
    {
      title: "DUST COLLECTOR",
      img: "/assets/images/dust collector.png",
      description:
        "A dust collector enhances the quality of air released from industrial and commercial processes by collecting dust and other impurities. It handles high-volume dust loads through a blower, dust filter, and filter-cleaning system.",
    },
    {
      title: "AIR SHOWER",
      img: "/assets/images/air shower.png",
      description:
        "Specialized enclosed ante chambers used at cleanroom entryways to reduce particle contamination. They use high-pressure, HEPA-filtered air to remove dust, lint, and contaminants from personnel or objects.",
    },
    {
      title: "LAMINAR FLOW UNIT",
      img: "/assets/images/laminar flow unit.png",
      description:
        "A laminar flow unit is a carefully enclosed bench designed to prevent contamination of semiconductor wafers, biological samples, or particle-sensitive materials. Air is drawn through a HEPA filter and flows in a smooth laminar pattern.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-20">
      {/* Header Section */}
      <div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-4xl font-bold text-blue-900 mb-4 tracking-wide">
          CLEANROOM EQUIPMENT’S
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We offer Equipment’s used in Cleanrooms for Biotech, Pharmaceuticals,
          Electronics, Laboratory, Semiconductor, and Hospitals. Bespoke solutions
          are provided for specific purposes. The equipment’s are designed with
          durability, ease of use, and compactness with aesthetic appeal. Our
          standardization approach ensures faster delivery of equipment and spares.
          Our design engineers ensure that these equipment’s are integrated easily
          with panels and fit into end-to-end delivery of a Cleanroom.
        </p>
      </div>

      {/* Equipment Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {equipments.map((eq, index) => (
          <div
            key={index}
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Section */}
            <div
              className="md:w-1/2 relative group"
              transition={{ duration: 0.3 }}
            >
              <Image
                src={eq.img}
                alt={eq.title}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <p className="text-center font-semibold py-2 text-sm text-gray-600 bg-gray-50">
                {eq.title}
              </p>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 p-6">
              <h2
                className="text-xl font-bold text-blue-800 mb-2"
                whileHover={{ color: "#1E40AF" }}
              >
                {eq.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {eq.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
