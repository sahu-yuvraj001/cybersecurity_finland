"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Hospital,
  Banknote,
  Network,
  Globe,
  GraduationCap,
  RadioTower,
} from "lucide-react";

const industries = [
  { title: "Banking & Finance", icon: Banknote },
  { title: "Government Sector", icon: Building2 },
  { title: "Healthcare", icon: Hospital },
  { title: "Telecom & ISP", icon: RadioTower },
  { title: "IT & Software", icon: Network },
  { title: "Global Enterprises", icon: Globe },
  { title: "Education & Research", icon: GraduationCap },
  { title: "Cyber Defense", icon: ShieldCheck },
];

export default function Industries() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Industries We Secure
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted cybersecurity & GDPR solutions for global organisations across 
            critical industries.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border hover:shadow-lg transition rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-indigo-600" size={32} />
                </div>
                <p className="font-medium">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
