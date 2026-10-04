import { categories, technologiesByCategory } from "@/data/technologies";

/**
 * Variant F — scale contrast. The category is the headline and the
 * technologies are body copy beneath it, so the section finally has a focal
 * point instead of one uniform text size throughout.
 */
export default function StackChapters() {
  return (
    <div className="divide-y divide-line">
      {categories.map((category, index) => (
        <div key={category} className="py-8 first:pt-0 last:pb-0">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-[clamp(1.35rem,3.4vw,1.95rem)] leading-none font-medium tracking-[-0.035em] text-fg">
              {category}
            </h3>
            <span className="font-mono text-[0.7rem] tabular-nums text-fg/25">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-4 text-[0.9rem] leading-[1.9] text-faint">
            {technologiesByCategory[category].map((tech, techIndex) => (
              <span key={tech.name}>
                {techIndex > 0 ? (
                  <span aria-hidden className="px-2 text-fg/15">
                    ·
                  </span>
                ) : null}
                <span className="transition-colors duration-200 hover:text-dim">
                  {tech.name}
                </span>
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
