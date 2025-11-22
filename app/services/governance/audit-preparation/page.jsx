"use client";

export default function AuditPreparation() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-20">
      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Audit Readiness & Evidence Management
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Ensure smooth and successful audit processes with evidence management, control documentation, and systematic preparation.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
            Start Preparation
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-white shadow">
            Explore Service
          </button>
        </div>
      </section>

      {/* COMPONENTS */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Audit Preparation Components
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Evidence Management", desc: "Audit evidence collection, organization, and management" },
            { title: "Control Narratives", desc: "Detailed process and control documentation" },
            { title: "Gap Remediation", desc: "Systematic remediation of identified gaps" },
            { title: "Readiness Assessment", desc: "Systematic audit readiness evaluation" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVIDENCE TYPES */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Evidence Types and Management
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* System Evidence */}
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-800">System Evidence</h3>
            <ul className="text-slate-600 space-y-2">
              <li>Access rights reports</li>
              <li>Log files</li>
              <li>Configuration settings</li>
              <li>Change history</li>
            </ul>
          </div>

          {/* Manual Evidence */}
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Manual Evidence</h3>
            <ul className="text-slate-600 space-y-2">
              <li>Approval processes</li>
              <li>Review tasks</li>
              <li>Training records</li>
              <li>Signatures</li>
            </ul>
          </div>

          {/* Security Evidence */}
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Security Evidence</h3>
            <ul className="text-slate-600 space-y-2">
              <li>Vulnerability scans</li>
              <li>Penetration tests</li>
              <li>Risk assessments</li>
              <li>Incident reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUDIT STANDARDS */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Supported Audit Standards
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "SOC 2 Type II",
              points: ["Security", "Availability", "Processing integrity", "Confidentiality", "Privacy"],
            },
            {
              title: "ISO 27001",
              points: ["ISMS policy", "Risk management", "Controls", "Continual improvement"],
            },
            {
              title: "PCI DSS",
              points: ["Network protection", "Data encryption", "Vulnerability management", "Access control"],
            },
            {
              title: "GDPR",
              points: ["Privacy practices", "Rights", "Data breaches", "DPO role"],
            },
          ].map((card, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{card.title}</h3>
              <ul className="text-slate-600 space-y-2">
                {card.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PREPARATION PROCESS */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Preparation Process Phases
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Pre-audit",
              points: [
                "Control inventory",
                "Evidence mapping",
                "Gap analysis",
                "Remediation plan",
              ],
            },
            {
              title: "Remediation",
              points: [
                "Control implementation",
                "Process improvement",
                "Documentation completion",
              ],
            },
            {
              title: "Evidence Preparation",
              points: [
                "Evidence collection",
                "Organization",
                "Indexing",
                "Verification",
              ],
            },
            {
              title: "Readiness Testing",
              points: [
                "Mock audit",
                "Walkthrough tests",
                "Evidence validation",
                "Team preparation",
              ],
            },
          ].map((card, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{card.title}</h3>
              <ul className="text-slate-600 space-y-2">
                {card.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TRACKING METRICS */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Tracking Metrics
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Control Coverage", desc: "100% of requirements" },
            { title: "Evidence Completeness", desc: "≥95% of evidence" },
            { title: "Average Remediation Time", desc: "<30 days" },
            { title: "Mock Audit Results", desc: "≥90% passed" },
          ].map((metric, i) => (
            <div key={i} className="p-6 text-center bg-white shadow rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800">{metric.title}</h3>
              <p className="mt-2 text-slate-600">{metric.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Ready for Successful Audit?</h2>
        <p className="text-slate-600">Contact us to start your audit preparation project together.</p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">Contact Us</button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-white shadow">Book Demo</button>
        </div>
      </section>
    </div>
  );
}
