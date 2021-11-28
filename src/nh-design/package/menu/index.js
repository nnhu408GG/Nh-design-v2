import Vue from "vue"
import Menu from "./menu.vue"
import MenuItem from "./menu-item.vue"
import SubMenu from "./submenu.vue"
import "./css/menu.css"
import "./css/menu-item.css"
import "./css/submenu.css"

Menu.install = () => {
    Vue.component("nh-menu", Menu);
    Vue.component("nh-menu-item", MenuItem);
    Vue.component("nh-submenu", SubMenu);
}

export default Menu