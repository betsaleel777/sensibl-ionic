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
          Si tu es témoin de harcèlement et que tu te sens en sécurité, n’hésite pas à intervenir avec l’une
          des méthodes contre le harcèlement de rue ci-dessous.
          <ol start="1">
            <li>
              <strong>Distrais</strong> le harceleur en détournant son attention: fais semblant de connaître
              la personne harcelée, demande l’heure ou crée une distraction: sois créatif·ve.
            </li>
            <li>
              <strong>Délègue</strong> à une personne qui représente une forme d’autorité si tu te sens pas
              capable d’intervenir toi-même (policier, agent de sécurité, chauffeur de bus, propriétaire d’un
              commerce); demande à cette personne de t’aider à intervenir.
            </li>
            <li>
              <strong>Documente</strong>: c’est-à-dire filme discrètement la scène et propose à la victime de
              lui fournir la preuve ou de témoigner. Attention: Ne jamais publier sans le consentement de la
              victime.
            </li>
            <li>
              <strong>Dirige</strong>: demande au harceleur d’arrêter, demande-lui de s’en aller tout en
              rassurant la victime, demande de l’aide en évitant de confronter te directement.
            </li>
            <li>
              <strong>Dialogue</strong>: réconforte la personne harcelée après coup , réconforte-la , dis-lui
              que ce qu’elle à vécu n’est pas acceptable.
            </li>
          </ol>
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
ol {
  padding-left: 10px;
}
</style>
