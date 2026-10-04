"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import StackMarquee from "@/components/TechStack/variants/StackMarquee";
import StackBrand from "@/components/TechStack/variants/StackBrand";
import { allTechnologies, categories } from "@/data/technologies";

/**
 * The scrolling strip is the resting state; the button expands a breakdown
 * grouped by discipline underneath it. The panel animates on grid-template-
 * rows so it can grow to its natural height without a hard-coded max-height.
 *
 * Nothing inside the panel is focusable, so aria-hidden while collapsed is
 * safe and keeps the list out of the accessibility tree.
 */
export default function StackPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <StackMarquee />

      <div className="mt-7 flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="stack-breakdown"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[0.82rem] text-dim transition-colors duration-200 hover:border-fg/20 hover:text-fg"
        >
          {open ? "Hide breakdown" : "View breakdown"}
          <ChevronDown
            className={cn(
              "size-3.5 text-faint transition-transform duration-300 group-hover:text-fg",
              open && "rotate-180"
            )}
          />
        </button>

        <span className="font-mono text-[0.7rem] text-faint">
          {allTechnologies.length} technologies · {categories.length} areas
        </span>
      </div>

      <div
        id="stack-breakdown"
        aria-hidden={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-line pt-8 mt-8">
            <StackBrand />
          </div>
        </div>
      </div>
    </div>
  );
}
