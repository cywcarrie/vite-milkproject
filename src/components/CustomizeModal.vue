<template>
  <div
    class="modal fade"
    id="customizeModalRef"
    tabindex="-1"
    aria-labelledby="customizeDrinkModalLabel"
    aria-hidden="true"
    ref="modalElement"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content shadow-lg border-0 rounded-4">
        <div class="modal-header bg-light rounded-top-4 px-4 py-3">
          <h5 class="modal-title fw-bold text-primary-emphasis" id="customizeDrinkModalLabel">
            客製化飲品：<span class="text-primary">{{ product.title }}</span>
          </h5>
          <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
        </div>
        <div class="modal-body px-4 pt-4 pb-0">
          <div class="mb-4">
            <label class="form-label fw-bold fs-6 d-block text-secondary">
              <i class="bi bi-thermometer-snow me-1 text-primary"></i>冰塊*</label
            >
            <div class="d-flex flex-wrap gap-2">
              <div
                class="form-check form-check-inline"
                v-for="(ice, key) in iceType"
                :key="'ice' + key"
              >
                <input
                  class="btn-check"
                  name="iceType"
                  type="radio"
                  :id="'ice' + key"
                  :value="ice"
                  v-model="customizeData.ice"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" :for="'ice' + key">{{ ice }}</label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label fw-bold fs-6 d-block text-secondary">
              <i class="bi bi-droplet me-1 text-danger"></i>甜度*</label
            >
            <div class="d-flex flex-wrap gap-2">
              <div
                class="form-check form-check-inline"
                v-for="(sugar, key) in sugarType"
                :key="'sugar' + key"
              >
                <input
                  class="btn-check"
                  name="sugarType"
                  type="radio"
                  :id="'sugar' + key"
                  :value="sugar"
                  v-model="customizeData.sugar"
                  autocomplete="off"
                />
                <label class="btn btn-outline-warning" :for="'sugar' + key">{{ sugar }}</label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label fw-bold fs-6 d-block text-secondary"
              ><i class="bi bi-plus-square me-1"></i>加料</label
            >
            <div class="d-flex flex-wrap gap-2">
              <div
                class="form-check form-check-inline"
                v-for="(topping, key) in toppingsType"
                :key="'topping' + key"
              >
                <input
                  class="btn-check"
                  type="checkbox"
                  :id="'topping' + key"
                  :value="topping"
                  v-model="customizeData.toppings"
                  autocomplete="off"
                />
                <label class="btn btn-outline-success" :for="'topping' + key">{{ topping }}</label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label fw-bold text-secondary"
              ><i class="bi bi-pencil-square me-1"></i>備註</label
            >
            <textarea
              class="form-control border rounded-3"
              rows="2"
              placeholder="例如：需製作熱飲或杯口封膜..."
              v-model="customizeData.notice"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer bg-light rounded-bottom-4 px-4 py-3">
          <button class="btn btn-outline-secondary px-4" @click="hideModal()">取消</button>
          <button
            class="btn btn-primary px-4"
            :disabled="!customizeData.ice || !customizeData.sugar"
            @click="submitForm()"
          >
            <i class="bi bi-cart-plus me-2"></i>加入訂單
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import useModal from '@/shared/modal'

export default {
  props: {
    product: Object
  },
  emits: ['add-to-order'],
  setup(props, { emit }) {
    const { modalElement, showModal, hideModal } = useModal()

    const iceType = ['正常冰', '少冰', '微冰', '去冰', '常溫']
    const sugarType = ['正常糖', '少糖', '半糖', '微糖', '無糖']
    const toppingsType = ['仙草凍', '珍珠', '椰果', '布丁', '粉角']

    const customizeData = reactive({
      name: props.product.title,
      ice: '',
      sugar: '',
      toppings: [],
      notice: ''
    })

    function resetCustomizeData() {
      customizeData.ice = ''
      customizeData.sugar = ''
      customizeData.toppings = []
      customizeData.notice = ''
    }

    function submitForm() {
      emit('add-to-order', { ...customizeData })
      hideModal()
      resetCustomizeData()
    }

    return {
      modalElement,
      showModal,
      hideModal,
      iceType,
      sugarType,
      toppingsType,
      customizeData,
      submitForm,
      resetCustomizeData
    }
  }
}
</script>
