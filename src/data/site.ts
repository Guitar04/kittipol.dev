export const site = {
  name: "Kittipol Lekethok",
  firstName: "Kittipol",
  lastName: "Lekethok",
  wordmark: "KITTIPOL",
  wordmarkSuffix: ".DEV",
  role: "Full Stack Developer",
  tagline:
    "Crafting scalable web applications with modern JavaScript frameworks, solid backend architecture, and cloud infrastructure.",
  email: "kittipol.lkt@gmail.com",
  resume: "/cv/Resume.pdf",
  available: true,
  socials: {
    github: "https://github.com/Guitar04",
    linkedin: "https://www.linkedin.com/in/kittipon-lekathok-2944a6331/",
  },
} as const;

export const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

/** What I actually do day to day — used by the About section. */
export const disciplines = [
  {
    title: "Frontend Engineering",
    body: "Interfaces built with React, Next.js, Vue and Nuxt — typed end to end, responsive by default, and tuned for real-world performance.",
  },
  {
    title: "Backend & APIs",
    body: "Services in PHP, Laravel, CodeIgniter and Node.js, with relational and document data modelling that stays maintainable as scope grows.",
  },
  {
    title: "Delivery & Quality",
    body: "Docker, Jenkins and Git-based pipelines, plus load and security testing with JMeter and OWASP ZAP before anything reaches production.",
  },
] as const;
