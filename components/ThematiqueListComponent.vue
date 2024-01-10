<script lang="ts" setup>
import type { Thematique } from "~/types/global";

const { data: thematiques } = await useFetch<Thematique>("/json/thematiques.json");
useState("thematiques", () => thematiques.value);
</script>

<template>
  <ThematiqueCardComponent v-for="(thematique, key) in thematiques" :key="key" :thematique="thematique" />
</template>

<style scoped></style>
