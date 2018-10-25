<template>
  <div class="settings app container">
    <h2 class="settings__title">Settings for todo {{ todo.id }}</h2>
    <form class="settings-form">
      <div class="settings-form__field">
        <label for="set-text">Todo description:</label>
        <textarea class="settings-form__text" id="set-text"></textarea>
      </div>
      <div class="settings-form__field">
        <label>Checked</label>
        <Checkbox />
      </div>
      <div class="settings-form__field">
        <label>Checked</label>
        <Checkbox />
      </div>
    </form>
  </div>
</template>

<script>
import Checkbox from '~/components/Checkbox'
import { mapGetters } from 'vuex'

export default {
  components: {
    Checkbox
  },
  computed: {
    ...mapGetters({
      getTodo: 'TODO'
    }),
    todo () {
      return this.getTodo(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
@import "id";
</style>
