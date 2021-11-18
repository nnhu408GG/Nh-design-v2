import button from "./package/button"
import card from "./package/card"

import Vue from "vue"

const Nhdesign = {
    install() {
        Vue.component('nh-button', button)
        Vue.component('nh-btn', button)

        Vue.component('nh-card', card)
    }
}

export default Nhdesign