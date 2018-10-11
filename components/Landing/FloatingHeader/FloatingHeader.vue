<template>
  <transition name="floating">
    <div class="floating-header" v-if="scrolled">
      <div class="wrapper">
        <ul class="floating-nav">
          <li class="floating-nav__item"><a href="#" class="floating-nav__link main-link" v-scroll-to="'#header'">Начало</a></li>
          <li class="floating-nav__item"><a href="#" class="floating-nav__link main-link" v-scroll-to="'#manual-section'">Информация</a></li>
          <li class="floating-nav__item"><a href="#" class="floating-nav__link main-link" v-scroll-to="'#blog-section'">Новостной блог</a></li>
          <li class="floating-nav__item"><a href="#" class="floating-nav__link main-link" v-scroll-to="'#about-section'">AnyCash это</a></li>
          <li class="floating-nav__item"><a href="#" class="floating-nav__link main-link" v-scroll-to="'#faq-section'">Поддержка</a></li>
          <li class="floating-nav__item"><button class="floating-nav__btn btn-default icon icon--wallet" /></li>
        </ul>
      </div>
      <button class="floating-header__button" v-scroll-to="'#header'">вверх</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FloatingHeader',
  data () {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    }
  },
  created () {
    // eslint-disable-next-line
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    // eslint-disable-next-line
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style lang="scss">
@import "floating-header";
</style>
