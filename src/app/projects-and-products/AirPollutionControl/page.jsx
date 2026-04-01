import HeaderSection from "@/components/commonForService/HeaderSection";
import ProductCarousel from "@/components/commonForService/ProductCarousel";


const products = [
  {
    id: 1,
    title: "Pulse Jet Bag Filter For Boiler",
    image: "/assets/images/pulsejet.png",
    specs: {
      "Capacity Range": "Up to 2,00,000 CMH.",
      "Type of Fuel": "Husk, Coal, Wood & Bagasse.",
      "Temp": "Up to 260°C.",
      "Types of Filter Bags": "PPS/Nomex/P-84/Fiber Glass/PTFE.",
      "Types of Cleaning": "Offline/Online.",
      "MOC": "Carbon Steel.",
    },
  },
  {
    id: 2,
    title: "Dust Extraction Systems",
    image: "/assets/images/dust extraction.png",
    specs: {
      "Application": "Dust Extraction / Furnace Fume Extraction & Etc.",
      "Capacity Range": "Up to 2,50,000 CMH.",
      "Temp": "Up to 260°C.",
      "Type of Filter Bags": "Polyester/PPS/Nomex/P-84/Fiber Glass/PTFE.",
      "MOC": "SS304/SS316/IS2062.",
      "Types of Cleaning": "Offline/Online.",
    },
  },
  {
    id: 3,
    title: "Ash Handling Silo",
    image: "/assets/images/ash handling.png",
    specs: {
      "Application": "Lean phase ash handling system with silo.",
      "Capacity": "Up to 20 TPH Boiler.",
    },
  },
  {
    id: 4,
    title: "Centrifugal Fans",
    image: "/assets/images/centrifugal fans.png",
    specs: {
      "Application": "ID/FD/PA/Dust Extraction/Fume Exhaust/Pneumatic Conveying.",
      "Type": "SISW / DIDW.",
      "Capacity Range": "100 CMH to 2,50,000 CMH.",
      "Static Pressure Range": "50 MMWG to 1000 MMWG.",
      "Temp Range": "20°C to 400°C.",
      "MOC": "SS316 / SS304 / IS2062.",
      "Type of Blade": "Forward / Backward / Radial / Aerofoil.",
    },
  },
  {
    id: 5,
    title: "HVAC Clean Room Projects",
    image: "/assets/images/hvac clean room.png",
    specs: {
      "Clean Classification": "Up to ISO3.",
      "Temp Range": "15°C to 30°C.",
      "RH Range": "10% to 60%.",
    },
  },
  {
    id: 6,
    title: "Clean Room Panels & Doors",
    image: "/assets/images/clean room panel.png",
    specs: {
      "Panels": "PPGI/PCGI Thickness 50, 80, 100 mm with Puff and Rock Wool as infill.",
      "Doors": "Scientific, General & Emergency exit doors with Honeycomb/Puff/Rock Wool as infill.",
    },
  },
];

export default function AirPollutionPage() {
  return (
    <main className="bg-blue-100 min-h-screen">
      <HeaderSection
        title="Air Pollution Control Systems"
        description="Global Enviro Air Systems Private Limited is a distinguished designer and manufacturer 
                    specializing in a diverse range of air pollution control systems. 
                    Our systems are meticulously crafted to reduce or eliminate the emission of pollutants into the atmosphere."
        description1=" Additionally, we serve as turnkey solution providers for HVAC Cleanroom projects, offering a 
                    comprehensive range of solutions such as air handling units, 
                    Puff Panels, Doors, and Dust collectors tailored for manufacturing areas. 
            .       Our systems cater to various industries, including cement, power, steel, pharmaceuticals, paper, distilleries, food, scientific industries, and more."
        imgSrc="/assets/images/serv-2.webp"
      />

      {/* Product Carousel */}
      <ProductCarousel products={products} />
    </main>
  );
}


