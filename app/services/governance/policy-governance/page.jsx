export default function PolicyGovernance() {
  return (
    <div className="w-full bg-white text-slate-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Policy Governance</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Create a clear, owned, and maintained security policy architecture mapped to compliance requirements.
        </p>
      </section>

      {/* What You Get */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">What you get</h2>
          <p className="text-slate-600 max-w-3xl">
            A comprehensive policy framework where every policy is clearly owned, regularly updated,
            and linked to compliance requirements. A system that grows with your organization.
          </p>
        </div>
      </section>

      {/* Policy Framework Foundations */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-semibold">Policy Framework Foundations</h2>
        <p className="text-slate-600 max-w-3xl">
          We build a policy management system that supports your organizational objectives and meets
          regulatory requirements.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Policy Architecture</h3>
            <p className="text-slate-600">Hierarchical policy structure from standards to procedures</p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Ownership Model</h3>
            <p className="text-slate-600">Clear roles and responsibilities in policy management</p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Lifecycle Management</h3>
            <p className="text-slate-600">Policy creation, update and retirement processes</p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Compliance Mapping</h3>
            <p className="text-slate-600">Policy mapping to regulations and standards</p>
          </div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Policy Categories</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Organizational Policies */}
            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-3">Organizational Policies</h3>
              <p className="text-slate-600 mb-3">High-level strategic policies and principles</p>
              <ul className="text-slate-700 space-y-2">
                <li>• Information Security Policy</li>
                <li>• Risk Management Policy</li>
                <li>• Personnel Security</li>
              </ul>
            </div>

            {/* Operational Policies */}
            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-3">Operational Policies</h3>
              <p className="text-slate-600 mb-3">Policies guiding practical operations</p>
              <ul className="text-slate-700 space-y-2">
                <li>• Access Control Policy</li>
                <li>• Backup Policy</li>
                <li>• Change Management</li>
              </ul>
            </div>

            {/* Technical Policies */}
            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-3">Technical Policies</h3>
              <p className="text-slate-600 mb-3">Policies defining technical requirements for IT systems</p>
              <ul className="text-slate-700 space-y-2">
                <li>• Encryption Policy</li>
                <li>• Network Security Policy</li>
                <li>• Cloud Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Governance Process</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Planning",
              items: [
                "Policy architecture planning",
                "Ownership definition",
                "Scheduling and resourcing",
                "Stakeholder analysis",
              ],
            },
            {
              title: "Development",
              items: [
                "Policy drafting",
                "Stakeholder consultation",
                "Legal expert consultation",
                "Internal review",
              ],
            },
            {
              title: "Approval",
              items: [
                "Management review",
                "Formal approval",
                "Publication process",
                "Communication",
              ],
            },
            {
              title: "Maintenance",
              items: [
                "Regular reviews",
                "Update needs assessment",
                "Version control",
                "Archiving",
              ],
            },
          ].map((step, idx) => (
            <div key={idx} className="p-6 border rounded-2xl shadow-sm">
              <div className="text-4xl font-bold mb-4">{idx + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <ul className="space-y-2 text-slate-700">
                {step.items.map((i, index) => (
                  <li key={index}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Mapping */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Compliance Mapping</h2>
          <p className="text-slate-600 max-w-3xl mb-10">
            We link policies directly to regulations and standards for easy compliance tracking.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "ISO 27001", desc: "Annex A controls mapping to policies" },
              { title: "GDPR", desc: "Meeting data protection article requirements" },
              { title: "SOC 2", desc: "Meeting Trust Services Criteria requirements" },
              { title: "NIS2/DORA", desc: "Meeting EU regulation requirements" },
            ].map((c, i) => (
              <div key={i} className="p-6 border rounded-2xl bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Implementation Process</h2>

        <div className="grid md:grid-cols-5 gap-8">
          {[
            "Architecture Design",
            "Ownership Assignment",
            "Content Development",
            "Approval Process",
            "Maintenance Model",
          ].map((step, i) => (
            <div key={i} className="p-6 border rounded-2xl shadow-sm">
              <div className="text-4xl font-bold mb-4">{i + 1}</div>
              <p className="text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to build a policy framework?</h2>
          <p className="text-slate-300 mb-8">
            Let's discuss your policy needs and design a sustainable governance model.
          </p>

          <div className="flex gap-6 justify-center">
            <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow">
              Get in Touch
            </button>
            <button className="px-8 py-3 border border-white rounded-xl font-semibold">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}