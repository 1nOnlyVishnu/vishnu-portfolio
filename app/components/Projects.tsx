"use client";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "ML-Powered Supply Chain",
    description:
      "An end-to-end machine learning platform for demand forecasting, inventory optimization, and supply-chain risk assessment.",
    technologies: ["Python", "FastAPI", "LightGBM", "Prophet", "React"],
    github: "",
    live: "",
  },
  {
    number: "02",
    title: "AI Trend Monitoring",
    description:
      "An automated multi-source system that collects, processes, and summarizes emerging technology trends using APIs, workflows, and LLMs.",
    technologies: ["n8n", "Next.js", "Supabase", "LLMs", "AWS"],
    github: "",
    live: "",
  },
  {
    number: "03",
    title: "XAI Network Intrusion Detection",
    description:
      "A scalable machine learning pipeline for network intrusion detection with explainable predictions using large-scale traffic data.",
    technologies: ["Python", "Dask", "LightGBM", "SHAP"],
    github:
      "https://github.com/1nOnlyVishnu/XAI--Network-Intrusion-Detection",
    live: "",
  },
  {
    number: "04",
    title: "Real-Time Chat App",
    description:
      "A full-stack real-time messaging application with authentication, WebSockets, media uploads, and persistent conversations.",
    technologies: ["MERN", "Socket.IO", "JWT", "Cloudinary"],
    github: "https://github.com/1nOnlyVishnu/Yap-Hub-Chat-App",
    live: "https://yap-hub-chat-app.onrender.com",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-8 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Things I've built.
            </h2>
          </div>

          <span className="hidden text-sm text-gray-600 md:block">
            04 projects
          </span>
        </div>

        {/* Projects */}
        <div className="border-t border-white/10">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: Number(project.number) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-white/10 py-10 md:py-12"
            >
              <div className="grid gap-6 md:grid-cols-[80px_1fr_1fr] md:gap-10">

                {/* Number */}
                <span className="text-sm text-gray-600">
                  {project.number}
                </span>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                    {project.title}
                  </h3>
                </div>

                {/* Description + technologies + links */}
                <div>
                  <p className="leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.github || project.live) && (
                    <div className="mt-7 flex gap-5 text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 transition-colors hover:text-white"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 transition-colors hover:text-white"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}