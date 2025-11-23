import Image from "next/image";
import Link from "next/link";

// app/eprivacy/page.jsx
export default function EprivacyPage() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* HEADER SECTION */}
      <section className="py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE CONTENT */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        ePrivacy & Cookie Compliance Services
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Comprehensive ePrivacy and cookie compliance solutions including consent 
        management, cookie audits, tracking governance, and digital marketing 
        compliance for EU regulations.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link 
          href="/contact" 
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition shadow-md"
        >
          Start Cookie Compliance
        </Link>

        <Link 
          href="/services" 
          className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-white shadow-sm transition"
        >
          View Our Services
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <div className="relative w-full max-w-xl h-[350px] lg:h-[430px]">
        <Image
          src="/eprivacy.jpg"   // change to your correct image
          alt="ePrivacy Cookie Compliance"
          fill
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>

  </div>
</section>


      {/* WHY IT MATTERS */}
      <section className="bg-gray-50 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold">Why ePrivacy & Cookie Compliance Matters</h2>
          <p className="text-gray-600 mt-3">
            Navigate complex cookie and tracking regulations with confidence while
            maintaining effective digital marketing and analytics capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            { title: "Regulatory Compliance" },
            { title: "Avoid Penalties" },
            { title: "Build Trust" },
            { title: "Optimize Marketing" },
            { title: "Technical Implementation" },
            { title: "Continuous Monitoring" },
          ].map((item, idx) => (
            <div
              key={idx}
             className="
              bg-white border border-slate-200 rounded-2xl p-6 shadow-sm 
              hover:shadow-lg transition-all duration-300
              hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">
                Add the supporting description here based on your content.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REGULATORY LANDSCAPE */}
      <section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold">ePrivacy Regulatory Landscape</h2>
          <p className="text-gray-600 mt-3">
            Navigate the complex web of EU cookie and electronic communication regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-white  border border-slate-200 rounded-2xl p-6 shadow-sm 
              hover:shadow-lg transition-all duration-300
              hover:-translate-y-1 cursor-pointer">
            <h3 className="font-semibold mb-3">Current Legal Framework</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>ePrivacy Directive (2002/58/EC)</li>
              <li>GDPR Article 5(3) Integration</li>
              <li>National Implementations</li>
              <li>Upcoming ePrivacy Regulation</li>
            </ul>
          </div>

          <div className="bg-white  border border-slate-200 rounded-2xl p-6 shadow-sm 
              hover:shadow-lg transition-all duration-300
              hover:-translate-y-1 cursor-pointer">
            <h3 className="font-semibold mb-3">Key Compliance Requirements</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Prior Informed Consent</li>
              <li>Clear Information</li>
              <li>Consent Management</li>
              <li>Withdrawal Rights</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold">Cookie Compliance Implementation Process</h2>
          <p className="text-gray-600 mt-3">
            Systematic approach to achieving comprehensive ePrivacy compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {["Audit & Discovery", "Legal Assessment", "Consent Implementation", "Monitoring"].map(
            (title, idx) => (
              <div key={idx} className="bg-white  border border-slate-200 rounded-2xl p-6 shadow-sm 
              hover:shadow-lg transition-all duration-300
              hover:-translate-y-1 cursor-pointer">
                <div className="w-10 h-10 mx-auto bg-orange-100 rounded-full mb-4 flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  Add description according to screenshot.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold">Comprehensive ePrivacy Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-white  border border-slate-200 rounded-2xl p-6 shadow-sm 
              hover:shadow-lg transition-all duration-300
              hover:-translate-y-1 cursor-pointer">
            <h3 className="font-semibold mb-4">Cookie Management & Technical Implementation</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Cookie auditing</li>
              <li>Consent platform integration</li>
              <li>Category classification</li>
              <li>Third-party tracking control</li>
            </ul>
          </div>

          <div className="bg-white  border border-slate-200 rounded-2xl p-6 shadow-sm 
              hover:shadow-lg transition-all duration-300
              hover:-translate-y-1 cursor-pointer">
            <h3 className="font-semibold mb-4">Legal & Governance Framework</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Policy development</li>
              <li>Multi-jurisdiction assessment</li>
              <li>Vendor + records updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMON CHALLENGES */}
      <section className="bg-gray-50 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold">Common Compliance Challenges</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "Hidden Tracking Technologies",
            "Complex Consent Flows",
            "Technical Implementation",
            "Multi-Jurisdiction Compliance",
            "Vendor Management",
            "Documentation & Proof",
          ].map((title, idx) => (
            <div key={idx} className="bg-white  border border-slate-200 rounded-2xl p-6 shadow-sm 
              hover:shadow-lg transition-all duration-300
              hover:-translate-y-1 cursor-pointer">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                Add your description here.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
