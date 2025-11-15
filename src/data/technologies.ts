import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiCloudflare,
  SiElasticsearch,
  SiVercel,
  SiRailway,
  SiFigma,
  SiSwagger,
  SiPostman,
  SiZap,
  SiApachejmeter,
  SiTailwindcss,
  SiCodeigniter
} from "react-icons/si";
import { SiMssql } from "@/components/icons/SiMssql";

export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Database"
  | "DevOps"
  | "Tools";

export interface Technology {
  name: string;
  category: TechCategory;
  icon: IconType;
}


export const technologiesByCategory: Record<TechCategory, Technology[]> = {
  Frontend: [
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Next.js", category: "Frontend", icon: SiNextdotjs },
    { name: "HTML", category: "Frontend", icon: SiHtml5 },
    { name: "CSS", category: "Frontend", icon: SiCss3 },
    { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss },
    { name: "Figma", category: "Frontend", icon: SiFigma },
  ],

  Backend: [
    { name: "PHP", category: "Backend", icon: SiPhp },
    { name: "Laravel", category: "Backend", icon: SiLaravel },
    { name: "CodeIgniter", category: "Backend", icon: SiCodeigniter },
    { name: "Node.js", category: "Backend", icon: SiNodedotjs },
  ],

  Languages: [
    { name: "JavaScript", category: "Languages", icon: SiJavascript },
    { name: "TypeScript", category: "Languages", icon: SiTypescript },
  ],

  Database: [
    { name: "MySQL", category: "Database", icon: SiMysql },
    { name: "MSSQL", category: "Database", icon: SiMssql },
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "Firebase", category: "Database", icon: SiFirebase },
    { name: "Redis", category: "Database", icon: SiRedis },
  ],

  DevOps: [
    { name: "Docker", category: "DevOps", icon: SiDocker },
    { name: "Jenkins", category: "DevOps", icon: SiJenkins },
    { name: "GitHub", category: "DevOps", icon: SiGithub },
    { name: "GitLab", category: "DevOps", icon: SiGitlab },
    { name: "Cloudflare", category: "DevOps", icon: SiCloudflare },
    { name: "Elasticsearch", category: "DevOps", icon: SiElasticsearch },
  ],

  Tools: [
    { name: "Vercel", category: "Tools", icon: SiVercel },
    { name: "Railway", category: "Tools", icon: SiRailway },
    { name: "Postman", category: "Tools", icon: SiPostman },
    { name: "Swagger", category: "Tools", icon: SiSwagger },
    { name: "OWASP ZAP", category: "Tools", icon: SiZap },
    { name: "JMeter", category: "Tools", icon: SiApachejmeter },
  ],
};

export const allTechnologies: Technology[] = Object.values(technologiesByCategory).flat();
export const categories: TechCategory[] = Object.keys(technologiesByCategory) as TechCategory[];
export const getCategoryCount = (category: TechCategory): number =>
  technologiesByCategory[category].length;
