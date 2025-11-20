<template>
  <VueLoading :active="isLoading" />
  <section class="mb-5">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid"
      >
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">我們的商品</h2>
      </div>
      <nav
        aria-label="breadcrumb"
        style="--bs-breadcrumb-divider: '>'"
        class="mt-3 mb-md-4 d-flex justify-content-start"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-dark hover-nav fw-bold">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">商品列表</li>
        </ol>
      </nav>
      <div class="row my-5">
        <div class="col-lg-3 mb-4 mb-lg-0">
          <div class="d-none d-md-block">
            <h3 class="text-start pb-3 fw-bold fs-4 border-bottom border-primary border-2">
              商品系列
            </h3>
            <div class="list-group list-group-flush text-start">
              <button
                type="button"
                class="list-group-item list-group-item-action fw-bold"
                aria-current="true"
                @click="selectCategory = ''"
                :class="{ active: selectCategory === '' }"
              >
                <i class="bi bi-house-heart me-2"></i>
                全部商品
              </button>
              <button
                v-for="item in categories"
                :key="`category-${item}`"
                type="button"
                class="list-group-item list-group-item-action fw-bold"
                :class="{ active: item === selectCategory }"
                @click="selectCategory = item"
              >
                <i class="bi bi-house-heart me-2"></i>
                只想喝{{ item }}
              </button>
            </div>
          </div>
          <div class="dropdown d-block d-md-none w-100">
            <button
              class="btn btn-secondary dropdown-toggle w-100 fw-bold"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              商品系列
            </button>
            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  @click="selectCategory = ''"
                  :class="{ active: selectCategory === '' }"
                  class="dropdown-item fw-bold"
                  type="button"
                >
                  <i class="bi bi-house-heart me-2"></i>全部商品
                </button>
              </li>
              <li>
                <button
                  v-for="item in categories"
                  :key="item"
                  :class="{ active: item === selectCategory }"
                  @click="selectCategory = item"
                  class="dropdown-item fw-bold"
                  type="button"
                >
                  <i class="bi bi-house-heart me-2"></i>只想喝{{ item }}
                </button>
              </li>
            </ul>
          </div>
          <div class="input-group mt-4 mb-3">
            <input
              type="text"
              class="form-control border border-primary border-2 rounded-0"
              placeholder="請輸入搜尋商品"
              v-model="search"
            />
          </div>
        </div>
        <template v-if="search">
          <div class="col-lg-9">
            <div class="mb-3">
              <div class="fs-5 d-flex align-items-center">
                以下為您顯示 <span class="fs-4 text-primary fw-bold px-2">{{ search }}</span> 的結果
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ms-2"
                  @click="cancelSearch()"
                >
                  <i class="bi bi-x-circle pe-1"></i>取消搜尋
                </button>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div class="col mb-4" v-for="item in searchProducts" :key="item.id">
                <div class="card product-card w-100 h-100">
                  <RouterLink :to="`/product/${item.id}`">
                    <div class="product-img cursor-pointer" @click="getProduct(item.id)">
                      <img
                        :src="item.imageUrl"
                        class="card-img-top object-fit-cover"
                        alt="productImages"
                      />
                      <span
                        class="seemore-text d-flex justify-content-center align-items-center text-white fw-bold"
                      >
                        <i class="bi bi-search pe-1"></i>
                        查看更多
                      </span>
                    </div>
                    <div class="card-body p-3">
                      <div class="d-flex justify-content-start text-primary fw-bold">
                        <p><i class="bi bi-house-heart me-2"></i>只想喝{{ item.category }}</p>
                      </div>
                      <h5 class="card-title fw-bolder text-primary mb-3">{{ item.title }}</h5>
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="fs-5 text-secondary" v-if="!item.price">
                          NT${{ $format.currency(item.origin_price) }}
                        </div>
                        <del class="fs-6 text-secondary" v-if="item.price"
                          >NT${{ $format.currency(item.origin_price) }}</del
                        >
                        <div class="fs-5 text-primary fw-bold" v-if="item.price">
                          NT${{ $format.currency(item.price) }}
                        </div>
                      </div>
                    </div>
                  </RouterLink>
                  <div class="card-footer border-0 bg-transparent pt-0 pb-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary w-100"
                      :class="{ disabled: isDone === item.id }"
                      @click="addCart(item.id, qty)"
                    >
                      <i class="bi bi-cart-fill"></i>
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="searchProducts.length === 0" class="col text-center mt-5">
              <h2 class="fw-bolder">查無商品</h2>
              <i class="bi bi-bag-x fs-1"></i>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="col-lg-9">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div class="col mb-4" v-for="item in filterProducts" :key="item.id">
                <div class="card product-card w-100 h-100">
                  <RouterLink :to="`/product/${item.id}`">
                    <div class="product-img cursor-pointer" @click="getProduct(item.id)">
                      <img
                        :src="item.imageUrl"
                        class="card-img-top object-fit-cover"
                        alt="productImages"
                      />
                      <span
                        class="seemore-text d-flex justify-content-center align-items-center text-white fw-bold"
                      >
                        <i class="bi bi-search pe-1"></i>
                        查看更多
                      </span>
                    </div>
                    <div class="card-body p-3">
                      <div class="d-flex justify-content-start text-primary fw-bold">
                        <p><i class="bi bi-house-heart me-2"></i>只想喝{{ item.category }}</p>
                      </div>
                      <h5 class="card-title fw-bolder text-primary mb-3">{{ item.title }}</h5>
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="fs-5 text-secondary" v-if="!item.price">
                          NT${{ $format.currency(item.origin_price) }}
                        </div>
                        <del class="fs-6 text-secondary" v-if="item.price"
                          >NT${{ $format.currency(item.origin_price) }}</del
                        >
                        <div class="fs-5 text-primary fw-bold" v-if="item.price">
                          NT${{ $format.currency(item.price) }}
                        </div>
                      </div>
                    </div>
                  </RouterLink>
                  <div class="card-footer border-0 bg-transparent pt-0 pb-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary w-100"
                      :class="{ disabled: isDone === item.id }"
                      @click="addCart(item.id, qty)"
                    >
                      <i class="bi bi-cart-fill"></i>
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import { inject, ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import VueLoading from '@/components/VueLoading.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ShowNotification from '@/shared/swal'
import { useRoute, useRouter } from 'vue-router'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    VueLoading,
    FooterComponent
  },
  setup() {
    const axios = inject('$axios')
    const store = useCartStore()
    const { isDone } = storeToRefs(store)
    const { addCart } = store
    const route = useRoute()
    const router = useRouter()
    const products = ref([])
    const search = ref('')
    const categories = ref([])
    const selectCategory = ref('')
    const isLoading = ref(false)
    const id = ref('')

    function getProducts() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/products/all`
      search.value = ''
      isLoading.value = true
      axios
        .get(url)
        .then((response) => {
          if (response.data.success) {
            products.value = response.data.products
            getCategories()
            const { productCategory } = route.params
            if (productCategory) {
              selectCategory.value = productCategory
            }
          }
        })
        .catch((error) => {
          const message = error.response?.data?.message || '發生錯誤，請稍後再試'
          ShowNotification('error', message)
        })
        .finally(() => {
          isLoading.value = false
        })
    }
    function getCategories() {
      const categorySet = new Set()
      products.value.forEach((item) => {
        categorySet.add(item.category)
      })
      categories.value = [...categorySet]
    }
    function cancelSearch() {
      search.value = ''
      selectCategory.value = ''
      getProducts()
    }
    function getProduct(id) {
      router.push(`/product/${id}`)
    }
    const filterProducts = computed(() => {
      return products.value.filter((item) => item.category.match(selectCategory.value))
    })
    const searchProducts = computed(() => {
      return products.value.filter((item) => {
        return item.title.match(search.value)
      })
    })

    onMounted(() => {
      getProducts()
    })
    return {
      products,
      search,
      categories,
      selectCategory,
      isLoading,
      id,
      cancelSearch,
      getCategories,
      getProduct,
      getProducts,
      filterProducts,
      searchProducts,
      isDone,
      addCart
    }
  }
}
</script>
