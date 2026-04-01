'use client';
import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaAngleRight,
} from 'react-icons/fa';

const Footer = () => {
  const sections = [
    {
      title: 'Quick Navigation',
      links: [
        { name: 'About Company', url: '/about' },
        { name: 'Mission & Vision', url: '/about/MissionVision' },
        { name: 'Leadership Team', url: '/about/management' },
        { name: 'Projects', url: '/projects' },
        { name: 'News & Events', url: '/news' },
        { name: 'Contact Us', url: '/contact' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { name: 'Air Pollution Control Systems', url: '/projects-and-products/air-control' },
        { name: 'Material Handling Systems', url: '/projects-and-products/material-handling' },
        { name: 'HVAC & Ventilation Solutions', url: '/projects-and-products/hvac' },
        { name: 'EPC Power Projects', url: '/projects-and-products/epc' },
        { name: 'Environmental Consulting', url: '/projects-and-products/consulting' },
      ],
    },
    {
      title: 'Insights & Updates',
      links: [
        { name: 'Case Studies', url: '/insights/case-studies' },
        { name: 'Client Testimonials', url: '/insights/testimonials' },
        { name: 'Industry Articles', url: '/insights/articles' },
        { name: 'Awards & Recognitions', url: '/insights/awards' },
      ],
    },
  ];

  return (
    <footer className="font-sans text-gray-100">
      {/* --- Main Footer --- */}
      <div className="bg-[#204170] px-6 md:px-10 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* --- Company Info --- */}
        <div className="relative">
          <img
            src="/assets/images/group-logo.png"
            alt="Global Enviro Logo"
            className="h-12 mb-4 brightness-0 invert"
          />
          <p className="text-sm leading-relaxed mb-6 text-gray-100/90">
            Global Enviro Air Systems Pvt Ltd.
Sy. No. 163/A, Gagillapur (Vil), 
Dundigal- Gandimaisamma Mandal,
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#a2dbee]" />
              Medchal-Malkajgiri (Dist) Hyderabad, Telangana
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-[#a2dbee]" />
              +91 98480 31866
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#a2dbee]" />
              ksr@globalenviro.com
            </li>
          </ul>
        </div>

        {/* --- Quick Nav + Services --- */}
        {sections.slice(0, 2).map((sec, idx) => (
          <div key={idx} className="relative">
            <h4 className="text-[#a2dbee] text-lg font-semibold mb-5">
              {sec.title}
            </h4>
            <ul className="space-y-3">
              {sec.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="flex items-center gap-2 text-sm text-gray-100 hover:text-[#a2dbee] transition-all duration-300 group"
                  >
                    <FaAngleRight className="text-[#a2dbee] transform transition-transform duration-300 group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* --- Insights + Get in Touch --- */}
        <div className="relative">
          <h4 className="text-[#a2dbee] text-lg font-semibold mb-5">
            {sections[2].title}
          </h4>
          <ul className="space-y-3 mb-6">
            {sections[2].links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  className="flex items-center gap-2 text-sm text-gray-100 hover:text-[#a2dbee] transition-all duration-300 group"
                >
                  <FaAngleRight className="text-[#a2dbee] transform transition-transform duration-300 group-hover:translate-x-1" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* --- Get in Touch (moved seamlessly below links) --- */}
          <div className="mt-4">
            <h4 className="text-[#a2dbee] text-lg font-semibold mb-3">
              Get in Touch
            </h4>
            <p className="text-sm text-gray-100/90 mb-5 leading-relaxed">
              Have a question or want to discuss a project? Reach out to us anytime.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/ContactUs"
                className="bg-[#a2dbee] text-[#0b203a] font-semibold px-5 py-2 rounded-full hover:bg-[#bde3f6] transition-all duration-300 shadow-md text-center"
              >
                Contact Us
              </a>
              <a
                href="https://www.linkedin.com/in/globalenviro-hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100/10 text-[#a2dbee] hover:bg-[#a2dbee] hover:text-[#0b203a] p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="bg-[#18355e] border-t border-gray-700 text-gray-400 py-3 text-sm text-center">
        &copy; {new Date().getFullYear()}{' '}
        <span className="text-gray-200 font-medium">GLOBAL ENVIRO GROUP</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
