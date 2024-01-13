<template>
  <LayoutComponent>
    <ion-content :fullscreen="true" class="ion-padding" color="light">
      <ThematiqueComponent :thematique="thematique" />
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup>
const id = Number(useRouter().currentRoute.value.params.id);
const thematiques = useThematiques();
const thematique = useThematique();
thematique.value = thematiques.value.find((thematique) => thematique.id === id)!;
</script>

<style scoped></style>
