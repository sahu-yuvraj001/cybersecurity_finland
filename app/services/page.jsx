export default function ServicesSection() {
  const services = [
    {
      title: "Compliance Frameworks",
      desc: "Transform regulatory requirements into business advantages.",
      points: [
        "ISO 27001 Implementation & Certification Support",
        "SOC 2 Type I & Type II Readiness Programs",
        "GDPR/Privacy Compliance & Data Protection",
        "NIS2 Directive Implementation & Ongoing Compliance",
        "DORA (Digital Operational Resilience Act) for Financial Services",
        "Common Criteria Evaluation & Certification Support"
      ],
    },
    {
      title: "Risk Management",
      desc: "Identify, assess, and mitigate cybersecurity risks systematically.",
      points: [
        "Comprehensive Risk Assessments & Management Programs",
        "Third-Party Risk Management (TPRM) & Vendor Security",
        "Business Continuity & Crisis Management Planning",
        "Threat Modeling & Key Risk Indicator (KRI) Development"
      ],
    },
    {
      title: "Governance & Policy",
      desc: "Establish robust cybersecurity governance frameworks.",
      points: [
        "Cybersecurity Policy Development & Implementation",
        "CISO-as-a-Service & Strategic Security Leadership",
        "Security Governance Framework Design & Implementation",
        "Board-Level Risk Reporting & Executive Briefings"
      ],
    },
    {
      title: "Specialized Services",
      desc: "Expert services for specific cybersecurity needs.",
      points: [
        "Anti-Fraud Services & Financial Crime Prevention",
        "eIDAS/Digital Trust Advisory & Implementation",
        "Audit Preparation & Support Services",
        "Lead Auditor Services & Independent Assessments"
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Complete Cybersecurity & Compliance Services
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Your trusted partner for navigating complex regulatory requirements and building robust security frameworks.
        </p>

        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          At Cybersecurity.fi, we understand every organization faces unique cybersecurity challenges.
          Our service portfolio ensures you have expert support for every aspect of your security and compliance journey.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="mt-2 text-gray-500">{item.desc}</p>

            <ul className="mt-4 space-y-2">
              {item.points.map((point, i) => (
                <li key={i} className="text-gray-600 text-sm flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition">
          Get a Free Assessment
        </button>
      </div>
    </section>
  );
}
