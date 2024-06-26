<script setup lang="ts">
import { useData, withBase } from "vitepress";
import type { ThemeConfig } from "../../types";

const { theme, frontmatter } = useData<ThemeConfig>();
</script>

<template>
  <v-container
    class="px-sm-6 pa-mx-12 d-flex align-center justify-center h-100"
    fluid
  >
    <div>
      <v-responsive class="text-center mx-auto" max-width="700">
        <v-avatar class="mb-6" size="128">
          <v-img :src="theme.avatar" cover></v-img>
        </v-avatar>

        <p class="mt-2 text-h3 text-md-h1 font-weight-thin">
          {{ frontmatter.hero.title }}
        </p>

        <p class="font-weight-medium text-primary text-h5 text-md-h4">
          {{ frontmatter.hero.subtitle }}
        </p>

        <p class="mt-4 text-body-1 text-medium-emphasis">
          {{ frontmatter.hero.description }}
        </p>
      </v-responsive>

      <v-row class="mt-8">
        <v-col
          v-for="skill in frontmatter.skills"
          :key="skill"
          class="d-flex"
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto text-primary d-flex justify-center align-center"
            max-width="600"
            min-height="300"
            width="100%"
            link
            :href="skill.btnUrl"
            :image="withBase(skill.backgroundImage)"
          >
            <div class="ma-3 text-center">
              <v-icon
                color="primary"
                :icon="skill.icon"
                size="64"
                class="pb-3"
              />
              <p class="font-weight-bold text-h6 pb-2">
                {{ skill.title }}
              </p>

              <p>
                {{ skill.subtitle }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
