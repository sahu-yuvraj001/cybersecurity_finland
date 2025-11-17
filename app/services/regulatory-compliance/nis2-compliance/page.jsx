import Link from "next/link";

export const metadata = {
  title: "NIS2 Compliance Services | Cybersecurity.fi",
  description:
    "Expert NIS2 compliance guidance for essential and important entities — gap analysis, risk management, incident reporting and technical controls.",
};

export default function NIS2CompliancePage() {
  const serviceAreas = [
    {
      title: "NIS2 Gap Assessment & Scoping",
      bullets: [
        "Entity classification (Essential vs Important services)",
        "Detailed gap analysis against all NIS2 requirements",
        "Risk assessment and threat landscape analysis",
        "Implementation roadmap with prioritized actions",
        "Resource planning and budget estimation",
      ],
    },
    {
      title: "Cybersecurity Risk Management Framework",
      bullets: [
        "Risk management policies and procedures",
        "ICT asset inventory and classification",
        "Supply chain security framework",
        "Business continuity and crisis management",
        "Regular risk assessment and monitoring processes",
      ],
    },
    {
      title: "Incident Response & Reporting System",
      bullets: [
        "24/7 security monitoring and detection",
        "Incident classification and severity assessment",
        "Regulatory reporting to Traficom within required timeframes",
        "Crisis communication and escalation procedures",
        "Recovery and lessons learned processes",
      ],
    },
    {
      title: "Technical Security Controls Implementation",
      bullets: [
        "Multi-factor authentication and access controls",
        "Network security and segmentation",
        "Encryption and data protection measures",
        "Backup and disaster recovery systems",
        "Vulnerability management and security testing",
      ],
    },
  ];

  const timeline = [
    {
      step: 1,
      title: "NIS2 Directive Entry into Force",
      date: "January 16, 2023",
      desc: "EU NIS2 Directive officially entered into force",
      color: "bg-green-500",
    },
    {
      step: 2,
      title: "National Implementation Deadline",
      date: "October 17, 2024",
      desc: "EU Member States must transpose directive into national law",
      color: "bg-blue-500",
    },
    {
      step: 3,
      title: "Entity Compliance Deadline",
      date: "October 17, 2024",
      desc: "Organizations must be fully compliant with NIS2 requirements",
      color: "bg-red-500",
    },
  ];

  const penalties = [
    { title: "Administrative Fines", text: "Up to €10 million or 2% of annual turnover", color: "bg-red-50 border-red-100 text-red-700" },
    { title: "Management Liability", text: "Personal sanctions for senior management", color: "bg-red-50 border-red-100 text-red-700" },
    { title: "Operational Sanctions", text: "Suspension of services", color: "bg-red-50 border-red-100 text-red-700" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li>/</li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li>/</li>
                <li className="text-slate-700">NIS2 Compliance</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              NIS2 Compliance Services
            </h1>

            <p className="text-lg text-slate-600 mb-6 max-w-2xl">
              Expert NIS2 compliance guidance for essential and important entities. Professional services to help organizations meet EU cybersecurity requirements through comprehensive risk management, technical controls, and regulatory reporting.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center px-5 py-3 bg-slate-900 text-white rounded-md shadow hover:bg-slate-800 transition">
                Start NIS2 Assessment
              </Link>
              <Link href="/resources/nis2-framework" className="inline-flex items-center px-5 py-3 border border-slate-200 text-slate-800 rounded-md hover:bg-slate-50 transition">
                View NIS2 Framework
              </Link>
            </div>
          </div>

          {/* Illustration placeholder */}
          <div className="rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-8 flex items-center justify-center">
            {/* Replace with actual SVG / animation */}
            <div className="w-full max-w-md h-56 bg-[url('/images/nis2-illustration.svg')] bg-center bg-no-repeat bg-contain" />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-slate-900 text-center mb-3">NIS2 Compliance Service Areas</h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-8">Comprehensive support across all NIS2 requirements to ensure your organization achieves and maintains compliance while building cybersecurity resilience.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {serviceAreas.map((s) => (
              <article key={s.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 mb-3 font-medium">Key Deliverables</p>
                <ul className="text-slate-600 list-disc list-inside space-y-1">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="text-sm">{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-slate-900 text-center mb-4">NIS2 Compliance Timeline</h2>
          <p className="text-center text-slate-600 mb-8">Key dates and milestones for NIS2 implementation and compliance requirements.</p>

          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.step} className="flex items-start gap-4 bg-white border border-slate-100 rounded-lg p-4 shadow-sm">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${t.color}`}>{t.step}</div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-md font-semibold text-slate-900">{t.title}</h3>
                    <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{t.date}</span>
                  </div>
                  <p className="text-slate-600 text-sm mt-2">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-slate-900 text-center mb-6">NIS2 Penalties & Sanctions</h2>
          <p className="text-center text-slate-600 mb-8">Understanding the potential consequences of non-compliance with NIS2 requirements.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {penalties.map((p) => (
              <div key={p.title} className={`p-6 rounded-lg border ${p.color} shadow-sm`}>
                <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                <p className="text-slate-700 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to Achieve NIS2 Compliance?</h3>
          <p className="text-slate-600 mb-6">Don't wait until the deadline. Start your NIS2 compliance journey today with expert Finnish regulatory guidance and proven implementation methodologies.</p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-md shadow hover:bg-slate-800 transition">Start NIS2 Assessment</Link>
        </div>
      </section>

      {/* Footer small */}
      <footer className="border-t border-slate-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h4 className="font-semibold text-slate-900">Cyber Security Finland</h4>
              <p className="mt-2">Comprehensive cybersecurity and compliance solutions tailored for Finland and the EU region.</p>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="font-medium text-slate-900">Contact</p>
                <p className="mt-1">info@cybersecurity.fi</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Phone</p>
                <p className="mt-1">+358 44 5040308</p>
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-400 mt-6">© {new Date().getFullYear()} Cyber Security Finland. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
