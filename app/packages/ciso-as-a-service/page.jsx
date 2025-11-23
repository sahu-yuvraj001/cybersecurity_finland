"use client";

import { Shield, Users, ClipboardList, AlertTriangle, Target, Phone } from "lucide-react";
import Link from "next/link";

export default function CISOService() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

      {/* HERO */}
      <section className="space-y-6">
        <h1 className="font-playfair text-4xl font-bold text-slate-900">
          CISO-as-a-Service Plans
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Get expert-level cybersecurity leadership without the full-time cost of hiring a Chief Information Security Officer.
          Our virtual CISO service provides strategic security oversight, compliance governance, and risk management expertise
          tailored to your organization’s needs and budget.
        </p>

        <div className="flex gap-4">
         <Link href="/contact" className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-slate-50 transition font-medium">
            Schedule Consultation
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-slate-50 transition font-medium">
            Learn More
          </Link>
        </div>
      </section>

      {/* WHY VIRTUAL CISO */}
      <section className="space-y-10">
        <h2 className="font-playfair text-3xl font-semibold text-slate-900">          Why Choose Virtual CISO Services?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card */}
          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-sm transition">
            <Users className="w-8 h-8 text-slate-800" />
            <h3 className="text-lg font-semibold text-slate-900">Flexible Engagement</h3>
            <p className="text-slate-600">Reduce cybersecurity leadership costs by 60–70%.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-sm transition">
            <Target className="w-8 h-8 text-slate-800" />
            <h3 className="text-lg font-semibold text-slate-900">Immediate Impact</h3>
            <p className="text-slate-600">Start with experienced professionals who deliver value from day one.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-sm transition">
            <Shield className="w-8 h-8 text-slate-800" />
            <h3 className="text-lg font-semibold text-slate-900">Proven Expertise</h3>
            <p className="text-slate-600">Led by senior cybersecurity executives.</p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-sm transition">
            <ClipboardList className="w-8 h-8 text-slate-800" />
            <h3 className="text-lg font-semibold text-slate-900">Scalable Service</h3>
            <p className="text-slate-600">Increase or decrease engagement as your organization evolves.</p>
          </div>

        </div>
      </section>

      {/* SERVICE RESPONSIBILITIES */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-slate-900">Comprehensive CISO Responsibilities</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card */}
          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-sm transition">
            <Target className="w-8 h-8 text-slate-800" />
            <h3 className="text-xl font-semibold">Strategic Planning</h3>
            <ul className="text-slate-600 list-disc ml-5 space-y-1">
              <li>Cybersecurity strategy development</li>
              <li>Risk management framework</li>
              <li>Budgeting & resource allocation</li>
              <li>Board-level reporting</li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-sm transition">
            <ClipboardList className="w-8 h-8 text-slate-800" />
            <h3 className="text-xl font-semibold">Compliance & Governance</h3>
            <ul className="text-slate-600 list-disc ml-5 space-y-1">
              <li>GDPR, ISO 27001, SOC 2</li>
              <li>Policy development & updates</li>
              <li>Audit coordination</li>
              <li>Vendor risk management</li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-sm transition">
            <AlertTriangle className="w-8 h-8 text-slate-800" />
            <h3 className="text-xl font-semibold">Incident Response</h3>
            <ul className="text-slate-600 list-disc ml-5 space-y-1">
              <li>Incident response plan</li>
              <li>Breach reporting</li>
              <li>Crisis communication</li>
              <li>Post-incident analysis</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">Choose Your CISO Service Plan</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Essential */}
          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow transition">
            <h3 className="text-xl font-semibold">Essential CISO</h3>
            <p className="text-slate-600">6-month minimum · 20 hours/month</p>
            <ul className="text-slate-600 list-disc ml-5 space-y-1">
              <li>Monthly strategy review</li>
              <li>Quarterly risk assessments</li>
              <li>Security policy development</li>
            </ul>
          <Link href="/contact" className="px-6 py-3 border border-slate-300 rounded-xl font-medium hover:bg-slate-50 transition">
              Get Started
            </Link>
          </div>

          {/* Professional */}
          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow transition">
            <h3 className="text-xl font-semibold">Professional CISO</h3>
            <p className="text-slate-600">12-month minimum · 40 hours/month</p>
            <ul className="text-slate-600 list-disc ml-5 space-y-1">
              <li>Bi-weekly strategy sessions</li>
              <li>Compliance program management</li>
              <li>Board presentation support</li>
            </ul>
           <Link href="/contact" className="px-6 py-3 border border-slate-300 rounded-xl font-medium hover:bg-slate-50 transition">
              Get Started
            </Link>
          </div>

          {/* Enterprise */}
          <div className="border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow transition">
            <h3 className="text-xl font-semibold">Enterprise CISO</h3>
            <p className="text-slate-600">24-month minimum · 80 hours/month</p>
            <ul className="text-slate-600 list-disc ml-5 space-y-1">
              <li>Weekly strategic sessions</li>
              <li>Full compliance oversight</li>
              <li>24/7 incident leadership</li>
            </ul>
            <Link href="/contact" className="px-6 py-3 border border-slate-300 rounded-xl font-medium hover:bg-slate-50 transition">
              Get Started
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
