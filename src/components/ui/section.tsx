import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  /** Two-digit index shown before the label, e.g. "01". */
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * The page's one layout rule: a numbered label column on the left, content on
 * the right, separated from the previous section by a single hairline. The
 * label sticks under the nav while its section scrolls past.
 */
export default function Section({
  id,
  index,
  label,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="wrap">
        <div
          className={cn(
            "grid gap-y-8 border-t border-line py-16 sm:py-20 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-x-12",
            className
          )}
        >
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="label flex items-center gap-2.5">
              <span className="tabular-nums text-fg/25">{index}</span>
              {label}
            </h2>
          </div>

          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
