<template>
  <Popup
    :isOpened="isOpened" 
    @close="close"
    class="popup-prime popup-feed"
  >
    <h3 class="popup-title" slot="header">Ваш отзыв принят</h3>
    <template slot="body">
      <p>Мы опубликуем Ваш отзыв в ближайшее время, после того как он пройдет премодерацию. Чаще всего это происходит в течении 48 часов.</p>
    </template>
    <template slot="footer">
      <button  class="btn btn-main btn-main--hovered" type="submit">Вернуться</button>
    </template>
  </Popup>
</template>

<script>
 import Popup from '~/components/UiKit/Popup'
 export default {
   name: 'FeedBackAdd',
   components: {
     Popup
   },
   data () {
     return {
       isOpened: true,
     }
   },
   methods: {
     close () {
       this.isOpened = false
     }
   }
 }
</script>
