export default function PublicSectorCybersecurity() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
          Public Sector Cybersecurity
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Comprehensive cybersecurity and compliance services for public sector organizations in Finland.
        </p>

        <p className="mt-6 text-slate-600 max-w-3xl">
          Public sector organizations face unique cybersecurity challenges. 
          We help government agencies, municipalities, and public organizations protect citizen data, 
          meet regulatory requirements, and ensure digital service continuity.
        </p>
      </section>

      {/* WHO IS THIS FOR + WHAT WILL YOU ACHIEVE */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-slate-900">Who is this for?</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Government agencies, municipalities, cities, hospital districts, universities, 
            and other public sector organizations looking to strengthen their 
            cybersecurity and meet regulatory requirements.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12">What will you achieve?</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            NIS2 compliance, citizen data protection, ISO 27001 certification, and resilient cybersecurity.
          </p>

        </div>
      </section>

      {/* KEY CHALLENGES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Key Challenges</h2>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Public sector organizations face unique cybersecurity challenges that require specialized expertise.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {[
            {
              title: "NIS2 Compliance",
              desc: "Meeting EU Network and Information Security Directive requirements."
            },
            {
              title: "Citizen Data Protection",
              desc: "Secure handling of sensitive personal data and public information."
            },
            {
              title: "Digital Service Continuity",
              desc: "Ensuring critical public services continue operating during cyber threats."
            },
            {
              title: "Vendor Risk Management",
              desc: "Managing cybersecurity risks from third-party service providers."
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
          <p className="mt-4 text-slate-600 max-w-3xl">
            Comprehensive services that help public sector organizations strengthen their 
            cybersecurity and meet regulatory requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                title: "NIS2 Program",
                desc: "Comprehensive NIS2 compliance program for public sector organizations."
              },
              {
                title: "ISO 27001 Certification",
                desc: "Information security management system certification with public sector standards."
              },
              {
                title: "Critical Service Protection",
                desc: "Strengthening cybersecurity for critical public services."
              },
              {
                title: "Vendor Auditing",
                desc: "Cybersecurity auditing of third-party service providers."
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
        <p className="mt-4 text-slate-600 max-w-3xl">
          Why public sector organizations choose us for their cybersecurity services.
        </p>

        <ul className="mt-8 grid md:grid-cols-2 gap-6 text-slate-700">
          <li>• Meet NIS2 and other regulatory requirements</li>
          <li>• Protect citizen personal data</li>
          <li>• Ensure public service continuity</li>
          <li>• Enhance citizen trust</li>
          <li>• Strengthen digital transformation</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to strengthen your cybersecurity?</h2>
          <p className="mt-4 text-lg opacity-90">
            Contact us and let's start strengthening your public sector organization's cybersecurity.
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
