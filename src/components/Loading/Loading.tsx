"use client";

import { useState, useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [splitReveal, setSplitReveal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate text characters
    animate(".loading-text .char", {
      opacity: [0, 1],
      translateY: [20, 0],
      ease: "outExpo",
      duration: 600,
      delay: stagger(50, { start: 300 }),
    });

    // Animate loading bar
    animate(".loading-bar-fill", {
      width: ["0%", "100%"],
      ease: "inOutQuad",
      duration: 2200,
    });

    // Start split reveal animation
    const splitTimer = setTimeout(() => {
      setSplitReveal(true);
    }, 2800);

    // Remove loading screen after split animation
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3800);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  const text = "KITTIPOL.DEV";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999]"
    >
      {/* Top curtain */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-slate-950 transition-transform duration-1000 ease-in-out ${
          splitReveal ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ zIndex: 2 }}
      />

      {/* Bottom curtain */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-slate-950 transition-transform duration-1000 ease-in-out ${
          splitReveal ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ zIndex: 2 }}
      />

      {/* Center content */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-slate-950 transition-opacity duration-300 ${
          splitReveal ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: 3 }}
      >
      <div className="relative flex flex-col items-center">
        {/* Text */}
        <div className="text-center">
          <p className="loading-text text-white text-lg font-semibold tracking-[0.3em]" style={{ fontFamily: "var(--font-kanit)" }}>
            {text.split("").map((char, index) => (
              <span key={index} className="char inline-block" style={{ opacity: 0 }}>
                {char}
              </span>
            ))}
          </p>
        </div>

        {/* Loading bar */}
        <div className="mt-6 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="loading-bar-fill h-full bg-blue-500 rounded-full" style={{ width: 0 }} />
        </div>
      </div>
      </div>
    </div>
  );
}
