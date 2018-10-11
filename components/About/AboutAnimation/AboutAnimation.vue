<template>
  <div class="about-animation">
    <div class="about-animation__block-left">
      <span class="about-animation__icon" />
      <span class="about-animation__arrow icon icon--right" />
      <span class="about-animation__icon" />
    </div>
    <main class="about-animation__block-main">
      <div class="about-animation__indicators">
        <span :class="['about-animation__indicator', {'is-active': activeIndex === 1}]" />
        <span :class="['about-animation__indicator', {'is-active': activeIndex === 2}]" />
        <span :class="['about-animation__indicator', {'is-active': activeIndex === 3}]" />
      </div>
      <span class="about-animation__main-icon icon icon--wallet" />
      <div class="about-animation__info">
        <h4 class="about-animation__title">Транзакции:</h4>
        <p class="about-animation__text text">За всё время: <b>8 888 888</b></p>
        <p class="about-animation__text text">За сегодня: <b>56</b></p>
      </div>
      <span class="about-animation__icon about-animation__icon--prime" />
    </main>
    <div :class="['about-animation__wallets', `is-active-${activeIndex}`]">
      <span class="about-animation__wallet icon icon--wallet" />
      <span class="about-animation__wallet icon icon--wallet" />
      <span class="about-animation__wallet icon icon--wallet" />
      <span class="about-animation__arrows about-animation__arrows--left icon icon--arrow-lg" />
    </div>
    <div class="about-animation__dots">
      <span :class="['about-animation__indicator', 'about-animation__indicator--secondary' , {'is-active': activeIndex === 1}]" />
      <span :class="['about-animation__indicator', 'about-animation__indicator--secondary' , {'is-active': activeIndex === 2}]" />
      <span :class="['about-animation__indicator', 'about-animation__indicator--secondary' , {'is-active': activeIndex === 3}]" />
    </div>
    <div class="about-animation__bottom-wallet about-animation__wallet icon icon--wallet">
      <span class="about-animation__arrows about-animation__arrows--right icon icon--arrow-lg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: Number
  }
}
</script>

<style lang="scss">
@import "about-animation";
</style>