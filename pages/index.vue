<template>
  <div class="app container" id="app">
    <div class="app__header">
      <img :class="['app__img', {'is-paused': isLogoPaused}]" src="~assets/logo.png" alt="vue-logo" @click="isLogoPaused = !isLogoPaused">
      <h1 class="app__title">Vue.js todo list</h1>
    </div>
    <Todo />
  </div>
</template>

<script>
import Todo from '@/components/Todo'

export default {
  components: {
    Todo
  },
  data () {
    return {
      isLogoPaused: true
    }
  }
}
</script>

<style lang="scss">
@import "~assets/styles/layout/layout.scss";
.container {
  min-height: 100vh;
}
</style>

