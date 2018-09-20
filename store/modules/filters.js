import * as mutationTypes from '../types/mutations'
import * as getterTypes from '../types/getters'

const state = {
  filter: 'All'
}

const mutations = {
  [mutationTypes.SET_FILTER] (state, filter) {
    state.filter = filter
  }
}

const actions = {
  setFilter ({ commit }, filter) {
    commit(mutationTypes.SET_FILTER, filter)
  }
}

const getters = {
  [getterTypes.FILTER]: state => state.filter
}

export default {
  state,
  mutations,
  actions,
  getters
}