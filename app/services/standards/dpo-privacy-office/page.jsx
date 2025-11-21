'use client';

import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Users, FileText, AlertTriangle, Lock, Eye, Scale, Bell, MessageSquare, TrendingUp, BookOpen, UserCheck, Activity } from 'lucide-react';
import Link from 'next/link';

export default function DPOPrivacyPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceModels = [
    {
      title: "Virtual DPO",
      badge: "Part-time",
      badgeColor: "bg-teal-100 text-teal-700",
      description: "Remote DPO services with regular check-ins and oversight",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "On-site DPO",
      badge: "Flexible",
      badgeColor: "bg-blue-100 text-blue-700",
      description: "Regular on-site presence for complex organizations",
      icon: <UserCheck className="w-8 h-8" />
    },
    {
      title: "Project-based",
      badge: "As needed",
      badgeColor: "bg-purple-100 text-purple-700",
      description: "Specific privacy projects and assessments",
      icon: <Activity className="w-8 h-8" />
    }
  ];

  const gdprCompliance = [
    { title: "Article 30 RoPA Creation", icon: <FileText className="w-6 h-6" /> },
    { title: "Article 35 DPIA Execution", icon: <Shield className="w-6 h-6" /> },
    { title: "Article 37 DPO Appointment", icon: <UserCheck className="w-6 h-6" /> },
    { title: "Article 33/34 Breach Notification", icon: <AlertTriangle className="w-6 h-6" /> },
    { title: "Article 13/14 Privacy Notices", icon: <FileText className="w-6 h-6" /> },
    { title: "Article 7 Consent Management", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Outsourced DPO Services",
      description: "Qualified Data Protection Officer providing expert privacy oversight and regulatory compliance"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Protection Impact Assessments",
      description: "Comprehensive DPIAs for high-risk processing activities and new projects"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Records of Processing Activities",
      description: "Creation and maintenance of detailed RoPAs for GDPR Article 30 compliance"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Privacy Governance & Policies",
      description: "Development of privacy frameworks, policies, and governance structures"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Breach Management & Response",
      description: "Incident response, breach assessment, and regulatory notification support"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Regulatory Liaison",
      description: "Direct communication with supervisory authorities and regulatory representation"
    }
  ];

  const deliverables = [
    "Qualified DPO appointment and services",
    "Privacy program assessment and roadmap",
    "Data Protection Impact Assessments (DPIAs)",
    "Records of Processing Activities (RoPAs)",
    "Privacy policies and procedures framework",
    "Data breach response procedures",
    "Staff privacy training programs",
    "Regulatory correspondence and liaison"
  ];

  const benefits = [
    "Meet GDPR DPO appointment requirements",
    "Expert privacy guidance without full-time costs",
    "Reduced regulatory risk and potential fines",
    "Professional breach response capabilities",
    "Enhanced customer and stakeholder trust"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-cyan-600/5 to-blue-600/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lock className="w-4 h-4" />
              <span>GDPR Compliance & Privacy Leadership</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              DPO/Privacy <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Office-as-a-Service</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Expert outsourced Data Protection Officer services providing comprehensive privacy governance, GDPR compliance, and regulatory liaison
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Our qualified DPO-as-a-Service provides organizations with expert privacy leadership without the cost of a full-time executive. We handle all aspects of data protection compliance from DPIAs to breach management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get DPO Support
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-teal-300">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Overview</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-teal-100">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Under GDPR Article 37, many organizations are required to appoint a Data Protection Officer. Our DPO-as-a-Service provides qualified, experienced privacy professionals who can serve as your organization's DPO, ensuring compliance while providing strategic privacy guidance.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We offer flexible engagement models from virtual DPO services to on-site support, tailored to your organization's specific privacy needs and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Service Models</h2>
            <p className="text-xl text-slate-600">Flexible DPO services tailored to your organization's needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceModels.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-teal-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{model.title}</h3>
                <div className="mb-4">
                  <span className={`${model.badgeColor} px-4 py-2 rounded-full text-sm font-semibold`}>
                    {model.badge}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Article Compliance */}
      <section id="compliance" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">GDPR Article Compliance</h2>
            <p className="text-xl text-slate-600">Comprehensive coverage of key GDPR requirements</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gdprCompliance.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-teal-100 hover:border-teal-300 hover:scale-105"
              >
                <div className="inline-flex w-16 h-16 bg-white rounded-xl items-center justify-center text-teal-600 mb-4 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our DPO Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our DPO Services</h2>
            <p className="text-xl text-slate-600">Comprehensive privacy services covering all aspects of data protection compliance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-teal-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get & Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You Get */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 shadow-xl border-2 border-slate-200">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">What You Get</h2>
              <div className="space-y-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 shadow-xl border-2 border-slate-200">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Key Benefits</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-slate-700 text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Expert Privacy Leadership?</h2>
          <p className="text-xl text-teal-100 mb-10">Contact us today to discuss your DPO and privacy compliance requirements</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-5 bg-white text-teal-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Started
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-teal-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/30">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
}