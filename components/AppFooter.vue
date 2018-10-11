<template>
  <footer class="footer">
    <div class="container container--flex">
      <nav class="footer__nav">
        <nuxt-link :to="localePath('bonus')" class="footer__nav-link footer__link link">Бонусы</nuxt-link>
        <nuxt-link :to="localePath('partnership')" class="footer__nav-link footer__link link">Партнерство</nuxt-link>
        <nuxt-link :to="localePath('placeholder-page')" class="footer__nav-link footer__link link">Помощь</nuxt-link>
      </nav>
      <div class="footer__info">
        <nuxt-link :to="localePath('placeholder-page')" class="footer__link link">Оферта</nuxt-link>
        <span class="footer__copy">© Any.Cash, {{ currentYear }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
