import Link from "next/link";
import React from "react";

export default function CmmcNistPage() {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">CMMC / NIST 800-171</h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Gap analysis, SPRS scoring, POA&M, enclave strategies.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition">
            Get Compliance Support
          </Link>
          <Link href="/contact" className="border border-gray-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold mb-10 text-center">Overview</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
          <p className="text-gray-700 mb-3">
            CMMC and NIST 800-171 are US standards for protecting Controlled Unclassified Information (CUI) in federal contracts.
          </p>
          <p className="text-gray-700">
            We provide gap analysis, SPRS scoring, POA&M development, and enclave strategies to help organizations achieve and maintain compliance.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          {[
            {
              title: "Gap Analysis & Readiness",
              desc: "Identify control gaps and assess compliance posture against NIST 800-171 requirements.",
            },
            {
              title: "SPRS Scoring & POA&M",
              desc: "Develop accurate SPRS scores and detailed POA&M documents for DFARS compliance.",
            },
            {
              title: "Enclave Design & Implementation",
              desc: "Architect secure CUI enclaves to isolate sensitive environments and reduce compliance scope.",
            },
            {
              title: "Certification & Audit Support",
              desc: "Support through certification audits, documentation preparation, and remediation oversight.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 shadow rounded-lg border border-gray-100">
              <h3 className="font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Need CMMC or NIST 800-171 Support?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Contact us today to accelerate your compliance journey with expert guidance and secure strategies.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition">
            Contact Us
          </Link>
          <Link href="/contact" className="bg-blue-700 px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-800 transition">
            Schedule Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}