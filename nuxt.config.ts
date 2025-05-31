// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  supabase: {
    redirect: false, // Disable automatic redirect
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt'
  ],

  app: {
    head: {
      title: 'CarTrader',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/carIcon.png' } // or .png/.svg
      ]
    }
  }
})
