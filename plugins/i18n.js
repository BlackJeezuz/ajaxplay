import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

let ruLocale = {}
// eslint-disable-next-line
axios.get('/_view/localization_core/ru/').then((response) => {
  return response.data[1].data.map(locale => {
    ruLocale[locale[4]] = locale[3]
  })
})

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locales.locale,
    fallbackLocale: 'ru',
    messages: {
      'ru': ruLocale
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
