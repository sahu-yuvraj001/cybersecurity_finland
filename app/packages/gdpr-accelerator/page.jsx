"use client";
import Link from "next/link";
import { ShieldCheck, FileCheck, Users, Scale, Lock, Globe, Search } from "lucide-react";

export default function GDPRAccelerator() {
  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 leading-tight">
          GDPR Accelerator – Privacy Excellence Program
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Comprehensive GDPR compliance solution with privacy-by-design implementation and ongoing
          privacy management.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="px-6 py-3 bg-black text-white rounded-xl hover:bg-opacity-80 transition">
            Start GDPR Accelerator Program
          </Link>
          <Link href="/privacy" className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-100 transition">
            View Privacy Services
          </Link>
        </div>
      </section>

      {/* WHY GDPR SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t">
        <h2 className="text-3xl font-bold mb-2">Why GDPR Compliance Matters More Than Ever</h2>
        <p className="text-gray-600 mb-10">
          With over €1.6 billion in fines issued since GDPR came into force, privacy compliance is essential.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <Scale className="w-10 h-10 mb-3" />
            <h3 className="font-semibold mb-1">High Fines</h3>
            <p className="text-gray-600">Up to 4% of annual revenue or €20M — whichever is higher.</p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <Users className="w-10 h-10 mb-3" />
            <h3 className="font-semibold mb-1">Reputational Risk</h3>
            <p className="text-gray-600">Breaches and non-compliance damage long-term trust.</p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <FileCheck className="w-10 h-10 mb-3" />
            <h3 className="font-semibold mb-1">Business Value</h3>
            <p className="text-gray-600">Strong privacy programs create competitive advantage.</p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <ShieldCheck className="w-10 h-10 mb-3" />
            <h3 className="font-semibold mb-1">Customer Trust</h3>
            <p className="text-gray-600">Transparent practices build long-term confidence.</p>
          </div>
        </div>
      </section>

      {/* SEVEN PRINCIPLES */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-10">Seven Principles of GDPR</h2>

        <div className="space-y-10">
          {[
            {
              title: "Lawfulness, Fairness & Transparency",
              icon: Scale,
              desc: "Processing must be lawful, fair, and transparent with a valid legal basis."
            },
            {
              title: "Purpose Limitation",
              icon: FileCheck,
              desc: "Data must be collected for explicit and legitimate purposes only."
            },
            {
              title: "Data Minimisation",
              icon: Globe,
              desc: "Only collect data that is necessary and relevant for the purpose."
            },
            {
              title: "Accuracy",
              icon: Search,
              desc: "Personal data must be accurate and kept up to date."
            },
            {
              title: "Storage Limitation",
              icon: Lock,
              desc: "Data should only be retained as long as required."
            },
            {
              title: "Integrity & Confidentiality",
              icon: ShieldCheck,
              desc: "Data must be processed securely with proper safeguards."
            },
            {
              title: "Accountability",
              icon: Users,
              desc: "Organizations must demonstrate compliance at all times."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <item.icon className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DATA SUBJECT RIGHTS */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-6">Data Subject Rights Implementation</h2>
        <p className="text-gray-600 mb-10">
          Complete automation for all GDPR rights including access, correction, deletion, portability, and objections.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Right of Access",
            "Right to Rectification",
            "Right to Erasure",
            "Right to Restrict Processing",
            "Right to Data Portability",
            "Right to Object",
          ].map((right, index) => (
            <div key={index} className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">{right}</h3>
              <p className="text-gray-600">Response time: 1 month</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-10">5-Month Implementation Roadmap</h2>

        {[
          {
            phase: "Phase 1 — Month 1–2: Foundation & Assessment",
            points: [
              "Establish privacy governance framework",
              "Comprehensive data audit",
              "Legal basis identification",
              "Gap analysis & DPIA templates",
            ],
          },
          {
            phase: "Phase 2 — Month 2–3: Policy & Procedure Development",
            points: [
              "GDPR-compliant policies",
              "Operational procedures",
              "DSAR workflows",
              "Training material development",
            ],
          },
          {
            phase: "Phase 3 — Month 3–4: Technical Implementation",
            points: [
              "Privacy by design integration",
              "Security controls & monitoring",
              "Consent management setup",
              "Data breach tools",
            ],
          },
          {
            phase: "Phase 4 — Month 4–5: Testing & Validation",
            points: [
              "DSAR process testing",
              "Control validation",
              "Compliance assessment",
              "Regulatory readiness review",
            ],
          },
        ].map((item, idx) => (
          <div key={idx} className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition mb-8">
            <h3 className="text-xl font-semibold mb-4">{item.phase}</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* COMPLIANCE PACKAGES */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-6">GDPR Compliance Packages</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Startup Package",
              details: [
                "Basic data mapping",
                "Essential policies",
                "Privacy notices",
                "DSAR setup",
                "3 months support",
              ],
            },
            {
              title: "Business Package",
              details: [
                "Comprehensive data mapping",
                "Full policy suite",
                "PIAs included",
                "Training programs",
                "6 months support",
              ],
            },
            {
              title: "Enterprise Package",
              details: [
                "Advanced data modeling",
                "High-level controls",
                "Multi-region compliance",
                "Executive training",
                "12 months support",
              ],
            },
          ].map((pkg, idx) => (
            <div key={idx} className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                {pkg.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <Link href="/contact" className="mt-4 inline-block text-black font-medium hover:underline">
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t text-center">
        <h2 className="text-3xl font-bold mb-4">Accelerate Your GDPR Compliance Journey</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform privacy compliance into a competitive advantage with our comprehensive GDPR Accelerator Program.
        </p>

        <Link href="/contact" className="px-8 py-4 bg-black text-white rounded-xl hover:bg-opacity-80 transition text-lg font-medium">
          Start GDPR Program
        </Link>
      </section>
    </div>
  );
}
