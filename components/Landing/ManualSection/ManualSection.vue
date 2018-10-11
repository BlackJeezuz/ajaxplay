<template>
  <section class="manual-section" id="manual-section">
    <div class="wrapper">
      <h3 class="main-title">Два простых способа начать работу:</h3>
      <div class="manual-list-wrapper">
        <ul class="manual-list">
          <li class="manual-list__item">
            <span class="manual-list__icon ico ico-step-1" />
            <div class="manual-list__content">
              <p class="manual-list__info">
                <a href="#" class="main-link">Зарегистрируйтесь</a><br>
                на сайте <b>Any.Cash</b>
              </p>
              <span class="icon icon--arrow-large" />
            </div>
          </li>
          <li class="manual-list__item">
            <span class="manual-list__icon main-icon icon icon--portmone" />
            <div class="manual-list__content">
              <p class="manual-list__info">Пополните кошелек<br>в личном кабинете</p>
              <span class="icon icon--arrow-large" />
            </div>
          </li>
          <li class="manual-list__item">
            <span class="manual-list__icon main-icon icon icon--balance-in" />
            <div class="manual-list__content">
              <p class="manual-list__info">Пользуйтесь всеми<br>услугами сервиса!</p>
              <span class="icon icon--arrow-large" />
            </div>
          </li>
          <li class="manual-list__item">
            <span class="manual-list__icon main-icon main-icon--primary icon icon--wallet" />
          </li>
        </ul>

        <ul class="manual-list">
          <li class="manual-list__item">
            <span class="manual-list__icon ico ico-step-2" />
            <div class="manual-list__content">
              <p class="manual-list__info">Введите «<b>/start</b>» у
              <br>бота <a href="#" class="main-link">@AnyCashBot</a></p>
              <span class="icon icon--arrow-large" />
            </div>
          </li>
          <li class="manual-list__item">
            <span class="manual-list__icon main-icon icon icon--telegram" />
            <div class="manual-list__content">
              <p class="manual-list__info">Пополните кошелек,<br>следуя гайдам бота</p>
              <span class="icon icon--arrow-large" />
            </div>
          </li>
          <li class="manual-list__item">
            <span class="manual-list__icon main-icon icon icon--drop-in" />
            <div class="manual-list__content">
              <p class="manual-list__info">Пользуйтесь всеми<br>услугами сервиса!</p>
              <span class="icon icon--arrow-large" />
            </div>
          </li>
          <li class="manual-list__item">
            <span class="manual-list__icon main-icon main-icon--primary icon icon--wallet" />
          </li>
        </ul>
      </div>
      <div class="manual__footer"><div class="manual__footer-text">Для Вашего удобства, Вы всегда можете использовать веб-сервис и Телеграм-бота параллельно.</div></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ManualSection'
}
</script>

<style lang="scss">
@import "manual-section";
</style>
