export default function SupportTools() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Support & Tools
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Comprehensive range of support services and free tools. Expert help, documentation,
          and ready-made templates for your compliance work.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#tools"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition"
          >
            Browse Tools
          </a>

          <a
            href="#support"
            className="px-6 py-3 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition"
          >
            Contact Support
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "98%", label: "Customer satisfaction" },
            { stat: "< 4h", label: "Average response time" },
            { stat: "500+", label: "Free tools" },
            { stat: "24/7", label: "Email support" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-indigo-600">{item.stat}</h3>
              <p className="text-slate-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section id="tools" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Support Services
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Find the right type of support for your needs — from documentation to personal consultation.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* SERVICE CARDS */}
            {[
              {
                title: "Knowledge Base",
                desc: "Comprehensive documentation, guides and frequently asked questions",
                items: [
                  "Installation guides",
                  "Troubleshooting",
                  "Frequently asked questions",
                  "Video tutorials",
                ],
              },
              {
                title: "Articles & Reference",
                desc: "Expert articles and reference materials for compliance work",
                items: [
                  "Implementation articles",
                  "Best practices guides",
                  "Regulation explanations",
                  "Technical documentation",
                ],
              },
              {
                title: "Downloadable Resources",
                desc: "Free templates, checklists and tools in Excel/PDF format",
                items: [
                  "Excel tools and templates",
                  "PDF checklists",
                  "Risk assessment tools",
                  "Audit preparation templates",
                ],
              },
              {
                title: "White Papers",
                desc: "In-depth research and analysis on cybersecurity topics",
                items: [
                  "Industry-specific analyses",
                  "Regulatory impact studies",
                  "Technology trends",
                  "Threat analyses",
                ],
              },
            ].map((box, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-slate-900">{box.title}</h3>

                <p className="mt-2 text-slate-600 text-sm">{box.desc}</p>

                <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                  {box.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="w-2 h-2 mt-1 bg-indigo-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  className="mt-5 inline-block text-indigo-600 font-medium hover:underline text-sm"
                  href="#"
                >
                  Explore Content →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT CHANNELS */}
      <section id="support" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Support Channels</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Choose the most suitable way to contact our experts.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Chat Support",
                desc: "Real-time chat with experts",
                availability: "9–17 weekdays",
                response: "< 5 min",
              },
              {
                title: "Email Support",
                desc: "Detailed help and documentation via email",
                availability: "24/7",
                response: "< 4h",
              },
              {
                title: "Phone Support",
                desc: "Direct connection to our senior experts",
                availability: "9–17 weekdays",
                response: "Immediate",
              },
              {
                title: "Video Consultation",
                desc: "Personal consultation and screen sharing",
                availability: "By appointment",
                response: "Same day",
              },
            ].map((channel, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-slate-900">{channel.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{channel.desc}</p>

                <div className="mt-4 space-y-1 text-sm text-slate-600">
                  <p><span className="font-semibold text-slate-800">Availability:</span> {channel.availability}</p>
                  <p><span className="font-semibold text-slate-800">Response:</span> {channel.response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold">Need Personal Help?</h2>
        <p className="mt-3 text-indigo-100 max-w-2xl mx-auto text-lg">
          Contact our experts to get tailored support and consultation.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-indigo-50 transition"
          >
            Contact Us
          </a>
          <a
            href="/demo"
            className="px-8 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-700 transition"
          >
            Book Demo
          </a>
        </div>
      </section>

    </div>
  );
}
