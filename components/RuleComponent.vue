<script lang="ts" setup>
import type { Rule } from "~/types/global";

const props = defineProps<{ rule: Rule }>();
const classPagination = computed(() => {
  if (props.rule.id === 10) return { "pagination-start": true };
  else if (props.rule.id === 1) return { "pagination-end": true };
  else return { "pagination-middle": true };
});
</script>

<template>
  <div class="ion-text-center titre">
    <ion-label color="success">{{ props.rule.title }} </ion-label>
  </div>
  <ion-card color="light" class="carte">
    <ion-card-content class="card-content">
      <p class="ion-text-justify rule-text">
        <ion-text>
          {{ props.rule.content }}
        </ion-text>
      </p>
    </ion-card-content>
  </ion-card>
  <div :class="classPagination">
    <ion-button
      color="success"
      :router-link="`/detail/${props.rule.id - 1}`"
      fill="clear"
      v-if="props.rule.id !== 1"
    >
      <ion-icon color="success" slot="start" :icon="ioniconsCaretBack"></ion-icon>
      prec
    </ion-button>
    <ion-button
      color="success"
      :router-link="`/detail/${props.rule.id + 1}`"
      fill="clear"
      v-if="props.rule.id !== 10"
    >
      <ion-icon color="success" slot="end" :icon="ioniconsCaretForward"></ion-icon>
      suiv
    </ion-button>
  </div>
</template>

<style scoped>
.carte {
  margin-top: 5px;
  margin-bottom: 0px;
}
.carte-content {
  padding: 10px;
}
.titre {
  margin-bottom: 0px;
}
.pagination-middle {
  display: flex;
  justify-content: space-between;
  padding-inline: 5px;
}
.pagination-start {
  display: flex;
  justify-content: start;
  padding-inline: 5px;
}
.pagination-end {
  display: flex;
  justify-content: end;
  padding-inline: 5px;
}
.rule-text {
  font-size: medium;
}
</style>
