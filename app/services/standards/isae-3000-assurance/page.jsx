import Link from "next/link";
import React from "react";

export default function ISAE3000Landing() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="absolute inset-0 -z-10">
          {/* Using client's old-site screenshot as a subtle decorative background. */}
          <img
            src="/mnt/data/74ca8ce0-6edb-4041-98ca-1c0c16ad499f.png"
            alt="old site screenshot"
            className="w-full h-full object-cover opacity-5 blur-sm"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              ISAE 3000 Assurance
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-600">
              Independent attestation and expert support for your security & privacy
              control suites — faster, clearer, and audit-ready.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Get ISAE 3000 Support
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-slate-700 bg-white shadow-sm hover:shadow-md"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Illustration / CTA card */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 rounded-2xl bg-white/60 backdrop-blur p-6 shadow-md">
              <h3 className="text-xl font-semibold">Ready for attestation?</h3>
              <p className="mt-2 text-sm text-slate-600">
                We help prepare evidence, map control frameworks, and coordinate with
                independent auditors so your organization passes attestation with
                confidence.
              </p>
            </div>
            <div className="col-span-1 rounded-2xl bg-white p-6 shadow-md flex flex-col justify-center">
              <p className="text-sm text-slate-600">Typical engagement</p>
              <div className="mt-2 text-2xl font-bold text-slate-900">4–8 weeks</div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16" id="services">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">
          Our ISAE 3000 Services
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Comprehensive support for every stage of your ISAE 3000 attestation journey.
        </p>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Control Suite Design",
              bullets: [
                "Control framework mapping",
                "Policy & procedure development",
                "Documentation & training",
                "Evidence preparation",
              ],
            },
            {
              title: "Evidence Management",
              bullets: [
                "Evidence collection guidance",
                "Documentation review",
                "Remediation support",
                "Audit readiness assessment",
              ],
            },
            {
              title: "Auditor Coordination",
              bullets: [
                "Audit liaison",
                "Remediation planning",
                "Certification preparation",
                "Stakeholder communication",
              ],
            },
          ].map((s) => (
            <article
              key={s.title}
              className="rounded-xl bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                {/* decorative */}
                ✓
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.bullets[0]}…</p>
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
          <h3 className="text-xl font-semibold text-slate-900 text-center">Why Choose Us?</h3>
          <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">
            Independent attestation, expert guidance, and ongoing compliance support to
            make audits predictable and efficient.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Independent attestation",
              "Comprehensive documentation",
              "Accelerated audit readiness",
              "Expert guidance throughout",
              "Ongoing compliance support",
            ].map((t) => (
              <div key={t} className="rounded-lg bg-white p-4 shadow-sm text-sm text-slate-700">
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mt-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold">Ready for ISAE 3000 Attestation?</h3>
            <p className="mt-2">Get expert guidance and accelerate your compliance timeline.</p>
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
