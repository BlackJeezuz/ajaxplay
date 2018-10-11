import CONF from '~/utils/config'
import ORM from './orm'
import { $P } from '../tools/helpers'
import Vue from 'vue'

export const LOCALIZATION = {
  langs: {}
  // currentLang: CONF.defaultLang
}

const FETCH_URL = CONF.localizationUrl || '/_view/core/'

$P(LOCALIZATION, 'currentLang', function () {
  return window.localStorage.getItem('lang') || CONF.defaultLang
}, function (lang) {
  window.localStorage.setItem('lang', lang)
})

LOCALIZATION.init = function () {
  function mkLang (lang) {
    LOCALIZATION.langs[lang.name] = LOCALIZATION.langs[lang.name] || {}
  }
  function mkLocKey (elem) {
    mkLang(elem.lang)
    LOCALIZATION.langs[elem.lang.name][elem.key] = elem
  }
  ORM.onModel('lang', mkLang)
  ORM.onModel('localization', mkLocKey)
  return ORM.view(FETCH_URL)
}

LOCALIZATION.ld = function (value, langStr = LOCALIZATION.currentLang) {
  let lng = LOCALIZATION.langs[langStr] || {}
  if (lng[value] != null) return lng[value].value
  return value
}

Vue.filter('local', value => {
  return LOCALIZATION.ld(value)
})
Vue.prototype.$localization = LOCALIZATION
Vue.prototype.$local = LOCALIZATION.ld
