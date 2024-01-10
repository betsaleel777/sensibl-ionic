<template>
  <LayoutComponent>
    <ion-content :fullscreen="true" color="light">
      <ThematiqueListComponent />
    </ion-content>
  </LayoutComponent>
</template>

<script setup>
definePageMeta({
  alias: ["/index", "/"],
});
</script>

<style scoped></style>
