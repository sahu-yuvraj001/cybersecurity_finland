"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function NavbarClient() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // 🔹 DYNAMIC NAV ITEMS WITH SUBMENUS
  const navItems = [
    { name: "Home", href: "/" },

    {
      name: "Services",
      submenu: [
        {label: "Regulatory Compliance", href: "/services/regulatory-compliance"},
        { label: "Standards & Certifications", href: "/services/standards" },
        { label: "Risk & Assessment Services", href: "/services/risk" },
        { label: "Governance & Strategy", href: "/services/governance" },
        { label: "Managed GRC Services", href: "/services/grc-services" },
      ],
    },

    {
      name: "Industries",
      submenu: [
        { label: "Financial Services", href: "/industries/financial-services" },
        { label: "SaaS & Technology", href: "/industries/saas-technology" },
        { label: "Healthcare", href: "/industries/healthcare-life-sciences" },
        { label: "Critical Infrastructure",href: "/industries/critical-infrastructure-energy",},
        { label: "Public Sector", href: "/industries/public-sector-finland" },
        { label: "Manufacturing", href: "/industries/manufacturing-industrial" },
      ],
    },

    {
      name: "Resources",
      submenu: [
        { label: "All Resources", href: "/all" },
        { label: "Webinars", href: "/resources/webinars" },
        { label: "Blog & Articles", href: "/resources/blog" },
        { label: "Frameworks", href: "/resources/frameworks" },
        { label: "Regulatory", href: "/resources/regulatory" },
        { label: "Support & Tools", href: "/resources/support" },
        { label: "Platform", href: "/resources/platform" },
      ],
    },

    { name: "Webinars", href: "/webinars" },
    {
  name: "About",
  submenu: [
    { label: "Our Team", href: "/about/team" },
    { label: "Company Story", href: "/about/story" },
    { label: "Certifications", href: "/about/certifications" },
    { label: "Careers", href: "/about/careers" },
  ],
},

    { name: "Contact", href: "/contact" },
  ];

  const navLink =
    "relative text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors \
     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 \
     after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          Cybersecurity.fi
        </Link>

        {/* 🔥 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <button className={navLink}>{item.name}</button>
              ) : (
                <Link href={item.href} className={navLink}>
                  {item.name}
                </Link>
              )}

              {item.submenu && (
                <div className="absolute left-0 top-full mt-2 w-60 bg-white rounded-xl p-3 shadow-xl border border-slate-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.submenu.map((sub) => (
                    <Link
                      key={`${item.title}-${sub.href}`}
                      href={sub.href}
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/assessment"
            className="ml-4 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition"
          >
            Get Free Assessment
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-md border border-slate-300"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-white z-50 p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="text-xl font-semibold text-slate-900">
                Cybersecurity.fi
              </Link>

              <button
                className="p-2 rounded-md border border-slate-300"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 🔥 Mobile Navigation - FIXED */}
            <nav className="flex flex-col gap-6 mt-6 bg-white">
              {navItems.map((item) => (
                <div key={item.name}>
                  {/* Main item */}
                  {item.submenu ? (
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="w-full text-left text-lg font-medium text-slate-700 flex justify-between items-center"
                    >
                      {item.name}
                      <span>
                        {openDropdown === item.name ? (
                          <IoChevronUp className="w-5 h-5" />
                        ) : (
                          <IoChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-slate-700"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Items */}
                  {item.submenu && openDropdown === item.name && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="text-base text-slate-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/assessment"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white text-center shadow hover:bg-indigo-700"
              >
                Get Free Assessment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
