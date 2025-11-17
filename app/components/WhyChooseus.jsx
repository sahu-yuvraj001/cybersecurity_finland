"use client";

import { motion } from "framer-motion";
import { Shield, Users, CheckCircle2, Layers } from "lucide-react";

const features = [
  {
    title: "Expert GDPR Specialists",
    description:
      "Our team brings years of experience in privacy, compliance, and data governance.",
    icon: Users,
  },
  {
    title: "High Accuracy & Reliability",
    description:
      "We follow strict compliance standards ensuring every audit and document is precise.",
    icon: CheckCircle2,
  },
  {
    title: "Strong Data Protection Measures",
    description:
      "Your privacy data is handled securely with modern encryption and protection frameworks.",
    icon: Shield,
  },
  {
    title: "End-to-End Compliance Support",
    description:
      "From audits to implementation, we support your organisation at every step.",
    icon: Layers,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our GDPR Services?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We deliver trusted, premium-quality compliance solutions that help
            organisations protect data and build customer trust.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border shadow-sm 
                           hover:shadow-xl hover:bg-indigo-50 hover:-translate-y-1 
                           transition-all duration-300 ease-out"
              >
                {/* Icon */}
                <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-5">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
