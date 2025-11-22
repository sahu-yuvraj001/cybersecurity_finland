export default function FinancialServices() {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto space-y-20">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Financial Services and Fintech</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Comprehensive cybersecurity and compliance services for financial services and fintech organizations.
        </p>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Financial services and fintech organizations face unique cybersecurity challenges. We help organizations protect sensitive financial data, meet regulatory requirements, and build resilient cybersecurity.
        </p>
      </section>

      {/* Who is this for */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Who is this for?</h2>
        <p className="text-slate-600">
          Banks, insurance companies, investment services, fintech startups, and other financial service organizations looking to strengthen their cybersecurity and meet regulatory requirements.
        </p>
      </section>

      {/* What will you achieve */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">What will you achieve?</h2>
        <p className="text-slate-600">
          DORA compliance, stronger anti-fraud protection, ISO 27001 certification, and resilient cybersecurity.
        </p>
      </section>

      {/* Key Challenges */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-900">Key Challenges</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "DORA Compliance",
              desc: "Meeting EU Digital Operational Resilience Act requirements",
            },
            {
              title: "PCI DSS Compliance",
              desc: "Meeting Payment Card Industry Data Security Standards",
            },
            {
              title: "Anti-Fraud Measures",
              desc: "Advanced fraud detection and prevention systems",
            },
            {
              title: "Third-Party Risks",
              desc: "Managing cybersecurity risks from vendors and partners",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white border rounded-2xl shadow-sm space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Solutions */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-900">Our Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "DORA Program",
              desc: "Comprehensive DORA compliance program for financial services",
            },
            {
              title: "ISO 27001 Certification",
              desc: "Information security management system certification for financial services",
            },
            {
              title: "Fraud Risk Assessment",
              desc: "Comprehensive fraud risk assessment and management system",
            },
            {
              title: "Risk Management",
              desc: "Comprehensive risk management system for financial services",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white border rounded-2xl shadow-sm space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-900">Benefits</h2>
        <ul className="space-y-3 text-slate-600 list-disc pl-5">
          <li>Meet DORA and other regulatory requirements</li>
          <li>Protect customer financial data</li>
          <li>Strengthen anti-fraud measures</li>
          <li>Enhance customer trust</li>
          <li>Strengthen cybersecurity resilience</li>
        </ul>
      </section>
    </div>
  );
}
