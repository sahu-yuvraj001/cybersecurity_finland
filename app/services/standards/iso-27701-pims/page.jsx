// ISO27701Page.jsx - Next.js + Tailwind fully responsive landing page
import Link from 'next/link'
import React from 'react'

export default function ISO27701Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900 antialiased">
      {/* HERO */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            ISO 27701 (PIMS) <span className="text-purple-600">Implementation</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Extend your ISMS to privacy; GDPR-aligned certification readiness with comprehensive
            Privacy Information Management System implementation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className="px-6 py-3 rounded-md bg-purple-600 text-white font-semibold shadow hover:bg-purple-700" href="/contact">Start ISO 27701 Implementation</Link>
            <Link className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100" href="/services">View Our Services</Link>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Why Choose ISO 27701 (PIMS)?</h2>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
            Build on your existing ISO 27001 ISMS to create a comprehensive privacy management
            framework that ensures GDPR compliance and demonstrates privacy leadership.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {why.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-200">
                <div className="text-purple-600 text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Our ISO 27701 Implementation Process</h2>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
            Structured approach to extend your existing ISMS with privacy management capabilities.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-lg">
                  {step.number}
                </div>
                <h4 className="mt-4 font-semibold text-lg">{step.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Comprehensive ISO 27701 Services</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((srv, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow border border-slate-200">
                <h3 className="font-semibold text-lg">{srv.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                  {srv.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold">Ready to Implement ISO 27701 (PIMS)?</h2>
          <p className="mt-3 opacity-90">
            Extend your existing ISMS with comprehensive privacy management capabilities and achieve GDPR-aligned certification readiness.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold shadow">Start Your PIMS Implementation</a>
            <a href="#" className="border border-white px-6 py-3 rounded-md hover:bg-white/10">Learn More About Us</a>
          </div>
        </div>
      </section>

    </main>
  )
}

const why = [
  { title: 'GDPR Alignment', text: 'Seamlessly integrate privacy requirements with your information security management system.', icon: '🛡️' },
  { title: 'Extend Existing ISMS', text: 'Build upon your ISO 27001 foundation without duplicating effort or resources.', icon: '⚡' },
  { title: 'Competitive Advantage', text: 'Demonstrate privacy leadership and gain competitive advantage in global markets.', icon: '📊' },
]

const process = [
  { number: 1, title: 'Privacy Gap Analysis', text: 'Assess current privacy controls against ISO 27701 requirements and GDPR obligations.' },
  { number: 2, title: 'PIMS Design', text: 'Design your Privacy Information Management System extending the existing ISMS.' },
  { number: 3, title: 'Implementation', text: 'Implement privacy controls, processes, and documentation aligned with ISO 27701.' },
  { number: 4, title: 'Certification Readiness', text: 'Prepare for certification audit with readiness assessments & full support.' },
]

const services = [
  {
    title: 'Privacy Management System Development',
    points: [
      'Privacy policy framework development',
      'Data processing inventory and mapping',
      'Privacy impact assessment procedures',
      'Data subject rights management',
    ],
  },
  {
    title: 'GDPR Integration & Compliance',
    points: [
      'GDPR compliance gap analysis',
      'Privacy by design implementation',
      'Breach notification procedures',
      'Third-party processor agreements',
    ],
  },
]
