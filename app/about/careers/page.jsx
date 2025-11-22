"use client";

import Image from "next/image";
import {
  Users,
  BookOpen,
  Heart,
  Briefcase,
  MapPin,
  Clock,
  Award,
  Mail,
  ArrowRightCircle,
} from "lucide-react";

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Cybersecurity Consultant",
      location: "Remote / Hybrid",
      type: "Full-time",
      team: "Consulting",
      exp: "5+ years",
      summary: "Lead complex cybersecurity projects and mentor junior consultants.",
      requirements: [
        "CISSP, CISM, or equivalent",
        "Experience with ISO 27001, NIS2, DORA",
        "Strong project management skills",
        "Excellent communication skills",
      ],
    },
    {
      title: "Security Architect",
      location: "Stockholm, Sweden",
      type: "Full-time",
      team: "Technical",
      exp: "7+ years",
      summary: "Design and implement enterprise security architectures.",
      requirements: [
        "Deep technical security expertise",
        "Cloud security (AWS, Azure, GCP)",
        "Knowledge of security frameworks & standards",
        "Strong analytical skills",
      ],
    },
    {
      title: "Compliance Specialist",
      location: "Remote / Hybrid",
      type: "Full-time",
      team: "Compliance",
      exp: "3+ years",
      summary: "Specialize in EU cybersecurity regulations and compliance frameworks.",
      requirements: [
        "Expertise in NIS2, DORA, GDPR",
        "Legal or compliance background preferred",
        "Excellent research & writing skills",
      ],
    },
    {
      title: "Penetration Tester",
      location: "Remote / Helsinki",
      type: "Full-time",
      team: "Technical",
      exp: "3+ years",
      summary: "Conduct security assessments and penetration testing.",
      requirements: [
        "OSCP, CEH or equivalent",
        "Experience with testing tools & methodologies",
        "Strong ethical hacking skills",
      ],
    },
    {
      title: "Business Development Manager",
      location: "Remote / Hybrid",
      type: "Full-time",
      team: "Sales",
      exp: "5+ years",
      summary: "Drive business growth and develop client relationships.",
      requirements: [
        "B2B sales or consulting experience",
        "Knowledge of cybersecurity industry",
        "Strong networking & relationship skills",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <header className="relative">
        <div className="h-64 sm:h-80 lg:h-96 relative overflow-hidden">
          {/* Using uploaded local file path as hero image */}
          <Image
            src="/mnt/data/40d6204c-9527-453c-9407-1677d52894bc.png"
            alt="Careers hero"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/25"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Careers
              </h1>
              <p className="mt-3 text-white/90 max-w-2xl mx-auto text-base sm:text-lg">
                Join Our Mission to Secure the Digital World — build your career with a team of
                cybersecurity experts passionate about protecting organisations worldwide.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <a
                  href="#open-positions"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl font-medium shadow hover:bg-indigo-700 transition"
                >
                  View Open Positions
                  <ArrowRightCircle className="w-5 h-5" />
                </a>
                <a
                  href="#culture"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 text-slate-900 rounded-xl font-medium shadow hover:opacity-95 transition"
                >
                  Our Culture
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section id="culture" className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Build your career with us</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Work with talented cybersecurity professionals in a collaborative and growth-focused environment. We offer
              challenging opportunities, continuous learning, and real impact protecting organisations and advancing the industry.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border">
              <Users className="w-8 h-8 text-indigo-600" />
              <div>
                <h4 className="font-semibold">Collaborative Environment</h4>
                <p className="text-sm text-slate-600">Team-oriented, diverse perspectives and innovation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <div>
                <h4 className="font-semibold">Continuous Learning</h4>
                <p className="text-sm text-slate-600">Certifications, conferences, and internal training programs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border">
              <Heart className="w-8 h-8 text-indigo-600" />
              <div>
                <h4 className="font-semibold">Impact & Purpose</h4>
                <p className="text-sm text-slate-600">Protect organisations and individuals from cyber threats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center">Benefits & Perks</h3>
          <p className="text-center mt-2 text-slate-600">We take care of our team members</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-semibold flex items-center gap-3"><Award className="w-5 h-5 text-indigo-600"/> Health & Wellness</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                <li>Comprehensive health insurance</li>
                <li>Mental health support</li>
                <li>Gym membership allowance</li>
                <li>Flexible working hours</li>
              </ul>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-semibold flex items-center gap-3"><BookOpen className="w-5 h-5 text-indigo-600"/> Learning & Development</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                <li>Certification support (CISSP, CISM, OSCP, etc.)</li>
                <li>Conference attendance & training budget</li>
                <li>Mentorship programs</li>
              </ul>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-semibold flex items-center gap-3"><Heart className="w-5 h-5 text-indigo-600"/> Work-Life Balance</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                <li>25+ vacation days</li>
                <li>Remote work options</li>
                <li>Flexible scheduling & parental leave support</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-semibold flex items-center gap-3"><Briefcase className="w-5 h-5 text-indigo-600"/> Financial Benefits</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                <li>Competitive salary</li>
                <li>Performance bonuses</li>
                <li>Stock options & pension contributions</li>
              </ul>
            </div>

            <div className="p-6 bg-white border rounded-2xl shadow-sm">
              <h4 className="font-semibold flex items-center gap-3"><Clock className="w-5 h-5 text-indigo-600"/> Flexible Time</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                <li>Flexible hours</li>
                <li>Remote / hybrid opportunities</li>
                <li>Supportive parental leave policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-12 px-6 max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-center">Open Positions</h3>
        <p className="text-center mt-2 text-slate-600">Join our growing team of cybersecurity professionals</p>

        <div className="mt-8 grid gap-6">
          {jobs.map((job, idx) => (
            <article key={idx} className="p-6 border rounded-2xl bg-white shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <div className="mt-1 text-sm text-slate-600 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600"/> {job.location}</span>
                    <span className="inline-flex items-center gap-2"><Briefcase className="w-4 h-4 text-indigo-600"/> {job.type}</span>
                    <span className="inline-flex items-center gap-2"><Users className="w-4 h-4 text-indigo-600"/> {job.team}</span>
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-600"/> {job.exp}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#apply"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#details"
                    className="px-4 py-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition"
                  >
                    Details
                  </a>
                </div>
              </div>

              <p className="mt-4 text-slate-600">{job.summary}</p>

              <div className="mt-4">
                <h5 className="font-semibold">Requirements:</h5>
                <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                  {job.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL GROWTH */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center">Professional Growth</h3>
          <p className="text-center mt-2 text-slate-600">Continuous learning and career development opportunities</p>

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
              <h4 className="font-semibold">Certification Support</h4>
              <p className="text-sm text-slate-600 mt-2">Full financial support for CISSP, CISM, CISA and more</p>
            </div>
            <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
              <h4 className="font-semibold">Conference Attendance</h4>
              <p className="text-sm text-slate-600 mt-2">Black Hat, RSA and local events</p>
            </div>
            <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
              <h4 className="font-semibold">Internal Training</h4>
              <p className="text-sm text-slate-600 mt-2">Regular knowledge sharing & technical deep-dives</p>
            </div>
            <div className="p-6 bg-white border rounded-2xl shadow-sm text-center">
              <h4 className="font-semibold">Career Pathing</h4>
              <p className="text-sm text-slate-600 mt-2">Clear progression, reviews & goal setting</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-center">Ready to Join Our Team?</h3>
        <p className="text-center mt-2 text-slate-600">Don't see a position that fits? Send your resume and we'll contact you.</p>

        <form className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="p-3 border rounded-lg" placeholder="First name" />
            <input className="p-3 border rounded-lg" placeholder="Last name" />
          </div>

          <input className="p-3 border rounded-lg" placeholder="Email" />
          <input className="p-3 border rounded-lg" placeholder="Phone (optional)" />
          <input className="p-3 border rounded-lg" placeholder="Position interested in (optional)" />
          <textarea className="p-3 border rounded-lg h-32" placeholder="Message (optional)"></textarea>

          <label className="flex items-center gap-4 text-sm">
            <input type="file" className="hidden" id="resume" />
            <span className="px-4 py-2 bg-white border rounded-lg cursor-pointer text-slate-700">Upload Resume</span>
            <small className="text-slate-500">PDF or DOCX, max 5 MB</small>
          </label>

          <div className="flex items-center gap-4 justify-center mt-2">
            <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700">
              Send Your Resume
            </button>
            <a href="/contact" className="px-6 py-3 border rounded-xl text-slate-700 hover:bg-slate-50">
              Contact Us
            </a>
          </div>
        </form>
      </section>

      {/* FOOTER CTA */}
      <section className="py-12 bg-indigo-600 text-white text-center">
        <h4 className="text-xl font-semibold">Ready to help secure the digital world?</h4>
        <p className="mt-2 text-white/90">Join CyberSecurity Finland and make an impact.</p>
        <a href="#apply" className="mt-4 inline-block px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold">Send Resume</a>
      </section>
    </div>
  );
}
