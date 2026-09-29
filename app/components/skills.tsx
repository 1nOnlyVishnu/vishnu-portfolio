"use client";
import Reveal from "./Reveal";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "React",
  "MERN",
  "JavaScript",
  "LLMs",
  "SQL",
  "Machine Learning",
  "n8n",
  "Git",
  "Docker",
  "MongoDB",
  "GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-20 md:py-28">

      <Reveal >

   
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Tools
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            What I Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-3">
          {skills.map((skill, index) => (
  <motion.div
    key={skill}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="group flex min-h-32 items-center justify-center border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.04]"
  >
    <span className="text-lg text-gray-500 transition-colors duration-300 group-hover:text-white md:text-xl">
      {skill}
    </span>
  </motion.div>
))}
 </div>

      </div>
         </Reveal>
    </section>
  );
}