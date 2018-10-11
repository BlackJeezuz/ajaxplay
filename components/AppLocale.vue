<template>
  <router-view />
</template>

<script>
import CONF from '@/config'
import { LOCALIZATION } from '@/engine/services'

function updateLocale (to, from, next) {
  let locale = to.params.locale
  if (locale && CONF.langs.includes(locale)) {
    LOCALIZATION.currentLang = locale
    next()
  } else {
    let toName = from.name || 'Main'
    next({ name: toName, params: { locale: CONF.defaultLang } })
  }
}

export default {
  name: 'app-locale',
  beforeRouteEnter: updateLocale,
  beforeRouteUpdate: updateLocale,
  metaInfo: {
    titleTemplate: '%s | AC'
  },
}
</script>
