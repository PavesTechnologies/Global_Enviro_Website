"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const branches = [
  {
    name: "Global Enviro Air Systems – Unit I & II",
    address: "Survey No. 163/A (Part), Gagillapur (Vill.), Quthbullapur (Mdl), R.R. Dist, Hyderabad – 500043, Telangana.",
    // ✅ This one is already correct from your original code
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.7368658972755!2d78.39407517512182!3d17.59745768345095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8eb0081aaaab%3A0x82bf120ade91c860!2sGlobal%20Enviro%20Air%20Systems%20pvt%20limited!5e0!3m2!1sen!2sin!4v1730649852000!5m2!1sen!2sin",
  },
  {
    name: "Hyderabad – Jeedimetla Unit",
    address: "Survey No 303, Rami Reddy Nagar, Quthbullapur (Mdl), I.D.A Jeedimetla, Hyderabad – 500055, Telangana.",
    // 🔴 Replace this with real embed URL from Google Maps
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1!2d78.4350!3d17.5100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sIDA%20Jeedimetla%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1730649852001!5m2!1sen!2sin",
  },
  {
    name: "Global Metallurgicals",
    address: "Plot No 89, Aleap Industrial Estate, Surampalli Village, Gannavaram Mandal, Krishna District – 521212, Andhra Pradesh.",
    // 🔴 Replace this with real embed URL from Google Maps
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0!2d80.7950!3d16.5320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a0a0a0a0a0%3A0x0a0a0a0a0a0a0a0a!2sAleap%20Industrial%20Estate%2C%20Gannavaram!5e0!3m2!1sen!2sin!4v1730649852002!5m2!1sen!2sin",
  },
  {
    name: "Jet Tech – Philippines Branch",
    address: "3rd Floor, Vitra Building, P. Alcantara Street, San Pablo City, Laguna, Philippines – 4000.",
    phone: "(63) 999-881-1927 / (02) 381-5530",
    // 🔴 Replace this with real embed URL from Google Maps
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.0!2d121.3244!3d14.0690!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6f1c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sSan%20Pablo%20City%2C%20Laguna%2C%20Philippines!5e0!3m2!1sen!2sin!4v1730649852003!5m2!1sen!2sin",
  },
];

export default function ContactUS() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb] text-gray-800">

      {/* ── Banner ── */}
      <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 pb-20">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#f9fafb" d="M0,32 C360,100 1080,0 1440,80 L1440,120 L0,120 Z" />
        </svg>
        <div className="relative container mx-auto px-6 pt-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-blue-900 tracking-wide"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg"
          >
            Reach out to Global Enviro Air Systems for enquiries, support, or
            partnership discussions.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Info Bar ── */}
      <section className="relative z-10 -mt-10 bg-white shadow-lg rounded-2xl w-[92%] max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 p-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
            <Phone className="w-5 h-5 text-[#3877d4]" />
          </div>
          <h4 className="font-semibold text-[#0f172a] mb-2">Call Us</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            +91 9666 669 922<br />
            +91 9666 266 113<br />
            +91 9666 879 977<br />
            08418 257264 to 68
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
            <Mail className="w-5 h-5 text-[#3877d4]" />
          </div>
          <h4 className="font-semibold text-[#0f172a] mb-2">Email</h4>
          {/* ✅ Only one email as requested */}
          <a
            href="mailto:info@globalenviro.in"
            className="text-[#3877d4] text-sm font-medium hover:underline"
          >
            info@globalenviro.in
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
            <MapPin className="w-5 h-5 text-[#3877d4]" />
          </div>
          <h4 className="font-semibold text-[#0f172a] mb-2">Head Office</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Survey No. 163/A (Part), Gagillapur (Vill.),<br />
            Quthbullapur (Mdl), Hyderabad – 500043,<br />
            Telangana
          </p>
        </div>
      </section>

      {/* ── Branch Locations with Maps ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0b1e3d] mb-3">Our Locations</h2>
            <p className="text-gray-500 text-base">Find us across India and internationally</p>
            <div className="mt-4 mx-auto w-20 h-1 bg-[#3877d4] rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Map */}
                <div className="w-full h-48">
                  <iframe
                    title={branch.name}
                    src={branch.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Card Info */}
                <div className="p-5 space-y-3">
                  {/* Branch name */}
                  <h3 className="font-bold text-[#0b1e3d] text-base">{branch.name}</h3>

                  {/* Address */}
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#3877d4] mt-0.5 shrink-0" />
                    <p className="text-gray-500 text-sm leading-relaxed">{branch.address}</p>
                  </div>

                  {/* Phone — only for Philippines branch */}
                  {branch.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#3877d4] shrink-0" />
                      <span className="text-gray-500 text-sm">{branch.phone}</span>
                    </div>
                  )}

                  {/* ✅ Single email for all branches */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                    <Mail className="w-4 h-4 text-[#3877d4] shrink-0" />
                    <a
                      href="mailto:info@globalenviro.in"
                      className="text-sm text-[#3877d4] hover:underline font-medium"
                    >
                      info@globalenviro.in
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form + Head Office Map ── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0b1e3d] mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-6">
              We'll get back to you at{" "}
              <a href="mailto:info@globalenviro.in" className="text-[#3877d4] font-medium hover:underline">
                info@globalenviro.in
              </a>
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#3877d4] outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#3877d4] outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#3877d4] outline-none"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#3877d4] outline-none resize-none"
              />
              <button
                type="submit"
                className="bg-[#3877d4] hover:bg-[#2f5fb8] text-white w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Head Office Map */}
          <div>
            <h2 className="text-2xl font-bold text-[#0b1e3d] mb-2">Head Office</h2>
            <p className="text-gray-500 text-sm mb-4">
              Survey No. 163/A (Part), Gagillapur (Vill.),
              Quthbullapur (Mdl), Hyderabad – 500043, Telangana.
            </p>
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                title="Global Enviro Air Systems - Head Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.7368658972755!2d78.39407517512182!3d17.59745768345095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8eb0081aaaab%3A0x82bf120ade91c860!2sGlobal%20Enviro%20Air%20Systems%20pvt%20limited!5e0!3m2!1sen!2sin!4v1730649852000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}