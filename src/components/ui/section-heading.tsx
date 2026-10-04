import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent/60" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-5 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
