import button from "./package/button"

import Vue from "vue"

const Nhdesign = {
    install() {
        Vue.component('nh-button', button)
        Vue.component('nh-btn', button)
    }
}

export default Nhdesign