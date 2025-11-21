import { PiCertificate } from "react-icons/pi";
export default function CertificationsPage() {
  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="w-full py-24 bg-gradient-to-b from-[#0A1437] to-[#122054] text-white text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold">Certifications and Partnerships</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg opacity-90">
          Trusted by Industry Leaders and Regulatory Bodies
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-base opacity-80">
          Our commitment to excellence is demonstrated through our certifications,
          accreditations, and partnerships with leading organizations in cybersecurity
          and compliance.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20">

        {/* SECTION TITLE */}
        <h2 className="text-3xl font-semibold text-center">Our Certifications</h2>
        <p className="text-center text-gray-600 mt-2 mb-14">
          Industry-recognized credentials and accreditations
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-8 text-center"
            >
              <div className="flex justify-center mb-5">
                <PiCertificate className="text-6xl text-purple-500"/>
              </div>

              <h3 className="text-lg font-bold">{cert.title}</h3>
              <p className="text-blue-600 font-medium text-sm">{cert.subtitle}</p>

              <p className="text-gray-600 text-sm mt-3">{cert.description}</p>

              <div className="mt-6 text-sm text-gray-700 space-y-1">
                <p><strong>Issued by:</strong> {cert.issued}</p>
                <p><strong>Valid until:</strong> {cert.valid}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* CERTIFICATIONS DATA */
const certifications = [
  {
    title: "ISO 27001:2013",
    subtitle: "Information Security Management System",
    description: "International standard for information security management systems.",
    issued: "DNV GL",
    valid: "2025-12-31",
    icon: "/icons/iso.png"
  },
  {
    title: "SOC 2 Type II",
    subtitle: "Trust Services Criteria",
    description:
      "Third-party assurance on security, availability, and confidentiality controls.",
    issued: "AICPA",
    valid: "2024-12-31",
    icon: "/icons/soc2.png"
  },
  {
    title: "Cyber Essentials Plus",
    subtitle: "UK Government Security Standard",
    description:
      "Government-backed cybersecurity certification for organizations.",
    issued: "IASME Consortium",
    valid: "2024-12-31",
    icon: "/icons/cyber-essentials.png"
  },
  {
    title: "GDPR Compliance",
    subtitle: "Data Protection Regulation",
    description:
      "Full compliance with European data protection regulations.",
    issued: "EU Commission",
    valid: "Ongoing",
    icon: "/icons/gdpr.png"
  },
  {
    title: "NIS2 Compliance",
    subtitle: "Network & Information Security Directive",
    description:
      "Compliance with European NIS2 cybersecurity requirements.",
    issued: "EU Commission",
    valid: "Ongoing",
    icon: "/icons/nis2.png"
  },
  {
    title: "DORA Compliance",
    subtitle: "Digital Operational Resilience Act",
    description:
      "Compliance with operational resilience standards for financial services.",
    issued: "EU Commission",
    valid: "Ongoing",
    icon: "/icons/dora.png"
  },
  {
    title: "eIDAS Compliance",
    subtitle: "Electronic Identification & Trust Services",
    description:
      "Compliance with electronic identification and trust service regulation.",
    issued: "EU Commission",
    valid: "Ongoing",
    icon: "/icons/eidas.png"
  },
  {
    title: "Common Criteria",
    subtitle: "Security Evaluation Standard",
    description:
      "International standard for computer security certification.",
    issued: "ISO/IEC 15408",
    valid: "2025-12-31",
    icon: "/icons/cc.png"
  }
];
