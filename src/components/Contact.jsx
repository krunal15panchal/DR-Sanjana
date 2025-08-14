// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
<<<<<<< HEAD
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
=======
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
          Feel free to reach out for inquiries or collaborations. I’d love to connect with you.
        </p>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
<<<<<<< HEAD
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <span className="text-gray-700">+1 847-489-7462</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span className="text-gray-700">pandeysanjana0910@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
=======
              <FaPhoneAlt className="text-teal-600 text-2xl" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-teal-600 text-2xl" />
              <span className="text-gray-700">dr.sanjana@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-teal-600 text-2xl" />
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
              <span className="text-gray-700">Chicago, IL, USA</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
<<<<<<< HEAD
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-700">
=======
              <a href="#" className="text-teal-600 text-2xl hover:text-teal-700">
                <FaLinkedin />
              </a>
              <a href="#" className="text-teal-600 text-2xl hover:text-teal-700">
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            className="bg-gray-50 p-8 rounded-lg shadow-md space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Your Name"
<<<<<<< HEAD
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
=======
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
            />
            <input
              type="email"
              placeholder="Your Email"
<<<<<<< HEAD
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
=======
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
            />
            <textarea
              rows="5"
              placeholder="Your Message"
<<<<<<< HEAD
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
=======
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
>>>>>>> c7f6efb93e506c60ec09a231b14d0d1be0d526ec
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
