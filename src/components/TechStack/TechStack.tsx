"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import {
  allTechnologies,
  categories,
  technologiesByCategory,
} from "@/data/technologies";
import type { TechCategory } from "@/types/Technology";

type Filter = TechCategory | "All";

const filters: Filter[] = ["All", ...categories];

export default function TechStack() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () => (active === "All" ? allTechnologies : technologiesByCategory[active]),
    [active]
  );

  return (
    <section id="stack" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="Stack"
          align="center"
          title={
            <>
              Tools I reach for,{" "}
              <span className="font-display text-muted italic">
                and why
              </span>
            </>
          }
          description="Chosen for fit rather than novelty — each of these has earned its place on shipped work across frontend, backend, data and delivery."
        />

        {/* Filters */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
              const isActive = filter === active;
              const count =
                filter === "All"
                  ? allTechnologies.length
                  : technologiesByCategory[filter].length;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={isActive}
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.82rem] font-medium transition-all duration-300",
                    isActive
                      ? "border-accent/50 bg-accent/12 text-ink"
                      : "border-white/[0.08] bg-white/[0.03] text-muted hover:border-white/20 hover:text-ink"
                  )}
                >
                  {filter}
                  <span
                    className={cn(
                      "font-mono text-[0.65rem] transition-colors",
                      isActive ? "text-accent-soft" : "text-faint"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div
          key={active}
          className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
        >
          {visible.map((tech, index) => (
            <div
              key={`${active}-${tech.name}`}
              className="pop-in group relative flex aspect-square flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3 transition-all duration-400 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/[0.07]"
              style={{ animationDelay: `${Math.min(index * 25, 500)}ms` }}
            >
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(60%_60%_at_50%_15%,rgba(91,141,239,0.22),transparent_70%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <tech.icon className="relative size-6 text-muted transition-all duration-400 group-hover:scale-110 group-hover:text-ink sm:size-7" />
              <span className="relative text-center text-[0.68rem] leading-tight text-faint transition-colors duration-300 group-hover:text-muted">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed marquee */}
      <div className="marquee-viewport fade-edges relative mt-20 overflow-hidden py-2">
        <div
          className="marquee"
          style={
            {
              "--marquee-duration": "48s",
              "--marquee-gap": "3rem",
            } as React.CSSProperties
          }
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="marquee-group"
              aria-hidden={group === 1 ? true : undefined}
            >
              {allTechnologies.map((tech) => (
                <span
                  key={`${group}-${tech.name}`}
                  className="group flex items-center gap-3 whitespace-nowrap"
                >
                  <tech.icon className="size-5 text-faint transition-colors duration-300 group-hover:text-accent-soft" />
                  <span className="font-mono text-[0.78rem] tracking-wide text-faint transition-colors duration-300 group-hover:text-ink">
                    {tech.name}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
