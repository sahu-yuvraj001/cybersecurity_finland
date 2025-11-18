export default function RiskAssessmentPage() {
  const items = [
    {
      title: "Risk Management",
      desc: "Design and operate risk management frameworks, registers, KRIs, and reporting to decision makers.",
      href: "/services/risk/risk-management",
    },
    {
      title: "Risk Assessments",
      desc: "Perform technical and organizational risk assessments using proven methodologies.",
      href: "/services/risk/risk-assesment",
    },
    {
      title: "Third-Party Risk",
      desc: "Establish TPRM lifecycle, due diligence, contractual controls, and continuous monitoring.",
      href: "/services/risk/third-party-risk",
    },
  ];

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Risk & Assessment Services
      </h1>
      <p className="text-lg text-slate-600 mb-12 max-w-3xl">
        Identify, assess, and manage your security risks
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
