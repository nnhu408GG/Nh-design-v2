import Vue from "vue";
import nhCollapse from "./collapse.vue";

nhCollapse.install = () => {
  Vue.component(nhCollapse.name, nhCollapse);
};

export default nhCollapse;
