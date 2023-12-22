<template>
  <LayoutComponent>
    <div class="ion-text-center titre">
      <ion-label> c'est la page de la règle {{ rule }} </ion-label>
    </div>
    <ion-card class="carte">
      <ion-card-content class="card-content">
        <p>
          <ion-text class="ion-text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </ion-text>
        </p>
      </ion-card-content>
    </ion-card>
  </LayoutComponent>
</template>

<script setup>
import { useRoute } from "vue-router";
const rule = useRoute().params.rule;
</script>

<style scoped>
.carte {
  margin-top: 5px;
}
.carte-content {
  padding: 10px;
}
.titre {
  margin-bottom: 0px;
}
</style>
