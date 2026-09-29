"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-8 pb-16 pt-16 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-7xl">

        {/* Top metadata */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-gray-500"
        >
          <span>Software Developer · AI Engineer</span>

          <span className="hidden md:block">
            Bengaluru, India · 2026
          </span>
        </motion.div>

        {/* Main hero */}
        <div className="mt-20 md:mt-24">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl text-6xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[9rem]"
          >
            Vishnu
            <br />
            Prasad N.
          </motion.h1>

          {/* Bottom hero area */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-14 grid gap-12 md:grid-cols-[1fr_280px] md:items-end"
          >

            {/* Description + buttons */}
            <div>
              <p className="max-w-xl text-lg leading-8 text-gray-400 md:text-xl">
                I build AI-powered applications, intelligent systems,
                and software that turn ideas into useful products.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#experience"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
                >
                  View Experience
                </a>

                <a
                  href="#work"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
                >
                  View projects
                </a>

                <a
                  href="/Resume_Vishnu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
                >
                  Resume ↗
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
                >
                  Contact me
                </a>

              </div>
            </div>

            {/* Current focus */}
            <div className="border-l border-white/10 pl-6">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                Currently focused on
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                AI engineering, LLM applications,
                automation, and backend systems.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-gray-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Available for opportunities
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}