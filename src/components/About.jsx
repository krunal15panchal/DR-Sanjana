// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

//import aboutImg from "../assets/profile.jpg"; // same image for now

const About = () => {

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://placehold.co/400x400?text=Dr+Sanjana+Pandey"
            alt="Dr. Sanjana Pandey"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            I am Dr. Sanjana Pandey, a passionate Physical Therapist committed
            to helping patients regain mobility and achieve a pain-free lifestyle.
            With a strong background in rehabilitation and advanced manual therapy
            techniques, I provide personalized care to ensure the best outcomes.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Education & Certifications</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Bachelor of Physiotherapy (BPT) - XYZ University</li>
              <li>Certified Manual Therapist</li>
              <li>Specialization in Musculoskeletal Rehabilitation</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
