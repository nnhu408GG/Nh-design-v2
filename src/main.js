import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// import * as NhDesign from "./nh-design";
// Vue.use(NhDesign);

import { select, menu, collapse } from "./nh-design";
Vue.use(select);
Vue.use(menu);
Vue.use(collapse);

// import { Button, Card, Menu } from "./nh-design";
// Vue.use(Button);
// Vue.use(Card);
// Vue.use(Menu);

import router from "./router";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
