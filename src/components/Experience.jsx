// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { FaStethoscope, FaGraduationCap, FaHospitalUser, FaAward } from "react-icons/fa";

const experiences = [
  {
    year: "2024-2025",
    icon: <FaStethoscope className="text-white text-2xl" />,
    title: "Exercise Rehabilitation Intern",
    description: "Designed evidence-based exercise programs for patients in multi-phase rehabilitation settings. Participated in quality improvement initiatives to enhance rehabilitation program effectiveness.",
  },
  {
    year: "2023-2024",
    icon: <FaHospitalUser className="text-white text-2xl" />,
    title: "Clinical Postings",
    description: "ATI Physical Therapy, Chicago, USA; DDMM Cardiac Hospital, Nadiad; Charusat Health Care and Research Foundation; Mahagujarat Hospital, Nadiad; Sanjay Hospital, Nadiad; ARIP OPD (Musculoskeletal, Pediatrics, Neurology); J.S. Ayurveda Hospital; Anand General Hospital; Stroke Center – Demol; K.M. Patel Institute of Physiotherapy, Karamsad.",
  },
  {
    year: "2022-2023",
    icon: <FaAward className="text-white text-2xl" />,
    title: "Internship & Research Experience",
    description: "Comparison of Sensory Deficits in Type 2 Diabetes; Exercise and Manual Therapy in Knee Osteoarthritis; Strength Training for Sarcopenia Management in Cancer Survivors.",
=======
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
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
<<<<<<< HEAD
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4 text-center"
=======
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
<<<<<<< HEAD
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-center">
=======
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
          A journey of dedication and continuous learning in physical therapy and patient care.
        </p>

        {/* Timeline */}
<<<<<<< HEAD
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-start gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <span className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg shrink-0">
                {exp.icon}
              </span>
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 md:mb-0">{exp.title}</h3>
                  <span className="block text-sm text-blue-600 font-medium">{exp.year}</span>
                </div>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{exp.description}</p>
              </div>
=======
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
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
