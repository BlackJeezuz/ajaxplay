import * as mutationTypes from '~/store/types/mutations'

export default function ({ store }) {
  if (process.browser) {
    let state = JSON.parse(localStorage.getItem('state'))

    if (state) {
      store.commit(mutationTypes.SET_TODOS, state.todos.todos)
      store.commit(mutationTypes.SET_FILTER, state.filters.filter)
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('state', JSON.stringify(store.state))
    })
  }
}