<script lang="ts" setup>
const props = defineProps<{ id: number }>();
const harcelements = useHarcelements();
const rule = useHarcelement();
rule.value = harcelements.value.find((harcelement) => harcelement.id === props.id)!;
</script>

<template>
  <HarcelementStandardRule v-if="rule.composant === 'HarcelementStandardRule'" />
  <HarcelementTestimonyRule v-else-if="rule.composant === 'HarcelementTestimonyRule'" />
  <HarcelementDenonceRule v-else />
</template>

<style scoped></style>
