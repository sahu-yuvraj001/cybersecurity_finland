import Link from "next/link";
import React from "react";

export default function CommonCriteriaPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full py-24 px-4 text-center bg-gradient-to-b from-green-100 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Common Criteria</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Security Targets, Protection Profiles, and evaluation guidance for Common Criteria certification.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition">Start Evaluation</Link>
          <Link href="/services/standards/common-criteria" className="px-6 py-3 bg-white border border-green-500 text-green-600 rounded-xl shadow hover:bg-green-50 transition">Learn More</Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Common Criteria Services</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16">
          Expert guidance for every aspect of Common Criteria certification
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Security Targets (ST)</h3>
            <p className="mb-4 text-gray-700">Comprehensive Security Target development for your IT products</p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Security objective identification</li>
              <li>✔ Threat and risk analysis</li>
              <li>✔ Security functional requirements</li>
              <li>✔ Security assurance requirements</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Protection Profiles (PP)</h3>
            <p className="mb-4 text-gray-700">Industry-standard Protection Profile development and compliance</p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ PP compliance assessment</li>
              <li>✔ Custom PP development</li>
              <li>✔ Security requirements mapping</li>
              <li>✔ Industry alignment verification</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Evaluation Guidance</h3>
            <p className="mb-4 text-gray-700">Expert guidance throughout the Common Criteria evaluation process</p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Evaluation lab selection</li>
              <li>✔ Evaluation process support</li>
              <li>✔ Evidence preparation</li>
              <li>✔ Evaluator interaction management</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Certification Support</h3>
            <p className="mb-4 text-gray-700">End-to-end support for successful Common Criteria certification</p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Certification body liaison</li>
              <li>✔ Documentation review</li>
              <li>✔ Compliance verification</li>
              <li>✔ Certification maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EAL Levels */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Evaluation Assurance Levels (EAL)</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16">
          We support certification at all EAL levels
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { num: 1, label: "EAL1", desc: "Functionally tested" },
            { num: 2, label: "EAL2", desc: "Structurally tested" },
            { num: 3, label: "EAL3", desc: "Methodically tested and checked" },
            { num: 4, label: "EAL4", desc: "Methodically designed, tested, and reviewed" },
            { num: 5, label: "EAL5", desc: "Semiformally designed and tested" },
            { num: 6, label: "EAL6", desc: "Semiformally verified design and tested" },
            { num: 7, label: "EAL7", desc: "Formally verified design and tested" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border shadow hover:shadow-lg transition text-center">
              <div className="text-green-600 text-2xl font-bold mb-2">{item.num}</div>
              <h3 className="text-xl font-semibold mb-1">{item.label}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-green-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Common Criteria Certification?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Get expert guidance for successful evaluation and certification
        </p>
        <Link href="/contact" className="px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
          Contact Our Experts
        </Link>
      </section>
    </div>
  );
}