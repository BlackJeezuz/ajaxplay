<template>
  <div class="main-layout">
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
