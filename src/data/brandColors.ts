/**
 * Brand colour per technology, used by the stack variants that show logos in
 * their own palette. Marks that are near-black in their real palette
 * (Vercel, Next.js, GitHub, Railway) are mapped to white so they stay legible
 * on the dark canvas.
 */
export const brandColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  "Vue.js": "#4FC08D",
  "Nuxt.js": "#00DC82",
  HTML: "#E34F26",
  CSS: "#1572B6",
  "Tailwind CSS": "#06B6D4",
  Figma: "#F24E1E",
  ".NET": "#512BD4",
  PHP: "#777BB4",
  Laravel: "#FF2D20",
  CodeIgniter: "#EF4223",
  "Node.js": "#5FA04E",
  "C#": "#A179DC",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Golang: "#00ADD8",
  MySQL: "#4479A1",
  MSSQL: "#CC2927",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  Redis: "#FF4438",
  Docker: "#2496ED",
  Jenkins: "#D24939",
  GitHub: "#FFFFFF",
  GitLab: "#FC6D26",
  Cloudflare: "#F38020",
  Elasticsearch: "#43A047",
  Vercel: "#FFFFFF",
  Railway: "#FFFFFF",
  Postman: "#FF6C37",
  Swagger: "#85EA2D",
  "OWASP ZAP": "#4FA3E3",
  JMeter: "#D22128",
};

export const brandColor = (name: string) => brandColors[name] ?? "currentColor";
