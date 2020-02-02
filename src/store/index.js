import Vue from "vue";
import Vuex from "vuex";

import carts from "./carts";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carts,
  },
});
