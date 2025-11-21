"use client";

import { FaCheckCircle, FaRegFileAlt, FaClipboardList } from "react-icons/fa";

const stats = [
  { label: "Free Resources", value: "500+" },
  { label: "Downloads per month", value: "50k+" },
  { label: "Expert articles", value: "25+" },
  { label: "Customer satisfaction", value: "98%" },
];

const resources = [
  {
    tag: "Guide",
    pages: "25 pages",
    title: "ISO 27001 Quick Start Guide",
    desc: "25-page implementation roadmap for ISO 27001 deployment.",
    updated: "2024-12",
  },
  {
    tag: "Checklist",
    pages: "18 pages",
    title: "NIS2 Compliance Checklist",
    desc: "Complete requirement assessment tool for NIS2 compliance.",
    updated: "2024-12",
  },
  {
    tag: "Template",
    pages: "12 pages",
    title: "GDPR Privacy Impact Template",
    desc: "Ready-to-use PIA framework for privacy management.",
    updated: "2024-11",
  },
];

export default function ResourceHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Cybersecurity Resource Hub
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mt-4 text-lg">
          Expert guides, tools, and templates to support your cybersecurity &
          compliance journeys.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md transition">
            Browse Resources
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition shadow-sm">
            Get Expert Help
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-xl transition"
            >
              <p className="text-3xl font-bold text-blue-600">{s.value}</p>
              <p className="text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED RESOURCES */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-2">
          Featured Resources
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Latest cybersecurity guides, checklists & templates.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((res, i) => (
            <div
              key={i}
              className="
            bg-white border border-gray-200 rounded-2xl p-6 
            shadow-sm hover:shadow-xl hover:-translate-y-1 
            transition-all duration-300
          "
            >
              <div className="text-sm inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-lg font-medium mb-3">
                {res.tag}
              </div>

              <h3 className="font-semibold text-lg">{res.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{res.desc}</p>

              <p className="text-xs text-gray-400 mt-4">
                Updated {res.updated} • {res.pages}
              </p>

              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 bg-gradient-to-t from-blue-50 to-white">
        <h2 className="text-3xl font-bold text-center">Resource Categories</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Find guides, tools, templates & frameworks.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Guides & Articles",
              items: ["ISO 27001", "GDPR", "NIS2", "SOC 2"],
              icon: <FaRegFileAlt className="h-6 w-6 text-blue-600" />,
            },
            {
              title: "Regulatory Frameworks",
              items: ["NIS2", "GDPR", "DORA", "eIDAS"],
              icon: <FaClipboardList className="h-6 w-6 text-blue-600" />,
            },
            {
              title: "Standards & Frameworks",
              items: ["ISO 27001", "SOC 2", "Cyber Essentials"],
              icon: <FaRegFileAlt className="h-6 w-6 text-blue-600" />,
            },
          ].map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-3">{cat.icon}</div>

              <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>

              <ul className="space-y-2">
                {cat.items.map((itm, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <FaCheckCircle className="text-blue-600 mr-2" />
                    {itm}
                  </li>
                ))}
              </ul>

              <button className="mt-6 px-5 py-2 w-full border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                Browse
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER SUBSCRIBE */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="max-w-xl mx-auto mt-4 opacity-90">
          Get the latest cybersecurity resources delivered weekly.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 rounded-xl text-gray-700 w-full md:w-80"
          />
          <button className="px-6 py-3 bg-white text-blue-700 rounded-xl font-medium hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
