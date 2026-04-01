"use client";
import AboutBanner from "@/components/About/AboutBanner";
import Certifications from "@/components/About/Certifications";
import OurJourney from "@/components/About/OurJourney";
import OurInfrastructure from "@/components/About/OurInfrastructure";
import MissionVision from "@/components/About/MissionVision";
import Management from "@/components/About/Management";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const handleHashChange = () => {
      if (!window.location.hash) return;
      const element = document.querySelector(window.location.hash);
      if (element) {
        // element.scrollIntoView({ behavior: "smooth", block: "start" });
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };

    // Scroll on load
    handleHashChange();

    // Scroll when hash changes (same page navigation)
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main>
      <section id="overview">
        <AboutBanner />
      </section>
      <section id="mission">
        <MissionVision />
      </section>
      <section id="management">
        <Management />
      </section>
      <section id="infrastructure">
        <OurInfrastructure />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="journey">
        <OurJourney />
      </section>
    </main>
  );
}
