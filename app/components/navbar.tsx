"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto max-w-7xl">

        <div
          className={`flex items-center justify-between rounded-full border px-5 py-3 backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? "border-white/15 bg-black/85 shadow-lg shadow-black/20"
              : "border-white/10 bg-black/70"
          }`}
        >

          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight"
          >
            VPN.
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
            <a
              href="#work"
              className="transition-colors hover:text-white"
            >
              Projects
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition-colors hover:text-white"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="transition-colors hover:text-white"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>

            <a
  href="/Resume_Vishnu.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="transition-colors hover:text-white"
>
  Resume
</a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-xs text-gray-300 transition-colors hover:border-white/40 hover:text-white md:block"
          >
            Let's talk
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-lg">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-md md:hidden">
            <div className="flex flex-col">

              <a
                href="#work"
                onClick={closeMenu}
                className="border-b border-white/10 px-3 py-4 text-sm text-gray-300 transition-colors hover:text-white"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="border-b border-white/10 px-3 py-4 text-sm text-gray-300 transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="border-b border-white/10 px-3 py-4 text-sm text-gray-300 transition-colors hover:text-white"
              >
                Skills
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="border-b border-white/10 px-3 py-4 text-sm text-gray-300 transition-colors hover:text-white"
              >
                Experience
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="px-3 py-4 text-sm text-gray-300 transition-colors hover:text-white"
              >
                Contact
              </a>
<a
  href="/Resume_Vishnu.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-3 py-4 text-sm text-gray-300 transition-colors hover:text-white"
>
  Resume ↗
</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}