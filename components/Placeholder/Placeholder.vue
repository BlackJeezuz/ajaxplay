<template>
  <Popup
    @close="$emit('close', $event)"
    :isOpened="isOpened"
    class="placeholder placeholder--large"
  >
    <div slot="header" class="placeholder__header">
      Ваш личный кабинет
    </div>
    <div slot="body" class="placeholder__body">
      <p class="placeholder__info">
        На данный момент, раздел «Личный кабинет» сайта<br>
        находится в разработке. Все услуги сервиса
        <span class="main-caption main-caption--colored">Any.<span>cash</span></span>
        Вы<br>
        можете получить через телеграм-бот.
      </p>
      <button class="btn btn-main btn-main--hovered">Открыть Telegram-Бот</button>
    </div>
    <div slot="footer" class="placeholder__footer">
      <div class="placeholder-animation">
        <div class="placeholder-animation__pencil">
        </div>
        <div class="placeholder-animation__eraser">
        </div>
      </div>
    </div>
  </Popup>
</template>

<script>
  import Popup from '~/components/UiKit/Popup'
  export default {
    name: 'Placeholder',
    props: {
      isOpened: Boolean
    },
    components: {
      Popup
    }
  }
</script>

<style lang="scss">
@import "placeholder";
</style>
