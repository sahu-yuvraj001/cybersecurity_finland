import Link from "next/link";

export default function MethodologyPage() {
  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="w-full py-24 bg-linear-to-b from-[#0A1437] to-[#122054] text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Methodology</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
          Proven Approach to Cybersecurity Excellence
        </p>
        <p className="mt-3 max-w-3xl mx-auto text-base opacity-80">
          Our systematic methodology combines best practices with real-world experience to deliver measurable,
          sustainable improvements in cybersecurity and compliance.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">

        {/* OUR APPROACH */}
        <h2 className="text-3xl font-semibold text-center">Our Approach</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Systematic and results-driven methodology
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {approachItems.map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* IMPLEMENTATION PHASES */}
        <h2 className="text-3xl font-semibold text-center mt-20">Implementation Phases</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Structured approach to achieving your security goals
        </p>

        <div className="flex flex-col gap-10">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl shadow-md border border-gray-100"
            >
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{phase.description}</p>
                  </div>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 h-fit">
                  {phase.timeline}
                </span>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {phase.activities.map((a, idx2) => (
                  <p key={idx2} className="text-blue-600 text-sm flex items-center gap-2">
                    ● <span className="text-gray-700">{a}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FRAMEWORK INTEGRATION */}
        <h2 className="text-3xl font-semibold text-center mt-20">Framework Integration</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Seamlessly integrate multiple compliance standards
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {frameworks.map((fw, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{fw.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{fw.description}</p>
              <div className="space-y-2">
                {fw.benefits.map((b, idx2) => (
                  <p key={idx2} className="text-green-600 text-sm flex items-center gap-2">
                    ● <span className="text-gray-700">{b}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TOOLS & TECHNOLOGIES */}
        <h2 className="text-3xl font-semibold text-center mt-20">Tools and Technologies</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          Leverage cutting-edge solutions for optimal results
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border shadow-md">
              <h4 className="text-lg font-semibold mb-3">{tool.category}</h4>
              <div className="space-y-2">
                {tool.items.map((t, idx2) => (
                  <p key={idx2} className="text-blue-600 text-sm flex items-center gap-2">
                    ● <span className="text-gray-700">{t}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="w-full mt-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-16 rounded-3xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Implement Our Methodology?</h2>
          <p className="max-w-xl mx-auto mt-3 text-lg opacity-90">
            Let’s discuss how our systematic approach can transform your security posture.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/about/certifications"
              className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-xl shadow hover:bg-blue-950 transition"
            >
              View Our Certifications
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/* DATA ARRAYS */
const approachItems = [
  {
    icon: "📘",
    title: "Evidence-Based",
    description: "Grounded in research, best practices, and real-world experience."
  },
  {
    icon: "⚡",
    title: "Risk-Focused",
    description: "Security measures based on real business risk exposure."
  },
  {
    icon: "♻️",
    title: "Continuous Improvement",
    description: "Ongoing monitoring, assessment, and enhancement."
  }
];

const phases = [
  {
    number: "1",
    title: "Assessment & Discovery",
    description:
      "Comprehensive evaluation of security posture, risks, and compliance gaps.",
    timeline: "2–4 weeks",
    activities: [
      "Security maturity assessment",
      "Risk identification",
      "Gap analysis",
      "Stakeholder interviews"
    ]
  },
  {
    number: "2",
    title: "Strategy & Planning",
    description:
      "Develop security strategy aligned with business objectives.",
    timeline: "2–3 weeks",
    activities: [
      "Security roadmap creation",
      "Resource planning",
      "Timeline development",
      "Success metrics definition"
    ]
  },
  {
    number: "3",
    title: "Implementation & Execution",
    description:
      "Implementation of controls, policies, and procedures.",
    timeline: "8–16 weeks",
    activities: [
      "Control implementation",
      "Policy development",
      "Training delivery",
      "Process documentation"
    ]
  },
  {
    number: "4",
    title: "Validation & Optimization",
    description:
      "Verify controls and optimize security posture.",
    timeline: "2–4 weeks",
    activities: [
      "Control testing",
      "Audit preparation",
      "Performance optimization",
      "Continuous monitoring setup"
    ]
  }
];

const frameworks = [
  {
    title: "ISO 27001",
    description: "Information Security Management System foundation.",
    benefits: ["Risk-based approach", "Continuous improvement", "International recognition"]
  },
  {
    title: "NIS2",
    description: "EU cybersecurity directive compliance.",
    benefits: ["Regulatory alignment", "Incident reporting", "Supply chain security"]
  },
  {
    title: "DORA",
    description: "Operational resilience for financial services.",
    benefits: ["ICT risk management", "Digital resilience", "Financial sector focus"]
  },
  {
    title: "GDPR",
    description: "Data protection and privacy compliance.",
    benefits: ["Privacy by design", "Data governance", "Rights management"]
  },
  {
    title: "SOC 2",
    description: "Trust services criteria for organizations.",
    benefits: ["Third-party assurance", "Control effectiveness", "Customer confidence"]
  }
];

const tools = [
  {
    category: "Risk Assessment",
    items: ["Qualys", "Rapid7", "Tenable", "Custom risk matrices"]
  },
  {
    category: "Compliance Management",
    items: ["OneTrust", "TrustArc", "Custom dashboards"]
  },
  {
    category: "Security Testing",
    items: ["Burp Suite", "Metasploit", "Nmap", "Custom testing frameworks"]
  },
  {
    category: "Monitoring & Analytics",
    items: ["Splunk", "ELK Stack", "Custom SIEM solutions"]
  }
];
