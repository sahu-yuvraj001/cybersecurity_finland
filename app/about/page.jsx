// /app/about/page.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About · Cybersecurity.fi",
  description:
    "Finland's premier cybersecurity & compliance consultancy — practical, standards-driven security programs and compliance advisory.",
};

const LeadershipCard = ({ name, title, desc, imgAlt = "avatar" }) => (
  <article className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-50 to-cyan-50 flex items-center justify-center shrink-0">
        {/* Replace with <Image> for real photos */}
        <span className="text-blue-600 font-medium">{name.split(" ").map(n=>n[0]).slice(0,2).join("")}</span>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </article>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1600 600" fill="none" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#eef2ff" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g1)" />
            {/* subtle waves */}
            <path d="M0 420 C300 300 600 520 900 420 C1200 320 1500 420 1600 380 L1600 600 L0 600 Z" fill="#fff" opacity="0.6" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                About <span className="text-cyan-600">Cybersecurity.fi</span>
              </h1>
              <p className="mt-6 text-slate-600 text-lg sm:text-xl leading-relaxed">
                Finland’s premier cybersecurity & compliance consultancy. We combine practical
                engineering, regulatory know-how and risk-first thinking to build resilient security
                programs that scale with your organisation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center px-5 py-3 bg-cyan-600 text-white rounded-xl font-medium shadow hover:bg-cyan-700 transition">
                  Schedule Consultation
                </Link>
                <a href="#story" className="inline-flex items-center px-4 py-3 border border-gray-200 rounded-xl text-slate-700 hover:bg-white transition">
                  Our Story
                </a>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-600">✔</span> ISO 27001 & SOC2 implementations
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-600">✔</span> NIS2, DORA & GDPR advisory
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-600">✔</span> Pen-tests & secure architecture
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-600">✔</span> Risk management & incident readiness
                </li>
              </ul>
            </div>

            <div className="relative">
              {/* Replace with real image using next/image */}
              <div className="w-full rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-xl">
                <Image
                  src="/aboutteam.jpg"
                  alt="team working on security"
                  width={1200}
                  height={720}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 left-6 bg-white rounded-xl border border-gray-100 p-4 shadow-md w-64">
                <p className="text-xs text-slate-500">Proven implementations</p>
                <p className="text-sm font-semibold text-slate-900">200+ organisations helped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-slate mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-slate-600">
            Founded to make cybersecurity compliance simple and practical, Cybersecurity.fi helps
            organisations across Finland and Europe adopt secure practices without bureaucracy. We
            focus on rapid, repeatable implementations and measurable outcomes.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">What we do</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We deliver ISO 27001, SOC2, NIS2 and GDPR aligned programs with engineering-focused
              approaches: threat modelling, secure-by-design, cloud hardening and continuous
              compliance automation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">How we deliver value</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Short, focused engagements (6–12 weeks) for fast wins and long-term transformation
              plans for mature security programs. We prioritise business outcomes and practical
              engineering.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Leadership Team</h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <LeadershipCard
              name="Aino K."
              title="Chief Executive Officer"
              desc="Experienced security leader focused on compliance, strategy and scaling security programs."
            />
            <LeadershipCard
              name="Mikko T."
              title="Chief Technology Officer"
              desc="Cloud-native security architect with deep experience in secure engineering and platform hardening."
            />
            <LeadershipCard
              name="Elena R."
              title="Compliance Director"
              desc="Regulatory compliance and audit specialist for ISO 27001, NIS2 and GDPR programs."
            />
            <LeadershipCard
              name="Juho S."
              title="Senior Security Consultant"
              desc="Threat modelling, secure code reviews and penetration testing specialist."
            />
            <LeadershipCard
              name="Laura V."
              title="Head of Risk Management"
              desc="Operational risk and business continuity lead with practical mitigation frameworks."
            />
            <LeadershipCard
              name="Antti P."
              title="Technical Security Lead"
              desc="DevSecOps, infra automation and security tooling expert."
            />
          </div>
        </div>
      </section>

      {/* VALUES & CERTIFICATIONS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-slate-600 mb-6">
              Practical, rigorous and transparent. We aim to deliver easily-adopted security
              programs that align with business priorities.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <h4 className="font-semibold">Excellence</h4>
                <p className="text-sm text-slate-600">High quality results and continuous improvement.</p>
              </li>
              <li className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <h4 className="font-semibold">Integrity</h4>
                <p className="text-sm text-slate-600">Transparent communication and strong ethics.</p>
              </li>
              <li className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <h4 className="font-semibold">Innovation</h4>
                <p className="text-sm text-slate-600">Practical automation & modern tooling to reduce toil.</p>
              </li>
              <li className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <h4 className="font-semibold">Partnership</h4>
                <p className="text-sm text-slate-600">Long-term collaboration, not one-off projects.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
            <p className="text-slate-600 mb-6">Our consultants maintain industry-leading qualifications:</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "ISO 27001 Lead Auditor",
                "CISSP",
                "CISM",
                "CEH",
                "CCSP",
                "ISO 27701 Lead Implementer",
              ].map((c, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center text-sm">
                  <div className="h-10 w-10 bg-cyan-50 rounded-full mx-auto mb-2 flex items-center justify-center text-cyan-600">
                    {c.split(" ").slice(0,2).map(s=>s[0]).join("")}
                  </div>
                  <div className="text-xs text-slate-700 font-medium">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white/60 border-t border-gray-100 py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold">Proven Track Record</h4>
              <p className="text-sm text-slate-600">200+ successful implementations across industries.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold">Expert Team</h4>
              <p className="text-sm text-slate-600">Cross-functional specialists in engineering and compliance.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold">Practical Approach</h4>
              <p className="text-sm text-slate-600">Implementation-first programmes that drive real outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Work with Us?</h3>
          <p className="text-slate-600 mb-6">Join 200+ organisations that trust us with their cybersecurity and compliance needs.</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-xl font-medium shadow hover:bg-cyan-700 transition">
            Book a Consultation
          </Link>
        </div>
      </section>

      
    </main>
  );
}
