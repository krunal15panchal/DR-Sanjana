// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png"; // Ensure you have a profile image in the specified path
import testImg from "../assets/react.svg";

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
            SANJANAKUMARI PANDEY <span className="text-blue-700"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-semibold">
            Dedicated Exercise Physiologist & Physical 
          </p>
          <p className="mt-2 text-gray-700">
            Contact: <a href="tel:+18474897462" className="text-blue-600">+1 847-489-7462</a> | Email: <a href="mailto:pandeysanjana0910@gmail.com" className="text-blue-600">pandeysanjana0910@gmail.com</a>
          </p>
          
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center mb-10 md:mb-0 md:pl-12 lg:pl-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center w-72 h-72 md:w-96 md:h-96">
            <img
              src={profileImg}
              alt="Dr. Sanjana Pandey"
              className="w-full h-full object-cover rounded-full shadow-lg border-4 border-black-600"
              style={{ objectPosition: "center top"}}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
