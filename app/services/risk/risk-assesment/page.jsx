export default function RiskAssessments() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">
          Risk Assessments
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Perform balanced technical and organizational risk assessments with clear, prioritized outcomes.
        </p>

        <div className="mt-8 p-6 bg-slate-100 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-semibold text-slate-900">What you get</h2>
          <p className="text-slate-600 mt-2">
            A clear view of your organization's risks and a prioritized action plan to address them.
            Assessments based on industry best practices with practical outcomes.
          </p>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">Assessment Types</h2>
        <p className="text-slate-600 mt-2">
          Comprehensive risk assessments across all organizational areas.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Card title="Technical Risk Assessments" desc="Security risks in systems, networks and applications" />
          <Card title="Organizational Assessments" desc="Risk assessments of processes, personnel and operations" />
          <Card title="Vendor Assessments" desc="Third-party services and vendor assessments" />
          <Card title="Security Audits" desc="Comprehensive information security compliance assessments" />
        </div>
      </section>

      {/* Used Methodologies */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 border-y border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900">Used Methodologies</h2>
        <p className="text-slate-600 mt-2">
          We utilize industry-leading and internationally recognized risk assessment methodologies.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <Card title="ISO 27005" desc="International standard for information security risk management" />
          <Card title="NIST Framework" desc="NIST Cybersecurity Framework-based assessment" />
          <Card title="FAIR Model" desc="Factor Analysis of Information Risk methodology" />
          <Card title="OCTAVE" desc="Operationally Critical Threat, Asset, and Vulnerability Evaluation" />
        </div>
      </section>

      {/* Assessment Scope */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">Assessment Scope</h2>
        <p className="text-slate-600 mt-2">
          Three-dimensional approach to comprehensive risk assessment.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <ProcessBlock
            number="1"
            title="Technical Assessment"
            items={[
              "Vulnerability scans",
              "Penetration testing",
              "Configuration reviews",
              "Network security",
            ]}
          />
          <ProcessBlock
            number="2"
            title="Process Assessment"
            items={[
              "Policy review",
              "Process documentation",
              "Control testing",
              "Compliance assessment",
            ]}
          />
          <ProcessBlock
            number="3"
            title="Personnel Assessment"
            items={[
              "Training needs assessment",
              "Awareness testing",
              "Access rights review",
              "Social engineering",
            ]}
          />
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 border-y border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900">Deliverables</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card title="Risk Assessment Report" desc="Comprehensive report of identified risks and recommendations" />
          <Card title="Risk Prioritization" desc="Risks prioritized by impact and likelihood" />
          <Card title="Remediation Plan" desc="Detailed plan for risk treatment" />
          <Card title="Timeline & Tracking" desc="Implementation timeline and progress tracking model" />
        </div>
      </section>

      {/* Assessment Process */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">Assessment Process</h2>
        <p className="text-slate-600 mt-2">
          Systematic and documented approach to effective risk assessment.
        </p>

        <div className="grid md:grid-cols-5 gap-6 mt-12">
          <StepBlock number="1" title="Scope Definition" desc="Assessment target and boundary definition" />
          <StepBlock number="2" title="Data Collection" desc="Systems, processes and documentation mapping" />
          <StepBlock number="3" title="Risk Identification" desc="Threat, vulnerability and risk identification" />
          <StepBlock number="4" title="Risk Analysis" desc="Risk probability and impact assessment" />
          <StepBlock number="5" title="Reporting" desc="Results reporting and recommendations" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Need a risk assessment?</h2>
        <p className="text-slate-600 mt-3">
          Let's discuss your assessment needs and plan an appropriate approach.
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
