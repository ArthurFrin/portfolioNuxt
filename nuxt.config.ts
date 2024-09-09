// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;'
        }
      }
    }
  },

  modules: ['@nuxtjs/google-fonts', '@pinia/nuxt'],
  googleFonts: {
    families: {
      Michroma: true,
    }
  }
})
