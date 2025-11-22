"use client";
import Image from "next/image";

export default function Platform() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Seamless Security Processing
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Leverage the power of AI-driven security analytics without complex
          configurations. Integrate seamlessly with your existing infrastructure
          to ensure threat detection, compliance monitoring, and risk assessment.
        </p>
      </section>

      {/* Automated Security Assessment */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">
          Automated Security Assessment
        </h2>
        <p className="text-slate-600 mb-8 max-w-3xl">
          Automate vulnerability assessment, threat detection, and compliance
          monitoring effortlessly using CyberSecurity Finland’s AI-powered
          platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Google Sheets",
            "Google Cloud",
            "AWS",
            "Snowflake",
            "Amazon EKS",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Security Analytics */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Smart Security Analytics & Risk Management
          </h2>
          <p className="text-slate-600 max-w-3xl mb-12">
            Gain deeper insights with advanced threat detection models and ML-powered analytics.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "AWS Shield",
              "Google Cloud Security",
              "Azure Security Center",
              "Cloudflare",
              "Zscaler",
              "Qualys",
              "Bitdefender",
              "Okta",
              "Auth0",
              "Cisco Secure",
              "IBM Security",
              "Norton Enterprise",
              "Splunk",
              "Palo Alto Networks",
              "FireEye",
              "Tenable",
              "Fortinet",
              "CrowdStrike",
              "McAfee",
              "Trend Micro",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition text-center"
              >
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6 bg-white">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Start Your Security Transformation Today
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-10">
          Join hundreds of security-focused organizations using CyberSecurity Finland
          to achieve advanced compliance and threat protection.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition">
            Start Assessment
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-slate-100 transition">
            View Pricing
          </button>
        </div>
      </section>
    </div>
  );
}
