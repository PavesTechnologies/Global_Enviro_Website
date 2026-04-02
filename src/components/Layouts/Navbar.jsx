"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
          { title: "Dust Extraction Systems", url: "/service/AirPollutionControl#dust-extraction" },
          { title: "Fuel Extraction Systems", url: "/service/AirPollutionControl#fuel-extraction" },
          { title: "Silo / Bin Aeration", url: "/service/AirPollutionControl#silo-bin" },
          { title: "Bulk Loading Systems", url: "/service/AirPollutionControl#bulk-loading" },
          { title: "Wagon Loading/Unloading", url: "/service/AirPollutionControl#wagon" },
        ],
      },
      {
        title: "HVAC Clean Room",
        url: "/service/HVAC",
        subDropdown: [
          { title: "HVAC Systems", url: "/service/HVAC#hvac" },
          { title: "Paneling", url: "/service/HVAC#paneling" },
        ],
      },
      {
        title: "Material Handling",
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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const isActivePath = (url) => {
    if (url.startsWith("http")) return false;
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  return (
    <header className="bg-[#3877d4] text-white fixed w-full z-50">
      <nav className="flex items-center justify-between px-6 h-14">

        {/* LOGO */}
        <Link href="/">
          <img src="/assets/images/group-logo.png" className="h-8" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-6 text-sm font-semibold uppercase">

          {navItems.map((item) => (
            <li
              key={item.title}
              className="relative group"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* MAIN LINK */}
              {item.external ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                <Link href={item.url} className="flex items-center gap-1">
                  {item.title}
                  {item.dropdown && <ChevronDown size={14} />}
                </Link>
              )}

              {/* LEVEL 2 DROPDOWN */}
              {item.dropdown && (
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black min-w-[250px] shadow-lg">

                  {item.dropdown.map((sub) => (
                    <li key={sub.title} className="relative group/sub">

                      {/* LEVEL 2 ITEM */}
                      {sub.external ? (
                        <a
                          href={sub.url}
                          target="_blank"
                          className="flex justify-between px-4 py-2 hover:bg-gray-100"
                        >
                          {sub.title}
                        </a>
                      ) : (
                        <Link
                          href={sub.url}
                          className="flex justify-between px-4 py-2 hover:bg-gray-100"
                        >
                          {sub.title}
                          {sub.subDropdown && <ChevronRight size={14} />}
                        </Link>
                      )}

                      {/* LEVEL 3 SUBDROPDOWN */}
                      {sub.subDropdown && (
                        <ul className="absolute left-full top-0 hidden group-hover/sub:block bg-white min-w-[220px] shadow-lg">

                          {sub.subDropdown.map((child) => (
                            <li key={child.title}>
                              <Link
                                href={child.url}
                                className="block px-4 py-2 hover:bg-gray-100"
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
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-black">
          <ul>
            {navItems.map((item) => (
              <li key={item.title} className="border-b">
                <Link href={item.url} className="block px-4 py-3">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;