<template>
  <Popup
    :isOpened="isOpened" 
    @close="close"
    class="popup-prime"
  >
    <h3 class="popup-title" slot="header">Регистрация</h3>
    <form  class="popup-form" slot="body">
      <label class="popup-form__item">
        <input 
          class="popup-form__input input" 
          type="email"
          placeholder="Имя пользователя"
          v-model="email"
        >
      </label>
      <label class="popup-form__item">
        <input 
          class="popup-form__input input" 
          type="password" 
          placeholder="Пароль"
          v-model="pass"
        >
      </label>
      <label class="popup-form__item">
        <input 
          class="popup-form__input input" 
          type="password" 
          placeholder="Повторите пароль"
          v-model="passRepeat"
        >
      </label>
    </form>
    <template slot="footer">
      <button  class="btn btn-main btn-main--hovered popup-prime__btn">Зарегистрировать</button>
      <a href="#" class="link">У меня уже есть аккаунт</a>
    </template>

  </Popup>
</template>

<script>
 import Popup from '~/components/UiKit/Popup'
export default {
   name: 'RegistrationPopup',
   components: {
     Popup
   },
   data () {
     return {
       isOpened: true,
       email: null,
       pass: null,
       passRepeat: null,
     }
   },
   methods: {
     close () {
       this.isOpened = false
     }
   }
 }
</script>
