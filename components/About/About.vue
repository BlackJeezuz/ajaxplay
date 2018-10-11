<template>
  <section class="about section--bordered">
    <div class="container">
      <h2 class="about__title main-title"><span class="main-caption main-caption--colored">Any.<span>cash</span></span> - это:</h2>
      <div class="about__block">
        <div class="about-stats">
          <span class="about-stats__line" />
          <div class="about-stats__info about__text">
            <p class="about-stats__caption main-caption main-caption--colored">8 888</p>
            <p class="about__text about__text--bolder">довольных пользователей</p>
            <img class="about-stats__img" src="~assets/img/people.png" alt="people">
          </div>
          <p class="about__text about__text--padded"><strong>88 888</strong> переводов между пользователями</p>
          <div class="about-exchanges">
            <h4 class="about-exchanges__title text">
              <span class="main-caption--colored">{{ activeCurrentExchange.count }}</span>
              <span class="about-stats__caption-standart">обменов</span>
              <span class="main-caption--colored">{{ activeCurrentExchange.name }} > {{ activeNextExchange.name }}</span>
            </h4>
            <div class="about-exchanges__slider-wrap">
              <no-ssr>
                <swiper ref="swiper" :options="swiperOption" class="about-exchanges__slider"  @slideChange="handleChange">
                  <swiper-slide
                    v-for="(slide, index) in exchanges"
                    :key="`exchange-${slide.name}-${index}`"
                    class="about-exchanges__slide"
                  >
                    <div class="about-exchanges__item">{{ slide.name }}</div>
                  </swiper-slide>
                </swiper>
              </no-ssr>
            </div>
          </div>
          <span class="about-stats__line" />
        </div>

        <AboutAnimation class="about-animation--main" :activeIndex="activeIndex" />
      </div>
      <h3 class="main-title about__subtitle">Информация о сервисе</h3>
      <main class="about-content">
        <div class="about-content__column">
          <p class="about-content__text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.</p>
          <p class="about-content__text">Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографи-чный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. </p>
        </div>
        <div class="about-content__column">
          <p class="about-content__text">Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный реторический вопрос скатился по его щеке и он продолжил свой путь. По дороге встретил текст рукопись.</p>
          <p class="about-content__text">Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу.</p>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import AboutAnimation from './AboutAnimation'

export default {
  name: 'About',
  layout: 'main',
  components: {
    AboutAnimation
  },
  data () {
    return {
      activeIndex: 1,
      activeCurrentExchange: {
        name: 'USD',
        count: '112 000'
      },
      activeNextExchange: {
        name: 'RUR',
        count: '123 000'
      },
      swiperOption: {
        slidesPerView: 6,
        loop: true,
        spaceBetween: 32,
        autoplay: {
          delay: 2000
        },
        breakpoints: {
          767: {
            slidesPerView: 5,
            spaceBetween: 25
          }
        }
      }
    }
  },
  computed: {
    exchanges () {
      return [{
        name: 'USD',
        count: '112 000'
      }, {
        name: 'RUR',
        count: '123 000'
      }, {
        name: 'UAH',
        count: '20 888'
      }, {
        name: 'BTC',
        count: '11 221'
      }, {
        name: 'LTC',
        count: '12 088'
      }, {
        name: 'ETH',
        count: '33 808'
      }, {
        name: 'ZBC',
        count: '28 120'
      }, {
        name: 'UPC',
        count: '22 118'
      }]
    }
  },
  methods: {
    handleChange () {
      if (this.activeIndex === 3) {
        this.activeIndex = 1
      } else {
        this.activeIndex++
      }

      if (this.exchanges[this.$refs.swiper.swiper.realIndex + 1] === undefined) {
        this.activeCurrentExchange = this.exchanges[this.exchanges.length - 1]
        this.activeNextExchange = this.exchanges[0]

        return
      }

      this.activeCurrentExchange = this.exchanges[this.$refs.swiper.swiper.realIndex]
      this.activeNextExchange = this.exchanges[this.$refs.swiper.swiper.realIndex + 1]
    }
  }
}
</script>
<style lang="scss">
@import "about";
</style>