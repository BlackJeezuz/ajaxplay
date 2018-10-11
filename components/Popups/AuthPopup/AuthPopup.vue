<template>
  <Popup
    :isOpened="isOpened"
    @close="close"
		class="popup-prime"
  >
    <h3 class="popup-title" slot="header">Авторизация</h3>
    <form class="popup-form" slot="body">
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
      <div class="popup-form__item popup-form__item--flex">
        <Checkbox class="popup-form__checkbox">при авторизации</Checkbox>
        <a class="main-link popup-form__link" href="#">Забыли пароль?</a>
      </div>
    </form>
    <template slot="footer">
      <button  class="btn btn-main btn-main--hovered popup-prime__btn" type="submit">Вход</button>
      <a href="#" class="link">Зарегистрировать аккаунт</a>
    </template>
  </Popup>
</template>

<script>
import Checkbox from '~/components/UiKit/Checkbox';
import Popup from '~/components/UiKit/Popup';
export default {
  name: 'AuthPopup',
  components: {
    Popup,
    Checkbox
  },
  data () {
    return {
      isOpened: true,
      email: null,
      pass: null
    };
  },
  methods: {
    close () {
      this.isOpened = false
    }
  }
}
</script>
