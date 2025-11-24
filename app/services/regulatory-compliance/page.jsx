import Link from "next/link";

export const metadata = {
  title: "Regulatory Compliance Services | NIS2, DORA, GDPR, eIDAS, ePrivacy",
  description:
    "Comprehensive regulatory compliance services covering NIS2, DORA, GDPR, eIDAS, and ePrivacy to help organizations meet European cybersecurity and privacy requirements.",
  keywords: [
    "regulatory compliance",
    "NIS2 compliance",
    "DORA compliance",
    "GDPR services",
    "eIDAS trust services",
    "ePrivacy compliance",
    "EU cybersecurity regulation",
  ],
  openGraph: {
    title: "Regulatory Compliance Services | Cybersecurity & Privacy Standards",
    description:
      "Navigate European cybersecurity and privacy regulations with expert support across NIS2, DORA, GDPR, eIDAS, and ePrivacy.",
    url: "https://your-domain.com/services/regulatory-compliance",
    type: "article",
    images: [
      {
        url: "/og/regulatory-compliance.jpg",
        width: 1200,
        height: 630,
        alt: "Regulatory Compliance Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulatory Compliance Services",
    description:
      "Expert help with NIS2, DORA, GDPR, eIDAS, and ePrivacy compliance.",
    images: ["/og/regulatory-compliance.jpg"],
  },
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
        <h1 className="font-playfair font-playfair text-4xl md:text-5xl font-bold text-slate-900 mb-4">
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

            <Link
              href={service.href}
              className="mt-6 inline-flex items-center text-indigo-600 font-medium group"
            >
              Read more{" "}
              <span className="ml-1 transform group-hover:translate-x-1 transition">
                →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
