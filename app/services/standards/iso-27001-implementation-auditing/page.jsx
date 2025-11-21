import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function ISO27001Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ISO 27001 Implementation & Auditing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Comprehensive ISO 27001 ISMS implementation and internal auditing services to achieve 
            certification and maintain robust information security
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Our expert team serves as your ISMS Manager and Internal Auditor, providing end-to-end support 
            from initial scope definition through certification and ongoing compliance maintenance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md font-medium transition">
              Start Implementation
            </Link>
            <Link href="/contact" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-md font-medium transition">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Overview
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 leading-relaxed">
              ISO 27001 is the international standard for Information Security Management Systems (ISMS). 
              Achieving certification requires systematic implementation of security controls, 
              comprehensive documentation, and ongoing management of information security risks.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive implementation and auditing service provides dedicated ISMS expertise 
              to guide your organization through every step of the certification journey, ensuring efficient 
              implementation and successful audit outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-gray-600 text-lg">
              Structured approach to ISO 27001 implementation and certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Phase 1 */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Phase 1: Planning & Scoping
                </h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  2-3 weeks
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">ISMS scope definition</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Context and stakeholder analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Initial risk assessment</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Phase 2: Risk Assessment & SoA
                </h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  2-3 weeks
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Detailed risk assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Risk treatment planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Statement of Applicability development</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Phase 3: Implementation
                </h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  6-10 weeks
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Control implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Policy and procedure development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Evidence collection and documentation</span>
                </li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Phase 4: Internal Audit & Certification
                </h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  3-4 weeks
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Internal audit execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Management review</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Certification audit preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 27001 Annex A Controls */}
      <section className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ISO 27001 Annex A Controls
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive implementation of all 14 security control categories
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Information Security Policies',
              'Organization of Information Security',
              'Human Resource Security',
              'Asset Management',
              'Access Control',
              'Cryptography',
              'Physical and Environmental Security',
              'Operations Security',
              'Communications Security',
              'System Acquisition & Development',
              'Supplier Relationships',
              'Information Security Incident Management',
              'Business Continuity Management',
              'Compliance'
            ].map((control, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
                <p className="text-gray-800 font-medium">{control}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Implementation Services */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive ISO 27001 services covering all aspects of ISMS implementation and auditing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'ISMS Scope & Risk Assessment',
                description: 'Define ISMS scope, conduct comprehensive risk assessments, and establish risk treatment plans'
              },
              {
                title: 'Statement of Applicability (SoA)',
                description: 'Develop comprehensive SoA documenting applicable controls and justifications'
              },
              {
                title: 'Control Implementation',
                description: 'Implement ISO 27001 Annex A controls with detailed procedures and evidence collection'
              },
              {
                title: 'Internal Audit Program',
                description: 'Design and execute comprehensive internal audit programs for ISMS compliance'
              },
              {
                title: 'Evidence Management',
                description: 'Systematic collection and organization of evidence for compliance demonstration'
              },
              {
                title: 'Certification Support',
                description: 'Complete preparation and support for external certification audits'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg hover:shadow-lg transition">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get & Key Benefits */}
      <section className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You Get */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What You Get
              </h2>
              <ul className="space-y-4">
                {[
                  'ISMS scope definition and context analysis',
                  'Comprehensive risk assessment and treatment plan',
                  'Statement of Applicability (SoA)',
                  'Security policies and procedures library',
                  'Control implementation roadmap',
                  'Evidence repository and documentation',
                  'Internal audit program and reports',
                  'Certification audit preparation and support'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {[
                  'Achieve ISO 27001 certification efficiently',
                  'Demonstrate security to customers and partners',
                  'Reduce information security risks',
                  'Meet regulatory and contractual requirements',
                  'Competitive advantage through certification'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for ISO 27001 Certification?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to start your ISO 27001 implementation journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-md font-medium transition">
              Get Started
            </Link>
            <Link href="/contact" className="border-2 border-white hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition">
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}