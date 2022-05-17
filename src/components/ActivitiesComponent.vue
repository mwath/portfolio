<template>
  <v-container id="activities">
    <h2>Activités</h2>
    <v-dialog v-model="modal">
      <v-card>
        <v-card-text>
          <v-img width="auto" :src="modal_img" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="modal = false"> Fermer </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
      <v-row>
        <v-col
          md="6"
          cols="12"
          v-for="activity in activities"
          :key="activity.name"
        >
          <v-card height="100%">
            <v-card-title>
              {{ activity.name }}: {{ activity.hours }}h
            </v-card-title>
            <v-card-subtitle>
              <i>{{ activity.description }}</i>
            </v-card-subtitle>
            <v-card-text>
              <p>
                <i>Theme: {{ activity.theme }}</i>
              </p>
              <p>{{ activity.thoughts }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                @click="open(activity.url)"
                width="100%"
                prepend-icon="mdi-open-in-new"
              >
                Preuve
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { categories, Activity } from "../store";

interface ActivityCat extends Activity {
  theme: string;
}

let activities: ActivityCat[] = [];
for (const cat of categories) {
  activities.push(
    ...cat.get_activities().map((a) => ({ ...a, theme: cat.theme }))
  );
}

const modal = ref(false);
const modal_img = ref();
const open = (url: string) => {
  if (url.endsWith(".pdf")) {
    location.href = url;
  } else {
    modal_img.value = url;
    modal.value = true;
  }
};
</script>
