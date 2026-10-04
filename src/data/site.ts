export const site = {
  name: "Kittipol Lekrathok",
  firstName: "Kittipol",
  lastName: "Lekrathok",
  wordmark: "KITTIPOL",
  wordmarkSuffix: ".DEV",
  role: "Full Stack Developer",
  tagline:
    "Full Stack Developer specialising in scalable web applications, backend services and cloud infrastructure.",
  email: "kittipol.lkt@gmail.com",
  available: true,
  socials: {
    github: "https://github.com/Guitar04",
    linkedin: "https://www.linkedin.com/in/kittipon-lekathok-2944a6331/",
  },
} as const;

export const profile = {
  nickname: "Ta",
  /** Plain number rather than a birth date — bump this once a year. */
  age: 26,
  education: {
    program: "Information and Communication Technology",
    faculty: "Faculty of Science",
    university: "Ubon Ratchathani University",
  },
} as const;

export const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;
