// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { Shield, CheckCircle, FileText, BarChart3, Bell, TrendingUp, Users, Lock, Award, Calendar, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      title: "Dedicated Compliance Manager",
      badge: "Part-time/Full-time",
      description: "Full-scale resource managing your compliance program",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Compliance Operations Support",
      badge: "As needed",
      description: "Operational support for specific compliance activities",
      icon: Shield,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Audit Season Support",
      badge: "Project-based",
      description: "Intensive support during audit and certification periods",
      icon: Calendar,
      color: "from-orange-500 to-red-500"
    }
  ];

  const frameworks = [
    "ISO 27001 ISMS",
    "ISO 22301 BCMS",
    "ISO 9001 QMS",
    "SOC 2 Type II",
    "HITRUST CSF",
    "PCI DSS",
    "GDPR/Privacy",
    "Industry Frameworks"
  ];

  const services = [
    {
      title: "ISMS/BCMS Operation",
      description: "Full operational management of Information Security and Business Continuity Management Systems",
      icon: Shield
    },
    {
      title: "Evidence Collection & Management",
      description: "Systematic collection, organization, and maintenance of compliance evidence",
      icon: FileText
    },
    {
      title: "Audit Support & Coordination",
      description: "Comprehensive support for internal and external audits, including preparation and follow-up",
      icon: CheckCircle
    },
    {
      title: "Attestation Management",
      description: "Coordination of compliance attestations and certification maintenance activities",
      icon: Award
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous monitoring of compliance status and early identification of issues",
      icon: Bell
    },
    {
      title: "Reporting & Dashboards",
      description: "Regular compliance reporting and executive dashboards for stakeholder communication",
      icon: BarChart3
    }
  ];

  const benefits = [
    "Dedicated compliance expertise without full-time costs",
    "Reduced compliance burden on internal teams",
    "Consistent audit readiness and preparation",
    "Improved compliance efficiency and effectiveness",
    "Reduced risk of certification lapses"
  ];

  const features = [
    "Compliance program operation and management",
    "Evidence repository and documentation system",
    "Internal audit programs and execution",
    "External audit coordination and support",
    "Compliance monitoring and tracking system",
    "Monthly compliance reports and dashboards",
    "Certification maintenance and renewal support",
    "Continuous improvement recommendations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-pulse">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-semibold">Enterprise-Grade Compliance</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Compliance-as-a-Service
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Dedicated Compliance Manager services providing ongoing ISMS/BCMS operation, evidence management, and audit support for sustained compliance
            </p>

            <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
              Our Compliance-as-a-Service provides organizations with dedicated compliance management expertise to operate security and business continuity management systems, ensuring continuous compliance and audit readiness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Get Compliance Support</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="bg-white text-gray-700 px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Overview</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Maintaining compliance certifications requires continuous effort, evidence collection, and operational management. Our Compliance-as-a-Service provides dedicated compliance management expertise to handle the day-to-day operations of your compliance programs.
              </p>
              <p>
                We serve as your organization's Compliance Manager, handling everything from ISMS operation to audit coordination, allowing your internal teams to focus on core business activities while ensuring sustained compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">Service Models</h2>
            <p className="text-xl text-gray-600">Flexible compliance support tailored to your organization's needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {model.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{model.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{model.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Frameworks */}
      <section id="frameworks" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Supported Frameworks</h2>
            <p className="text-xl text-blue-200">Comprehensive compliance management across multiple standards and frameworks</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {frameworks.map((framework, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className="flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-bold text-lg">{framework}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">Our Compliance Services</h2>
            <p className="text-xl text-gray-600">Comprehensive compliance management covering all aspects of certification maintenance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get & Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You Get */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">What You Get</h2>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-10 shadow-xl text-white">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-white/20 backdrop-blur-lg p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Key Benefits</h2>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <ArrowRight className="w-6 h-6 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span className="leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Streamline Your Compliance Operations</h2>
          <p className="text-xl text-blue-200 mb-10">Contact us today to discuss your compliance management needs</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
}