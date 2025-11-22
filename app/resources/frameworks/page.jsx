export default function RegulatoryFrameworks() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Regulatory Frameworks
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Comprehensive collection of key cybersecurity regulations and standards.
              Detailed implementation guides and compliance support.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#frameworks"
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition"
              >
                Browse Regulations
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition"
              >
                Get Expert Help
              </a>
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600">6+</p>
                <p className="text-sm text-slate-600">Major regulations</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600">100+</p>
                <p className="text-sm text-slate-600">Requirements covered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600">25+</p>
                <p className="text-sm text-slate-600">Industries supported</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600">98%</p>
                <p className="text-sm text-slate-600">Compliance success rate</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            {/* local image you uploaded (developer asked to include the path) */}
            <img
              src="/regulatory.png"
              alt="Regulatory frameworks visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Implementation Process</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Five-phase methodology for successful implementation of regulations and standards.
        </p>

        <div className="mt-8 grid md:grid-cols-5 gap-6">
          {[
            "Current state assessment",
            "Requirements analysis",
            "Implementation planning",
            "Practical implementation",
            "Audit and certification",
          ].map((s, i) => (
            <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-3">{i + 1}</div>
              <p className="font-semibold text-slate-800">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORTED FRAMEWORKS */}
      <section id="frameworks" className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Supported Regulatory Frameworks</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Comprehensive support for key cybersecurity regulations and standards.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "EU",
                active: "2024-10-17",
                title: "NIS2 Directive",
                desc: "European Union Network and Information Security Directive v2",
                requirements: [
                  "Cybersecurity risk management",
                  "Incident reporting",
                  "Supply chain security",
                  "Staff training",
                ],
                sectors: ["Energy", "Transport", "Banking", "Health", "Digital Infrastructure"],
              },
              {
                region: "EU",
                active: "2025-01-17",
                title: "DORA Regulation",
                desc: "Digital Operational Resilience Act for financial sector",
                requirements: [
                  "ICT risk management",
                  "Third-party risk management",
                  "Digital operational resilience",
                  "Testing and exercises",
                ],
                sectors: ["Banking", "Insurance", "Investment", "Payment Services"],
              },
              {
                region: "EU + Global",
                active: "2018-05-25",
                title: "GDPR Regulation",
                desc: "General Data Protection Regulation for personal data processing",
                requirements: [
                  "Data protection impact assessments",
                  "Personal data protection",
                  "Data breach notification",
                  "Individual rights",
                ],
                sectors: ["All sectors processing personal data"],
              },
              {
                region: "EU",
                active: "2016-07-01",
                title: "eIDAS Regulation",
                desc: "Electronic identification and trust services",
                requirements: [
                  "Electronic signatures",
                  "Electronic sealed documents",
                  "Time stamping",
                  "Authentication services",
                ],
                sectors: ["Digital Services", "Public Services", "E-commerce"],
              },
              {
                region: "Global",
                active: "Ongoing",
                title: "ISO 27001",
                desc: "International information security management system standard",
                requirements: [
                  "Information security policy",
                  "Risk assessment process",
                  "Security controls",
                  "Continuous improvement",
                ],
                sectors: ["All sectors"],
              },
              {
                region: "Global",
                active: "Ongoing",
                title: "SOC 2",
                desc: "Service organization control auditing",
                requirements: ["Security", "Availability", "Processing Integrity", "Confidentiality"],
                sectors: ["SaaS", "Cloud Services", "Data Centers"],
              },
            ].map((f, idx) => (
              <article
                key={idx}
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-500">{f.region} • Active: {f.active}</div>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">{f.title}</h3>
                      <p className="mt-2 text-slate-600">{f.desc}</p>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-slate-500">Key requirements</div>
                    </div>
                  </div>

                  <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                    {f.requirements.map((r, i2) => (
                      <li key={i2} className="flex items-start gap-3">
                        <span className="mt-1 inline-block w-2 h-2 rounded-full bg-indigo-600" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 text-sm text-slate-500">
                    <strong className="text-slate-700">Sectors:</strong> {f.sectors.join(", ")}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href="#"
                    className="px-4 py-2 text-sm border border-indigo-600 text-indigo-700 rounded-lg hover:bg-indigo-50 transition"
                  >
                    Learn More
                  </a>
                  <a
                    href="#contact"
                    className="text-sm text-slate-600 hover:text-slate-800 transition"
                  >
                    Request Support
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Start Your Compliance Journey</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Contact our experts and get a tailored implementation plan.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition"
            >
              Contact Us
            </a>
            <a
              href="/demo"
              className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
