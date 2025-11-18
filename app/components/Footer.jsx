"use client";

import { motion } from "framer-motion";
import { Mail, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-10 pb-12 relative overflow-hidden">

      {/* Decorative Gradient Top Line */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 h-0.5 bg-linear-to-r from-indigo-500/60 via-sky-400/40 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold text-white mb-3">
            Stay Updated
          </h2>
          <p className="text-slate-400 mb-6 text-sm max-w-xl mx-auto">
            Get the latest updates on cybersecurity, compliance, GDPR, and ISO standards directly in your inbox.
          </p>

          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-md items-center bg-slate-800/60 backdrop-blur-sm rounded-xl p-1.5 border border-slate-700">
              <Mail className="text-slate-400 ml-3" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none border-none text-slate-200 placeholder-slate-400 px-3 py-2 text-sm"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-4 py-2 rounded-lg text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >

          {/* ABOUT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-xl font-semibold text-white">Cybersecurity.fi</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Leading cybersecurity & compliance services helping businesses
              achieve ISO 27001, GDPR, and NIS2 readiness with expert support.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  transition={{ duration: 0.2 }}
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                >
                  <Icon size={18} className="text-slate-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a className="hover:text-white" href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                "ISO 27001 Compliance",
                "GDPR Readiness",
                "NIS2 Consulting",
                "Governance & Policy",
              ].map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a className="hover:text-white" href="#">{service}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>📍 Helsinki, Finland</li>
              <li>📞 +358 123 456 789</li>
              <li>📧 info@cyberguardify.com</li>
              <motion.li whileHover={{ x: 4 }}>
                <a className="hover:text-white" href="#">Support Center ↗</a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 border-t border-slate-800 pt-6 text-center text-sm text-slate-500"
        >
          © {new Date().getFullYear()} Cyber Guardify — All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
