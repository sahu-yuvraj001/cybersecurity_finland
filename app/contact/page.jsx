export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg max-w-2xl opacity-90">
            Ready to transform your cybersecurity posture?  
            Our experts are here to help you strengthen compliance, improve security, 
            and protect your business in a rapidly evolving digital world.
          </p>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-14">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Contact Information
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We’re here to guide you through complex cybersecurity and compliance challenges.  
            Reach out through the options below — our team usually responds within 24 hours.
          </p>

          {/* Phone */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
            <p className="text-slate-600 mt-1">+358 44 5040308</p>
          </div>

          {/* Email */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Email</h3>
            <p className="text-slate-600 mt-1">info@cybersecurity.fi</p>
          </div>

          {/* Additional Info */}
          <div className="mt-10 p-6 bg-white shadow-lg rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Why Contact Us?
            </h3>
            <ul className="list-disc ml-5 mt-3 text-slate-700 space-y-2">
              <li>Get industry-best compliance and security guidance</li>
              <li>Schedule a cybersecurity assessment</li>
              <li>Get help with regulatory frameworks (GDPR, NIS2, ISO, etc.)</li>
              <li>Discuss enterprise-level GRC solutions</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Send Us a Message
          </h2>

          <form className="bg-white p-8 rounded-xl shadow-xl border border-slate-200 space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full p-3 h-32 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-t border-slate-200 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Join hundreds of organizations that trust us with their cybersecurity, 
          risk management, and compliance needs.
        </p>
        <a
          href="#"
          className="px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition shadow-lg"
        >
          Schedule a Consultation
        </a>
      </section>
    </div>
  );
}
