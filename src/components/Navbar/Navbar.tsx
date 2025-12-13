"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold tracking-wide text-white"
            >
              KITTIPOL<span className="text-blue-500">.DEV</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium text-white/70 transition hover:text-white
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500
                  after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg border border-white/10 p-2 text-white hover:bg-white/10"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4 px-6 pb-6 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
