"use client";

import { CheckCircle, Shield, Clock, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ISO27001FastTrack() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight">
            ISO 27001 Fast-Track:  
            <span className="text-indigo-700 block mt-2">
              Complete Implementation in 90–120 Days
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            From assessment to certification in record time.  
            Transform your information security management in just 3–4 months with our proven fast-track methodology.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-indigo-700 text-white hover:bg-indigo-800 transition flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
           

            
              <Link href="/contact" className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition">
                Learn More
              </Link>
           
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">            Fast-Track Implementation Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* STEP 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-indigo-700 font-semibold">Step 1</p>
              <h3 className="text-xl font-semibold mt-2">Assessment & Planning</h3>
              <p className="text-sm text-slate-500 mb-4">Weeks 1–2</p>

              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Full security posture assessment</li>
                <li>• Gap analysis & risk assessment</li>
                <li>• Implementation roadmap</li>
              </ul>
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-indigo-700 font-semibold">Step 2</p>
              <h3 className="text-xl font-semibold mt-2">Implementation Services</h3>
              <p className="text-sm text-slate-500 mb-4">Weeks 3–8</p>

              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• ISMS framework design</li>
                <li>• 50+ policies & procedures</li>
                <li>• Control deployment & risk treatment</li>
              </ul>
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-indigo-700 font-semibold">Step 3</p>
              <h3 className="text-xl font-semibold mt-2">Training & Documentation</h3>
              <p className="text-sm text-slate-500 mb-4">Weeks 9–10</p>

              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Company-wide staff training</li>
                <li>• Complete documentation pack</li>
                <li>• Tools & implementation systems</li>
              </ul>
            </motion.div>

            {/* STEP 4 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-indigo-700 font-semibold">Step 4</p>
              <h3 className="text-xl font-semibold mt-2">Certification & Support</h3>
              <p className="text-sm text-slate-500 mb-4">Weeks 11–12</p>

              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Stage 1 & Stage 2 audit prep</li>
                <li>• Certification body liaison</li>
                <li>• 12-month support & guidance</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-6 lg:px-12 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">            What’s Included
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="space-y-4 text-slate-700">
              {[
                "Achieve certification 3x faster than traditional approaches",
                "Comprehensive documentation package included",
                "Dedicated project manager assigned",
                "Weekly progress reviews and reporting",
                "Post-certification maintenance support",
                "Risk register and treatment plan",
                "Employee training & awareness program",
                "Incident response procedures"
              ].map((item, i) => (
                <p key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-indigo-600 mt-1" size={20} />
                  {item}
                </p>
              ))}
            </div>

            {/* RIGHT */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold mb-4">Package Includes</h3>

              <ul className="text-slate-700 space-y-3 text-sm">
                <li>• Complete ISO 27001 implementation</li>
                <li>• All required documentation</li>
                <li>• Staff training (up to 20 employees)</li>
                <li>• Internal audit & gap analysis</li>
                <li>• Certification audit support</li>
                <li>• 3 months post-certification support</li>
              </ul>
            </motion.div>

          </div>

          <div className="text-center mt-12">
            
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-indigo-700 text-white hover:bg-indigo-800 transition text-lg font-medium flex items-center gap-2 mx-auto">
                Get Started Today <ArrowRight size={20} />
              </Link>
          
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">            Ready to Fast-Track Your ISO 27001 Certification?
          </h2>

          <p className="text-lg text-slate-600 mt-4">
            Join over 50 organizations that have achieved certification with our fast-track program.
          </p>

          
            <Link href="/contact" className="mt-8 px-8 py-4 rounded-xl bg-indigo-700 text-white hover:bg-indigo-800 transition flex items-center gap-2 mx-auto text-lg">
              Schedule Consultation <ArrowRight size={20} />
            </Link>

        </div>
      </section>

    </div>
  );
}
