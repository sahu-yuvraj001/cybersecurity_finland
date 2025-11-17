"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudy() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/40 via-slate-900 to-slate-950 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 uppercase text-sm font-semibold tracking-wider mb-3">
            Case Study
          </p>

          <h2 className="text-4xl font-bold leading-tight mb-6">
            Nordic Bank — GDPR & ISO 27001 Transformation
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            A major Nordic financial institution partnered with us to modernize
            its cybersecurity framework. The result was full ISO 27001 alignment,
            GDPR risk elimination, and a 65% increase in operational security efficiency.
          </p>

          <ul className="space-y-3 text-slate-300 mb-8">
            <li>✔ Reduced data breach risk by 82%</li>
            <li>✔ Implemented full GDPR readiness program</li>
            <li>✔ Completed risk audit across 14 departments</li>
            <li>✔ Delivered in under 90 days</li>
          </ul>

          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg font-medium">
            Read Full Case Study →
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative h-90 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/casestudy.jpg"
              alt="Case Study"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
