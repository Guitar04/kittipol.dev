import { allTechnologies } from "@/data/technologies";

/**
 * Variant G — a complete numbered index, closer to a track listing than a
 * skills grid. No grouping: the category rides along on the right so the
 * whole inventory reads as one continuous run.
 */
export default function StackIndex() {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {allTechnologies.map((tech, index) => (
        <li key={tech.name}>
          <span className="group flex items-center gap-4 py-2.5">
            <span className="w-6 shrink-0 font-mono text-[0.68rem] tabular-nums text-fg/20 transition-colors duration-200 group-hover:text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <tech.icon className="size-3.5 shrink-0 text-faint transition-colors duration-200 group-hover:text-fg" />
            <span className="text-[0.95rem] text-dim transition-colors duration-200 group-hover:text-fg">
              {tech.name}
            </span>
            <span className="label ml-auto">{tech.category}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
