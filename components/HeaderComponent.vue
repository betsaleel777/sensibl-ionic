<script lang="ts" setup>
import { App } from "@capacitor/app";
const ionRouter = useIonRouter();
useBackButton(-1, () => {
  if (!ionRouter.canGoBack()) {
    App.exitApp();
  }
});
</script>

<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button
          v-if="isPlatform('android')"
          text=""
          color="warning"
          :icon="ioniconsArrowBack"
          @click="getNavigation"
        ></ion-back-button>
        <ion-back-button v-else text="" color="warning"></ion-back-button>
      </ion-buttons>
      <ion-title color="warning">Benevol-can2023</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped></style>
