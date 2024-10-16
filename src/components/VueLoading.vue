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
export default {
  data() {
    return {
      isLoading: false
    }
  }
}
</script>
