<script lang="ts" setup>
import type { Thematique } from "~/types/global";

const { data: jsonThematique } = await useFetch<Thematique[]>("/json/thematiques.json");
const thematiques = useThematiques();
thematiques.value = jsonThematique.value!;
</script>

<template>
  <ThematiqueCardComponent v-for="(thematique, key) in thematiques" :key="key" :thematique="thematique" />
  <HarcelementCardComponent />
</template>

<style scoped></style>
