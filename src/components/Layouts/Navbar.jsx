"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

/* ===================== NAV ITEMS ===================== */
const navItems = [
  {
    title: "Home",
    url: "/",
    dropdown: [
      { title: "About Us", url: "/#about-us" },
      { title: "Management", url: "/#management" },
      { title: "Key Persons", url: "/#key-persons" },
      { title: "Mission & Vision", url: "/#mission" },
      { title: "Our Infrastructure", url: "/#infrastructure" },
      { title: "Certifications", url: "/#certifications" },
    ],
  },

  {
    title: "Group",
    url: "/Ourgroup",
    dropdown: [
      { title: "Global Enviro Air Systems", url: "/Ourgroup" },
      { title: "Indophil Jettech Energy", url: "/Ourgroup" },
      { title: "Global Metallurgicals", url: "/Ourgroup" },
      { title: "SV Bio Fuels", url: "/Ourgroup" },
    ],
  },

  {
    title: "Projects & Products",
    url: "/service",
    dropdown: [
      {
        title: "Air Pollution Control Systems",
        url: "/service/AirPollutionControl",
        subDropdown: [
          { title: "Dust Extraction Systems", url: "/service/AirPollutionControl#dust-extraction" },
          { title: "Fuel Extraction Systems", url: "/service/AirPollutionControl#fuel-extraction" },
          { title: "Silo / Bin Aeration", url: "/service/AirPollutionControl#silo-bin" },
          { title: "Bulk Loading Systems", url: "/service/AirPollutionControl#bulk-loading" },
          { title: "Wagon Loading/Unloading", url: "/service/AirPollutionControl#wagon" },
        ],
      },
      {
        title: "HVAC Clean Room Systems",
        url: "/service/HVAC",
        subDropdown: [
          { title: "HVAC", url: "/service/HVAC#hvac" },
          { title: "Paneling", url: "/service/HVAC#paneling" },
        ],
      },
      {
        title: "Material Handling Systems",
        url: "/service/MaterialHandling",
        subDropdown: [
          { title: "Fuel Handling Systems", url: "/service/MaterialHandling#fuel-handling" },
          { title: "Ash Handling Systems", url: "/service/MaterialHandling#ash-handling" },
          { title: "Warehouse Handling Systems", url: "/service/MaterialHandling#warehouse" },
        ],
      },
      {
        title: "EPC Power Projects",
        url: "https://www.jettechenergy.com/",
        external: true,
      },
      {
        title: "Metallurgicals & Briquettes",
        url: "/service/Metallurgicals",
        subDropdown: [
          { title: "Casting Division", url: "/service/Metallurgicals#casting" },
          { title: "Biomass Briquettes Division", url: "/service/Metallurgicals#briquettes" },
        ],
      },
    ],
  },

  { title: "Our Clients", url: "/OurClients" },
  { title: "News & Events", url: "/news-and-events" },
  { title: "Careers", url: "/careers" },
  { title: "Contact Us", url: "/contactUs" },
];

/* ===================== COMPONENT ===================== */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (url) => {
    if (!url || url.startsWith("http")) return false;
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  return (
    <>
      <div style={{ height: isScrolled ? "48px" : "100px" }} />

      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">

        {/* TOP BAR */}
        {!isScrolled && (
          <div className="flex justify-between items-center px-6 py-2 border-b">
            <img src="/assets/images/group-logo.png" className="h-12" />

            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-600" />
                <span>+91 98480 31866</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-600" />
                <span>ksr@globalenviro.in</span>
              </div>
              <Link
                href="/RequestQuote"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        )}

        {/* MAIN NAV */}
        <nav className="bg-[#3877d4]">
          <ul className="hidden lg:flex justify-center gap-6 xl:gap-10 text-[13px] font-semibold uppercase text-white py-1.5">

            {navItems.map((item) => (
              <li
                key={item.title}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                }}
              >
                {/* MAIN LINK */}
                {item.external ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1">
                    {item.title} ↗
                  </a>
                ) : (
                  <Link
                    href={item.url}
                    className={`px-3 py-1 flex items-center gap-1 ${
                      isActive(item.url) ? "bg-white/20" : "hover:bg-white/15"
                    }`}
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown size={12} />}
                  </Link>
                )}

                {/* DROPDOWN */}
                {item.dropdown && activeDropdown === item.title && (
                  <ul className="absolute left-0 top-full bg-white text-black shadow-lg min-w-[230px] z-50">

                    {item.dropdown.map((sub) => (
                      <li
                        key={sub.title}
                        className="relative"
                        onMouseEnter={() => sub.subDropdown && setActiveSubDropdown(sub.title)}
                        onMouseLeave={() => setActiveSubDropdown(null)}
                      >
                        <Link
                          href={sub.url}
                          className="flex justify-between px-3 py-2 text-sm hover:bg-gray-100"
                        >
                          {sub.title}
                          {sub.subDropdown && <ChevronRight size={12} />}
                        </Link>

                        {/* SUBDROPDOWN */}
                        {sub.subDropdown && activeSubDropdown === sub.title && (
                          <ul className="absolute left-full top-0 bg-white shadow-lg min-w-[200px] z-50">
                            {sub.subDropdown.map((child) => (
                              <li key={child.title}>
                                <Link href={child.url} className="block px-3 py-2 text-sm hover:bg-gray-100">
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}

                  </ul>
                )}
              </li>
            ))}

          </ul>

          {/* MOBILE BUTTON */}
          <button className="lg:hidden text-white p-3" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;