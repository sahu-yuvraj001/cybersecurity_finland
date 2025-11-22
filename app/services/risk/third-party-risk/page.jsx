export default function ThirdPartyRisk() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">Third-Party Risk</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Implement a complete TPRM lifecycle: onboarding, due diligence, contractual controls, and continuous monitoring.
        </p>

        <div className="mt-8 p-6 bg-slate-100 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-semibold text-slate-900">What you get</h2>
          <p className="text-slate-600 mt-2">
            A comprehensive TPRM system that manages vendor risks throughout the entire lifecycle — from onboarding to continuous monitoring and potential termination.
          </p>
        </div>
      </section>

      {/* TPRM Components */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">TPRM Components</h2>
        <p className="text-slate-600 mt-2">Comprehensive approach to third-party risk management.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Card title="Vendor Onboarding" desc="Structured process for evaluating and approving new vendors" />
          <Card title="Due Diligence" desc="Thorough background research and risk assessment" />
          <Card title="Contractual Controls" desc="Security requirements and clauses in contracts" />
          <Card title="Continuous Monitoring" desc="Regular assessment of vendor risk profiles" />
        </div>
      </section>

      {/* Risk Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 border-y border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900">Risk Categories</h2>
        <p className="text-slate-600 mt-2">Key risk areas in third-party services.</p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <Card title="Cybersecurity Risks" desc="Vendor cybersecurity risks and vulnerabilities" />
          <Card title="Data Processing" desc="Personal data and confidential information processing" />
          <Card title="Regulatory Risks" desc="Compliance requirements and legal adherence" />
          <Card title="Operational Risks" desc="Service availability and business continuity" />
        </div>
      </section>

      {/* TPRM Lifecycle */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">TPRM Lifecycle</h2>
        <p className="text-slate-600 mt-2">Structured process for managing vendor risks throughout the entire partnership.</p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <ProcessBlock number="1" title="Identification and Classification" items={["Vendor inventory", "Criticality classification", "Risk level definition", "Service category mapping"]} />
          <ProcessBlock number="2" title="Assessment and Approval" items={["Due diligence process", "Security assessment", "Reference checks", "Approval process"]} />
          <ProcessBlock number="3" title="Contract Management" items={["Security clauses", "SLA requirements", "Audit rights", "Termination conditions"]} />
          <ProcessBlock number="4" title="Ongoing Management" items={["Regular assessments", "KRI monitoring", "Incident management", "Performance monitoring"]} />
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 border-y border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900">Assessment Criteria</h2>
        <p className="text-slate-600 mt-2">Key factors in vendor risk assessment.</p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card title="Security Level" desc="ISO 27001, SOC 2, and other certifications" />
          <Card title="Geographic Location" desc="Data location and jurisdictional risks" />
          <Card title="Organizational Maturity" desc="Governance models and process maturity" />
          <Card title="Financial Stability" desc="Creditworthiness and financial situation" />
        </div>
      </section>

      {/* Implementation Process */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">Implementation Process</h2>
        <p className="text-slate-600 mt-2">Step-by-step approach to building a TPRM system.</p>

        <div className="grid md:grid-cols-5 gap-6 mt-12">
          <StepBlock number="1" title="Inventory" desc="Vendor mapping and classification" />
          <StepBlock number="2" title="Risk Assessment" desc="Vendor-specific risk analysis" />
          <StepBlock number="3" title="Due Diligence" desc="Thorough background investigation" />
          <StepBlock number="4" title="Contract Negotiation" desc="Security requirements inclusion" />
          <StepBlock number="5" title="Ongoing Monitoring" desc="Regular risk profile updates" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Ready to build a TPRM system?</h2>
        <p className="text-slate-600 mt-3">
          Let's discuss your vendor risk needs and design an effective management model.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
          >
            Get in Touch
          </a>
          <a
            href="/consultation"
            className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-100 transition"
          >
            Book Consultation
          </a>
        </div>
      </section>

    </div>
  );
}

/* Components */
function Card({ title, desc }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

function ProcessBlock({ number, title, items }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-xl">
      <div className="text-4xl font-bold text-slate-900">{number}</div>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-1 text-slate-600">
        {items.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}

function StepBlock({ number, title, desc }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-xl">
      <div className="text-3xl font-bold text-slate-900">{number}</div>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 mt-1">{desc}</p>
    </div>
  );
}
