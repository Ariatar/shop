<template>
  <v-container>
    <v-flex offset-lg12>
      <v-btn :to="{name: 'catalog'}" text small>
        Back to Catalog
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-flex>

    <h1 class="text-center">Cart</h1>
    <div
      class="display-3 text-center italic"
      v-if="!cartproduct.length"
    >There are no item in the Cart...</div>
    <vcartitem
      @deleteCart="deleteCart(index)"
      :cartproductitems="item"
      v-for="(item, index) in cartproduct"
      :key="item.article"
      @decrement="decrementItem(index)"
      @increment="incrementItem(index)"
    />

    <v-card v-if="cartproduct.length" elevation="12" class="red text-center" height="150">
      <v-flex offset-md4>
        <v-card-title class="display-3">Total Costnade:</v-card-title>
      </v-flex>
      <v-flex>
        <v-card-subtitle class="display-1 white--text">{{totalCostnade}}</v-card-subtitle>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
import vcartitem from "@/components/vcartitem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    cartproduct: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    vcartitem
  },
  methods: {
    ...mapActions(["removeFromCart", "decrement", "increment"]),
    deleteCart(index) {
      this.removeFromCart(index);
    },
    decrementItem(index) {
      this.decrement(index);
    },
    incrementItem(index) {
      this.increment(index);
    }
  },
  computed: {
    totalCostnade() {
      let result = [];
      for (let item of this.cartproduct) {
        result.push(item.price * item.quantity);
      }
      result = result.reduce((sum, el) => sum + el, 0);
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>