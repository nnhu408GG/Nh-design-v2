import Vue from "vue";
import nhMenu from "./menu.vue";
import nhMenuitem from "./menuitem.vue";

nhMenu.install = () => {
  Vue.component(nhMenu.name, nhMenu);
  Vue.component(nhMenuitem.name, nhMenuitem);
};

export default nhMenu;
