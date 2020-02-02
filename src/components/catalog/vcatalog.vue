<template>
  <v-container class="mt-12">
    <v-app-bar dark app>
      <v-toolbar-title>Entligen</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="red--text" dark :to="{name: 'cart', params: {cartproduct: getCarts}}" text>
        <h2>Cart: {{getCarts.length}}</h2>
      </v-btn>
    </v-app-bar>
    <div></div>

    <v-layout>
      <v-flex>
        <vcatalogitem @addTCart="newCart" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import vcatalogitem from "./vcatalogitem";

export default {
  components: {
    vcatalogitem
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addtocart"]),
    newCart(product) {
      this.addtocart(product);
    }
  },
  computed: {
    ...mapGetters(["getCarts"])
  }
};
</script>

<style lang="scss" scoped>
</style>