<script setup lang="ts">
import Home from "./content/Home.vue";
import NotFound from "./content/NotFound.vue";
import Page from "./content/Page.vue";

import { useData } from "vitepress";
import { useTheme } from "../utils/composable";
import type { ThemeConfig } from "../types";
import { ref } from "vue";

import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const { toggleTheme, dark } = useTheme();
const { site, lang, theme, title } = useData<ThemeConfig>();

const { page, frontmatter } = useData();

const drawer = ref(true);
</script>

<template>
  <v-app>
    <!-- Navigation drawer -->
    <v-navigation-drawer
      color="surface-container"
      :model-value="drawer && frontmatter.sidebar !== false"
      :mobile="mobile"
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
              :key="locale"
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
