import axios from "axios";
export default {
  actions: {
    async getproductsFromApi({ commit }) {
      return await axios
        .get("http://localhost:3000/products")
        .then(products => {
          commit("setProducstToState", products.data);
          return products;
        })
        .catch(error => error);
    },
    addtocart({ commit }, product) {
      commit("setCart", product);
    },
    removeFromCart({ commit }, index) {
      commit("delProduct", index);
    },
  },
};
