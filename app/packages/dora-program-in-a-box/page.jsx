"use client";
import Link from "next/link";

export default function DoraProgram() {
  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 leading-tight">
          DORA Program-in-a-Box <br /> Digital Operational Resilience Excellence
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Complete Digital Operational Resilience Act (DORA) compliance solution for 
          financial institutions and critical third-party ICT service providers.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-opacity-80 transition"
          >
            Start DORA Compliance Program
          </Link>

          <Link
            href="/dora"
            className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-100 transition"
          >
            Learn About DORA
          </Link>
        </div>
      </section>

      {/* DEADLINE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t">
        <h2 className="text-3xl font-bold mb-6">DORA Compliance Deadline: January 17, 2025</h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Mandatory</h3>
            <p className="text-gray-600">
              DORA compliance is mandatory for all in-scope financial entities in the EU.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Time-Critical</h3>
            <p className="text-gray-600">
              Organizations must be fully compliant by January 17, 2025.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Penalties</h3>
            <p className="text-gray-600">
              Significant fines and sanctions for non-compliance.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Opportunity</h3>
            <p className="text-gray-600">
              Enhance resilience and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* FIVE PILLARS */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-10">DORA's Five Pillars of Digital Resilience</h2>

        <div className="space-y-10">
          {/* PILLAR */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">1. ICT Risk Management Framework</h3>
            <p className="text-gray-600 mb-4">Months 1–3</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Risk management governance & strategy</li>
              <li>ICT asset inventory & dependency mapping</li>
              <li>Risk assessment methodologies</li>
              <li>Continuous monitoring processes</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">2. ICT Incident Management & Reporting</h3>
            <p className="text-gray-600 mb-4">Months 2–4</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Incident classification & severity framework</li>
              <li>24/7 response playbooks</li>
              <li>Regulatory reporting (within 24h)</li>
              <li>Root-cause analysis & lessons learned</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">3. Digital Operational Resilience Testing</h3>
            <p className="text-gray-600 mb-4">Months 3–6</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Penetration testing & vulnerability scans</li>
              <li>Threat-led penetration testing (TLPT)</li>
              <li>Scenario-based resilience testing</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">4. Third-party ICT Service Provider Management</h3>
            <p className="text-gray-600 mb-4">Months 4–6</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Third-party risk assessment</li>
              <li>Contractual DORA clauses & SLAs</li>
              <li>Continuous monitoring of providers</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">5. Information & Intelligence Sharing</h3>
            <p className="text-gray-600 mb-4">Months 5–6</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Cyber threat intelligence feeds</li>
              <li>Participation in information-sharing groups</li>
              <li>Threat awareness & analysis capabilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t text-center">
        <h2 className="font-playfair text-3xl font-bold mb-4">          Don’t Wait — DORA Deadline is January 17, 2025
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Start your DORA compliance journey today with our comprehensive Program-in-a-Box solution.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 bg-black text-white rounded-xl hover:bg-opacity-80 transition text-lg font-medium"
        >
          Begin DORA Compliance
        </Link>
      </section>

    </div>
  );
}
