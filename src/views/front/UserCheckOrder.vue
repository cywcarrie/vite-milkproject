<template>
  <VueLoading :active="isLoading" />
  <section class="mb-5">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"
      >
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">結帳流程</h2>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-5 mt-3">
        <h5 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header">
          <i class="bi bi-1-circle mb-1"></i>
          <span>填寫資料</span>
        </h5>
        <i class="bi bi-caret-right-fill fs-5 mx-1 mx-md-2 text-secondary"></i>
        <h5
          class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"
          :class="{ active: order.is_paid === false }"
        >
          <i class="bi bi-2-circle mb-1"></i>
          <span>確認訂單</span>
        </h5>
        <i class="bi bi-caret-right-fill fs-5 mx-1 mx-md-2 text-secondary"></i>
        <h5
          class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"
          :class="{ active: order.is_paid === true }"
        >
          <i class="bi bi-3-circle mb-1"></i>
          <span>訂單完成</span>
        </h5>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-10">
          <div
            class="d-flex justify-content-center align-items-center mt-5"
            v-if="order.is_paid === true"
          >
            <i class="bi bi-bag-check-fill fs-2 pe-2 text-success"></i>
            <h2 class="fw-bold mb-0 text-success">訂購成功 !</h2>
          </div>
          <h6 class="fw-bold mt-4 mb-5 text-center" v-if="order.is_paid === true">
            感謝您的訂購，訂單明細將會寄送至您的電子信箱 !
          </h6>
          <div class="my-5 row justify-content-center">
            <h3 class="text-center fw-bold mb-4">訂單明細</h3>
            <form class="col-lg-6" @submit.prevent="payOrder">
              <table class="table align-middle table-light table-borderless mb-4">
                <thead class="text-center">
                  <tr>
                    <th class="text-nowrap">商品名稱</th>
                    <th class="text-center text-nowrap">數量</th>
                    <th class="text-nowrap">價格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td class="text-center">{{ item.product.title }}</td>
                    <td class="text-center text-nowrap">{{ item.qty }}</td>
                    <td class="text-center text-nowrap">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-end text-nowrap">總計</td>
                    <td class="fs-5 text-primary fw-bold text-nowrap">
                      {{ $filters.currency(order.total) }}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <h3 class="text-center fw-bold mb-4">訂購人資訊</h3>
              <table class="table table-light table-borderless mb-4">
                <tbody>
                  <tr class="table-nowrap">
                    <th class="text-nowrap">姓名</th>
                    <td class="text-nowrap">{{ order.user.name }}</td>
                  </tr>
                  <tr class="table-nowrap">
                    <th width="100" class="text-nowrap">Email</th>
                    <td class="text-nowrap">{{ order.user.email }}</td>
                  </tr>
                  <tr class="table-nowrap">
                    <th class="text-nowrap">電話</th>
                    <td class="text-nowrap">{{ order.user.tel }}</td>
                  </tr>
                  <tr class="table-nowrap">
                    <th class="text-nowrap">付款方式</th>
                    <td class="text-nowrap">{{ order.user.pay }}</td>
                  </tr>
                  <tr class="table-nowrap">
                    <th>訂購狀態</th>
                    <td>
                      <span v-if="!order.is_paid" class="text-nowrap text-danger fw-bold"
                        >尚未訂購</span
                      >
                      <span v-else class="text-success fw-bold text-nowrap">訂購完成</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-end" v-if="order.is_paid === false">
                <button class="btn btn-primary ms-auto" type="submit">
                  確認訂購<i class="bi bi-caret-right-fill"></i>
                </button>
              </div>
              <div class="text-end" v-if="order.is_paid === true">
                <RouterLink to="/products" class="btn btn-primary ms-auto"
                  ><i class="bi bi-cart4 pe-1 fs-5"></i>繼續選購</RouterLink
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import VueLoading from '@/components/VueLoading.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ShowNotification from '@/mixins/swal'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    VueLoading,
    FooterComponent
  },
  data() {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.order = response.data.order
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    },
    payOrder() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http
        .post(url)
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.getOrder()
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    }
  },
  created() {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
