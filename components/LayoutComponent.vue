<script lang="ts" setup></script>

<template>
  <ion-page id="main-content">
    <HeaderComponent />
    <ion-content :fullscreen="true" class="ion-padding" color="primary">
      <slot />
    </ion-content>
  </ion-page>
</template>

<style scoped></style>
