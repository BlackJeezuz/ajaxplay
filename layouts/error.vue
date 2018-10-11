<template>
  <Error404 />
</template>

<script>
import Error404 from '~/components/Error404'

export default {
  props: ['error'],
  components: {
    Error404
  }
}
</script>