import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Section from "@/components/ui/section";
import { stackVariants } from "@/components/TechStack/variants";

export const metadata: Metadata = {
  title: "Stack variants",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return (
    <>
      <div aria-hidden className="top-wash" />

      <header className="relative z-10">
        <div className="wrap pt-20 pb-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[0.82rem] text-dim transition-colors duration-200 hover:text-fg"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to site
          </Link>

          <h1 className="mt-8 text-[clamp(1.8rem,5vw,2.5rem)] leading-tight font-medium tracking-[-0.035em] text-fg">
            Stack variants
          </h1>
          <p className="mt-4 max-w-[54ch] text-[0.95rem] leading-[1.75] text-dim">
            The same data in four treatments, each shown in the real section
            chrome. Tell me a letter and I will swap it into the live page.
          </p>
        </div>
      </header>

      <main className="relative z-10">
        {stackVariants.map((variant) => (
          <Section
            key={variant.key}
            id={variant.key}
            index={variant.letter}
            label={variant.name}
          >
            <p className="mb-8 max-w-[58ch] text-[0.85rem] leading-relaxed text-faint">
              {variant.note}
            </p>
            <variant.Component />
          </Section>
        ))}
      </main>

      <footer className="relative z-10">
        <div className="wrap">
          <div className="border-t border-line py-10 font-mono text-[0.72rem] text-faint">
            Preview route · not indexed
          </div>
        </div>
      </footer>
    </>
  );
}
