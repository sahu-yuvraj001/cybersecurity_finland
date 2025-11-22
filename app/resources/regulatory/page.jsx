export default function RegulatoryCenter() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Cybersecurity Regulatory Center
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Stay informed about the latest cybersecurity regulations, compliance requirements, 
          and industry standards.
        </p>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Navigate the complex landscape of cybersecurity regulations with our comprehensive 
          regulatory center. Get expert insights, compliance guides, and implementation resources.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#regulations"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition"
          >
            Explore Regulations
          </a>
          <a
            href="#help"
            className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition"
          >
            Get Compliance Help
          </a>
        </div>
      </section>

      {/* REGULATORY LANDSCAPE */}
      <section id="regulations" className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Regulatory Landscape
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Stay up-to-date with the evolving cybersecurity regulatory environment.
            Our experts monitor changes and provide actionable compliance guidance.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD TEMPLATE */}
            {[
              {
                title: "NIS2 in Finland",
                status: "Active",
                updated: "March 2024",
                desc:
                  "Comprehensive guide to the NIS2 Directive implementation in Finland, requirements, and compliance timeline.",
                points: [
                  "Applies to essential and important entities",
                  "Mandatory incident reporting within 24 hours",
                  "Risk management measures required",
                  "Penalties up to 2% of annual turnover",
                ],
              },
              {
                title: "DORA for Financial Services",
                status: "Active",
                updated: "January 2024",
                desc:
                  "Digital Operational Resilience Act requirements for financial institutions and their ICT service providers.",
                points: [
                  "Applies to all financial entities in EU",
                  "ICT risk management framework required",
                  "Incident reporting obligations",
                  "Third-party risk management",
                ],
              },
              {
                title: "GDPR and Privacy",
                status: "Active",
                updated: "December 2023",
                desc:
                  "General Data Protection Regulation compliance guide with practical implementation steps.",
                points: [
                  "Data protection by design and default",
                  "Consent management requirements",
                  "Data breach notification rules",
                  "Individual privacy rights",
                ],
              },
              {
                title: "ISO 27001 and NIS2 Alignment",
                status: "Guide",
                updated: "February 2024",
                desc:
                  "How to align ISO 27001 implementation with NIS2 compliance requirements for maximum efficiency.",
                points: [
                  "Control mapping between standards",
                  "Gap analysis methodology",
                  "Integrated implementation approach",
                  "Audit efficiency strategies",
                ],
              },
              {
                title: "eIDAS and Digital Trust",
                status: "Active",
                updated: "November 2023",
                desc:
                  "Electronic identification and trust services regulation for digital identity and signatures.",
                points: [
                  "Digital identity requirements",
                  "Qualified electronic signatures",
                  "Trust service providers",
                  "Cross-border recognition",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-600">
                    {item.status}
                  </span>
                  <span className="text-xs text-slate-500">
                    Updated: {item.updated}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.desc}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1"></span>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="mt-5 inline-block text-indigo-600 font-medium hover:underline"
                >
                  Read Full Guide →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Regulatory Services
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            We help organizations navigate complex regulatory requirements with expert guidance and practical solutions.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {/* SERVICE CARD */}
            {[
              {
                title: "Compliance Assessment",
                items: [
                  "Gap analysis and risk assessment",
                  "Compliance roadmap development",
                  "Regulatory impact analysis",
                  "Implementation planning",
                ],
              },
              {
                title: "Implementation Support",
                items: [
                  "Policy and procedure development",
                  "Control implementation",
                  "Staff training and awareness",
                  "Documentation and evidence",
                ],
              },
              {
                title: "Ongoing Monitoring",
                items: [
                  "Regulatory change monitoring",
                  "Compliance health checks",
                  "Incident response support",
                  "Audit preparation and support",
                ],
              },
            ].map((service, s) => (
              <div
                key={s}
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="help" className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold">Need Regulatory Compliance Help?</h2>
        <p className="mt-3 text-indigo-100 max-w-2xl mx-auto text-lg">
          Our regulatory experts can help you navigate complex compliance requirements 
          and implement effective solutions.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-indigo-50 transition"
        >
          Schedule Consultation
        </a>
      </section>
    </div>
  );
}
