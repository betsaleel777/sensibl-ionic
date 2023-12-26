// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/ionic"],
  css: ['~/assets/css/ionic.css'],
  ionic: {
    css: { utilities: true }
  }
})