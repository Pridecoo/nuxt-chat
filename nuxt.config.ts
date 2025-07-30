// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: [
    './layers/base/app/assets/css/main.css'
  ],
  modules: ['@nuxt/eslint',],
  nitro: {
    storage: {
      db: {
        driver: 'fs',
        base: './.data'
      }
    }
  },

  $production: {
    nitro: {
      storage: {
        db: {
          driver: 'redis',
          url: process.env.REDIS_REDIS_URL
      }
    }
  },
  }
})
