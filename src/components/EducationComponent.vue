<template>
  <v-container id="education">
    <h2>Formation</h2>
    <v-timeline>
      <v-timeline-item
        size="small"
        dot-color="green-lighten-1"
        fill-dot
        max-width="75%"
      >
        <template v-slot:opposite>
          <span class="text-green-lighten-1">2019 - présent</span>
        </template>
        <v-card>
          <v-card-title class="bg-green-lighten-1">
            Bachelier en Informatique
          </v-card-title>
          <v-card-text> EPHEC - Louvain-La-Neuve </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        size="small"
        dot-color="indigo-lighten-2"
        fill-dot
        max-width="75%"
      >
        <template v-slot:opposite>
          <span class="text-indigo-lighten-2">2017 - 2019</span>
        </template>
        <v-card>
          <v-card-title class="bg-indigo-lighten-2">
            CESS & Formation Technicien en Informatique
          </v-card-title>
          <v-card-text> ITN Centre Asty-Moulin - Namur </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        size="small"
        dot-color="green-lighten-1"
        fill-dot
        max-width="75%"
      >
        <template v-slot:opposite>
          <span class="text-green-lighten-1">2012 - 2017</span>
        </template>
        <v-card>
          <v-card-title class="bg-green-lighten-1">
            1ère - 5ème Enseignement général
          </v-card-title>
          <v-card-text> ISJB - Wavre </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<style>
.v-timeline-item:nth-child(even) > *:first-child {
  justify-self: end;
}
</style>
