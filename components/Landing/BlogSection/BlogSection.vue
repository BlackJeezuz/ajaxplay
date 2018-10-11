<template>
  <section class="blog" id="blog-section">
    <h2 class="main-title blog__main-title">Новостной блог</h2>
    <div class="blog__item" v-for="blog in blogs" :key="blog.id">
      <div class="wrapper">
        <div class="blog__avatar holder holder--camera" />
        <div class="blog__content">
          <h3 class="blog__title">{{ blog.title|local }}</h3>
          <time class="blog__date">{{ blog.date }}</time>
          <p class="blog__text">{{ blog.text }}</p>
          <div class="blog__footer">
            <button class="blog__btn icon icon--back" @click="isSharePopupOpened = true" />
          </div>
        </div>
      </div>
    </div>
    <SharePopup :isOpened="isSharePopupOpened" @close="isSharePopupOpened = false"/>
  </section>
</template>

<script>
import SharePopup from '~/components/Popups/SharePopup'

export default {
  name: 'BlogSection',
  components: {
    SharePopup
  },
  data () {
    return {
      isSharePopupOpened: false
    }
  },
  computed: {
    blogs () {
      return [
        {
          id: 0,
          avatar: 'camera',
          title: 'Название записи блога',
          date: '01/09/2018',
          text:
            'Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики.',
          commentsLength: 198
        },
        {
          id: 1,
          avatar: 'camera',
          title: 'Название записи блога',
          date: '01/09/2018',
          text:
            'Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики.',
          commentsLength: 198
        },
        {
          id: 2,
          avatar: 'camera',
          title: 'Название записи блога',
          date: '01/09/2018',
          text:
            'Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики.',
          commentsLength: 198
        },
        {
          id: 3,
          avatar: 'camera',
          title: 'Название записи блога',
          date: '01/09/2018',
          text:
            'Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Эта парадигматическая страна, в которой жаренные предложе-ния залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики.',
          commentsLength: 198
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "blog";
</style>
