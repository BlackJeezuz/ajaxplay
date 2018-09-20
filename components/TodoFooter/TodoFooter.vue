<template>
  <div class="todo-footer">
    <span class="todo-footer__counter">Deals: {{ todosCount }}</span>
    <div class="todo-footer__column">
      <div class="btn-group">
        <button :class="['btn', 'btn-tab', {'is-active': filter==='All'}]" @click="handleFilter('All')">All</button>
        <button :class="['btn', 'btn-tab', {'is-active': filter==='Completed'}]" @click="handleFilter('Completed')">Completed</button>
        <button :class="['btn', 'btn-tab', {'is-active': filter==='Uncompleted'}]" @click="handleFilter('Uncompleted')">Uncompleted</button>
      </div>
      <div class="todo-footer__controll">
        <button class="btn-default btn-edit" @click="complete(isCompleted)">{{ this.isCompleted ? 'uncomplete all' : 'complete all' }}</button>
        <button class="btn-default btn-edit" @click="removeCompleted">clear completed</button>
      </div>
    </div>
    <span class="todo-footer__counter">{{ doneTodosCount ? `Deals left: ${doneTodosCount}` : 'All done'}}</span>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'TodoFooter',
  computed: {
    ...mapGetters({
      filter: 'FILTER',
      todosCount: 'TODOS_COUNT',
      doneTodosCount: 'DONE_TODOS_COUNT',
      isCompleted: 'IS_COMPLETED'
    })
  },
  methods: {
    ...mapActions (['setFilter', 'filterTodos', 'removeCompleted', 'complete']),
    handleFilter (val) {
      this.setFilter(val)
      this.filterTodos(val)
    }
  }
}
</script>

<style lang="scss">
@import "todo-footer";
</style>
