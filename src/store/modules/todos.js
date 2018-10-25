import * as mutationTypes from '../types/mutations'
import * as getterTypes from '../types/getters'

const state = {
  todos: []
}

const mutations = {
  [mutationTypes.PUSH_TODO] (state, todo) {
    state.todos = [...state.todos, todo]
  },
  [mutationTypes.SET_TODOS] (state, todos) {
    state.todos = [...todos]
  },
  [mutationTypes.EDIT_TODO] (state, { id, text }) {
    let todo = state.todos.find(todo => todo.id === id)
    todo.text = text
  },
  [mutationTypes.CHECK_TODO] (state, { id, isChecked }) {
    let todo = state.todos.find(todo => todo.id === id)
    todo.isChecked = isChecked
  }
}

const actions = {
  setTodos: ({ commit }, todos) => {
    commit(mutationTypes.SET_TODOS, todos)
  },
  addTodo: ({ commit }, todo) => {
    commit(mutationTypes.PUSH_TODO, todo)
  },
  removeTodo ({ commit, state }, id) {
    let todos = [...state.todos.filter(todo => todo.id !== id)]
    commit(mutationTypes.SET_TODOS, todos)
  },
  editTodo ({ commit }, { id, text }) {
    commit(mutationTypes.EDIT_TODO, { id, text })
  },
  checkTodo ({ commit }, { id, isChecked }) {
    commit(mutationTypes.CHECK_TODO, { id, isChecked })
  },
  filterTodos ({ commit, state }, filter) {
    let todos = []
    switch (filter) {
      case 'All':
        todos = state.todos.map(item => {
          item.isVisible = true
          return item
        })
        break
      case 'Completed':
        todos = state.todos.map(item => {
          item.isVisible = item.isChecked
          return item
        })
        break
      case 'Uncompleted':
        todos = state.todos.map(item => {
          item.isVisible = !item.isChecked
          return item
        })
        break
      default:
        todos = state.todos.map(item => {
          item.isVisible = true
          return item
        })
        break
    }

    commit(mutationTypes.SET_TODOS, todos)
  },
  removeCompleted ({ commit, state }) {
    let todos = state.todos.filter(todo => !todo.isChecked)
    commit(mutationTypes.SET_TODOS, todos)
  },
  complete ({ commit, state }, isCompleted) {
    let todos = state.todos.map(todo => {
      todo.isChecked = !isCompleted
      return todo
    })

    commit(mutationTypes.SET_TODOS, todos)
  },
  nuxtServerInit ({ commit }, { app }) {
    let state = app.$storage.getCookie('state')

    if (state) {
      commit(mutationTypes.SET_TODOS, state.todos.todos)
      commit(mutationTypes.SET_FILTER, state.filters.filter)
    }
  }
}

const getters = {
  [getterTypes.TODOS]: state => state.todos,
  [getterTypes.TODO]: state => id => {
    return state.todos.find(todo => todo.id === id)
  },
  [getterTypes.TODOS_COUNT]: state => {
    return state.todos.filter(todo => todo.isVisible).length
  },
  [getterTypes.DONE_TODOS_COUNT]: state => {
    return state.todos.filter(todo => !todo.isChecked).length
  },
  [getterTypes.IS_COMPLETED]: (state, getters) => {
    return !getters[getterTypes.DONE_TODOS_COUNT]
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}