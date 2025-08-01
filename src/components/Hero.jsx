// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
//import heroImg from "../assets/profile.jpg"; // replace with actual image

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-blue-50 to-white flex items-center relative "
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I'm <span className="text-blue-700">Dr. Sanjana Pandey</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Physical Therapist | Rehabilitation Specialist
          </p>
          <a
            href="#about"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-700 transition-colors"
          >
            View CV
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://placehold.co/400x400?text=Dr+Sanjana+Pandey"
            alt="Dr. Sanjana Pandey"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
