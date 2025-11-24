// app/frameworks/page.jsx
"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "6+", label: "Major regulations" },
  { value: "100+", label: "Requirements covered" },
  { value: "25+", label: "Industries supported" },
  { value: "98%", label: "Compliance success rate" },
];

const implementationSteps = [
  "Current state assessment",
  "Requirements analysis",
  "Implementation planning",
  "Practical implementation",
  "Audit and certification",
];

const frameworks = [
  {
    region: "EU",
    active: "2024-10-17",
    title: "NIS2 Directive",
    description: "European Union Network and Information Security Directive v2",
    requirements: [
      "Cybersecurity risk management",
      "Incident reporting",
      "Supply chain security",
      "Staff training",
    ],
    sectors: ["Energy", "Transport", "Banking", "Health", "Digital Infrastructure"],
  },
  {
    region: "EU",
    active: "2025-01-17",
    title: "DORA Regulation",
    description: "Digital Operational Resilience Act for financial sector",
    requirements: [
      "ICT risk management",
      "Third-party risk management",
      "Digital operational resilience",
      "Testing and exercises",
    ],
    sectors: ["Banking", "Insurance", "Investment", "Payment Services"],
  },
  {
    region: "EU + Global",
    active: "2018-05-25",
    title: "GDPR Regulation",
    description: "General Data Protection Regulation for personal data processing",
    requirements: [
      "Data protection impact assessments",
      "Personal data protection",
      "Data breach notification",
      "Individual rights",
    ],
    sectors: ["All sectors processing personal data"],
  },
  {
    region: "EU",
    active: "2016-07-01",
    title: "eIDAS Regulation",
    description: "Electronic identification and trust services",
    requirements: [
      "Electronic signatures",
      "Electronic sealed documents",
      "Time stamping",
      "Authentication services",
    ],
    sectors: ["Digital Services", "Public Services", "E-commerce"],
  },
  {
    region: "Global",
    active: "Ongoing",
    title: "ISO 27001",
    description: "International information security management system standard",
    requirements: [
      "Information security policy",
      "Risk assessment process",
      "Security controls",
      "Continuous improvement",
    ],
    sectors: ["All sectors"],
  },
  {
    region: "Global",
    active: "Ongoing",
    title: "SOC 2",
    description: "Service organization control auditing",
    requirements: ["Security", "Availability", "Processing Integrity", "Confidentiality"],
    sectors: ["SaaS", "Cloud Services", "Data Centers"],
  },
];

export default function RegulatoryFrameworks() {
  return (
    <section className="px-6 lg:px-20 py-20 bg-gray-50">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Cybersecurity Regulatory Frameworks
        </h1>
        <p className="text-gray-600 text-lg">
          Comprehensive collection of key cybersecurity regulations and standards. Detailed implementation guides and compliance support.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Browse Regulations
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Get Expert Help
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-16">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-bold text-gray-900">{stat.value}</h2>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Implementation Process */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Process</h2>
        <div className="space-y-6">
          {implementationSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">
                {idx + 1}
              </div>
              <p className="text-gray-700 font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Supported Frameworks */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Supported Regulatory Frameworks</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {frameworks.map((fw, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-indigo-600">{fw.region}</span>
                <span className="text-xs text-gray-400">Active: {fw.active}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{fw.title}</h3>
              <p className="text-gray-600 mb-3">{fw.description}</p>
              <p className="text-gray-700 font-semibold mb-1">Key requirements:</p>
              <ul className="list-disc list-inside text-gray-600 mb-2">
                {fw.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <p className="text-gray-700 font-semibold mb-1">Sectors:</p>
              <p className="text-gray-600">{fw.sectors.join(", ")}</p>
              <button className="mt-4 text-indigo-600 font-semibold hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Compliance Journey</h2>
        <p className="text-gray-600 mb-8">
          Contact our experts and get a tailored implementation plan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Contact Us
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}
