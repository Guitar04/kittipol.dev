"use client";

import { ArrowDownToLine, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import CodeCard from "@/components/Hero/CodeCard";
import Reveal from "@/components/ui/reveal";
import { site } from "@/data/site";
import { allTechnologies, categories } from "@/data/technologies";
import { dataProject } from "@/data/projectdata";

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

const stats = [
  { value: `${allTechnologies.length}`, label: "Technologies" },
  { value: `${categories.length}`, label: "Disciplines" },
  { value: `${dataProject.length}`, label: "Organizations" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center pt-32 pb-20 sm:pt-36"
    >
      <div className="shell">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ---------------------------------------------------------- */}
          {/* Left column                                                 */}
          {/* ---------------------------------------------------------- */}
          <div className="lg:col-span-7">
            {site.available ? (
              <Reveal>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] py-1.5 pr-4 pl-3 text-[0.78rem] text-muted backdrop-blur-sm">
                  <span className="relative flex size-1.5">
                    <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-emerald-400" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Available for new projects
                </span>
              </Reveal>
            ) : null}

            <Reveal delay={80}>
              <h1 className="mt-7 text-[clamp(2.9rem,8.5vw,5.4rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
                <span className="block text-ink">{site.firstName}</span>
                <span className="text-gradient block">{site.lastName}</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                <p className="font-mono text-[0.8rem] tracking-[0.2em] text-muted uppercase">
                  {site.role}
                </p>
              </div>
            </Reveal>

            <Reveal delay={210}>
              <p className="mt-8 max-w-lg text-[1.03rem] leading-[1.75] text-muted">
                I build{" "}
                <span className="font-display text-ink italic">
                  scalable
                </span>{" "}
                web applications — from typed React and Next.js interfaces down
                to the APIs, databases and pipelines that keep them running.
                Obsessed with clean code and the details users actually feel.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={280}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[0.92rem] font-medium text-[#06070a] shadow-[0_10px_36px_-10px_rgba(91,141,239,0.85)] transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_14px_44px_-10px_rgba(91,141,239,0.95)]"
                >
                  Start a conversation
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href={site.resume}
                  download
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-[0.92rem] font-medium text-ink transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <ArrowDownToLine className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download CV
                </a>
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={340}>
              <div className="mt-10 flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="group inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-accent/10 hover:text-ink"
                  >
                    <Icon className="size-[1.05rem]" />
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={400}>
              <dl className="mt-14 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05]">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-base/70 px-4 py-5">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-2xl font-semibold tracking-tight text-ink">
                        {stat.value}
                      </span>
                      <span className="mt-1 block font-mono text-[0.65rem] tracking-[0.16em] text-faint uppercase">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Right column                                                */}
          {/* ---------------------------------------------------------- */}
          <Reveal delay={260} y={40} className="lg:col-span-5">
            <CodeCard />
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="font-mono text-[0.6rem] tracking-[0.28em] text-faint uppercase">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
