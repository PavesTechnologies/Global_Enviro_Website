"use client";
import React from "react";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="font-sans text-gray-700">

      {/* MAIN FOOTER (light, slightly off-white from the page background) */}
      <div className="bg-gray-100 border-t border-gray-200 px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* --- COMPANY INFO --- */}
        <div>
          <div className="inline-block bg-white rounded-lg p-3 mb-4 shadow-sm border border-gray-200">
            <Image src="/assets/images/group-logo.png" alt="Global Technologies Logo" width={220} height={88} className="h-20 object-contain" />
          </div>

          <p className="text-sm leading-relaxed mb-5 text-gray-600">
            <span className="font-semibold text-gray-900">
              Global ENVIRO AIR SYSTEMS (P) Ltd
            </span>
            <br />
            Sy. No. 163/A, Gagillapur (Vil),
            <br />
            Dundigal – Gandimaisamma Mandal,
            <br />
            Medchal-Malkajgiri (Dist),
            <br />
            Hyderabad, Telangana
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-blue-600" />
              +91 98480 31866
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-blue-600" />
              ksr@globalenviro.in
            </li>
          </ul>
        </div>

        {/* --- QUICK NAVIGATION --- */}
        <div>
          <h4 className="text-blue-700 text-lg font-semibold mb-5">
            Quick Navigation
          </h4>

          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="text-gray-700 hover:text-blue-700 hover:underline">About Company</a></li>
            <li><a href="/about/management" className="text-gray-700 hover:text-blue-700 hover:underline">Leadership Team</a></li>
            <li><a href="/service" className="text-gray-700 hover:text-blue-700 hover:underline">Projects & Products</a></li>
            <li><a href="/contactUs" className="text-gray-700 hover:text-blue-700 hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* --- OUR SERVICES --- */}
        <div>
          <h4 className="text-blue-700 text-lg font-semibold mb-5">
            Our Services
          </h4>

          <ul className="space-y-3 text-sm">
            <li><a href="/service/AirPollutionControl" className="text-gray-700 hover:text-blue-700 hover:underline">Air Pollution Control Systems</a></li>
            <li><a href="/service/HVAC" className="text-gray-700 hover:text-blue-700 hover:underline">HVAC Clean Room Projects</a></li>
            <li><a href="/service/MaterialHandling" className="text-gray-700 hover:text-blue-700 hover:underline">Material Handling Systems</a></li>
            <li><a href="https://www.jettechenergy.com/" className="text-gray-700 hover:text-blue-700 hover:underline">EPC Power Projects</a></li>
            <li><a href="/service/Metallurgicals" className="text-gray-700 hover:text-blue-700 hover:underline">Metallurgicals & Briquettes</a></li>
          </ul>

          {/* CONTACT CTA */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-4">
              Have a question or want to discuss a project?
            </p>

            <div className="flex items-center gap-4">
              <a
                href="/contactUs"
                className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Contact Us
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-blue-600 group-hover:text-white text-base transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-200 text-gray-600 py-3 text-sm text-center border-t border-gray-300">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-gray-800 font-medium">
          Global ENVIRO AIR SYSTEMS (P) Ltd
        </span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;