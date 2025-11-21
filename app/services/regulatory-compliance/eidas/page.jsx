import Link from "next/link";
import React from "react";

export default function EIDASPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 text-center bg-linear-to-b from-blue-50 to-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          eIDAS Digital Trust <br /> & Identity Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Modern, secure, and fully compliant digital trust infrastructure built
          with qualified electronic signatures, seals, timestamps, and identity
          services.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md inline-block"
          >
            Start Digital Trust Assessment
          </Link>
          <Link href="/about" className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-white shadow-sm transition">
            Learn About eIDAS
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Comprehensive eIDAS Trust Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Qualified Electronic Signatures (QES)",
              points: [
                "Qualified signature device integration",
                "Remote qualified signature services",
                "Validation & verification systems",
                "Long-term preservation",
                "Cross-border compliance",
              ],
            },
            {
              title: "Qualified Electronic Seals (QESeal)",
              points: [
                "Seal creation device implementation",
                "Automated sealing processes",
                "Bulk document sealing",
                "Verification infrastructure",
              ],
            },
            {
              title: "Qualified Time Stamps (QTS)",
              points: [
                "Qualified timestamp authority services",
                "RFC3161 compliant",
                "Long-term preservation",
                "Integration with signature systems",
              ],
            },
            {
              title: "Qualified Electronic Delivery Services (QEDS)",
              points: [
                "Delivery platform",
                "Proof of sending & receipt",
                "Secure mailbox services",
                "Legal evidence preservation",
              ],
            },
            {
              title: "Electronic Identification (eID)",
              points: [
                "eID scheme implementation",
                "Multi-factor authentication",
                "Cross-border recognition",
                "Mobile eID solutions",
              ],
            },
            {
              title: "Trust Service Provider (TSP) Framework",
              points: [
                "TSP qualification",
                "Provision infrastructure",
                "Audit compliance frameworks",
                "Business continuity management",
              ],
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {card.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>✔</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Assurance Levels */}
      <section className="py-20 px-6 bg-white border-t">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          eIDAS Assurance Levels
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Low Level", "Substantial Level", "High Level"].map((lvl, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <h3 className="text-2xl font-semibold mb-4">{lvl}</h3>
              <p className="text-gray-600 mb-4">
                {i === 0 && "Basic identity verification and low-risk actions."}
                {i === 1 &&
                  "Multi-factor verification for stronger identity trust."}
                {i === 2 &&
                  "Hardware modules & in‑person verification for highest security."}
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>✔ Identity verification</li>
                <li>✔ Secure access</li>
                <li>✔ Cross‑border compliance</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Benefits of eIDAS Compliance
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Cross-Border Recognition",
            "Legal Certainty",
            "Digital Transformation",
            "Enhanced Security",
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-xl mb-2">{benefit}</h3>
              <p className="text-gray-600 text-sm">
                {benefit === "Cross-Border Recognition" &&
                  "Recognized across all EU member states."}
                {benefit === "Legal Certainty" &&
                  "Presumption of authenticity & integrity."}
                {benefit === "Digital Transformation" &&
                  "Support for digital workflows & automation."}
                {benefit === "Enhanced Security" &&
                  "High cryptographic protection & identity assurance."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to Implement Digital Trust?
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Build a complete eIDAS‑compliant digital trust infrastructure with our
          qualified signatures, seals, and trusted services.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md transition">
          Start Digital Trust Assessment
        </button>
      </section>
    </div>
  );
}
