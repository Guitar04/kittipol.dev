export type Position = {
  /** Job title. Adjust if your official title on record differs. */
  title: string;
  type: "Full-time" | "Internship";
  duration: string;
};

export type Experience = {
  company: string;
  /** Registered name, shown as a secondary line. */
  legalName?: string;
  href: string;
  /**
   * Path under /public. Omit when the company has no logo file — the card
   * falls back to a text wordmark.
   */
  logo?: { src: string; width: number; height: number };
  /** Short, factual description of the company. Optional. */
  summary?: string;
  /** Combined time at the company, shown in the card header. */
  total: string;
  /** Most recent position first. */
  positions: Position[];
};

/** Reverse chronological — most recent company first. */
export const experience: Experience[] = [
  {
    company: "SW Tech & Media",
    href: "https://swtech.co.th/",
    // No logo file: their site renders the brand as a text wordmark.
    summary:
      "One-stop technology provider covering consultancy, software development, and infrastructure and system design for business.",
    total: "4 mos",
    positions: [
      {
        title: "Full Stack Developer",
        type: "Full-time",
        duration: "4 mos",
      },
    ],
  },
  {
    company: "Synerry Corporation",
    legalName: "Synerry Corporation (Thailand) Co., Ltd.",
    href: "https://www.synerry.com/",
    logo: { src: "/logos/synerry.png", width: 816, height: 256 },
    summary:
      "Digital agency delivering web and mobile applications, digital communications and IT infrastructure for government and enterprise clients in Thailand.",
    total: "1 yr 6 mos",
    positions: [
      {
        title: "Full Stack Developer",
        type: "Full-time",
        duration: "1 yr 2 mos",
      },
      {
        title: "Developer Intern",
        type: "Internship",
        duration: "4 mos",
      },
    ],
  },
];
