"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

/* ===================== NAV ITEMS ===================== */
const navItems = [
  { title: "About Us", url: "/" },
  { title: "Group", url: "/Ourgroup" },
  {
    title: "Projects & Products",
    url: "/service",
    dropdown: [
      {
        title: "Air Pollution Control",
        url: "/service/AirPollutionControl",
        subDropdown: [
          { title: "Dust Extraction Systems", url: "#" },
          { title: "Fuel Extraction Systems", url: "#" },
        ],
      },
      {
        title: "HVAC Clean Room",
        url: "/service/HVAC",
      },
      {
        title: "Material Handling",
        url: "/service/MaterialHandling",
      },
      {
        title: "EPC Power Projects",
        url: "https://www.jettechenergy.com/",
        external: true,
      },
      {
        title: "Metallurgicals & Briquettes",
        url: "/service/Metallurgicals",
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
      {/* Spacer */}
      <div style={{ height: isScrolled ? "50px" : "110px" }} />

      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">

        {/* 🔥 TOP BAR (RESTORED ORIGINAL SIZE) */}
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
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        )}

        {/* 🔵 MAIN NAVBAR (COMPACT) */}
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
                    {item.title}
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
                  <ul className="absolute left-0 top-full bg-white text-black shadow-lg min-w-[220px]">

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
                          <ul className="absolute left-full top-0 bg-white shadow-lg min-w-[180px]">
                            {sub.subDropdown.map((child) => (
                              <li key={child.title}>
                                <Link
                                  href={child.url}
                                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                                >
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
          <button
            className="lg:hidden text-white p-3"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="bg-white lg:hidden">
            {navItems.map((item) => (
              <Link key={item.title} href={item.url} className="block px-4 py-2 border-b text-sm">
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;