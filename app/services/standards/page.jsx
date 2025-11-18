export default function StandardsPage() {
 const items = [
  {
    title: "ISO 27001 Services",
    desc: "Gap analysis, ISMS build, internal audit, and end-to-end certification readiness support.",
    href: "/services/standards/iso-27001-services",
  },
  {
    title: "ISO 27701 (PIMS)",
    desc: "Extend ISMS to privacy; GDPR-aligned certification readiness.",
    href: "/services/standards/iso-27701-pims",
  },
  {
    title: "ISO 27017/27018",
    desc: "Cloud security and PII protection controls for CSPs/customers.",
    href: "/services/standards/iso-27017",
  },
  {
    title: "ISO 22301",
    desc: "Business continuity management, exercises, and certification readiness.",
    href: "/services/standards/iso-22301",
  },
  {
    title: "ISO/IEC 20000-1",
    desc: "IT service management alignment for MSSP processes and SLAs.",
    href: "/services/standards/iso-iec-20000-1",
  },
  {
    title: "SOC 2 Readiness",
    desc: "Map controls to Trust Services Criteria, collect evidence, and prepare for Type I/II audits.",
    href: "/services/standards/soc-2-readiness",
  },
  {
    title: "CSA STAR (Levels 1–3)",
    desc: "Self-assessment, ISO 27001 integration, continuous assurance.",
    href: "/services/standards/csa-star",
  },
  {
    title: "Common Criteria",
    desc: "Security Targets, Protection Profiles, and evaluation guidance.",
    href: "/services/standards/common-criteria",
  },
  {
    title: "SOC 1 / ISAE 3402",
    desc: "Controls for financial reporting; evidence and auditor support.",
    href: "/services/standards/soc-1-isae-3402",
  },
  {
    title: "ISAE 3000 Assurance",
    desc: "Independent attestation over security/privacy control suites.",
    href: "/services/standards/isae-3000-assurance",
  },
  {
    title: "TISAX (Automotive)",
    desc: "Scope definition, assessment support, and label attainment.",
    href: "/services/standards/tisax-automotive",
  },
  {
    title: "BSI C5 (Cloud)",
    desc: "Control mapping, testing, and attestation reporting.",
    href: "/services/standards/bsi-c5-cloud",
  },
  {
    title: "IEC 62443 (OT/ICS)",
    desc: "Maturity assessments and remediation for industrial systems.",
    href: "/services/standards/iec-62443-ot-ics",
  },
  {
    title: "Cyber Essentials / Plus",
    desc: "Rapid hardening, testing, and certification preparation.",
    href: "/services/standards/cyber-essentials-plus",
  },
  {
    title: "CMMC / NIST 800-171",
    desc: "Gap analysis, SPRS scoring, POA&M, enclave strategies.",
    href: "/services/standards/cmmc-nist-800-171",
  },
  {
    title: "HITRUST CSF",
    desc: "Readiness, control mapping, and validated assessment support.",
    href: "/services/standards/hitrust-csf",
  },
  {
    title: "DPO/Privacy Office-as-a-Service",
    desc: "Outsourced DPO; DPIAs, RoPAs, privacy governance, and breach liaison.",
    href: "/services/standards/dpo-privacy-office",
  },
  {
    title: "CISO-as-a-Service",
    desc: "Virtual CISO; strategy, roadmap, metrics, stakeholder reporting.",
    href: "/services/standards/ciso-as-a-service",
  },
  {
    title: "Compliance-as-a-Service",
    desc: "Compliance Manager; ISMS/BCMS operation, evidence, audits, attestations.",
    href: "/services/standards/compliance-as-a-service",
  },
  {
    title: "GRC Platform Managed Service",
    desc: "Workflows, integrations, reporting, user support.",
    href: "/services/standards/grc-platform-managed-service",
  },
  {
    title: "ISO 27001 Implementation & Auditing",
    desc: "ISMS Manager/Internal Auditor; scope, risk, SoA, audits.",
    href: "/services/standards/iso-27001-implementation-auditing",
  },
  {
    title: "Anti-Fraud Services",
    desc: "BEC/invoice controls, detection, response.",
    href: "/services/standards/anti-fraud-services",
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
