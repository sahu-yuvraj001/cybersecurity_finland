import Link from "next/link";
import React from "react";

export default function CsaStarCertification() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full py-24 px-4 text-center bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">CSA STAR Cloud Security Certification</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Cloud security assurance through CSA STAR certification levels 1-3. Demonstrate comprehensive cloud security excellence and build customer trust.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">Achieve CSA STAR Certification</Link>
          <Link href="/services" className="px-6 py-3 bg-white border border-blue-500 text-blue-600 rounded-xl shadow hover:bg-blue-50 transition">View Our Services</Link>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">CSA STAR Certification Levels</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16">
          Progressive certification levels that demonstrate increasing maturity and assurance in cloud security management.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Level 1 */}
          <div className="bg-green-50 border border-green-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-3xl font-bold text-green-600 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-4">CSA STAR Level 1</h3>
            <p className="mb-4">Self-Assessment</p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Free registration and assessment</li>
              <li>✔ Public registry listing</li>
              <li>✔ CCM-based control documentation</li>
              <li>✔ CAIQ questionnaire completion</li>
            </ul>
          </div>

          {/* Level 2 */}
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-3xl font-bold text-blue-600 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-4">CSA STAR Level 2</h3>
            <p className="mb-4">Third-Party Assessment</p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Independent auditor assessment</li>
              <li>✔ ISO 27001 or SOC 2 based</li>
              <li>✔ CCM controls mapping</li>
              <li>✔ Annual recertification</li>
            </ul>
          </div>

          {/* Level 3 */}
          <div className="bg-purple-50 border border-purple-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-3xl font-bold text-purple-600 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-4">CSA STAR Level 3</h3>
            <p className="mb-4">Continuous Monitoring</p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Continuous monitoring program</li>
              <li>✔ Real-time security metrics</li>
              <li>✔ Maturity model assessment</li>
              <li>✔ Enhanced public disclosure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose CSA STAR */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose CSA STAR Certification?</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16">
          Demonstrate cloud security excellence and build customer confidence with globally recognized cloud security certification.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Industry Recognition", desc: "Globally recognized certification that demonstrates cloud security leadership and best practices." },
            { title: "Customer Confidence", desc: "Build customer trust through transparent security assessments and public registry listings." },
            { title: "Competitive Advantage", desc: "Differentiate your cloud services with verified security capabilities and transparent reporting." },
            { title: "Security Maturity", desc: "Progressive certification levels demonstrate continuous improvement in cloud security maturity." },
            { title: "Compliance Alignment", desc: "Align with regulatory requirements and industry standards through comprehensive security frameworks." },
            { title: "Cloud-Native Focus", desc: "Purpose-built for cloud environments with controls specifically designed for cloud security challenges." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow border hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">CSA STAR Implementation Process</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16">
          Structured approach to achieving CSA STAR certification across all levels.
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {["Current State Assessment", "Level Strategy Planning", "Controls Implementation", "Certification & Maintenance"].map((label, index) => (
            <div key={index} className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-4 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{index + 1}</div>
              <p className="font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Comprehensive CSA STAR Services</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12">
          {/* Left */}
          <div className="bg-white p-8 rounded-2xl border shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Assessment & Certification Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ CCM controls gap analysis</li>
              <li>✔ CAIQ questionnaire completion</li>
              <li>✔ Level 2 third-party assessment coordination</li>
              <li>✔ Level 3 continuous monitoring design</li>
              <li>✔ Registry submission support</li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-white p-8 rounded-2xl border shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Ongoing Maintenance & Improvement</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Annual recertification support</li>
              <li>✔ Security metrics monitoring</li>
              <li>✔ CCM updates implementation</li>
              <li>✔ Maturity progression planning</li>
              <li>✔ Customer communication support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Framework Integration */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Framework Integration</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">CSA STAR integrates seamlessly with existing security frameworks and standards.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {["ISO 27001", "SOC 2", "NIST Framework", "GDPR Compliance"].map((fw, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border shadow hover:shadow-lg transition font-semibold">{fw}</div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-blue-800 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Achieve CSA STAR Cloud Security Excellence</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">Demonstrate comprehensive cloud security capabilities and build customer trust with CSA STAR certification.</p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition">Start CSA STAR Journey</Link>
          <Link href="/about" className="px-8 py-4 bg-white/20 border border-white text-white font-semibold rounded-xl shadow hover:bg-white/30 transition">Learn More About Us</Link>
        </div>
      </section>
    </div>
  );
}
