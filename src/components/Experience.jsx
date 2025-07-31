// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHospitalUser, FaAward } from "react-icons/fa";

const experiences = [
  {
    year: "2018",
    icon: <FaGraduationCap className="text-white text-2xl" />,
    title: "Bachelor of Physiotherapy (BPT)",
    description: "Completed BPT from XYZ University with top honors.",
  },
  {
    year: "2019-2021",
    icon: <FaHospitalUser className="text-white text-2xl" />,
    title: "Clinical Internship",
    description: "Hands-on clinical experience in rehabilitation and musculoskeletal therapy.",
  },
  {
    year: "2022",
    icon: <FaAward className="text-white text-2xl" />,
    title: "Certified Manual Therapist",
    description: "Specialized certification in advanced manual therapy techniques.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          A journey of dedication and continuous learning in physical therapy and patient care.
        </p>

        {/* Timeline */}
        <div className="relative border-l-4 border-teal-600 max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <span className="absolute flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full -left-6">
                {exp.icon}
              </span>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
              <span className="block text-sm text-gray-500 mb-2">{exp.year}</span>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
