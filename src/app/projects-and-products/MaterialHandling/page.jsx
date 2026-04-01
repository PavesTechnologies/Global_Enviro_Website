import HeaderSection from "@/components/commonForService/HeaderSection";
import ProductCarousel from "@/components/commonForService/ProductCarousel";


const products = [
  {
  id: 1,
  title: "Fuel Handling System",
  image: "/assets/images/fuel handling system.png",
  specs: {
    "Type of Fuel": "Coal / Bio-mass Husk / Wood / Bagasse.",
    "Capacity Range": "1 TPH to 200 TPH.",
    "Type Of": "Belt / Bucket Elevator / Slat Chain.",
  },
},
{
  id: 2,
  title: "Dense Phase Ash Handling",
  image: "/assets/images/densephase ash handling.png",
  specs: {
    "Application": "Fly ash and bottom ash conveying from ESP / Boiler to silo.",
    "Capacity Range": "100 Kgs/Hr to 10 Tons/Hr.",
    "Density": "200 Kgs/M³ to 800 Kgs/M³.",
    "Length Of Travel": "Up to 300 Mtrs.",
    "System": "Pneumatic conveying (Dense Phase).",
  },
},
{
  id: 3,
  title: "Crusher",
  image: "/assets/images/crusher.png",
  specs: {
    "Application": "Coal Crushing.",
    "Capacity Range": "3 TPH to 250 TPH.",
    "Type": "Impactor / Hammer Mill / Ring Granulator.",
  },
},
{
  id: 4,
  title: "Vibratory Screen",
  image: "/assets/images/vibratory screen.png",
  specs: {
    "Capacity Range": "3 TPH to 300 TPH.",
    "No of Decks": "1 / 2 / 3.",
    "Type of Material": "Coal / Rice Husk / Lime Stone etc.",
    "Type": "Can Screen.",
  },
},
{
  id: 5,
  title: "Ash Conditioner",
  image: "/assets/images/ash conditioner.png",
  specs: {
    "Type": "Single Paddle / Double Paddle / Screw.",
    "Length": "Maximum 5 Mtrs.",
    "Capacity": "Up to 30 TPH.",
    "Material": "Carbon Steel / Stainless Steel.",
  },
},
{
  id: 6,
  title: "Belt Conveyor",
  image: "/assets/images/belt conveyor.png",
  specs: {
    "Application": "Material conveying for ash, coal, husk etc.",
    "Length": "Up to 500 Mtrs.",
    "Width": "300 mm to 2500 mm.",
  },
},
{
  id: 7,
  title: "EOT & HOT Cranes",
  image: "/assets/images/EOT and HOT cranes.png",
  specs: {
    "Class": "IS 3177, M5.",
    "Span": "Up to 16 Mtrs.",
    "Travel": "As per client requirement.",
    "Hoist": "Wire Rope Hoist from 2 Ton to 24 Ton.",
    "SWL": "1 Ton to 50 Ton.",
    "HOL (Height of Lift)": "Up to 36 Mtrs.",
  },
},

];

export default function MaterialHandlingPage() {
  return (
    <main className="bg-blue-100 min-h-screen">
      <HeaderSection
        title="Material Handling Systems"
        description="Global Technologies delivers advanced Bulk Material Handling Systems 
        that include Crushing, Screening, Conveying, and Dust Extraction solutions. 
        Our systems are designed for Power, Process Boilers, Pharma, Chemical, and Paper industries, 
        ensuring reliable performance with superior engineering quality."

        description1="We integrate innovation with engineering expertise to develop automated 
        and energy-efficient handling solutions that enhance productivity. 
        By emphasizing safety, performance, and long-term value, 
        we enable industries to achieve smoother and more sustainable operations."

        imgSrc="/assets/images/projects-and-productsbg.jpg"
      />

      {/* Product Carousel */}
      <ProductCarousel products={products} />
    </main>
  );
}


