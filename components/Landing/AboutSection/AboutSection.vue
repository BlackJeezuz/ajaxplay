<template>
  <section class="about-section section--lined" id="about-section">
    <div class="wrapper">
      <h3 class="about-section__title main-title main-caption">
        <nuxt-link :to="localePath('about')">Any.<span>cash это:</span></nuxt-link>
      </h3>
      <AboutAnimation class="about-animation--secondary" :activeIndex="activeIndex" />
      <div class="about-section__content text--sm">
        <p class="about-section__text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах.</p>
        <p class="about-section__text">Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографи-чный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографи-чный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики.  Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографи-чный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами.</p>
      </div>
    </div>
  </section>
</template>

<script>
import AboutAnimation from '~/components/About/AboutAnimation'

export default {
  name: 'AboutSection',
  components: {
    AboutAnimation
  },
  data () {
    return {
      activeIndex: 1
    }
  },
  created () {
    setInterval(() => {
      if (this.activeIndex === 3) {
        this.activeIndex = 1
      } else {
        this.activeIndex++
      }
    }, 2000)
  }
}
</script>

<style lang="scss">
@import "about-section";
</style>