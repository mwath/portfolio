<template>
  <v-container id="summary">
    <h2>Résumé</h2>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Theme</th>
          <th class="text-center">Heures Totales</th>
          <th class="text-center">Heures valorisées</th>
          <th class="text-center">Lien</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cat in categories" :key="cat.theme">
          <td class="text-left">{{ cat.theme }}</td>
          <td class="text-center">{{ cat.real_hours }}</td>
          <td class="text-center">{{ cat.hours }}</td>
          <td class="text-center">
            <template v-for="act in cat.get_activities()" :key="act.url">
              <v-btn icon="mdi-open-in-new" :href="act.url" target="_blank" />
            </template>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th class="text-left">Total</th>
          <th class="text-center">{{ total_real_hours }}</th>
          <th class="text-center">{{ total_hours }}</th>
          <th></th>
        </tr>
      </tfoot>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import { categories } from "../store";

const total_hours = categories.map((c) => c.hours).reduce((a, b) => a + b);
const total_real_hours = categories
  .map((c) => c.real_hours)
  .reduce((a, b) => a + b);
</script>
