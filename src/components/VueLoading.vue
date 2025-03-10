<template>
  <LoadingVue
    :active="isLoading"
    :loader="'spinner'"
    :color="'#fca311'"
    :width="70"
    :height="70"
    :opacity="0.7"
  ></LoadingVue>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const isLoading = ref(false)

    return {
      isLoading
    }
  }
}
</script>
