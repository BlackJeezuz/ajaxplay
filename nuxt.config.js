module.exports = {
  vendor: ['axios', 'nuxt-i18n'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'anycash',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'anycash your online wallet' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/fav/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/fav/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/fav/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/fav/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/fav/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/fav/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/fav/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/fav/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/fav/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192',  href: '/fav/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/fav/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/fav/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/fav/favicon-16x16.png' },
      { rel: 'manifest', href: '/fav/manifest.json' }
    ]
  },
  cache: true,
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#124fe6' },
  /*
  ** Build configuration
  */
  cache: true,
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/tools/tools.scss'],
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
    ['nuxt-i18n', {
      rootRedirect: 'ru',
      langDir: 'locales/',
      lazy: true,
      locales: [{
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js'
      }, {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      }]
    }],
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/_view/**': { 
      target: 'https://acadm.e-cash.pro',
      changeOrigin: true,
      secure: false
    },
    '/_handler/**': {
      target: 'https://acadm.e-cash.pro',
      changeOrigin: true,
      secure: false
    }
  },
  css: [
    '~/assets/styles/layout/main.scss',
    'swiper/dist/css/swiper.css'
  ],
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~/plugins/testslider.js', ssr: false },
    { src: '~/plugins/vue-click-outside.js' },
    { src: '~/plugins/filters.js' }
  ]
}

