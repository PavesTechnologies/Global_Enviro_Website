"use client";

import Image from "next/image";

export default function CleanroomEquipment() {
  return (
    <div className="bg-blue-50 min-h-screen py-8 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          CLEANROOM EQUIPMENT’S
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We offer Equipment’s use in Cleanrooms for Biotech, Pharmaceuticals,
          Electronics, Laboratory, Semiconductor and Hospitals. Bespoke solutions
          are provided for specific purposes. The equipment’s are designed with
          durability, ease of use, and compactness with aesthetic appeal. Our
          standardization approach ensures faster delivery of equipment and spares.
          Our Design engineers have ensured that these equipment’s are integrated
          easily with Panels and fit into end-to-end delivery of a Cleanroom.
        </p>
      </div>

      {/* Equipment Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* PASS BOX */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:w-1/2">
            <Image
              src="/assets/images/pass box.png"
              alt="Pass Box"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <p className="text-center font-semibold py-2 text-sm text-gray-600">PASS BOX</p>
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">PASS BOX</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              This pass box is designed to minimize traffic & contamination entry
              into the clean room. Enables parts, tools and other work items to be
              passed to and from the room. This pass box unit acts as an air lock
              device preventing ambient air from entering, or clean air from exiting
              the clean room.
            </p>
          </div>
        </div>

        {/* DUST COLLECTOR */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:w-1/2">
            <Image
              src="/assets/images/dust collector.png"
              alt="Dust Collector"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <p className="text-center font-semibold py-2 text-sm text-gray-600">DUST COLLECTOR</p>
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">DUST COLLECTOR</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              A dust collector is a system used to enhance the quality of air released
              from industrial and commercial processes by collecting dust and other
              impurities from air or gas. Designed to handle high-volume dust loads,
              a dust collector system consists of a blower, dust filter, a
              filter-cleaning system.
            </p>
          </div>
        </div>

        {/* AIR SHOWER */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:w-1/2">
            <Image
              src="/assets/images/air shower.png"
              alt="Air Shower"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <p className="text-center font-semibold py-2 text-sm text-gray-600">AIR SHOWER</p>
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">AIR SHOWER</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Specialized enclosed ante chambers which are incorporated as entryways
              of cleanrooms & other controlled environments to reduce particle
              contamination. Air showers utilize high-pressure, HEPA- or
              ULPA-filtered air to remove dust, fibrous lint & other contaminants
              from personnel or object surfaces.
            </p>
          </div>
        </div>

        {/* LAMINAR FLOW UNIT */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:w-1/2">
            <Image
              src="/assets/images/laminar flow unit.png"
              alt="Laminar Flow Unit"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <p className="text-center font-semibold py-2 text-sm text-gray-600">LAMINAR FLOW UNIT</p>
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">LAMINAR FLOW UNIT</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              A laminar flow unit or tissue culture hood is a carefully enclosed bench
              designed to prevent contamination of semiconductor wafers, biological
              samples, or any particle sensitive materials. Air is drawn through a
              HEPA filter and blown in a very smooth flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
