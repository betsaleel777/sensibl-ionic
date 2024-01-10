<script lang="ts" setup>
const showHomeButton = computed(() => useRouter().currentRoute.value.path !== "/");
const color = ref("light");
const isDark = computed(() => color.value === "dark");
const toogle = () => (isDark.value ? (color.value = "light") : (color.value = "dark"));
</script>

<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <!-- <ion-button v-if="showHomeButton" size="small" router-link="/" fill="clear">
          <ion-icon slot="start" :icon="ioniconsHome"></ion-icon>
        </ion-button> -->
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Sensibl can2024</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="toogle" size="small" fill="clear">
          <ion-icon v-if="isDark" slot="end" :icon="ioniconsMoon"></ion-icon>
          <ion-icon v-else slot="end" :icon="ioniconsSunny"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped></style>
