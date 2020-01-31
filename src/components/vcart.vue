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
    />
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
    ...mapActions(["removeFromCart"]),
    deleteCart(index) {
      this.removeFromCart(index);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>