import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import {Nhdesign, Button} from './nh-design'
Vue.use(Nhdesign)
Vue.use(Button)

new Vue({
  render: h => h(App),
}).$mount('#app')
