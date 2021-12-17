import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/components/graffitiBoard.vue"),
      children: [
        {
          path: "/show-button",
          component: () => import("@/view/show-button.vue"),
        },
        {
          path: "/show-select",
          component: () => import("@/view/show-select.vue"),
        },
      ],
    },
  ],
});

export default router;
