import Vue from "vue"
import Button from "./button.vue"
import "./css/index.css"

Button.install = () => {
    Vue.component("nh-button", Button);
    Vue.component("nh-btn", Button);
}

export default Button