import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] pt-20 pb-10">
      <div className="shell">
        {/* Call to action */}
        <div className="flex flex-col gap-8 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent/60" aria-hidden />
              Say hello
            </span>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 block text-[clamp(1.7rem,4.5vw,3rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-ink transition-colors duration-300 hover:text-accent-soft"
            >
              {site.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:text-ink"
              >
                <Icon className="size-[1.05rem]" />
              </a>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Meta row */}
        <div className="flex flex-col gap-8 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="text-[0.95rem] font-semibold tracking-tight text-ink"
          >
            {site.wordmark}
            <span className="text-accent">{site.wordmarkSuffix}</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline text-[0.85rem] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 self-start font-mono text-[0.7rem] tracking-[0.16em] text-faint uppercase transition-colors hover:text-ink lg:self-auto"
          >
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Back to top
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-[0.78rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
