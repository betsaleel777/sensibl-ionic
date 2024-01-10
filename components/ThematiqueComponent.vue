<script lang="ts" setup>
import type { Thematique } from "~/types/global";
const props = defineProps<{ thematique: Thematique }>();
</script>

<template>
  <div class="ion-text-center">
    <ion-label color="success"> {{ props.thematique.texte }} </ion-label>
  </div>
  <ion-card color="light">
    <ion-card-content>
      <p class="ion-text-justify">
        <ion-text>
          {{ props.thematique.content }}
        </ion-text>
      </p>
    </ion-card-content>
  </ion-card>
  <div class="ion-text-center">
    <ion-button :router-link="`/rules`" size="small" color="success"
      >consulter les différentes règles</ion-button
    >
  </div>
</template>

<style scoped>
ion-text {
  font-size: larger;
}
ion-label {
  font-size: large;
  text-decoration: underline;
  text-transform: uppercase;
}
ion-button {
  width: 95%;
}
</style>
