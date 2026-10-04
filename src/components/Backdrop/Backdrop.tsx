/**
 * Static ambient background: a faint blueprint grid, two slow colour washes and
 * a film grain layer. Rendered once behind everything — no client JS.
 */
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      {/* Base wash */}
      <div className="absolute inset-0 bg-base" />

      {/* Blueprint grid, faded towards the edges */}
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,#000_10%,transparent_72%)]" />

      {/* Colour washes */}
      <div className="absolute -top-40 left-1/2 h-[38rem] w-[68rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[140px]" />
      <div className="absolute top-[38%] -right-40 h-[34rem] w-[34rem] rounded-full bg-violet/10 blur-[150px]" />
      <div className="absolute bottom-0 -left-32 h-[30rem] w-[30rem] rounded-full bg-cyan/[0.07] blur-[150px]" />

      {/* Grain */}
      <div className="noise absolute inset-0 opacity-[0.14] mix-blend-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(3,4,7,0.75)_100%)]" />
    </div>
  );
}
