export default function BlogGuidesPage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900">Blog & Guides</h1>

          <p className="mt-4 text-lg text-slate-600">
            Expert Insights, Practical Guides & Industry Resources
          </p>

          <p className="mt-3 text-slate-500">
            Stay ahead of cybersecurity trends with our expert insights, comprehensive implementation guides, 
            and practical resources. From compliance frameworks to emerging threats, we cover everything you need.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition">
              View All
            </button>
            <button className="px-6 py-3 bg-white border border-slate-300 rounded-xl font-semibold shadow hover:bg-slate-100 transition">
              Get Expert Help
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-indigo-600">10k+</p>
            <p className="text-slate-600">Monthly readers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">150+</p>
            <p className="text-slate-600">Expert articles</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">25+</p>
            <p className="text-slate-600">Implementation guides</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">50+</p>
            <p className="text-slate-600">Webinar recordings</p>
          </div>
        </div>

        {/* FEATURED CONTENT */}
        <h2 className="mt-24 text-3xl font-bold text-slate-900">Featured Content</h2>
        <p className="mt-2 text-slate-600">Latest expert articles and implementation guides</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg p-6 transition">
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-lg">
              Regulation
            </span>

            <p className="mt-3 text-slate-500 text-sm">8 min read</p>

            <h3 className="mt-2 text-xl font-semibold">
              NIS2 Directive: Finland Implementation and Impact
            </h3>

            <p className="mt-3 text-slate-600">
              Comprehensive analysis of NIS2 directive national implementation and its impact.
            </p>

            <div className="mt-4 text-sm text-slate-500">DataNova Team • 2024-12-15</div>

            <button className="mt-6 w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
              Read More
            </button>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg p-6 transition">
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-lg">
              Standards
            </span>

            <p className="mt-3 text-slate-500 text-sm">12 min read</p>

            <h3 className="mt-2 text-xl font-semibold">
              ISO 27001:2022 – What Changed and How to Prepare
            </h3>

            <p className="mt-3 text-slate-600">
              Detailed comparison plus practical transition guide for organizations.
            </p>

            <div className="mt-4 text-sm text-slate-500">Security Expert • 2024-12-10</div>

            <button className="mt-6 w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
              Read More
            </button>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg p-6 transition">
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-lg">
              Finance
            </span>

            <p className="mt-3 text-slate-500 text-sm">10 min read</p>

            <h3 className="mt-2 text-xl font-semibold">
              DORA Regulation: Digital Operational Resilience
            </h3>

            <p className="mt-3 text-slate-600">
              Requirements and implementation of digital operational resilience in finance.
            </p>

            <div className="mt-4 text-sm text-slate-500">Compliance Specialist • 2024-12-05</div>

            <button className="mt-6 w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
              Read More
            </button>
          </div>

        </div>

        {/* CONTENT CATEGORIES */}
        <h2 className="mt-24 text-3xl font-bold text-slate-900">Content Categories</h2>
        <p className="mt-2 text-slate-600">Find content by category - from guides to webinars</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">

          {/* CATEGORY CARD */}
          <div className="p-6 border border-slate-200 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Implementation Guides</h3>
            <p className="mt-2 text-slate-600">Detailed, step-by-step guides for implementing compliance frameworks.</p>
            <p className="mt-4 font-semibold text-indigo-600">25+ guides</p>
            <button className="mt-4 px-5 py-2 border border-indigo-600 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50">
              Explore Content
            </button>
          </div>

          <div className="p-6 border border-slate-200 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Webinars & Events</h3>
            <p className="mt-2 text-slate-600">Expert webinars, virtual events and training materials.</p>
            <p className="mt-4 font-semibold text-indigo-600">Weekly</p>
            <button className="mt-4 px-5 py-2 border border-indigo-600 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50">
              Explore Content
            </button>
          </div>

          <div className="p-6 border border-slate-200 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Success Stories</h3>
            <p className="mt-2 text-slate-600">Customer cases and successful compliance implementations.</p>
            <p className="mt-4 font-semibold text-indigo-600">15+ stories</p>
            <button className="mt-4 px-5 py-2 border border-indigo-600 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50">
              Explore Content
            </button>
          </div>

          <div className="p-6 border border-slate-200 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Trust Center</h3>
            <p className="mt-2 text-slate-600">Certifications, audit reports and security principles.</p>
            <p className="mt-4 font-semibold text-indigo-600">Real-time</p>
            <button className="mt-4 px-5 py-2 border border-indigo-600 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50">
              Explore Content
            </button>
          </div>

          <div className="p-6 border border-slate-200 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Readiness Assessments</h3>
            <p className="mt-2 text-slate-600">Free self-assessment tools and readiness evaluations.</p>
            <p className="mt-4 font-semibold text-indigo-600">10+ tools</p>
            <button className="mt-4 px-5 py-2 border border-indigo-600 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50">
              Explore Content
            </button>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-24 bg-indigo-600 text-white rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold">Get Expert Insights</h2>

          <p className="mt-4 opacity-90">
            Join 10,000+ security professionals getting weekly insights
          </p>

          <div className="mt-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-4 w-full rounded-xl text-slate-900"
            />

            <button className="mt-4 w-full px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold shadow hover:bg-slate-100 transition">
              Subscribe Now
            </button>

            <p className="mt-3 text-sm opacity-80">No spam. You can unsubscribe at any time.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
