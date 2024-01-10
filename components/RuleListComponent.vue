<script lang="ts" setup>
import type { Rule } from "~/types/global";
const props = defineProps<{ rules: Rule[] }>();
</script>

<template>
  <ion-card>
    <ion-list lines="none">
      <ion-item
        :router-link="`/detail/${rule.id}`"
        v-for="(rule, key) in props.rules"
        :key="key"
        :button="true"
      >
        <ion-label> {{ rule.title }} </ion-label>
      </ion-item>
    </ion-list>
  </ion-card>
</template>

<style scoped></style>
