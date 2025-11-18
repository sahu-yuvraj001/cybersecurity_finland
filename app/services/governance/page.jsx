export default function GovernanceStrategyPage() {
  const items = [
    {
      title: "Policy Governance",
      desc: "Develop and maintain a clear policy architecture with ownership, lifecycle, and compliance mapping.",
      href: "/services/governance/policy-governance",
    },
    {
      title: "Business Continuity",
      desc: "Design and operate a BCMS: BIA, continuity strategies, plans, exercises, and continual improvement.",
      href: "/services/governance/business-continuity",
    },
    {
      title: "Audit Preparation",
      desc: "Prepare for internal and external audits with evidence readiness and remediation tracking.",
      href: "/services/governance/audit-preparation",
    },
  ];

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Governance & Strategy
      </h1>
      <p className="text-lg text-slate-600 mb-12 max-w-3xl">
        Build robust security governance frameworks
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="
              p-6 bg-white border border-slate-200 rounded-xl 
              transition-all duration-300 
              hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300
            "
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 mb-3">{item.desc}</p>

            <a
              href={item.href}
              className="text-indigo-600 font-medium hover:text-indigo-800 transition"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
