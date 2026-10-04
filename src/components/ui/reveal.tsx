"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before the transition starts once the element is in view. */
  delay?: number;
  /** Distance in px the element travels upward as it appears. */
  y?: number;
  as?: "div" | "section" | "li" | "article" | "header";
};

/**
 * Fades content up the first time it scrolls into view, then stops observing.
 * Motion is disabled entirely via the reduced-motion rules in globals.css.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", visible && "is-visible", className)}
      style={
        {
          transitionDelay: `${delay}ms`,
          "--reveal-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
