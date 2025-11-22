import React from "react";

export default function SaasTechnology() {
  return (
    <div className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">SaaS & Technology</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Comprehensive cybersecurity and compliance services for software companies and technology organizations
        </p>
      </div>

      {/* Intro Section */}
      <div className="grid lg:grid-cols-2 gap-10 mb-20">
        <div className="bg-white shadow-md rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4">Who is this for?</h2>
          <p className="text-slate-600 leading-relaxed">
            Software companies, SaaS providers, technology startups, IT service companies, and other technology organizations looking to strengthen their cybersecurity.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4">What will you achieve?</h2>
          <p className="text-slate-600 leading-relaxed">
            Product development security, cloud service protection, GDPR compliance, and resilient cybersecurity.
          </p>
        </div>
      </div>

      {/* Key Challenges */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Key Challenges</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Product Security",
              desc: "Ensuring security of software and APIs throughout the development process",
            },
            {
              title: "Cloud Security",
              desc: "Strengthening cybersecurity for AWS, Azure, and other cloud services",
            },
            {
              title: "Customer Data Protection",
              desc: "Meeting GDPR and other data protection regulation requirements",
            },
            {
              title: "DevSecOps Integration",
              desc: "Integrating security into development and deployment processes",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-200"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Our Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Product Security",
              desc: "Software security auditing and testing",
            },
            {
              title: "Cloud Security Audit",
              desc: "Comprehensive cybersecurity audit of cloud services",
            },
            {
              title: "GDPR Compliance",
              desc: "Meeting data protection regulation requirements",
            },
            {
              title: "DevSecOps Program",
              desc: "Integrating security into DevOps processes",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-200"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Protect product development process",
            "Strengthen cloud service security",
            "Meet GDPR requirements",
            "Enhance customer trust",
            "Strengthen competitive advantage",
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 text-slate-700"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to strengthen your cybersecurity?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Contact us and let's start strengthening your technology company's cybersecurity.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition">
            Get in Touch
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-white shadow transition">
            Learn More About Product Security
          </button>
        </div>
      </div>
    </div>
  );
}