import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Create motion-enabled Link
const MotionLink = motion(Link);

export default function Footer() {
  return (
    <footer className="relative bg-yellow-50/90 backdrop-blur-md py-10 px-6 mt-12 shadow-inner">
      {/* Floating shapes */}
      <motion.div
        className="absolute w-48 h-48 bg-yellow-200 rounded-full opacity-20 top-[-50px] left-[-50px] z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute w-36 h-36 bg-yellow-300 rounded-full opacity-15 bottom-[-40px] right-[-40px] z-0"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo & description */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-700 mb-2">WebAuditPro</h2>
          <p className="text-yellow-900/80 max-w-sm">
            Modern web auditing and optimization services to boost performance, SEO, and UX for your site.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {["Home", "Services", "Pricing", "Contact"].map((link) => (
            <MotionLink
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-yellow-800 font-medium hover:text-yellow-900 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </MotionLink>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="text-yellow-700 hover:text-yellow-900 transition-colors duration-200"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-yellow-800/70 text-sm">
        &copy; {new Date().getFullYear()} WebAuditPro. All rights reserved.
      </div>
    </footer>
  );
}
