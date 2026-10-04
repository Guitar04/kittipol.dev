import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import ContactForm from "@/components/ContactForm/ContactForm";
import { site } from "@/data/site";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "@Guitar04", href: site.socials.github },
  { label: "LinkedIn", value: site.name, href: site.socials.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" index="03" label="Contact">
      <Reveal>
        <p className="max-w-[54ch] text-[0.95rem] leading-[1.75] text-dim">
          Available for freelance engagements, full-time positions and
          technical consultation. Responses usually go out within one to two
          business days.
        </p>

        <div className="mt-9">
          <ContactForm />
        </div>

        <ul className="mt-10 grid gap-y-3 border-t border-line pt-8">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex flex-wrap items-baseline gap-x-5 gap-y-1"
              >
                <span className="label w-20 shrink-0">{channel.label}</span>
                <span className="inline-flex items-center gap-1.5 text-[0.9rem] text-dim transition-colors duration-200 group-hover:text-fg">
                  {channel.value}
                  <ArrowUpRight className="size-3.5 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
