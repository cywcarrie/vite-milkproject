import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})

setLocale('zh_TW')

app.use(createPinia())
app.use(router)
app.provide('$axios', axios)
app.component('LoadingVue', Loading)
app.component('FormVue', Form)
app.component('FieldVue', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
