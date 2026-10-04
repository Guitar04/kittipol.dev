import { Clock, Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm/ContactForm";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { site } from "@/data/site";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "@Guitar04",
    href: site.socials.github,
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: site.name,
    href: site.socials.linkedin,
    Icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="font-display text-muted italic">worth using</span>
            </>
          }
          description="Freelance work, a full-time role, or a second opinion on an architecture decision — the form and the inbox both reach me."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Form */}
          <Reveal y={32} className="lg:col-span-7">
            <div className="panel panel-sheen h-full p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          {/* Channels */}
          <Reveal delay={120} y={32} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              <div className="panel overflow-hidden">
                <div className="border-b border-white/[0.07] px-6 py-5">
                  <span className="eyebrow">Direct channels</span>
                </div>

                <ul className="divide-y divide-white/[0.06]">
                  {channels.map(({ label, value, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-white/[0.03]"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent-soft">
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-mono text-[0.66rem] tracking-[0.16em] text-faint uppercase">
                            {label}
                          </span>
                          <span className="block truncate text-[0.92rem] text-ink">
                            {value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability */}
              <div className="panel relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_100%_0%,rgba(91,141,239,0.14),transparent_65%)]" />
                <div className="relative flex items-start gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-accent-soft">
                    <Clock className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.95rem] font-medium text-ink">
                      {site.available
                        ? "Currently taking on new work"
                        : "Currently fully booked"}
                    </p>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">
                      Messages usually get a reply within a day or two. Include
                      a rough scope and timeline and the first reply will be a
                      lot more useful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
