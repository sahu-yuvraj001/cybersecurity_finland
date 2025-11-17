"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function gsdr() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white to-slate-100 text-slate-800">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight text-slate-900"
        >
          GDPR & Privacy <span className="text-indigo-600">Excellence</span> Services
        </motion.h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          End-to-end GDPR compliance with privacy-by-design, automation, and 
          continuous governance for sustainable data protection.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 shadow-lg transition">
            Start Privacy Assessment
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-white shadow transition">
            View Privacy Resources
          </button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Comprehensive Privacy Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-2 text-slate-600 text-sm">{service.duration}</p>

              <ul className="mt-4 space-y-2">
                {service.deliverables.map((d, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      {/* GDPR PRINCIPLES SECTION */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center">
    GDPR Principles & Compliance Requirements
  </h2>
  <p className="text-slate-600 text-center max-w-2xl mx-auto mt-4">
    Understanding the core GDPR principles and potential penalties for non-compliance.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

    {/* CARD 1 */}
    <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">
        Lawfulness, Fairness & Transparency
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        Clear legal basis and transparent processing
      </p>
      <p className="mt-4 text-sm font-semibold text-red-600">
        Max Penalty: Up to €20M or 4% annual turnover
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">
        Purpose Limitation
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        Specified, explicit and legitimate purposes
      </p>
      <p className="mt-4 text-sm font-semibold text-red-600">
        Max Penalty: Up to €20M or 4% annual turnover
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">
        Data Minimisation
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        Adequate, relevant and limited processing
      </p>
      <p className="mt-4 text-sm font-semibold text-red-600">
        Max Penalty: Up to €20M or 4% annual turnover
      </p>
    </div>

    {/* CARD 4 */}
    <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">
        Accuracy
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        Accurate and up-to-date personal data
      </p>
      <p className="mt-4 text-sm font-semibold text-red-600">
        Max Penalty: Up to €20M or 4% annual turnover
      </p>
    </div>

    {/* CARD 5 */}
    <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">
        Storage Limitation
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        Limited retention periods
      </p>
      <p className="mt-4 text-sm font-semibold text-red-600">
        Max Penalty: Up to €20M or 4% annual turnover
      </p>
    </div>

    {/* CARD 6 */}
    <div className="bg-white shadow-md p-6 rounded-2xl border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">
        Security
      </h3>
      <p className="mt-2 text-slate-600 text-sm">
        Appropriate technical and organisational measures
      </p>
      <p className="mt-4 text-sm font-semibold text-red-600">
        Max Penalty: Up to €10M or 2% annual turnover
      </p>
    </div>

  </div>
</section>


      {/* COMPETITIVE ADVANTAGE */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Privacy as a Competitive Advantage
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="bg-white shadow-md p-8 rounded-2xl border border-slate-200"
              >
                <adv.icon className="w-10 h-10 text-indigo-600 mx-auto" />
                <h3 className="text-xl font-semibold mt-4 mb-2">{adv.title}</h3>
                <p className="text-slate-600 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Achieve <span className="text-indigo-600">Privacy Excellence?</span>
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Transform GDPR compliance from regulatory burden into competitive advantage with 
          expert guidance and premium services.
        </p>

        <button className="px-8 py-4 mt-10 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 shadow-xl transition">
          Start Privacy Assessment
        </button>
      </section>

    </main>
  );
}

const services = [
  {
    title: "Data Protection Impact Assessment (DPIA)",
    duration: "4–8 weeks | High-risk processing",
    deliverables: [
      "DPIA methodology & framework",
      "Risk identification & analysis",
      "Mitigation recommendations",
      "Review & monitoring processes",
    ],
  },
  {
    title: "Data Mapping & Inventory",
    duration: "6–12 weeks | GDPR foundation",
    deliverables: [
      "Personal data classification",
      "Data flow mapping",
      "Legal basis documentation",
      "Retention schedules",
    ],
  },
  {
    title: "Data Subject Rights Management",
    duration: "8–16 weeks | Response automation",
    deliverables: [
      "SAR automation",
      "Right to rectification & erasure",
      "Export capabilities",
      "Consent management",
    ],
  },
  {
    title: "Privacy-by-Design Implementation",
    duration: "12–24 weeks",
    deliverables: [
      "Privacy reviews",
      "Default privacy settings",
      "Data minimization",
      "Technology deployment",
    ],
  },
  {
    title: "Records of Processing Activities (RoPA)",
    duration: "4–8 weeks",
    deliverables: [
      "Processing documentation",
      "Legal basis tracking",
      "Retention periods",
      "Transfer documentation",
    ],
  },
  {
    title: "International Transfer Compliance",
    duration: "6–12 weeks",
    deliverables: [
      "TIA assessments",
      "SCCs implementation",
      "Adequacy review",
      "Safeguards setup",
    ],
  },
];

const advantages = [
  {
    title: "Customer Trust Building",
    desc: "Commit to strong data protection and build long-term brand loyalty.",
    icon: ShieldCheck,
  },
  {
    title: "Cost Reduction",
    desc: "Avoid large regulatory fines with privacy-by-design practices.",
    icon: BookOpen,
  },
  {
    title: "Market Differentiation",
    desc: "Use privacy excellence as your competitive advantage.",
    icon: ArrowRight,
  },
];
