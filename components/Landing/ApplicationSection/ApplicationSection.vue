<template>
  <section class="section" id="application-section">
    <div class="wrapper">
      <h3 class="main-title">{{ 'ui_where_use'|local }} <span class="main-caption main-caption--colored ">Any.<span>Cash</span></span></h3>
      <div class="application">
        <p class="application__text">{{ 'ui_usage_content'|local }}</p>
      </div>
      <Slider class="application-slider" :slideCount="shops.length" >
        <Slide class="application-slider__slide" v-for="shop in shops" :key="shop.title">
          <div class="application-slider__content">
            <div v-if="!shop.image" class="application-slider__avatar holder holder--camera" />
            <a :href="shop.link" class="link link--bolder application-slider__caption">{{ shop.title }}</a>
          </div>
        </Slide>
      </Slider>
    </div>
  </section>
</template>

<script>
import Slider from '@/components/Landing/Slider';

export default {
  name: 'ApplicationSection',
  components: {
    Slider
  },
  computed: {
    shops () {
      return [
        {
          image: null,
          title: 'Интернет магазин',
          link: '#'
        },
        {
          image: null,
          title: 'Магаз',
          link: '#'
        },
        {
          image: null,
          title: 'Еще Интернет магазин',
          link: '#'
        },
        {
          image: null,
          title: 'Интернет магаз',
          link: '#'
        },
        {
          image: null,
          title: 'Еще магаз',
          link: '#'
        }
      ];
    }
  }
};
</script>

<style lang="scss">
@import "application";
</style>
