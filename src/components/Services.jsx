// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaRunning, FaStethoscope } from "react-icons/fa";

const services = [
  {
<<<<<<< HEAD
    icon: <FaStethoscope className="text-4xl text-blue-600" />,
    title: "Cardiovascular Fitness Assessment",
    description: "Comprehensive evaluation of cardiovascular health and exercise tolerance.",
  },
  {
    icon: <FaRunning className="text-4xl text-blue-600" />,
    title: "Individualized Exercise Prescription",
    description: "Personalized exercise plans based on evidence and patient needs.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-blue-600" />,
    title: "Rehabilitation & Counseling",
    description: "Patient education, lifestyle counseling, and multidisciplinary care collaboration.",
=======
    icon: <FaHandsHelping className="text-4xl text-teal-600" />,
    title: "Manual Therapy",
    description: "Hands-on techniques to relieve pain, improve mobility, and promote healing.",
  },
  {
    icon: <FaRunning className="text-4xl text-teal-600" />,
    title: "Sports Rehabilitation",
    description: "Specialized therapy programs to help athletes recover and enhance performance.",
  },
  {
    icon: <FaStethoscope className="text-4xl text-teal-600" />,
    title: "Post-Surgical Rehab",
    description: "Comprehensive care plans for safe and effective recovery after surgery.",
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>
<<<<<<< HEAD
        <p className="text-gray-600 mb-10 max-w-4xl mx-auto">
=======
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
          Offering a range of physical therapy services tailored to individual needs for
          optimal recovery and wellness.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
