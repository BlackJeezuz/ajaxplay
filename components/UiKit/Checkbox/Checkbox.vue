<template>
  <div class="checkbox">
    <input type="checkbox" :disabled="disabled" class="checkbox__input" id="check-1" :checked="checked" @change="$emit('change', $event.target.checked)">
    <label for="check-1" class="checkbox__label"><slot></slot></label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "checkbox";
</style>

