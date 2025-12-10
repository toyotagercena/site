import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vue-nani-spinner/dist/index.css' // кругляха типа загрузка
import MarqueeText from 'vue-marquee-text-component'
// import VueYandexMetrika from 'vue-yandex-metrika'
// import VueAnalytics from 'vue-analytics'

Vue.component('marquee-text', MarqueeText)

Vue.use(
  Vuetify,
  // VueYandexMetrika, {
  //     id: 47110302,
  //     router: router,
  //     env: process.env.NODE_ENV === 'production',
  //     // env: process.env.NODE_ENV,
  //     // debug: true
  // },
  // VueAnalytics, {
  //   id: 'GTM-5NGQVCW',
  //   router
  // },
  {
  theme: {
    srgPrimary: '#1C211B',
    srgSecondary: '#151C15',
    srgSuccess: '#425227',
    srgInfo: '#secondary',
    srgAccent: '#5D5853',
    srgWarning: '#FC8C2C',
    srgError: '#913c3c',
  },
  iconfont: 'fa'
})

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')