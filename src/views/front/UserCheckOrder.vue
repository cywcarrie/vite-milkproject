<template>
  <LoadingVue :active="isLoading" :loader="'spinner'" :color="'#fca311'" :width="70" :height="70" />
  <section class="mb-5">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid">
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">結帳流程</h2>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-5 mt-3">
        <h5 class="fw-bold mb-0 text-secondary pay-header">填寫資料</h5>
        <i class="bi bi-caret-right-fill fs-5 mx-2 text-secondary"></i>
        <h5 class="fw-bold mb-0 text-secondary pay-header" :class="{'active': order.is_paid === false}">確認付款</h5>
        <i class="bi bi-caret-right-fill fs-5 mx-2 text-secondary"></i>
        <h5 class="fw-bold mb-0 text-secondary pay-header"  :class="{'active': order.is_paid === true}">訂單完成</h5>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-10">
          <div class="d-flex justify-content-center align-items-center" v-if="order.is_paid === true">
            <i class="bi bi-check-circle-fill fs-2 pe-2 text-success"></i>
            <h2 class="fw-bold mb-0 text-success">付款成功 !</h2>
          </div>
          <h6 class="fw-bold mt-4 mb-5 text-center" v-if="order.is_paid === true">感謝您的訂購，訂單明細將會寄送至您的電子信箱 !</h6>
          <div class="my-5 row justify-content-center">
            <h3 class="text-center fw-bold mb-4">訂單明細</h3>
            <form class="col-lg-6" @submit.prevent="payOrder">
              <table class="table align-middle table-light table-borderless mb-4">
                <thead class="text-center bg-light">
                  <tr>
                    <th class="text-nowrap">商品名稱</th>
                    <th class="text-center text-nowrap">數量</th>
                    <th class="text-nowrap">價格</th>
                  </tr>
                </thead>
                <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td class="text-center text-primary fw-bold">{{ item.product.title }}</td>
                  <td class="text-center text-nowrap">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="text-center text-nowrap" >{{ $filters.currency(item.final_total) }}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <td colspan="2" class="text-end text-nowrap">總計</td>
                  <td class="fs-5 text-primary fw-bold text-nowrap">{{ $filters.currency(order.total) }}</td>
                </tr>
                </tfoot>
              </table>
              <h3 class="text-center fw-bold mb-4">訂購人資訊</h3>
              <table class="table table-light table-borderless mb-4">
                <tbody>
                <tr class="table-nowrap">
                  <th width="100" class="text-nowrap">Email</th>
                  <td class="text-nowrap">{{ order.user.email }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th class="text-nowrap">姓名</th>
                  <td class="text-nowrap">{{ order.user.name }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th class="text-nowrap">電話</th>
                  <td class="text-nowrap">{{ order.user.tel }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th>地址</th>
                  <td class="text-nowrap">{{ order.user.address }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid" class="text-nowrap text-danger fw-bold">尚未付款</span>
                    <span v-else class="text-success fw-bold text-nowrap">付款完成</span>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="text-end" v-if="order.is_paid === false">
                <button class="btn btn-primary ms-auto" type="submit">確認付款<i class="bi bi-caret-right-fill"></i></button>
              </div>
              <div class="text-end" v-if="order.is_paid === true">
                <RouterLink to="/products" class="btn btn-primary ms-auto"><i class="bi bi-cart4 pe-1 fs-5"></i>繼續選購</RouterLink>
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
import FooterComponent from '@/components/FooterComponent.vue'
import Swal from 'sweetalert2'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    FooterComponent
  },
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url)
        .then((response) => {
          if (response.data.success) {
            this.order = response.data.order
          }
        }).catch(error => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${error.response.data.message}`,
            timer: 1500,
            toast: true,
            color: "#14213d",
            background: "#fef8e2",
            showConfirmButton: false,
            timerProgressBar: true
          })
        })
    },
    payOrder () {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url)
        .then((response) => {
          if (response.data.success) {
            this.getOrder()
          }
        }).catch(error => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${error.response.data.message}`,
            timer: 1500,
            toast: true,
            color: "#14213d",
            background: "#fef8e2",
            showConfirmButton: false,
            timerProgressBar: true
          })
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>