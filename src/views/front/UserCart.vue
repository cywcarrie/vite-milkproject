<template>
  <LoadingVue :active="isLoading" :loader="'spinner'" :color="'#fca311'" :width="70" :height="70"/>
  <section class="mb-5">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
        <h2 class="position-absolute text-center text-white fw-bolder">我的購物車</h2>
      </div>
      <a href="#" title="回上一頁" class="text-black-50 hover-nav fw-bold mt-3" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <div class="d-flex justify-content-start mt-3 mb-4">
        <RouterLink class="btn btn-primary fw-bold" to="/products"><i class="bi bi-house-heart me-2 pe-1 fs-5"></i>回到商品列表</RouterLink>
      </div>
      <template v-if="cart.total !== 0">
        <div class="d-flex justify-content-center mt-5">
          <h1 class="fs-2 fw-bold text-primary">我的購物車</h1>
        </div>
        <div class="row mt-4 mb-5 bg-light rounded-2 py-3">
          <div class="col table-responsive mt-4 mb-4">
            <table class="table align-middle text-center table-light table-borderless">
              <thead class="table-secondary">
                <tr class="table-nowrap">
                  <th class="text-nowrap">商品名稱</th>
                  <th class="text-nowrap">數量</th>
                  <th class="text-end">單價</th>
                  <th class="text-end">小計</th>
                  <th class="text-end"></th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                  <td class="text-nowrap fw-bold text-primary cursor-pointer hover-nav" @click="getProduct(item.product_id)">
                    {{ item.product.category }} | {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td class="text-nowrap">
                    <div class="d-flex justify-content-center">
                      <div class="input-group input-group-sm" style="width:120px">
                        <input type="number" class="form-control"
                        min="1"
                        @change="updateCart(item)"
                        v-model.number="item.qty">
                        <div class="input-group-text">/ {{ item.product.unit }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="text-end text-nowrap">{{ $filters.currency(item.product.price) }}</td>
                  <td class="text-end text-nowrap">
                    <small v-if="cart.final_total !== cart.total" class="text-success">優惠價：</small>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                  <td>
                    <button type="button" class="btn btn-outline-primary btn-sm"
                    @click="removeCartItem(item.id)">
                    <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="3" class="text-end fs-4">總計</td>
                <td class="text-end fs-4 text-primary fw-bold">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success fs-4">優惠價：</td>
                <td class="text-end text-success fs-4 fw-bold">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
              </tfoot>
            </table>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <div class="input-group mb-3" style="max-width:400px" v-if="cart.total !== 0">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
              <button class="btn btn-primary" type="button" @click="addCouponCode(coupon_code)">
                套用優惠碼
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-center mb-2">
            <div class="fs-6 fw-bold text-primary"><i class="bi bi-bag-check-fill pe-2"></i>輸入優惠碼 <span class="fw-bold text-secondary">funniemilk</span> 即享 <span class="fw-bold text-secondary">9 </span>折優惠</div>
          </div>
          <div class="d-flex justify-content-end align-items-center mb-4">
            <button @click="copyCouponCode" class="btn btn-outline-primary" type="button">
              <span><i class="bi bi-clipboard-fill pe-2"></i><span>複製優惠碼</span></span>
            </button>

          </div>
          <div class="d-flex justify-content-between mt-4 mb-4" v-if="cart.total !== 0">
            <RouterLink class="btn btn-outline-primary" to="/products">繼續選購</RouterLink>
            <RouterLink class="btn btn-secondary ms-auto check-btn" to="/checkout">前往結帳</RouterLink>
          </div>
        </div>
      </template>
      <template v-if="cart.total === 0">
        <div class="py-5 mb-5">
          <div class="text-center pt-4">
            <h2 class="fw-bolder mb-5">您尚未有商品加入購物車</h2>
            <RouterLink class="btn btn-primary btn-lg fw-bold" to="/products">來去逛逛吧 !</RouterLink>
          </div>
        </div>
      </template>
    </div>
  </section>
  <FooterComponent />
</template>


<script>
import { RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    RouterLink,
    FooterComponent
  },
  data () {
    return {
      coupon_code: '',
    }
  },
  methods: {
    ...mapActions(cartStore, [
      'getCart',
      'updateCart',
      'removeCartItem',
      'getProduct',
      'addCouponCode',
      'copyCouponCode'
    ]),
  },
  computed: {
    ...mapState(cartStore, [
      'carts',
      'total',
      'final_total',
      'cart',
      'isLoading'
    ]),
  },
  mounted () {
    this.getCart()
  } 
}
</script>
