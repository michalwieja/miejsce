export default {
  // Target: https://go.nuxtjs.dev/config-target

  target: 'static',
  server: {
    host: '0.0.0.0',
    port: 8000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Liceum Miejsce',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Szkoła bez stopni, bez testów i sprawdzianów, bez zadań domowych… bez presji i stresu.\n' +
          'Szkoła, w której relacje są ważniejsze od wyników.\n' +
          'Szkoła, w której nie ma nic ważniejszego niż człowiek.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'Liceum Miejsce'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Liceum Miejsce'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Liceum Miejsce'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.liceummiejsce.pl/miejsce1200x630.webp'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue2-google-maps.js',
      ssr: true
    },
    {
      src: '~/plugins/aos',
      ssr: false
    },
    {
      src: '~/plugins/graphcms'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    'nuxt-animejs',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
