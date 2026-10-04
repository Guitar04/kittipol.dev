import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { disciplines, site } from "@/data/site";

const quickFacts = [
  { label: "Role", value: site.role },
  { label: "Focus", value: "Web platforms & APIs" },
  { label: "Status", value: site.available ? "Open to work" : "Engaged" },
];

const links = [
  { label: "GitHub", href: site.socials.github, Icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Engineering that holds up{" "}
              <span className="font-display text-muted italic">
                after launch
              </span>
            </>
          }
          description="I work across the whole delivery path — interface, service layer, data and pipeline — so the pieces fit together instead of merely coexisting."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* Narrative */}
          <div className="space-y-6 lg:col-span-7">
            <Reveal>
              <p className="text-[1.02rem] leading-[1.85] text-muted">
                Most of my work lives in the space between a design file and a
                production deployment. That means typed React and Next.js
                front-ends, Laravel and Node services behind them, relational
                schemas that survive changing requirements, and containerised
                pipelines that make releases boring in the best way.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-[1.02rem] leading-[1.85] text-muted">
                I care about the parts that are easy to skip — accessible
                markup, honest loading states, sensible error handling, and
                performance budgets that hold on a mid-range phone rather than
                only on a developer laptop.
              </p>
            </Reveal>

            {/* Disciplines */}
            <div className="grid gap-4 pt-4 sm:grid-cols-1">
              {disciplines.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <article className="panel panel-hover group p-6">
                    <div className="flex items-start gap-5">
                      <span className="font-mono text-[0.7rem] text-faint transition-colors duration-300 group-hover:text-accent">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-[1.05rem] font-medium text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <Reveal delay={140} y={34} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="panel panel-sheen overflow-hidden">
                {/* Monogram header */}
                <div className="relative flex items-center gap-4 border-b border-white/[0.07] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(70%_100%_at_0%_0%,rgba(91,141,239,0.18),transparent_65%)]" />
                  <div className="relative flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] font-mono text-lg text-accent-soft">
                    KL
                  </div>
                  <div className="relative">
                    <p className="font-medium text-ink">{site.name}</p>
                    <p className="mt-0.5 font-mono text-[0.72rem] tracking-wider text-faint uppercase">
                      {site.wordmark}
                      {site.wordmarkSuffix}
                    </p>
                  </div>
                </div>

                {/* Facts */}
                <dl className="divide-y divide-white/[0.06]">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between gap-4 px-6 py-4"
                    >
                      <dt className="font-mono text-[0.68rem] tracking-[0.16em] text-faint uppercase">
                        {fact.label}
                      </dt>
                      <dd className="text-right text-[0.9rem] text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Links */}
                <div className="grid grid-cols-3 gap-px border-t border-white/[0.07] bg-white/[0.06]">
                  {links.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex flex-col items-center gap-2 bg-base/80 py-5 text-muted transition-colors duration-300 hover:bg-accent/10 hover:text-ink"
                    >
                      <Icon className="size-4" />
                      <span className="font-mono text-[0.65rem] tracking-wider uppercase">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={site.resume}
                download
                className="group mt-4 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.07]"
              >
                <span className="text-[0.92rem] text-ink">
                  Download full résumé
                </span>
                <ArrowUpRight className="size-4 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
