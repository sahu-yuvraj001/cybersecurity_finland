import Link from "next/link";
import React from "react";

export default function TisaxLanding() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="absolute inset-0 -z-10">
          <img
            src="/mnt/data/96b490b5-17ff-42e8-9c1c-9c5181f92349.png"
            alt="old TISAX design"
            className="w-full h-full object-cover opacity-5 blur-sm"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              TISAX (Automotive)
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-600">
              Scope definition, assessment support, and label attainment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700"
              >
                Get TISAX Support
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16" id="services">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">
          Our TISAX Services
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Comprehensive support for every stage of your TISAX assessment
          journey.
        </p>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Scope Definition & Readiness",
              bullets: [
                "Scope definition workshops",
                "Readiness assessment",
                "Gap analysis",
                "Remediation roadmap",
              ],
            },
            {
              title: "Assessment Preparation & Support",
              bullets: [
                "Assessment planning",
                "Documentation review",
                "Stakeholder training",
                "Evidence collection",
              ],
            },
            {
              title: "Label Attainment & Auditor Liaison",
              bullets: [
                "Remediation support",
                "Audit liaison",
                "Certification preparation",
                "Label attainment guidance",
              ],
            },
          ].map((s) => (
            <article
              key={s.title}
              className="rounded-xl bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                ✓
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-500">●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* WHY CHOOSE */}
        <section className="mt-14 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-900 text-center">
            Why Choose Our TISAX Services?
          </h3>
          <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">
            Automotive industry expertise with accelerated label attainment and
            ongoing support.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Automotive industry expertise",
              "Accelerated label attainment",
              "Comprehensive documentation",
              "Expert guidance throughout the process",
              "Ongoing compliance support",
            ].map((t) => (
              <div
                key={t}
                className="rounded-lg bg-white p-4 shadow-sm text-sm text-slate-700"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mt-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold">Ready for TISAX Assessment?</h3>
            <p className="mt-2">
              Get expert guidance and accelerate your label attainment.
            </p>

            <Link
              id="contact"
              href="/contact"
              className="mt-6 inline-block rounded-full border border-white/30 px-8 py-3 text-white/95 font-semibold hover:opacity-95"
            >
              Contact Our Experts
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
