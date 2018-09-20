const axios = require('axios')
const https = require('https')

module.exports = {
  /*
  ** Headers of the page
  */
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
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
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
  css: [
    'material-icons/iconfont/material-icons.scss'
  ],
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/tools/tools.scss'],
    ['@nuxtjs/proxy', { proxy: ['https://monex.e-cash.pro'] }]
  ],
  generate: {
    routes: function () {
      const agent = new https.Agent({  
        rejectUnauthorized: false
      })

      return axios.get('https://monex.e-cash.pro/_view/list_urls/0/', { httpsAgent: agent })
      .then((res) => {
        return res.data.r.filter(item => item.includes('/ru/exchange/')).map(url => {
          let pageUrl = url.split('/ru/exchange/')[1]
          return {
            route: `./exchanges/${pageUrl}`,
            payload: pageUrl
          }
        })
      })
    },
    minify: {
      collapseWhitespace: false
    }
  },
  plugins: [{
		src: '~/plugins/persistence.js',
		ssr: false
	}]
}

