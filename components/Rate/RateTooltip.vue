<template>
  <div class="rate-tooltip">{{ data.name }} : {{ data.fee }}</div>
</template>

<script>
export default {
  name: 'RateTooltip',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          name: '',
          fee: 0
        }
      }
    }
  }
}
</script>
