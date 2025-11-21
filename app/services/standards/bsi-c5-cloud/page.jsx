'use client';

import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, FileText, Users, TrendingUp, Lock, Cloud, Server, Database, Layers, GitBranch, Package, AlertCircle, Target, BarChart, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

export default function BSIC5Page() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Control Mapping & Gap Analysis",
      description: "Comprehensive mapping of BSI C5 controls to your cloud infrastructure and identification of compliance gaps"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Testing & Evidence Collection",
      description: "Systematic testing of security controls and collection of evidence for attestation requirements"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Attestation Reporting",
      description: "Professional attestation reports and documentation supporting BSI C5 compliance demonstration"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Auditor Support",
      description: "Expert liaison with auditors and support throughout the attestation process"
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Remediation Planning",
      description: "Detailed remediation plans to address identified gaps and improve security posture"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Ongoing Compliance",
      description: "Continuous monitoring and maintenance of BSI C5 compliance requirements"
    }
  ];

  const cloudTypes = [
    { icon: <Server className="w-10 h-10" />, title: "Infrastructure as a Service (IaaS)" },
    { icon: <Layers className="w-10 h-10" />, title: "Platform as a Service (PaaS)" },
    { icon: <Package className="w-10 h-10" />, title: "Software as a Service (SaaS)" },
    { icon: <Database className="w-10 h-10" />, title: "Cloud Storage Services" },
    { icon: <GitBranch className="w-10 h-10" />, title: "Hybrid Cloud Environments" },
    { icon: <Cloud className="w-10 h-10" />, title: "Multi-Cloud Architectures" }
  ];

  const deliverables = [
    "BSI C5 compliance assessment report",
    "Control mapping and gap analysis",
    "Security testing and validation results",
    "Attestation documentation package",
    "Remediation roadmap and implementation plan",
    "Auditor preparation and support materials",
    "Continuous monitoring procedures",
    "Annual compliance maintenance program"
  ];

  const benefits = [
    "Meet German cloud security regulatory requirements",
    "Demonstrate security to European customers",
    "Enhance trust in cloud service offerings",
    "Competitive advantage in German/EU markets",
    "Streamlined audit and attestation processes"
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
     

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/5 via-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                <Lock className="w-4 h-4" />
                <span>German Cloud Security Standard</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                BSI C5 (Cloud) <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Attestation</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Expert BSI C5 compliance services to help cloud service providers meet German security standards and demonstrate trustworthy cloud operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group px-8 py-4 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Get BSI C5 Assessment
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-indigo-300">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl opacity-10 blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
                    <Shield className="w-12 h-12 text-indigo-600" />
                    <div>
                      <h3 className="font-bold text-slate-900">Federal Office Approved</h3>
                      <p className="text-sm text-slate-600">BSI certified standard</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <Cloud className="w-12 h-12 text-blue-600" />
                    <div>
                      <h3 className="font-bold text-slate-900">Cloud Service Providers</h3>
                      <p className="text-sm text-slate-600">Germany & European Union</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                    <CheckCircle className="w-12 h-12 text-purple-600" />
                    <div>
                      <h3 className="font-bold text-slate-900">End-to-End Support</h3>
                      <p className="text-sm text-slate-600">Complete compliance journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              BSI C5 is a German cloud security standard developed by the <span className="font-semibold text-slate-800">Federal Office for Information Security (BSI)</span> for attestation of cloud service providers. It establishes comprehensive security requirements for cloud computing services operating in Germany and the European Union.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our expert team provides end-to-end support for BSI C5 compliance, from initial control mapping and gap analysis through testing, evidence collection, and attestation reporting to help you demonstrate compliance and build customer trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our BSI C5 Services</h2>
            <p className="text-xl text-slate-600">Comprehensive cloud security compliance services covering all aspects of BSI C5 requirements</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-indigo-300 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Service Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Cloud Service Types</h2>
            <p className="text-xl text-slate-600">BSI C5 compliance support for all types of cloud service offerings</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-indigo-300 hover:scale-105"
              >
                <div className="inline-flex w-20 h-20 bg-white rounded-2xl items-center justify-center text-indigo-600 mb-4 shadow-lg">
                  {type.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{type.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get & Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You Get */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
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
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Benefits</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <BarChart className="w-5 h-5" />
                    </div>
                    <span className="text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for BSI C5 Compliance?</h2>
          <p className="text-xl text-blue-100 mb-10">Contact us today to start your BSI C5 cloud compliance journey</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Started
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/30">
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
}