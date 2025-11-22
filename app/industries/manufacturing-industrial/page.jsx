export default function ManufacturingCybersecurity() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
          Manufacturing and Industrial
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Comprehensive cybersecurity and compliance services for the manufacturing and industrial sector.
        </p>

        <p className="mt-6 text-slate-600 max-w-3xl">
          In manufacturing and industrial sectors, cybersecurity is critical for protecting production systems 
          and IoT devices. We help organizations implement strong security controls and achieve regulatory compliance.
        </p>
      </section>

      {/* CTA Buttons */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-10 -mt-10">
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold">
            Request Assessment
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-lg font-semibold">
            Book Consultation
          </button>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Challenges in Manufacturing</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            The manufacturing and industrial sector faces unique cybersecurity challenges that require specialized solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "OT System Cybersecurity",
                desc: "Strengthening cybersecurity for Operational Technology (OT) systems such as SCADA, PLC, and DCS."
              },
              {
                title: "IoT Device Security",
                desc: "Strengthening cybersecurity for production equipment, sensors, and IoT devices."
              },
              {
                title: "Supply Chain Risks",
                desc: "Managing cybersecurity risks from suppliers, partners, and subcontractors."
              },
              {
                title: "Preventing Production Disruption",
                desc: "Preventing production disruptions caused by cybersecurity incidents."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Our Solutions for Manufacturing</h2>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Comprehensive services to strengthen cybersecurity and compliance for manufacturing and industrial organizations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {[
            {
              title: "ISO 27001 Certification",
              desc: "Information security management system certification for the industrial sector."
            },
            {
              title: "NIS2 Compliance",
              desc: "Meeting EU NIS2 directive requirements for critical industrial entities."
            },
            {
              title: "OT Cybersecurity",
              desc: "Strengthening cybersecurity for operational technology systems."
            },
            {
              title: "Risk Management",
              desc: "Comprehensive risk management system for manufacturing and industrial sector."
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "Industrial Expertise",
                desc: "Deep understanding of challenges in manufacturing and industrial sectors."
              },
              {
                title: "OT Cybersecurity",
                desc: "Specialized expertise in strengthening cybersecurity for operational technology systems."
              },
              {
                title: "Proven Success",
                desc: "Track record of helping organizations achieve cybersecurity compliance."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
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
          <li>• Protect production systems and IoT devices</li>
          <li>• Meet regulatory requirements and avoid penalties</li>
          <li>• Enhance supply chain security</li>
          <li>• Strengthen cybersecurity resilience</li>
          <li>• Protect critical industrial processes</li>
        </ul>
      </section>

     {/* CTA SECTION (INDIGO BACKGROUND) */}
<section className="bg-indigo-600 text-white py-16 mt-10">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold">Ready to Strengthen Your Cybersecurity?</h2>
    <p className="mt-4 text-lg opacity-90">
      Contact us today for a comprehensive assessment of your manufacturing and industrial organization's cybersecurity.
    </p>

    <div className="mt-6">
      <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow">
        Get Started
      </button>
    </div>
  </div>
</section>


{/* FORM SECTION (WHITE BACKGROUND) */}
<section className="bg-white py-16">
  <div className="max-w-2xl mx-auto px-6 lg:px-8">

    <h3 className="text-2xl font-bold text-slate-900 text-center">
      Request Manufacturing Consultation
    </h3>

    <div className="mt-8 grid gap-4">
      <input type="text" placeholder="First Name" className="p-3 border border-slate-300 rounded-lg w-full" />
      <input type="text" placeholder="Last Name" className="p-3 border border-slate-300 rounded-lg w-full" />
      <input type="email" placeholder="Email" className="p-3 border border-slate-300 rounded-lg w-full" />
      <input type="text" placeholder="Company" className="p-3 border border-slate-300 rounded-lg w-full" />
      <textarea placeholder="Describe your cybersecurity needs..." className="p-3 border border-slate-300 rounded-lg w-full h-32"></textarea>

      <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow">
        Send Message
      </button>
    </div>
  </div>
</section>

      

    </div>
  );
}
