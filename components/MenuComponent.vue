<script setup lang="ts">
const isOpen = ref<boolean>(false);
const message = ref<string>("");
const currentLang = ref<string>("fr");
const langues = ref<Array<{ id: string; texte: string }>>([
  { id: "fr", texte: isoToEmoji("fr") + " Français" },
  { id: "en", texte: isoToEmoji("gb") + " English" },
  { id: "pt", texte: isoToEmoji("pt") + " Português" },
]);
const currentTheme = ref<string>("def");
const themes = ref<Array<{ id: string; texte: string }>>([
  { id: "def", texte: "Défaut" },
  { id: "ci", texte: isoToEmoji("ci") + " Eléphant" },
  { id: "eg", texte: isoToEmoji("eg") + " Pharaons" },
  { id: "cm", texte: isoToEmoji("cm") + " Lions Indomptables" },
  { id: "mz", texte: isoToEmoji("mz") + " Mambas" },
]);
const handleLanguageChange = (event: any) => {
  const find = langues.value.filter((langue) => langue.id === event.detail.value)[0];
  message.value = `${find.texte} est la nouvelle langue.`;
  currentLang.value = find.id;
  isOpen.value = true;
};
const handleThemeChange = (event: any) => {
  const find = themes.value.filter((theme) => theme.id === event.detail.value)[0];
  message.value = `${find.texte} est le nouveau thème.`;
  currentTheme.value = find.id;
  isOpen.value = true;
};
</script>

<template>
  <ion-menu side="end" content-id="main-content">
    <ion-toolbar>
      <ion-header>
        <ion-title class="titre"> Paramètres </ion-title>
      </ion-header>
    </ion-toolbar>
    <ion-content>
      <ion-list color="light" lines="none">
        <ion-item>
          <ion-icon slot="start" :icon="ioniconsLanguage" aria-hidden="true"></ion-icon>
          <ion-select
            @ionChange="handleLanguageChange($event)"
            label-placement="floating"
            fill="solid"
            label="Langues"
            :value="currentLang"
          >
            <ion-select-option v-for="langue in langues" :value="langue.id">{{
              langue.texte
            }}</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-icon slot="start" :icon="ioniconsColorPaletteOutline" aria-hidden="true"></ion-icon>
          <ion-select
            @ionChange="handleThemeChange($event)"
            label-placement="floating"
            fill="solid"
            label="Themes"
            :value="currentTheme"
          >
            <ion-select-option v-for="theme in themes" :value="theme.id">{{ theme.texte }}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-toast :is-open="isOpen" :message="message" :duration="5000"></ion-toast>
  </ion-menu>
</template>

<style scoped>
ion-title {
  --width: 100%;
}
ion-menu {
  --width: 70%;
}
</style>
