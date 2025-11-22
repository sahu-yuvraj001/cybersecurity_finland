export default function AntiFraudPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900">Anti-Fraud</h1>
        <p className="mt-4 text-lg text-slate-600">
          Protect your organization from BEC fraud, invoice fraud, and payment fraud with multi-layered
          controls and real-time detection.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700">
            Assess Risk Level
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 shadow">
            Explore Solution
          </button>
        </div>
      </div>

      {/* KEY FRAUD TYPES */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Key Fraud Types</h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
          Identify and understand the most common fraud types threatening organizations today.
        </p>

        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[{
            title: "Email Fraud (BEC)", desc: "Business Email Compromise and CEO fraud", extra: "Average €175k loss"
          },{
            title: "Invoice Fraud", desc: "Falsification and vendor data manipulation", extra: "Often undetected"
          },{
            title: "Payment Fraud", desc: "Payment system manipulation", extra: "Rapid loss accumulation"
          },{
            title: "Identity Fraud", desc: "Identity misuse and impersonation", extra: "Reputation and legal risks"
          }].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow border border-slate-200">
              <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
              <p className="mt-3 text-sm font-medium text-indigo-600">{item.extra}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THREE-LAYER DEFENSE */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Three-Layer Defense Strategy</h2>
        <p className="text-center text-slate-600 mt-2">Comprehensive approach to fraud prevention.</p>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {[{
            title: "Technology Controls",
            items: ["Email security", "MFA enforcement", "Payment validation", "Anomaly detection"]
          },{
            title: "Process Controls",
            items: ["Four-eyes principle", "Approval limits", "Vendor verification", "Change management"]
          },{
            title: "Human Controls",
            items: ["Awareness training", "Phishing simulations", "Reporting channels", "Role definition"]
          }].map((layer, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow border border-slate-200">
              <h3 className="font-semibold text-lg text-slate-900">{layer.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                {layer.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* DETECTION METHODS */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Detection Methods</h2>
        <p className="text-center text-slate-600 mt-2">Advanced methods for early detection.</p>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {[{
            title: "Real-time Detection",
            items: ["Email analysis", "Payment anomalies", "Behavioral patterns", "Geolocation tracking"]
          },{
            title: "Trend Analysis",
            items: ["Vendor analytics", "Payment behavior", "Timing analysis", "Volume changes"]
          },{
            title: "Forensic Analysis",
            items: ["Digital forensics", "Data mining", "Network analysis", "Timeline reconstruction"]
          }].map((method, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow border border-slate-200">
              <h3 className="font-semibold text-lg text-slate-900">{method.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                {method.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* RESPONSE FRAMEWORK */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Response Framework</h2>
        <p className="text-center text-slate-600 mt-2">Rapid and systematic response steps.</p>

        <div className="grid gap-6 mt-10 md:grid-cols-4">
          {["Detection", "Containment", "Investigation", "Recovery"].map((phase, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow border border-slate-200">
              <h3 className="font-semibold text-lg text-slate-900">{phase}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Target Metrics</h2>
        <p className="text-center text-slate-600 mt-2">Measurable outcomes of fraud prevention.</p>

        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[{
            title: "Fraud Loss Reduction", value: "-85% annually"
          },{
            title: "Detection Time", value: "<15 minutes"
          },{
            title: "False Positives", value: "<5% of alerts"
          },{
            title: "Staff Awareness", value: "95% trained"
          }].map((metric, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow border border-slate-200 text-center">
              <h3 className="font-semibold text-lg text-slate-900">{metric.title}</h3>
              <p className="mt-2 text-indigo-600 font-semibold text-xl">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Protect Your Organization from Fraud?</h2>
        <p className="text-slate-600 mt-2">Start planning and implementing your anti-fraud program with experts.</p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700">
            Contact Us
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 shadow">
            Request Risk Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
