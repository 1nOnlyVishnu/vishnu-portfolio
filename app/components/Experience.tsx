"use client"
import { motion } from "framer-motion";

const experience = {
  period: "Jan 2026 — May 2026",
  role: "AI Intern",
  company: "Learners Byte Global Infotech",
  location: "Bengaluru, Karnataka",

  description:
    "Built AI automation workflows using Python, n8n, APIs, and Generative AI tools to automate data collection and processing.",

  highlights: [
    "Worked with LLMs, prompt engineering, AI agents, and API integrations to develop AI-powered workflows.",
    "Developed a Multi-Source AI Trend Aggregation and Summarization System integrating external APIs to collect, process, and summarize technical content.",
    "Designed workflow-based data pipelines for data ingestion, transformation, and processing from multiple sources.",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="px-8 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Where I've worked.
          </h2>
        </motion.div>

        {/* Experience */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-[200px_1fr] md:py-12"
        >
          {/* Period */}
          <div>
            <p className="text-sm text-gray-500">
              {experience.period}
            </p>
          </div>

          {/* Main content */}
          <div className="max-w-4xl">

            {/* Role + company */}
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-medium md:text-3xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-gray-400">
                  {experience.company}
                </p>
              </div>

              <p className="text-sm text-gray-600">
                {experience.location}
              </p>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              {experience.description}
            </p>

            {/* Highlights */}
            <ul className="mt-8 max-w-3xl space-y-4">
              {experience.highlights.map((highlight, index) => (
                <motion.li
                  key={highlight}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex gap-4 leading-7 text-gray-500"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />

                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>

          </div>
        </motion.article>

      </div>
    </section>
  );
}