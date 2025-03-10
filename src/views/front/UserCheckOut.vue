<template>
  <VueLoading :active="isLoading" />
  <section class="mb-5">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"
      >
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">結帳流程</h2>
      </div>
      <div class="d-flex justify-content-center align-items-center my-5 mt-3">
        <h5 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header active">
          <i class="bi bi-1-circle mb-1"></i>
          <span>填寫資料</span>
        </h5>
        <i class="bi bi-caret-right-fill fs-5 mx-1 mx-md-2 text-secondary"></i>
        <h5 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header">
          <i class="bi bi-2-circle mb-1"></i>
          <span>確認訂單</span>
        </h5>
        <i class="bi bi-caret-right-fill fs-5 mx-1 mx-md-2 text-secondary"></i>
        <h5 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header">
          <i class="bi bi-3-circle mb-1"></i>
          <span>訂單完成</span>
        </h5>
      </div>
      <div class="row my-5 py-5 rounded-2">
        <div class="col-lg-6">
          <h3 class="text-center fw-bold mb-4">商品明細</h3>
          <div class="table-responsive-md mb-5 mb-lg-0">
            <table class="table align-middle table-borderless">
              <thead class="text-center table-secondary">
                <tr class="table-nowrap">
                  <th>商品名稱</th>
                  <th class="text-nowrap">數量</th>
                  <th class="text-end">價格</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                  <td class="table-nowrap fw-bold text-primary">{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-end text-nowrap">
                    <small v-if="cart.final_total !== cart.total" class="text-danger text-end"
                      >優惠價：</small
                    >
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-end fs-5">總計</td>
                  <td class="text-end fs-5 text-primary fw-bold">
                    {{ $filters.currency(cart.total) }}
                  </td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td colspan="2" class="text-end text-danger fs-5">優惠價</td>
                  <td class="text-end text-danger fs-5 fw-bold">
                    {{ $filters.currency(cart.final_total) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="row col-lg-6">
          <h3 class="text-center fw-bold mb-4">訂購人資訊</h3>
          <FormVue v-slot="{ errors }" @submit="createOrderData">
            <div class="mb-3">
              <label for="name" class="form-label"
                >姓名<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <FieldVue
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              />
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label"
                >Email<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <FieldVue
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              />
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label"
                >電話<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <FieldVue
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="不含 - 符號的手機或室話"
                rules="required|numeric|min:8|max:10"
                v-model="form.user.tel"
              />
              <ErrorMessage name="電話" class="invalid-feedback" />
            </div>
            <fieldset class="col-12 d-flex align-items-center mb-3">
              <legend class="form-label me-3 me-md-4 mb-0 fs-6 fs-md-5 w-auto">
                取貨方式<small class="ps-1 text-danger fw-bold">*</small>
              </legend>
              <div class="normal-input" :class="{ error: errors['取貨方式'] }">
                <div class="d-flex">
                  <div class="form-check form-radio me-3">
                    <FieldVue
                      class="form-check-input"
                      type="radio"
                      name="取貨方式"
                      rules="required"
                      id="本店自取"
                      value="本店自取"
                      v-model="form.user.delivery"
                    >
                    </FieldVue>
                    <label class="form-check-label" for="本店自取">本店自取</label>
                  </div>
                  <div class="form-check form-radio">
                    <FieldVue
                      class="form-check-input"
                      type="radio"
                      name="取貨方式"
                      rules="required"
                      id="外送"
                      value="外送"
                      v-model="form.user.delivery"
                    >
                    </FieldVue>
                    <label class="form-check-label" for="外送">外送</label>
                  </div>
                </div>
                <ErrorMessage name="取貨方式" class="error-text position-absolute text-danger" />
              </div>
            </fieldset>
            <div class="mb-3" v-if="form.user.delivery === '本店自取'">
              <p class="fw-bold mb-1 mb-md-2">本店位址: 台南市東東區中中路000號</p>
              <p class="fw-bold">聯絡電話: 06-12345678</p>
            </div>
            <div class="mb-3" v-if="form.user.delivery === '外送'">
              <label for="address" class="form-label"
                >地址<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <FieldVue
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              />
              <ErrorMessage name="地址" class="invalid-feedback" />
            </div>
            <fieldset class="col-12 d-flex flex-md-row flex-column align-md-items-center mb-3">
              <legend class="form-label me-3 me-md-4 fs-6 fs-md-5 w-auto mb-md-0 mb-2">
                付款方式<small class="ps-1 text-danger fw-bold">*</small>
              </legend>
              <div class="normal-input" :class="{ error: errors['付款方式'] }">
                <div class="d-flex">
                  <div class="form-check form-radio me-3">
                    <FieldVue
                      class="form-check-input"
                      type="radio"
                      name="付款方式"
                      rules="required"
                      id="信用卡"
                      value="信用卡"
                      v-model="form.user.pay"
                    />
                    <label class="form-check-label" for="信用卡">信用卡</label>
                  </div>
                  <div class="form-check form-radio me-3">
                    <FieldVue
                      class="form-check-input"
                      type="radio"
                      name="付款方式"
                      rules="required"
                      id="ATM 轉帳"
                      value="ATM 轉帳"
                      v-model="form.user.pay"
                    />
                    <label class="form-check-label" for="ATM 轉帳">ATM 轉帳</label>
                  </div>
                  <div class="form-check form-radio">
                    <FieldVue
                      class="form-check-input"
                      type="radio"
                      name="付款方式"
                      rules="required"
                      id="貨到付款"
                      value="貨到付款"
                      v-model="form.user.pay"
                    />
                    <label class="form-check-label" for="貨到付款">貨到付款</label>
                  </div>
                </div>
                <div class="mb-2 mb-md-0">
                  <ErrorMessage
                    name="付款方式"
                    class="error-text position-absolute text-danger mb-2 mb-md-0"
                  />
                </div>
              </div>
            </fieldset>
            <div class="mb-3" v-if="form.user.pay === '信用卡'">
              <label for="cardNum" class="form-label"
                >信用卡號<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <div class="row">
                <div class="col-12">
                  <FieldVue
                    id="cardNum"
                    name="卡號"
                    type="tel"
                    class="form-control"
                    maxlength="19"
                    :class="{ 'is-invalid': errors['卡號'] }"
                    placeholder="**** **** **** ****"
                    rules="required"
                    v-model="cardNumber"
                  />
                  <ErrorMessage name="卡號" class="invalid-feedback" />
                  <div class="my-3 col-12 col-md-6">
                    <label for="period" class="form-label required"
                      >有效日期<small class="ps-1 text-danger fw-bold">*</small></label
                    >
                    <FieldVue
                      id="period"
                      name="有效日期"
                      type="tel"
                      class="form-control"
                      placeholder="MM/YY"
                      maxlength="5"
                      v-model="expiryDate"
                      :class="{ 'is-invalid': errors['有效日期'] }"
                      rules="required"
                    />
                    <ErrorMessage name="有效日期" class="invalid-feedback" />
                  </div>
                  <div class="mb-3 col-12 col-md-6">
                    <label for="checkCode" class="form-label required"
                      >檢查碼<small class="ps-1 text-danger fw-bold">*</small></label
                    >
                    <FieldVue
                      id="checkCode"
                      name="檢查碼"
                      type="text"
                      class="form-control"
                      maxlength="3"
                      :class="{ 'is-invalid': errors['檢查碼'] }"
                      placeholder="CVC/CVV"
                      rules="required|length:3|numeric:true"
                    />
                    <ErrorMessage name="檢查碼" class="invalid-feedback" />
                  </div>
                </div>
              </div>
            </div>
            <fieldset class="col-12 d-flex align-items-center mb-3">
              <legend class="form-label me-3 me-md-4 mb-0 fs-6 fs-md-5 w-auto">
                發票類型<small class="ps-1 text-danger fw-bold">*</small>
              </legend>
              <div class="normal-input" :class="{ error: errors['發票類型'] }">
                <div class="d-flex">
                  <div class="form-check form-radio me-3">
                    <FieldVue
                      class="form-check-input"
                      type="radio"
                      name="發票類型"
                      rules="required"
                      id="紙本發票"
                      value="紙本發票"
                      v-model="form.user.bill"
                    >
                    </FieldVue>
                    <label class="form-check-label" for="紙本發票">紙本發票</label>
                  </div>
                  <div class="form-check form-radio">
                    <FieldVue
                      class="form-check-input"
                      type="radio"
                      name="發票類型"
                      rules="required"
                      id="電子載具"
                      value="電子載具"
                      v-model="form.user.bill"
                    >
                    </FieldVue>
                    <label class="form-check-label" for="電子載具">電子載具</label>
                  </div>
                </div>
                <ErrorMessage name="發票類型" class="error-text position-absolute text-danger" />
              </div>
            </fieldset>
            <div class="mb-3" v-if="form.user.bill === '電子載具'">
              <FieldVue
                name="電子載具"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電子載具'] }"
                placeholder="請輸入  '/'  開頭的載具號碼"
                rules="required"
                v-model="form.user.billNum"
              />
              <ErrorMessage name="電子載具" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">備註</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-between">
              <RouterLink class="btn btn-outline-primary" to="/cart"
                ><i class="bi bi-caret-left-fill"></i>回上一頁</RouterLink
              >
              <button type="submit" class="btn btn-secondary check-btn">
                確認訂單<i class="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </FormVue>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import { ref, reactive, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia' // 引入 storeToRefs
import cartStore from '@/stores/cartStore'
import VueLoading from '@/components/VueLoading.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ShowNotification from '@/mixin/swal'
import { useRouter } from 'vue-router'
import axios from 'axios'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    VueLoading,
    FooterComponent
  },
  setup() {
    const router = useRouter()
    const store = cartStore()
    const { cart } = storeToRefs(store)
    const isLoading = ref(false)
    const total = ref(0)
    const final_total = ref(0)
    const coupon_code = ref('')
    const expiryDate = ref('')
    const cardNumber = ref('')
    const tempAddress = ref('')

    const form = reactive({
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
        delivery: '',
        pay: '',
        bill: '',
        billNum: ''
      },
      message: ''
    })

    watch(cardNumber, (newCardNumber, oldCardNumber) => {
      if (
        newCardNumber.length < oldCardNumber.length &&
        newCardNumber.charAt(newCardNumber.length - 1) === ' '
      ) {
        cardNumber.value = oldCardNumber.slice(0, -2)
      }
      if (
        newCardNumber.length > oldCardNumber.length &&
        (newCardNumber.length + 1) % 5 === 0 &&
        cardNumber.value.length !== 0 &&
        cardNumber.value.length < 19
      ) {
        cardNumber.value = newCardNumber + ' '
      }
    })

    watch(() => form.user.delivery, sendDelivery)

    watch(expiryDate, (newExpiryDate, oldExpiryDate) => {
      if (newExpiryDate.length === 2 && newExpiryDate.length > oldExpiryDate.length) {
        expiryDate.value += '/'
      } else if (
        newExpiryDate.length < oldExpiryDate.length &&
        oldExpiryDate.charAt(2) === '/' &&
        oldExpiryDate.length === 3
      ) {
        expiryDate.value = oldExpiryDate.slice(0, 1)
      }
    })

    function createOrder() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/order`
      const order = form
      isLoading.value = true
      axios
        .post(url, { data: order })
        .then((response) => {
          isLoading.value = false
          router.push(`/checkorder/${response.data.orderId}`)
          store.getCart()
        })
        .catch((error) => {
          isLoading.value = false
          ShowNotification('error', `${error.response.data.message}`)
        })
    }
    function sendDelivery() {
      const { delivery } = form.user
      if (delivery !== '外送') {
        tempAddress.value = delivery
      }
    }
    function createOrderData() {
      if (form.user.address === '') {
        form.user.address = tempAddress.value
      }
      createOrder()
    }

    onMounted(() => {
      store.getCart()
    })

    return {
      isLoading,
      total,
      final_total,
      form,
      coupon_code,
      expiryDate,
      cardNumber,
      cart,
      createOrder,
      tempAddress,
      sendDelivery,
      createOrderData
    }
  }
}
</script>
