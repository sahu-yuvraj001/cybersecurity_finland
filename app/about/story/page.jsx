"use client";
import React from "react";
import { ShieldCheck, Globe, Users, Building } from "lucide-react";

export default function AboutCSF() {
  return (
    <div className="bg-white text-slate-800">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About CSF</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Cyber Security Finland – Your Trusted Security Partner.  
          CSF provides comprehensive cybersecurity services to protect organizations 
          and maintain safe digital environments worldwide.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-6 text-slate-700">
          <h2 className="text-3xl font-semibold text-slate-900 mb-3">About CSF</h2>

          <p>
            CSF provides Governance, Risk & Compliance Services, Security Testing, 
            Supply Chain Information Risk Management, Secure Code Testing, Security 
            Awareness Training, Virtual CISO Service, Red Team Testing, Information 
            Security Threat & Risk Assessments, Information Security Management Systems, 
            Social Engineering, Gap Analysis, Risk Assessment, PCI DSS, DPA & GDPR, 
            ISO 27001, SOC 2 Type 2, Cyber Essentials and Penetration Testing.
          </p>
          <p>
            Our goal is to create and maintain safe environments by providing threat 
            analysis, protection, investigations, consulting, intelligence and 
            security training services everywhere clients go. We created an easier, 
            safer and faster way to collaborate and manage security and penetration 
            testing projects and programs.
          </p>
          <p>
            CSF's team of seasoned experts customize services based on specific client 
            needs and work around the clock to discreetly prevent issues before they occur.  
            Our proactive approach and highly respected employees have made us the global 
            standard in protective and investigative services.
          </p>

          <p>
            Cybersecurity Support includes Security Assessments, Network Operations & Defense,
            Certification and Accreditation, Perimeter Defense Design, and Independent 
            Security Testing. Founded in 2021 and headquartered in Helsinki, we specialize in 
            cyber security, risk assessment, risk management, penetration testing, and 
            vulnerability management.
          </p>

          <p className="text-sm">
            Website: cybersecurity.fi | Phone: +358402211119
          </p>
        </div>
      </section>

      {/* Company Information Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8">Company Information</h2>

          <div className="grid md:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white shadow rounded-2xl border">
              <Building className="h-10 w-10 mb-3 text-blue-700" />
              <h3 className="text-xl font-semibold">2021</h3>
              <p className="text-slate-600">Founded in Helsinki, Uusimaa</p>
            </div>

            <div className="p-6 bg-white shadow rounded-2xl border">
              <Users className="h-10 w-10 mb-3 text-blue-700" />
              <h3 className="text-xl font-semibold">11–50</h3>
              <p className="text-slate-600">Cybersecurity Specialists</p>
            </div>

            <div className="p-6 bg-white shadow rounded-2xl border">
              <Globe className="h-10 w-10 mb-3 text-blue-700" />
              <h3 className="text-xl font-semibold">Finland</h3>
              <p className="text-slate-600">Headquartered in Helsinki</p>
            </div>

            <div className="p-6 bg-white shadow rounded-2xl border">
              <ShieldCheck className="h-10 w-10 mb-3 text-blue-700" />
              <h3 className="text-xl font-semibold">Global</h3>
              <p className="text-slate-600">Worldwide Protective Services</p>
            </div>

          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8">Our Specialties</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Cyber Security", "Comprehensive threat management and security solutions."],
              ["Risk Assessment", "Detailed, accurate risk analysis for organizations."],
              ["Risk Management", "Strategic risk frameworks and implementation."],
              ["Penetration Testing", "Advanced penetration testing and vulnerability assessments."],
              ["Vulnerability Management", "Continuous monitoring and remediation strategies."],
            ].map(([title, desc], index) => (
              <div key={index} className="p-6 bg-white shadow rounded-2xl border">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
