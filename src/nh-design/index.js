import button from "./package/button";
import card from "./package/card";
import menu from "./package/menu";
import submenu from "./package/menu/submenu.vue";
import menuItem from "./package/menu/menu-item.vue";

import Vue from "vue";

const Nhdesign = {
  install() {
    Vue.component("nh-button", button);
    Vue.component("nh-btn", button);

    Vue.component("nh-card", card);

    Vue.component("nh-menu", menu);
    Vue.component("nh-submenu", submenu);
    Vue.component("nh-menu-item", menuItem);

    const bus = new Vue()
  },
};

export default Nhdesign;
