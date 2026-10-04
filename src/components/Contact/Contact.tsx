import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { site } from "@/data/site";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "@Guitar04", href: site.socials.github },
  { label: "LinkedIn", value: site.name, href: site.socials.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" index="04" label="Contact">
      <Reveal>
        <p className="max-w-[54ch] text-[0.95rem] leading-[1.75] text-dim">
          Available for freelance engagements, full-time positions and
          technical consultation. Email is the fastest route — responses
          usually go out within one to two business days.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="group mt-8 inline-flex items-baseline gap-2.5 text-[clamp(1.1rem,3vw,1.5rem)] font-medium tracking-[-0.03em] text-fg transition-colors duration-200 hover:text-accent"
        >
          {site.email}
          <ArrowUpRight className="size-4 shrink-0 self-center text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </a>

        <ul className="mt-10 grid gap-y-3 border-t border-line pt-8">
          {channels.map((channel) => {
            const external = channel.href.startsWith("http");

            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex flex-wrap items-baseline gap-x-5 gap-y-1"
                >
                  <span className="label w-20 shrink-0">{channel.label}</span>
                  <span className="inline-flex items-center gap-1.5 text-[0.9rem] text-dim transition-colors duration-200 group-hover:text-fg">
                    {channel.value}
                    <ArrowUpRight className="size-3.5 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
