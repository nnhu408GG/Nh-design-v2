import Vue from "vue";
import nhMenu from "./menu.vue";
import nhMenuitem from "./menu-item.vue";
import nhSubmenu from "./submenu.vue";

nhMenu.install = () => {
  Vue.component(nhMenu.name, nhMenu);
  Vue.component(nhMenuitem.name, nhMenuitem);
  Vue.component(nhSubmenu.name, nhSubmenu);
};

export default nhMenu;
