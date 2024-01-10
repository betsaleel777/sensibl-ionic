<template>
  <LayoutComponent>
    <ion-content :fullscreen="true" color="light">
      <RuleListComponent :rules="thematique.rules" />
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup>
import type { Thematique } from "~/types/global";
const thematique = useState<Thematique>("thematique");
</script>

<style scoped></style>
