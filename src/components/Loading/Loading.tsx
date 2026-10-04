"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const WORDMARK = `${site.wordmark}${site.wordmarkSuffix}`;
const COUNT_DURATION = 1500;
const HOLD_AFTER_COUNT = 220;
const CURTAIN_DURATION = 900;
const SESSION_KEY = "kl-intro-played";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);
  const frame = useRef<number>(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "1";

    // Play the intro once per session, and never for reduced-motion users.
    if (reducedMotion || alreadyPlayed) {
      const skip = requestAnimationFrame(() => setDone(true));
      return () => cancelAnimationFrame(skip);
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / COUNT_DURATION, 1);
      setProgress(Math.round(easeOutExpo(t) * 100));
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);

    const leaveTimer = setTimeout(
      () => setLeaving(true),
      COUNT_DURATION + HOLD_AFTER_COUNT
    );
    const doneTimer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, COUNT_DURATION + HOLD_AFTER_COUNT + CURTAIN_DURATION);

    return () => {
      cancelAnimationFrame(frame.current);
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[9999]" aria-hidden={leaving}>
      {/* Curtains */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 z-20 h-1/2 bg-base transition-transform duration-900 ease-[cubic-bezier(0.76,0,0.24,1)]",
          leaving ? "-translate-y-full" : "translate-y-0"
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-20 h-1/2 bg-base transition-transform duration-900 ease-[cubic-bezier(0.76,0,0.24,1)]",
          leaving ? "translate-y-full" : "translate-y-0"
        )}
      />

      {/* Centre content */}
      <div
        className={cn(
          "absolute inset-0 z-30 flex flex-col items-center justify-center bg-base transition-opacity duration-300",
          leaving ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />

        <div className="relative flex flex-col items-center">
          <p className="flex font-mono text-[0.95rem] font-medium tracking-[0.34em] text-ink">
            {WORDMARK.split("").map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={cn(
                  "pop-in inline-block",
                  char === "." && "text-accent"
                )}
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {char}
              </span>
            ))}
          </p>

          <div className="mt-7 flex w-56 items-center gap-4">
            <div className="h-px flex-1 overflow-hidden bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-accent to-accent-soft transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="w-8 text-right font-mono text-[0.7rem] tabular-nums text-faint">
              {progress}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
