import { cn } from "@/lib/utils";
import { allTechnologies } from "@/data/technologies";
import { brandColor } from "@/data/brandColors";

/**
 * Variant I — three rows drifting in opposite directions at different speeds,
 * each logo in its own brand colour. Rows pause on hover so anything can be
 * read, and collapse to a static wrapped list under reduced-motion.
 *
 * The strip is hidden from assistive tech; the plain list below carries the
 * same content.
 */
const rows = [0, 1, 2].map((row) =>
  allTechnologies.filter((_, index) => index % 3 === row)
);

const durations = ["58s", "72s", "64s"];

export default function StackMarquee() {
  return (
    <div>
      <div aria-hidden className="fade-x space-y-3.5 overflow-hidden">
        {rows.map((items, rowIndex) => (
          <div
            key={rowIndex}
            className={cn("mq-viewport", rowIndex % 2 === 1 && "mq-reverse")}
          >
            <div
              className="mq"
              style={
                {
                  "--mq-duration": durations[rowIndex],
                  "--mq-gap": "0.875rem",
                } as React.CSSProperties
              }
            >
              {[0, 1].map((group) => (
                <div key={group} className="mq-group">
                  {items.map((tech) => (
                    <span
                      key={`${group}-${tech.name}`}
                      className="group inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 whitespace-nowrap transition-colors duration-200 hover:border-fg/20"
                    >
                      <tech.icon
                        className="size-4 shrink-0 opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                        style={{ color: brandColor(tech.name) }}
                      />
                      <span className="text-[0.85rem] text-dim transition-colors duration-200 group-hover:text-fg">
                        {tech.name}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="sr-only">
        {allTechnologies.map((tech) => tech.name).join(", ")}
      </p>
    </div>
  );
}
