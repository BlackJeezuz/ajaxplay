<template>
  <div class="currency-select">
    <div v-if="label" class="currency-select__label">{{ label }}</div>
    <ul class="currency-select__list">
      <li class="currency-select__item" v-for="currency in currencyList" :key="`currency-${currency}`">
        <button :class="['currency-select__btn', 'btn-clean', { 'is-active': currentCurrency===currency }]" @click="$emit('click', currency)">{{ currency.toUpperCase() }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CurrencySelect',
  model: {
    prop: 'currentCurrency',
    event: 'click'
  },
  props: {
    label: String,
    currencyList: {
      type: Array,
      default: () => []
    },
    currentCurrency: String
  }
}
</script>

<style lang="scss">
@import "currency-select";
</style>
