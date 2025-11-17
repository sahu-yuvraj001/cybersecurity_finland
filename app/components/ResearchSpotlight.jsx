"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ResearchSpotlight() {
  const subProjects = [
    "Generative AI for Cyber Defense",
    "Deception Technologies & Honeypot Networks",
    "Post-Quantum Cryptography Implementation",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Research & Innovation Spotlight
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Advancing European cybersecurity through cutting-edge research, 
            AI innovation, and Horizon Europe collaborations.
          </p>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-900 text-white p-10 rounded-3xl shadow-xl mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">
            ComplianceGuard AI: Privacy-Preserving Compliance Intelligence
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            EU Horizon Europe Project • Budget: €2.8M • 7 EU Research Partners
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
              Learn More <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 bg-transparent border border-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition">
              View Publications <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Sub Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subProjects.map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Cutting-edge research advancing cybersecurity capabilities for the European digital ecosystem.
              </p>

              <button className="flex items-center gap-2 text-indigo-600 font-medium hover:underline">
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-lg hover:underline">
            View All Research Projects <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
