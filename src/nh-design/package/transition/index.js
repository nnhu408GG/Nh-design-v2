import Vue from "vue";
import nhTransition from "./transition.vue";

nhTransition.install = () => {
  Vue.component(nhTransition.name, nhTransition);
};

export default nhTransition;
