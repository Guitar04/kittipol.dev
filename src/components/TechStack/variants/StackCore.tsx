import { allTechnologies } from "@/data/technologies";

/**
 * Variant K — hierarchy by importance rather than by category. Every other
 * attempt gave all 34 technologies equal weight; this one leads with what the
 * work is actually built on and lets the rest sit quietly underneath.
 *
 * Edit this list to change what gets promoted — nothing else needs to move.
 */
const core = [
  "C#",
  ".NET",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Laravel",
  "Node.js",
  "MSSQL",
  "Docker",
];

export default function StackCore() {
  const primary = core
    .map((name) => allTechnologies.find((tech) => tech.name === name))
    .filter((tech): tech is NonNullable<typeof tech> => Boolean(tech));

  const secondary = allTechnologies.filter(
    (tech) => !core.includes(tech.name)
  );

  return (
    <div>
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
        {primary.map((tech) => (
          <li
            key={tech.name}
            className="group flex flex-col items-center gap-3 bg-canvas px-3 py-7"
          >
            <tech.icon className="size-6 text-dim transition-colors duration-200 group-hover:text-fg" />
            <span className="text-center text-[0.8rem] leading-tight text-faint transition-colors duration-200 group-hover:text-dim">
              {tech.name}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <h3 className="label">Also working with</h3>
        <p className="mt-3.5 max-w-[60ch] text-[0.85rem] leading-[1.9] text-faint">
          {secondary.map((tech, index) => (
            <span key={tech.name}>
              {index > 0 ? (
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
    </div>
  );
}
