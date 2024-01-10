<script lang="ts" setup>
import type { Thematique } from "~/types/global";
import { skullOutline, earthOutline, leafOutline, maleFemaleOutline } from "ionicons/icons";
const props = defineProps<{ thematique: Thematique }>();
const icons = reactive<any>({
  terrorisme: skullOutline,
  plante: leafOutline,
  biohazard: earthOutline,
  genre: maleFemaleOutline,
});
</script>

<template>
  <ion-card>
    <ion-card-content class="ion-no-padding">
      <ion-item :router-link="`/thematique/${props.thematique.id}`" lines="none" :button="true">
        <ion-icon color="warning" slot="start" size="large" :icon="icons[thematique.icon]"></ion-icon>
        <ion-label>
          <ion-text>
            <h2>{{ props.thematique.texte }}</h2>
          </ion-text>
        </ion-label>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
ion-card {
  border-style: solid;
  border-width: 2px;
  border-color: green;
}
</style>
