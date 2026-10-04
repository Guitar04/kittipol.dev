import StackMatrix from "./StackMatrix";
import StackLayers from "./StackLayers";
import StackChapters from "./StackChapters";
import StackIndex from "./StackIndex";
import StackBrand from "./StackBrand";
import StackMarquee from "./StackMarquee";
import StackCode from "./StackCode";
import StackCore from "./StackCore";

export const stackVariants = [
  {
    key: "matrix",
    letter: "A",
    name: "Matrix",
    note: "Currently live. Bordered cells, 1px rules, per-category counts.",
    Component: StackMatrix,
  },
  {
    key: "layers",
    letter: "E",
    name: "Layers",
    note: "States an architecture instead of listing words: interface, services, data, platform — with languages spanning the side.",
    Component: StackLayers,
  },
  {
    key: "chapters",
    letter: "F",
    name: "Chapters",
    note: "Scale contrast. The category becomes a headline and the technologies drop to body copy.",
    Component: StackChapters,
  },
  {
    key: "index",
    letter: "G",
    name: "Index",
    note: "No grouping. One continuous numbered run of every technology.",
    Component: StackIndex,
  },
  {
    key: "brand",
    letter: "H",
    name: "Brand",
    note: "Real logo colour rather than monochrome. Marks that are near-black in their own palette fall back to white.",
    Component: StackBrand,
  },
  {
    key: "marquee",
    letter: "I",
    name: "Marquee",
    note: "Three rows drifting in opposite directions, paused on hover. Motion carries the section instead of structure.",
    Component: StackMarquee,
  },
  {
    key: "code",
    letter: "J",
    name: "Code",
    note: "The stack as a typed source file, generated from the same data so it cannot drift out of sync.",
    Component: StackCode,
  },
  {
    key: "core",
    letter: "K",
    name: "Core",
    note: "Hierarchy by importance, not category: ten lead technologies get real estate, the rest sit quietly underneath.",
    Component: StackCore,
  },
] as const;

export {
  StackMatrix,
  StackLayers,
  StackChapters,
  StackIndex,
  StackBrand,
  StackMarquee,
  StackCode,
  StackCore,
};
