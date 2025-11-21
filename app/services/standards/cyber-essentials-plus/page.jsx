'use client';

import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Clock, FileCheck, AlertTriangle, Lock, Users, TrendingUp, FileText, Target, BarChart, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function CyberEssentialsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certificationOptions = [
    {
      title: "Cyber Essentials",
      description: "Self-assessment questionnaire demonstrating basic controls",
      timeframe: "30-45 days",
      testing: "Self-declaration",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "Cyber Essentials Plus",
      description: "Independent technical verification of implemented controls",
      timeframe: "45-60 days",
      testing: "External testing",
      gradient: "from-blue-500 to-indigo-500",
      featured: true
    }
  ];

  const essentialControls = [
    { title: "Firewalls and Gateway Protection", icon: <Shield className="w-6 h-6" /> },
    { title: "Secure Configuration", icon: <Lock className="w-6 h-6" /> },
    { title: "User Access Control", icon: <Users className="w-6 h-6" /> },
    { title: "Malware Protection", icon: <AlertTriangle className="w-6 h-6" /> },
    { title: "Software Security Updates", icon: <RefreshCw className="w-6 h-6" /> }
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Rapid Hardening & Implementation",
      description: "Fast-track implementation of Cyber Essentials controls with minimal business disruption"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Pre-Assessment Testing",
      description: "Comprehensive testing and validation of controls before formal certification assessment"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Certification Preparation",
      description: "Complete preparation for both Cyber Essentials and Cyber Essentials Plus assessments"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Gap Analysis & Remediation",
      description: "Detailed gap analysis with prioritized remediation plans for quick compliance"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation & Evidence",
      description: "Comprehensive documentation and evidence collection for certification requirements"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Ongoing Compliance",
      description: "Annual renewal support and continuous compliance monitoring"
    }
  ];

  const deliverables = [
    "Cyber Essentials readiness assessment",
    "Control implementation and hardening",
    "Pre-assessment testing and validation",
    "Certification application support",
    "Evidence documentation package",
    "Staff training and awareness materials",
    "Annual renewal preparation",
    "Continuous monitoring procedures"
  ];

  const benefits = [
    "Meet UK government contract requirements",
    "Demonstrate basic cybersecurity competence",
    "Reduce cyber insurance premiums",
    "Competitive advantage in UK markets",
    "Fast-track certification in 30-60 days"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
     

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-cyan-600/5 to-blue-600/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>UK Government-Backed Certification</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Cyber Essentials / Plus <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Certification</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Fast-track UK Cyber Essentials certification with expert rapid hardening, testing, and certification preparation services
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Cyber Essentials and Cyber Essentials Plus are UK government-backed cybersecurity schemes that demonstrate your organization has secure defenses against the most common cyber attacks. Our rapid implementation approach gets you certified quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Certified Fast
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
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-teal-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Cyber Essentials is a UK government-backed certification scheme that helps organizations demonstrate they have implemented basic cybersecurity controls. The scheme covers five key technical controls that protect against the most common cyber attacks.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our rapid implementation methodology gets organizations from assessment to certification in just <span className="font-bold text-teal-700">30-60 days</span>, with minimal business disruption and maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Options */}
      <section id="certification" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Certification Options</h2>
            <p className="text-xl text-slate-600">Choose the level of certification that meets your requirements</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificationOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                  option.featured ? 'border-teal-300 shadow-teal-100' : 'border-slate-200'
                }`}
              >
                {option.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{option.title}</h3>
                  <p className="text-slate-600">{option.description}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <span className="text-slate-700 font-medium">Timeframe:</span>
                    <span className="font-bold text-slate-900">{option.timeframe}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <span className="text-slate-700 font-medium">Testing:</span>
                    <span className="font-bold text-slate-900">{option.testing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Essential Controls */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Five Essential Controls</h2>
            <p className="text-xl text-slate-600">The core security controls covered by Cyber Essentials certification</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {essentialControls.map((control, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-teal-100 hover:border-teal-300 hover:scale-105"
              >
                <div className="inline-flex w-16 h-16 bg-white rounded-xl items-center justify-center text-teal-600 mb-4 shadow-lg">
                  {control.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{control.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Cyber Essentials Services</h2>
            <p className="text-xl text-slate-600">Comprehensive certification services for rapid Cyber Essentials compliance</p>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Cyber Essentials Certified Fast</h2>
          <p className="text-xl text-red-100 mb-10">Contact us today to start your rapid certification journey</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link  href="/contact" className="px-10 py-5 bg-white text-red-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Started
            </Link> 
            <Link  href="/contact" className="px-10 py-5 bg-red-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/30">
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
}