export default function CisoServicePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">CISO-as-a-Service</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Expert Security Leadership on Demand — from strategy to execution, without full-time recruitment.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">Discuss Your Needs</button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-white shadow transition">Explore Service</button>
        </div>
      </section>

      {/* Core CISO Service Areas */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Core CISO Service Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Strategic Leadership",
              desc: "Security strategy development and execution",
            },
            {
              title: "Roadmap Planning",
              desc: "Long-term security planning and roadmaps",
            },
            {
              title: "Metrics & Reporting",
              desc: "KPI tracking and executive reporting",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Areas */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Leadership Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">Governance & Compliance</h3>
            <ul className="space-y-2 text-slate-600">
              <li>ISO 27001 management</li>
              <li>GDPR compliance</li>
              <li>SOC 2 preparation</li>
              <li>Risk management framework</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">Strategic Development</h3>
            <ul className="space-y-2 text-slate-600">
              <li>Zero Trust architecture</li>
              <li>Cloud security</li>
              <li>DevSecOps integration</li>
              <li>Modernization projects</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">Team Leadership</h3>
            <ul className="space-y-2 text-slate-600">
              <li>Skill development</li>
              <li>Recruitment strategy</li>
              <li>Team structure</li>
              <li>Performance management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables and Outcomes */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Deliverables and Outcomes</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 border rounded-2xl shadow bg-white">
            <h3 className="text-lg font-semibold mb-3">Strategic Documents</h3>
            <ul className="space-y-2 text-slate-600">
              <li>Security strategy</li>
              <li>Annual plan</li>
              <li>Technology roadmap</li>
              <li>Budget & resources</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow bg-white">
            <h3 className="text-lg font-semibold mb-3">Governance Documents</h3>
            <ul className="space-y-2 text-slate-600">
              <li>Policies & processes</li>
              <li>Risk register</li>
              <li>Compliance matrix</li>
              <li>Operating models</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow bg-white">
            <h3 className="text-lg font-semibold mb-3">Reporting</h3>
            <ul className="space-y-2 text-slate-600">
              <li>Monthly reports</li>
              <li>Quarterly reviews</li>
              <li>Board presentations</li>
              <li>Dashboards</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl shadow bg-white">
            <h3 className="text-lg font-semibold mb-3">Operational Support</h3>
            <ul className="space-y-2 text-slate-600">
              <li>Incident coordination</li>
              <li>Vendor management</li>
              <li>Project oversight</li>
              <li>Training programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Engagement Models</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: "Full-Service CISO",
            desc: "3-5 days/week — Comprehensive leadership",
            suit: "Mid-size enterprises",
          },
          {
            title: "Strategic CISO",
            desc: "1-2 days/week — Executive-level strategic guidance",
            suit: "Mature organizations",
          },
          {
            title: "Project CISO",
            desc: "Project-based — Interim leadership for special projects",
            suit: "Transformation projects",
          }].map((item, i) => (
            <div key={i} className="p-6 border rounded-2xl shadow bg-white hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 mb-2">{item.desc}</p>
              <p className="text-sm text-slate-500">Suited for: {item.suit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Measurable Outcomes */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Measurable Outcomes</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 border rounded-2xl shadow bg-white"><p className="text-3xl font-bold">+40%</p><p className="text-slate-600">Cybersecurity Maturity</p></div>
          <div className="p-6 border rounded-2xl shadow bg-white"><p className="text-3xl font-bold">99%</p><p className="text-slate-600">Regulatory Compliance</p></div>
          <div className="p-6 border rounded-2xl shadow bg-white"><p className="text-3xl font-bold">-60%</p><p className="text-slate-600">Incident Resolution Time</p></div>
          <div className="p-6 border rounded-2xl shadow bg-white"><p className="text-3xl font-bold">9.2/10</p><p className="text-slate-600">Executive Satisfaction</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Expert Security Leadership?</h2>
        <p className="text-slate-600 mb-8">Let's discuss your organization's needs and the most suitable CISO service model.</p>
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">Contact Us</button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-white shadow transition">Book Consultation</button>
        </div>
      </section>
    </div>
  );
}
