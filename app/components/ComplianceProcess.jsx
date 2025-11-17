"use client";

import { motion } from "framer-motion";
import { FileSearch, ClipboardList, ShieldCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "1. GDPR Audit & Assessment",
    desc: "We evaluate your current data protection readiness and identify compliance gaps.",
    icon: FileSearch,
  },
  {
    title: "2. Documentation & Policies",
    desc: "Creation of privacy policies, DPIA reports, consent logs, and GDPR documentation.",
    icon: ClipboardList,
  },
  {
    title: "3. Implementation & Controls",
    desc: "We integrate the required technical & organisational measures to meet GDPR standards.",
    icon: ShieldCheck,
  },
  {
    title: "4. Certification & Monitoring",
    desc: "Ongoing updates, audits, and compliance validation to ensure long-term accountability.",
    icon: CheckCircle2,
  },
];

export default function ComplianceProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our GDPR Compliance Process
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A complete end-to-end framework designed to help your organisation achieve and maintain GDPR compliance.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border shadow-sm 
                           hover:shadow-xl hover:bg-indigo-50 hover:-translate-y-1 
                           transition-all duration-300 ease-out relative"
              >
                {/* Step Number Decor */}
                <span className="absolute top-4 right-4 text-gray-300 text-xl font-bold">
                  {index + 1}
                </span>

                {/* Icon */}
                <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-5">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
