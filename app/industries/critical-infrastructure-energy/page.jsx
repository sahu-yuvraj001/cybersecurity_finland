export default function CriticalInfrastructure() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Critical Infrastructure Cybersecurity
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Comprehensive cybersecurity and compliance services for energy and critical
          infrastructure organizations.
        </p>

        <p className="mt-6 text-slate-600 max-w-3xl">
          Critical infrastructure and energy production are the backbone of society. 
          We help organizations protect critical systems, meet regulatory requirements, and
          ensure continuous operation during cyber threats.
        </p>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Who is this for?</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Energy producers, power grids, water utilities, transportation systems, industrial
            facilities, and other critical infrastructure organizations looking to strengthen
            their cybersecurity.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12">What will you achieve?</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            NIS2 compliance, critical system protection, operational technology (OT) security,
            and resilient cybersecurity.
          </p>
        </div>
      </section>

      {/* KEY CHALLENGES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Key Challenges</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {[
            {
              title: "NIS2 Compliance",
              desc: "Meeting EU critical infrastructure cybersecurity directive requirements."
            },
            {
              title: "OT Security",
              desc: "Strengthening cybersecurity for industrial systems and SCADA systems."
            },
            {
              title: "Business Continuity",
              desc: "Ensuring critical services continue operating during cyber attacks."
            },
            {
              title: "Regulatory Compliance",
              desc: "Meeting energy and critical infrastructure regulatory requirements."
            }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Our Solutions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                title: "NIS2 Program",
                desc: "Comprehensive NIS2 compliance program for critical infrastructure."
              },
              {
                title: "OT Cybersecurity",
                desc: "Strengthening cybersecurity for operational technology systems."
              },
              {
                title: "Incident Response",
                desc: "Rapid and effective handling of critical cyber incidents."
              },
              {
                title: "Risk Management",
                desc: "Comprehensive risk management system for critical infrastructure."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Benefits</h2>

        <ul className="mt-8 grid md:grid-cols-2 gap-6 text-slate-700">
          <li>• Meet NIS2 and other regulatory requirements</li>
          <li>• Protect critical systems</li>
          <li>• Ensure business continuity</li>
          <li>• Enhance operational technology security</li>
          <li>• Strengthen cybersecurity resilience</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to strengthen your cybersecurity?</h2>
          <p className="mt-4 text-lg opacity-90">
            Contact us and let's start strengthening your critical infrastructure organization's cybersecurity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-slate-100"
            >
              Get in Touch
            </a>
            <a
              href="#"
              className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 hover:bg-indigo-700"
            >
              Learn More About NIS2
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
