<template>
  <li @mouseover="isTooltipDisplayed = true" @mouseleave="isTooltipDisplayed = false" v-if="todo" :class="todo.isChecked ? 'todo-item is-active' : 'todo-item'">
    <checkbox
      :todoId="id"
      v-model="todo.isChecked"
      @change="handleCheck"
    />
    <textarea
      class="todo-item__input-edit"
      type="text"
      disabled="true"
      :id="id"
      :value="todo.text"
      @blur="handleBlur"
      @change="handleText($event.target.value)"
      ref="input"
    />
    <span class="todo-item__text" ref="text">{{ todo.text }}</span>
    <div class="btn-group">
      <button class="btn-default btn-edit" @click="handleEdit">edit</button>
      <button class="btn-default btn-delete material-icons" @click="handleRemove" title="Remove todo">close</button>
    </div>
  </li>
</template>

<script>
import Checkbox from '../Checkbox'
import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  components: {
    Checkbox
  },
  props: {
    id: {
      type: String,
      default: 'todo'
    },
    todo: Object
  },
  methods: {
    ...mapActions(['removeTodo', 'editTodo', 'checkTodo']),
    handleEdit () {
      this.$refs.input.style.height = `${this.$refs.text.offsetHeight + 10}px`
      this.$refs.input.disabled = false
      this.$refs.input.focus()
    },
    handleText (text) {
      this.editTodo({ id: this.id, text: text })
    },
    handleBlur () {
      this.$refs.input.disabled = true
      if (!this.$refs.input.value) this.removeTodo(this.id)
    },
    handleRemove () {
      this.removeTodo(this.id)
    },
    handleCheck (isChecked) {
      let id = this.id
      this.checkTodo({ id, isChecked })
    }
  }
}
</script>

<style lang="scss">
@import "todo-item";
</style>
