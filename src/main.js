import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { Button, Card } from './nh-design'
Vue.use(Button);
Vue.use(Card);

new Vue({
  render: h => h(App),
}).$mount('#app')
