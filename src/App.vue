<template>
  <v-app theme="dark">
    <v-navigation-drawer app>
      <v-list>
        <v-list-item
          prepend-avatar="/moi.jpg"
          title="Mathieu Walravens"
          subtitle="m.walravens@proton.me"
        />
      </v-list>
      <v-divider></v-divider>
      <v-list v-for="item in items" :key="item.title" nav density="compact">
        <v-divider v-if="item.divider" />
        <v-list-item
          v-else
          :title="item.title"
          :prepend-icon="item.icon"
          :to="{ hash: `#${item.url}` }"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const items = [
  { title: "A propos de moi", icon: "mdi-face-shimmer", url: "about" },
  { title: "Formation", icon: "mdi-school", url: "education" },
  { title: "Expérience professionnelle", icon: "mdi-briefcase", url: "work" },
  { title: "Langues", icon: "mdi-translate", url: "languages" },
  { divider: true },
  { title: "Activités", icon: "mdi-human-scooter", url: "activities" },
  { title: "Résumé", icon: "mdi-table-of-contents", url: "summary" },
];
</script>
