import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: site.socials.github },
  { label: "LinkedIn", href: site.socials.linkedin },
];

export default function Intro() {
  return (
    <section className="scroll-mt-20">
      <div className="wrap">
        <div className="grid gap-y-8 pt-32 pb-16 sm:pt-40 sm:pb-20 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-x-12">
          {/* Status sits in the label column so the left edge stays consistent */}
          <div className="md:pt-2.5">
            <span className="label inline-flex items-center gap-2">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-emerald-400"
              />
              {site.available ? "Available" : "Booked"}
            </span>
          </div>

          <div>
            <h1 className="text-[clamp(2.1rem,6vw,3.1rem)] leading-[1.05] font-medium tracking-[-0.035em] text-fg">
              {site.name}
            </h1>
            <p className="mt-3 text-[1.02rem] text-dim">{site.role}</p>

            <div className="mt-9 max-w-[54ch] space-y-4 text-[0.95rem] leading-[1.75] text-dim">
              <p>
                I work across the entire delivery path — typed React and
                Next.js interfaces, the C#/.NET, Laravel and Node.js services
                behind them, and the containerised pipelines that ship them.
              </p>
              <p>
                Most of my work has been for public sector and regulatory
                organisations, where reliability and long-term maintainability
                matter more than novelty.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group inline-flex items-center gap-1.5 text-[0.9rem] text-dim transition-colors duration-200 hover:text-fg"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
