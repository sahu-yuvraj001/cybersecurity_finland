import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <div className="w-full py-24 bg-gradient-to-b from-[#0A1437] to-[#122054] text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Team and Certifications</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
          Meet our expert cybersecurity professionals delivering compliance, risk management,
          and advanced security solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">

        {/* SECTION TITLE */}
        <h2 className="text-3xl font-semibold text-center">Leadership Team</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Experienced professionals leading our mission
        </p>

        {/* TEAM GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* CARD */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M12 12c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z"></path>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{member.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <h2 className="text-3xl font-semibold text-center mt-20">Professional Certifications</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Our team maintains the highest industry standards
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {certGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.certs.map((c, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 text-sm rounded-full bg-gray-100 text-gray-800 border"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AREAS OF EXPERTISE */}
        <h2 className="text-3xl font-semibold text-center mt-20">Areas of Expertise</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Comprehensive cybersecurity knowledge across multiple domains
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="w-full mt-24 bg-linear-to-r from-blue-600 to-blue-700 text-white text-center py-16 rounded-3xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Work with Our Expert Team?</h2>
          <p className="max-w-xl mx-auto mt-3 text-lg opacity-90">
            Let’s discuss how our certified professionals can help secure your organization.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/methodology"
              className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-xl shadow hover:bg-blue-950 transition"
            >
              Learn About Our Methodology
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/* DATA — clean & separate for readability */
const teamMembers = [
  {
    title: "Chief Executive Officer & Founder",
    description:
      "Brings over 15 years of cybersecurity expertise with deep knowledge in compliance, ISO frameworks, and strategic risk management. Former CISO with certifications including CISSP, CISA, CRISC, ISO 27001 Lead Auditor."
  },
  {
    title: "Chief Technology Officer",
    description:
      "Former CISO with advanced technical skills in threat assessment, cloud security, and penetration testing. Holds CISSP, CEH, OSCP, AWS Security, and Azure Security certifications."
  },
  {
    title: "Compliance Director",
    description:
      "EU regulatory compliance expert with experience in NIS2, GDPR, and DORA frameworks. Certified CIPP/E, CIPM, ISO 27001 Lead Implementer, and NIS2 Expert."
  },
  {
    title: "Senior Security Consultant",
    description:
      "Former Big 4 auditor specializing in SOC 2 preparation, audit readiness, and security assessments. Certified CISA, CRISC, SOC 2 Practitioner, ISO 27001 Lead Auditor."
  },
  {
    title: "Head of Risk Management",
    description:
      "Expert in enterprise risk management and ISO 31000/22301 frameworks. Holds CRISC, ISO 31000 Risk Manager, and ISO 22301 Lead Implementer certifications."
  },
  {
    title: "Technical Security Lead",
    description:
      "Cloud security specialist across AWS, Azure, and Google Cloud. Skilled in DevSecOps and cloud architectures. Certifications include CCSP, AWS/Azure Security, Google Cloud Security."
  }
];

const certGroups = [
  {
    category: "Information Security",
    certs: ["CISSP", "CISM", "CISA", "CCSP", "SSCP"]
  },
  {
    category: "Risk Management",
    certs: ["CRISC", "ISO 31000 Risk Manager", "ISO 27005 Risk Manager"]
  },
  {
    category: "Compliance & Audit",
    certs: ["ISO 27001 Lead Auditor", "ISO 27001 Lead Implementer", "SOC 2 Practitioner"]
  },
  {
    category: "Privacy & Data Protection",
    certs: ["CIPP/E", "CIPM", "CIPT", "GDPR Practitioner"]
  },
  {
    category: "Technical Security",
    certs: ["CEH", "OSCP", "OSCE", "GPEN", "GXPN"]
  },
  {
    category: "Cloud Security",
    certs: ["AWS Security", "Azure Security", "Google Cloud Security", "CCSP"]
  }
];

const expertise = [
  {
    icon: "🛡️",
    title: "Compliance",
    subtitle: "ISO 27001, NIS2, DORA, GDPR, SOC 2"
  },
  {
    icon: "⚡",
    title: "Risk Management",
    subtitle: "Assessment, mitigation, monitoring"
  },
  {
    icon: "💻",
    title: "Technical Security",
    subtitle: "Architecture, testing, implementation"
  },
  {
    icon: "📘",
    title: "Consulting",
    subtitle: "Security strategy & advisory"
  }
];
