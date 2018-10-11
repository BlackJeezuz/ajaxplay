<template>
  <div class="error-page">
    <AppHeader class="header--secondary" />
    <main class="error container">
      <div class="error__code">
        <h3 class="error__code-number">404</h3>
        <p class="error__caption">страница не найдена</p>
      </div>
      <div class="error__info text">
        <h3 class="error__title">Запрошенная Вами страница не существует.</h3>
        <p class="error__text">К сожалению, страница, которую Вы запрашиваете, не существует или была перемещена по другому адресу. Если Вы обнаружили ошибку, мы будем благодарны за фидбек в нашу <a href="#" class="prime-link">службу поддержки.</a></p>
        <button @click="$router.back()" class="error__btn btn btn-main">ВЕРНУТЬСЯ НАЗАД</button>
      </div>
    </main>
    <footer class="footer footer--secondary" />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'

export default {
  name: 'Error404',
  components: {
    AppHeader
  },
  data () {
    return {
      isMenuActive: false
    }
  }
}
</script>

<style lang="scss">
@import "404";
</style>
