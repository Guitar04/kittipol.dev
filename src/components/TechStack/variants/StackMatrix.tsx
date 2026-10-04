import {
  allTechnologies,
  categories,
  technologiesByCategory,
} from "@/data/technologies";

/**
 * Variant A — hairline matrix. One cell per category, divided by a 1px grid
 * gap so every rule is exactly one pixel. Reads as a spec sheet.
 */
export default function StackMatrix() {
  return (
    <>
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const items = technologiesByCategory[category];

          return (
            <div key={category} className="bg-canvas p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="label">{category}</h3>
                <span className="font-mono text-[0.68rem] tabular-nums text-fg/25">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {items.map((tech) => (
                  <li key={tech.name}>
                    <span className="group inline-flex items-center gap-2.5 text-[0.85rem] text-dim transition-colors duration-200 hover:text-fg">
                      <tech.icon className="size-3.5 shrink-0 text-faint transition-colors duration-200 group-hover:text-accent" />
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-5 font-mono text-[0.7rem] text-faint">
        {allTechnologies.length} technologies · {categories.length} areas
      </p>
    </>
  );
}
