import React from 'react';
import { Check, Shield, AlertTriangle, Eye, Users, FileCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AntiFraudLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Anti-Fraud Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Expert fraud risk management services to protect your organization against business email 
            compromise, invoice fraud, and payment scams
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Our Anti-Fraud Services provide comprehensive protection against increasingly sophisticated fraud 
            attacks, with expert controls, detection systems, and rapid response capabilities to safeguard your 
            finances and reputation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md font-medium transition">
              Request Against Fraud
            </Link>
            <Link href="/contact" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-md font-medium transition">
              Book Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Overview
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm max-w-4xl mx-auto space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Business email compromise (BEC) and invoice fraud are among the most costly cyber threats 
              facing organizations today, with losses exceeding billions of dollars annually. These 
              sophisticated attacks target finance and procurement processes to redirect payments to 
              fraudulent accounts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our Anti-Fraud Services provide comprehensive protection through advanced controls, 
              detection systems, staff training, and rapid incident response to prevent financial losses and 
              protect your organization's reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Fraud Threats We Address */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fraud Threats We Address
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive protection against all major fraud attack vectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Business Email Compromise (BEC)',
              'Invoice Fraud & Manipulation',
              'Payment Redirection Fraud',
              'Vendor Impersonation',
              'CEO/Executive Fraud',
              'Wire Transfer Fraud',
              'Procurement Fraud',
              'Social Engineering Attacks'
            ].map((threat, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center hover:border-orange-400 hover:shadow-md transition">
                <p className="text-gray-900 font-semibold">{threat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Layer Fraud Controls */}
      <section className="px-4 py-16 md:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Layer Fraud Controls
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive defense-in-depth approach to fraud prevention
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Email Security
              </h3>
              <p className="text-gray-600">
                Advanced email filtering, DMARC, and anti-phishing controls
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Payment Verification
              </h3>
              <p className="text-gray-600">
                Multi-factor authentication and out-of-band verification for payments
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Vendor Management
              </h3>
              <p className="text-gray-600">
                Secure vendor onboarding and change management processes
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                User Training
              </h3>
              <p className="text-gray-600">
                Regular phishing simulations and fraud awareness training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Protect */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Protect
            </h2>
            <p className="text-gray-600 text-lg">
              Specialized fraud protection across high-risk sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Financial Services',
              'Manufacturing',
              'Healthcare',
              'Professional Services',
              'Technology',
              'Retail & E-commerce',
              'Real Estate',
              'Government & Public Sector'
            ].map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:shadow-md transition">
                <p className="text-gray-800 font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Anti-Fraud Services */}
      <section className="px-4 py-16 md:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Anti-Fraud Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive fraud prevention and response services to protect your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  BEC & Invoice Fraud Controls
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive controls to prevent business email compromise and invoice 
                fraud attacks
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Fraud Detection & Monitoring
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advanced detection systems and monitoring workflows to identify suspicious activity
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Incident Response & Investigation
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Rapid response and thorough investigation of fraud incidents and near-misses
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Payment Controls & Verification
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Multi-layer payment approval processes and vendor verification systems
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Security Awareness Training
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive training programs to educate staff on fraud prevention and recognition
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Risk Assessment & Monitoring
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ongoing fraud risk assessments and continuous monitoring of threat landscape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get & Key Benefits */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You Get */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What You Get
              </h2>
              <ul className="space-y-3">
                {[
                  'Fraud risk assessment and gap analysis',
                  'BEC and invoice fraud control framework',
                  'Payment verification and approval processes',
                  'Fraud detection and monitoring systems',
                  'Incident response procedures and playbooks',
                  'Staff training and awareness programs',
                  'Vendor verification and due diligence processes',
                  'Ongoing fraud risk monitoring and reporting'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {[
                  'Prevent costly business email compromise attacks',
                  'Protect against invoice fraud and payment fraud',
                  'Reduce financial losses and reputational damage',
                  'Improve staff awareness and fraud detection',
                  'Ensure rapid response to fraud incidents'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Protect Your Organization from Fraud
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today to strengthen your fraud defenses and response capabilities
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 rounded-md font-medium transition">
              Get Protected
            </Link>
            <Link href="/contact" className="border-2 border-white hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium transition">
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}