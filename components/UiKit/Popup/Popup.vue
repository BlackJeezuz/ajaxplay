<template>
  <transition name="popup">
    <div v-if="isOpened" class="popup-overlay" @click.self="close">
      <div class="popup">
        <header class="popup__header">
          <slot name="header"></slot>
        </header>
        <main class="popup__body">
          <slot name="body"></slot>
        </main>
        <footer class="popup__footer">
          <slot name="footer">
            <div class="btn-group">
              <button class="btn btn-main btn-main--hovered">Кнопка</button>
            </div>
          </slot>
        </footer>
        <div @click="close" class="popup__close" title="close" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Popup',
  model: {
    prop: 'isOpened',
    event: 'close'
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'popup-1'
    }
  },
  methods: {
    close () {
      this.$emit('close', !this.isOpened)
    }
  }
}
</script>

<style lang="scss">
@import "popup";
</style>
