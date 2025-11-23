"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Soc2Readiness() {
  return (
    <section className="w-full pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 leading-snug">
              SOC 2 Readiness in 12 Weeks <br />
              <span className="text-indigo-600">Trust Service Excellence</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Achieve SOC 2 Type I and II readiness with complete Trust Service 
              Criteria implementation, documentation, and audit preparation.
            </p>

            <p className="mt-4 text-slate-600">
              Our SOC 2 Readiness Program ensures your organization is fully 
              prepared for audits while demonstrating strong security, availability, 
              processing integrity, confidentiality, and privacy controls.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Start SOC 2 Readiness
              </Link>
              <Link
                href="/resources"
                className="px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-100 transition"
              >
                Learn About SOC 2
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image
              src="/soc2.jpg"
              width={500}
              height={500}
              alt="SOC 2 Compliance"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </motion.div>
        </div>

        {/* ============ WHY SOC2 ============ */}
        <section className="mt-24">
          <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-6">            Why SOC 2 Compliance Matters
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Customer Trust",
              "Competitive Advantage",
              "Business Growth",
              "Risk Management",
            ].map((title) => (
              <div
                key={title}
                className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">
                  Ensures your customers and partners trust your security controls.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========= TRUST SERVICE CRITERIA ========= */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-6">SOC 2 Trust Service Criteria</h2>

          <div className="space-y-10">
            {[
              { title: "Security (Mandatory)", weeks: "Weeks 1–4" },
              { title: "Availability (Optional)", weeks: "Weeks 5–6" },
              { title: "Processing Integrity (Optional)", weeks: "Weeks 7–8" },
              { title: "Confidentiality (Optional)", weeks: "Weeks 9–10" },
              { title: "Privacy (Optional)", weeks: "Weeks 11–12" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm mt-1 text-slate-500">{item.weeks}</p>
                <p className="mt-3 text-slate-600">
                  Covers full implementation, monitoring, and compliance support.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========= TIMELINE ========= */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-6">12-Week Implementation Timeline</h2>

          <div className="space-y-10">
            {[
              {
                title: "Weeks 1–2: Foundation & Assessment",
                desc: "Full SOC 2 readiness assessment, gap analysis, and system scoping.",
              },
              {
                title: "Weeks 3–6: Security Foundation & Core Controls",
                desc: "Access management, encryption, network security, SDLC, risk framework.",
              },
              {
                title: "Weeks 7–8: Additional Trust Service Criteria",
                desc: "Availability, Processing Integrity, Confidentiality, Privacy controls.",
              },
              {
                title: "Weeks 9–10: Policy Development & Documentation",
                desc: "Complete SOC 2 documentation suite and evidence collection.",
              },
              {
                title: "Weeks 11–12: Audit Preparation & Validation",
                desc: "Control testing, evidence preparation, mock audit, readiness sign-off.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========== PACKAGES =========== */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-6">SOC 2 Readiness Packages</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Essential (Security Only)" },
              { title: "Standard (Security + Availability)" },
              { title: "Comprehensive (All 5 Criteria)" },
              { title: "Enterprise Plus (All Criteria + Ongoing)" },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h3 className="font-semibold text-lg">{pkg.title}</h3>
                <Link
                  href="/contact"
                  className="mt-4 inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Achieve SOC 2 Compliance?</h2>
          <p className="text-slate-600 mb-6">
            Join organizations that trust our proven 12-week SOC 2 readiness program.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            Start Your SOC 2 Journey
          </Link>
        </section>

      </div>
    </section>
  );
}
