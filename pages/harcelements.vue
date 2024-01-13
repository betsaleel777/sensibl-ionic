<template>
  <LayoutComponent>
    <ion-content :fullscreen="true">
      <HarcelementRuleList />
    </ion-content>
  </LayoutComponent>
</template>

<script lang="ts" setup></script>

<style scoped>
ion-content {
  --background: var(--ion-color-light) url("/images/sprite2.png") no-repeat center center / cover;
}
</style>
