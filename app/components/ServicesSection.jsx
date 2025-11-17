"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck, Eye, Database, Globe } from "lucide-react";

const services = [
  {
    title: "GDPR Compliance Audit",
    description:
      "Full analysis of your data processing activities to identify compliance gaps.",
    icon: ShieldCheck,
  },
  {
    title: "Data Protection Impact Assessment",
    description:
      "Evaluate high-risk processes and create mitigation strategies.",
    icon: Eye,
  },
  {
    title: "Data Processing Agreements",
    description:
      "Drafting & reviewing legally compliant data processing agreements.",
    icon: FileCheck,
  },
  {
    title: "Data Security Enhancement",
    description:
      "Implement updated technical & organisational security measures.",
    icon: Lock,
  },
  {
    title: "Data Mapping & Documentation",
    description:
      "Track, categorise, and document your organisation’s data flow.",
    icon: Database,
  },
  {
    title: "Global Compliance Support",
    description:
      "Support for GDPR, CCPA, UK-GDPR & international privacy laws.",
    icon: Globe,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Comprehensive Privacy Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto mb-14"
        >
          We help businesses navigate GDPR compliance with modern, effective and
          secure privacy solutions.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white shadow-sm p-8 rounded-2xl border hover:shadow-md transition"
              >
                <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-5 mx-auto">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
