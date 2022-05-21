<template>
  <v-container id="work">
    <h2>Expérience professionnelle</h2>
    <v-timeline class="timeline">
      <v-timeline-item
        size="small"
        dot-color="indigo-lighten-2"
        fill-dot
        max-width="75%"
      >
        <template v-slot:opposite>
          <span class="text-indigo-lighten-2">21 Février - 20 Mai 2022</span>
        </template>
        <v-card>
          <v-card-title class="bg-indigo-lighten-2">
            Stage chez Odoo
          </v-card-title>
          <v-card-subtitle>Software Developer</v-card-subtitle>
          <v-card-text>
            Support Tech, recherche de solutions appropriées à des problèmes et
            patch de bugs.
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        size="small"
        dot-color="green-lighten-1"
        fill-dot
        max-width="75%"
      >
        <template v-slot:opposite>
          <span class="text-green-lighten-1">18 Mars - 5 Avril 2019</span>
        </template>
        <v-card>
          <v-card-title class="bg-green-lighten-1">
            Stage à la commune de Chaumont-Gistoux
          </v-card-title>
          <v-card-subtitle>Technicien en Informatique</v-card-subtitle>
          <v-card-text>
            Support informatique, maintenance des postes de travail et
            installation de nouveaux postes.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
