<template>
  <v-list-group v-if="items !== undefined">
    <template v-slot:activator="{ props }">
      <v-list-item
        v-bind="props"
        :prepend-icon="icon"
        :title="text"
        :href="link"
      />
    </template>

    <SidebarItem v-for="item in items" :key="item.text" v-bind="item" />
  </v-list-group>
  <v-list-item v-else :prepend-icon="icon" :title="text" :href="link" />
</template>

<script setup lang="ts">
import type { SidebarItemConfig } from "../../types";
import SidebarItem from "./SidebarItem.vue";

defineProps<SidebarItemConfig>();
</script>
