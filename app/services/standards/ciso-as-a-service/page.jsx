// app/ciso-as-a-service/page.tsx

import Link from "next/link";

export default function CisoAsAService() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            CISO-as-a-Service
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Virtual CISO leadership providing strategy, roadmaps, metrics, and 
            stakeholder reporting to strengthen your security program.
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
              Our CISO-as-a-Service delivers the leadership and expertise of a 
              virtual Chief Information Security Officer. We guide your security 
              strategy, build roadmaps, define and monitor key metrics, engage 
              with stakeholders, and help maintain a mature and resilient 
              security program.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our CISO Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Strategic leadership and program development for security maturity.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Security Strategy & Roadmap Development",
                desc: "Create long-term security vision, priorities, and actionable roadmaps."
              },
              {
                title: "Metrics Definition & Reporting",
                desc: "Develop KPIs and dashboards to measure security program performance."
              },
              {
                title: "Stakeholder Engagement",
                desc: "Communicate risks, progress, and strategy to executives and key teams."
              },
              {
                title: "Security Program Management",
                desc: "Oversight of cybersecurity initiatives, governance, and continuous improvement."
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
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get CISO-as-a-Service Support</h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          Contact us today to strengthen your security program with virtual CISO leadership.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition">
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
