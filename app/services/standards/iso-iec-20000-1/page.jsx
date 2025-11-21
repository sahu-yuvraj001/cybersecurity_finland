import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
export default function ISO20000() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            IT Service Management Excellence
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            ISO/IEC <span className="text-purple-600">20000-1</span>
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            IT service management alignment for MSSP processes and SLAs.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition">
              Start ITSM Alignment
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* MSSP Service Management Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            MSSP Service Management Solutions
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT service management alignment for managed security service providers.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {
                title: "MSSP Process Alignment",
                points: [
                  "SOC process optimization",
                  "Incident response workflow standardization",
                  "Threat monitoring alignment",
                  "Event management processes"
                ]
              },
              {
                title: "SLA Framework Development",
                points: [
                  "Service level objectives (SLOs)",
                  "Response time guarantees",
                  "Uptime commitments",
                  "Performance measurements"
                ]
              },
              {
                title: "Service Management Implementation",
                points: [
                  "Service catalog development",
                  "Change management processes",
                  "Configuration database (CMDB) setup",
                  "Problem & incident management"
                ]
              },
              {
                title: "Continuous Improvement",
                points: [
                  "Service performance monitoring",
                  "Customer satisfaction measurement",
                  "Optimization initiatives",
                  "Ongoing service reviews"
                ]
              }
            ].map((box, index) => (
              <div
                key={index}
                className="p-6 bg-purple-50 rounded-xl border border-purple-100 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-purple-700 mb-3">
                  {box.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {box.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✔</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Processes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            ISO/IEC 20000-1 Key Processes
          </h2>
          <p className="text-gray-600 text-center mt-3 max-w-3xl mx-auto">
            Comprehensive coverage of all required service management processes.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {[
              "Service Level Management",
              "Availability Management",
              "Capacity Management",
              "Information Security Management",
              "Incident Management",
              "Problem Management",
              "Change Management",
              "Release Management",
              "Configuration Management",
              "Supplier Management",
              "Service Continuity",
              "Service Reporting"
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 bg-white rounded-lg border border-gray-200 shadow-sm text-gray-700 text-center font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Benefits for MSSPs</h2>

          <div className="grid md:grid-cols-5 gap-8 mt-14">
            {[
              { title: "Enhanced Service Quality" },
              { title: "Improved SLA Compliance" },
              { title: "Better Risk Management" },
              { title: "Customer Confidence" },
              { title: "International Recognition" }
            ].map((benefit, i) => (
              <div key={i} className="p-4">
                <FaCheckCircle className="w-10 h-10  text-blue-500 rounded-full mx-auto"/>
                
                <p className="mt-4 text-gray-700 font-semibold">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-gradient-to-b from-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Our Implementation Approach</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="space-y-6">
              {[
                "Assessment & Gap Analysis",
                "Process Design & Documentation",
                "SLA Development & Integration",
                "Implementation & Training",
                "Certification & Continuous Improvement"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    {i + 1}
                  </div>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
  <h3 className="text-xl font-bold">Ready to Enhance Your MSSP Services?</h3>
  <p className="mt-2 text-white/80">
    Achieve ISO/IEC 20000-1 certification and demonstrate service excellence.
  </p>

  {/* Center button properly */}
  <div className="mt-6 flex justify-center">
    <Link
      href="/contact"
      className="px-6 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100 transition"
    >
      Start Your Journey
    </Link>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Why Choose ISO/IEC 20000-1?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              "Service Quality",
              "Operational Efficiency",
              "Cost Optimization",
              "Customer Satisfaction",
              "Risk Management",
              "Compliance & Governance"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white">
        <h2 className="text-3xl font-bold">Transform Your IT Service Delivery</h2>
        <p className="mt-3 max-w-2xl mx-auto text-white/80">
          Implement ISO/IEC 20000-1 to achieve service management excellence.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/contact" className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 shadow">
            Start ITSM Transformation
          </Link>

          <Link href="/about" className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
