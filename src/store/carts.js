import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
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
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  actions: {
    async getproductsFromApi({ commit }) {
      return await axios
        .get("http://localhost:3000/products")
        .then(res => {
          commit("setProducstToState", res.data);
          return res;
        })
        .catch(error => error);
    },
    addtocart({ commit }, product) {
      commit("setCart", product);
    },
    removeFromCart({ commit }, index) {
      commit("delProduct", index);
    },
    decrement({ commit }, index) {
      commit("DECREMENT", index);
    },
    increment({ commit }, index) {
      commit("INCREMENT", index);
    },
  },

  getters: {
    getProducts: state => state.products,
    getCarts: state => state.cart,
  },
};
