import Vue from "vue";
import menu from "./menu.vue";
import menuitem from "./menu-item.vue";
import submenu from "./submenu.vue";

menu.install = () => {
  Vue.component(menu.name, menu);
  Vue.component(menuitem.name, menuitem);
  Vue.component("nh-menu-item", menuitem);
  Vue.component(submenu.name, submenu);
};

export default menu;
