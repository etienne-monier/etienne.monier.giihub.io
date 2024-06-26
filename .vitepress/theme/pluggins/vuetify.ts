/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */
// Styles
import "@mdi/font/css/materialdesignicons.css";

// Composables
import "vuetify/styles";

import { createVuetify as baseCreateVuetify } from "vuetify";

import type { SiteData } from "vitepress";
import type { ThemeConfig } from "../types";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default function createVuetify(siteData: SiteData<ThemeConfig>) {
  const themeConfig = siteData.themeConfig.theme;

  return baseCreateVuetify({
    components,
    directives,
    display: {
      mobileBreakpoint: "md",
    },
    theme: {
      defaultTheme:
        themeConfig.defaultTheme === "dark" ? "darkTheme" : "lightTheme",
      themes: {
        darkTheme: { dark: true, colors: themeConfig.darkThemeColors },
        lightTheme: { dark: false, colors: themeConfig.lightThemeColors },
      },
    },
    ssr: true,
  });
}
