// app/hitrust/page.tsx

import Link from "next/link";

export default function HitrustPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            HITRUST CSF Compliance
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Readiness, control mapping, and validated assessment support to help 
            your organization achieve HITRUST CSF certification.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition">
              Get Started
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-100 transition">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              HITRUST CSF is a certifiable framework designed to manage regulatory 
              compliance and risk across industries. We deliver readiness assessments, 
              control mapping, remediation guidance, and validated assessment support 
              to streamline your path to HITRUST certification.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our HITRUST CSF Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive services to support HITRUST CSF readiness and certification.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Readiness Assessments & Gap Analysis",
                desc: "Evaluate your current controls against HITRUST CSF requirements."
              },
              {
                title: "Control Mapping & Documentation",
                desc: "Map existing policies and processes to HITRUST requirements."
              },
              {
                title: "Validated Assessment Support",
                desc: "Guidance for preparing evidence and working with external assessors."
              },
              {
                title: "Remediation Planning",
                desc: "Prioritized remediation roadmap for certification readiness."
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 shadow-sm p-6 rounded-2xl text-left"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get HITRUST CSF Support</h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          Contact us today to begin your HITRUST readiness and certification journey.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition">
            Get Started
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-white/20 border border-white rounded-xl font-medium hover:bg-white/30 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
