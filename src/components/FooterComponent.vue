<template>
  <section class="bg-white">
    <div class="container">
      <footer class="py-3 my-4 border-top">
        <ul class="nav justify-content-center mb-3">
          <li class="nav-item">
            <a class="text-primary hover-nav px-2" href="#" @click.prevent=""
              ><i class="bi bi-facebook footer-icon-size"></i
            ></a>
          </li>
          <li class="nav-item ms-3">
            <a class="text-primary hover-nav px-2" href="#" @click.prevent=""
              ><i class="bi bi-github footer-icon-size"></i
            ></a>
          </li>
          <li class="nav-item ms-3">
            <a
              class="text-primary hover-nav px-2"
              href="#"
              @click.prevent="goToLogin"
              title="管理員登入"
              ><i class="bi bi-person-circle footer-icon-size"></i
            ></a>
          </li>
        </ul>
        <p class="text-center text-body-secondary">本網站僅供個人練習使用</p>
      </footer>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    function goToLogin() {
      router.push('/login')
    }
    return {
      goToLogin
    }
  }
}
</script>
