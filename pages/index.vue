<template>
  <LayoutComponent>
    <ion-card>
      <ion-list inset="true" lines="none">
        <ion-item :router-link="`/detail/${rule}`" v-for="(rule, key) in rules" :key="key" :button="true">
          <ion-badge color="primary" slot="start">{{ rule }}</ion-badge>
          <ion-label> règle numéro {{ rule }} </ion-label>
        </ion-item>
      </ion-list>
    </ion-card>
  </LayoutComponent>
</template>

<script setup>
definePageMeta({
  alias: ["/index", "/"],
});
const rules = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<style scoped></style>
