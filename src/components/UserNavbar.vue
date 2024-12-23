<template>
  <div class="fixed-top">
    <div class="bg-secondary py-1">
      <div class="container text-dark text-center">
        結帳時輸入 <span class="fw-bold">funniemilk</span>，享有九折優惠
      </div>
    </div>
    <nav class="navbar navbar-light bg-light shadow-sm">
      <div class="container">
        <RouterLink to="/" class="navbar-brand"
          ><h1 class="logo text-primary fw-bolder me-3">
            <i class="bi bi-house-heart pe-2"></i>Fun<span class="text-secondary">nie</span>
          </h1></RouterLink
        >
        <div class="d-flex d-lg-none d-block">
          <RouterLink to="/cart" class="nav-link text-primary hover-nav position-relative">
            <i class="bi bi-cart-fill fs-3"></i>
            <span
              class="badge text-white bg-danger position-absolute navbar-badge-position"
              v-if="cart.final_total > 0"
              >${{ $filters.currency(cart.final_total) }}</span
            >
          </RouterLink>
        </div>
        <div class="d-flex d-none d-lg-block">
          <div class="cart-list">
            <RouterLink to="/cart" class="nav-link text-primary hover-nav fs-5 position-relative"
              >購物車<i class="bi bi-cart-fill fs-3 ps-1"></i>
              <span
                class="badge text-white bg-danger position-absolute navbar-badge-position"
                v-if="cart.final_total > 0"
                >${{ $filters.currency(cart.final_total) }}</span
              >
            </RouterLink>
            <ul class="cart-list-content list-unstyled m-0 p-0 shadow">
              <div class="p-3 bg-white">
                <div v-if="cart.final_total > 0">
                  <p class="py-3 text-center border-bottom border-primary">
                    <span class="fw-bold">{{ cart.carts.length }}</span> 項商品
                  </p>
                  <ul class="list-unstyled">
                    <li
                      v-for="item in cart.carts"
                      :key="item.product_id"
                      class="py-3 border-bottom border-default"
                    >
                      <div class="row">
                        <div class="col-4">
                          <img
                            :src="item.product.imageUrl"
                            :alt="item.product.title"
                            class="w-100 h-100 object-fit-contain"
                          />
                        </div>
                        <div class="col-8 d-flex flex-column">
                          <div>
                            <p class="fw-bold single-ellipsis">{{ item.product.title }}</p>
                          </div>
                          <div class="col-8 d-flex justify-content-between">
                            <p>NT${{ item.product.price }}</p>
                            <p>數量：{{ item.qty }}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="d-flex py-3 justify-content-between mb-6 fw-bold">
                    <p>總計</p>
                    <p>NT${{ $filters.currency(cart.final_total) }}</p>
                  </div>
                  <RouterLink
                    to="/cart"
                    class="py-2 btn btn-primary text-center rounded-0 w-100 fw-bold"
                    >前往購物車</RouterLink
                  >
                </div>
                <div v-else>
                  <p class="py-3 text-center">目前購物車內沒有內容</p>
                  <RouterLink
                    to="/products"
                    class="py-2 btn btn-primary text-center rounded-0 w-100 fw-bold"
                    >瀏覽商品</RouterLink
                  >
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore.js'

export default {
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted() {
    this.getCart()
  }
}
</script>
