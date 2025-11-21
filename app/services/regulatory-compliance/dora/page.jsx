export const metadata = {
  title: "DORA Compliance | Cybersecurity.fi",
  description:
    "EU Digital Operational Resilience compliance for financial institutions — risk management, incident response, testing, and ICT provider oversight.",
};

export default function DoraCompliancePage() {
  const serviceAreas = [
    {
      title: "ICT Risk Management Framework",
      badges: ["6–9 months", "All financial entities"],
      desc: "Comprehensive ICT risk management integrated with overall operational risk.",
      points: [
        "ICT risk management policy with board oversight",
        "Risk assessment methodologies and treatment processes",
        "ICT asset inventory and dependency mapping",
        "Risk monitoring and key risk indicator frameworks",
        "Integration with business strategy and operational risk",
      ],
    },
    {
      title: "ICT-Related Incident Management",
      badges: ["4–6 months", "Mandatory for all entities"],
      desc: "24/7 incident detection, response, and regulatory reporting capabilities.",
      points: [
        "Computer security incident detection and response",
        "Incident classification and severity assessment",
        "Regulatory reporting to competent authorities",
        "Root-cause analysis and lessons learned",
        "Cross-border coordination and communication",
      ],
    },
    {
      title: "Digital Operational Resilience Testing",
      badges: ["Ongoing cycles", "TLPT for significant entities"],
      desc: "Comprehensive testing framework for ICT systems and operational processes.",
      points: [
        "Threat-led penetration testing (TLPT)",
        "Vulnerability assessments and penetration testing",
        "Scenario-based operational resilience testing",
        "Testing documentation and remediation tracking",
        "Advanced red team and purple team exercises",
      ],
    },
    {
      title: "Third-Party ICT Provider Management",
      badges: ["12–18 months", "Enhanced oversight requirements"],
      desc: "Comprehensive oversight of critical ICT service providers and supply chain.",
      points: [
        "Critical ICT service provider identification",
        "Contractual requirements aligned with DORA",
        "Continuous performance and risk monitoring",
        "Exit strategies and contingency planning",
        "Subcontracting oversight and 4th-party risk",
      ],
    },
  ];

  const applicableEntities = [
    {
      title: "Credit Institutions",
      example: ["Banks", "Credit unions", "Building societies"],
      link: "All DORA pillars apply",
    },
    {
      title: "Investment Firms",
      example: ["Investment services", "Portfolio management", "Investment advice"],
      link: "Full DORA compliance required",
    },
    {
      title: "Insurance & Reinsurance",
      example: ["Insurance companies", "Reinsurance undertakings", "Insurance intermediaries"],
      link: "Operational resilience focus",
    },
    {
      title: "Critical ICT Third-Party Providers",
      example: ["Cloud service providers", "Software providers", "Data analytics services"],
      link: "Enhanced oversight regime",
    },
  ];

  const timeline = [
    {
      id: 1,
      title: "DORA Entry into Force",
      date: "January 16, 2023",
      status: "Completed",
    },
    {
      id: 2,
      title: "Technical Standards Development",
      date: "January 17, 2024",
      status: "In Progress",
    },
    {
      id: 3,
      title: "DORA Application Date",
      date: "January 17, 2025",
      status: "Mandatory Deadline",
    },
  ];

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      {/* Hero */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        DORA Digital Operational Resilience Services
      </h1>

      <p className="text-lg text-slate-600 max-w-3xl mb-8">
        Comprehensive EU financial services cybersecurity compliance for operational resilience excellence.
      </p>

      <p className="text-slate-600 max-w-3xl mb-8">
        Expert DORA implementation for financial institutions covering ICT risk management, incident response, operational
        resilience testing, third-party management, and information sharing to ensure business continuity and regulatory
        compliance.
      </p>

      <div className="flex gap-4 mb-20">
        <a
          href="/contact"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Start DORA Assessment
        </a>

        <a
          href="/industries/financial-services"
          className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
        >
          View Financial Services
        </a>
      </div>

      {/* Service Areas */}
      <h2 className="text-3xl font-bold text-center mb-4">DORA Compliance Service Areas</h2>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
        Comprehensive support across all five DORA pillars to ensure your institution achieves digital operational resilience.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {serviceAreas.map((area) => (
          <div
            key={area.title}
            className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <div className="mb-2 flex gap-2 flex-wrap">
              {area.badges.map((b) => (
                <span
                  key={b}
                  className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md border border-indigo-200"
                >
                  {b}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">{area.title}</h3>
            <p className="text-slate-600 mb-4">{area.desc}</p>

            <ul className="space-y-1 text-slate-600">
              {area.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Applicable Entities */}
      <h2 className="text-3xl font-bold text-center mb-4">DORA Applicable Entities</h2>

      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
        Understand which organizations are subject to DORA requirements and compliance obligations.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {applicableEntities.map((e) => (
          <div
            key={e.title}
            className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-slate-900 mb-2">{e.title}</h3>

            <ul className="text-slate-600 text-sm mb-3">
              {e.example.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>

            <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">
              {e.link}
            </a>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <h2 className="text-3xl font-bold text-center mb-4">DORA Implementation Timeline</h2>

      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
        Key milestones and deadlines for DORA compliance preparation and implementation.
      </p>

      <div className="space-y-6 mb-20">
        {timeline.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-4 p-4 border border-slate-200 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                t.id === 1 ? "bg-green-500" : t.id === 2 ? "bg-blue-500" : "bg-red-500"
              }`}
            >
              {t.id}
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-slate-900">{t.title}</h4>
              <span className="text-slate-500 text-sm">{t.status}</span>
            </div>

            <div className="text-slate-700 font-medium">{t.date}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready for DORA Compliance?</h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-6">
          Ensure your financial institution meets the January 17, 2025 deadline with comprehensive digital operational resilience capabilities.
        </p>

        <a
          href="#"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Start DORA Assessment
        </a>
      </div>
    </main>
  );
}
