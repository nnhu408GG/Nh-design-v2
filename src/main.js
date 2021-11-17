import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Nhdesign from './nh-design'
Vue.use(Nhdesign)

new Vue({
  render: h => h(App),
}).$mount('#app')
