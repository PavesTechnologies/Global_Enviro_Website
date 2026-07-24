"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
      { title: "Global Enviro Air Systems", url: "/Ourgroup/GlobalEnviroAirSystems" },
      { title: "Indophil Jettech Energy", url: "https://www.jettechenergy.com/", external: true },
      { title: "Global Metallurgicals", url: "/Ourgroup/GlobalMetallurgy" },
      { title: "SV Bio Fuels", url: "/Ourgroup/SVBioFuels" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [mobileActiveSubDropdown, setMobileActiveSubDropdown] = useState(null);
  const pathname = usePathname();

  const isActive = (url) => {
    if (!url || url.startsWith("http")) return false;
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileActiveDropdown(null);
    setMobileActiveSubDropdown(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow">

        {/* TOP BAR */}
        <div className="flex flex-wrap justify-between items-center gap-2 px-4 sm:px-6 py-2 border-b">
          <Image src="/assets/images/group-logo.png" width={220} height={66} alt="Group logo" className="h-12 sm:h-16 w-auto object-contain" />

          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
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
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>

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
                  <ul className="absolute left-0 top-full bg-white text-black shadow-lg min-w-[230px] z-50">

                    {item.dropdown.map((sub) => (
                      <li
                        key={sub.title}
                        className="relative"
                        onMouseEnter={() => sub.subDropdown && setActiveSubDropdown(sub.title)}
                        onMouseLeave={() => setActiveSubDropdown(null)}
                      >
                        {sub.external ? (
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between px-3 py-2 text-sm hover:bg-gray-100"
                          >
                            {sub.title} 
                          </a>
                        ) : (
                          <Link
                            href={sub.url}
                            className="flex justify-between px-3 py-2 text-sm hover:bg-gray-100"
                          >
                            {sub.title}
                            {sub.subDropdown && <ChevronRight size={12} />}
                          </Link>
                        )}

                        {/* SUBDROPDOWN */}
                        {sub.subDropdown && activeSubDropdown === sub.title && (
                          <ul className="absolute left-full top-0 bg-white shadow-lg min-w-[200px] z-50">
                            {sub.subDropdown.map((child) => (
                              <li key={child.title}>
                                <Link href={child.url} scroll={false} className="block px-3 py-2 text-sm hover:bg-gray-100">
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
            className="lg:hidden text-white p-3 ml-auto flex"
            onClick={() => (mobileOpen ? closeMobileMenu() : setMobileOpen(true))}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
            <ul className="flex flex-col divide-y">
              {navItems.map((item) => (
                <li key={item.title} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    {item.external ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 font-semibold text-sm"
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        href={item.url}
                        className={`flex-1 px-4 py-3 font-semibold text-sm ${
                          isActive(item.url) ? "text-blue-600" : ""
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.dropdown && (
                      <button
                        className="px-4 py-3"
                        aria-label={`Toggle ${item.title} submenu`}
                        onClick={() =>
                          setMobileActiveDropdown(
                            mobileActiveDropdown === item.title ? null : item.title
                          )
                        }
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileActiveDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.dropdown && mobileActiveDropdown === item.title && (
                    <ul className="bg-gray-50 pl-4">
                      {item.dropdown.map((sub) => (
                        <li key={sub.title} className="flex flex-col">
                          <div className="flex items-center justify-between">
                            {sub.external ? (
                              <a
                                href={sub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-2 text-sm"
                                onClick={closeMobileMenu}
                              >
                                {sub.title}
                              </a>
                            ) : (
                              <Link
                                href={sub.url}
                                className="flex-1 px-4 py-2 text-sm"
                                onClick={closeMobileMenu}
                              >
                                {sub.title}
                              </Link>
                            )}
                            {sub.subDropdown && (
                              <button
                                className="px-4 py-2"
                                aria-label={`Toggle ${sub.title} submenu`}
                                onClick={() =>
                                  setMobileActiveSubDropdown(
                                    mobileActiveSubDropdown === sub.title ? null : sub.title
                                  )
                                }
                              >
                                <ChevronRight
                                  size={14}
                                  className={`transition-transform ${
                                    mobileActiveSubDropdown === sub.title ? "rotate-90" : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>

                          {sub.subDropdown && mobileActiveSubDropdown === sub.title && (
                            <ul className="bg-gray-100 pl-4">
                              {sub.subDropdown.map((child) => (
                                <li key={child.title}>
                                  <Link
                                    href={child.url}
                                    scroll={false}
                                    className="block px-4 py-2 text-sm"
                                    onClick={closeMobileMenu}
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

            {/* Contact info + CTA for mobile (hidden in top bar below md) */}
            <div className="md:hidden flex flex-col gap-3 px-4 py-4 border-t text-sm">
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
                className="bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={closeMobileMenu}
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;