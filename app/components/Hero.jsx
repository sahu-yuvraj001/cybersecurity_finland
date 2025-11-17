"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-96 w-7xl rounded-full bg-linear-to-r from-sky-100 via-indigo-50 to-transparent blur-3xl opacity-40" />
        <div className="absolute -bottom-40 right-0 h-64 w-160 rounded-full bg-linear-to-r from-purple-50 to-orange-50 blur-2xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="lg:col-span-6"
          >
            {/* Label */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="inline-flex gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700"
            >
              Finland’s Most Trusted Cybersecurity Partner
            </motion.span>

            {/* MAIN HEADLINE */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Accelerating{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-sky-500">
                ISO 27001, NIS2 & GDPR
              </span>{" "}
              Compliance for Modern Teams
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mt-4 text-lg text-slate-600 max-w-2xl"
            >
              We help organizations achieve audit-ready compliance up to{" "}
              <strong>70% faster</strong> through guided programs, automation
              tools, expert support, and industry-leading security experience.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700"
              >
                Get Free Compliance Assessment
              </a>

              <a
                href="#"
                className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Explore Services
              </a>

              <a
                href="#"
                className="rounded-md bg-white/50 backdrop-blur-sm border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Watch Demo
              </a>

              <a
                href="#"
                className="rounded-md text-sm font-medium px-5 py-3 text-indigo-700 hover:underline"
              >
                Download Program Overview PDF
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl shadow-xl border border-slate-200 overflow-hidden bg-white/70 backdrop-blur-sm">
              <Image
                src="/heropic.jpg"
                alt="Cybersecurity dashboard mockup"
                width={1200}
                height={800}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
