<template>
  <v-container class="pad">
    <AboutComponent />
    <EducationComponent />
    <WorkComponent />
    <LanguagesComponent />
    <ActivitiesComponent />
    <SummaryComponent />
  </v-container>
</template>

<script setup lang="ts">
import AboutComponent from "./AboutComponent.vue";
import EducationComponent from "./EducationComponent.vue";
import WorkComponent from "./WorkComponent.vue";
import LanguagesComponent from "./LanguagesComponent.vue";
import ActivitiesComponent from "./ActivitiesComponent.vue";
import SummaryComponent from "./SummaryComponent.vue";
</script>

<style lang="scss">
.pad {
  padding: 0 10%;
}
h2 {
  margin-top: 50px;
}
</style>
