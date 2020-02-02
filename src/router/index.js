import Vue from "vue";
import VueRouter from "vue-router";
import vcart from "@/components/cart/vcart.vue";
import vcatalog from "@/components/catalog/vcatalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "catalog",
    component: vcatalog,
  },
  {
    path: "/cart",
    name: "cart",
    component: vcart,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
