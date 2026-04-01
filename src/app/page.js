import HeroCarousel from "@/components/HeroCarousel/HeroCarousel";
import ServicesSection from "@/components/ProjectsAndProducts";
import About from "@/components/About";
import ClientsPage from "@/components/ClientsPage";

export default function Home() {
  const slides = [
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
      title: "Global Enviro",
      subtitle: `With over a decade of excellence, Global Enviro Group leads the industry in air pollution control, HVAC systems, bulk material handling, and industrial solutions.
We deliver innovative, client-focused services backed by deep technical expertise and proven performance.
`,
      buttonText: "Know More",
      buttonLink: "/about",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
      title: "Air Pollution Control",
      subtitle: `Innovative systems designed to reduce emissions and safeguard air quality.
Empowering industries to meet environmental standards with efficiency and reliability.`,
      buttonText: "Know More",
      buttonLink: "/projects-and-products/AirPollutionControl",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
      title: "HVAC Systems",
      subtitle: `High-performance cleanroom and HVAC solutions built for precision and energy savings.
Creating controlled environments that improve comfort, safety, and efficiency.`,
      buttonText: "Know More",
      buttonLink: "/projects-and-products/HVAC",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
      title: "Material Handling",
      subtitle: `Comprehensive solutions for smooth, safe, and efficient bulk material movement.
Optimized designs that enhance productivity and reduce operational downtime.`,
      buttonText: "Know More",
      buttonLink: "/projects-and-products/MaterialHandling",
    },

    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
      title: "EPC Power Projects",
      subtitle: `Complete EPC expertise from concept to commissioning of industrial power plants.
Delivering reliable, scalable infrastructure that drives sustainable growth and performance.`,
      buttonText: "Know More",
      buttonLink: "/projects-and-products/EPCPower",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-300">
      <HeroCarousel
        slides={slides}
        interval={7000}
        pauseOnHover={false}
        pauseOnBtnHover={true}
      />
      <About />
      
      <ClientsPage />
      
    </main>
  );
}
