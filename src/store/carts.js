import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions/actions";

Vue.use(Vuex);

export default {
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    setProducstToState: (state, products) => (state.products = products),
    // setCart: (state, product) => state.cart.push(product),
    setCart: (state, product) => {
      if (state.cart.length) {
        let isExist = false;
        state.cart.map(function(item) {
          if (item.article === product.article) {
            isExist = true;
            item.quantity++;
          }
        });
        if (!isExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    delProduct: (state, index) => state.cart.splice(index, 1),
  },
  actions: {},
  getters: {
    getProducts: state => state.products,
    getCarts: state => state.cart,
  },
};
