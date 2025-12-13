import { IconType } from "react-icons";

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
