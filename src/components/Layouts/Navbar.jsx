"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    title: "About Us",
    url: "/",
    // dropdown: [
    //   { title: "About Us", url: "/#about" },
    //   { title: "Management", url: "/about#management" },
    //   //{ title: "Key Persons", url: "/#key-persons" },         // NEW
    //   { title: "Mission & Vision", url: "/about#mission" },
    //   { title: "Our Infrastructure", url: "/about#infrastructure" },
    //   { title: "Certifications", url: "/about#certifications" },
    //   { title: "Our Journey", url: "/about#journey" },
    // ],
  },
  // {
  //   title: "About Us",
  //   url: "/about",
  //   dropdown: [
  //     { title: "Overview", url: "/about#overview" },
  //     { title: "Mission & Vision", url: "/about#mission" },
  //     { title: "Management", url: "/about#management" },
  //     { title: "Our Infrastructure", url: "/about#infrastructure" },
  //     { title: "Certifications", url: "/about#certifications" },
  //     { title: "Our Journey", url: "/about#journey" },
  //   ],
  // },
  { title: "Group", url: "/Ourgroup" },
  {
    title: "Projects & Products",                              // RENAMED from Services
    url: "/projects-and-products",
    dropdown: [
      {
        title: "Air Pollution Control Systems",
        url: "/projects-and-products/air-pollution-control",
        subDropdown: [
          { title: "Dust Extraction Systems", url: "/projects-and-products/air-pollution-control/dust-extraction" },
          { title: "Fuel Extraction Systems", url: "/projects-and-products/air-pollution-control/fuel-extraction" },
          { title: "Silo / Bin Aeration", url: "/projects-and-products/air-pollution-control/silo-bin" },
          { title: "Bulk Loading Systems", url: "/projects-and-products/air-pollution-control/bulk-loading" },
          { title: "Wagon Loading/Unloading", url: "/projects-and-products/air-pollution-control/wagon" },
        ],
      },
      {
        title: "HVAC Clean Room Systems",
        url: "/projects-and-products/hvac-clean-room",
        subDropdown: [
          { title: "HVAC", url: "/projects-and-products/hvac-clean-room/hvac" },
          { title: "Paneling", url: "/projects-and-products/hvac-clean-room/paneling" },
        ],
      },
      {
        title: "Material Handling Systems",
        url: "/projects-and-products/material-handling",
        subDropdown: [
          { title: "Fuel Handling Systems", url: "/projects-and-products/material-handling/fuel-handling" },
          { title: "Ash Handling Systems", url: "/projects-and-products/material-handling/ash-handling" },
          { title: "Warehouse Handling Systems", url: "/projects-and-products/material-handling/warehouse" },
        ],
      },
      {
        title: "EPC Power Projects",
        url: "https://jettech-website-url.com",              // External link per client
        subDropdown: null,
      },
      {
        title: "Metallurgicals & Briquettes",                // NEW category
        url: "/projects-and-products/metallurgicals",
        subDropdown: [
          { title: "Casting Division", url: "/projects-and-products/metallurgicals/casting" },
          { title: "Biomass Briquettes Division", url: "/projects-and-products/metallurgicals/briquettes" },
        ],
      },
    ],
  },
  { title: "Our Clients", url: "/OurClients" },
  { title: "News & Events", url: "/news-and-events" },
  { title: "Careers", url: "/careers" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 60 && currentScroll > lastScrollTop)
        setIsScrolled(true);
      else if (currentScroll < 50) setIsScrolled(false);
      lastScrollTop = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryBlue = "#3877d4";

  return (
    <>
      <div
        style={{
          height: isScrolled ? "60px" : "140px",
          transition: "height 0.4s ease-in-out",
        }}
      />
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-white shadow-none"
        }`}
      >
        {/* --- Top Bar --- */}
        <div
          className={`flex justify-between items-center px-4 md:px-8 xl:px-20 border-b border-gray-200 bg-white transition-all duration-500 ease-in-out overflow-hidden ${
            isScrolled
              ? "max-h-0 opacity-0 py-0 border-none"
              : "max-h-[80px] opacity-100 py-2"
          }`}
        >
          <Link href="/" className="leading-none">
            <img
              src="/assets/images/group-logo.png"
              alt="Global Enviro Logo"
              className="h-[65px] w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-4 xl:gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <FaPhone className="text-[#3877d4]" />
              <span className="text-sm">+91 98480 31866</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-[#3877d4]" />
              <span className="text-sm">ksr@globalenviro.in</span>
            </div>
            <Link
              href="/RequestQuote"
              className="bg-[#3877d4] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#2f5fb8] transition-all"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>

        {/* --- Main Nav --- */}
        <nav
          className="flex items-center justify-between px-3 sm:px-6 lg:px-12 xl:px-20 transition-all duration-300"
          style={{
            backgroundColor: primaryBlue,
            height: isScrolled ? "48px" : "60px",
          }}
        >
          {/* Mobile Logo */}
          <Link href="/" className="block lg:hidden">
            <img
              src="/assets/images/group-logo.png"
              alt="Global Enviro"
              className={`transition-all duration-300 ${isScrolled ? "h-6" : "h-8"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <ul className="flex flex-wrap gap-5 xl:gap-8 text-[14px] font-semibold uppercase">
              {navItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <li
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                      setActiveSubDropdown(null);
                    }}
                  >
                    <Link
                      href={item.url}
                      className={`px-2 py-1 rounded-md flex items-center gap-1 ${
                        isActive
                          ? "bg-[#386FC1] text-white"
                          : "hover:bg-[#386FC1] text-white"
                      }`}
                    >
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown
                          size={14}
                          strokeWidth={2}
                          className={`ml-1 transition-transform duration-300 ${
                            activeDropdown === item.title ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {item.dropdown && (
                      <ul
                        className={`absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md min-w-[220px] border border-gray-100 transform transition-all duration-300 ease-in-out ${
                          activeDropdown === item.title
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-3"
                        }`}
                      >
                        {item.dropdown.map((subItem) => (
                          <li
                            key={subItem.title}
                            className="relative"
                            onMouseEnter={() =>
                              subItem.subDropdown && setActiveSubDropdown(subItem.title)
                            }
                            onMouseLeave={() =>
                              subItem.subDropdown && setActiveSubDropdown(null)
                            }
                          >
                            <Link
                              href={subItem.url}
                              className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap flex items-center justify-between"
                            >
                              <span>{subItem.title}</span>
                              {subItem.subDropdown && (
                                <ChevronRight size={14} strokeWidth={2} />
                              )}
                            </Link>

                            {subItem.subDropdown && (
                              <ul
                                className={`absolute top-0 left-full bg-white shadow-md rounded-md min-w-[200px] transition-all duration-300 ${
                                  activeSubDropdown === subItem.title
                                    ? "opacity-100 visible translate-x-0"
                                    : "opacity-0 invisible -translate-x-2"
                                }`}
                              >
                                {subItem.subDropdown.map((deepItem) => (
                                  <li key={deepItem.title}>
                                    <Link
                                      href={deepItem.url}
                                      className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                                    >
                                      {deepItem.title}
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
                );
              })}
            </ul>

            {/* Contact Button */}
            <Link
              href="/contactUs"
              className="ml-4 bg-black text-white px-5 py-2 font-bold uppercase rounded-md hover:bg-gray-900 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* --- Mobile Menu --- */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md text-gray-800 shadow-md animate-fadeInDown">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.title} className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.title ? null : item.title
                      )
                    }
                    className="w-full text-left px-5 py-3 font-semibold flex justify-between items-center"
                  >
                    <span>{item.title}</span>
                    {item.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {item.dropdown && activeDropdown === item.title && (
                    <ul className="bg-gray-50 transition-all duration-300">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.title}>
                          <button
                            onClick={() =>
                              setActiveSubDropdown(
                                activeSubDropdown === subItem.title
                                  ? null
                                  : subItem.title
                              )
                            }
                            className="w-full text-left px-7 py-2 text-sm flex justify-between items-center"
                          >
                            {subItem.title}
                            {subItem.subDropdown && <ChevronRight size={14} />}
                          </button>

                          {subItem.subDropdown &&
                            activeSubDropdown === subItem.title && (
                              <ul className="bg-gray-100 transition-all duration-300">
                                {subItem.subDropdown.map((deepItem) => (
                                  <li key={deepItem.title}>
                                    <Link
                                      href={deepItem.url}
                                      className="block px-10 py-2 text-sm hover:bg-gray-200"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {deepItem.title}
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
              <li className="p-4 text-center">
                <Link
                  href="/contactUs"
                  className="flex items-center justify-center bg-black text-white px-5 py-2 font-bold uppercase rounded-md hover:bg-gray-900 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
