export const metadata = {
  title: "Regulatory Compliance | Cybersecurity.fi",
  description: "Navigate complex regulations with confidence.",
};

export default function RegulatoryCompliancePage() {
  const services = [
    {
      title: "NIS2 Compliance",
      desc: "Assess gaps, implement controls, and operationalize incident reporting to meet EU NIS2 obligations for essential and important entities.",
      href: "/services/regulatory-compliance/nis2-compliance",
    },
    {
      title: "DORA Compliance",
      desc: "Build Digital Operational Resilience with ICT risk management, testing, and incident processes aligned to DORA requirements.",
      href: "/services/regulatory-compliance/dora",
    },
    {
      title: "GDPR/Privacy Services",
      desc: "Operationalize privacy by design: data mapping, DPIAs, records of processing, and governance to demonstrate GDPR compliance.",
      href: "/services/regulatory-compliance/gdpr",
    },
    {
      title: "eIDAS/Digital Trust",
      desc: "Establish trusted digital identity, qualified signatures and seals, and assurance aligned with eIDAS and ETSI standards.",
      href: "/services/regulatory-compliance/eidas",
    },
    {
      title: "ePrivacy & Cookie Compliance",
      desc: "ePrivacy and cookie compliance: consent management, cookie audits, tracking governance.",
      href: "/services/regulatory-compliance/eprivacy",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Regulatory Compliance
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Navigate complex regulations with confidence
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
        {services.map((service) => (
          <div
            key={service.title}
            className="
              bg-white border border-slate-200 rounded-2xl p-6 shadow-sm 
              hover:shadow-lg transition-all duration-300
              hover:-translate-y-1 cursor-pointer flex flex-col
            "
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              {service.title}
            </h3>

            <p className="text-slate-600 leading-relaxed flex-grow">
              {service.desc}
            </p>

            <a
              href={service.href}
              className="mt-6 inline-flex items-center text-indigo-600 font-medium group"
            >
              Read more{" "}
              <span className="ml-1 transform group-hover:translate-x-1 transition">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
