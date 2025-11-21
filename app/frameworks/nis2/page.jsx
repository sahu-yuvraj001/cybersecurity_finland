export default function NIS2Page() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="px-6 lg:px-24 py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            NIS2 Network and Information Security Directive
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl">
            EU cybersecurity compliance for critical infrastructure and essential service providers.
            Expert NIS2 Directive implementation helping Finnish organizations achieve compliance
            with enhanced cybersecurity requirements while building resilient digital infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
            >
              Start NIS2 Compliance Journey
            </a>

            <a
              href="/services/regulatory-compliance"
              className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 lg:px-24 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center">Why Choose Our NIS2 Services</h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          We deliver NIS2 compliance with Finnish market expertise, ensuring your organization meets
          EU cybersecurity requirements while maintaining business operations.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Regulatory Compliance Assurance",
              desc: "Achieve full NIS2 compliance with expert guidance through complex EU cybersecurity requirements. Avoid major penalties with our structured compliance approach.",
            },
            {
              title: "Finnish Market Specialization",
              desc: "Deep understanding of Finnish implementation, Traficom requirements, and local regulatory reporting obligations.",
            },
            {
              title: "Accelerated Implementation",
              desc: "Achieve NIS2 compliance in 12–16 weeks with a proven methodology minimizing operational disruption.",
            },
            {
              title: "24/7 Incident Response",
              desc: "Full incident detection, reporting, and response aligned with 24h / 72h / monthly EU reporting timelines.",
            },
            {
              title: "Risk-Based Security Framework",
              desc: "Risk assessments, governance, and security controls aligned with NIS2 risk-based requirements.",
            },
            {
              title: "Supply Chain Protection",
              desc: "Third-party risk management ensuring strong security alignment across the entire partner ecosystem.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-slate-200 shadow-sm bg-white"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="px-6 lg:px-24 py-20 bg-slate-50">
        <h2 className="text-3xl font-bold text-center">NIS2 Directive Requirements</h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Our NIS2 implementation covers all key requirements, ensuring comprehensive compliance
          with EU cybersecurity standards.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Cybersecurity Risk Management",
              controls: [
                "Risk analysis and security policies",
                "Incident handling & business continuity",
                "Supply chain security",
                "Secure development and system lifecycle",
                "Effectiveness assessment controls",
              ],
            },
            {
              title: "ICT-Related Incident Management",
              controls: [
                "Incident detection & response",
                "Threat monitoring and alerts",
                "24-hour initial authority notification",
                "72-hour detailed reporting",
                "Monthly updates & final report",
              ],
            },
            {
              title: "Technical & Organizational Measures",
              controls: [
                "Multi-factor authentication",
                "Encryption & secure communications",
                "Network segmentation",
                "Backup & disaster recovery",
                "Vulnerability management",
              ],
            },
            {
              title: "Third-Party ICT Provider Management",
              controls: [
                "Vendor due diligence",
                "Contractual security requirements",
                "Continuous third-party monitoring",
                "Joint incident coordination",
                "Exit & contingency planning",
              ],
            },
            {
              title: "Digital Operational Resilience Testing",
              controls: [
                "Penetration testing & vulnerability scans",
                "Security testing methodologies",
                "Testing documentation",
                "Remediation tracking",
                "TLPT for critical entities",
              ],
            },
            {
              title: "Information Sharing & Reporting",
              controls: [
                "Threat intelligence sharing",
                "Participation in EU platforms",
                "Documentation of controls",
                "Authority reporting compliance",
                "Supervisor cooperation procedures",
              ],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <ul className="space-y-2 text-slate-600">
                {item.controls.map((c) => (
                  <li key={c} className="pl-4 relative">
                    <span className="absolute left-0 top-1 text-blue-500">•</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-6 lg:px-24 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center">6-Month Implementation Roadmap</h2>
        <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
          A structured approach ensuring successful NIS2 compliance while minimizing business impact.
        </p>

        <div className="mt-12 space-y-10">
          {[
            {
              phase: "Phase 1: Scope Assessment & Legal Analysis",
              months: "Months 1–2",
              activities: [
                "NIS2 applicability & entity classification",
                "Gap analysis across all NIS2 requirements",
                "Cybersecurity posture & maturity assessment",
                "Stakeholder engagement & management alignment",
                "Risk assessment methodology creation",
                "Traficom reporting requirement analysis",
              ],
              deliverables: [
                "Legal Applicability Assessment",
                "Comprehensive Gap Analysis",
                "Current State Assessment",
                "Project Charter",
                "Risk Assessment Framework",
                "Regulatory Roadmap",
              ],
            },
            {
              phase: "Phase 2: Cybersecurity Framework Design",
              months: "Months 3–4",
              activities: [
                "Governance framework design",
                "Risk management policies",
                "Technical security control design",
                "Incident response & crisis framework",
                "Supply chain risk management",
                "Training & awareness programs",
              ],
              deliverables: [
                "Governance Charter",
                "Complete NIS2 Policy Suite",
                "Technical Control Framework",
                "Incident Response Plan",
                "Supply Chain Security Framework",
                "Awareness Program",
              ],
            },
            {
              phase: "Phase 3: Technical Implementation & Controls Deployment",
              months: "Months 5–6",
              activities: [
                "Security control implementation",
                "24/7 monitoring setup (SOC)",
                "MFA & access control deployment",
                "Network segmentation & encryption",
                "Backup & recovery setup",
                "Vulnerability management program",
              ],
              deliverables: [
                "Deployed Security Controls",
                "SOC Capabilities",
                "IAM System",
                "Network Security Architecture",
                "BCP & DR Procedures",
                "Vulnerability Program",
              ],
            },
            {
              phase: "Phase 4: Compliance Validation & Certification",
              months: "Months 7–8",
              activities: [
                "Full compliance validation",
                "Internal audit execution",
                "Incident response testing",
                "Regulatory reporting testing",
                "Staff training & validation",
                "Continuous monitoring program",
              ],
              deliverables: [
                "Validation Report",
                "Audit Results",
                "Tested Response Capabilities",
                "Reporting System",
                "Trained Staff Records",
                "Continuous Monitoring Program",
              ],
            },
          ].map((step, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{step.phase}</h3>
              <p className="text-blue-600 font-medium">{step.months}</p>

              <div className="mt-4 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Key Activities</h4>
                  <ul className="space-y-2 text-slate-600">
                    {step.activities.map((a) => (
                      <li key={a} className="pl-4 relative">
                        <span className="absolute left-0 top-1 text-blue-500">•</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Deliverables</h4>
                  <ul className="space-y-2 text-slate-600">
                    {step.deliverables.map((d) => (
                      <li key={d} className="pl-4 relative">
                        <span className="absolute left-0 top-1 text-green-500">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="px-6 lg:px-24 py-20 bg-slate-50">
        <h2 className="text-3xl font-bold text-center">Industry-Specific Success Stories</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              sector: "Energy Sector",
              challenge: "Securing critical energy infrastructure",
              solution: "Integrated OT/IT security with NIS2 controls",
              outcome: "Enhanced protection + full compliance",
            },
            {
              sector: "Financial Services",
              challenge: "Meeting FIN-FSA & NIS2 together",
              solution: "Unified compliance framework",
              outcome: "Reduced complexity + full compliance",
            },
            {
              sector: "Healthcare",
              challenge: "Protecting patient systems under GDPR & NIS2",
              solution: "Privacy-by-design security framework",
              outcome: "Improved patient data protection",
            },
          ].map((s) => (
            <div
              key={s.sector}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
            >
              <h3 className="font-semibold text-lg">{s.sector}</h3>
              <p className="text-slate-600 mt-2">
                <strong>Challenge:</strong> {s.challenge}
              </p>
              <p className="text-slate-600 mt-2">
                <strong>Our Solution:</strong> {s.solution}
              </p>
              <p className="text-slate-600 mt-2">
                <strong>Outcome:</strong> {s.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="px-6 lg:px-24 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center">Related Services</h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {[
            "ISO 27001 Implementation",
            "Risk Assessment",
            "Incident Response",
            "Business Continuity",
          ].map((service) => (
            <div
              key={service}
              className="p-5 border border-slate-200 bg-slate-50 hover:bg-slate-100 rounded-lg text-center transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="px-6 lg:px-24 py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Achieve NIS2 Compliance?</h2>
        <p className="max-w-2xl mx-auto mt-3">
          Join Finnish organizations that have successfully implemented NIS2 with our expert
          guidance. Let's discuss how we can help you meet EU cybersecurity requirements.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-slate-100"
        >
          Start Your NIS2 Journey
        </a>
      </section>
    </div>
  );
}
