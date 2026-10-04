import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { experience } from "@/data/experience";
import { dataProject } from "@/data/projectdata";

export default function Experience() {
  return (
    <Section id="experience" index="01" label="Experience">
      <Reveal>
        <ol>
          {experience.map((item, index) => (
            <li
              key={item.company}
              className={cn(
                "py-7 first:pt-0 last:pb-0",
                index > 0 && "border-t border-line"
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[1rem] text-fg transition-colors duration-200 hover:text-accent"
                >
                  {item.logo ? (
                    <>
                      <Image
                        src={item.logo.src}
                        alt={item.company}
                        width={item.logo.width}
                        height={item.logo.height}
                        className="h-[1.15rem] w-auto select-none"
                      />
                      <span className="sr-only">{item.company}</span>
                    </>
                  ) : (
                    <span>{item.company}</span>
                  )}
                  <ArrowUpRight className="size-3.5 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>

                <span className="label">{item.total}</span>
              </div>

              {item.summary ? (
                <p className="mt-3 max-w-[58ch] text-[0.85rem] leading-relaxed text-faint">
                  {item.summary}
                </p>
              ) : null}

              <ul className="mt-5 space-y-2">
                {item.positions.map((position) => (
                  <li
                    key={`${item.company}-${position.title}-${position.type}`}
                    className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1"
                  >
                    <span className="text-[0.92rem] text-dim">
                      {position.title}
                    </span>
                    <span className="font-mono text-[0.72rem] text-faint">
                      {position.type} · {position.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {/* Client organizations — same hairline matrix as the Stack section */}
        <div className="mt-10 border-t border-line pt-8">
          <h3 className="label">Clients</h3>

          <div className="mt-5 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {dataProject.map((client) => (
              <div key={client.name} className="bg-canvas p-5">
                <span className="flex size-8 items-center justify-center rounded-full bg-white/90 p-1">
                  <Image
                    src={client.logo}
                    alt=""
                    width={32}
                    height={32}
                    className="size-full object-contain"
                  />
                </span>
                <p className="mt-4 text-[0.84rem] leading-snug text-dim">
                  {client.name}
                </p>
                <p className="mt-1.5 font-mono text-[0.68rem] text-faint">
                  {client.sector}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
