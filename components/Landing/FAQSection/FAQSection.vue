<template>
  <section class="section section--faq" id="faq-section">
    <div class="wrapper">
      <h2 class="main-title">FAQ и техподдержка</h2>
      <div class="faq">
        <div class="faq__block">
          <span class="faq__icon main-icon main-icon--primary icon icon--email-large" />
          <h4 class="faq__title">Возникли вопросы по работе нашего сервиса?</h4>
          <p class="faq__text">Вы можете написать на e-mail нашей поддержке, и специалисты решат Ваши вопросы</p>
          <a href="#" class="faq__link">support@any.cash</a>
        </div>
        <div class="faq__block">
          <span class="faq__icon main-icon main-icon--primary icon icon--operator" />
          <h4 class="faq__title">Необходимо моментальное решение проблемы?</h4>
          <p class="faq__text">Обратитесь к телеграм-боту! Там Вы найдете базу знаний, либо свяжетесь с оператором.</p>
          <a href="#" class="faq__link">@AnyCashRoBot</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQSection'
}
</script>

<style lang="scss">
@import "faq";
</style>
