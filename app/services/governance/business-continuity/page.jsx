"use client";

import Image from "next/image";

export default function BusinessContinuity() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-20">
      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Business Continuity Management
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Ensure business resilience and rapid recovery from disruptions. We build comprehensive BCMS from strategies to exercises.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
            Start BCMS Project
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-white shadow">
            Explore Service
          </button>
        </div>
      </section>

      {/* CORE COMPONENTS */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Core BCMS Components
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Business Impact Analysis (BIA)", desc: "Critical process identification and disruption impact assessment" },
            { title: "Continuity Strategies", desc: "Alternative operating methods and contingency plan development" },
            { title: "Continuity Plans", desc: "Detailed operational procedures for crisis situations" },
            { title: "Exercises and Testing", desc: "Regular plan testing and staff training" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BIA SECTION */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Business Impact Analysis (BIA)
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Risk Assessment */}
          <div className="bg-white p-6 shadow rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Risk Assessment</h3>
            <ul className="text-slate-600 space-y-2">
              <li>Natural disasters</li>
              <li>Technology risks</li>
              <li>Personnel risks</li>
              <li>Supplier risks</li>
            </ul>
          </div>

          {/* Impact Analysis */}
          <div className="bg-white p-6 shadow rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Impact Analysis</h3>
            <ul className="text-slate-600 space-y-2">
              <li>Financial impact</li>
              <li>Operational impact</li>
              <li>Reputation risk</li>
              <li>Regulatory impacts</li>
            </ul>
          </div>

          {/* Recovery Timelines */}
          <div className="bg-white p-6 shadow rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Recovery Timelines</h3>
            <ul className="text-slate-600 space-y-2">
              <li>Recovery Time Objective</li>
              <li>Recovery Point Objective</li>
              <li>Minimum Service Level</li>
              <li>Maximum Tolerable Downtime</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTINUITY PLANS */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Types of Continuity Plans
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Crisis Management Plan",
              points: [
                "Crisis team activation",
                "Decision-making processes",
                "Communication strategies",
                "Media relations",
              ],
            },
            {
              title: "Business Continuity Plan",
              points: [
                "Alternative process activation",
                "Resource reallocation",
                "Supplier management",
                "Customer communication",
              ],
            },
            {
              title: "IT Disaster Recovery Plan",
              points: [
                "System backup",
                "Alternative IT resource activation",
                "Data recovery",
                "Technical support",
              ],
            },
            {
              title: "Recovery Plan",
              points: [
                "Normal operations restoration",
                "Lessons learned assessment",
                "Plan updates",
                "Stakeholder reporting",
              ],
            },
          ].map((card, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{card.title}</h3>
              <ul className="text-slate-600 space-y-2">
                {card.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXERCISES */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Exercise Types and Testing
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Tabletop Exercises", "Simulations", "Full-Scale Tests", "Component Tests"].map((type, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl border border-slate-200 text-center">
              <h3 className="text-xl font-semibold text-slate-800">{type}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Implementation Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            "BCMS Framework Design", 
            "BIA and Risk Assessment", 
            "Strategy Development", 
            "Plan Development", 
            "Testing and Maintenance" 
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl border border-slate-200 text-center">
              <h3 className="text-xl font-semibold text-slate-800">{i + 1}. {step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 py-10">
        <h2 className="text-3xl font-bold text-slate-900">Ready to Build Resilient Business?</h2>
        <p className="text-slate-600">Contact us to discuss your BCMS needs and implementation.</p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">Contact Us</button>
          <button className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-white shadow">Book Demo</button>
        </div>
      </section>
    </div>
  );
}