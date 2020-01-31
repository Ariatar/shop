<template>
  <v-container>
    <v-flex offset-lg12>
      <div>
        <v-btn :to="{name: 'cart', params: {cartproduct: getCarts}}" class="ml-12">
          <h2 class="mr-2">Cart:</h2>
          {{getCarts.length}}
          <v-icon class="red--text">mdi-heart</v-icon>
        </v-btn>
      </div>
    </v-flex>

    <v-layout>
      <v-flex>
        <vcatalogitem @addTCart="newCart" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import vcatalogitem from "@/components/vcatalogitem.vue";

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