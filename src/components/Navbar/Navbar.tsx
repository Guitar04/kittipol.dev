"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for whichever section owns the upper third of the viewport.
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
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 -z-10 transition-all duration-500",
            scrolled
              ? "border-b border-white/[0.06] bg-base/70 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          )}
        />

        <nav className="shell flex items-center justify-between gap-6">
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[0.95rem] font-semibold tracking-tight text-ink"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] font-mono text-[0.7rem] text-accent-soft transition-colors duration-300 group-hover:border-accent/40">
              KL
            </span>
            <span className="hidden sm:inline">
              {site.wordmark}
              <span className="text-accent">{site.wordmarkSuffix}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] p-1 backdrop-blur-md md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-[0.82rem] font-medium transition-colors duration-300",
                  active === item.id
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                )}
              >
                {active === item.id ? (
                  <span className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]" />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={`mailto:${site.email}`}
            className="group hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.82rem] font-medium text-ink transition-all duration-300 hover:border-accent/45 hover:bg-accent/10 md:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-ink transition-colors hover:bg-white/[0.08] md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-400 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-base/92 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative flex h-full flex-col justify-center px-8">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-baseline gap-4 border-b border-white/[0.06] py-5 text-3xl font-semibold tracking-tight transition-all duration-500",
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0",
                    active === item.id ? "text-ink" : "text-muted"
                  )}
                  style={{ transitionDelay: open ? `${index * 60 + 80}ms` : "0ms" }}
                >
                  <span className="font-mono text-xs text-faint">
                    0{index + 1}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${site.email}`}
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-[#06070a] transition-colors hover:bg-accent-soft"
          >
            Get in touch
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </>
  );
}
