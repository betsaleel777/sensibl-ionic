<template>
  <LayoutComponent>
    <div class="ion-text-center titre">
      <ion-label color="warning"> c'est la page de la règle {{ rule }} </ion-label>
    </div>
    <ion-card color="secondary" class="carte">
      <ion-card-content class="card-content">
        <p>
          <ion-text class="ion-text-justify rule-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </ion-text>
        </p>
      </ion-card-content>
    </ion-card>
    <div :class="classPagination">
      <ion-button color="warning" :router-link="`/detail/${rule - 1}`" fill="clear" v-if="rule !== 1">
        <ion-icon color="warning" slot="start" :icon="ioniconsCaretBack"></ion-icon>
        prec
      </ion-button>
      <ion-button color="warning" :router-link="`/detail/${rule + 1}`" fill="clear" v-if="rule !== 10">
        <ion-icon color="warning" slot="end" :icon="ioniconsCaretForward"></ion-icon>
        suiv
      </ion-button>
    </div>
  </LayoutComponent>
</template>

<script setup>
const rule = Number(useRouter().currentRoute.value.params.rule);
const classPagination = computed(() => {
  if (rule === 10) return { "pagination-start": true };
  else if (rule === 1) return { "pagination-end": true };
  else return { "pagination-middle": true };
});
</script>

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
