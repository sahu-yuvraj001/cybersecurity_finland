"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is GDPR and why is it important?",
    a: "GDPR is the European Union’s data protection law designed to protect personal data and privacy. It applies to any organisation handling EU customer data."
  },
  {
    q: "Do I need GDPR compliance even if my business is not in the EU?",
    a: "Yes. If you collect or process personal data of EU residents, GDPR compliance is required regardless of your business location."
  },
  {
    q: "What services do you offer for GDPR compliance?",
    a: "We provide policy documentation, DPIA support, GDPR audits, data mapping, breach response planning, and ongoing compliance monitoring."
  },
  {
    q: "How long does it take to become GDPR compliant?",
    a: "Depending on your organisation size and data operations, the process can take anywhere from a few weeks to a few months."
  },
  {
    q: "Can you help us after we become compliant?",
    a: "Absolutely. We offer ongoing advisory, updates to policies, monitoring, and support for any regulatory changes."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4">
            Clear answers to the most common GDPR queries we receive.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.q}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 mt-4 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
