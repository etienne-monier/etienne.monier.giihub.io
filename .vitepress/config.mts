import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from "./theme/types";
import colors from "vuetify/util/colors";

const siteTitle = "Etienne Monier";
const siteDescription = "Ingénieur DEVOPs @ CSGroup, Toulouse";

export default defineConfigWithTheme<ThemeConfig>({
  title: siteTitle,
  description: siteDescription,
  srcDir: "src",
  themeConfig: {
    avatar: "/avatar.jpg",
    email: "etienne.monier@protonmail.com",
    theme: {
      defaultTheme: "dark",
      lightThemeColors: {
        primary: colors.red.base,
      },
      darkThemeColors: {
        primary: colors.amber.base,
      },
    },
    sidebar: [],
  },
  locales: {
    root: {
      label: "French",
      lang: "fr",
    },
    en: {
      label: "English",
      lang: "en",
    },
  },
  vite: {
    ssr: { noExternal: ["vuetify"] },
  },
});
