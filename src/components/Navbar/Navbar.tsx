"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.3, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="wrap flex h-16 items-center justify-between">
        <Link
          href="#main"
          className="text-[0.85rem] font-medium tracking-tight text-fg"
        >
          {site.wordmark}
          <span className="text-accent">{site.wordmarkSuffix}</span>
        </Link>

        {/* Section links — the page is short enough that mobile scrolls instead. */}
        <div className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.82rem] transition-colors duration-200",
                active === item.id ? "text-fg" : "text-dim hover:text-fg"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={`mailto:${site.email}`}
          className="text-[0.82rem] text-dim transition-colors hover:text-fg sm:hidden"
        >
          Email
        </a>
      </nav>
    </header>
  );
}
