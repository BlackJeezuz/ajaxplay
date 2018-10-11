<template>
  <div class="kit">
    <div class="kit-row">
      <div class="kit-column">
        <h2 class="main-title">.main-title</h2>
        <h3 class="secondary-title">.secondary-title</h3>
      </div>
      <div class="kit-column">
        <p class="text text--bolder">.text.text--bolder</p>
        <p class="text--bolder">text--bolder</p>
        <p class="text--bolder text--sm">text--sm <span class="text--colored">.text--colored</span></p>
        <p class="text--bolder text--xs">text--xs <span class="text--colored">.text--colored</span></p>
      </div>
      <div class="kit-column">
        <a href="#" class="main-link">.main-link</a>
        <a href="#" class="main-link main-link--sm">.main-link.main-link--sm</a>
      </div>
    </div>
    <div class="kit-row">
      <div class="kit-column">
        <button @click="isPopupOpened = true" class="btn btn-main">.btn.btn-main</button>
        <button @click="isPopupOpened = true" class="btn btn-main btn-main--hovered">.btn.btn-main--hovered</button>
        <div class="btn-group">
          <button :class="['btn', 'btn-tab', {'is-active': activeTab==='first'}]" @click="activeTab='first'">.btn-tab</button>
          <button :class="['btn', 'btn-tab', {'is-active': activeTab==='second'}]" @click="activeTab='second'">.btn-tab</button>
        </div>
      </div>
      <div class="kit-column">
        <div class="input-wrap">
          <label class="label" for="inp">.label:</label>
          <input class="input" type="text" id="inp" placeholder=".input">
        </div>
        <div class="main-input">
          <input type="text" class="input input--wide" placeholder=".input.input--wide">
        </div>
        <div class="main-input">
          <input type="text" class="input input--wide invalid" placeholder=".input.input--wide.invalid">
        </div>
        <Dropdown v-model="dropValue" :options="['opt-1', 'opt-2']" />
      </div>
    </div>
    <div class="kit-row">
      <div class="kit-column"><CurrencySelect v-model="currentCurrency" :currencyList="currency" :label="'.currency-select:'" /></div>
      <div class="kit-column">
        <Checkbox v-model="isChecked">Checkbox</Checkbox>
        <Radio v-model="picked" :options="radioList" />
      </div>
    </div>
    <div class="kit-row">
      <ul class="data-list">
        <li class="data-list__item">
          <div class="data-list__info">Плашки выглядят так</div>
          <div class="data-list__data">Еще какие-то данные</div>
        </li>
        <li class="data-list__item">
          <div class="data-list__info">Плашки выглядят так</div>
          <div class="data-list__data">Еще какие-то данные</div>
        </li>
      </ul>
    </div>
    <h4 class="kit-title">Icon Font:</h4>
    <div class="kit-field"><span v-for="icon in iconsList" :key="icon" :class="`kit-icon icon icon--${icon}`" /></div>
    <Popup v-model="isPopupOpened">
      <template slot="header">Пример попапа</template>
      <template slot="body">Текст для попапа, может быть что угодно. Текст для попапа, может быть что угодно.</template>
    </Popup>
  </div>
</template>

<script>
import Popup from './Popup'
import Dropdown from './Dropdown'
import CurrencySelect from './CurrencySelect'
import Checkbox from './Checkbox'
import Radio from './Radio'

export default {
  name: 'UiKit',
  components: {
    Popup,
    Dropdown,
    CurrencySelect,
    Checkbox,
    Radio
  },
  data () {
    return {
      isPopupOpened: false,
      dropValue: 'opt-1',
      currentCurrency: '',
      isChecked: true,
      picked: 'second',
      activeTab: 'first'
    }
  },
  computed: {
    currency () {
      return ['uah', 'rur', 'btc', 'ltc']
    },
    radioList () {
      return [{ value: 'first', label: 'first' }, { value: 'second', label: 'second' }]
    },
    iconsList () {
      return ['anycash-logo', 'arrow-large', 'arrow', 'back', 'balance-in', 'camera', 'checkbox-checked', 'diagram', 'drop-in', 'dropdown-icon', 'faq', 'list', 'logo-white', 'mail', 'next', 'operator', 'plus', 'portmone', 'prev', 'telegram', 'wallet-alt', 'wallet', 'img-holder', 'telegrams', 'video-holder']
    }
  }
}
</script>

<style lang="scss">
.kit {
  text-align: center;

  &-row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px 0;
  }

  &-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    & > div,
    & > input,
    & > button {
      margin-bottom: 10px;
    }
  }

  &-title {
    font-size: 30px;
    padding: 40px 0 0 0;
  }

  &-field {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
  &-icon {
    display: block;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      color: $blue;
      transform: scale(1.5);
    }
  }
}
</style>
