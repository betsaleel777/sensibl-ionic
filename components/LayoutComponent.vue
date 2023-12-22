<script lang="ts" setup></script>

<template>
  <MenuComponent />
  <ion-page id="main-content">
    <HeaderComponent />
    <ion-content class="ion-padding" color="light">
      <slot />
    </ion-content>
  </ion-page>
</template>

<style scoped></style>
