<template>
  <LayoutComponent>
    <ion-content :fullscreen="true" class="ion-padding" color="light">
      <HarcelementComponent :id="id" />
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup>
const id = Number(useRouter().currentRoute.value.params.id);
</script>

<style scoped></style>
