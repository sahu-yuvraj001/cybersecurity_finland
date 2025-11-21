import Link from "next/link";
import React from "react";

export default function ISO22301Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full bg-white py-20 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          ISO 22301 Business Continuity Management
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Business continuity and disaster recovery planning to ensure your organization maintains operations during disruptions and recovers quickly from incidents.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/contact" className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all shadow">
            Build Business Resilience
          </Link>
          <Link href="/services" className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition-all">
            View Our Services
          </Link>
        </div>
      </section>

      {/* Why Section */}
      <section className="w-full py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why ISO 22301 Business Continuity?</h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Protect your organization from disruptions and ensure rapid recovery with internationally recognized business continuity management standards.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Operational Resilience", desc: "Maintain critical operations during incidents and minimize business impact from disruptions." },
              { title: "Rapid Recovery", desc: "Structured approach to recover operations quickly and return to business as usual." },
              { title: "Stakeholder Confidence", desc: "Demonstrate preparedness to customers, suppliers, and regulators through proven BCM capabilities." },
              { title: "Cost Management", desc: "Reduce potential losses from business interruptions through proactive planning and preparation." },
              { title: "Regulatory Compliance", desc: "Meet regulatory requirements for business continuity and operational resilience across industries." },
              { title: "Organizational Learning", desc: "Continuous improvement culture with lessons learned from exercises and real incidents." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">ISO 22301 Implementation Process</h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Comprehensive approach to building and implementing a robust Business Continuity Management System (BCMS).
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { num: "1", title: "Business Impact Analysis", desc: "Identify critical business processes, dependencies, and impact of potential disruptions." },
              { num: "2", title: "Risk Assessment", desc: "Evaluate threats, vulnerabilities, and risks that could disrupt business operations." },
              { num: "3", title: "Strategy Development", desc: "Develop business continuity strategies and recovery solutions for critical processes." },
              { num: "4", title: "Plan Implementation", desc: "Implement business continuity plans with testing, training, and continuous improvement." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="text-4xl font-bold text-green-500 mb-4">{item.num}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Comprehensive BCM Services</h2>

          <div className="grid sm:grid-cols-2 gap-6 mt-12 text-left">
            {[
              {
                title: "BCMS Development & Implementation",
                points: [
                  "Business impact analysis (BIA)",
                  "Risk assessment and treatment",
                  "Business continuity strategy development",
                  "BCMS policy and procedure development",
                  "Crisis management framework",
                ],
              },
              {
                title: "Testing & Maintenance",
                points: [
                  "Business continuity plan testing",
                  "Crisis simulation exercises",
                  "Emergency response training",
                  "Continuous improvement programs",
                  "Management system audits",
                ],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✔</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="w-full py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Industry Applications</h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            ISO 22301 BCM is applicable across all industries, with particular importance in sectors with high operational dependencies.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {["Financial Services", "Healthcare", "Manufacturing", "Energy & Utilities", "Government", "Technology"].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-gray-900 font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-green-600 text-center text-white px-6">
        <h2 className="text-3xl font-bold">Build Operational Resilience with ISO 22301</h2>
        <p className="text-white/80 mt-3 max-w-3xl mx-auto">
          Protect your business from disruptions and ensure rapid recovery with comprehensive business continuity management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link  href="/contact" className="px-8 py-3 bg-white text-green-700 rounded-xl font-medium hover:bg-gray-100 transition-all shadow">
            Start BCM Implementation
          </Link>
          <Link href="/about" className="px-8 py-3 border border-white text-white rounded-xl font-medium hover:bg-white/10 transition-all">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
