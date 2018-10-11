import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueCarousel)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
