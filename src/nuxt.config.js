const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/vue-todo/'
  }
} : {}

module.exports = {
  vendor: ['vuex-persist', 'material-icons', 'axios'],
  head: {
    title: 'vue-start',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
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
  css: [
    'material-icons/iconfont/material-icons.scss'
  ],
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/tools/tools.scss'],
    'nuxt-universal-storage'
  ],
  plugins: [
    { src: '~/plugins/persistence.js', ssr: false }
  ],
  ...routerBase
}

