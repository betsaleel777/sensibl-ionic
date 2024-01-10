<template>
  <LayoutComponent>
    <ion-content :fullscreen="true" class="ion-padding" color="light">
      <ThematiqueComponent :thematique="thematique" />
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup>
import type { Thematique } from "~/types/global";
const id = Number(useRouter().currentRoute.value.params.id);
const thematiques = useState<Thematique[]>("thematiques");
const thematique = thematiques.value.filter((thematique) => thematique.id === id).at(0);
useState("thematique", () => thematique);
</script>

<style scoped></style>
