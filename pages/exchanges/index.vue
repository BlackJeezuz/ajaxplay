<template>
  <div class="exchanges">
    <ul>
      <li v-for="page in pages" :key="page.route">
        <nuxt-link :to="{ path: `/exchanges/${page.route}`}">{{ page.route }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ store, route, pages }) {
    return {
      pages
    }
  },
  middleware: ['pageslist']
}
</script>

<style>
</style>
