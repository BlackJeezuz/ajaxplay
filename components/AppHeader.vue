<template>
  <header class="header" id="header">
    <div class="container container--flex">
      <button :class="['btn-clean', 'btn-menu', 'mob-disp', {'is-active': isMenuActive}]" @click="isMenuActive = !isMenuActive">
        <span class="btn-menu__item btn-menu__item--top" />
        <span class="btn-menu__item btn-menu__item--mid" />
        <span class="btn-menu__item btn-menu__item--bot" />
      </button>
      <span class="logo"><nuxt-link :to="localePath('index')" class="logo__link">any.<span>cash</span></nuxt-link></span>
      <nav class="header-nav">
        <nuxt-link :to="localePath('rate')" class="link header-nav__link">{{ $t('header_item__rate') }}</nuxt-link>
        <nuxt-link :to="localePath('partnership')" class="link header-nav__link">{{ $t('header_item__partnership') }}</nuxt-link>
        <nuxt-link :to="localePath('bonus')" class="link header-nav__link">{{ $t('header_item__bonus') }}</nuxt-link>
        <nuxt-link :to="localePath('placeholder-page')" class="link header-nav__link">
          {{$t('header_item__support')}}
        </nuxt-link>
      </nav>
      <div class="btn-wrap">
        <button class="btn-login" @click="isPopupOpened = true"><span class="mob-hidden">Вход</span></button>
      </div>
      <Placeholder :isOpened="isPopupOpened" @close="isPopupOpened = false"></Placeholder>
    </div>
  </header>
</template>

<script>
import Placeholder from '~/components/Placeholder'
export default {
  name: 'AppHeader',
  components: {
    Placeholder
  },
  data () {
    return {
      isMenuActive: false,
      isPopupOpened: false
    }
  }
}
</script>
