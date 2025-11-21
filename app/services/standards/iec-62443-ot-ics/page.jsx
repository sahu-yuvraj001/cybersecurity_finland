import Link from "next/link";
import React from "react";

export default function IEC62443Landing() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0 -z-10">
          <img
            src="/mnt/data/96f3b4f4-1aa2-4ff6-baab-a9ce86b0d547.png"
            alt="old IEC 62443 design"
            className="w-full h-full object-cover opacity-5 blur-sm"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              IEC 62443 (OT/ICS) Security
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl">
              Expert IEC 62443 compliance services to secure your industrial
              automation and control systems (OT/ICS) infrastructure.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700"
              >
                Get OT Security Assessment
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-slate-700 bg-white shadow-sm hover:shadow-md"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          Overview
        </h2>
        <div className="mt-6 bg-orange-50 border border-orange-100 rounded-xl p-6 shadow-sm">
          <p className="text-slate-700 leading-relaxed">
            IEC 62443 is the international standard for security of industrial
            automation and control systems (IACS). It provides a comprehensive
            framework for securing operational technology (OT) environments
            across manufacturing, energy, utilities, and critical infrastructure
            sectors.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Our expert team specializes in OT/ICS cybersecurity, offering
            maturity assessments, remediation planning, and implementation
            support to help organizations achieve IEC 62443 compliance while
            maintaining operational safety and availability.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-slate-900">
          Our IEC 62443 Services
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Comprehensive OT/ICS security services covering all aspects of IEC
          62443 compliance.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Maturity Assessment",
              desc: "Comprehensive evaluation of your OT/ICS security posture against IEC 62443 maturity levels.",
            },
            {
              title: "Gap Analysis & Remediation",
              desc: "Detailed gap analysis with prioritized remediation roadmap for industrial control systems.",
            },
            {
              title: "Zone & Conduit Design",
              desc: "Strategic segmentation and secure communication design for industrial networks.",
            },
            {
              title: "Risk Assessment",
              desc: "OT-specific risk assessments considering safety, availability, and security requirements.",
            },
            {
              title: "Control Implementation",
              desc: "Implementation of IEC 62443 security controls tailored for operational technology.",
            },
            {
              title: "Certification Support",
              desc: "Expert guidance through IEC 62443 certification process and compliance validation.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-slate-900">
          Industries We Serve
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Specialized IEC 62443 expertise across critical industrial sectors.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Manufacturing",
            "Energy & Utilities",
            "Oil & Gas",
            "Chemical Processing",
            "Water Treatment",
            "Transportation",
            "Critical Infrastructure",
          ].map((i) => (
            <div
              key={i}
              className="rounded-xl bg-gradient-to-br from-orange-50 to-white p-5 text-center border border-orange-100 shadow-sm"
            >
              <span className="text-slate-900 font-medium">{i}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS + WHAT YOU GET */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">What You Get</h3>
          <ul className="mt-4 space-y-2 text-slate-700 text-sm">
            {[
              "IEC 62443 maturity assessment report",
              "OT/ICS security gap analysis",
              "Zone and conduit architecture design",
              "Security requirements specification",
              "Remediation roadmap and timeline",
              "Control implementation guidelines",
              "Incident response procedures for OT",
              "Ongoing monitoring and maintenance plan",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900">Key Benefits</h3>
          <ul className="mt-4 space-y-2 text-slate-700 text-sm">
            {[
              "Protect critical industrial infrastructure",
              "Meet international OT security standards",
              "Reduce operational disruption risks",
              "Demonstrate security maturity to stakeholders",
              "Comply with industrial cybersecurity regulations",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-14 mt-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold">Secure Your Industrial Systems</h3>
          <p className="mt-2 text-white/90">
            Contact us today to start your IEC 62443 compliance journey.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white text-orange-700 font-semibold px-8 py-3 shadow hover:opacity-90"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-8 py-3 font-semibold hover:opacity-90"
            >
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
