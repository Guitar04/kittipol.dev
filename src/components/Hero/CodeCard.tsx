import { site } from "@/data/site";

type Token = { t: string; c?: string };

const kw = "text-[#c792ea]";
const type = "text-[#ffcb6b]";
const prop = "text-[#82aaff]";
const str = "text-[#c3e88d]";
const punc = "text-faint";

/** Each entry is one rendered line; an empty array renders a blank line. */
const lines: Token[][] = [
  [
    { t: "interface", c: kw },
    { t: " " },
    { t: "Developer", c: type },
    { t: " {", c: punc },
  ],
  [{ t: "  name", c: prop }, { t: ": ", c: punc }, { t: "string", c: type }, { t: ";", c: punc }],
  [{ t: "  role", c: prop }, { t: ": ", c: punc }, { t: "string", c: type }, { t: ";", c: punc }],
  [{ t: "  stack", c: prop }, { t: ": ", c: punc }, { t: "string", c: type }, { t: "[];", c: punc }],
  [{ t: "  available", c: prop }, { t: ": ", c: punc }, { t: "boolean", c: type }, { t: ";", c: punc }],
  [{ t: "}", c: punc }],
  [],
  [
    { t: "export const", c: kw },
    { t: " kittipol", c: prop },
    { t: ": ", c: punc },
    { t: "Developer", c: type },
    { t: " = {", c: punc },
  ],
  [
    { t: "  name", c: prop },
    { t: ": ", c: punc },
    { t: `"${site.name}"`, c: str },
    { t: ",", c: punc },
  ],
  [
    { t: "  role", c: prop },
    { t: ": ", c: punc },
    { t: `"${site.role}"`, c: str },
    { t: ",", c: punc },
  ],
  [
    { t: "  stack", c: prop },
    { t: ": [", c: punc },
    { t: '"Next.js"', c: str },
    { t: ", ", c: punc },
    { t: '"Laravel"', c: str },
    { t: ", ", c: punc },
    { t: '"Go"', c: str },
    { t: "],", c: punc },
  ],
  [
    { t: "  available", c: prop },
    { t: ": ", c: punc },
    { t: "true", c: kw },
    { t: ",", c: punc },
  ],
  [{ t: "};", c: punc }],
];

/**
 * Decorative "source file" panel shown beside the hero copy. Purely visual —
 * hidden from assistive tech so the code is not read out as content.
 */
export default function CodeCard() {
  return (
    <div className="relative" aria-hidden>
      {/* Ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(91,141,239,0.22),transparent_70%)] blur-2xl" />

      {/* Stacked card behind, for depth */}
      <div className="absolute inset-x-6 -bottom-3 h-24 rounded-2xl border border-white/[0.06] bg-white/[0.02]" />

      <div className="panel panel-sheen relative overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="ml-1 flex items-center gap-2 rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-1">
            <span className="size-1.5 rounded-full bg-accent-soft" />
            <span className="font-mono text-[0.7rem] text-muted">
              developer.ts
            </span>
          </div>
          <span className="ml-auto font-mono text-[0.65rem] tracking-widest text-faint uppercase">
            TS
          </span>
        </div>

        {/* Code body */}
        <div className="overflow-x-auto px-4 py-5">
          <pre className="font-mono text-[0.78rem] leading-[1.85]">
            <code>
              {lines.map((tokens, index) => (
                <span key={index} className="flex gap-4">
                  <span className="w-5 shrink-0 text-right text-faint/60 select-none">
                    {index + 1}
                  </span>
                  <span className="whitespace-pre">
                    {tokens.map((token, tokenIndex) => (
                      <span key={tokenIndex} className={token.c}>
                        {token.t}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.02] px-4 py-2.5 font-mono text-[0.65rem] text-faint">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            no problems
          </span>
          <span>UTF-8 · LF · TypeScript</span>
        </div>
      </div>
    </div>
  );
}
