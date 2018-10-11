<template>
  <no-ssr>
    <Carousel
      :class="['slider', {'slider--centered' : slideCount <= perPage}]"
      :perPage="perPage"
      :navigationEnabled="slideCount > perPage"
      :paginationEnabled="false"
      :navigationNextLabel="'<span class=\'slider__arrow icon icon--next\'>'"
      :navigationPrevLabel="'<span class=\'slider__arrow icon icon--prev\'>'"
      :loop="true"
    >
      <slot></slot>
    </Carousel>
  </no-ssr>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    slideCount: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      perPage: 4
    }
  }
}
</script>

<style lang="scss">
@import "slider";
</style>
