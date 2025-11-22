export default function RiskManagement() {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">
          Risk Management
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Establish a practical risk framework, registers, KRIs, and governance that guide security decisions.
        </p>

        <div className="mt-8 p-6 bg-slate-100 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-semibold text-slate-900">
            What you get
          </h2>
          <p className="text-slate-600 mt-2">
            A comprehensive risk management system that guides decision-making and ensures your organization
            focuses on the right risks in the right order.
          </p>
        </div>
      </section>

      {/* Risk Management Components */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">
          Risk Management Components
        </h2>
        <p className="text-slate-600 mt-2">
          Comprehensive approach to risk management across all organizational levels.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Card title="Risk Framework" desc="ISO 27005/NIST-based risk management framework" />
          <Card title="Risk Register" desc="Centralized risk register with tracking and reporting" />
          <Card title="KRI Metrics" desc="Key Risk Indicator monitoring and alerting" />
          <Card title="Governance Model" desc="Roles, responsibilities and decision-making processes" />
        </div>
      </section>

      {/* Risk Types */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 border-y border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900">Risk Types</h2>
        <p className="text-slate-600 mt-2">
          We cover all key risk categories in your organization.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Card title="Cybersecurity Risks" desc="Technology risks, vulnerabilities and cyber threats" />
          <Card title="Operational Risks" desc="Process, personnel and operational risks" />
          <Card title="Third-Party Risks" desc="Vendor, partner and supply chain risks" />
          <Card title="Regulatory Risks" desc="Compliance risks and regulatory changes" />
        </div>
      </section>

      {/* Risk Management Process */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">Risk Management Process</h2>
        <p className="text-slate-600 mt-2">
          Structured approach to risk management throughout the entire lifecycle.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <ProcessBlock
            number="1"
            title="Identification"
            items={[
              "Threat mapping",
              "Vulnerability analysis",
              "Impact analysis",
              "Risk scenario development",
            ]}
          />
          <ProcessBlock
            number="2"
            title="Assessment"
            items={[
              "Probability assessment",
              "Impact assessment",
              "Risk classification",
              "Priority ranking",
            ]}
          />
          <ProcessBlock
            number="3"
            title="Treatment"
            items={[
              "Control design",
              "Risk acceptance",
              "Risk transfer",
              "Risk avoidance",
            ]}
          />
          <ProcessBlock
            number="4"
            title="Monitoring"
            items={[
              "KRI monitoring",
              "Regular reviews",
              "Executive reporting",
              "Continuous improvement",
            ]}
          />
        </div>
      </section>

      {/* Implementation Process */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 border-t border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900">
          Implementation Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6 mt-12">
          <StepBlock number="1" title="Framework Design" desc="Risk framework and methodology definition" />
          <StepBlock number="2" title="Risk Identification" desc="Comprehensive risk mapping and documentation" />
          <StepBlock number="3" title="Assessment & Prioritization" desc="Risk assessment and priority ranking" />
          <StepBlock number="4" title="Control Design" desc="Risk treatment approach design" />
          <StepBlock number="5" title="Implementation & Monitoring" desc="KRI metrics and monitoring" />
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
