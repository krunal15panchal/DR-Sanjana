// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

//import aboutImg from "../assets/profile.jpg"; // same image for now

const About = () => {

  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
          <div className="flex flex-col gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Dedicated and results-driven Exercise Physiologist and Physiotherapist with a Master’s in Exercise and Sports Science and extensive experience in multi-phase cardiopulmonary, musculoskeletal, neurological, and cardiovascular rehabilitation. Skilled in conducting comprehensive cardiovascular fitness assessments, monitoring vital signs, and developing individualized, evidence-based exercise prescriptions. Proven ability to lead safe and effective rehabilitation sessions, educate patients on disease risk factors and lifestyle modifications, and collaborate with physicians, nurses, and allied health professionals to optimize patient outcomes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Education</h3>
              <div className="flex flex-col gap-4">
                <div className="">
                  <div className="font-semibold text-gray-800">Northeastern Illinois University (NEIU), Chicago</div>
                  <div className="text-gray-700">Masters in Exercise and Sports Science <span className="italic">(May 2025)</span></div>
                  <div className="text-sm text-gray-500 mt-1">Relevant Coursework:</div>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                    <li>Cardiopulmonary Rehabilitation</li>
                    <li>Exercise Testing & Prescription</li>
                    <li>Human Performance</li>
                    <li>Clinical Assessment</li>
                  </ul>
                </div>
                <div className="">
                  <div className="font-semibold text-gray-800">Charotar University of Science and Technology (CHARUSAT), India</div>
                  <div className="text-gray-700">Bachelor of Physiotherapy <span className="italic">(June 2023)</span></div>
                  <div className="text-sm text-gray-500 mt-1">Relevant Coursework:</div>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                    <li>Human Anatomy</li>
                    <li>Human Physiology</li>
                    <li>Clinical Orthopedics</li>
                    <li>PT in Sports</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Certifications</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-justify mx-4">
                <li>Basic Life Support (BLS) — American Heart Association (Current)</li>
                <li>CPR Certification — American Heart Association (Current)</li>
                <li>Advanced Cardiovascular Life Support (ACLS) — Planned/Within 6 months of hire</li>
                <li>Pursuing ACSM Certified Clinical Exercise Physiologist (CEP)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
