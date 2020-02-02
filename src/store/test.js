import axios from "axios";

export default {
  state: {
    products: [],
    cart: [],
  },
  actions: {
    async getproductsfromAPi({ commit }, products) {
      try {
        await axios.get("url").then(res => {
          commit("setProducts", res.data);
          return res.data;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    setProducts: (state, products) => (state.products = rpoducts),
  },
  getters: {
    getProducts: state => state.products,
    getCart: state => state.cart,
  },
};
