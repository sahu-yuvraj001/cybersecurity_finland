

import Link from 'next/link'
import React from 'react'

export default function ISOCloudSecurityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* HERO */}
      <header className="bg-linear-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">ISO 27017 &amp; 27018 <span className="text-indigo-700">Cloud Security</span></h1>
            <p className="mt-4 max-w-2xl text-slate-600">Comprehensive cloud security implementation covering both cloud computing security controls (ISO 27017) and cloud privacy protection (ISO 27018).</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition" href="/contact">Secure Your Cloud Infrastructure</Link>
              <Link className="inline-block px-6 py-3 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 transition" href="/services">View Our Services</Link>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-sm text-slate-600">
              <div className="text-center">
                <div className="font-medium">Cloud-first</div>
                <div className="mt-1 opacity-80">Architecture &amp; controls</div>
              </div>
              <div className="text-center">
                <div className="font-medium">Multi-cloud</div>
                <div className="mt-1 opacity-80">AWS, Azure, GCP</div>
              </div>
              <div className="text-center">
                <div className="font-medium">GDPR-ready</div>
                <div className="mt-1 opacity-80">Privacy controls</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <img src="/cloud.jpg" alt="Cloud security illustration" className="w-full h-64 sm:h-80 md:h-96 object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* STANDARDS */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Cloud Security Standards</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Two complementary standards that provide comprehensive security and privacy controls for cloud environments.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <article className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-indigo-600 font-bold">☁️</div>
                <div>
                  <h3 className="font-semibold">ISO 27017</h3>
                  <p className="mt-2 text-slate-600 text-sm">Cloud computing security — cloud-specific guidance for both cloud service providers and customers.</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-500">✓</span> Cloud service security architecture</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-500">✓</span> Shared responsibility model</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-500">✓</span> Cloud-specific risk management</li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold">🔒</div>
                <div>
                  <h3 className="font-semibold">ISO 27018</h3>
                  <p className="mt-2 text-slate-600 text-sm">Cloud privacy protection — guidance for protecting personally identifiable information (PII) in public clouds.</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-500">✓</span> PII protection in cloud environments</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-500">✓</span> Transparency and communication</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-500">✓</span> Data location &amp; portability</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Cloud Security Implementation Process</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Comprehensive approach to implementing both ISO 27017 and ISO 27018 standards for complete cloud security coverage.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((s) => (
              <div key={s.title} className="p-6 bg-white rounded-xl border border-slate-100 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-semibold">{s.num}</div>
                  <h4 className="font-semibold">{s.title}</h4>
                </div>
                <p className="mt-3 text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center">Comprehensive Cloud Security Services</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {cloudServices.map((svc) => (
              <div key={svc.title} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-semibold">{svc.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {svc.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="mt-1 text-green-500">✓</span>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-CLOUD EXPERTISE */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold">Multi-Cloud Platform Expertise</h3>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">We support ISO 27017 &amp; 27018 implementation across major cloud platforms.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-8 items-center">
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center">{p.logo}</div>
                <div className="text-sm font-medium text-slate-700">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-linear-to-r from-sky-600 to-indigo-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h3 className="text-2xl font-bold">Secure Your Cloud Infrastructure Today</h3>
          <p className="mt-3">Implement comprehensive cloud security with ISO 27017 &amp; 27018 standards across your entire cloud ecosystem.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-white text-indigo-700 rounded-md font-semibold">Start Cloud Security Assessment</Link>
            <Link href="/about" className="px-6 py-3 border border-white rounded-md hover:bg-white/10">Learn More About Us</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

const processSteps = [
  { num: 1, title: 'Cloud Assessment', desc: 'Comprehensive assessment of current cloud infrastructure, services, and security posture.' },
  { num: 2, title: 'Control Mapping', desc: 'Map ISO 27017 & 27018 controls to your cloud environment and identify implementation gaps.' },
  { num: 3, title: 'Security Implementation', desc: 'Implement cloud-specific security and privacy controls across your infrastructure.' },
  { num: 4, title: 'Continuous Monitoring', desc: 'Establish ongoing monitoring and compliance validation for cloud environments.' },
]

const cloudServices = [
  {
    title: 'ISO 27017 Implementation',
    items: [
      'Cloud service customer/provider guidance',
      'Shared responsibility model documentation',
      'Cloud-specific security controls',
      'Multi-cloud security architecture',
      'Cloud service agreement review',
    ],
  },
  {
    title: 'ISO 27018 Implementation',
    items: [
      'PII identification and classification',
      'Cloud privacy notice development',
      'Data location transparency controls',
      'Data portability and return procedures',
      'Third-party audit & transparency',
    ],
  },
]

const platforms = [
  { name: 'AWS', logo: 'AWS' },
  { name: 'Azure', logo: 'Azure' },
  { name: 'GCP', logo: 'GCP' },
  { name: 'Multi-Cloud', logo: 'Multi' },
]
