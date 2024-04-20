<template>
  <LoadingVue :active="isLoading" :loader="'spinner'" :color="'#fca311'" :width="70" :height="70"/>
   <swiper
    class="pb-5"
    :modules="modules"
    :slides-per-view="1"
    :space-between="20"
    :pagination="{ clickable: true }"
    :breakpoints="{
      '480': {
        slidesPerView: 1.5,
      },
      '576': {
        slidesPerView: 1.5,
      },
      '768': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <RouterLink :to="`/product/${item.id}`">
        <div class=" card product-card box-shadow w-100 h-100" style="width: 18rem">
          <img
          style=" height: 180px; background-position: center"
            :src="item.imageUrl"
            class="card-img-top object-fit-cover"
            alt="swiperImage"
          />
          <div class="card-body p-3">
            <div class="d-flex justify-content-start text-primary fw-bold">
              <p><i class="bi bi-house-heart me-2 fs-5"></i>只想喝{{ item.category }}</p>
            </div>
            <h4 class="card-title fw-bolder mb-4">{{ item.title }}</h4>
            <div class="d-flex justify-content-end align-items-center mb-3">
              <div class="fs-4 text-black-50" v-if="!item.price">NTD {{ $filters.currency(item.origin_price) }}</div>
              <del class="fs-5 text-black-50" v-if="item.price"> NTD {{ $filters.currency(item.origin_price) }}</del>
              <div class="fs-4 text-danger fw-bold ps-2" v-if="item.price"> NTD {{ $filters.currency(item.price) }}</div>
            </div>
          </div>
        </div>
      </RouterLink>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      isLoading: false,
      products: [],
      modules: [Pagination, A11y, Autoplay]
    }
  },
  methods: {
    getProducts () {
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.isLoading = false
        this.products = response.data.products
        this.getSwiper()
      })
    },
    getSwiper () {
      const randomSwiper = []
      for (let i = 0; i < 6; i += 1) {
        const num = Math.floor(Math.random() * this.products.length)
        randomSwiper.push(this.products[num])
        this.products.splice(num, 1)
      }
      this.products = randomSwiper
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
