<template>
  <v-container id="about">
    <v-container>
      <v-row>
        <v-col></v-col>
        <v-col class="end">
          <v-card>
            <v-card-text>
              Développeur backend qui aime les communications réseaux,
              persévérant dans la recherche de bugs et toujours à la recherche
              d'optimisations.
            </v-card-text>
            <v-card-actions>
              <v-btn
                prepend-icon="mdi-open-in-new"
                href="/cv.pdf"
                target="_blank"
                >Voir CV</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-img src="/moi.jpg" />
          <h2>Mathieu Walravens</h2>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.v-img {
  border-radius: 50%;
}
#about {
  background-image: url("https://p2.piqsels.com/preview/843/461/88/coding-code-programming-screen.jpg");
  background-size: cover;
}
.end {
  align-self: end;
}
h2 {
  margin: 0;
}
</style>
