import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { dataProject } from "@/data/projectdata";

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="Work"
          title={
            <>
              Organizations I&apos;ve{" "}
              <span className="font-display text-muted italic">
                built for
              </span>
            </>
          }
          description="Systems delivered for public-sector and regulatory bodies, where reliability, auditability and long service life matter more than trends."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dataProject.map((client, index) => (
            <Reveal key={client.name} delay={index * 100} y={32}>
              <article className="panel panel-hover group h-full overflow-hidden">
                <div className="relative flex h-40 items-center justify-center border-b border-white/[0.06]">
                  <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(91,141,239,0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex size-24 items-center justify-center rounded-full bg-white/95 p-4 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={client.logo}
                      alt={`${client.name} emblem`}
                      width={72}
                      height={72}
                      className="size-full object-contain"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <span className="eyebrow !text-[0.62rem] !tracking-[0.18em]">
                    {client.sector}
                  </span>
                  <h3 className="mt-3 text-[1.05rem] leading-snug font-medium text-ink">
                    {client.name}
                  </h3>
                  <p className="mt-2 text-[0.87rem] leading-relaxed text-faint">
                    {client.org}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Invitation card */}
        <Reveal delay={120} y={30}>
          <a
            href="#contact"
            className="group mt-4 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[linear-gradient(120deg,rgba(91,141,239,0.10),rgba(167,139,250,0.05)_55%,transparent)] p-8 transition-all duration-400 hover:border-accent/40 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="text-xl font-medium text-ink">
                Have something you want built properly?
              </h3>
              <p className="mt-2 max-w-xl text-[0.93rem] leading-relaxed text-muted">
                Tell me the problem and the constraints — I&apos;ll tell you
                honestly whether I&apos;m the right person for it.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-[0.88rem] font-medium text-ink transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent/12">
              Start a conversation
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
