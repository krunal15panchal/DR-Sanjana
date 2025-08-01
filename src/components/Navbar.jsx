// src/components/Navbar.jsx
import { div } from "motion/react-client";
import React, { useState } from "react";
import { CiMedicalCross } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
            <CiMedicalCross size={30} className=""/>
            <h1 className="text-2xl font-bold text-blue-800 pl-0.5">DR. SANJANA PANDEY</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-slate-800 font-medium">
          {links.map((link, index) => (
            <li key={index} className="hover:text-blue-600 transition-colors">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white flex flex-col items-center shadow-lg py-6 space-y-4">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-lg font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
