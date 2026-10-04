import { categories, technologiesByCategory } from "@/data/technologies";

/**
 * Variant J — the stack as source. Thematically native to a developer
 * portfolio, and generated from the same data so it can never drift out of
 * sync with the other variants.
 */
const keyFor = (category: string) =>
  category.charAt(0).toLowerCase() + category.slice(1);

export default function StackCode() {
  return (
    <div className="overflow-hidden rounded-lg border border-line">
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span className="font-mono text-[0.72rem] text-faint">stack.ts</span>
        <span className="ml-auto font-mono text-[0.66rem] tracking-wider text-fg/25 uppercase">
          TypeScript
        </span>
      </div>

      <pre className="overflow-x-auto px-4 py-5 font-mono text-[0.78rem] leading-[1.9]">
        <code>
          <span className="text-[#c792ea]">export const</span>{" "}
          <span className="text-[#82aaff]">stack</span>
          <span className="text-faint"> = {"{"}</span>
          {"\n"}
          {categories.map((category) => (
            <span key={category}>
              {"  "}
              <span className="text-[#82aaff]">{keyFor(category)}</span>
              <span className="text-faint">: [</span>
              {technologiesByCategory[category].map((tech, index) => (
                <span key={tech.name}>
                  {index > 0 ? <span className="text-faint">, </span> : null}
                  <span className="text-[#c3e88d]">&quot;{tech.name}&quot;</span>
                </span>
              ))}
              <span className="text-faint">],</span>
              {"\n"}
            </span>
          ))}
          <span className="text-faint">{"}"} </span>
          <span className="text-[#c792ea]">as const</span>
          <span className="text-faint">;</span>
        </code>
      </pre>
    </div>
  );
}
