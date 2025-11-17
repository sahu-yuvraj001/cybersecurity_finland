"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, ClipboardCheck, Database, RefreshCcw, Lock } from "lucide-react";

const principles = [
  {
    title: "Lawfulness, Fairness & Transparency",
    desc: "Clear legal basis and transparent processing.",
    penalty: "Max Penalty: Up to €20M or 4% annual turnover",
    icon: Scale,
  },
  {
    title: "Purpose Limitation",
    desc: "Specified, explicit and legitimate purposes.",
    penalty: "Max Penalty: Up to €20M or 4% annual turnover",
    icon: ClipboardCheck,
  },
  {
    title: "Data Minimisation",
    desc: "Adequate, relevant and limited processing.",
    penalty: "Max Penalty: Up to €20M or 4% annual turnover",
    icon: Database,
  },
  {
    title: "Accuracy",
    desc: "Accurate and up-to-date personal data.",
    penalty: "Max Penalty: Up to €20M or 4% annual turnover",
    icon: RefreshCcw,
  },
  {
    title: "Storage Limitation",
    desc: "Limited retention periods.",
    penalty: "Max Penalty: Up to €20M or 4% annual turnover",
    icon: ShieldCheck,
  },
  {
    title: "Security",
    desc: "Appropriate technical and organisational measures.",
    penalty: "Max Penalty: Up to €10M or 2% annual turnover",
    icon: Lock,
  },
];

export default function GDPRPrinciples() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            GDPR Principles & Compliance Requirements
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Understanding the core GDPR principles and the consequences of non-compliance.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border shadow-sm 
                           hover:shadow-xl hover:bg-indigo-50 hover:-translate-y-1 
                           transition-all duration-300 ease-out"
              >
                {/* Icon */}
                <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-5">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>

                {/* Penalty */}
                <p className="text-indigo-600 font-medium text-sm">
                  {item.penalty}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
