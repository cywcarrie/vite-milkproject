<template>
  <NavBar />
  <RouterView />
  <button
    type="button"
    class="btn btn-secondary top rounded-circle"
    v-show="scY > 500"
    @click="goTop"
  >
    <i class="bi bi-caret-up-fill"></i>
  </button>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from '@/components/UserNavbar.vue'

export default {
  components: {
    NavBar,
    RouterView
  },
  setup() {
    const scTimer = ref(0)
    const scY = ref(0)

    function handleScroll() {
      if (scTimer.value) return
      scTimer.value = setTimeout(() => {
        scY.value = window.scrollY
        clearTimeout(scTimer.value)
        scTimer.value = 0
      }, 100)
    }
    function goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      scY,
      goTop
    }
  }
}
</script>

<style lang="scss">
.top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  opacity: 0.9;
  i {
    font-size: 24px;
    color: #14213d;
  }
  @media screen and (max-width: 767.98px) {
    bottom: 15px;
    right: 15px;
    i {
      font-size: 20px;
    }
  }
}
</style>
