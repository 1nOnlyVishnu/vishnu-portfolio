import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/skills";
import Contact from "./components/contacts";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Contact/>
    </main>
  );
}