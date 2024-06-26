import type { Theme } from "vitepress";
import "./style.css";

import Layout from "./components/Layout.vue";
import createVuetify from "./pluggins/vuetify";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(createVuetify(siteData.value));
  },
} satisfies Theme;
