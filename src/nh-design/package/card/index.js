import Vue from "vue";
import Card from "./card.vue";
import "./css/index.css"

Card.install = () => {
    Vue.component('nh-card', Card);
}

export default Card