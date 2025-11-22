export default function HealthcareLifeSciences() {
  return (
    <div className="bg-white text-slate-800">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Healthcare and Life Sciences</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Comprehensive cybersecurity and compliance services for the healthcare and life sciences sector.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">Request Assessment</button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl shadow hover:bg-slate-100 transition">Book Consultation</button>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Challenges in Healthcare</h2>
          <p className="text-slate-600 max-w-3xl mb-12">
            The healthcare sector faces unique cybersecurity challenges that require specialized solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Patient Data Protection", desc: "Meeting HIPAA, GDPR, and other regulatory requirements for protecting patient personal data." },
              { title: "Device Cybersecurity", desc: "Strengthening cybersecurity for IoT devices, hospital systems, and medical equipment." },
              { title: "Third-Party Risks", desc: "Managing cybersecurity risks from vendors, partners, and subcontractors." },
              { title: "Incident Response", desc: "Rapid and effective response to cybersecurity incidents without compromising patient safety." }
            ].map((card, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Our Solutions for Healthcare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HIPAA Compliance", desc: "Comprehensive HIPAA compliance services for healthcare organizations." },
              { title: "ISO 27001 Certification", desc: "Information security management system certification for healthcare." },
              { title: "NIS2 Compliance", desc: "Meeting EU NIS2 directive requirements for critical healthcare entities." },
              { title: "Risk Management", desc: "Comprehensive risk management system for healthcare sector." }
            ].map((card, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="text-slate-600 mb-12 max-w-3xl mx-auto">
            We bring deep expertise in healthcare and a proven track record of strengthening cybersecurity.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Healthcare Expertise", desc: "Deep understanding of unique challenges and requirements for healthcare organizations." },
              { title: "Regulatory Expertise", desc: "Knowledge of HIPAA, GDPR, NIS2, and other healthcare regulations." },
              { title: "Proven Success", desc: "Track record of helping healthcare organizations achieve compliance." }
            ].map((card, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Benefits</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-10">
            Strengthen your cybersecurity and achieve compliance in healthcare.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-700 text-left max-w-2xl mx-auto">
            <li>• Protect patient personal data and confidentiality</li>
            <li>• Meet regulatory requirements and avoid penalties</li>
            <li>• Enhance patient trust and reputation</li>
            <li>• Strengthen cybersecurity resilience</li>
            <li>• Protect critical healthcare services</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Strengthen Your Cybersecurity?</h2>
        <p className="mb-6 text-white/90">Contact us today for a comprehensive assessment of your healthcare organization's cybersecurity.</p>
        <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-slate-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
