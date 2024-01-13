<script lang="ts" setup>
const rule = useHarcelement();
const classPagination = computed(() => {
  if (rule.value.id === 5) return { "pagination-start": true };
  else if (rule.value.id === 1) return { "pagination-end": true };
  else return { "pagination-middle": true };
});
</script>

<template>
  <div class="ion-text-center titre">
    <ion-label color="success"
      ><b>{{ rule.id }}.{{ rule.title }}</b></ion-label
    >
  </div>
  <ion-card color="light" class="carte">
    <ion-card-content class="card-content">
      <p class="ion-text-justify rule-text">
        <ion-text>
          Se taire, c’est laisser faire: <br />
          Il est possible de trouver de l’aide et de signaler les cas, avec les moyens suivants:
          <ul>
            <li>Le module de signalement intégré dans l’application officielle Akwaba Ci</li>
            <li>Les stands Akwaba Mousso sur les Fan Zones de Koumassi et Yopougon</li>
            <li>Akwaba Mousso a un site web, est sur Facebook et Instagram</li>
          </ul>
        </ion-text>
      </p>
    </ion-card-content>
  </ion-card>
  <div :class="classPagination">
    <ion-button
      color="success"
      :router-link="`/harcelement/${rule.id - 1}`"
      fill="clear"
      v-if="rule.id !== 1"
    >
      <ion-icon color="success" slot="start" :icon="ioniconsCaretBack"></ion-icon>
      prec
    </ion-button>
    <ion-button
      color="success"
      :router-link="`/harcelement/${rule.id + 1}`"
      fill="clear"
      v-if="rule.id !== 5"
    >
      <ion-icon color="success" slot="end" :icon="ioniconsCaretForward"></ion-icon>
      suiv
    </ion-button>
  </div>
  <div class="thematique-image">
    <ion-img src="/images/logo-vbg.png"></ion-img>
  </div>
</template>

<style scoped>
.thematique-image {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15vh;
  max-height: 30vh;
  min-width: 100%;
  margin-top: -8vh;
}
ion-img {
  height: 20%;
  width: 60%;
}
ion-card {
  max-height: 50vh;
  overflow-y: auto;
}
.carte {
  margin-top: 5px;
  margin-bottom: 0px;
}
.carte-content {
  padding: 10px;
}
.titre {
  margin-bottom: 0px;
  padding-inline: 15px;
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
ul {
  padding-left: 10px;
}
</style>
