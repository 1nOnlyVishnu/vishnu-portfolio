"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-8 pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-t border-white/10 pt-16 md:pt-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Have something
            <br />
            worth building?
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
            I'm always interested in interesting projects, opportunities,
            and conversations around software and AI.
          </p>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="mt-10"
          >
            {/* Email */}
            <a
              href="mailto:vishnuprasadn2004@gmail.com"
              className="text-lg text-gray-300 transition-colors hover:text-white"
            >
              vishnuprasadn2004@gmail.com ↗
            </a>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/1nOnlyVishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-gray-300 transition hover:border-white/40 hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/vpn2004"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-gray-300 transition hover:border-white/40 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-24 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.15em] text-gray-600 md:flex-row"
        >
          <span>© 2026 Vishnu Prasad N.</span>

          <span>Built with Next.js</span>
        </motion.footer>

      </div>
    </section>
  );
}