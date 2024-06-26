import type { ThemeDefinition as VuetifyThemeDefinition } from "vuetify";

export type Colors = NonNullable<VuetifyThemeDefinition["colors"]>;

export interface ThemeDefinition {
  defaultTheme: "dark" | "light";
  darkThemeColors?: Colors;
  lightThemeColors?: Colors;
}

export interface SidebarItemConfig {
  text: string;
  icon?: string;
  link?: string;
  items?: SidebarItemConfig[];
}

export interface ThemeConfig {
  avatar: string;
  email: string;
  theme: ThemeDefinition;
  sidebar: SidebarItemConfig[];
}
