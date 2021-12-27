import Vue from "vue";
import select from "./select.vue";
import option from "./option.vue";

select.install = () => {
  Vue.component(select.name, select);
  Vue.component(option.name, option);
};

export default select;
