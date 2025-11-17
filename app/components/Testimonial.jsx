 "use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Single-card testimonial carousel with:
 * - auto-slide (configurable)
 * - floating circular arrow buttons (left/right)
 * - draggable/swipe support
 * - keyboard navigation (left/right)
 * - pause on hover/focus
 */

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Chief Compliance Officer, FinSecure AG",
    review:
      "Their GDPR expertise helped us pass our audit flawlessly. The documentation and implementation support were exceptional.",
  },
  {
    name: "Markus Nordin",
    role: "Head of IT Security, NordicBank",
    review:
      "A highly professional team delivering premium security and compliance services. Their guidance reduced our risk exposure significantly.",
  },
  {
    name: "Sofia Dimitrov",
    role: "Data Protection Officer, EU Logistics Group",
    review:
      "From policy creation to DPIA execution, everything was handled with precision. Truly a trusted GDPR partner.",
  },
  {
    name: "Elena Fischer",
    role: "Head of Compliance, EuroFin",
    review:
      "Excellent collaboration and measurable results—fast turnaround on policy documentation and implementation.",
  },
];

const AUTO_SLIDE_MS = 4000;
const DRAG_THRESHOLD = 80; // px

export default function TestimonialsCarouselFloating() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const length = testimonials.length;

  // advance to next
  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % length);
  }, [length]);

  // go previous
  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + length) % length);
  }, [length]);

  // Auto-slide with pause support
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      next();
    }, AUTO_SLIDE_MS);

    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  // Pause on hover/focus
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  const handleFocus = () => setPaused(true);
  const handleBlur = () => setPaused(false);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Drag handling: change slide based on offset
  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    if (offset < -DRAG_THRESHOLD) next();
    else if (offset > DRAG_THRESHOLD) prev();
  };

  return (
    <section
      className="py-20 bg-gray-50"
      aria-label="Client testimonials carousel"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-3">What Our Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Real feedback from enterprise clients, research partners and teams we
          helped to comply with GDPR.
        </p>

        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="relative w-full"
        >
          {/* Floating left arrow */}
          <button
            aria-label="Previous testimonial"
            onClick={() => {
              prev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-12 w-12 rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          {/* Floating right arrow */}
          <button
            aria-label="Next testimonial"
            onClick={() => {
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-12 w-12 rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          {/* Card area (single centered card) */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl px-4">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "grabbing" }}
                    className="bg-white rounded-2xl shadow-lg p-10 border"
                  >
                    <p className="text-lg text-gray-800 italic">
                      “{testimonials[current].review}”
                    </p>

                    <div className="mt-6 text-left">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonials[current].name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={`h-3 w-3 rounded-full transition ${
                      i === current ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
