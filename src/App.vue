<script>
import { RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  components: {
      RouterView,
    },
  // AOS
  mounted () {
    AOS.init()
  }
}
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "./assets/scss/all.scss"
</style>
