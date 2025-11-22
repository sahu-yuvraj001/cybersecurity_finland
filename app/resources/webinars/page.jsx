export default function WebinarsPage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* MAIN TITLE */}
        <h1 className="text-4xl font-bold text-slate-900 text-center">
          Expert-Led Cybersecurity Webinars
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-lg text-slate-600 text-center max-w-3xl mx-auto">
          Free Educational Sessions for Cybersecurity Professionals
        </p>

        {/* DESCRIPTION */}
        <p className="mt-6 text-slate-600 text-center max-w-3xl mx-auto">
          Join our expert-led webinars to stay updated on the latest cybersecurity regulations, 
          standards, and best practices. All sessions are free and include Q&A opportunities.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#upcoming"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition"
          >
            View Upcoming Webinars
          </a>
          <a
            href="#past"
            className="px-6 py-3 bg-white border border-slate-300 text-slate-900 font-semibold rounded-xl shadow hover:bg-slate-100 transition"
          >
            Browse Past Sessions
          </a>
        </div>

        {/* UPCOMING WEBINARS */}
        <h2 id="upcoming" className="mt-24 text-3xl font-bold text-slate-900">
          Upcoming Webinars
        </h2>
        <p className="mt-2 text-slate-600">
          Join our upcoming expert-led sessions covering the latest cybersecurity regulations and best practices.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg transition p-6">
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-lg font-medium">
              Live Webinar
            </span>

            <p className="mt-4 text-slate-500 text-sm">September 15, 2025 • 14:00 - 15:30</p>

            <h3 className="mt-2 text-xl font-semibold">
              NIS2 Implementation: What Finnish Companies Need to Know
            </h3>

            <p className="mt-3 text-slate-600">
              Essential guidance for organizations preparing for NIS2 compliance requirements.
            </p>

            <p className="mt-4 font-medium text-slate-800">Maria Korhonen, CISO</p>
            <p className="text-slate-500 text-sm">250+ registered</p>

            <button className="mt-6 w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
              Register Now
            </button>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg transition p-6">
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-lg font-medium">
              Live Webinar
            </span>

            <p className="mt-4 text-slate-500 text-sm">September 22, 2025 • 13:00 - 14:30</p>

            <h3 className="mt-2 text-xl font-semibold">
              DORA Compliance for Financial Services
            </h3>

            <p className="mt-3 text-slate-600">
              Preparing financial institutions for digital operational resilience requirements.
            </p>

            <p className="mt-4 font-medium text-slate-800">Jukka Virtanen, Lead Consultant</p>
            <p className="text-slate-500 text-sm">180+ registered</p>

            <button className="mt-6 w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
              Register Now
            </button>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg transition p-6">
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-lg font-medium">
              Live Webinar
            </span>

            <p className="mt-4 text-slate-500 text-sm">September 29, 2025 • 15:00 - 16:00</p>

            <h3 className="mt-2 text-xl font-semibold">
              ISO 27001:2022 Changes and Impact
            </h3>

            <p className="mt-3 text-slate-600">
              Understanding the latest updates and their implications for your organization.
            </p>

            <p className="mt-4 font-medium text-slate-800">Anna Salminen, Senior Security Advisor</p>
            <p className="text-slate-500 text-sm">200+ registered</p>

            <button className="mt-6 w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
              Register Now
            </button>
          </div>

        </div>

        {/* PAST WEBINARS */}
        <h2 id="past" className="mt-24 text-3xl font-bold text-slate-900">
          Past Webinars
        </h2>
        <p className="mt-2 text-slate-600">
          Catch up on our previous sessions. All recorded webinars are available for on-demand viewing.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">

          {/* PAST CARD 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg transition p-6">
            <span className="px-3 py-1 text-sm bg-slate-200 text-slate-700 rounded-lg font-medium">
              Recorded
            </span>

            <p className="mt-4 text-slate-500 text-sm">June 15, 2025 • 850+ views</p>

            <h3 className="mt-2 text-xl font-semibold">
              GDPR Compliance: Three Years Later
            </h3>

            <p className="mt-3 text-slate-600">
              Lessons learned and best practices from three years of GDPR implementation.
            </p>

            <button className="mt-6 w-full px-6 py-3 bg-white border border-slate-300 rounded-xl font-semibold hover:bg-slate-100 transition">
              Watch Recording
            </button>
          </div>

          {/* PAST CARD 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg transition p-6">
            <span className="px-3 py-1 text-sm bg-slate-200 text-slate-700 rounded-lg font-medium">
              Recorded
            </span>

            <p className="mt-4 text-slate-500 text-sm">May 20, 2025 • 650+ views</p>

            <h3 className="mt-2 text-xl font-semibold">
              Cyber Essentials Plus: Implementation Guide
            </h3>

            <p className="mt-3 text-slate-600">
              Step-by-step guide to implementing Cyber Essentials Plus controls.
            </p>

            <button className="mt-6 w-full px-6 py-3 bg-white border border-slate-300 rounded-xl font-semibold hover:bg-slate-100 transition">
              Watch Recording
            </button>
          </div>

          {/* PAST CARD 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg transition p-6">
            <span className="px-3 py-1 text-sm bg-slate-200 text-slate-700 rounded-lg font-medium">
              Recorded
            </span>

            <p className="mt-4 text-slate-500 text-sm">April 18, 2025 • 920+ views</p>

            <h3 className="mt-2 text-xl font-semibold">
              SOC 2 Type II: Audit Preparation
            </h3>

            <p className="mt-3 text-slate-600">
              Comprehensive guide to preparing for SOC 2 Type II audits.
            </p>

            <button className="mt-6 w-full px-6 py-3 bg-white border border-slate-300 rounded-xl font-semibold hover:bg-slate-100 transition">
              Watch Recording
            </button>
          </div>

        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 text-center">
          <p className="text-xl font-semibold text-slate-800">
            Looking for more cybersecurity training resources?
          </p>

          <a
            href="/resources"
            className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Browse All Resources
          </a>

          <h2 className="mt-20 text-3xl font-bold text-slate-900">
            Transform Your Cybersecurity Today.
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Begin your cybersecurity journey and discover how our security platform can
            revolutionize your digital protection and compliance.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>

      </div>
    </div>
  );
}
