import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'
import Swal from 'sweetalert2'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    isLoading: false,
    carts: [],
    total: 0,
    final_total: 0,
    cart: {},
    isDone: ''
  }),
  actions: {
    getCart () {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/cart`
      this.isLoading = true
      axios.get(url).then((response) => {
        this.isLoading = false
        this.cart = response.data.data
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
    addCart (id, qty = 1) {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/cart`
      this.isDone = id
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      axios.post(url, { data: cart })
        .then((response) => {
          this.isLoading = false
          if (response.data.success){
            this.getCart ()
            this.isDone = ''
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '已加入購物車',
              timer: 1500,
              toast: true,
              color: "#14213d",
              background: "#fef8e2",
              showConfirmButton: false,
              timerProgressBar: true
            })
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: '加入購物車失敗',
              timer: 1500,
              toast: true,
              color: "#14213d",
              background: "#fef8e2",
              showConfirmButton: false,
              timerProgressBar: true
            })
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
    updateCart (item) {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data: cart }).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.getCart()
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
    removeCartItem (id) {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/cart/${id}`
      this.isLoading = true
      axios.delete(url).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.getCart()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '已從購物車移除',
            timer: 1500,
            toast: true,
            color: "#14213d",
            background: "#fef8e2",
            showConfirmButton: false,
            timerProgressBar: true
          })
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '從購物車移除失敗',
            timer: 1500,
            toast: true,
            color: "#14213d",
            background: "#fef8e2",
            showConfirmButton: false,
            timerProgressBar: true
          })
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
    deleteAllCart() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/carts`;
      this.isLoading = true
      axios.delete(url)
        .then((response) => {
          this.isLoading = false;
          if (response.data.success) {
            this.getCart()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '已清空購物車',
              timer: 1500,
              toast: true,
              color: "#14213d",
              background: "#fef8e2",
              showConfirmButton: false,
              timerProgressBar: true
            })
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: '清空購物車失敗',
              timer: 1500,
              toast: true,
              color: "#14213d",
              background: "#fef8e2",
              showConfirmButton: false,
              timerProgressBar: true
            })
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
    getProduct (id) {
      router.push(`/product/${id}`)
    },
    addCouponCode (coupon_code) {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/coupon`
      const coupon = {
        code: coupon_code
      }
      this.isLoading = true
      axios.post(url, { data: coupon }).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.getCart ()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '已套用優惠劵',
            timer: 1500,
            toast: true,
            color: "#14213d",
            background: "#fef8e2",
            showConfirmButton: false,
            timerProgressBar: true
          })
        } else{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '套用優惠劵失敗',
            timer: 1500,
            toast: true,
            color: "#14213d",
            background: "#fef8e2",
            showConfirmButton: false,
            timerProgressBar: true
          })
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
    copyCouponCode () {
      const copyText = document.createElement('input')
      const text = 'funniemilk'
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      navigator.clipboard.writeText(text)
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '優惠碼複製成功',
          timer: 1500,
          toast: true,
          color: "#14213d",
          background: "#fef8e2",
          showConfirmButton: false,
          timerProgressBar: true
        })
      })
    }
  }
})
