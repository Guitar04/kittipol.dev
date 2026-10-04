import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" index="02" label="Experience">
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

                <span className="label">{item.period}</span>
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
                      {position.type}
                      {position.duration ? ` · ${position.duration}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
