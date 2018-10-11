
<template>
  <Popup
    :isOpened="isOpened"
    @close="$emit('close')" 
    class="popup-prime"
  >
    <h3 class="popup-title" slot="header">Расскажите о нас в соцсетях</h3>
    <div class="popup-social" slot="body">
      <a href="#" class="popup-social__link icon icon--facebook" />
      <a href="#" class="popup-social__link icon icon--google-plus" />
      <a href="#" class="popup-social__link icon icon--vk" />
      <a href="#" class="popup-social__link icon icon--twitter" />
    </div>
    <template slot="footer">
      <p class="popup__footer-text">Выберите соцсеть, в которой Вы хотели бы сделать репост</p>
    </template>
  </Popup>
</template>

<script>
import Popup from '~/components/UiKit/Popup'
export default {
  name: 'SharePopup',
  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Popup
  }
}
</script>

<style lang="scss">
@import "sharePopup";
</style>
