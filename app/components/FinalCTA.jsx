"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Enterprise Clients CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-700 hover:border-indigo-500 transition-all"
        >
          <h3 className="font-playfair text-3xl font-bold mb-4">
            Secure Your Critical Operations
          </h3>

          <p className="text-gray-300 mb-8 leading-relaxed">
            For enterprise clients who need mission-critical cybersecurity, GDPR
            compliance, and advanced threat protection.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
             bg-indigo-600 text-white border border-transparent hover:border-white hover:bg-blue-700"
          >
            Contact Sales <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Research Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-indigo-600 p-10 rounded-3xl shadow-xl hover:bg-indigo-700 transition-all"
        >
          <h3 className="font-playfair text-3xl font-bold mb-4">
            Collaborate on EU Research Projects
          </h3>

          <p className="text-indigo-100 mb-8 leading-relaxed">
            Partner with us on Horizon Europe, AI research, privacy engineering,
            and cybersecurity innovation initiatives.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
             bg-blue-600 text-white border border-transparent hover:border-white hover:bg-blue-700"
          >
            {" "}
            Partner With Us <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
