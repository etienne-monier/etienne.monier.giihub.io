<script setup lang="ts">
import Home from "./content/Home.vue";
import NotFound from "./content/NotFound.vue";
import Page from "./content/Page.vue";

import { useData } from "vitepress";
import type { Ref } from "vue";
import { computed, ref } from "vue";
import type { ThemeConfig } from "../types";
import { useTheme } from "../utils/composable";

import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const { toggleTheme, dark } = useTheme();
const { site, lang, theme, title } = useData<ThemeConfig>();

const { page, frontmatter } = useData();

// The drawer mobile breakpoint feature is deactivated as
// it updates the model value on mobile-desktop change and
// it gives strange results with the computed prop.

// The drawer value in case of mobile.
// Set to true on upper right button click.
// Set to false when the user clicks outside the navbar.
const drawer: Ref<boolean | null> = ref(null);

// The drawer model value.
// This is written if mobile and the user clicks outside.
// Otherwise, this is controlled.
const drawerProp = computed({
  get() {
    return mobile.value ? drawer.value : !(frontmatter.value.sidebar === false);
  },
  set(v) {
    if (mobile.value) drawer.value = v;
  },
});
</script>

<template>
  <v-app>
    <!-- Navigation drawer -->
    <v-navigation-drawer
      color="surface-container"
      v-model="drawerProp"
      :temporary="mobile"
      :mobile-breakpoint="0"
    >
      <v-list>
        <v-list-item
          :prepend-avatar="theme.avatar"
          :subtitle="theme.email"
          :title="title"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- <v-list density="compact" nav>
        <template v-for="(item, cnt) in theme.sidebar" :key="item.link">
          <v-divider v-if="cnt !== 0" />
          <SidebarItem
            :prepend-icon="item.icon"
            :text="item.text"
            :href="item.link"
            :items="item.items"
          />
        </template>
      </v-list> -->
    </v-navigation-drawer>

    <!-- App bar -->
    <v-app-bar border="b" class="ps-4" flat>
      <v-app-bar-nav-icon v-if="mobile" @click="drawer = !drawer" />
      <v-app-bar-title>Etienne Monier</v-app-bar-title>

      <template #append>
        <v-btn
          v-for="navitem in theme.sidebar"
          :key="navitem.text"
          variant="text"
          :text="navitem.text"
          color="primary"
          href="/"
        />
        <v-divider vertical inset />
        <v-btn
          :icon="dark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          @click="toggleTheme"
          rounded="0"
        />
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn rounded="0" v-bind="props" icon="mdi-translate" />
          </template>
          <v-list>
            <v-list-item
              v-for="locale in site.locales"
              :key="locale.lang"
              :color="locale.lang === lang ? 'primary' : undefined"
            >
              <v-list-item-title>{{ locale.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <!-- Content -->
    <v-main class="bg-surface">
      <NotFound v-if="page.isNotFound" />
      <Home v-if="frontmatter.layout === 'home'" />
      <Page v-else />
    </v-main>
  </v-app>
</template>
