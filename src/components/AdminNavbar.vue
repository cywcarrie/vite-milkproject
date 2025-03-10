<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><h1 class="logo text-primary fs-2 mb-0 fw-bolder me-3">
          <i class="bi bi-house-heart pe-2"></i>Fun<span class="text-primary">nie</span>
        </h1></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/admin/products" class="nav-link text-primary fw-bold admin-navbar-hover"
            >產品</RouterLink
          >
          <RouterLink to="/admin/orders" class="nav-link text-primary fw-bold admin-navbar-hover"
            >訂單</RouterLink
          >
          <RouterLink to="/admin/coupons" class="nav-link text-primary fw-bold admin-navbar-hover"
            >優惠券</RouterLink
          >
          <a href="#" @click="logout" class="nav-link text-primary fw-bold admin-navbar-hover"
            >登出</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import ShowNotification from '@/shared/swal'
import { useRouter } from 'vue-router'
import axios from 'axios'

const { VITE_APP_API } = import.meta.env

export default {
  setup() {
    const user = ref({})
    const router = useRouter()

    function logout() {
      const api = `${VITE_APP_API}logout`
      axios
        .post(api, user.value)
        .then((response) => {
          if (response.data.success) {
            ShowNotification('success', '登出成功')
            router.push('/login')
          } else {
            ShowNotification('error', '登出失敗')
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    }
    return {
      logout
    }
  }
}
</script>
