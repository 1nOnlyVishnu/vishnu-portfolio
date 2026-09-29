import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-8 py-14">
      <Reveal>
      <div className="mx-auto max-w-7xl">

        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            About
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
            A little about me.
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-2">

          {/* About */}
          <div>
            <p className="text-xl leading-9 text-gray-300">
              I'm Vishnu Prasad N, a Computer Science graduate focused on
              building AI-powered applications and software systems.
            </p>

            <p className="mt-6 leading-8 text-gray-500">
              I enjoy working across the stack - from designing APIs and
              backend systems to building machine learning pipelines and
              user-facing applications. I'm particularly interested in
              Generative AI, LLM applications, automation, and backend
              engineering.
            </p>

            <p className="mt-6 leading-8 text-gray-500">
              I like understanding how things work under the hood and
              turning ideas into systems that are actually useful.
            </p>
          </div>

          {/* Education */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-600">
              Education
            </p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <h3 className="text-2xl font-medium">
                B.E. Computer Science & Engineering
              </h3>

              <p className="mt-2 text-gray-400">
                RV Institute of Technology and Management
              </p>

              <div className="mt-6 flex flex-wrap gap-8 text-sm">
                <div>
                  <p className="text-gray-600">CGPA</p>
                  <p className="mt-1 text-gray-300">8.98</p>
                </div>

                <div>
                  <p className="text-gray-600">Graduation</p>
                  <p className="mt-1 text-gray-300">2026</p>
                </div>

                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="mt-1 text-gray-300">
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      </Reveal>
    </section>
  );
}