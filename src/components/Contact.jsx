// src/components/Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID", // replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
      form.current,
      "YOUR_USER_ID" // replace with your EmailJS public key
    )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

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
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
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
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <span className="text-gray-700">+1 847-489-7462</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span className="text-gray-700">pandeysanjana0910@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <span className="text-gray-700">Chicago, IL, USA</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-700">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-50 p-8 rounded-lg shadow-md space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
