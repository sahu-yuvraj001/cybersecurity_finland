// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { Shield, CheckCircle, Settings, TrendingUp, Users, FileCheck, Lock, Database, BarChart3, Zap, BookOpen, Target, ArrowRight, Menu, X, Sparkles, Award, Globe } from 'lucide-react';
import Link from 'next/link';

export default function GRCPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceAreas = [
    {
      title: "Risk Management",
      description: "Risk register, assessments, treatment plans, monitoring",
      icon: Target,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Compliance Management",
      description: "Compliance frameworks, assessments, evidence collection",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Audit Management",
      description: "Audit planning, execution, findings tracking, remediation",
      icon: FileCheck,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Policy Management",
      description: "Policy lifecycle, approval workflows, attestation tracking",
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const platforms = [
    "ServiceNow GRC",
    "RSA Archer",
    "MetricStream",
    "LogicGate",
    "Resolver",
    "SAP GRC",
    "Thomson Reuters",
    "Custom Solutions"
  ];

  const platformServices = [
    {
      title: "Workflow Design & Management",
      description: "Custom workflow creation and optimization for risk assessments, audits, and compliance processes",
      icon: Settings
    },
    {
      title: "System Integrations",
      description: "Integration with business systems, security tools, and third-party applications",
      icon: Zap
    },
    {
      title: "Reporting & Dashboards",
      description: "Executive dashboards, compliance reports, and risk analytics configuration",
      icon: BarChart3
    },
    {
      title: "User Support & Training",
      description: "Comprehensive user support, training programs, and adoption facilitation",
      icon: Users
    },
    {
      title: "Platform Optimization",
      description: "Continuous platform optimization and performance improvement initiatives",
      icon: TrendingUp
    },
    {
      title: "Data Management",
      description: "Data quality management, migration support, and backup strategies",
      icon: Database
    }
  ];

  const features = [
    "Platform configuration and setup",
    "Custom workflow development",
    "Integration architecture and implementation",
    "Custom dashboard and reporting suite",
    "User training and documentation",
    "Ongoing platform administration",
    "Performance monitoring and optimization",
    "Regular platform updates and maintenance"
  ];

  const benefits = [
    "Maximize ROI from GRC platform investment",
    "Expert configuration and optimization",
    "Reduced internal administration overhead",
    "Improved user adoption and satisfaction",
    "Enhanced compliance and reporting capabilities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
  
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Expert Platform Administration</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              GRC Platform Managed Service
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Expert GRC Platform Administration services to maximize your platform investment with professional workflow design, integrations, and user support
            </p>

            <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
              Our GRC Platform Managed Service provides comprehensive administration of your Governance, Risk, and Compliance platforms, ensuring optimal configuration, user adoption, and business value delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Get Platform Support</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="bg-white text-gray-700 px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Overview</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                GRC platforms are powerful tools for managing governance, risk, and compliance, but they require expert configuration and ongoing administration to deliver value. Many organizations struggle with platform complexity, low user adoption, and suboptimal configurations.
              </p>
              <p>
                Our GRC Platform Managed Service provides dedicated platform expertise to handle administration, optimization, and user support, ensuring your investment delivers maximum business value and compliance effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRC Service Areas */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">GRC Service Areas</h2>
            <p className="text-xl text-gray-600">Comprehensive platform administration across all GRC domains</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Supported Platforms</h2>
            <p className="text-xl text-purple-200">Expert administration across leading GRC platforms and custom solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className="flex items-center justify-center mb-3">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="font-bold text-lg">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">Our Platform Services</h2>
            <p className="text-xl text-gray-600">Comprehensive GRC platform management covering all aspects of administration and optimization</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* What You Get & Key Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You Get */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-purple-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-xl">
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
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-10 shadow-xl text-white">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-white/20 backdrop-blur-lg p-3 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Maximize Your GRC Platform ROI</h2>
          <p className="text-xl text-purple-100 mb-10">Contact us today to optimize your GRC platform performance</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link  href="/contact" className="group bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link  href="/contact" className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
}