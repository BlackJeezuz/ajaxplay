<template>
  <section class="main-section section--bg section--lined" id="main-section">
    <div class="wrapper">
      <ul class="main-list">
        <li class="main-list__item">
          <a href="#" class="main-list__link" v-scroll-to="'#manual-section'">Как это работает?</a>
        </li>
        <li class="main-list__item">
          <a href="#" class="main-list__link" v-scroll-to="'#blog-section'">Новостной блог</a>
        </li>
        <li class="main-list__item">
          <a href="#" class="main-list__link" v-scroll-to="'#advantages-section'">О нас</a>
        </li>
        <li class="main-list__item">
          <a href="#" class="main-list__link" v-scroll-to="'#faq-section'">Поддержка</a>
        </li>
      </ul>

      <main class="main-section__content">
        <h1 class="main-section__title main-caption">Any.<span>cash</span></h1>
        <h2 class="main-section__subtitle">ваш надежный кошелек криптовалют</h2>
        <ul class="main-advanteges">
          <li class="main-advanteges__item">Легкое управление криптовалютными кошельками</li>
          <li class="main-advanteges__item">Моментальная конвертация и вывод на любую ПС</li>
          <li class="main-advanteges__item">Реальный заработок через партнерскую программу</li>
        </ul>
      </main>

      <a href="#" class="main-section__link">Создать кошелек</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainSection'
}
</script>

<style lang="scss">
@import "main-section";
</style>
