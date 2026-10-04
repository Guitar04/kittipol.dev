import { categories, technologiesByCategory } from "@/data/technologies";
import { brandColor } from "@/data/brandColors";

/**
 * Variant H — real brand colour rather than monochrome, grouped by category.
 */
export default function StackBrand() {
  return (
    <div className="space-y-9">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="label">{category}</h3>

          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-4">
            {technologiesByCategory[category].map((tech) => (
              <li key={tech.name}>
                <span className="group inline-flex items-center gap-2.5">
                  <tech.icon
                    className="size-[1.15rem] shrink-0 opacity-75 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ color: brandColor(tech.name) }}
                  />
                  <span className="text-[0.88rem] text-dim transition-colors duration-200 group-hover:text-fg">
                    {tech.name}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
