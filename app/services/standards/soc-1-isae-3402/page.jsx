import Link from "next/link";
import React from "react";

export default function SOC1ISAE3402() {
  const services = [
    {
      title: "Gap Analysis & Readiness",
      desc:
        "Assess your current controls and readiness for SOC 1 / ISAE 3402 attestation.",
      points: [
        "Current state assessment",
        "Compliance gap identification",
        "Remediation roadmap",
        "Readiness workshops",
      ],
    },
    {
      title: "Control Mapping & Documentation",
      desc:
        "Map and document controls relevant to financial reporting.",
      points: [
        "Control framework mapping",
        "Policy and procedure documentation",
        "Evidence collection guidance",
        "Stakeholder training",
      ],
    },
    {
      title: "Audit & Attestation Support",
      desc:
        "Support for external audits and successful attestation.",
      points: [
        "Evidence management",
        "Audit liaison",
        "Remediation support",
        "Certification preparation",
      ],
    },
  ];

  const benefits = [
    "Expert guidance for financial controls",
    "Accelerated audit readiness",
    "Comprehensive documentation",
    "Reduced audit risk",
    "Ongoing compliance support",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-blue-100 py-24 text-center px-6">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    SOC 1 / ISAE 3402
  </h1>

  <p className="text-gray-700 max-w-2xl mx-auto mb-8">
    Controls for financial reporting; evidence and auditor support.
  </p>

  <Link href="/contact" className="inline-block">
    <span className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium">
      Get SOC 1 / ISAE 3402 Support
    </span>
  </Link>
</section>


      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          Our SOC 1 / ISAE 3402 Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Comprehensive support for every stage of your SOC 1 / ISAE 3402 attestation journey
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 text-xl">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Why Choose Our SOC 1 / ISAE 3402 Services?
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mt-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center text-gray-800"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready for SOC 1 / ISAE 3402 Attestation?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Get expert guidance and accelerate your compliance timeline
        </p>
        <Link href="/contact" className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-gray-100 transition">
          Contact Our Experts
        </Link>
      </section>
    </div>
  );
}