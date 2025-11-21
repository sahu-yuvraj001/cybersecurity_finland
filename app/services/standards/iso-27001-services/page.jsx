
import Link from 'next/link'
import React from 'react'

export default function ISO27001LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900 antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* decorative gradient */}
          <div className="h-full w-full bg-linear-to-b from-indigo-600 via-violet-600 to-sky-600 opacity-95"></div>
          {/* faint angled shape */}
          <svg className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 opacity-20" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="400" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
  <span className="text-black">ISO 27001</span> <span className="text-purple-500">Services</span>
</h1>

              <p className="mt-6 max-w-xl text-lg sm:text-xl opacity-90">Gap analysis, ISMS implementation, internal audits, and end-to-end certification readiness — expertly tailored to reduce risk and accelerate your compliance timeline.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-indigo-700 font-semibold px-5 py-3 rounded-md shadow-md hover:shadow-lg transition" >Get Started</Link>
                <Link href="/services/standards/iso-27001-services" className="inline-flex items-center gap-3 text-black border px-5 py-3 rounded-md hover:bg-white/10 transition" >Learn More</Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm opacity-90">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Faster certification timelines</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15A8 8 0 1 0 8.6 5"/></svg>
                  <span>Reduced audit costs</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* image card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img src="/iso.jpg" alt="ISO services" className="w-full h-80 object-cover sm:h-96 md:h-[520px]" />
              </div>

              <div className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/30 w-64">
                <h4 className="text-sm font-semibold">Ready to start?</h4>
                <p className="text-xs mt-1 text-slate-700">Book a free 30-minute consultation with our ISO experts.</p>
                <a href="#contact" className="mt-3 inline-block text-sm font-medium text-indigo-600">Contact our experts →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Our ISO 27001 Services</h2>
        <p className="text-center mt-3 text-slate-600 max-w-2xl mx-auto">Comprehensive support for every stage of your ISO 27001 certification journey.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article key={s.title} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-indigo-50">
                  <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={s.icon} /></svg>
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
              </div>
              <p className="mt-4 text-slate-600 text-sm">{s.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-green-500">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-slate-100 py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-bold text-center">Why Choose Our ISO 27001 Services?</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {why.map((w) => (
              <div key={w} className="bg-white p-4 rounded-lg shadow-sm text-center border border-slate-100">{w}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-linear-to-r from-indigo-700 to-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-2xl sm:text-3xl font-bold">Ready to Start Your ISO 27001 Journey?</h4>
          <p className="mt-3 max-w-2xl mx-auto opacity-90">Get expert guidance and accelerate your certification timeline — tailored plans, fixed-price engagements, and ongoing support.</p>

          <div className="mt-8 flex justify-center gap-4">
            <Link className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold shadow" href="/contact">Contact Our Experts</Link>
            <Link className="border border-white/60 px-6 py-3 rounded-md hover:bg-white/10" href="/contact">Request a proposal</Link>
          </div>
        </div>
      </section>
     
    </main>
  )
}

// --- Data used by the component (inside same file for convenience) ---
const services = [
  {
    title: 'Gap Analysis',
    icon: 'M3 7h18M3 12h18M3 17h18',
    description: 'Comprehensive assessment of your current security posture against ISO 27001 requirements.',
    points: ['Current state assessment', 'Compliance gap identification', 'Risk analysis and prioritization', 'Detailed remediation roadmap'],
  },
  {
    title: 'ISMS Implementation',
    icon: 'M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7L12 2z',
    description: 'Design and implement an Information Security Management System tailored to your organisation.',
    points: ['ISMS framework design', 'Policy & procedure development', 'Security control implementation', 'Documentation & training'],
  },
  {
    title: 'Internal Audits',
    icon: 'M12 20v-6M5 12h14M8 8h8',
    description: 'Regular internal audits to maintain compliance and identify improvements.',
    points: ['Audit planning & execution', 'Non-conformity identification', 'Corrective action recommendations', 'Continuous improvement support'],
  },
  {
    title: 'Certification Readiness',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
    description: 'End-to-end support to ensure a successful external certification audit.',
    points: ['Pre-audit readiness assessment', 'Documentation review & optimization', 'Staff training & prep', 'Certification body liaison'],
  },
  {
    title: 'Managed Security Controls',
    icon: 'M4 7h16M4 12h8M4 17h6',
    description: 'Ongoing security controls management and monitoring to reduce residual risk.',
    points: ['Control operations & monitoring', 'Patching & configuration management', 'Incident response support', 'Monthly reporting'],
  },
  {
    title: 'Training & Awareness',
    icon: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0',
    description: 'Role-based training and awareness programs that embed security into your culture.',
    points: ['Phased awareness campaigns', 'Role-based training modules', 'Simulated exercises', 'Policy adoption metrics'],
  },
]

const why = [
  'Faster certification timelines',
  'Reduced audit costs',
  'Expert guidance throughout the process',
  'Comprehensive documentation',
  'Ongoing support & maintenance',
]
