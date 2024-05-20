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
            ><h1 class="logo text-primary fw-bolder me-3"><i class="bi bi-house-heart pe-2"></i>Fun<span class="text-secondary">nie</span></h1></RouterLink>
        <div class="d-flex d-lg-none d-md-block">
          <RouterLink to="/cart"  class="nav-link text-primary hover-nav position-relative">
            <i class="bi bi-cart-fill fs-3"></i>
            <span class="badge text-white bg-danger position-absolute" style="top:-11px; right:-8px;" v-if="cart.final_total > 0">$ {{ $filters.currency(cart.final_total) }}</span>
          </RouterLink>
        </div>
        <div class="d-flex d-none d-lg-block">
          <RouterLink to="/cart"  class="nav-link text-primary hover-nav position-relative fs-5"
          >購物車<i class="bi bi-cart-fill fs-3 ps-1"></i>
          <span class="badge text-white bg-danger position-absolute" style="top:-11px; right:-15px;" v-if="cart.final_total > 0">$ {{ $filters.currency(cart.final_total) }}</span>
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore.js';

export default { 
  methods: {
    ...mapActions(cartStore, ['getCart']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted () {
    this.getCart();
  },
}
</script>
