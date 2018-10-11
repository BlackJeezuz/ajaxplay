<template>
  <div class="radio">
    <div class="radio__item" v-for="radio in options" :key="`radio-${radio.value}`">
      <input
        class="radio__input"
        name="radio-btn"
        type="radio"
        :id="`radio-${radio.value}`"
        @change="$emit('change', radio.value)"
        :checked="picked === radio.value"
      >
      <label class="radio__label" :for="`radio-${radio.value}`">{{ radio.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'picked',
    event: 'change'
  },
  props: {
    picked: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import "radio";
</style>
