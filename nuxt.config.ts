// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Movie Finder'
    }
  },
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Mouse Memoirs': true
    }
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.FIRE_API_KEY,
      authDomain: process.env.FIRE_AUTH_DOMAIN,
      projectId: process.env.FIRE_PROJECT_ID,
      storageBucket: process.env.FIRE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIRE_MESSAGING_SENDER_ID,
      appId: process.env.FIRE_APP_ID,
      omdbApiKey: process.env.OMDB_API_KEY
    }
  }
})
