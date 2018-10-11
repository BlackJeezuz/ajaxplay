const state = {
  locales: ['en', 'ru'],
  locale: 'ru'
}

const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

const getters = {
  locale: state => {
    return state.locale
  }
}

const actions = {
  setLang: ({ commit }, locale) => {
    commit('SET_LANG', locale)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
