import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import {
  Carousel,
  CarouselItem,
  Poptip
} from 'iview'
import 'iview/dist/styles/iview.css'
import '@/common/style/reset.less'

import { imgs } from "@/common/img.js";
Vue.prototype.$imgs = imgs

Vue.config.productionTip = false

Vue.component('Carousel', Carousel)
Vue.component('CarouselItem', CarouselItem)
Vue.component('Poptip', Poptip)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
