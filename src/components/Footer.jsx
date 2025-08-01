// src/components/Footer.jsx
import { div } from "motion/react-client";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:w-full lg:w-full items-center p-1">
    <footer className="bg-gray-900 text-white py-5 ">
      <div className="px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Name */}
        <h3 className="text-lg font-semibold text-center md:text-left">
          © {new Date().getFullYear()} Dr. Sanjana Pandey
        </h3>

        {/* Links */}
        <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-gray-300 text-center">
          <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
          <li><a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a></li>
          <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center md:justify-end">
          <a href="#" className="text-gray-300 hover:text-teal-400 text-xl transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-300 hover:text-teal-400 text-xl transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
