export default function ManagedGRCServicesPage() {
  const items = [
    {
      title: "CISO-as-a-Service",
      desc: "On-demand security leadership: strategy, roadmap, metrics, and stakeholder reporting.",
      href: "/services/grc-services/ciso-as-a-service",
    },
    {
      title: "Anti-Fraud Services",
      desc: "Design and operate fraud prevention: BEC/invoice fraud controls, payment controls, detection and response.",
      href: "/services/grc-services/anti-fraud",
    },
  ];

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Managed GRC Services
      </h1>
      <p className="text-lg text-slate-600 mb-12 max-w-3xl">
        Expert-led security leadership and protection
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
