<script lang="ts" setup>
const showHomeButton = computed(() => useRouter().currentRoute.value.path !== "/");
</script>

<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button v-if="showHomeButton" size="small" router-link="/" fill="clear">
          <ion-icon slot="start" :icon="ioniconsHome"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Sensibl can2024</ion-title>
      <ion-buttons slot="end">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped></style>
