"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/**
 * Sparse, slow-drifting dust. Deliberately restrained — it should read as
 * depth in the background, never as a foreground effect. Skipped entirely for
 * users who prefer reduced motion.
 */
export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    initParticlesEngine((engine) => loadSlim(engine)).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 46, density: { enable: true } },
        color: { value: ["#ffffff", "#8fb2ff"] },
        links: { enable: false },
        move: {
          enable: true,
          speed: 0.22,
          direction: "top" as const,
          outModes: { default: "out" as const },
          straight: false,
        },
        opacity: {
          value: { min: 0.05, max: 0.32 },
          animation: { enable: true, speed: 0.4, sync: false },
        },
        size: { value: { min: 0.4, max: 1.6 } },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none fixed inset-0 z-[1]"
      options={options}
    />
  );
}
