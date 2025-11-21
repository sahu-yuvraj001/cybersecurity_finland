import Link from "next/link";
import React from "react";

export default function Soc2ReadinessPage() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-white to-purple-50 text-gray-900">
      {/* Hero Section */}
      <section className="w-full py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SOC 2 Readiness</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Map controls to Trust Services Criteria, collect evidence, and prepare for Type I/II audits.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition">Start Assessment</Link>
          <Link href="/services/standards/soc-2-readiness" className="px-6 py-3 bg-white border border-purple-500 text-purple-600 rounded-xl shadow hover:bg-purple-50 transition">Learn More</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our SOC 2 Readiness Services</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16">
          Comprehensive preparation for successful SOC 2 Type I and Type II audits
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Controls Mapping</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Security controls assessment</li>
              <li>✔ Availability controls review</li>
              <li>✔ Processing integrity evaluation</li>
              <li>✔ Confidentiality controls mapping</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Evidence Collection</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Evidence identification and collection</li>
              <li>✔ Documentation standardization</li>
              <li>✔ Control testing procedures</li>
              <li>✔ Evidence repository setup</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Type I Preparation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Control design assessment</li>
              <li>✔ Policy and procedure review</li>
              <li>✔ Gap analysis and remediation</li>
              <li>✔ Pre-audit readiness check</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Type II Preparation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Operating effectiveness testing</li>
              <li>✔ Continuous monitoring setup</li>
              <li>✔ Exception management</li>
              <li>✔ Auditor engagement support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-purple-500 to-pink-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for SOC 2 Certification?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Get expert guidance to ensure audit success
        </p>
        <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
          Contact Our Experts
        </Link>
      </section>
    </div>
  );
}