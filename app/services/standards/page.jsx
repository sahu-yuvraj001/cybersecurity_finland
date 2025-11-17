export default function StandardsPage() {
  const items = [
    {
      title: "ISO 27001 Services",
      desc: "Gap analysis, ISMS build, internal audit, and end-to-end certification readiness support.",
    },
    {
      title: "ISO 27701 (PIMS)",
      desc: "Extend ISMS to privacy; GDPR-aligned certification readiness.",
    },
    {
      title: "ISO 27017/27018",
      desc: "Cloud security and PII protection controls for CSPs/customers.",
    },
    {
      title: "ISO 22301",
      desc: "Business continuity management, exercises, and certification readiness.",
    },
    {
      title: "ISO/IEC 20000-1",
      desc: "IT service management alignment for MSSP processes and SLAs.",
    },
    {
      title: "SOC 2 Readiness",
      desc: "Map controls to Trust Services Criteria, collect evidence, and prepare for Type I/II audits.",
    },
    {
      title: "CSA STAR (Levels 1–3)",
      desc: "Self-assessment, ISO 27001 integration, continuous assurance.",
    },
    {
      title: "Common Criteria",
      desc: "Security Targets, Protection Profiles, and evaluation guidance for Common Criteria certification.",
    },
    {
      title: "SOC 1 / ISAE 3402",
      desc: "Controls for financial reporting; evidence and auditor support.",
    },
    {
      title: "ISAE 3000 Assurance",
      desc: "Independent attestation over security/privacy control suites.",
    },
    {
      title: "TISAX (Automotive)",
      desc: "Scope definition, assessment support, and label attainment.",
    },
    {
      title: "BSI C5 (Cloud)",
      desc: "Control mapping, testing, and attestation reporting.",
    },
    {
      title: "IEC 62443 (OT/ICS)",
      desc: "Maturity assessments and remediation for industrial systems.",
    },
    {
      title: "Cyber Essentials / Plus",
      desc: "Rapid hardening, testing, and certification preparation.",
    },
    {
      title: "CMMC / NIST 800-171",
      desc: "Gap analysis, SPRS scoring, POA&M, enclave strategies.",
    },
    {
      title: "HITRUST CSF",
      desc: "Readiness, control mapping, and validated assessment support.",
    },
    {
      title: "DPO/Privacy Office-as-a-Service",
      desc: "Outsourced DPO; DPIAs, RoPAs, privacy governance, and breach liaison.",
    },
    {
      title: "CISO-as-a-Service",
      desc: "Virtual CISO; strategy, roadmap, metrics, stakeholder reporting.",
    },
    {
      title: "Compliance-as-a-Service",
      desc: "Compliance Manager; ISMS/BCMS operation, evidence, audits, attestations.",
    },
    {
      title: "GRC Platform Managed Service",
      desc: "GRC Platform Admin; workflows, integrations, reporting, user support.",
    },
    {
      title: "ISO 27001 Implementation & Auditing",
      desc: "ISMS Manager/Internal Auditor; scope and risk, SoA, control implementation, evidence, internal audits, certification support.",
    },
    {
      title: "Anti-Fraud Services",
      desc: "Head of Fraud/Risk; BEC/invoice controls, detection, response.",
    },
  ];

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Standards & Certifications
      </h1>
      <p className="text-lg text-slate-600 mb-12 max-w-3xl">
        Achieve industry-recognized security standards
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 mb-3">{item.desc}</p>

            <a
              href="#"
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
