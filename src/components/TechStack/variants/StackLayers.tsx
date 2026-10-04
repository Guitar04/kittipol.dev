import { technologiesByCategory } from "@/data/technologies";

/**
 * Variant E — the stack drawn as an actual stack. Categories are mapped onto
 * the layer they belong to, so the section states an architecture rather than
 * listing words. Languages run down the side because they span every layer.
 */
const layers = [
  { name: "Interface", category: "Frontend" },
  { name: "Services", category: "Backend" },
  { name: "Data", category: "Database" },
  { name: "Platform", category: "DevOps" },
] as const;

export default function StackLayers() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-[minmax(0,1fr)_10rem]">
      {/* Layers, top to bottom */}
      <div className="grid gap-px bg-line">
        {layers.map((layer, index) => (
          <div key={layer.name} className="bg-canvas px-5 py-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[0.68rem] tabular-nums text-fg/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.05rem] font-medium tracking-tight text-fg">
                {layer.name}
              </h3>
            </div>

            <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2">
              {technologiesByCategory[layer.category].map((tech) => (
                <li
                  key={tech.name}
                  className="text-[0.85rem] text-dim transition-colors duration-200 hover:text-fg"
                >
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Languages span the whole stack */}
      <div className="bg-canvas px-5 py-6">
        <h3 className="label">Languages</h3>
        <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2 md:flex-col md:gap-y-2.5">
          {technologiesByCategory.Languages.map((tech) => (
            <li
              key={tech.name}
              className="text-[0.85rem] text-dim transition-colors duration-200 hover:text-fg"
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Tooling sits under everything */}
      <div className="bg-canvas px-5 py-5 md:col-span-2">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h3 className="label">Tooling</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {technologiesByCategory.Tools.map((tech) => (
              <li
                key={tech.name}
                className="text-[0.85rem] text-faint transition-colors duration-200 hover:text-dim"
              >
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
