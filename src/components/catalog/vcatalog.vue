<template>
  <v-container fluid class="mt-12">
    <v-app-bar dark app>
      <v-toolbar-title>Entligen</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="red--text" dark :to="{name: 'cart', params: {cartproduct: getCarts}}" text>
        <h2>Cart: {{getCarts.length}}</h2>
      </v-btn>
    </v-app-bar>
    <vSelect :items="items" />

    <v-layout>
      <v-flex>
        <vcatalogitem
          v-for="product in getProducts"
          :key="product.article"
          :product_data="product"
          @addTCart="newCart"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vSelect from "../v-select";
import vcatalogitem from "./vcatalogitem";

export default {
  data() {
    return {
      items: ["all", "Sakura", "Asuna", "Nezuko"],
      selected: ""
    };
  },
  components: {
    vcatalogitem,
    vSelect
  },
  methods: {
    sorted(title) {},
    ...mapActions(["addtocart", "getproductsFromApi"]),
    newCart(product) {
      this.addtocart(product);
    }
  },
  mounted() {
    this.getproductsFromApi();
  },
  computed: {
    ...mapGetters(["getCarts", "getProducts"])
  }
};
</script>

<style lang="scss" scoped>
</style>